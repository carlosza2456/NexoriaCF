-- CreateTable
CREATE TABLE "ContactInfo" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT 'main',
    "direccion" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "horario" TEXT NOT NULL,
    "whatsapp" TEXT,
    "telegram" TEXT,
    "linkedin" TEXT,
    "facebook" TEXT,
    "twitter" TEXT,
    "instagram" TEXT
);
