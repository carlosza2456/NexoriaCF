'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const equipo = [
  {
    nombre: 'Ana García',
    cargo: 'CEO & Fundadora',
    bio: 'Con más de 15 años de experiencia en derecho civil y mercantil, Ana ha liderado casos exitosos y transformado la manera en que se brinda asesoría legal en México.',
    imagen: '/team/ana.jpg',
    especialidad: 'Derecho Civil y Mercantil'
  },
  {
    nombre: 'Carlos Rodríguez',
    cargo: 'Director Legal',
    bio: 'Especialista en derecho penal y laboral con un historial probado en defensa de derechos y resolución de conflictos complejos.',
    imagen: '/team/carlos.jpg',
    especialidad: 'Derecho Penal y Laboral'
  },
  {
    nombre: 'María Sánchez',
    cargo: 'Directora de Servicios Corporativos',
    bio: 'Experta en derecho corporativo y compliance, María lidera nuestras iniciativas de asesoría empresarial y protección legal.',
    imagen: '/team/maria.jpg',
    especialidad: 'Derecho Corporativo'
  }
];

const valores = [
  {
    titulo: 'Excelencia',
    descripcion: 'Nos esforzamos por superar las expectativas en cada caso legal.',
    icono: '⭐'
  },
  {
    titulo: 'Innovación',
    descripcion: 'Buscamos constantemente nuevas formas de resolver desafíos legales.',
    icono: '💡'
  },
  {
    titulo: 'Integridad',
    descripcion: 'Actuamos con honestidad y transparencia en todo momento.',
    icono: '🤝'
  },
  {
    titulo: 'Compromiso',
    descripcion: 'Nos dedicamos al éxito legal de nuestros clientes como si fuera el nuestro.',
    icono: '🎯'
  }
];

const estadisticas = [
  { numero: '1,200+', descripcion: 'Casos Exitosos' },
  { numero: '98%', descripcion: 'Tasa de Éxito' },
  { numero: '15+', descripcion: 'Años de Experiencia' },
  { numero: '24/7', descripcion: 'Atención Legal' }
];

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Nexoria: Expertos que resuelven
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Somos una firma legal que combina experiencia, tecnología y trato humano para ayudarte a resolver tus temas legales con eficacia, claridad y confianza. Asistimos desde conflictos personales hasta el desarrollo legal completo de empresas y startups.
          </motion.p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-black mb-4">Misión</h2>
              <p className="text-gray-700 leading-relaxed">
                Impulsar el crecimiento y la protección legal de personas y empresas a través de soluciones jurídicas innovadoras, eficientes y accesibles.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-black mb-4">Visión</h2>
              <p className="text-gray-700 leading-relaxed">
                Ser el aliado legal preferido de personas y empresas en México, liderando la innovación en servicios jurídicos y el acceso a la justicia.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black mb-6">Nuestros Valores</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían nuestro trabajo y relación con los clientes
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {valores.map((valor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl mb-4">{valor.icono}</div>
                <h3 className="text-xl font-semibold text-black mb-3">{valor.titulo}</h3>
                <p className="text-gray-600">{valor.descripcion}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Nuestros Números</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Resultados que respaldan nuestra experiencia y compromiso
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {estadisticas.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#FF6A00] mb-2">
                  {stat.numero}
                </div>
                <div className="text-gray-300">{stat.descripcion}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black mb-6">Nuestro Equipo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesionales comprometidos con tu éxito legal
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {equipo.map((miembro, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="h-64 bg-gray-300 flex items-center justify-center">
                  <span className="text-6xl">👨‍💼</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-2">{miembro.nombre}</h3>
                  <p className="text-[#FF6A00] font-semibold mb-2">{miembro.cargo}</p>
                  <p className="text-gray-600 text-sm mb-3">{miembro.especialidad}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{miembro.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#FF6A00]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              ¿Listo para trabajar con nosotros?
            </h2>
            <p className="text-xl text-white mb-8">
              Conoce más sobre nuestros servicios y agenda una consulta gratuita
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/servicios"
                className="inline-block bg-white text-[#FF6A00] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Ver Servicios
              </Link>
              <Link
                href="#contacto"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#FF6A00] transition-all transform hover:scale-105"
              >
                Contactar
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 