'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';

const equipo = [
  {
    nombre: 'Ana García',
    cargo: 'CEO & Fundadora',
    bio: 'Con más de 15 años de experiencia en consultoría estratégica y derecho corporativo, Ana ha transformado más de 200 empresas aplicando el Método E³ de Nexoria.',
    imagen: '/team/ana.jpg',
    especialidad: 'Estrategia Empresarial y Compliance'
  },
  {
    nombre: 'Carlos Rodríguez',
    cargo: 'Director de Operaciones',
    bio: 'Especialista en optimización de procesos y diseño de KPIs con un historial probado en transformación operativa y mejora continua.',
    imagen: '/team/carlos.jpg',
    especialidad: 'Optimización y KPIs'
  },
  {
    nombre: 'María Sánchez',
    cargo: 'Directora Legal Internacional',
    bio: 'Experta en derecho corporativo internacional y constitución de empresas en México y Estados Unidos, María lidera nuestras iniciativas de expansión internacional.',
    imagen: '/team/maria.jpg',
    especialidad: 'Derecho Corporativo Internacional'
  }
];

const valores = [
  {
    titulo: 'Estrategia Integrada',
    descripcion: 'Unimos estrategia, operación y legalidad en un solo marco de acción.',
    icono: '🎯'
  },
  {
    titulo: 'Datos Inteligentes',
    descripcion: 'Transformamos datos en decisiones inteligentes y medibles.',
    icono: '📊'
  },
  {
    titulo: 'Estructuras Sólidas',
    descripcion: 'Creamos estructuras corporativas sólidas en México y EE.UU.',
    icono: '🏗️'
  },
  {
    titulo: 'Prevención de Riesgos',
    descripcion: 'Prevenimos riesgos legales y regulatorios que frenan el crecimiento.',
    icono: '🛡️'
  }
];

const estadisticas = [
  { numero: '200+', descripcion: 'Empresas Transformadas' },
  { numero: '95%', descripcion: 'Reducción de Pérdidas' },
  { numero: '15+', descripcion: 'Años de Experiencia' },
  { numero: '2', descripcion: 'Países de Operación' }
];

export default function Nosotros() {
  return (
    <>
      <Head>
        <title>Nosotros - Nexoria Consulting Firm Toluca y CDMX</title>
        <meta name="description" content="Conoce nuestro equipo de expertos en consultoría estratégica y el Sistema Nexoria 360. Transformamos empresas en Toluca Estado de México y Ciudad de México con más de 15 años de experiencia." />
        <meta name="keywords" content="equipo Nexoria Toluca, consultora legal en Toluca, consultores estratégicos CDMX, Sistema Nexoria 360, experiencia empresarial Edomex, transformación organizacional Ciudad de México" />
      </Head>
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
            Nexoria Consulting Firm
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Donde la estrategia, la operación y lo legal convergen para impulsar tu negocio en Toluca Estado de México y Ciudad de México. Transformamos la forma en que operan las empresas eliminando pérdidas ocultas, reduciendo riesgos legales y construyendo una base sólida para crecer de manera sostenida.
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
                Transformar la forma en que operan las empresas en Toluca Estado de México y Ciudad de México: eliminamos pérdidas ocultas, reducimos riesgos legales, fortalecemos la estructura corporativa y construimos una base sólida para crecer de manera sostenida.
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
                Ser el socio estratégico preferido de empresas en Toluca Estado de México y Ciudad de México, liderando la convergencia entre estrategia, operación y aspectos legales para impulsar el crecimiento sostenible.
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
            <h2 className="text-4xl font-bold text-black mb-6">Por qué Nexoria es tu socio estratégico</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que nos distinguen y nos hacen únicos en el mercado
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
            <h2 className="text-4xl font-bold mb-6">Nuestros Resultados</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Métricas que respaldan nuestra metodología y compromiso con la transformación empresarial
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
              Profesionales comprometidos con la transformación de tu empresa
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
              ¿Listo para transformar tu empresa?
            </h2>
            <p className="text-xl text-white mb-8">
              Descubre el Sistema Nexoria 360 y agenda tu diagnóstico de precisión
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/servicios"
                className="inline-block bg-white text-[#FF6A00] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Ver Servicios Especializados
              </Link>
              <Link
                href="/contacto"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#FF6A00] transition-all transform hover:scale-105"
              >
                Agenda tu diagnóstico
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
} 