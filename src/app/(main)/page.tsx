'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';

export default function Home() {
  const services = [
    {
      title: 'Estrategia de Negocios',
      description: 'Desarrollamos estrategias personalizadas para impulsar el crecimiento y la rentabilidad de tu empresa.',
      icon: '🎯'
    },
    {
      title: 'Transformación Digital',
      description: 'Implementamos soluciones tecnológicas innovadoras para modernizar y optimizar tus procesos.',
      icon: '💻'
    },
    {
      title: 'Finanzas Corporativas',
      description: 'Optimizamos la gestión financiera y desarrollamos estrategias para maximizar el valor de tu empresa.',
      icon: '📊'
    },
    {
      title: 'Capital Humano',
      description: 'Potenciamos el talento de tu organización mediante estrategias efectivas de gestión y desarrollo.',
      icon: '👥'
    }
  ];

  const team = [
    {
      name: 'Ana García',
      position: 'CEO & Fundadora',
      image: '/team/ana.jpg'
    },
    {
      name: 'Carlos Rodríguez',
      position: 'Director de Estrategia',
      image: '/team/carlos.jpg'
    },
    {
      name: 'María Sánchez',
      position: 'Directora de Innovación',
      image: '/team/maria.jpg'
    }
  ];

  const blogPosts = [
    {
      title: 'El futuro de la transformación digital',
      excerpt: 'Descubre las tendencias tecnológicas que definirán el futuro de los negocios...',
      image: '/blog/post1.jpg',
      slug: 'futuro-transformacion-digital'
    },
    {
      title: 'Estrategias de liderazgo post-pandemia',
      excerpt: 'Nuevos enfoques para liderar equipos en la era del trabajo híbrido...',
      image: '/blog/post2.jpg',
      slug: 'liderazgo-post-pandemia'
    },
    {
      title: 'Innovación sostenible en empresas',
      excerpt: 'Cómo implementar prácticas sostenibles sin sacrificar la rentabilidad...',
      image: '/blog/post3.jpg',
      slug: 'innovacion-sostenible'
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
    <div className="bg-nexoria-black">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 bg-[#1a1d21] pt-24">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 py-8 md:py-16">
          {/* Columna izquierda: texto */}
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
            className="flex-1 text-left"
        >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 leading-tight font-sans" style={{fontFamily: 'var(--font-inter)'}}>
              <span className="text-[#FF6F00]">NEXORIA</span>
              <span className="text-white"> – Soluciones Integrales para Empresas Modernas</span>
          </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl font-sans" style={{fontFamily: 'var(--font-inter)'}}>
              Combinamos derecho, logística, estrategia empresarial, marketing digital y tecnología basada en inteligencia artificial para impulsar su negocio.
          </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Link
                href="#servicios"
                className="bg-[#FF6F00] text-white px-6 md:px-8 py-3 rounded-md text-base md:text-lg font-semibold hover:bg-orange-700 transition-all text-center font-sans"
            >
                Explorar Servicios
            </Link>
            <Link
                href="#contacto"
                className="border-2 border-white text-white px-6 md:px-8 py-3 rounded-md text-base md:text-lg font-semibold hover:bg-white hover:text-[#FF6F00] transition-all text-center font-sans"
            >
                Contactar Ahora
            </Link>
          </div>
        </motion.div>
          {/* Columna derecha: círculo naranja */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center items-center w-full"
          >
            <div
              className="bg-[#FF6F00] rounded-full flex flex-col items-center justify-center shadow-lg w-40 h-32 sm:w-56 sm:h-44 md:w-72 md:h-60 lg:w-[380px] lg:h-[320px] transition-all duration-300"
            >
              {/* Icono de cerebro (SVG realista) */}
              <svg
                className="mb-2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M32 8C23 8 16 15 16 24V40C16 49 23 56 32 56C41 56 48 49 48 40V24C48 15 41 8 32 8Z" fill="white"/>
                <path d="M24 24C24 19.58 27.58 16 32 16C36.42 16 40 19.58 40 24V40C40 44.42 36.42 48 32 48C27.58 48 24 44.42 24 40V24Z" fill="#FF6F00"/>
                <path d="M32 8V56" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round"/>
                <path d="M24 16C20 20 20 44 24 48" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round"/>
                <path d="M40 16C44 20 44 44 40 48" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-white text-base sm:text-lg md:text-xl font-bold text-center font-sans" style={{fontFamily: 'var(--font-inter)'}}>Inteligencia Estratégica</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ¿Quiénes Somos? */}
      <section id="quienes-somos" className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-2 relative">
              ¿Quiénes Somos?
              <span className="block mx-auto mt-2 w-24 h-1 bg-[#FF6F00] rounded"></span>
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 items-stretch justify-center">
            {/* Columna izquierda */}
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-lg text-gray-800 mb-6 text-center lg:text-left">Somos un equipo de expertos en distintas disciplinas que trabaja de manera coordinada para ofrecer asesoría integral a empresas de todos los tamaños y sectores.</p>
              <p className="text-lg text-gray-800 mb-8 text-center lg:text-left">Nuestra filosofía se basa en cuatro pilares fundamentales:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Ojo - Transparencia */}
                <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center transition-colors duration-200 hover:bg-[#FF6F00] group cursor-pointer relative overflow-hidden">
                  <span className="text-3xl mb-2 transition-all duration-300 group-hover:opacity-0 group-hover:scale-90 group-hover:translate-y-2 text-black">
                    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </span>
                  <span className="font-bold text-lg text-gray-900 transition-all duration-300 group-hover:opacity-0 group-hover:scale-90 group-hover:translate-y-2">Transparencia</span>
                  {/* Texto explicativo hover */}
                  <span className="absolute left-0 right-0 top-1/3 -translate-y-1/2 px-4 text-base text-white opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 scale-90 translate-y-2 transition-all duration-300 text-center pointer-events-none select-none font-semibold">
                    Comunicación clara y acceso a la información relevante.
                  </span>
                </div>
                {/* Manos estrechadas - Confianza */}
                <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center transition-colors duration-200 hover:bg-[#FF6F00] group cursor-pointer relative overflow-hidden">
                  <span className="text-3xl mb-2 transition-all duration-300 group-hover:opacity-0 group-hover:scale-90 group-hover:translate-y-2 text-black">
                    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M17 18l1.5-1.5a2.121 2.121 0 0 0 0-3l-5-5a2.121 2.121 0 0 0-3 0l-5 5a2.121 2.121 0 0 0 0 3L7 18" />
                      <path d="M9 13l3 3 3-3" />
                    </svg>
                  </span>
                  <span className="font-bold text-lg text-gray-900 transition-all duration-300 group-hover:opacity-0 group-hover:scale-90 group-hover:translate-y-2">Confianza</span>
                  <span className="absolute left-0 right-0 top-1/3 -translate-y-1/2 px-4 text-base text-white opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 scale-90 translate-y-2 transition-all duration-300 text-center pointer-events-none select-none font-semibold">
                    Relaciones sólidas y compromiso con nuestros clientes.
                  </span>
                </div>
                {/* Foco - Innovación */}
                <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center transition-colors duration-200 hover:bg-[#FF6F00] group cursor-pointer relative overflow-hidden">
                  <span className="text-3xl mb-2 transition-all duration-300 group-hover:opacity-0 group-hover:scale-90 group-hover:translate-y-2 text-black">
                    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M9 18h6" />
                      <path d="M10 22h4" />
                      <path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.5-3.5 6.5a2 2 0 0 1-3 0C6.5 13.5 5 11.5 5 9a7 7 0 0 1 7-7z" />
                    </svg>
                  </span>
                  <span className="font-bold text-lg text-gray-900 transition-all duration-300 group-hover:opacity-0 group-hover:scale-90 group-hover:translate-y-2">Innovación</span>
                  <span className="absolute left-0 right-0 top-1/3 -translate-y-1/2 px-4 text-base text-white opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 scale-90 translate-y-2 transition-all duration-300 text-center pointer-events-none select-none font-semibold">
                    Soluciones creativas y uso de tecnología de vanguardia.
                  </span>
                </div>
                {/* Gráfica - Resultados */}
                <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center transition-colors duration-200 hover:bg-[#FF6F00] group cursor-pointer relative overflow-hidden">
                  <span className="text-3xl mb-2 transition-all duration-300 group-hover:opacity-0 group-hover:scale-90 group-hover:translate-y-2 text-black">
                    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M3 17v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2" />
                      <rect x="13" y="13" width="6" height="8" rx="2" />
                      <rect x="3" y="13" width="6" height="8" rx="2" />
                    </svg>
                  </span>
                  <span className="font-bold text-lg text-gray-900 transition-all duration-300 group-hover:opacity-0 group-hover:scale-90 group-hover:translate-y-2">Resultados</span>
                  <span className="absolute left-0 right-0 top-1/3 -translate-y-1/2 px-4 text-base text-white opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 scale-90 translate-y-2 transition-all duration-300 text-center pointer-events-none select-none font-semibold">
                    Logros medibles y beneficios tangibles para tu empresa.
                  </span>
                </div>
              </div>
            </div>
            {/* Columna derecha */}
            <div className="flex-1 bg-gray-50 rounded-2xl shadow p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-extrabold text-[#FF6F00] mb-4">Nuestra Visión</h3>
              <p className="text-gray-800 mb-6">Creemos en la inteligencia estratégica, el respaldo legal sólido y el uso de tecnologías emergentes como la IA para resolver desafíos reales.</p>
              <div className="space-y-6">
                {/* Balanza - Respaldo Legal */}
                <div className="flex items-start gap-4">
                  <span className="bg-[#FF6F00] rounded-full p-2 flex items-center justify-center">
                    <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 3v2" />
                      <path d="M6 5l6 1 6-1" />
                      <path d="M6 5v2a6 6 0 0 0 12 0V5" />
                      <path d="M6 17a6 6 0 0 0 12 0" />
                      <path d="M6 17v2a6 6 0 0 0 12 0v-2" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-bold text-gray-900">Respaldo Legal</span>
                    <p className="text-gray-700 text-sm">Seguridad jurídica para su empresa</p>
                  </div>
                </div>
                {/* Tuercas - Optimización Operativa */}
                <div className="flex items-start gap-4">
                  <span className="bg-[#FF6F00] rounded-full p-2 flex items-center justify-center">
                    <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-1.82-.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 15 8.6a1.65 1.65 0 0 0 1.82.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 15z" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-bold text-gray-900">Optimización Operativa</span>
                    <p className="text-gray-700 text-sm">Procesos eficientes y rentables</p>
                  </div>
                </div>
                {/* Robot - Tecnología Avanzada */}
                <div className="flex items-start gap-4">
                  <span className="bg-[#FF6F00] rounded-full p-2 flex items-center justify-center">
                    <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="3" y="11" width="18" height="10" rx="2" />
                      <rect x="7" y="15" width="2" height="2" rx="1" />
                      <rect x="15" y="15" width="2" height="2" rx="1" />
                      <path d="M9 7V4a3 3 0 0 1 6 0v3" />
                      <path d="M12 17v2" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-bold text-gray-900">Tecnología Avanzada</span>
                    <p className="text-gray-700 text-sm">Soluciones basadas en IA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Propuesta de Valor */}
      <section id="propuesta-valor" className="w-full bg-[#f7f7f7] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-2 relative">
              Nuestra Propuesta de Valor
              <span className="block mx-auto mt-2 w-32 h-1 bg-[#FF6F00] rounded"></span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Soluciones Completas */}
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-3 flex flex-col gap-2 items-start min-h-[140px] h-[220px] md:h-[200px] lg:h-[180px] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <span className="bg-[#FF6F00] rounded-full w-14 h-14 flex items-center justify-center mb-2">
                <svg width="32" height="32" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M16 12l-4 4-2-2"/></svg>
              </span>
              <h3 className="text-xl font-extrabold text-gray-900">Soluciones Completas</h3>
              <p className="text-gray-700">Desde lo legal hasta lo operativo, cubrimos todas las necesidades de su empresa.</p>
            </div>
            {/* Servicios Adaptados */}
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-3 flex flex-col gap-2 items-start min-h-[140px] h-[220px] md:h-[200px] lg:h-[180px] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <span className="bg-[#FF6F00] rounded-full w-14 h-14 flex items-center justify-center mb-2">
                <svg width="32" height="32" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9 12h6M9 16h6M9 8h6"/></svg>
              </span>
              <h3 className="text-xl font-extrabold text-gray-900">Servicios Adaptados</h3>
              <p className="text-gray-700">Personalizamos nuestras soluciones según el tamaño, sector y etapa de cada empresa.</p>
            </div>
            {/* Integración Tecnológica */}
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-3 flex flex-col gap-2 items-start min-h-[140px] h-[220px] md:h-[200px] lg:h-[180px] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <span className="bg-[#FF6F00] rounded-full w-14 h-14 flex items-center justify-center mb-2">
                <svg width="32" height="32" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8v8H8z"/></svg>
              </span>
              <h3 className="text-xl font-extrabold text-gray-900">Integración Tecnológica</h3>
              <p className="text-gray-700">Implementamos herramientas tecnológicas inteligentes para optimizar su operación.</p>
            </div>
            {/* Acompañamiento Personalizado */}
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-3 flex flex-col gap-2 items-start min-h-[140px] h-[220px] md:h-[200px] lg:h-[180px] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <span className="bg-[#FF6F00] rounded-full w-14 h-14 flex items-center justify-center mb-2">
                <svg width="32" height="32" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M16 14c0-2-4-3-4-3s-4 1-4 3"/><circle cx="12" cy="10" r="2"/></svg>
              </span>
              <h3 className="text-xl font-extrabold text-gray-900">Acompañamiento Personalizado</h3>
              <p className="text-gray-700">Trabajamos de cerca con su equipo, enfocándonos en resultados medibles.</p>
            </div>
            {/* Escalabilidad */}
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-3 flex flex-col gap-2 items-start min-h-[140px] h-[220px] md:h-[200px] lg:h-[180px] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <span className="bg-[#FF6F00] rounded-full w-14 h-14 flex items-center justify-center mb-2">
                <svg width="32" height="32" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8v8H8z"/><path d="M16 16l4 4"/></svg>
              </span>
              <h3 className="text-xl font-extrabold text-gray-900">Escalabilidad</h3>
              <p className="text-gray-700">Nuestras soluciones crecen con su empresa, transformando procesos a medida que evoluciona.</p>
            </div>
            {/* ¿Listo para Transformar? */}
            <div className="bg-[#FF6F00] rounded-2xl shadow-lg p-4 md:p-3 flex flex-col gap-2 items-start justify-between min-h-[140px] h-[220px] md:h-[200px] lg:h-[180px] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <span className="bg-white rounded-full w-14 h-14 flex items-center justify-center mb-2">
                <svg width="32" height="32" fill="none" stroke="#FF6F00" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20"/><path d="M5 12h14"/><path d="M12 2l7 10-7 10-7-10z"/></svg>
              </span>
              <h3 className="text-xl font-extrabold text-white">¿Listo para Transformar?</h3>
              <p className="text-white">Descubra cómo podemos impulsar su empresa al siguiente nivel.</p>
              <a href="#contacto" className="mt-2 inline-block bg-white text-[#FF6F00] font-bold px-6 py-2 rounded shadow hover:bg-gray-100 transition">Contáctanos</a>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Servicio */}
      <section id="servicios" className="w-full bg-white py-16 px-4 text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black text-center mb-2 relative">
            Áreas de Servicio
            <span className="block mx-auto mt-2 w-32 h-1 bg-[#FF6F00] rounded"></span>
          </h2>
          <p className="text-center text-black mb-10">Explore nuestras soluciones integrales para su empresa</p>
          {/* Tabs */}
          <TabsServicios />
        </div>
      </section>

      {/* Casos de Éxito */}
      <section id="casos-exito" className="w-full bg-[#181818] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-2 relative">
            Casos de Éxito
            <span className="block mx-auto mt-2 w-24 h-1 bg-[#FF6F00] rounded"></span>
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tarjeta 1 */}
            <div className="bg-[#232c3b] rounded-xl p-8 shadow-lg flex flex-col justify-between min-h-[320px] relative">
              <span className="absolute top-6 right-6 bg-[#FF6F00] text-white text-sm font-bold px-4 py-1 rounded-full" style={{marginBottom: '1.5rem'}} >Logística</span>
              <div className="flex items-center gap-4 mb-4 mt-12">
                <span className="bg-[#FF6F00] rounded-full w-12 h-12 flex items-center justify-center text-2xl text-white"><svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 11v2"/><path d="M10 11v2"/><path d="M14 11v2"/><path d="M18 11v2"/></svg></span>
                <h3 className="text-xl font-extrabold text-white">Optimización Logística</h3>
              </div>
              <p className="text-white mb-6">Empresa logística que redujo un 25% sus costos operativos mediante la implementación de nuestras soluciones de optimización de rutas y gestión de inventario.</p>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <span className="text-[#FF6F00] font-bold">25% reducción de costos</span>
              </div>
            </div>
            {/* Tarjeta 2 */}
            <div className="bg-[#232c3b] rounded-xl p-8 shadow-lg flex flex-col justify-between min-h-[320px] relative">
              <span className="absolute top-6 right-6 bg-[#FF6F00] text-white text-sm font-bold px-4 py-1 rounded-full" style={{marginBottom: '1.5rem'}} >Tecnología</span>
              <div className="flex items-center gap-4 mb-4 mt-12">
                <span className="bg-[#FF6F00] rounded-full w-12 h-12 flex items-center justify-center text-2xl text-white"><svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 9h8M8 13h6"/></svg></span>
                <h3 className="text-xl font-extrabold text-white">Automatización Legal</h3>
              </div>
              <p className="text-white mb-6">PyME que automatizó su área legal con chatbots de IA, reduciendo tiempos de respuesta y mejorando la satisfacción de sus clientes.</p>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <span className="text-[#FF6F00] font-bold">80% menos tiempo de respuesta</span>
              </div>
            </div>
            {/* Tarjeta 3 */}
            <div className="bg-[#232c3b] rounded-xl p-8 shadow-lg flex flex-col justify-between min-h-[320px] relative">
              <span className="absolute top-6 right-6 bg-[#FF6F00] text-white text-sm font-bold px-4 py-1 rounded-full" style={{marginBottom: '1.5rem'}} >Marketing</span>
              <div className="flex items-center gap-4 mb-4 mt-12">
                <span className="bg-[#FF6F00] rounded-full w-12 h-12 flex items-center justify-center text-2xl text-white"><svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3v18"/><path d="M5 12h14"/><circle cx="12" cy="12" r="10"/></svg></span>
                <h3 className="text-xl font-extrabold text-white">Estrategia Digital</h3>
              </div>
              <p className="text-white mb-6">Firma comercial que duplicó ventas mediante una estrategia digital integral, incluyendo posicionamiento SEO y campañas de conversión.</p>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <span className="text-[#FF6F00] font-bold">100% incremento en ventas</span>
              </div>
            </div>
          </div>
          {/* Por Qué Elegir Nexoria */}
          <section className="w-full bg-[#f6f6f6] py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#181818] text-center mb-2 relative">
                ¿Por Qué Elegir Nexoria?
                <span className="block mx-auto mt-2 w-24 h-1 bg-[#FF6F00] rounded"></span>
              </h2>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Tarjeta 1 */}
                <div className="bg-white rounded-xl p-8 shadow flex flex-col min-h-[180px]">
                  <span className="bg-[#FF6F00] rounded-full w-14 h-14 flex items-center justify-center text-2xl text-white mb-4">
                    <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20"/><path d="M5 12h14"/><circle cx="12" cy="12" r="10"/></svg>
                  </span>
                  <h3 className="text-xl font-extrabold text-[#181818] mb-2">Enfoque Integral</h3>
                  <p className="text-[#181818]">Unimos derecho, estrategia y tecnología para ofrecer soluciones completas a problemas complejos.</p>
                </div>
                {/* Tarjeta 2 */}
                <div className="bg-white rounded-xl p-8 shadow flex flex-col min-h-[180px]">
                  <span className="bg-[#FF6F00] rounded-full w-14 h-14 flex items-center justify-center text-2xl text-white mb-4">
                    <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
                  </span>
                  <h3 className="text-xl font-extrabold text-[#181818] mb-2">Equipo Multidisciplinario</h3>
                  <p className="text-[#181818]">Profesionales con experiencia en diversas áreas trabajando de forma coordinada para su empresa.</p>
                </div>
                {/* Tarjeta 3 */}
                <div className="bg-white rounded-xl p-8 shadow flex flex-col min-h-[180px]">
                  <span className="bg-[#FF6F00] rounded-full w-14 h-14 flex items-center justify-center text-2xl text-white mb-4">
                    <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M2 12h20"/><path d="M12 2v20"/></svg>
                  </span>
                  <h3 className="text-xl font-extrabold text-[#181818] mb-2">Acompañamiento Cercano</h3>
                  <p className="text-[#181818]">Procesos personalizados y seguimiento constante para garantizar resultados óptimos.</p>
                </div>
                {/* Tarjeta 4 */}
                <div className="bg-white rounded-xl p-8 shadow flex flex-col min-h-[180px]">
                  <span className="bg-[#FF6F00] rounded-full w-14 h-14 flex items-center justify-center text-2xl text-white mb-4">
                    <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 16h8M8 12h8M8 8h8"/></svg>
                  </span>
                  <h3 className="text-xl font-extrabold text-[#181818] mb-2">Medición de Resultados</h3>
                  <p className="text-[#181818]">Evaluamos constantemente el impacto de nuestras soluciones para optimizar su rendimiento.</p>
                </div>
                {/* Tarjeta 5 */}
                <div className="bg-white rounded-xl p-8 shadow flex flex-col min-h-[180px]">
                  <span className="bg-[#FF6F00] rounded-full w-14 h-14 flex items-center justify-center text-2xl text-white mb-4">
                    <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M12 8v8M8 12h8"/></svg>
                  </span>
                  <h3 className="text-xl font-extrabold text-[#181818] mb-2">Escalabilidad</h3>
                  <p className="text-[#181818]">Nuestras soluciones crecen con su empresa, adaptándose a nuevos desafíos y oportunidades.</p>
                </div>
                {/* Tarjeta 6 CTA */}
                <div className="bg-[#FF6F00] rounded-xl p-8 shadow flex flex-col min-h-[180px] justify-between">
                  <span className="bg-white rounded-full w-14 h-14 flex items-center justify-center text-2xl text-[#FF6F00] mb-4">
                    <svg width="28" height="28" fill="none" stroke="#FF6F00" strokeWidth="2" viewBox="0 0 24 24"><path d="M2 12h20"/><path d="M12 2v20"/></svg>
                  </span>
                  <div>
                    <h3 className="text-xl font-extrabold text-white mb-2">¿Listo para Comenzar?</h3>
                    <p className="text-white mb-4">Descubra cómo podemos transformar su empresa con nuestras soluciones integrales.</p>
                    <a href="#contacto" className="inline-block bg-white text-[#FF6F00] font-bold px-6 py-2 rounded shadow hover:bg-gray-100 transition">Contáctanos</a>
        </div>
                </div>
              </div>
          </div>
          </section>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="w-full bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#181818] relative inline-block">
            Contáctanos
              <span className="block mx-auto mt-2 w-24 h-1 bg-[#FF6F00] rounded"></span>
          </h2>
            <p className="text-lg text-gray-600 mt-4">¿Listo para transformar tu empresa?</p>
          </div>
          <div className="flex flex-col md:flex-row gap-12">
            {/* Columna Izquierda: Formulario */}
            <ContactForm />
            {/* Columna Derecha: Información de Contacto */}
            <div className="flex-1 bg-[#181818] text-white p-12 rounded-lg flex flex-col justify-center min-h-[520px] h-full">
              <div>
                <h3 className="text-2xl font-bold text-[#FF6F00] mb-8 text-center md:text-left">Información de Contacto</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <span className="bg-[#FF6F00] rounded-full w-10 h-10 flex items-center justify-center mt-1"><svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></span>
                    <div>
                      <h4 className="font-bold">Dirección</h4>
                      <p>{contactInfo?.direccion || 'No disponible'}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="bg-[#FF6F00] rounded-full w-10 h-10 flex items-center justify-center mt-1"><svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg></span>
                    <div>
                      <h4 className="font-bold">Teléfono</h4>
                      <p>{contactInfo?.telefono || 'No disponible'}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="bg-[#FF6F00] rounded-full w-10 h-10 flex items-center justify-center mt-1"><svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></span>
                    <div>
                      <h4 className="font-bold">Correo Electrónico</h4>
                      <p>{contactInfo?.correo || 'No disponible'}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="bg-[#FF6F00] rounded-full w-10 h-10 flex items-center justify-center mt-1"><svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg></span>
                    <div>
                      <h4 className="font-bold">Horario de Atención</h4>
                      <p>{contactInfo?.horario || 'No disponible'}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <h4 className="font-bold mb-4 text-center md:text-left">Síguenos en redes sociales</h4>
                <div className="flex gap-3 justify-center md:justify-start">
                  {redes.map(red => (
                    <a key={red.name} href={red.url} target="_blank" rel="noopener noreferrer" className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#FF6F00] transition-colors">
                      {red.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            </div>
        </div>
      </section>
    </div>
  );
}

// Componente TabsServicios
function TabsServicios() {
  const tabs = [
    { label: 'Servicios Legales', icon: (
      <svg className="inline mr-2" width="20" height="20" fill="none" stroke="#FF6F00" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3v2"/><path d="M6 5l6 1 6-1"/><path d="M6 5v2a6 6 0 0 0 12 0V5"/><path d="M6 17a6 6 0 0 0 12 0"/><path d="M6 17v2a6 6 0 0 0 12 0v-2"/></svg>
    ) },
    { label: 'Servicios Logísticos', icon: (
      <svg className="inline mr-2" width="20" height="20" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><rect x="1" y="7" width="15" height="13" rx="2"/><path d="M16 7h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"/><circle cx="5.5" cy="18.5" r="1.5"/><circle cx="18.5" cy="18.5" r="1.5"/></svg>
    ) },
    { label: 'Estrategia en Negocios', icon: (
      <svg className="inline mr-2" width="20" height="20" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M7 15l3-3 4 4 5-5"/></svg>
    ) },
    { label: 'Marketing', icon: (
      <svg className="inline mr-2" width="20" height="20" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
    ) },
    { label: 'Tecnología e IA', icon: (
      <svg className="inline mr-2" width="20" height="20" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 11v2"/><path d="M10 11v2"/><path d="M14 11v2"/><path d="M18 11v2"/></svg>
    ) },
  ];
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 border-b mb-8">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            className={`px-4 py-2 font-bold flex items-center gap-1 border-b-2 transition-all ${active === i ? 'text-[#FF6F00] border-[#FF6F00] bg-white' : 'text-gray-900 border-transparent bg-transparent hover:bg-gray-100'}`}
            onClick={() => setActive(i)}
          >
            {tab.icon}{tab.label}
          </button>
        ))}
      </div>
      <div>
        {active === 0 && <ServiciosLegales />}
        {active === 1 && <ServiciosLogisticos />}
        {active === 2 && <EstrategiaNegocios />}
        {active === 3 && <Marketing />}
        {active === 4 && <TecnologiaIA />}
      </div>
    </div>
  );
}

// Componente ServiciosLegales
function ServiciosLegales() {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Columna izquierda */}
      <div className="flex-1">
        <h3 className="text-2xl font-extrabold text-[#FF6F00] mb-2">Servicios Legales</h3>
        <p className="mb-4 text-black">Ofrecemos asesoría legal integral para proteger su empresa y optimizar sus operaciones desde una perspectiva jurídica.</p>
        <div className="mb-4">
          <span className="font-bold">Especialidades:</span>
          <ul className="mt-2 space-y-2">
            <li className="flex items-start gap-2"><span className="mt-1"><svg width="18" height="18" fill="#FF6F00" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M16 12l-4 4-2-2" fill="none" stroke="#fff" strokeWidth="2"/></svg></span><span className="text-black"><b>Derecho Mercantil:</b> Constitución de empresas, contratos, fusiones, adquisiciones, litigios comerciales.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1"><svg width="18" height="18" fill="#FF6F00" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M16 12l-4 4-2-2" fill="none" stroke="#fff" strokeWidth="2"/></svg></span><span className="text-black"><b>Derecho Civil:</b> Contratos civiles, arrendamientos, sucesiones, protección patrimonial.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1"><svg width="18" height="18" fill="#FF6F00" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M16 12l-4 4-2-2" fill="none" stroke="#fff" strokeWidth="2"/></svg></span><span className="text-black"><b>Derecho Penal:</b> Defensa en delitos económicos, financieros, patrimoniales y corporativos.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1"><svg width="18" height="18" fill="#FF6F00" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M16 12l-4 4-2-2" fill="none" stroke="#fff" strokeWidth="2"/></svg></span><span className="text-black"><b>Derecho Laboral:</b> Contratación, cumplimiento de la LFT, despidos, representación ante tribunales.</span></li>
          </ul>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 mt-4">
          <span className="font-bold text-black">Valor agregado:</span>
          <p className="text-black">Prevención de riesgos jurídicos, fortalecimiento institucional y defensa profesional.</p>
        </div>
      </div>
      {/* Columna derecha: Simulador */}
      <div className="flex-1 bg-gray-100 rounded-2xl p-6 text-black">
        <SimuladorRiesgoLegal />
      </div>
    </div>
  );
}

