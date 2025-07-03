'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const equipo = [
  {
    nombre: 'Ana García',
    cargo: 'CEO & Fundadora',
    bio: 'Con más de 15 años de experiencia en consultoría estratégica, Ana ha liderado proyectos de transformación en empresas Fortune 500.',
    imagen: '/team/ana.jpg'
  },
  {
    nombre: 'Carlos Rodríguez',
    cargo: 'Director de Estrategia',
    bio: 'Especialista en desarrollo de negocios y planificación estratégica con un historial probado en diferentes industrias.',
    imagen: '/team/carlos.jpg'
  },
  {
    nombre: 'María Sánchez',
    cargo: 'Directora de Innovación',
    bio: 'Experta en transformación digital y tecnologías emergentes, María lidera nuestras iniciativas de innovación.',
    imagen: '/team/maria.jpg'
  }
];

const valores = [
  {
    titulo: 'Excelencia',
    descripcion: 'Nos esforzamos por superar las expectativas en cada proyecto.',
    icono: '⭐'
  },
  {
    titulo: 'Innovación',
    descripcion: 'Buscamos constantemente nuevas formas de resolver desafíos.',
    icono: '💡'
  },
  {
    titulo: 'Integridad',
    descripcion: 'Actuamos con honestidad y transparencia en todo momento.',
    icono: '🤝'
  },
  {
    titulo: 'Compromiso',
    descripcion: 'Nos dedicamos al éxito de nuestros clientes como si fuera el nuestro.',
    icono: '🎯'
  }
];

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-nexoria-black pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-nexoria-orange mb-4">
            ¿Quiénes somos?
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Consultora multidisciplinaria en derecho, logística, negocios, marketing y tecnología. Ayudamos a empresas a crecer con seguridad, eficiencia y visión.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-nexoria-white mb-2">Misión</h2>
            <p className="text-gray-300 text-sm">Impulsar el crecimiento y la transformación de empresas a través de soluciones legales, estratégicas y tecnológicas innovadoras.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-nexoria-white mb-2">Visión</h2>
            <p className="text-gray-300 text-sm">Ser el aliado estratégico preferido de empresas modernas, liderando la innovación y el cambio en Latinoamérica.</p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-nexoria-orange text-center mb-6">Filosofía y Valores</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-nexoria-orange text-white px-4 py-2 rounded-full">Transparencia</span>
            <span className="bg-nexoria-orange text-white px-4 py-2 rounded-full">Confianza</span>
            <span className="bg-nexoria-orange text-white px-4 py-2 rounded-full">Innovación</span>
            <span className="bg-nexoria-orange text-white px-4 py-2 rounded-full">Resultados</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-nexoria-white text-center mb-8">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipo.map((miembro, index) => (
              <motion.div
                key={miembro.nombre}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-800 overflow-hidden border-4 border-nexoria-orange flex items-center justify-center">
                  <span className="text-4xl text-nexoria-orange">👤</span>
                </div>
                <h3 className="text-lg font-semibold text-nexoria-white mb-1">{miembro.nombre}</h3>
                <p className="text-nexoria-orange mb-2 text-sm">{miembro.cargo}</p>
                <p className="text-gray-400 text-xs">{miembro.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="/contacto"
            className="inline-block bg-nexoria-orange text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all"
          >
            Agenda una consulta gratuita
          </a>
        </motion.div>
      </div>
    </div>
  );
} 