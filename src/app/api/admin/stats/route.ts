import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/authOptions';
import { supabase } from '@/lib/supabase';

// GET /api/admin/stats
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }
    // Obtener conteos
    const [{ count: messages }, { count: services }, { count: posts }] = await Promise.all([
      supabase.from('messages').select('*', { count: 'exact', head: true }),
      supabase.from('services').select('*', { count: 'exact', head: true }),
      supabase.from('posts').select('*', { count: 'exact', head: true })
    ]);
    // Obtener visitas de los últimos 7 días
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);
    const { data: dailyStats, error: statsError } = await supabase
      .from('daily_stats')
      .select('*')
      .gte('date', sevenDaysAgo.toISOString().split('T')[0])
      .lte('date', today.toISOString().split('T')[0])
      .order('date', { ascending: true });
    if (statsError) throw statsError;
    // Asegurarse de que tenemos datos para todos los días
    const recentVisits = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      date.setHours(0, 0, 0, 0);
      const stats = dailyStats.find((stat) => stat.date.split('T')[0] === date.toISOString().split('T')[0]);
      return {
        date: date.toISOString().split('T')[0],
        count: stats?.views || 0,
      };
    }).reverse();
    // Obtener páginas más visitadas
    const { data: pageViews, error: pageViewsError } = await supabase
      .from('page_views')
      .select('path')
      .order('timestamp', { ascending: false });
    if (pageViewsError) throw pageViewsError;
    // Contar las visitas por path
    const pageCount: Record<string, number> = {};
    pageViews.forEach((view) => {
      pageCount[view.path] = (pageCount[view.path] || 0) + 1;
    });
    const popularPages = Object.entries(pageCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([path, views]) => ({ path, views }));
    // Calcular total de visitas
    const totalVisits = pageViews.length;
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