'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';

const servicios = [
  {
    title: 'Diseño de KPIs y Tableros de Gestión',
    description: 'Definición de métricas estratégicas y operativas con tableros ejecutivos en tiempo real.',
    icon: '📊',
    url: '/servicios/kpis-tableros',
    features: ['Métricas estratégicas personalizadas', 'Tableros ejecutivos en tiempo real', 'Indicadores de desempeño', 'Análisis de datos avanzado']
  },
  {
    title: 'Compliance Corporativo y Jurídico',
    description: 'Evaluación de riesgos legales, fiscales, laborales y regulatorios con políticas internas.',
    icon: '⚖️',
    url: '/servicios/compliance',
    features: ['Evaluación de riesgos legales', 'Políticas internas y códigos de ética', 'Capacitación en gobernanza', 'Programas anticorrupción']
  },
  {
    title: 'Optimización de Procesos',
    description: 'Mapeo y rediseño de procesos críticos eliminando duplicidades y fallas operativas.',
    icon: '🔄',
    url: '/servicios/optimizacion',
    features: ['Mapeo de procesos críticos', 'Eliminación de duplicidades', 'Controles internos', 'Estándares de calidad']
  },
  {
    title: 'Cultura de Mejora y Liderazgo',
    description: 'Desarrollo de líderes operativos con herramientas de gestión diaria y enfoque Lean.',
    icon: '👥',
    url: '/servicios/liderazgo',
    features: ['Desarrollo de líderes operativos', 'Herramientas de gestión diaria', 'Rituales de mejora continua', 'Enfoque Lean']
  },
  {
    title: 'Asesoría Jurídica Empresarial',
    description: 'Derecho corporativo, laboral, mercantil y fiscal para empresas en México',
    icon: '🏢',
    url: '/servicios/asesoria-juridica',
    features: ['Derecho corporativo y laboral', 'Derecho mercantil y fiscal', 'Prevención de riesgos tributarios', 'Estrategias de planeación']
  },
  {
    title: 'Creación y Constitución de Empresas',
    description: 'Constitución de sociedades en México y Estados Unidos con todos los trámites legales.',
    icon: '🚀',
    url: '/servicios/constitucion',
    features: ['Constitución en México y EE.UU.', 'Trámites fiscales y bancarios', 'Registro de marcas', 'Acompañamiento legal completo']
  }
];

export default function Servicios() {
  return (
    <>
      <Head>
        <title>Servicios Especializados - Nexoria Consulting Firm Toluca y CDMX</title>
        <meta name="description" content="Servicios integrales de consultoría estratégica en Toluca Estado de México y Ciudad de México: KPIs y tableros de gestión, compliance corporativo, optimización de procesos, cultura de mejora y liderazgo." />
        <meta name="keywords" content="servicios consultoría estratégica Toluca, consultora legal en Toluca, KPIs empresariales CDMX, compliance corporativo Edomex, optimización procesos Ciudad de México, liderazgo empresarial Toluca, Nexoria CDMX" />
      </Head>
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
            Servicios Especializados
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Soluciones integrales que combinan estrategia, operación y aspectos legales para empresas en Toluca Estado de México y Ciudad de México
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
              ¿Listo para transformar tu empresa?
            </h2>
            <p className="text-xl text-white mb-8">
              Agenda tu diagnóstico de precisión y descubre cómo podemos ayudarte a crecer de manera rentable, ordenada y con total seguridad legal
            </p>
            <Link
              href="/contacto"
              className="inline-block bg-white text-[#FF6A00] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Agenda tu diagnóstico de precisión
            </Link>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
} 