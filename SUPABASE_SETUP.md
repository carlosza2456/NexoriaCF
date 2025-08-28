# Configuración de Supabase para Nexoria

## 1. Crear proyecto en Supabase

1. Ve a [supabase.com](https://supabase.com)
2. Crea una cuenta o inicia sesión
3. Crea un nuevo proyecto
4. Anota la URL del proyecto y la anon key

## 2. Configurar variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto con:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key_aqui
```

## 3. Crear las tablas en Supabase

### Tabla: contact_info
```sql
CREATE TABLE contact_info (
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

-- Insertar datos de ejemplo
INSERT INTO contact_info (id, direccion, telefono, correo, horario) VALUES 
('main', 'Av. Insurgentes Sur 123, CDMX', '+52 55 1234-5678', 'contacto@nexoria.com', 'Lun-Vie 9:00-18:00');
```

### Tabla: messages
```sql
CREATE TABLE messages (
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
```

### Tabla: services
```sql
CREATE TABLE services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL,
  benefits TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);
```

## 4. Configurar políticas de seguridad (RLS)

### Para contact_info:
```sql
ALTER TABLE contact_info ENABLE ROW LEVEL SECURITY;

-- Permitir lectura pública
CREATE POLICY "Allow public read access" ON contact_info
  FOR SELECT USING (true);

-- Permitir actualización solo a usuarios autenticados
CREATE POLICY "Allow authenticated update" ON contact_info
  FOR UPDATE USING (auth.role() = 'authenticated');
```

### Para messages:
```sql
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Permitir inserción pública
CREATE POLICY "Allow public insert" ON messages
  FOR INSERT WITH CHECK (true);

-- Permitir lectura solo a usuarios autenticados
CREATE POLICY "Allow authenticated read" ON messages
  FOR SELECT USING (auth.role() = 'authenticated');
```

### Para services:
```sql
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Permitir lectura pública
CREATE POLICY "Allow public read access" ON services
  FOR SELECT USING (true);

-- Permitir operaciones CRUD solo a usuarios autenticados
CREATE POLICY "Allow authenticated all" ON services
  FOR ALL USING (auth.role() = 'authenticated');
```

## 5. Verificar la conexión

1. Reinicia el servidor de desarrollo
2. Abre la consola del navegador
3. Envía un formulario de contacto
4. Verifica que no haya errores de conexión

## 6. Solución de problemas comunes

### Error: "Invalid API key"
- Verifica que la anon key esté correcta
- Asegúrate de que el proyecto esté activo

### Error: "Table does not exist"
- Verifica que las tablas estén creadas
- Revisa los nombres de las tablas en el código

### Error: "RLS policy violation"
- Verifica que las políticas de seguridad estén configuradas
- Asegúrate de que los permisos sean correctos

## 7. Datos de prueba

Para probar el sistema, puedes insertar algunos servicios de ejemplo:

```sql
INSERT INTO services (title, description, icon, benefits) VALUES 
('Derecho Civil', 'Contratos, arrendamientos, demandas y resolución de conflictos civiles.', '⚖️', 'Contratos personalizados|Resolución de conflictos|Asesoría en arrendamientos|Demandas civiles'),
('Derecho Penal', 'Defensa penal, delitos, denuncias y asesoría en procesos penales.', '🛡️', 'Defensa penal integral|Asesoría en denuncias|Recursos de apelación|Libertad bajo caución');
``` 