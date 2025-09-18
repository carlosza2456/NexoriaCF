import { NextResponse } from 'next/server';
import { messagesApi } from '@/lib/supabase-utils';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, company, interest, message } = data;

    // Validación básica
    if (!name || !email || !interest) {
      return NextResponse.json({ error: 'Nombre, email e interés son campos requeridos.' }, { status: 400 });
    }

    const newMessage = await messagesApi.create({
      name,
      email,
      phone,
      company,
      interest,
      message,
      read: false
    });

    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    console.error('Error al crear el mensaje:', error);
    return NextResponse.json(
      { error: 'No se pudo guardar el mensaje.' },
      { status: 500 }
    );
  }
} 