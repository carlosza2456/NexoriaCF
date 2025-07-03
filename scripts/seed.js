const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  try {
    // Borrar todos los usuarios existentes
    await prisma.user.deleteMany();

    // Crear usuario administrador nuevo
    const hashedPassword = await bcrypt.hash('admin240112', 10);
    await prisma.user.create({
      data: {
        email: 'czaadmin@nexoria.com',
        password: hashedPassword,
        name: 'Administrador',
        role: 'ADMIN',
      },
    });
    console.log('✅ Usuario admin creado correctamente');
  } catch (error) {
    console.error('Error al crear el usuario admin:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 