// Componente SimuladorRiesgoLegal
function SimuladorRiesgoLegal() {
  const [contratos, setContratos] = useState('no');
  const [protocolos, setProtocolos] = useState('no');
  const [asesoria, setAsesoria] = useState('no');
  const [resultado, setResultado] = useState('');
  function evaluar() {
    let score = 0;
    if (contratos === 'si') score++;
    if (protocolos === 'si') score++;
    if (asesoria === 'si') score++;
    if (score === 3) setResultado('¡Riesgo Bajo! Su empresa está bien protegida legalmente.');
    else if (score === 2) setResultado('Riesgo Medio. Puede mejorar su protección legal.');
    else setResultado('Riesgo Alto. Le recomendamos asesoría legal inmediata.');
  }
  return (
    <div>
      <h4 className="text-xl font-bold mb-2">Simulador de Riesgo Legal</h4>
      <p className="mb-4">Evalúe el nivel de protección legal de su empresa respondiendo estas preguntas:</p>
      <div className="mb-3">
        <label className="block mb-1 font-medium">¿Su empresa cuenta con contratos formalizados para todos sus servicios?</label>
        <select value={contratos} onChange={e => setContratos(e.target.value)} className="w-full rounded border px-3 py-2">
          <option value="no">No, trabajamos sin contratos</option>
          <option value="si">Sí, todos los servicios tienen contrato</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="block mb-1 font-medium">¿Tiene protocolos de cumplimiento normativo?</label>
        <select value={protocolos} onChange={e => setProtocolos(e.target.value)} className="w-full rounded border px-3 py-2">
          <option value="no">No tenemos</option>
          <option value="si">Sí, tenemos protocolos</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">¿Cuenta con asesoría legal permanente?</label>
        <select value={asesoria} onChange={e => setAsesoria(e.target.value)} className="w-full rounded border px-3 py-2">
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </div>
      <button onClick={evaluar} className="w-full bg-[#FF6F00] text-white font-bold py-3 rounded mt-2 hover:bg-orange-600 transition">Evaluar Riesgo Legal</button>
      {resultado && <div className="mt-4 p-3 rounded bg-white text-center font-semibold text-[#FF6F00] border border-[#FF6F00]">{resultado}</div>}
    </div>
  );
}

