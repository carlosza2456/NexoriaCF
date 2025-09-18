import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { PrismaClient } from '@prisma/client';
import { authOptions } from '@/app/api/auth/authOptions';

const prisma = new PrismaClient();

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse(JSON.stringify({ error: 'No autorizado' }), {
      status: 401,
    });
  }

  try {
    const { title, content, slug, image, published } = await request.json();

    const post = await prisma.post.update({
      where: {
        id: params.id,
      },
      data: {
        title,
        content,
        slug,
        image,
        published,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: 'Error interno del servidor' }), {
      status: 500,
    });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse(JSON.stringify({ error: 'No autorizado' }), {
      status: 401,
    });
  }

  try {
    await prisma.post.delete({
      where: {
        id: params.id,
      },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: 'Error interno del servidor' }), {
      status: 500,
    });
  }
} 