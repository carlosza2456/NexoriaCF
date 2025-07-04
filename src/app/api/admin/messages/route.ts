import { NextResponse } from 'next/server';
import { messagesApi } from '@/lib/supabase-utils';

// GET /api/admin/messages
export async function GET() {
  try {
    const messages = await messagesApi.getAll();
    return NextResponse.json(messages);
  } catch (error) {
    console.error('Error al obtener mensajes:', error);
    return NextResponse.json(
      { error: 'No se pudieron obtener los mensajes.' },
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