// Servicios Logísticos
function ServiciosLogisticos() {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1">
        <h3 className="text-2xl font-extrabold text-[#FF6F00] mb-2">Servicios Logísticos</h3>
        <p className="mb-4 text-black">Optimizamos la cadena de suministro y la operación logística de tu empresa para lograr eficiencia y reducción de costos.</p>
        <div className="mb-4">
          <span className="font-bold">Especialidades:</span>
          <ul className="mt-2 space-y-2">
            <li className="flex items-start gap-2"><span className="mt-1"><svg width="18" height="18" fill="#FF6F00" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 11v2"/><path d="M10 11v2"/><path d="M14 11v2"/><path d="M18 11v2"/></svg></span><span className="text-black"><b>Logística Integral:</b> Diseño y gestión de cadenas de suministro, distribución y transporte.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1"><svg width="18" height="18" fill="#FF6F00" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 11v2"/><path d="M10 11v2"/><path d="M14 11v2"/><path d="M18 11v2"/></svg></span><span className="text-black"><b>Optimización de Costos:</b> Reducción de gastos logísticos y mejora de procesos.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1"><svg width="18" height="18" fill="#FF6F00" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 11v2"/><path d="M10 11v2"/><path d="M14 11v2"/><path d="M18 11v2"/></svg></span><span className="text-black"><b>Cumplimiento Normativo:</b> Asesoría en regulaciones y normativas de transporte y comercio.</span></li>
          </ul>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 mt-4">
          <span className="font-bold text-black">Valor agregado:</span>
          <p className="text-black">Eficiencia operativa, reducción de tiempos y costos, cumplimiento legal.</p>
        </div>
      </div>
      <div className="flex-1 bg-gray-100 rounded-2xl p-6 text-black">
        <SimuladorLogistico />
      </div>
    </div>
  );
}

