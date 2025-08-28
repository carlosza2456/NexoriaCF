'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';

export default function Home() {
  const servicios = [
    {
      title: 'Derecho Civil',
      description: 'Contratos, arrendamientos, demandas y resolución de conflictos civiles.',
      icon: '⚖️',
      url: '/servicios/derecho-civil'
    },
    {
      title: 'Derecho Penal',
      description: 'Defensa penal, delitos, denuncias y asesoría en procesos penales.',
      icon: '🛡️',
      url: '/servicios/derecho-penal'
    },
    {
      title: 'Derecho Laboral',
      description: 'Despidos, conflictos obrero-patronales y asesoría laboral integral.',
      icon: '👥',
      url: '/servicios/derecho-laboral'
    },
    {
      title: 'Derecho Mercantil',
      description: 'Sociedades, cobranza, juicios mercantiles y derecho comercial.',
      icon: '🏢',
      url: '/servicios/derecho-mercantil'
    },
    {
      title: 'Derecho Familiar',
      description: 'Divorcios, pensiones, custodia y asuntos familiares.',
      icon: '👨‍👩‍👧‍👦',
      url: '/servicios/derecho-familiar'
    },
    {
      title: 'Derecho Corporativo',
      description: 'Constitución, compliance, marcas y asesoría corporativa.',
      icon: '🎯',
      url: '/servicios/derecho-corporativo'
    }
  ];

  const testimonios = [
    {
      nombre: 'María González',
      opinion: 'Me ayudaron con mi despido injustificado. En solo 3 semanas lograron que me dieran una indemnización justa. El abogado fue muy profesional y me explicó todo el proceso paso a paso.',
      empresa: 'Restaurante La Esquina',
      estrellas: 5,
      fecha: 'Hace 2 meses',
      servicio: 'Derecho Laboral'
    },
    {
      nombre: 'Carlos Rodríguez',
      opinion: 'Necesitaba constituir mi empresa de consultoría y no sabía por dónde empezar. Nexoria me guió en todo el proceso, desde la elección del tipo de sociedad hasta los permisos municipales. Excelente trabajo.',
      empresa: 'Consultores RRH',
      estrellas: 4,
      fecha: 'Hace 1 mes',
      servicio: 'Derecho Corporativo'
    },
    {
      nombre: 'Ana López',
      opinion: 'Mi divorcio fue complicado por temas de custodia. Los abogados de Nexoria fueron muy empáticos y lograron un acuerdo que beneficiaba a mis hijos. Definitivamente los recomiendo.',
      empresa: 'Particular',
      estrellas: 5,
      fecha: 'Hace 3 meses',
      servicio: 'Derecho Familiar'
    },
    {
      nombre: 'Roberto Martínez',
      opinion: 'Tenía un problema con un contrato de arrendamiento comercial. Me cobraban más de lo acordado. Nexoria revisó todo y logró que me devolvieran el dinero extra. Muy agradecido.',
      empresa: 'Farmacia San José',
      estrellas: 4,
      fecha: 'Hace 1 mes',
      servicio: 'Derecho Civil'
    },
    {
      nombre: 'Patricia Sánchez',
      opinion: 'Me ayudaron a registrar mi marca de ropa. El proceso fue rápido y ahora tengo la tranquilidad de que mi negocio está protegido legalmente. Muy profesionales.',
      empresa: 'Boutique Elegance',
      estrellas: 5,
      fecha: 'Hace 2 semanas',
      servicio: 'Propiedad Intelectual'
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
              ⚖️ N°1 Consultora Especializada en Estado de México y CDMX
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black text-white mb-6 sm:mb-8 leading-tight px-2"
          >
            <span className="text-white">
              Tu aliado legal en
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#FF6A00] via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Estado de México
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#FF6A00] via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              y Ciudad de México
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-4"
          >
            Asesoría especializada para personas, empresas y emprendedores con la más alta calidad profesional
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
              <span className="relative z-10">Solicita una consulta gratis</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-[#FF6A00] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
            <Link
              href="#servicios"
              className="group relative border-2 border-white/30 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-bold hover:bg-white hover:text-black transition-all duration-500 transform hover:scale-110 backdrop-blur-sm bg-white/10 hover:shadow-2xl hover:shadow-white/25 hover:-translate-y-2"
            >
              Conoce nuestros servicios
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
              <span className="text-[#FF6A00]">
                Nexoria:
              </span>
              <br />
              Expertos que resuelven
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light px-4">
              Somos una firma legal que combina experiencia, tecnología y trato humano para ayudarte a resolver tus temas legales con eficacia, claridad y confianza.
            </p>
          </motion.div>
          
          {/* Elementos visuales */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12"
          >
                        {[
              { icon: '⚖️', title: 'Experiencia', desc: 'Más de 5 años resolviendo casos exitosamente' },
              { icon: '💻', title: 'Tecnología', desc: 'Herramientas digitales para mayor eficiencia' },
              { icon: '🤝', title: 'Trato Humano', desc: 'Atención personalizada y cercana' }
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
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A00]/20 to-orange-500/20 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-500"></div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 group-hover:text-[#FF6A00] transition-colors duration-300">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 font-light group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Servicios Legales */}
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
              Nuestros Servicios Legales
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-light px-4">
              Soluciones integrales para todas tus necesidades legales
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

      {/* Legal para Emprendedores y PYMES */}
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
                "Formaliza tu idea,
              </span>
              <br />
              <span className="text-[#FF6A00]">
                protege tu negocio,
              </span>
              <br />
              <span className="text-[#FF6A00]">
                crece sin miedo."
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light px-4">
              Ofrecemos asesoría completa para pequeñas y medianas empresas: constitución, contratos, marcas, permisos y cumplimiento legal.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-6xl sm:text-8xl md:text-9xl mb-6 sm:mb-8 animate-bounce hover:animate-pulse cursor-pointer transition-all duration-300 hover:scale-110"
          >
            🚀
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
              Tu tranquilidad legal empieza hoy.
            </h2>
            <Link
              href="#contacto"
              className="inline-block bg-white text-[#FF6A00] px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-2xl text-lg sm:text-xl font-bold hover:bg-gray-100 transition-all duration-500 transform hover:scale-110 hover:shadow-3xl hover:shadow-white/25 hover:-translate-y-2"
            >
              Agendar consulta sin costo
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
    'Derecho Civil': {
      beneficios: ['Contratos personalizados', 'Resolución de conflictos', 'Asesoría en arrendamientos', 'Demandas civiles'],
      tiempo: '2-4 semanas',
      precio: 'Desde $2,500'
    },
    'Derecho Penal': {
      beneficios: ['Defensa penal integral', 'Asesoría en denuncias', 'Recursos de apelación', 'Libertad bajo caución'],
      tiempo: 'Inmediato',
      precio: 'Desde $5,000'
    },
    'Derecho Laboral': {
      beneficios: ['Despidos injustificados', 'Conflictos laborales', 'Pensiones y prestaciones', 'Auditorías laborales'],
      tiempo: '1-3 semanas',
      precio: 'Desde $3,000'
    },
    'Derecho Mercantil': {
      beneficios: ['Constitución de sociedades', 'Cobranza extrajudicial', 'Juicios mercantiles', 'Contratos comerciales'],
      tiempo: '2-6 semanas',
      precio: 'Desde $4,000'
    },
    'Derecho Familiar': {
      beneficios: ['Divorcios express', 'Custodia y patria potestad', 'Pensiones alimenticias', 'Sucesiones'],
      tiempo: '1-2 meses',
      precio: 'Desde $3,500'
    },
    'Derecho Corporativo': {
      beneficios: ['Constitución de empresas', 'Compliance legal', 'Marcas y patentes', 'Fusión y adquisición'],
      tiempo: '1-3 meses',
      precio: 'Desde $6,000'
    }
  };

  const details = serviceDetails[servicio.title as keyof typeof serviceDetails] || serviceDetails['Derecho Civil'];

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