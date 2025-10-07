'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServiciosLegales() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#FF6A00] to-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-blue-600 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#FF6A00] to-orange-500 rounded-full mb-8 shadow-2xl">
              <span className="text-5xl">⚖️</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
              Servicios Legales Integrales
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Asesoría estratégica y acompañamiento legal para empresas y personas en constitución de sociedades, derecho civil, mercantil y laboral.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Para Empresas Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-black mb-8 text-center">
              <span className="text-[#FF6A00]">Para Empresas</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: 'Constitución de empresas',
                items: [
                  'Elección de régimen (S.A., S. de R.L., SAPI)',
                  'Elaboración de estatutos',
                  'Protocolización ante notario',
                  'Alta ante SAT y trámites fiscales'
                ],
                icon: '🏢'
              },
              {
                title: 'Derecho Mercantil',
                items: [
                  'Contratos con proveedores y clientes',
                  'Gobierno corporativo y juntas de socios',
                  'Cumplimiento normativo',
                  'Prevención de riesgos comerciales'
                ],
                icon: '📋'
              },
              {
                title: 'Derecho Laboral',
                items: [
                  'Contratación y políticas internas',
                  'Gestión de despidos justificados',
                  'Conciliación laboral',
                  'Defensa ante autoridades laborales'
                ],
                icon: '👔'
              },
              {
                title: 'Derecho Civil',
                items: [
                  'Contratos de arrendamiento',
                  'Garantías y avales',
                  'Responsabilidad civil',
                  'Recuperación de créditos'
                ],
                icon: '📄'
              }
            ].map((servicio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-5xl mb-4">{servicio.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-6">{servicio.title}</h3>
                <ul className="space-y-3">
                  {servicio.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#FF6A00] mr-3 mt-1 font-bold">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#FF6A00]/10 to-orange-500/10 p-8 rounded-3xl border border-[#FF6A00]/30"
          >
            <h3 className="text-2xl font-bold text-black mb-4">Beneficios para tu Empresa</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <span className="text-[#FF6A00] mr-3 text-2xl">✓</span>
                <span className="text-gray-700 font-medium">Cumplimiento normativo</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#FF6A00] mr-3 text-2xl">✓</span>
                <span className="text-gray-700 font-medium">Reducción de riesgos</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#FF6A00] mr-3 text-2xl">✓</span>
                <span className="text-gray-700 font-medium">Operaciones seguras</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Para Personas Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-black mb-8 text-center">
              <span className="text-[#FF6A00]">Para Personas</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: 'Derecho Civil',
                items: [
                  'Contratos privados y compraventas',
                  'Arrendamientos residenciales',
                  'Herencias y testamentos',
                  'Protección patrimonial'
                ],
                icon: '🏠'
              },
              {
                title: 'Derecho Mercantil',
                items: [
                  'Formalización de negocios personales',
                  'Protección de inversiones',
                  'Cobro de adeudos',
                  'Contratos comerciales'
                ],
                icon: '💼'
              },
              {
                title: 'Derecho Laboral',
                items: [
                  'Defensa por despido injustificado',
                  'Cálculo de finiquito y liquidación',
                  'Conciliación con empleadores',
                  'Asesoría en conflictos laborales'
                ],
                icon: '⚖️'
              },
              {
                title: 'Emprendimiento',
                items: [
                  'Guía desde la idea hasta la constitución',
                  'Operación fiscal básica',
                  'Elección de estructura legal',
                  'Primeros pasos formales'
                ],
                icon: '🚀'
              }
            ].map((servicio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-5xl mb-4">{servicio.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-6">{servicio.title}</h3>
                <ul className="space-y-3">
                  {servicio.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#FF6A00] mr-3 mt-1 font-bold">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-8 rounded-3xl border border-blue-500/30"
          >
            <h3 className="text-2xl font-bold text-black mb-4">Beneficios Personales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <span className="text-[#FF6A00] mr-3 text-2xl">✓</span>
                <span className="text-gray-700 font-medium">Protección patrimonial</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#FF6A00] mr-3 text-2xl">✓</span>
                <span className="text-gray-700 font-medium">Solución eficaz de conflictos</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ¿Por qué con nosotros? Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-12">
              ¿Por qué con nosotros?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: '🎯',
                  title: 'Enfoque preventivo y resolutivo',
                  description: 'Anticipamos riesgos y solucionamos conflictos'
                },
                {
                  icon: '📝',
                  title: 'Documentos claros',
                  description: 'Listos para firmar y ejecutar'
                },
                {
                  icon: '🌎',
                  title: 'Atención en todo México',
                  description: 'Modalidad presencial y remota'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <Link
              href="/#contacto"
              className="inline-block bg-gradient-to-r from-[#FF6A00] to-orange-500 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:from-orange-500 hover:to-[#FF6A00] transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/50"
            >
              Agenda tu Consulta Gratuita
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

