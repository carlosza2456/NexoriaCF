'use client';

import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    message: '',
  });
  const [status, setStatus] = useState({ loading: false, error: '', success: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, error: '', success: '' });

    try {
      console.log('Enviando formulario:', formData);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      console.log('Respuesta del servidor:', response.status, response.statusText);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error del servidor:', errorData);
        throw new Error(errorData.error || `Error del servidor: ${response.status} ${response.statusText}`);
      }
      
      const result = await response.json();
      console.log('Respuesta exitosa:', result);
      
      setFormData({ name: '', email: '', phone: '', company: '', interest: '', message: '' });
      setStatus({ loading: false, error: '', success: '¡Gracias! Tu solicitud ha sido enviada con éxito. Nos pondremos en contacto contigo pronto.' });
    } catch (error: any) {
      console.error('Error completo:', error);
      let errorMessage = 'Error al enviar la solicitud.';
      
      if (error.message) {
        errorMessage = error.message;
      } else if (error.name === 'TypeError' && error.message.includes('fetch')) {
        errorMessage = 'Error de conexión. Verifica tu conexión a internet.';
      }
      
      setStatus({ loading: false, error: errorMessage, success: '' });
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header del formulario */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FF6A00] to-orange-500 rounded-full mb-6 shadow-lg">
          <span className="text-3xl">⚖️</span>
        </div>
        <h3 className="text-4xl font-black text-white mb-4">
          Agenda tu Consulta Gratuita
        </h3>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Obtén asesoría legal especializada sin costo. Nuestros expertos están listos para ayudarte.
        </p>
      </div>

      {/* Formulario */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Primera fila - Nombre y Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <label htmlFor="name" className="block text-sm font-semibold text-white/90 mb-3 group-hover:text-white transition-colors duration-300">
                Nombre completo *
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent transition-all duration-300 hover:bg-white/20 backdrop-blur-sm" 
                placeholder="Tu nombre completo"
              />
            </div>
            <div className="group">
              <label htmlFor="email" className="block text-sm font-semibold text-white/90 mb-3 group-hover:text-white transition-colors duration-300">
                Correo electrónico *
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent transition-all duration-300 hover:bg-white/20 backdrop-blur-sm" 
                placeholder="tu@email.com"
              />
            </div>
          </div>

          {/* Segunda fila - Teléfono y Empresa */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <label htmlFor="phone" className="block text-sm font-semibold text-white/90 mb-3 group-hover:text-white transition-colors duration-300">
                Teléfono
              </label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent transition-all duration-300 hover:bg-white/20 backdrop-blur-sm" 
                placeholder="(55) 1234-5678"
              />
            </div>
            <div className="group">
              <label htmlFor="company" className="block text-sm font-semibold text-white/90 mb-3 group-hover:text-white transition-colors duration-300">
                Empresa
              </label>
              <input 
                type="text" 
                id="company" 
                name="company" 
                value={formData.company} 
                onChange={handleChange} 
                className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent transition-all duration-300 hover:bg-white/20 backdrop-blur-sm" 
                placeholder="Nombre de tu empresa"
              />
            </div>
          </div>

          {/* Servicio de interés */}
          <div className="group">
            <label htmlFor="interest" className="block text-sm font-semibold text-white/90 mb-3 group-hover:text-white transition-colors duration-300">
              Servicio de interés *
            </label>
            <select 
              id="interest" 
              name="interest" 
              value={formData.interest} 
              onChange={handleChange} 
              required 
              className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent transition-all duration-300 hover:bg-white/20 backdrop-blur-sm"
            >
              <option value="" className="bg-gray-800 text-white">Seleccione una opción</option>
              <option value="Diseño de KPIs y Tableros de Gestión" className="bg-gray-800 text-white">📊 Diseño de KPIs y Tableros de Gestión</option>
              <option value="Servicios Legales: Empresas y Personas" className="bg-gray-800 text-white">⚖️ Servicios Legales: Empresas y Personas</option>
              <option value="Optimización de Procesos" className="bg-gray-800 text-white">🔄 Optimización de Procesos</option>
              <option value="Desarrollo Web y Soluciones Digitales" className="bg-gray-800 text-white">💻 Desarrollo Web y Soluciones Digitales</option>
              <option value="Creación y Constitución de Empresas" className="bg-gray-800 text-white">🚀 Creación y Constitución de Empresas</option>
            </select>
          </div>

          {/* Mensaje */}
          <div className="group">
            <label htmlFor="message" className="block text-sm font-semibold text-white/90 mb-3 group-hover:text-white transition-colors duration-300">
              Mensaje
            </label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              rows={4} 
              className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent transition-all duration-300 hover:bg-white/20 backdrop-blur-sm resize-none" 
              placeholder="Cuéntanos brevemente tu situación legal..."
            ></textarea>
          </div>

          {/* Botón de envío */}
          <button 
            type="submit" 
            disabled={status.loading} 
            className="w-full bg-gradient-to-r from-[#FF6A00] to-orange-500 text-white font-bold py-5 px-6 rounded-2xl text-lg hover:from-orange-500 hover:to-[#FF6A00] transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {status.loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando solicitud...
              </span>
            ) : (
              'Enviar Solicitud'
            )}
          </button>

          {/* Mensajes de estado */}
          {status.success && (
            <div className="bg-green-500/20 border border-green-500/30 rounded-2xl p-4 text-center">
              <p className="text-green-400 font-medium">{status.success}</p>
            </div>
          )}
          {status.error && (
            <div className="bg-red-500/20 border border-red-500/30 rounded-2xl p-4 text-center">
              <p className="text-red-400 font-medium">{status.error}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
} 