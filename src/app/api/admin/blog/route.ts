import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/app/api/auth/authOptions';

// GET /api/admin/blog
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error al obtener los posts:', error);
    return NextResponse.json(
      { error: 'Error al obtener los posts' },
      { status: 500 }
    );
  }
}

// POST /api/admin/blog
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const data = await request.json();
    const { title, content, excerpt, slug, image, category, published } = data;

    // Verificar si ya existe un post con el mismo slug
    const existingPost = await prisma.post.findUnique({
      where: { slug }
    });

    if (existingPost) {
      return NextResponse.json(
        { error: 'Ya existe un post con esta URL amigable' },
        { status: 400 }
      );
    }

    const post = await prisma.post.create({
      data: {
        title,
        content,
        excerpt,
        slug,
        image,
        category,
        published
      }
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error al crear el post:', error);
    return NextResponse.json(
      { error: 'Error al crear el post' },
      { status: 500 }
    );
  }
}

// PUT /api/admin/blog
export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const { posts } = await request.json();

    // Eliminar todos los posts existentes
    await prisma.post.deleteMany();

    // Crear los nuevos posts
    const createdPosts = await Promise.all(
      posts.map((post: any) =>
        prisma.post.create({
          data: {
            title: post.title,
            content: post.content,
            excerpt: post.excerpt,
            slug: post.slug,
            image: post.image || null,
            category: post.category,
            published: post.published
          }
        })
      )
    );

    return NextResponse.json(createdPosts);
  } catch (error) {
    console.error('Error al actualizar los posts:', error);
    return NextResponse.json(
      { error: 'Error al actualizar los posts' },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/blog
export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const { id } = await request.json();

    await prisma.post.delete({
      where: { id }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error al eliminar el post:', error);
    return NextResponse.json(
      { error: 'Error al eliminar el post' },
      { status: 500 }
    );
  }
} 