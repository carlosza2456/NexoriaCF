import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, company, interest, message } = data;

    // Validación básica
    if (!name || !email || !interest) {
      return NextResponse.json({ error: 'Nombre, email e interés son campos requeridos.' }, { status: 400 });
    }

    const newMessage = await prisma.message.create({
      data: {
        name,
        email,
        phone,
        company,
        interest,
        message,
      },
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