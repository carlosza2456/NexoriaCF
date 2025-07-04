# Configuración de Supabase para Nexoria

## 🚀 Pasos para conectar tu aplicación con Supabase

### 1. Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase_aqui
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase_aqui

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=tu_secreto_de_nextauth_aqui

# Opcional: Forzar uso de Supabase en desarrollo
FORCE_SUPABASE=true
```

### 2. Obtener Credenciales de Supabase

1. Ve a tu proyecto en [Supabase Dashboard](https://supabase.com/dashboard)
2. Ve a **Settings > API**
3. Copia la **Project URL** y **anon public** key
4. Pega estos valores en tu archivo `.env.local`

### 3. Crear las Tablas en Supabase

1. Ve a **SQL Editor** en tu dashboard de Supabase
2. Copia y ejecuta el contenido del archivo `supabase-schema.sql`
3. Esto creará todas las tablas necesarias con los índices y triggers apropiados

### 4. Migrar Datos Existentes (Opcional)

Si tienes datos en tu base de datos SQLite local que quieres migrar:

```bash
npm run migrate:supabase
```

### 5. Configurar NextAuth para Supabase

Para usar Supabase en lugar de Prisma para autenticación:

1. Renombra `src/app/api/auth/authOptions.ts` a `authOptions-prisma.ts`
2. Renombra `src/app/api/auth/authOptions-supabase.ts` a `authOptions.ts`
3. Actualiza las importaciones en `src/app/api/auth/[...nextauth]/route.ts`

### 6. Usar las Utilidades de Supabase

```typescript
import { servicesApi, postsApi, messagesApi } from '@/lib/supabase-utils'

// Ejemplo de uso
const services = await servicesApi.getAll()
const posts = await postsApi.getPublished()
const unreadMessages = await messagesApi.getUnread()
```

## 📁 Archivos Creados/Modificados

- `src/lib/supabase.ts` - Cliente de Supabase
- `src/lib/supabase-utils.ts` - Utilidades para trabajar con Supabase
- `src/lib/config.ts` - Configuración de entornos
- `supabase-schema.sql` - Esquema de base de datos
- `scripts/migrate-to-supabase.js` - Script de migración
- `SUPABASE_SETUP.md` - Esta documentación

## 🔄 Migración Gradual

Puedes migrar gradualmente de Prisma a Supabase:

1. **Desarrollo**: Usa Prisma/SQLite
2. **Producción**: Usa Supabase
3. **Forzar Supabase**: Establece `FORCE_SUPABASE=true` en `.env.local`

## 🛠️ Comandos Útiles

```bash
# Migrar datos a Supabase
npm run migrate:supabase

# Verificar configuración
npm run dev

# Construir para producción
npm run build
```

## 🔒 Configuración de Seguridad

### Row Level Security (RLS)

Para mayor seguridad, puedes habilitar RLS en Supabase:

```sql
-- Ejemplo para la tabla users
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Política para usuarios autenticados
CREATE POLICY "Users can view own profile" ON users
  FOR SELECT USING (auth.uid()::text = id);
```

### Variables de Entorno en Producción

Asegúrate de configurar las variables de entorno en tu plataforma de despliegue:

- **Vercel**: Ve a Settings > Environment Variables
- **Netlify**: Ve a Site Settings > Environment Variables
- **Railway**: Ve a Variables

## 🐛 Solución de Problemas

### Error: "Missing environment variables"
- Verifica que `.env.local` existe y tiene las variables correctas
- Reinicia el servidor de desarrollo después de crear el archivo

### Error: "Invalid API key"
- Verifica que la URL y clave de Supabase son correctas
- Asegúrate de usar la clave "anon public", no la "service_role"

### Error: "Table does not exist"
- Ejecuta el script SQL en Supabase SQL Editor
- Verifica que las tablas se crearon correctamente

## 📞 Soporte

Si tienes problemas con la configuración:

1. Verifica que todas las variables de entorno están configuradas
2. Asegúrate de que el esquema SQL se ejecutó correctamente
3. Revisa los logs del servidor para errores específicos
4. Verifica la conectividad con Supabase desde el dashboard 