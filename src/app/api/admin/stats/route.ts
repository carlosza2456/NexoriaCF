import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/app/api/auth/authOptions';

interface DailyStats {
  date: Date;
  views: number;
}

interface PageViewGroup {
  path: string;
  _count: {
    path: number;
  };
}

// GET /api/admin/stats
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    // Obtener conteos
    const [messages, services, posts] = await Promise.all([
      prisma.message.count(),
      prisma.service.count(),
      prisma.post.count(),
    ]);

    // Obtener visitas de los últimos 7 días
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);

    const dailyStats = await prisma.dailyStats.findMany({
      where: {
        date: {
          gte: sevenDaysAgo,
          lte: today,
        },
      },
      orderBy: {
        date: 'asc',
      },
    });

    // Asegurarse de que tenemos datos para todos los días
    const recentVisits = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      date.setHours(0, 0, 0, 0);
      
      const stats = dailyStats.find(
        (stat: DailyStats) => stat.date.toISOString().split('T')[0] === date.toISOString().split('T')[0]
      );
      
      return {
        date: date.toISOString().split('T')[0],
        count: stats?.views || 0,
      };
    }).reverse();

    // Obtener páginas más visitadas
    const pageViews = await prisma.pageView.groupBy({
      by: ['path'],
      _count: {
        path: true,
      },
      orderBy: {
        _count: {
          path: 'desc',
        },
      },
      take: 5,
    });

    const popularPages = pageViews.map((view: PageViewGroup) => ({
      path: view.path,
      views: view._count.path,
    }));

    // Calcular total de visitas
    const totalVisits = await prisma.pageView.count();

    return NextResponse.json({
      totalVisits,
      totalMessages: messages,
      totalServices: services,
      totalPosts: posts,
      recentVisits,
      popularPages,
    });
  } catch (error) {
    console.error('Error al obtener estadísticas:', error);
    return NextResponse.json(
      { error: 'Error al obtener estadísticas' },
      { status: 500 }
    );
  }
} 