import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/authOptions';
import { supabase } from '@/lib/supabase';

// GET /api/admin/home
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }
    // Obtener home_content y team_members
    const { data: homeContent, error } = await supabase
      .from('home_content')
      .select('*, team_members(*)')
      .limit(1)
      .single();
    if (error) throw error;
    return NextResponse.json(homeContent);
  } catch (error) {
    console.error('Error al obtener el contenido de la página principal:', error);
    return NextResponse.json(
      { error: 'Error al obtener el contenido' },
      { status: 500 }
    );
  }
}

// POST /api/admin/home
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }
    const data = await request.json();
    const { heroTitle, heroSubtitle, teamMembers } = data;
    // Crear home_content
    const { data: homeContent, error } = await supabase
      .from('home_content')
      .insert({ hero_title: heroTitle, hero_subtitle: heroSubtitle })
      .select()
      .single();
    if (error) throw error;
    // Crear team_members
    if (teamMembers && teamMembers.length > 0) {
      await Promise.all(
        teamMembers.map((member: any) =>
          supabase.from('team_members').insert({
            ...member,
            home_content_id: homeContent.id
          })
        )
      );
    }
    // Obtener home_content actualizado
    const { data: updated, error: error2 } = await supabase
      .from('home_content')
      .select('*, team_members(*)')
      .eq('id', homeContent.id)
      .single();
    if (error2) throw error2;
    return NextResponse.json(updated);
  } catch (error) {
    console.error('Error al crear el contenido de la página principal:', error);
    return NextResponse.json(
      { error: 'Error al crear el contenido' },
      { status: 500 }
    );
  }
}

// PUT /api/admin/home
export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }
    const data = await request.json();
    const { id, heroTitle, heroSubtitle, teamMembers } = data;
    // Eliminar miembros existentes
    await supabase.from('team_members').delete().eq('home_content_id', id);
    // Actualizar home_content
    const { data: homeContent, error } = await supabase
      .from('home_content')
      .update({ hero_title: heroTitle, hero_subtitle: heroSubtitle })
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    // Crear nuevos miembros
    if (teamMembers && teamMembers.length > 0) {
      await Promise.all(
        teamMembers.map((member: any) =>
          supabase.from('team_members').insert({
            ...member,
            home_content_id: id
          })
        )
      );
    }
    // Obtener home_content actualizado
    const { data: updated, error: error2 } = await supabase
      .from('home_content')
      .select('*, team_members(*)')
      .eq('id', id)
      .single();
    if (error2) throw error2;
    return NextResponse.json(updated);
  } catch (error) {
    console.error('Error al actualizar el contenido de la página principal:', error);
    return NextResponse.json(
      { error: 'Error al actualizar el contenido' },
      { status: 500 }
    );
  }
} 