'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Blog() {
  const categorias = [
    'Estrategia',
    'Tecnología',
    'Finanzas',
    'Recursos Humanos',
    'Innovación',
    'Liderazgo'
  ];

  const posts = [
    {
      title: 'El futuro de la transformación digital',
      excerpt: 'Descubre las tendencias tecnológicas que definirán el futuro de los negocios y cómo prepararte para ellas.',
      image: '/blog/post1.jpg',
      categoria: 'Tecnología',
      fecha: '15 de Marzo, 2024',
      slug: 'futuro-transformacion-digital'
    },
    {
      title: 'Estrategias de liderazgo post-pandemia',
      excerpt: 'Nuevos enfoques para liderar equipos en la era del trabajo híbrido y mantener la productividad.',
      image: '/blog/post2.jpg',
      categoria: 'Liderazgo',
      fecha: '10 de Marzo, 2024',
      slug: 'liderazgo-post-pandemia'
    },
    {
      title: 'Innovación sostenible en empresas',
      excerpt: 'Cómo implementar prácticas sostenibles sin sacrificar la rentabilidad y el crecimiento empresarial.',
      image: '/blog/post3.jpg',
      categoria: 'Innovación',
      fecha: '5 de Marzo, 2024',
      slug: 'innovacion-sostenible'
    },
    {
      title: 'Gestión financiera en tiempos de incertidumbre',
      excerpt: 'Estrategias para mantener la salud financiera de tu empresa en un entorno económico volátil.',
      image: '/blog/post4.jpg',
      categoria: 'Finanzas',
      fecha: '1 de Marzo, 2024',
      slug: 'gestion-financiera-incertidumbre'
    },
    {
      title: 'El poder del análisis de datos',
      excerpt: 'Cómo utilizar el big data y la analítica para tomar mejores decisiones empresariales.',
      image: '/blog/post5.jpg',
      categoria: 'Tecnología',
      fecha: '25 de Febrero, 2024',
      slug: 'poder-analisis-datos'
    },
    {
      title: 'Cultura organizacional y éxito empresarial',
      excerpt: 'La importancia de construir una cultura sólida para el crecimiento sostenible.',
      image: '/blog/post6.jpg',
      categoria: 'Recursos Humanos',
      fecha: '20 de Febrero, 2024',
      slug: 'cultura-organizacional'
    }
  ];

  return (
    <div className="min-h-screen bg-nexoria-black pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-nexoria-white mb-6">
            Blog Nexoria
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Conocimiento, tendencias y casos de éxito en derecho, logística, estrategia, marketing y tecnología con IA. Inspírate y transforma tu empresa con ideas de expertos.
          </p>
        </motion.div>

        {/* Categorías */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categorias.map((categoria) => (
            <button
              key={categoria}
              className="px-6 py-2 rounded-full text-sm font-medium transition-all
                hover:bg-nexoria-orange hover:text-white
                bg-gray-900 text-gray-300"
            >
              {categoria}
            </button>
          ))}
        </motion.div>

        {/* Grid de artículos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="h-48 bg-gray-800 relative">
                {/* Aquí iría la imagen cuando esté disponible */}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-nexoria-orange text-sm">{post.categoria}</span>
                  <span className="text-gray-400 text-sm">{post.fecha}</span>
                </div>
                <h3 className="text-xl font-semibold text-nexoria-white mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-nexoria-orange hover:text-opacity-80 transition-colors"
                >
                  Leer más
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 