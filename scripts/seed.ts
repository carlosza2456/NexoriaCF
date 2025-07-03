import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  try {
    // Crear usuario administrador
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await prisma.user.create({
      data: {
        email: 'admin@nexoria.com',
        password: hashedPassword,
        name: 'Administrador',
        role: 'ADMIN',
      },
    });

    console.log('✅ Base de datos inicializada correctamente');
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 