function SimuladorLogistico() {
  const [cadena, setCadena] = useState('no');
  const [costos, setCostos] = useState('no');
  const [normas, setNormas] = useState('no');
  const [resultado, setResultado] = useState('');
  function evaluar() {
    let score = 0;
    if (cadena === 'si') score++;
    if (costos === 'si') score++;
    if (normas === 'si') score++;
    if (score === 3) setResultado('¡Logística Óptima! Su empresa tiene una operación eficiente.');
    else if (score === 2) setResultado('Logística Mejorable. Puede optimizar aún más sus procesos.');
    else setResultado('Alto Riesgo Logístico. Requiere asesoría y optimización urgente.');
  }
  return (
    <div>
      <h4 className="text-xl font-bold mb-2">Simulador de Eficiencia Logística</h4>
      <p className="mb-4">Evalúe la eficiencia logística de su empresa respondiendo estas preguntas:</p>
      <div className="mb-3">
        <label className="block mb-1 font-medium">¿Cuenta con una cadena de suministro bien estructurada?</label>
        <select value={cadena} onChange={e => setCadena(e.target.value)} className="w-full rounded border px-3 py-2">
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="block mb-1 font-medium">¿Ha optimizado sus costos logísticos en el último año?</label>
        <select value={costos} onChange={e => setCostos(e.target.value)} className="w-full rounded border px-3 py-2">
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">¿Cumple con todas las normativas de transporte y comercio?</label>
        <select value={normas} onChange={e => setNormas(e.target.value)} className="w-full rounded border px-3 py-2">
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </div>
      <button onClick={evaluar} className="w-full bg-[#FF6F00] text-white font-bold py-3 rounded mt-2 hover:bg-orange-600 transition">Evaluar Eficiencia</button>
      {resultado && <div className="mt-4 p-3 rounded bg-white text-center font-semibold text-[#FF6F00] border border-[#FF6F00]">{resultado}</div>}
    </div>
  );
}

