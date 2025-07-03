import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const info = await prisma.contactInfo.findUnique({ where: { id: 'main' } });
  return NextResponse.json(info || {});
} 