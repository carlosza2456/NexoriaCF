import { NextRequest, NextResponse } from 'next/server';
import { messagesApi } from '@/lib/supabase-utils';

// PUT /api/admin/messages/[id]
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const data = await request.json();
    
    const updatedMessage = await messagesApi.update(id, data);
    return NextResponse.json(updatedMessage);
  } catch (error) {
    console.error('Error al actualizar mensaje:', error);
    return NextResponse.json(
      { error: 'No se pudo actualizar el mensaje.' },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/messages/[id]
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    await messagesApi.delete(id);
    return NextResponse.json({ message: 'Mensaje eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar mensaje:', error);
    return NextResponse.json(
      { error: 'No se pudo eliminar el mensaje.' },
      { status: 500 }
    );
  }
} 