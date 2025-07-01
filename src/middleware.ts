import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

// Rutas que no queremos trackear
const EXCLUDED_PATHS = [
  '/_next',
  '/api',
  '/static',
  '/favicon.ico',
  '/admin'
];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // No trackear rutas excluidas
  if (EXCLUDED_PATHS.some(prefix => path.startsWith(prefix))) {
    return NextResponse.next();
  }

  try {
    // Registrar la visita
    await prisma.pageView.create({
      data: {
        path,
        userAgent: request.headers.get('user-agent') || undefined,
        ip: request.ip || undefined,
      },
    });

    // Actualizar estadísticas diarias
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    await prisma.dailyStats.upsert({
      where: {
        date: today,
      },
      update: {
        views: {
          increment: 1,
        },
        visitors: {
          increment: 1, // Esto es una simplificación, idealmente deberíamos contar visitantes únicos
        },
      },
      create: {
        date: today,
        views: 1,
        visitors: 1,
      },
    });
  } catch (error) {
    console.error('Error al registrar la visita:', error);
  }

  return NextResponse.next();
}

// Configurar el middleware para que se ejecute en todas las rutas
export const config = {
  matcher: '/:path*',
}; 