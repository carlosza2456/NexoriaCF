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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Hubo un problema al enviar tu solicitud.');
      }
      
      setFormData({ name: '', email: '', phone: '', company: '', interest: '', message: '' });
      setStatus({ loading: false, error: '', success: '¡Gracias! Tu solicitud ha sido enviada con éxito.' });
    } catch (error: any) {
      setStatus({ loading: false, error: error.message || 'Error al enviar.', success: '' });
    }
  };

  return (
    <div className="flex-1 bg-gray-50 p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-[#FF6F00] mb-6">Agenda tu Consulta Gratuita</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre completo *</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FF6F00] focus:border-[#FF6F00] text-gray-900" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico *</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FF6F00] focus:border-[#FF6F00] text-gray-900" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FF6F00] focus:border-[#FF6F00] text-gray-900" />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">Empresa</label>
          <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FF6F00] focus:border-[#FF6F00] text-gray-900" />
        </div>
        <div>
          <label htmlFor="interest" className="block text-sm font-medium text-gray-700">Servicio de interés *</label>
          <select id="interest" name="interest" value={formData.interest} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FF6F00] focus:border-[#FF6F00] text-gray-900">
            <option value="">Seleccione una opción</option>
            <option value="Servicios Legales">Servicios Legales</option>
            <option value="Servicios Logísticos">Servicios Logísticos</option>
            <option value="Estrategia en Negocios">Estrategia en Negocios</option>
            <option value="Marketing">Marketing</option>
            <option value="Tecnología e IA">Tecnología e IA</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FF6F00] focus:border-[#FF6F00] text-gray-900"></textarea>
        </div>
        <button type="submit" disabled={status.loading} className="w-full bg-[#FF6F00] text-white font-bold py-3 px-4 rounded-md hover:bg-orange-600 transition-colors disabled:opacity-50">
          {status.loading ? 'Enviando...' : 'Enviar Solicitud'}
        </button>
        {status.success && <p className="text-green-600 text-center mt-2">{status.success}</p>}
        {status.error && <p className="text-red-600 text-center mt-2">{status.error}</p>}
      </form>
    </div>
  );
} 