'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Servicios() {
  const servicios = [
    {
      title: 'Servicios Legales',
      icon: '⚖️',
      areas: [
        {
          subtitle: 'Derecho Mercantil',
          enfoque: 'Asesoramos a empresas y emprendedores en todas las etapas del ciclo comercial: desde la constitución de sociedades, redacción y revisión de contratos, fusiones y adquisiciones, hasta la resolución de conflictos comerciales. Brindamos seguridad jurídica que fortalece las relaciones empresariales y minimiza riesgos.'
        },
        {
          subtitle: 'Derecho Civil',
          enfoque: 'Ofrecemos asesoría integral en temas patrimoniales, contratos civiles, arrendamientos, sucesiones y responsabilidad civil. Protegemos los intereses personales y familiares de nuestros clientes con soluciones jurídicas a la medida.'
        },
        {
          subtitle: 'Derecho Penal',
          enfoque: 'Defendemos los derechos de personas físicas y morales frente a procedimientos penales, tanto en etapa de investigación como en juicio. Nos especializamos en delitos económicos, financieros, corporativos y delitos contra la propiedad.'
        },
        {
          subtitle: 'Derecho Laboral',
          enfoque: 'Brindamos asesoría preventiva y contenciosa a empresas y trabajadores en temas como contratos laborales, despidos, conciliaciones, cumplimiento de la Ley Federal del Trabajo y representación ante autoridades laborales.'
        }
      ]
    },
    {
      title: 'Servicios Logísticos',
      icon: '🚚',
      areas: [
        {
          subtitle: 'Logística Integral',
          enfoque: 'Diseñamos, optimizamos y gestionamos soluciones logísticas para cadenas de suministro, distribución y transporte. Ayudamos a nuestros clientes a reducir costos, mejorar tiempos de entrega y asegurar una operación eficiente con enfoque estratégico y cumplimiento normativo.'
        }
      ]
    },
    {
      title: 'Estrategia en Negocios',
      icon: '📈',
      areas: [
        {
          subtitle: 'Consultoría Estratégica',
          enfoque: 'Proveemos análisis de mercado, desarrollo de modelos de negocio, evaluación financiera y planificación estratégica para empresas en crecimiento o en proceso de transformación. Nuestra metodología se enfoca en generar valor sostenible, aumentar la competitividad y facilitar la toma de decisiones informadas.'
        }
      ]
    },
    {
      title: 'Marketing y Estrategia Comercial',
      icon: '💡',
      areas: [
        {
          subtitle: 'Marketing Integral',
          enfoque: 'Creamos e implementamos estrategias de marketing integrales: desde branding, campañas digitales, posicionamiento, análisis de clientes hasta automatización de procesos de venta. Ayudamos a las empresas a crecer su base de clientes, consolidar su marca y aumentar sus ingresos con un enfoque orientado a resultados.'
        }
      ]
    },
    {
      title: 'Servicios Tecnológicos con Enfoque en IA',
      icon: '🤖',
      areas: [
        {
          subtitle: 'Soluciones con IA',
          enfoque: 'Desarrollamos soluciones tecnológicas personalizadas aplicando inteligencia artificial para la automatización de procesos, análisis predictivo, chatbots legales y herramientas de toma de decisiones. Integramos tecnología avanzada en los procesos operativos y estratégicos de nuestros clientes para mejorar su eficiencia, reducir costos y escalar operaciones de forma inteligente.'
        }
      ]
    }
  ];

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
            Servicios Nexoria
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Soluciones integrales para empresas modernas. Asesoría legal, logística, estrategia, marketing y tecnología con IA, todo en un solo lugar.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {servicios.map((servicio, idx) => (
            <motion.div
              key={servicio.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl shadow-lg p-8 flex flex-col gap-4 hover:scale-[1.02] transition-transform border border-nexoria-orange/30"
            >
              <div className="flex items-center gap-4 mb-2">
                <span className="text-4xl">{servicio.icon}</span>
                <h2 className="text-2xl font-bold text-nexoria-white">{servicio.title}</h2>
              </div>
              <div className="flex flex-col gap-3 mt-2">
                {servicio.areas.map((area) => (
                  <div key={area.subtitle} className="bg-gray-800 rounded-lg p-4 mb-2">
                    <h3 className="text-lg font-semibold text-nexoria-orange mb-1">{area.subtitle}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {area.enfoque}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-nexoria-white mb-4">
            ¿Listo para transformar tu empresa?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Agenda una consultoría gratuita y descubre cómo podemos ayudarte a crecer con seguridad, eficiencia y visión.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-nexoria-orange text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all"
          >
            Solicitar asesoría
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 