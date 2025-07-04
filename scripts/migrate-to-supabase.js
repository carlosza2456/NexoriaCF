const { PrismaClient } = require('@prisma/client');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const prisma = new PrismaClient();
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function migrateData() {
  console.log('🚀 Iniciando migración de datos a Supabase...');

  try {
    // Migrar usuarios
    console.log('📦 Migrando usuarios...');
    const users = await prisma.user.findMany();
    for (const user of users) {
      const { error } = await supabase
        .from('users')
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          email_verified: user.emailVerified,
          image: user.image,
          password: user.password,
          role: user.role,
          created_at: user.createdAt || new Date().toISOString(),
          updated_at: user.updatedAt || new Date().toISOString()
        });
      
      if (error) {
        console.error(`Error migrando usuario ${user.email}:`, error);
      } else {
        console.log(`✅ Usuario migrado: ${user.email}`);
      }
    }

    // Migrar servicios
    console.log('📦 Migrando servicios...');
    const services = await prisma.service.findMany();
    for (const service of services) {
      const { error } = await supabase
        .from('services')
        .insert({
          id: service.id,
          title: service.title,
          description: service.description,
          icon: service.icon,
          benefits: service.benefits,
          created_at: service.createdAt.toISOString(),
          updated_at: service.updatedAt.toISOString()
        });
      
      if (error) {
        console.error(`Error migrando servicio ${service.title}:`, error);
      } else {
        console.log(`✅ Servicio migrado: ${service.title}`);
      }
    }

    // Migrar posts
    console.log('📦 Migrando posts...');
    const posts = await prisma.post.findMany();
    for (const post of posts) {
      const { error } = await supabase
        .from('posts')
        .insert({
          id: post.id,
          title: post.title,
          content: post.content,
          excerpt: post.excerpt,
          slug: post.slug,
          image: post.image,
          category: post.category,
          published: post.published,
          created_at: post.createdAt.toISOString(),
          updated_at: post.updatedAt.toISOString()
        });
      
      if (error) {
        console.error(`Error migrando post ${post.title}:`, error);
      } else {
        console.log(`✅ Post migrado: ${post.title}`);
      }
    }

    // Migrar mensajes
    console.log('📦 Migrando mensajes...');
    const messages = await prisma.message.findMany();
    for (const message of messages) {
      const { error } = await supabase
        .from('messages')
        .insert({
          id: message.id,
          name: message.name,
          email: message.email,
          phone: message.phone,
          company: message.company,
          interest: message.interest,
          message: message.message,
          read: message.read,
          created_at: message.createdAt.toISOString()
        });
      
      if (error) {
        console.error(`Error migrando mensaje de ${message.name}:`, error);
      } else {
        console.log(`✅ Mensaje migrado: ${message.name}`);
      }
    }

    // Migrar información de contacto
    console.log('📦 Migrando información de contacto...');
    const contactInfo = await prisma.contactInfo.findFirst();
    if (contactInfo) {
      const { error } = await supabase
        .from('contact_info')
        .insert({
          id: contactInfo.id,
          direccion: contactInfo.direccion,
          telefono: contactInfo.telefono,
          correo: contactInfo.correo,
          horario: contactInfo.horario,
          whatsapp: contactInfo.whatsapp,
          telegram: contactInfo.telegram,
          linkedin: contactInfo.linkedin,
          facebook: contactInfo.facebook,
          twitter: contactInfo.twitter,
          instagram: contactInfo.instagram
        });
      
      if (error) {
        console.error('Error migrando información de contacto:', error);
      } else {
        console.log('✅ Información de contacto migrada');
      }
    }

    // Migrar contenido de la página principal
    console.log('📦 Migrando contenido de la página principal...');
    const homeContent = await prisma.homeContent.findFirst({
      include: {
        teamMembers: true
      }
    });
    
    if (homeContent) {
      const { data: newHomeContent, error: homeError } = await supabase
        .from('home_content')
        .insert({
          id: homeContent.id,
          hero_title: homeContent.heroTitle,
          hero_subtitle: homeContent.heroSubtitle,
          created_at: homeContent.createdAt.toISOString(),
          updated_at: homeContent.updatedAt.toISOString()
        })
        .select()
        .single();
      
      if (homeError) {
        console.error('Error migrando contenido de la página principal:', homeError);
      } else {
        console.log('✅ Contenido de la página principal migrado');
        
        // Migrar miembros del equipo
        for (const member of homeContent.teamMembers) {
          const { error: memberError } = await supabase
            .from('team_members')
            .insert({
              id: member.id,
              name: member.name,
              position: member.position,
              image: member.image,
              home_content_id: newHomeContent.id,
              created_at: member.createdAt.toISOString(),
              updated_at: member.updatedAt.toISOString()
            });
          
          if (memberError) {
            console.error(`Error migrando miembro del equipo ${member.name}:`, memberError);
          } else {
            console.log(`✅ Miembro del equipo migrado: ${member.name}`);
          }
        }
      }
    }

    console.log('🎉 ¡Migración completada exitosamente!');

  } catch (error) {
    console.error('❌ Error durante la migración:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Ejecutar migración
migrateData(); 