// Estrategia en Negocios
function EstrategiaNegocios() {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1">
        <h3 className="text-2xl font-extrabold text-[#FF6F00] mb-2">Estrategia en Negocios</h3>
        <p className="mb-4 text-black">Impulsamos el crecimiento y la competitividad de tu empresa con estrategias personalizadas y análisis de mercado.</p>
        <div className="mb-4">
          <span className="font-bold">Especialidades:</span>
          <ul className="mt-2 space-y-2">
            <li className="flex items-start gap-2"><span className="mt-1"><svg width="18" height="18" fill="#FF6F00" viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M7 15l3-3 4 4 5-5" stroke="#fff" strokeWidth="2" fill="none"/></svg></span><span className="text-black"><b>Consultoría Estratégica:</b> Análisis de mercado, modelos de negocio, planificación y expansión.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1"><svg width="18" height="18" fill="#FF6F00" viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M7 15l3-3 4 4 5-5" stroke="#fff" strokeWidth="2" fill="none"/></svg></span><span className="text-black"><b>Evaluación Financiera:</b> Diagnóstico y proyección de resultados.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1"><svg width="18" height="18" fill="#FF6F00" viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M7 15l3-3 4 4 5-5" stroke="#fff" strokeWidth="2" fill="none"/></svg></span><span className="text-black"><b>Transformación Empresarial:</b> Innovación y mejora continua.</span></li>
          </ul>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 mt-4">
          <span className="font-bold text-black">Valor agregado:</span>
          <p className="text-black">Crecimiento sostenible, toma de decisiones informada y ventaja competitiva.</p>
        </div>
      </div>
      <div className="flex-1 bg-gray-100 rounded-2xl p-6 text-black">
        <SimuladorNegocios />
      </div>
    </div>
  );
}

