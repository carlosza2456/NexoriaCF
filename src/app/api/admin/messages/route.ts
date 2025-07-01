import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/app/api/auth/authOptions';

// GET /api/admin/messages
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const messages = await prisma.message.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(messages);
  } catch (error) {
    console.error('Error al obtener los mensajes:', error);
    return NextResponse.json(
      { error: 'Error al obtener los mensajes' },
      { status: 500 }
    );
  }
}

// POST /api/admin/messages
export async function POST(request: Request) {
  try {
    const { name, email, message, interest } = await request.json();
    const newMessage = await prisma.message.create({
      data: {
        name,
        email,
        message,
        interest,
        read: false
      }
    });

    return NextResponse.json(newMessage);
  } catch (error) {
    console.error('Error al crear el mensaje:', error);
    return NextResponse.json(
      { error: 'Error al crear el mensaje' },
      { status: 500 }
    );
  }
} 