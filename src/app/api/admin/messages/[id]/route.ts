<<<<<<< HEAD
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
=======
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/app/api/auth/authOptions';

// PUT /api/admin/messages/[id]
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const data = await request.json();
    const { read } = data;

    const message = await prisma.message.update({
      where: { id: params.id },
      data: { read }
    });

    return NextResponse.json(message);
  } catch (error) {
    console.error('Error al actualizar el mensaje:', error);
    return NextResponse.json(
      { error: 'Error al actualizar el mensaje' },
>>>>>>> 3135e19f11caed1ff4a74a4642263c0541890125
      { status: 500 }
    );
  }
}

// DELETE /api/admin/messages/[id]
export async function DELETE(
<<<<<<< HEAD
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
=======
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    await prisma.message.delete({
      where: { id: params.id }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error al eliminar el mensaje:', error);
    return NextResponse.json(
      { error: 'Error al eliminar el mensaje' },
>>>>>>> 3135e19f11caed1ff4a74a4642263c0541890125
      { status: 500 }
    );
  }
} 