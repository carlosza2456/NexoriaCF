import { NextResponse } from 'next/server';
<<<<<<< HEAD
import { contactInfoApi } from '@/lib/supabase-utils';

export async function GET() {
  try {
    const contactInfo = await contactInfoApi.get();
    return NextResponse.json(contactInfo);
  } catch (error) {
    console.error('Error al obtener información de contacto:', error);
    return NextResponse.json(
      { error: 'No se pudo obtener la información de contacto.' },
      { status: 500 }
    );
  }
=======
import { prisma } from '@/lib/prisma';

export async function GET() {
  const info = await prisma.contactInfo.findUnique({ where: { id: 'main' } });
  return NextResponse.json(info || {});
>>>>>>> 3135e19f11caed1ff4a74a4642263c0541890125
} 