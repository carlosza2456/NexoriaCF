-- Configuración completa de Supabase para Nexoria
-- Ejecuta este script en el SQL Editor de Supabase

-- 1. Crear tabla contact_info
CREATE TABLE IF NOT EXISTS contact_info (
  id TEXT PRIMARY KEY DEFAULT 'main',
  direccion TEXT NOT NULL,
  telefono TEXT NOT NULL,
  correo TEXT NOT NULL,
  horario TEXT NOT NULL,
  whatsapp TEXT,
  telegram TEXT,
  linkedin TEXT,
  facebook TEXT,
  twitter TEXT,
  instagram TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 2. Crear tabla messages
CREATE TABLE IF NOT EXISTS messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  interest TEXT NOT NULL,
  message TEXT,
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 3. Crear tabla services
CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL,
  benefits TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 4. Insertar datos de ejemplo en contact_info
INSERT INTO contact_info (id, direccion, telefono, correo, horario, whatsapp, linkedin) VALUES 
('main', 'Av. Insurgentes Sur 123, Col. Del Valle, CDMX', '+52 55 1234-5678', 'contacto@nexoria.com', 'Lunes a Viernes 9:00 AM - 6:00 PM', '+52 55 9876-5432', 'https://linkedin.com/company/nexoria')
ON CONFLICT (id) DO UPDATE SET
  direccion = EXCLUDED.direccion,
  telefono = EXCLUDED.telefono,
  correo = EXCLUDED.correo,
  horario = EXCLUDED.horario,
  whatsapp = EXCLUDED.whatsapp,
  linkedin = EXCLUDED.linkedin,
  updated_at = NOW();

-- 5. Insertar servicios de ejemplo
INSERT INTO services (title, description, icon, benefits) VALUES 
('Derecho Civil', 'Contratos, arrendamientos, demandas y resolución de conflictos civiles.', '⚖️', 'Contratos personalizados|Resolución de conflictos|Asesoría en arrendamientos|Demandas civiles'),
('Derecho Penal', 'Defensa penal, delitos, denuncias y asesoría en procesos penales.', '🛡️', 'Defensa penal integral|Asesoría en denuncias|Recursos de apelación|Libertad bajo caución'),
('Derecho Laboral', 'Despidos, conflictos obrero-patronales y asesoría laboral integral.', '👥', 'Despidos injustificados|Conflictos laborales|Pensiones y prestaciones|Auditorías laborales'),
('Derecho Mercantil', 'Sociedades, cobranza, juicios mercantiles y derecho comercial.', '🏢', 'Constitución de sociedades|Cobranza extrajudicial|Juicios mercantiles|Contratos comerciales'),
('Derecho Familiar', 'Divorcios, pensiones, custodia y asuntos familiares.', '👨‍👩‍👧‍👦', 'Divorcios express|Custodia y patria potestad|Pensiones alimenticias|Sucesiones'),
('Derecho Corporativo', 'Constitución, compliance, marcas y asesoría corporativa.', '🎯', 'Constitución de empresas|Compliance legal|Marcas y patentes|Fusión y adquisición')
ON CONFLICT DO NOTHING;

-- 6. Habilitar Row Level Security (RLS)
ALTER TABLE contact_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- 7. Crear políticas de seguridad para contact_info
DROP POLICY IF EXISTS "Allow public read access" ON contact_info;
CREATE POLICY "Allow public read access" ON contact_info
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow authenticated update" ON contact_info;
CREATE POLICY "Allow authenticated update" ON contact_info
  FOR UPDATE USING (auth.role() = 'authenticated');

-- 8. Crear políticas de seguridad para messages
DROP POLICY IF EXISTS "Allow public insert" ON messages;
CREATE POLICY "Allow public insert" ON messages
  FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow authenticated read" ON messages;
CREATE POLICY "Allow authenticated read" ON messages
  FOR SELECT USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Allow authenticated update" ON messages;
CREATE POLICY "Allow authenticated update" ON messages
  FOR UPDATE USING (auth.role() = 'authenticated');

-- 9. Crear políticas de seguridad para services
DROP POLICY IF EXISTS "Allow public read access" ON services;
CREATE POLICY "Allow public read access" ON services
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow authenticated all" ON services;
CREATE POLICY "Allow authenticated all" ON services
  FOR ALL USING (auth.role() = 'authenticated');

-- 10. Crear índices para mejor rendimiento
CREATE INDEX IF NOT EXISTS idx_messages_created_at ON messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_messages_read ON messages(read);
CREATE INDEX IF NOT EXISTS idx_services_created_at ON services(created_at DESC);

-- 11. Verificar que las tablas se crearon correctamente
SELECT 'contact_info' as table_name, COUNT(*) as row_count FROM contact_info
UNION ALL
SELECT 'messages' as table_name, COUNT(*) as row_count FROM messages
UNION ALL
SELECT 'services' as table_name, COUNT(*) as row_count FROM services;