function SimuladorNegocios() {
  const [plan, setPlan] = useState('no');
  const [finanzas, setFinanzas] = useState('no');
  const [innovacion, setInnovacion] = useState('no');
  const [resultado, setResultado] = useState('');
  function evaluar() {
    let score = 0;
    if (plan === 'si') score++;
    if (finanzas === 'si') score++;
    if (innovacion === 'si') score++;
    if (score === 3) setResultado('¡Negocio Sólido! Su empresa está bien posicionada.');
    else if (score === 2) setResultado('Negocio Mejorable. Puede fortalecer su estrategia.');
    else setResultado('Alto Riesgo Empresarial. Requiere consultoría estratégica.');
  }
  return (
    <div>
      <h4 className="text-xl font-bold mb-2">Simulador de Estrategia Empresarial</h4>
      <p className="mb-4">Evalúe la solidez estratégica de su empresa respondiendo estas preguntas:</p>
      <div className="mb-3">
        <label className="block mb-1 font-medium">¿Cuenta con un plan estratégico actualizado?</label>
        <select value={plan} onChange={e => setPlan(e.target.value)} className="w-full rounded border px-3 py-2">
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="block mb-1 font-medium">¿Realiza análisis financiero periódicamente?</label>
        <select value={finanzas} onChange={e => setFinanzas(e.target.value)} className="w-full rounded border px-3 py-2">
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">¿Fomenta la innovación en su empresa?</label>
        <select value={innovacion} onChange={e => setInnovacion(e.target.value)} className="w-full rounded border px-3 py-2">
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </div>
      <button onClick={evaluar} className="w-full bg-[#FF6F00] text-white font-bold py-3 rounded mt-2 hover:bg-orange-600 transition">Evaluar Estrategia</button>
      {resultado && <div className="mt-4 p-3 rounded bg-white text-center font-semibold text-[#FF6F00] border border-[#FF6F00]">{resultado}</div>}
    </div>
  );
}

