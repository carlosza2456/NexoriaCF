const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@nexoria.com'; // Correo para el administrador
  const password = 'admin'; // Contraseña para el administrador
  const name = 'Admin Nexoria';
  const role = 'ADMIN';

  // Hashear la contraseña
  const hashedPassword = await bcrypt.hash(password, 10);

  // Buscar si el usuario ya existe
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    // Si existe, actualizar su contraseña y rol
    const updatedUser = await prisma.user.update({
      where: { email },
      data: {
        password: hashedPassword,
        role: role,
        name: name,
      },
    });
    console.log(`Usuario '${updatedUser.email}' actualizado con éxito. Su nueva contraseña es '${password}'.`);
  } else {
    // Si no existe, crear un nuevo usuario
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role,
      },
    });
    console.log(`Usuario '${newUser.email}' creado con éxito. Su contraseña es '${password}'.`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 