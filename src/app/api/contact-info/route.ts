import { NextResponse } from 'next/server';
import { contactInfoApi } from '@/lib/supabase-utils';

export const dynamic = 'force-dynamic';

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
} 