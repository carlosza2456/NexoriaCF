'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const servicios = [
  {
    title: 'Derecho Civil',
    description: 'Contratos, arrendamientos, demandas y resolución de conflictos civiles.',
    icon: '⚖️',
    url: '/servicios/derecho-civil',
    features: ['Contratos y acuerdos', 'Arrendamientos', 'Demandas civiles', 'Responsabilidad civil']
  },
  {
    title: 'Derecho Penal',
    description: 'Defensa penal, delitos, denuncias y asesoría en procesos penales.',
    icon: '🛡️',
    url: '/servicios/derecho-penal',
    features: ['Defensa penal', 'Delitos menores', 'Denuncias', 'Asesoría en procesos']
  },
  {
    title: 'Derecho Laboral',
    description: 'Despidos, conflictos obrero-patronales y asesoría laboral integral.',
    icon: '👥',
    url: '/servicios/derecho-laboral',
    features: ['Despidos injustificados', 'Conflictos laborales', 'Pensiones', 'Derechos del trabajador']
  },
  {
    title: 'Derecho Mercantil',
    description: 'Sociedades, cobranza, juicios mercantiles y derecho comercial.',
    icon: '🏢',
    url: '/servicios/derecho-mercantil',
    features: ['Constitución de sociedades', 'Cobranza judicial', 'Juicios mercantiles', 'Contratos comerciales']
  },
  {
    title: 'Derecho Familiar',
    description: 'Divorcios, pensiones, custodia y asuntos familiares.',
    icon: '👨‍👩‍👧‍👦',
    url: '/servicios/derecho-familiar',
    features: ['Divorcios', 'Pensiones alimenticias', 'Custodia', 'Sucesiones']
  },
  {
    title: 'Derecho Corporativo',
    description: 'Constitución, compliance, marcas y asesoría corporativa.',
    icon: '🎯',
    url: '/servicios/derecho-corporativo',
    features: ['Constitución empresarial', 'Compliance legal', 'Marcas y patentes', 'Fusión y adquisición']
  }
];

export default function Servicios() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero de la página */}
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Nuestros Servicios Legales
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
                          Soluciones integrales para todas tus necesidades legales en Estado de México y Ciudad de México
          </motion.p>
        </div>
      </section>

      {/* Grid de servicios */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {servicios.map((servicio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 p-8"
              >
                <div className="text-6xl mb-6 text-center">{servicio.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-4 text-center">
                  {servicio.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  {servicio.description}
                </p>
                
                {/* Características del servicio */}
                <ul className="space-y-2 mb-6">
                  {servicio.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-[#FF6A00] mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="text-center">
                  <Link
                    href={servicio.url}
                    className="inline-block bg-[#FF6A00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105"
                  >
                    Conocer más
                  </Link>
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
              ¿Necesitas asesoría legal?
            </h2>
            <p className="text-xl text-white mb-8">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte
            </p>
            <Link
              href="#contacto"
              className="inline-block bg-white text-[#FF6A00] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Consulta Gratuita
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 