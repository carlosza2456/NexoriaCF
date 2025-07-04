import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/authOptions';
import { messagesApi } from '@/lib/supabase-utils';

// GET /api/admin/messages
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }
    const messages = await messagesApi.getAll();
    return NextResponse.json(messages);
  } catch (error) {
<<<<<<< HEAD
    console.error('Error al obtener mensajes:', error);
    return NextResponse.json(
      { error: 'No se pudieron obtener los mensajes.' },
=======
    console.error('Error al obtener los mensajes:', error);
    return NextResponse.json(
      { error: 'Error al obtener los mensajes' },
>>>>>>> 3135e19f11caed1ff4a74a4642263c0541890125
      { status: 500 }
    );
  }
}

// POST /api/admin/messages
export async function POST(request: Request) {
  try {
    const { name, email, message, interest } = await request.json();
    const newMessage = await messagesApi.create({
      name,
      email,
      message,
      interest,
      read: false
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