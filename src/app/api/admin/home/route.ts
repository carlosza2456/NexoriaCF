import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/app/api/auth/authOptions';

// GET /api/admin/home
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const homeContent = await prisma.homeContent.findFirst({
      include: {
        teamMembers: true,
      },
    });

    return NextResponse.json(homeContent);
  } catch (error) {
    console.error('Error al obtener el contenido de la página principal:', error);
    return NextResponse.json(
      { error: 'Error al obtener el contenido' },
      { status: 500 }
    );
  }
}

// POST /api/admin/home
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const data = await request.json();
    const { heroTitle, heroSubtitle, teamMembers } = data;

    const homeContent = await prisma.homeContent.create({
      data: {
        heroTitle,
        heroSubtitle,
        teamMembers: {
          create: teamMembers,
        },
      },
      include: {
        teamMembers: true,
      },
    });

    return NextResponse.json(homeContent);
  } catch (error) {
    console.error('Error al crear el contenido de la página principal:', error);
    return NextResponse.json(
      { error: 'Error al crear el contenido' },
      { status: 500 }
    );
  }
}

// PUT /api/admin/home
export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const data = await request.json();
    const { id, heroTitle, heroSubtitle, teamMembers } = data;

    // Primero eliminamos los miembros del equipo existentes
    await prisma.teamMember.deleteMany({
      where: {
        homeContentId: id,
      },
    });

    // Luego actualizamos el contenido principal y creamos los nuevos miembros
    const homeContent = await prisma.homeContent.update({
      where: { id },
      data: {
        heroTitle,
        heroSubtitle,
        teamMembers: {
          create: teamMembers,
        },
      },
      include: {
        teamMembers: true,
      },
    });

    return NextResponse.json(homeContent);
  } catch (error) {
    console.error('Error al actualizar el contenido de la página principal:', error);
    return NextResponse.json(
      { error: 'Error al actualizar el contenido' },
      { status: 500 }
    );
  }
} 