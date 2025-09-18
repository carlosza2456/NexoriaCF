// Configuración para diferentes entornos
export const config = {
  // Determinar si estamos en producción
  isProduction: process.env.NODE_ENV === 'production',
  
  // Configuración de base de datos
  database: {
    // Usar Supabase en producción, Prisma/SQLite en desarrollo
    useSupabase: process.env.NODE_ENV === 'production' || process.env.FORCE_SUPABASE === 'true',
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  
  // Configuración de NextAuth
  auth: {
    url: process.env.NEXTAUTH_URL || 'http://localhost:3000',
    secret: process.env.NEXTAUTH_SECRET,
  },
  
  // Configuración de la aplicación
  app: {
    name: 'Nexoria',
    description: 'Sistema de gestión empresarial',
  }
}

// Función para verificar si las variables de entorno están configuradas
export function validateEnvironment() {
  const requiredVars = [
    'NEXT_PUBLIC_SUPABASE_URL',
    'NEXT_PUBLIC_SUPABASE_ANON_KEY',
    'NEXTAUTH_SECRET'
  ]

  const missingVars = requiredVars.filter(varName => !process.env[varName])
  
  if (missingVars.length > 0) {
    console.warn('⚠️ Variables de entorno faltantes:', missingVars)
    console.warn('Asegúrate de crear un archivo .env.local con estas variables')
    return false
  }
  
  return true
} 