// Marketing
function Marketing() {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1">
        <h3 className="text-2xl font-extrabold text-[#FF6F00] mb-2">Marketing</h3>
        <p className="mb-4 text-black">Potenciamos la presencia y el crecimiento de tu empresa con estrategias de marketing digital y comercial.</p>
        <div className="mb-4">
          <span className="font-bold">Especialidades:</span>
          <ul className="mt-2 space-y-2">
            <li className="flex items-start gap-2"><span className="mt-1"><svg width="18" height="18" fill="#FF6F00" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8" stroke="#fff" strokeWidth="2" fill="none"/></svg></span><span className="text-black"><b>Branding:</b> Posicionamiento y construcción de marca.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1"><svg width="18" height="18" fill="#FF6F00" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8" stroke="#fff" strokeWidth="2" fill="none"/></svg></span><span className="text-black"><b>Marketing Digital:</b> Estrategias en redes sociales, campañas y automatización.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1"><svg width="18" height="18" fill="#FF6F00" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8" stroke="#fff" strokeWidth="2" fill="none"/></svg></span><span className="text-black"><b>Comercial:</b> Estrategias de ventas y crecimiento de clientes.</span></li>
          </ul>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 mt-4">
          <span className="font-bold text-black">Valor agregado:</span>
          <p className="text-black">Mayor visibilidad, captación de clientes y crecimiento sostenible.</p>
        </div>
      </div>
      <div className="flex-1 bg-gray-100 rounded-2xl p-6 text-black">
        <SimuladorMarketing />
      </div>
    </div>
  );
}

