'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import Head from 'next/head';

export default function Home() {
  const servicios = [
    {
      title: 'Diseño de KPIs y Tableros de Gestión',
      description: 'Definición de métricas estratégicas y operativas con tableros ejecutivos en tiempo real.',
      icon: '📊',
      url: '/servicios/kpis-tableros'
    },
    {
      title: 'Servicios Legales: Empresas y Personas',
      description: 'Constitución de empresas, y asesoría civil, mercantil y laboral para proteger tu patrimonio y operar en regla.',
      icon: '⚖️',
      url: '/servicios/servicios-legales'
    },
    {
      title: 'Optimización de Procesos',
      description: 'Mapeo y rediseño de procesos críticos eliminando duplicidades y fallas operativas.',
      icon: '🔄',
      url: '/servicios/optimizacion'
    },
    {
      title: 'Desarrollo Web y Soluciones Digitales',
      description: 'Creación de páginas web, microaplicaciones y agentes de IA para optimizar tu presencia digital.',
      icon: '💻',
      url: '/servicios/desarrollo-web'
    },
    {
      title: 'Creación y Constitución de Empresas',
      description: 'Constitución de sociedades en México y Estados Unidos con todos los trámites legales.',
      icon: '🚀',
      url: '/servicios/constitucion'
    }
  ];

  const testimonios = [
    {
      nombre: 'María González',
      opinion: 'Nexoria transformó completamente nuestra operación en Toluca. Implementaron KPIs que nos permitieron identificar pérdidas ocultas por $50,000 mensuales. Su Sistema Nexoria 360 es realmente efectivo.',
      empresa: 'Manufactura Toluca',
      estrellas: 5,
      fecha: 'Hace 2 meses',
      servicio: 'Optimización de Procesos'
    },
    {
      nombre: 'Carlos Rodríguez',
      opinion: 'Como empresa en Ciudad de México, necesitaba optimizar mis procesos y no sabía por dónde empezar. Nexoria me guió con su metodología y ahora opero con total eficiencia.',
      empresa: 'Tech Solutions CDMX',
      estrellas: 5,
      fecha: 'Hace 1 mes',
      servicio: 'Sistema Nexoria 360'
    },
    {
      nombre: 'Ana López',
      opinion: 'El programa de compliance que implementaron en nuestra empresa de Estado de México nos salvó de una auditoría fiscal que habría costado millones. Su enfoque preventivo es invaluable.',
      empresa: 'Distribuidora Edomex',
      estrellas: 5,
      fecha: 'Hace 3 meses',
      servicio: 'Compliance Corporativo'
    },
    {
      nombre: 'Roberto Martínez',
      opinion: 'Los tableros de gestión que diseñaron para nuestra empresa en Toluca nos permiten tomar decisiones basadas en datos reales. Nuestra eficiencia operativa aumentó 40% en solo 6 meses.',
      empresa: 'Logística Toluca',
      estrellas: 5,
      fecha: 'Hace 1 mes',
      servicio: 'KPIs y Tableros'
    },
    {
      nombre: 'Patricia Sánchez',
      opinion: 'El desarrollo de liderazgo que recibió mi equipo en Ciudad de México cambió completamente la cultura de la empresa. Ahora tenemos procesos estandarizados y mejora continua.',
      empresa: 'Servicios CDMX',
      estrellas: 5,
      fecha: 'Hace 2 semanas',
      servicio: 'Cultura de Mejora'
    }
  ];



  const [contactInfo, setContactInfo] = useState<any>(null);
  useEffect(() => {
    fetch('/api/contact-info', { cache: 'no-store' })
      .then(res => res.json())
      .then(data => setContactInfo(data));
  }, []);
  const redes = [
    { name: 'LinkedIn', icon: <svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>, url: contactInfo?.linkedin },
    { name: 'Twitter', icon: <svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.581-.666 2.477 0 1.61.82 3.027 2.053 3.846-.764-.024-1.482-.232-2.11-.583v.061c0 2.256 1.605 4.14 3.737 4.568-.39.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.303 3.203 4.334 3.239-1.595 1.25-3.604 1.992-5.786 1.992-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.092 7.14 2.092 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.403-.014-.602.91-.658 1.7-1.475 2.323-2.41z"/></svg>, url: contactInfo?.twitter },
    { name: 'Facebook', icon: <svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>, url: contactInfo?.facebook },
    { name: 'Instagram', icon: <svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>, url: contactInfo?.instagram },
    { name: 'WhatsApp', icon: <svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52zM12 22c-1.85 0-3.63-.5-5.18-1.44l-.37-.22-3.69.97.99-3.59-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-1 2.43s1.02 2.82 1.16 3.02c.14.2 2.01 3.08 4.88 4.2.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>, url: contactInfo?.whatsapp },
    { name: 'Telegram', icon: <svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.627-5.373-12-12-12zm5.707 8.293l-1.414 8.485c-.104.623-.441.775-.894.482l-2.484-1.834-1.198 1.153c-.132.132-.242.242-.495.242l.176-2.497 4.545-4.09c.198-.176-.043-.274-.308-.098l-5.617 3.537-2.42-.756c-.526-.164-.537-.526.11-.777l9.447-3.646c.441-.162.826.107.684.765z"/></svg>, url: contactInfo?.telegram },
  ];

  return (
    <div className="bg-black">
      {/* Hero Principal - Pantalla completa */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-16 bg-black pt-20 sm:pt-24 relative overflow-hidden">
        {/* Fondo con efecto CDMX y gradientes */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95"></div>
        <div className="absolute inset-0 bg-[url('/cdmx-bg.jpg')] bg-cover bg-center opacity-10"></div>
        
        {/* Elementos decorativos de fondo - Responsive */}
        <div className="absolute top-16 sm:top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-[#FF6A00] to-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-16 sm:bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-l from-blue-600 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 sm:mb-8"
          >
            <span className="inline-block bg-gradient-to-r from-[#FF6A00] to-orange-500 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-2xl shadow-orange-500/25">
              🚀 Consultora Estratégica Especializada en Toluca Edomex y Ciudad de México
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black text-white mb-6 sm:mb-8 leading-tight px-2"
          >
            <span className="text-white">
              Nexoria Consulting Firm
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#FF6A00] via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Donde la estrategia,
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#FF6A00] via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              la operación y lo legal
            </span>
            <br />
            <span className="text-white">
              convergen para impulsar tu negocio
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-4"
          >
            Nuestra misión es transformar la forma en que operan las empresas en Toluca Estado de México y Ciudad de México: eliminamos pérdidas ocultas, reducimos riesgos legales, fortalecemos la estructura corporativa y construimos una base sólida para crecer de manera sostenida.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4"
          >
            <Link
              href="#contacto"
              className="group relative bg-gradient-to-r from-[#FF6A00] to-orange-500 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-bold hover:from-orange-500 hover:to-[#FF6A00] transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-2"
            >
              <span className="relative z-10">Agenda tu diagnóstico de precisión</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-[#FF6A00] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
            <Link
              href="#servicios"
              className="group relative border-2 border-white/30 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-bold hover:bg-white hover:text-black transition-all duration-500 transform hover:scale-110 backdrop-blur-sm bg-white/10 hover:shadow-2xl hover:shadow-white/25 hover:-translate-y-2"
            >
              Descubre el Sistema Nexoria 360
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section id="quienes-somos" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent"></div>
        <div className="absolute -top-16 sm:-top-20 -right-16 sm:-right-20 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-[#FF6A00]/10 to-orange-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 sm:mb-8 px-4">
              ¿Quiénes Somos?
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light px-4">
              Nexoria Consulting Firm es una consultora estratégica especializada en transformar empresas en Toluca Estado de México y Ciudad de México
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16"
          >
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-gradient-to-br from-[#FF6A00]/5 to-orange-500/5 p-6 sm:p-8 rounded-2xl border border-[#FF6A00]/20">
                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6">Nuestra Misión</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Transformar la forma en que operan las empresas eliminando pérdidas ocultas, reduciendo riesgos legales, fortaleciendo la estructura corporativa y construyendo una base sólida para crecer de manera sostenida.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 p-6 sm:p-8 rounded-2xl border border-blue-500/20">
                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6">Nuestra Visión</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Ser la consultora líder en México que conecta la estrategia, la operación y lo legal para impulsar el crecimiento sostenible de las empresas.
                </p>
              </div>
            </div>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-gradient-to-br from-green-500/5 to-emerald-500/5 p-6 sm:p-8 rounded-2xl border border-green-500/20">
                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6">Nuestros Valores</h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start">
                    <span className="text-[#FF6A00] mr-3 mt-1">✓</span>
                    <span className="text-gray-700 font-light">Excelencia operativa y resultados medibles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6A00] mr-3 mt-1">✓</span>
                    <span className="text-gray-700 font-light">Integridad y cumplimiento normativo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6A00] mr-3 mt-1">✓</span>
                    <span className="text-gray-700 font-light">Innovación en metodologías de gestión</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6A00] mr-3 mt-1">✓</span>
                    <span className="text-gray-700 font-light">Compromiso con el crecimiento sostenible</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/5 to-violet-500/5 p-6 sm:p-8 rounded-2xl border border-purple-500/20">
                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6">Nuestra Experiencia</h3>
                <p className="text-gray-700 leading-relaxed font-light mb-4">
                  Más de 10 años ayudando a empresas en Toluca, Estado de México y Ciudad de México a optimizar sus operaciones y cumplir con todas las regulaciones legales.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-[#FF6A00]">50+</div>
                    <div className="text-sm text-gray-600">Empresas transformadas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-[#FF6A00]">$2M+</div>
                    <div className="text-sm text-gray-600">Ahorros generados</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Propuesta de Valor */}
      <section id="propuesta-valor" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent"></div>
        <div className="absolute -bottom-16 sm:-bottom-20 -left-16 sm:-left-20 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-tr from-[#FF6A00]/10 to-orange-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 sm:mb-8 px-4">
              Nuestra Propuesta de Valor
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-light px-4">
              Lo que nos hace únicos en el mercado de consultoría empresarial
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {[
              {
                icon: '🎯',
                title: 'Enfoque Integral',
                description: 'Combinamos estrategia, operación y aspectos legales en una sola solución, eliminando la fragmentación típica de otros consultores.',
                color: 'from-red-500 to-pink-500'
              },
              {
                icon: '📊',
                title: 'Resultados Medibles',
                description: 'Nuestros KPIs y tableros de gestión te permiten ver el impacto real de nuestras intervenciones en tiempo real.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: '⚖️',
                title: 'Cumplimiento Garantizado',
                description: 'Te protegemos de riesgos legales, fiscales y regulatorios con programas de compliance robustos y actualizados.',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: '🚀',
                title: 'Metodología Propia',
                description: 'El Sistema Nexoria 360 es nuestra metodología probada que diagnostica, diseña, ejecuta y evoluciona tu empresa.',
                color: 'from-purple-500 to-violet-500'
              },
              {
                icon: '🏢',
                title: 'Experiencia Local',
                description: 'Conocemos profundamente el mercado mexicano, sus regulaciones y las particularidades de hacer negocios en México.',
                color: 'from-orange-500 to-red-500'
              },
              {
                icon: '💡',
                title: 'Innovación Constante',
                description: 'Utilizamos las últimas tecnologías y metodologías para mantener tu empresa a la vanguardia del mercado.',
                color: 'from-yellow-500 to-orange-500'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-100 hover:border-[#FF6A00]/30"
              >
                <div className="relative mb-6 sm:mb-8">
                  <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 group-hover:scale-125 transition-all duration-500 group-hover:rotate-6">
                    {item.icon}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color}/20 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-500`}></div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 group-hover:text-[#FF6A00] transition-colors duration-300">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 font-light group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* El Sistema Nexoria 360 */}
      <section id="sistema-nexoria-360" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent"></div>
        <div className="absolute -top-16 sm:-top-20 -right-16 sm:-right-20 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-[#FF6A00]/10 to-orange-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 sm:mb-8 px-4">
              <span className="text-[#FF6A00]">
                El Sistema Nexoria 360:
              </span>
              <br />
              Diagnostica, Diseña, Ejecuta y Evoluciona
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light px-4">
              Un enfoque sistemático que transforma tu empresa desde el diagnóstico hasta la evolución continua
            </p>
          </motion.div>
          
          {/* Elementos visuales */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12"
          >
            {[
              { 
                icon: '🔍', 
                title: '1. Diagnóstico Preciso', 
                desc: 'Analizamos a profundidad tu operación, finanzas, procesos legales y riesgos regulatorios. Detectamos fugas de capital, cuellos de botella, incumplimientos y errores recurrentes.',
                color: 'from-red-500 to-pink-500'
              },
              { 
                icon: '📋', 
                title: '2. Diseño Estratégico', 
                desc: 'Trazamos un plan personalizado con metas claras, indicadores medibles y responsables definidos. Creamos un mapa de ruta que conecta tu visión empresarial con acciones concretas.',
                color: 'from-blue-500 to-cyan-500'
              },
              { 
                icon: '⚡', 
                title: '3. Implementación Práctica', 
                desc: 'Ponemos en marcha tableros de control, KPIs, procesos estandarizados y sistemas de cumplimiento. Nuestro equipo acompaña a tus líderes en la ejecución diaria.',
                color: 'from-green-500 to-emerald-500'
              },
              { 
                icon: '🚀', 
                title: '4. Evolución Continua', 
                desc: 'Instalamos una cultura de mejora permanente: revisiones periódicas, auditorías internas y actualizaciones legales. Garantizamos que tu empresa mantenga y escale resultados.',
                color: 'from-purple-500 to-violet-500'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group text-center px-4"
              >
                <div className="relative mb-6 sm:mb-8">
                  <div className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6 group-hover:scale-125 transition-all duration-500 group-hover:rotate-6">
                    {item.icon}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color}/20 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-500`}></div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 group-hover:text-[#FF6A00] transition-colors duration-300">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 font-light group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Servicios Especializados */}
      <section id="servicios" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent"></div>
        <div className="absolute -bottom-16 sm:-bottom-20 -left-16 sm:-left-20 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-tr from-[#FF6A00]/10 to-orange-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 sm:mb-8 px-4">
              Servicios Especializados
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-light px-4">
              Soluciones integrales que combinan estrategia, operación y aspectos legales
            </p>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {servicios.map((servicio, index) => (
              <ServiceCard key={index} servicio={servicio} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Paquetes de Soluciones */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent"></div>
        <div className="absolute top-16 sm:top-20 left-16 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-[#FF6A00]/10 to-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 sm:bottom-20 right-16 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tl from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 sm:mb-12 leading-tight px-4">
              <span className="text-[#FF6A00]">
                Paquetes de Soluciones
              </span>
              <br />
              <span className="text-white">
                para cada etapa de tu empresa
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light px-4">
              Desde el diagnóstico inicial hasta la transformación integral, tenemos el paquete perfecto para tu empresa
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {[
              {
                nombre: 'Starter',
                subtitulo: 'Diagnóstico Exprés',
                descripcion: 'Una radiografía inmediata de tu operación y situación legal, con recomendaciones claras para recuperar control.',
                precio: 'Desde $15,000',
                color: 'from-green-500 to-emerald-500'
              },
              {
                nombre: 'Growth',
                subtitulo: 'Optimización y Control',
                descripcion: 'Ideal para empresas en crecimiento que necesitan procesos ordenados, indicadores confiables y cumplimiento normativo sólido.',
                precio: 'Desde $35,000',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                nombre: 'Pro',
                subtitulo: 'Alineación Estratégica',
                descripcion: 'Conecta a tu equipo directivo con la visión a largo plazo, estableciendo objetivos claros y asegurando que la operación esté alineada con la estrategia.',
                precio: 'Desde $65,000',
                color: 'from-purple-500 to-violet-500'
              },
              {
                nombre: 'Elite',
                subtitulo: 'Transformación Integral',
                descripcion: 'Una solución completa que integra estrategia, procesos, liderazgo y aspectos legales, para llevar tu organización a otro nivel.',
                precio: 'Desde $120,000',
                color: 'from-orange-500 to-red-500'
              },
              {
                nombre: 'Infinity',
                subtitulo: 'Evolución Constante',
                descripcion: 'Un acompañamiento permanente con revisiones periódicas, auditorías legales, actualización de tableros y soporte estratégico para que tu empresa nunca deje de avanzar.',
                precio: 'Consultar',
                color: 'from-yellow-500 to-orange-500'
              }
            ].map((paquete, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-full h-2 bg-gradient-to-r ${paquete.color} rounded-full mb-4`}></div>
                <h3 className="text-2xl font-bold text-white mb-2">{paquete.nombre}</h3>
                <h4 className="text-lg font-semibold text-[#FF6A00] mb-3">{paquete.subtitulo}</h4>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{paquete.descripcion}</p>
                <div className="text-[#FF6A00] font-bold text-lg">{paquete.precio}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

            {/* Testimonios */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent"></div>
        <div className="absolute top-16 sm:top-20 right-16 sm:right-20 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-bl from-[#FF6A00]/10 to-orange-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8 px-4">
              Lo que dicen nuestros clientes
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {testimonios.map((testimonio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden relative border border-gray-100 hover:border-[#FF6A00]/30"
              >
                {/* Efecto de fondo en hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  {/* Header con avatar y info */}
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF6A00] to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3 shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {testimonio.nombre.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-black text-base group-hover:text-[#FF6A00] transition-colors duration-300 truncate">{testimonio.nombre}</h4>
                      <p className="text-xs text-gray-600 mb-1">{testimonio.empresa}</p>
                      <div className="flex items-center gap-2">
                        <span className="inline-block bg-[#FF6A00]/10 text-[#FF6A00] text-xs px-2 py-1 rounded-full font-medium">
                          {testimonio.servicio}
                        </span>
                        <span className="text-xs text-gray-500">{testimonio.fecha}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Testimonio */}
                  <p className="text-gray-700 mb-4 italic text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300 line-clamp-3">"{testimonio.opinion}"</p>
                  
                  {/* Estrellas */}
                  <div className="flex text-yellow-400">
                    {[...Array(testimonio.estrellas)].map((_, i) => (
                      <span key={i} className="text-sm group-hover:scale-110 transition-transform duration-300" style={{transitionDelay: `${i * 50}ms`}}>⭐</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
              </div>
      </section>

      {/* Casos de Éxito */}
      <section id="casos-exito" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent"></div>
        <div className="absolute top-16 sm:top-20 left-16 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-[#FF6A00]/10 to-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 sm:bottom-20 right-16 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tl from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 sm:mb-8 px-4">
              Casos de Éxito
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4">
              Historias reales de empresas que transformamos en Toluca, Estado de México y Ciudad de México
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-12 sm:space-y-16"
          >
            {[
              {
                empresa: 'Manufactura Toluca',
                industria: 'Manufactura Industrial',
                ubicacion: 'Toluca, Estado de México',
                problema: 'Pérdidas ocultas de $50,000 mensuales por procesos ineficientes y falta de controles',
                solucion: 'Implementamos el Sistema Nexoria 360 con KPIs específicos y tableros de gestión en tiempo real',
                resultados: [
                  'Identificación y eliminación de pérdidas por $50,000 mensuales',
                  'Reducción del 40% en tiempo de producción',
                  'Implementación de controles internos robustos',
                  'ROI del 300% en los primeros 6 meses'
                ],
                testimonio: 'Nexoria transformó completamente nuestra operación. Su Sistema Nexoria 360 es realmente efectivo.',
                cliente: 'María González, Directora General'
              },
              {
                empresa: 'Tech Solutions CDMX',
                industria: 'Tecnología',
                ubicacion: 'Ciudad de México',
                problema: 'Falta de procesos estandarizados y métricas de desempeño en una empresa en crecimiento',
                solucion: 'Diseñamos KPIs personalizados y procesos de mejora continua con metodología Lean',
                resultados: [
                  'Estandarización de 15 procesos críticos',
                  'Implementación de tableros de control ejecutivo',
                  'Reducción del 60% en errores operativos',
                  'Crecimiento sostenido del 25% anual'
                ],
                testimonio: 'Nexoria me guió con su metodología y ahora opero con total eficiencia.',
                cliente: 'Carlos Rodríguez, CEO'
              },
              {
                empresa: 'Distribuidora Edomex',
                industria: 'Distribución',
                ubicacion: 'Estado de México',
                problema: 'Riesgos de auditoría fiscal y falta de programas de compliance corporativo',
                solucion: 'Desarrollamos un programa integral de compliance y políticas internas',
                resultados: [
                  'Programa de compliance 100% implementado',
                  'Prevención de auditoría fiscal que habría costado millones',
                  'Políticas internas y códigos de ética establecidos',
                  'Capacitación completa del equipo directivo'
                ],
                testimonio: 'El programa de compliance nos salvó de una auditoría fiscal que habría costado millones.',
                cliente: 'Ana López, Gerente General'
              }
            ].map((caso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-[#FF6A00]/30 overflow-hidden"
              >
                <div className="p-6 sm:p-8 md:p-10">
                  {/* Header del caso */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 sm:mb-8">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-black mb-2">{caso.empresa}</h3>
                      <div className="flex flex-wrap gap-2 sm:gap-4 text-sm sm:text-base text-gray-600">
                        <span className="bg-[#FF6A00]/10 text-[#FF6A00] px-3 py-1 rounded-full font-medium">
                          {caso.industria}
                        </span>
                        <span className="bg-blue-500/10 text-blue-600 px-3 py-1 rounded-full font-medium">
                          {caso.ubicacion}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contenido del caso */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-black mb-3 flex items-center">
                          <span className="text-red-500 mr-2">⚠️</span>
                          Problema Identificado
                        </h4>
                        <p className="text-gray-700 leading-relaxed font-light">{caso.problema}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-black mb-3 flex items-center">
                          <span className="text-blue-500 mr-2">🔧</span>
                          Solución Implementada
                        </h4>
                        <p className="text-gray-700 leading-relaxed font-light">{caso.solucion}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-black mb-3 flex items-center">
                          <span className="text-green-500 mr-2">📈</span>
                          Resultados Obtenidos
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                          {caso.resultados.map((resultado, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-[#FF6A00] mr-3 mt-1 font-bold">✓</span>
                              <span className="text-gray-700 font-light">{resultado}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Testimonio */}
                  <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-br from-[#FF6A00]/5 to-orange-500/5 rounded-2xl border border-[#FF6A00]/20">
                    <blockquote className="text-gray-700 italic text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      "{caso.testimonio}"
                    </blockquote>
                    <cite className="text-[#FF6A00] font-semibold text-sm sm:text-base">
                      — {caso.cliente}
                    </cite>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

            {/* CTA Final */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-[#FF6A00] via-orange-500 to-yellow-500 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
        <div className="absolute top-16 sm:top-20 left-16 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 sm:bottom-20 right-16 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 sm:mb-12 leading-tight px-4">
              ¿Listo para llevar tu empresa al siguiente nivel?
            </h2>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Agenda tu diagnóstico de precisión y descubre cómo podemos ayudarte a crecer de manera rentable, ordenada y con total seguridad legal.
            </p>
            <Link
              href="#contacto"
              className="inline-block bg-white text-[#FF6A00] px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-2xl text-lg sm:text-xl font-bold hover:bg-gray-100 transition-all duration-500 transform hover:scale-110 hover:shadow-3xl hover:shadow-white/25 hover:-translate-y-2"
            >
              Agenda tu diagnóstico de precisión
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sección de Contáctanos - MANTENIDA */}
      <section id="contacto" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent"></div>
        <div className="absolute top-16 sm:top-20 right-16 sm:right-20 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-bl from-[#FF6A00]/10 to-orange-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

// Componente de tarjeta de servicio con efecto de rotación 3D
function ServiceCard({ servicio, index }: { servicio: any; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Información adicional para el reverso de cada servicio
  const serviceDetails = {
    'Diseño de KPIs y Tableros de Gestión': {
      beneficios: ['Métricas estratégicas personalizadas', 'Tableros ejecutivos en tiempo real', 'Indicadores de desempeño', 'Análisis de datos avanzado'],
      tiempo: '2-4 semanas',
      precio: 'Desde $25,000'
    },
    'Servicios Legales: Empresas y Personas': {
      beneficios: ['Constitución de empresas en México', 'Asesoría civil, mercantil y laboral', 'Protección patrimonial integral', 'Atención en todo México (remota)'],
      tiempo: 'Según servicio',
      precio: 'Desde $15,000'
    },
    'Optimización de Procesos': {
      beneficios: ['Mapeo de procesos críticos', 'Eliminación de duplicidades', 'Controles internos', 'Estándares de calidad'],
      tiempo: '2-6 semanas',
      precio: 'Desde $30,000'
    },
    'Desarrollo Web y Soluciones Digitales': {
      beneficios: ['Páginas web responsivas y modernas', 'Microaplicaciones personalizadas', 'Agentes de IA para automatización', 'Integración con sistemas existentes'],
      tiempo: '2-8 semanas',
      precio: 'Desde $25,000'
    },
    'Creación y Constitución de Empresas': {
      beneficios: ['Constitución en México y EE.UU.', 'Trámites fiscales y bancarios', 'Registro de marcas', 'Acompañamiento legal completo'],
      tiempo: '1-3 meses',
      precio: 'Desde $20,000'
    }
  };

  const details = serviceDetails[servicio.title as keyof typeof serviceDetails] || serviceDetails['Diseño de KPIs y Tableros de Gestión'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative h-80 sm:h-96 cursor-pointer perspective-1000"
      onClick={handleFlip}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Frente de la tarjeta */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-white p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-gray-100 hover:border-[#FF6A00]/30 overflow-hidden">
          {/* Efecto de fondo en hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
          
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">{servicio.icon}</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-3 sm:mb-4 group-hover:text-[#FF6A00] transition-colors duration-300">{servicio.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 font-light leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{servicio.description}</p>
            </div>
            
            <div className="text-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleFlip();
                }}
                className="inline-flex items-center text-[#FF6A00] font-semibold hover:text-orange-600 transition-all duration-300 group-hover:translate-x-3 group-hover:scale-105 bg-orange-50 hover:bg-orange-100 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base"
              >
                Saber más 
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
    </div>
        </div>

        {/* Reverso de la tarjeta */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-[#FF6A00] to-orange-500 p-6 sm:p-8 rounded-3xl shadow-xl text-white rotate-y-180">
          <div className="h-full flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">{servicio.title}</h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h4 className="font-semibold text-white/90 mb-2 text-sm sm:text-base">Beneficios:</h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {details.beneficios.map((beneficio, idx) => (
                      <li key={idx} className="flex items-center text-xs sm:text-sm">
                        <span className="text-white/80 mr-2">✓</span>
                        {beneficio}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4">
                  <div className="text-center">
                    <p className="text-white/70 text-xs">Tiempo estimado</p>
                    <p className="font-bold text-white text-sm sm:text-base">{details.tiempo}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white/70 text-xs">Precio desde</p>
                    <p className="font-bold text-white text-sm sm:text-base">{details.precio}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleFlip();
                }}
                className="inline-flex items-center bg-white text-[#FF6A00] font-semibold hover:bg-gray-100 transition-all duration-300 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                Volver
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
