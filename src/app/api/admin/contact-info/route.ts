import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/authOptions';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }
  const info = await prisma.contactInfo.findUnique({ where: { id: 'main' } });
  return NextResponse.json(info || {});
}

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }
  const data = await request.json();
  const info = await prisma.contactInfo.upsert({
    where: { id: 'main' },
    update: data,
    create: { id: 'main', ...data },
  });
  return NextResponse.json(info);
} 