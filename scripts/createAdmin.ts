import { prisma } from '../src/lib/prisma';
import bcrypt from 'bcryptjs';

async function main() {
  const email = 'czaadmin@nexoria.com';
  const password = 'admin240112';
  const hashedPassword = await bcrypt.hash(password, 10);

  // Eliminar todos los usuarios
  await prisma.user.deleteMany({});

  // Crear el nuevo usuario admin
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      role: 'ADMIN',
      name: 'Administrador',
    },
  });

  console.log('Usuario admin creado:', user);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 