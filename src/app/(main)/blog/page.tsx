'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const categorias = [
  'Derecho Civil',
  'Derecho Penal',
  'Derecho Laboral',
  'Derecho Mercantil',
  'Derecho Familiar',
  'Derecho Corporativo',
  'Emprendedores',
  'PYMES'
];

const posts = [
  {
    title: 'Cómo registrar tu empresa en CDMX',
    excerpt: 'Guía completa para el registro de empresas en la Ciudad de México. Pasos, requisitos y recomendaciones legales.',
    image: '/blog/registro-empresa.jpg',
    categoria: 'Emprendedores',
    fecha: '25 de Febrero, 2024',
    slug: 'registro-empresa-cdmx',
    tiempoLectura: '5 min'
  },
  {
    title: 'Qué hacer ante un despido injustificado',
    excerpt: 'Pasos legales para defender tus derechos laborales. Conoce tus opciones y cómo proceder legalmente.',
    image: '/blog/despido-injustificado.jpg',
    categoria: 'Derecho Laboral',
    fecha: '20 de Febrero, 2024',
    slug: 'despido-injustificado',
    tiempoLectura: '7 min'
  },
  {
    title: 'Errores legales comunes de emprendedores',
    excerpt: 'Evita estos errores que pueden costarte caro. Conoce las mejores prácticas legales para tu negocio.',
    image: '/blog/errores-emprendedores.jpg',
    categoria: 'Emprendedores',
    fecha: '18 de Febrero, 2024',
    slug: 'errores-emprendedores',
    tiempoLectura: '6 min'
  },
  {
    title: 'Constitución de sociedades: Guía paso a paso',
    excerpt: 'Todo lo que necesitas saber para constituir legalmente tu empresa. Tipos de sociedades y requisitos.',
    image: '/blog/constitucion-sociedades.jpg',
    categoria: 'Derecho Corporativo',
    fecha: '15 de Febrero, 2024',
    slug: 'constitucion-sociedades',
    tiempoLectura: '8 min'
  },
  {
    title: 'Derechos del trabajador en México',
    excerpt: 'Conoce tus derechos laborales fundamentales y cómo hacerlos valer ante las autoridades competentes.',
    image: '/blog/derechos-trabajador.jpg',
    categoria: 'Derecho Laboral',
    fecha: '12 de Febrero, 2024',
    slug: 'derechos-trabajador',
    tiempoLectura: '6 min'
  },
  {
    title: 'Protección de marcas y propiedad intelectual',
    excerpt: 'Cómo proteger tu marca, patentes y creaciones intelectuales. Guía legal para emprendedores y empresas.',
    image: '/blog/proteccion-marcas.jpg',
    categoria: 'Derecho Corporativo',
    fecha: '10 de Febrero, 2024',
    slug: 'proteccion-marcas',
    tiempoLectura: '7 min'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Header del Blog */}
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blog Nexoria
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conocimiento legal, tendencias y casos de éxito para emprendedores, empresas y particulares. 
              Inspírate y protege tus derechos con consejos de expertos legales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categorias.map((categoria) => (
              <button
                key={categoria}
                className="px-6 py-3 rounded-full text-sm font-medium transition-all
                  hover:bg-[#FF6A00] hover:text-white
                  bg-gray-100 text-gray-700 hover:shadow-lg"
              >
                {categoria}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grid de artículos */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gray-300 flex items-center justify-center">
                  <span className="text-4xl">📝</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-[#FF6A00] font-semibold">
                      {post.categoria}
                    </span>
                    <span className="text-sm text-gray-500">
                      {post.tiempoLectura}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-black mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {post.fecha}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[#FF6A00] font-semibold hover:text-orange-600 transition-colors"
                    >
                      Leer más →
                    </Link>
                  </div>
                </div>
              </motion.article>
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
              Nuestros expertos están listos para ayudarte con cualquier consulta legal
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

      {/* Newsletter */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Mantente informado
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Recibe las últimas noticias legales y consejos para tu negocio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-[#FF6A00] focus:outline-none"
              />
              <button className="bg-[#FF6A00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all">
                Suscribirse
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 