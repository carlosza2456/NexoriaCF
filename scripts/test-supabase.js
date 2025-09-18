const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Error: Variables de entorno de Supabase no configuradas');
  console.error('Asegúrate de crear un archivo .env.local con:');
  console.error('NEXT_PUBLIC_SUPABASE_URL=tu_url_aqui');
  console.error('NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_aqui');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testSupabaseConnection() {
  console.log('🔍 Probando conexión con Supabase...');
  console.log('URL:', supabaseUrl);
  console.log('Clave configurada:', supabaseAnonKey ? '✅' : '❌');

  try {
    // Probar conexión básica
    console.log('\n📡 Probando conexión básica...');
    const { data, error } = await supabase
      .from('users')
      .select('count')
      .limit(1);

    if (error) {
      console.error('❌ Error de conexión:', error.message);
      
      if (error.message.includes('relation "users" does not exist')) {
        console.log('\n💡 Solución: Ejecuta el archivo supabase-schema.sql en el SQL Editor de Supabase');
      }
      
      return false;
    }

    console.log('✅ Conexión exitosa');

    // Probar tablas principales
    const tables = ['users', 'services', 'posts', 'messages', 'contact_info'];
    
    console.log('\n📊 Verificando tablas...');
    for (const table of tables) {
      try {
        const { error: tableError } = await supabase
          .from(table)
          .select('*')
          .limit(1);
        
        if (tableError) {
          console.log(`❌ Tabla ${table}: ${tableError.message}`);
        } else {
          console.log(`✅ Tabla ${table}: OK`);
        }
      } catch (err) {
        console.log(`❌ Tabla ${table}: Error inesperado`);
      }
    }

    // Probar inserción de prueba
    console.log('\n🧪 Probando inserción de prueba...');
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'test123',
      role: 'USER'
    };

    const { data: insertData, error: insertError } = await supabase
      .from('users')
      .insert(testData)
      .select()
      .single();

    if (insertError) {
      console.log('❌ Error en inserción de prueba:', insertError.message);
    } else {
      console.log('✅ Inserción de prueba exitosa');
      
      // Limpiar datos de prueba
      const { error: deleteError } = await supabase
        .from('users')
        .delete()
        .eq('email', 'test@example.com');
      
      if (deleteError) {
        console.log('⚠️ No se pudo limpiar datos de prueba:', deleteError.message);
      } else {
        console.log('✅ Datos de prueba limpiados');
      }
    }

    console.log('\n🎉 ¡Todas las pruebas completadas!');
    console.log('Tu configuración de Supabase está funcionando correctamente.');
    
    return true;

  } catch (error) {
    console.error('❌ Error inesperado:', error);
    return false;
  }
}

// Ejecutar pruebas
testSupabaseConnection()
  .then(success => {
    if (success) {
      console.log('\n🚀 ¡Listo para usar Supabase en tu aplicación!');
    } else {
      console.log('\n🔧 Revisa la configuración y vuelve a intentar.');
    }
    process.exit(success ? 0 : 1);
  })
  .catch(error => {
    console.error('❌ Error fatal:', error);
    process.exit(1);
  }); 