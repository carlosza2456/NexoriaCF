import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/authOptions';
import { servicesApi } from '@/lib/supabase-utils';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string;
  createdAt: Date;
  updatedAt: Date;
}

// GET /api/admin/services
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }
    const services = await servicesApi.getAll();
    // Convertir los beneficios de string a array
    const formattedServices = services.map((service) => ({
      ...service,
      benefits: service.benefits.split('|').filter(Boolean)
    }));
    return NextResponse.json(formattedServices);
  } catch (error) {
    console.error('Error al obtener los servicios:', error);
    return NextResponse.json(
      { error: 'Error al obtener los servicios' },
      { status: 500 }
    );
  }
}

// POST /api/admin/services
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }
    const data = await request.json();
    const { title, description, icon, benefits } = data;
    const service = await servicesApi.create({
      title,
      description,
      icon,
      benefits: benefits.join('|')
    });
    return NextResponse.json({
      ...service,
      benefits: service.benefits.split('|').filter(Boolean)
    });
  } catch (error) {
    console.error('Error al crear el servicio:', error);
    return NextResponse.json(
      { error: 'Error al crear el servicio' },
      { status: 500 }
    );
  }
}

// PUT /api/admin/services
export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }
    const { services } = await request.json();
    // Eliminar todos los servicios existentes
    const all = await servicesApi.getAll();
    await Promise.all(all.map((s) => servicesApi.delete(s.id)));
    // Crear los nuevos servicios
    const createdServices = await Promise.all(
      services.map((service: { title: string; description: string; icon: string; benefits: string[] }) =>
        servicesApi.create({
          title: service.title,
          description: service.description,
          icon: service.icon,
          benefits: service.benefits.join('|')
        })
      )
    );
    // Convertir los beneficios de string a array en la respuesta
    const formattedServices = createdServices.map((service) => ({
      ...service,
      benefits: service.benefits.split('|').filter(Boolean)
    }));
    return NextResponse.json(formattedServices);
  } catch (error) {
    console.error('Error al actualizar los servicios:', error);
    return NextResponse.json(
      { error: 'Error al actualizar los servicios' },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/services
export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }
    const { id } = await request.json();
    await servicesApi.delete(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error al eliminar el servicio:', error);
    return NextResponse.json(
      { error: 'Error al eliminar el servicio' },
      { status: 500 }
    );
  }
} 