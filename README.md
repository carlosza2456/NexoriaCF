# Nexoria - Sitio Web Corporativo

Sitio web profesional para Nexoria, una consultora empresarial, desarrollado con Next.js, TypeScript y TailwindCSS. Incluye un sistema completo de administración para gestionar contenido y mensajes de contacto.

## 🚀 Características

- **Diseño moderno y responsive** con TailwindCSS
- **Sistema de administración** con autenticación segura
- **Formulario de contacto dinámico** conectado a base de datos
- **Gestión de mensajes** desde el dashboard
- **Información de contacto editable** desde el panel de administración
- **Animaciones suaves** con Framer Motion
- **SEO optimizado**
- **Base de datos PostgreSQL** con Prisma ORM

## 🛠️ Tecnologías

- **Frontend:** Next.js 14, TypeScript, TailwindCSS, Framer Motion
- **Backend:** Next.js API Routes, NextAuth.js
- **Base de datos:** PostgreSQL con Prisma ORM
- **Autenticación:** NextAuth.js con credenciales
- **Despliegue:** Vercel

## 📦 Instalación Local

1. **Clona el repositorio:**
```bash
git clone https://github.com/carlosz2407/nexoria.git
cd nexoria
```

2. **Instala las dependencias:**
```bash
npm install
```

3. **Configura las variables de entorno:**
Crea un archivo `.env.local` con:
```env
DATABASE_URL="tu_url_de_postgresql"
NEXTAUTH_SECRET="tu_clave_secreta"
NEXTAUTH_URL="http://localhost:3000"
```

4. **Configura la base de datos:**
```bash
npx prisma db push
npx prisma generate
```

5. **Crea un usuario administrador:**
```bash
npm run db:seed
```

6. **Inicia el servidor de desarrollo:**
```bash
npm run dev
```

7. **Abre [http://localhost:3000](http://localhost:3000)** en tu navegador.

## 🌐 Despliegue en Vercel

### Pasos para desplegar:

1. **Ve a [vercel.com](https://vercel.com)** e inicia sesión con GitHub
2. **Haz clic en "New Project"**
3. **Importa el repositorio:** `carlosz2407/nexoria`
4. **Configura las variables de entorno:**
   - `DATABASE_URL`: URL de tu base de datos PostgreSQL
   - `NEXTAUTH_SECRET`: Clave secreta para NextAuth
   - `NEXTAUTH_URL`: URL de tu sitio (se configura automáticamente)
5. **Haz clic en "Deploy"**

### Base de datos recomendada:
- **Vercel Postgres** (integración nativa)
- **Supabase** (gratuito para proyectos pequeños)
- **PlanetScale** (MySQL compatible)

## 🔐 Acceso al Dashboard

- **URL:** `/admin`
- **Credenciales por defecto:**
  - Email: `admin@nexoria.com`
  - Contraseña: `admin123`

**⚠️ Importante:** Cambia las credenciales por defecto después del primer inicio de sesión.

## 📄 Estructura del Proyecto

```
nexoria/
├── src/
│   ├── app/
│   │   ├── (main)/           # Páginas públicas
│   │   │   ├── page.tsx      # Página principal
│   │   │   ├── contacto/     # Página de contacto
│   │   │   └── layout.tsx
│   │   ├── admin/            # Panel de administración
│   │   │   ├── dashboard/    # Dashboard principal
│   │   │   ├── messages/     # Gestión de mensajes
│   │   │   ├── contact-info/ # Información de contacto
│   │   │   └── login/        # Página de login
│   │   ├── api/              # API Routes
│   │   │   ├── auth/         # Autenticación
│   │   │   ├── contact/      # Formulario de contacto
│   │   │   ├── contact-info/ # Información de contacto
│   │   │   └── admin/        # APIs del dashboard
│   │   └── layout.tsx
│   ├── components/           # Componentes reutilizables
│   ├── lib/                  # Utilidades y configuración
│   └── types/                # Tipos de TypeScript
├── prisma/
│   └── schema.prisma         # Esquema de base de datos
├── public/                   # Archivos estáticos
└── scripts/                  # Scripts de utilidad
```

## 🎨 Características del Dashboard

- **Gestión de mensajes:** Ver, marcar como leído y eliminar mensajes de contacto
- **Información de contacto:** Editar dirección, teléfono, email, horarios y redes sociales
- **Interfaz intuitiva:** Diseño moderno y fácil de usar
- **Autenticación segura:** Sistema de login protegido

## 🔧 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm start`: Inicia el servidor de producción
- `npm run lint`: Ejecuta el linter
- `npm run db:push`: Sincroniza el esquema con la base de datos
- `npm run db:seed`: Crea datos iniciales

## 📱 Responsive Design

El sitio está optimizado para:
- **Móvil** (< 768px)
- **Tablet** (768px - 1024px)
- **Desktop** (> 1024px)

## 🚀 Funcionalidades Principales

### Página Principal
- Hero section con llamada a la acción
- Sección de servicios
- Sección "Contáctanos" con información dinámica
- Footer con enlaces y contacto

### Sistema de Contacto
- Formulario funcional que guarda en base de datos
- Validación de campos
- Mensajes de confirmación
- Gestión desde el dashboard

### Panel de Administración
- Autenticación segura
- Dashboard con estadísticas
- Gestión completa de mensajes
- Edición de información de contacto

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Desarrollador

**Carlos Zendejas** - [carlos.zendejas12@gmail.com](mailto:carlos.zendejas12@gmail.com)

---

**Nexoria** - Transformando ideas en soluciones empresariales 