function SimuladorMarketing() {
  const [marca, setMarca] = useState('no');
  const [digital, setDigital] = useState('no');
  const [ventas, setVentas] = useState('no');
  const [resultado, setResultado] = useState('');
  function evaluar() {
    let score = 0;
    if (marca === 'si') score++;
    if (digital === 'si') score++;
    if (ventas === 'si') score++;
    if (score === 3) setResultado('¡Marketing Exitoso! Su empresa tiene gran visibilidad.');
    else if (score === 2) setResultado('Marketing Mejorable. Puede potenciar su presencia digital.');
    else setResultado('Alto Riesgo Comercial. Requiere estrategia de marketing urgente.');
  }
  return (
    <div>
      <h4 className="text-xl font-bold mb-2">Simulador de Marketing</h4>
      <p className="mb-4">Evalúe la efectividad de su marketing respondiendo estas preguntas:</p>
      <div className="mb-3">
        <label className="block mb-1 font-medium">¿Tiene una marca bien posicionada?</label>
        <select value={marca} onChange={e => setMarca(e.target.value)} className="w-full rounded border px-3 py-2">
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="block mb-1 font-medium">¿Utiliza marketing digital y automatización?</label>
        <select value={digital} onChange={e => setDigital(e.target.value)} className="w-full rounded border px-3 py-2">
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">¿Cuenta con estrategias de ventas efectivas?</label>
        <select value={ventas} onChange={e => setVentas(e.target.value)} className="w-full rounded border px-3 py-2">
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </div>
      <button onClick={evaluar} className="w-full bg-[#FF6F00] text-white font-bold py-3 rounded mt-2 hover:bg-orange-600 transition">Evaluar Marketing</button>
      {resultado && <div className="mt-4 p-3 rounded bg-white text-center font-semibold text-[#FF6F00] border border-[#FF6F00]">{resultado}</div>}
    </div>
  );
}

// Tecnología e IA
function TecnologiaIA() {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1">
        <h3 className="text-2xl font-extrabold text-[#FF6F00] mb-2">Tecnología e IA</h3>
        <p className="mb-4 text-black">Modernizamos tu empresa con soluciones tecnológicas e inteligencia artificial para automatizar y escalar procesos.</p>
        <div className="mb-4">
          <span className="font-bold">Especialidades:</span>
          <ul className="mt-2 space-y-2">
            <li className="flex items-start gap-2"><span className="mt-1"><svg width="18" height="18" fill="#FF6F00" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 11v2"/><path d="M10 11v2"/><path d="M14 11v2"/><path d="M18 11v2"/></svg></span><span className="text-black"><b>Automatización:</b> Implementación de sistemas y procesos automáticos.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1"><svg width="18" height="18" fill="#FF6F00" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 11v2"/><path d="M10 11v2"/><path d="M14 11v2"/><path d="M18 11v2"/></svg></span><span className="text-black"><b>Inteligencia Artificial:</b> Soluciones de IA para análisis, predicción y chatbots.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1"><svg width="18" height="18" fill="#FF6F00" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 11v2"/><path d="M10 11v2"/><path d="M14 11v2"/><path d="M18 11v2"/></svg></span><span className="text-black"><b>Transformación Digital:</b> Integración de tecnología en todos los procesos.</span></li>
          </ul>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 mt-4">
          <span className="font-bold text-black">Valor agregado:</span>
          <p className="text-black">Automatización, reducción de errores, escalabilidad y análisis avanzado.</p>
        </div>
      </div>
      <div className="flex-1 bg-gray-100 rounded-2xl p-6 text-black">
        <SimuladorTecnologia />
      </div>
    </div>
  );
}

function SimuladorTecnologia() {
  const [auto, setAuto] = useState('no');
  const [ia, setIa] = useState('no');
  const [digital, setDigital] = useState('no');
  const [resultado, setResultado] = useState('');
  function evaluar() {
    let score = 0;
    if (auto === 'si') score++;
    if (ia === 'si') score++;
    if (digital === 'si') score++;
    if (score === 3) setResultado('¡Empresa Moderna! Su empresa está a la vanguardia tecnológica.');
    else if (score === 2) setResultado('Tecnología Mejorable. Puede modernizar más procesos.');
    else setResultado('Alto Riesgo Tecnológico. Requiere transformación digital urgente.');
  }
  return (
    <div>
      <h4 className="text-xl font-bold mb-2">Simulador de Tecnología e IA</h4>
      <p className="mb-4">Evalúe el nivel de modernización tecnológica de su empresa respondiendo estas preguntas:</p>
      <div className="mb-3">
        <label className="block mb-1 font-medium">¿Ha automatizado procesos clave en su empresa?</label>
        <select value={auto} onChange={e => setAuto(e.target.value)} className="w-full rounded border px-3 py-2">
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="block mb-1 font-medium">¿Utiliza inteligencia artificial en sus operaciones?</label>
        <select value={ia} onChange={e => setIa(e.target.value)} className="w-full rounded border px-3 py-2">
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">¿Ha iniciado la transformación digital de su empresa?</label>
        <select value={digital} onChange={e => setDigital(e.target.value)} className="w-full rounded border px-3 py-2">
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </div>
      <button onClick={evaluar} className="w-full bg-[#FF6F00] text-white font-bold py-3 rounded mt-2 hover:bg-orange-600 transition">Evaluar Tecnología</button>
      {resultado && <div className="mt-4 p-3 rounded bg-white text-center font-semibold text-[#FF6F00] border border-[#FF6F00]">{resultado}</div>}
    </div>
  );
} 