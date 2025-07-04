import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/authOptions';
import { postsApi } from '@/lib/supabase-utils';

// GET /api/admin/blog
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }
    const posts = await postsApi.getAll();
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
    const existing = await postsApi.getBySlug(slug).catch(() => null);
    if (existing) {
      return NextResponse.json(
        { error: 'Ya existe un post con esta URL amigable' },
        { status: 400 }
      );
    }
    const post = await postsApi.create({
      title,
      content,
      excerpt,
      slug,
      image,
      category,
      published
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
    const all = await postsApi.getAll();
    await Promise.all(all.map((p) => postsApi.delete(p.id)));
    // Crear los nuevos posts
    const createdPosts = await Promise.all(
      posts.map((post: any) =>
        postsApi.create({
          title: post.title,
          content: post.content,
          excerpt: post.excerpt,
          slug: post.slug,
          image: post.image || null,
          category: post.category,
          published: post.published
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
    await postsApi.delete(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error al eliminar el post:', error);
    return NextResponse.json(
      { error: 'Error al eliminar el post' },
      { status: 500 }
    );
  }
} 