'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [contactInfo, setContactInfo] = useState<any>(null);

  useEffect(() => {
    fetch('/api/contact-info', { cache: 'no-store' })
      .then(res => res.json())
      .then(data => setContactInfo(data));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje');
      }

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (error) {
      setError('Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const redes = [
    { name: 'LinkedIn', icon: <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>, url: contactInfo?.linkedin },
    { name: 'Twitter', icon: <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.581-.666 2.477 0 1.61.82 3.027 2.053 3.846-.764-.024-1.482-.232-2.11-.583v.061c0 2.256 1.605 4.14 3.737 4.568-.39.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.303 3.203 4.334 3.239-1.595 1.25-3.604 1.992-5.786 1.992-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.092 7.14 2.092 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.403-.014-.602.91-.658 1.7-1.475 2.323-2.41z"/></svg>, url: contactInfo?.twitter },
    { name: 'Facebook', icon: <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>, url: contactInfo?.facebook },
    { name: 'Instagram', icon: <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>, url: contactInfo?.instagram },
    { name: 'WhatsApp', icon: <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24"><path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52zM12 22c-1.85 0-3.63-.5-5.18-1.44l-.37-.22-3.69.97.99-3.59-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-1 2.43s1.02 2.82 1.16 3.02c.14.2 2.01 3.08 4.88 4.2.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>, url: contactInfo?.whatsapp },
    { name: 'Telegram', icon: <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.627-5.373-12-12-12zm5.707 8.293l-1.414 8.485c-.104.623-.441.775-.894.482l-2.484-1.834-1.198 1.153c-.132.132-.242.242-.495.242l.176-2.497 4.545-4.09c.198-.176-.043-.274-.308-.098l-5.617 3.537-2.42-.756c-.526-.164-.537-.526.11-.777l9.447-3.646c.441-.162.826.107.684.765z"/></svg>, url: contactInfo?.telegram },
  ];

  if (!contactInfo) {
    return (
      <div className="min-h-screen bg-nexoria-black flex items-center justify-center">
        <div className="text-gray-400 text-lg">Cargando información de contacto...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-nexoria-black py-12 flex items-center justify-center">
      <div className="w-full max-w-2xl mx-auto px-4">
        <div className="bg-gray-900 shadow-2xl rounded-3xl p-10 border border-nexoria-orange/30">
          <h1 className="text-4xl font-bold text-center mb-8 text-nexoria-orange">Contáctanos</h1>
          <div className="mb-8 text-center">
            <p className="text-lg text-gray-300">
              ¿Estás listo para transformar tu empresa? Agenda una consulta gratuita con uno de nuestros especialistas. Completa el formulario y nos pondremos en contacto contigo a la brevedad.
            </p>
          </div>
          {success && (
            <div className="mb-6 p-4 bg-green-900/30 border border-green-500 rounded-md">
              <p className="text-green-400 text-center">¡Gracias por tu mensaje! Te responderemos pronto.</p>
            </div>
          )}
          {error && (
            <div className="mb-6 p-4 bg-red-900/30 border border-red-500 rounded-md">
              <p className="text-red-400 text-center">{error}</p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-nexoria-orange mb-1">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-lg border border-nexoria-orange bg-gray-800 text-nexoria-white placeholder-gray-400 shadow-sm focus:border-nexoria-orange focus:ring-nexoria-orange text-base px-4 py-3"
                placeholder="Tu nombre completo"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-nexoria-orange mb-1">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-lg border border-nexoria-orange bg-gray-800 text-nexoria-white placeholder-gray-400 shadow-sm focus:border-nexoria-orange focus:ring-nexoria-orange text-base px-4 py-3"
                placeholder="correo@ejemplo.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-nexoria-orange mb-1">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="mt-1 block w-full rounded-lg border border-nexoria-orange bg-gray-800 text-nexoria-white placeholder-gray-400 shadow-sm focus:border-nexoria-orange focus:ring-nexoria-orange text-base px-4 py-3"
                placeholder="Cuéntanos sobre tu proyecto o consulta"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center py-3 px-4 rounded-lg shadow font-semibold text-lg bg-nexoria-orange text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nexoria-orange transition-all ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </div>
          </form>
          <div className="mt-10 border-t border-nexoria-orange/20 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-nexoria-orange mb-2 flex items-center justify-center md:justify-start gap-2"><span>📍</span> Dirección</h3>
              <p className="text-gray-300 text-sm">
                {contactInfo.direccion
                  ? contactInfo.direccion.split('\n').map((line: string, i: number) => (
                      <span key={i}>{line}<br /></span>
                    ))
                  : <span>No disponible</span>
                }
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-nexoria-orange mb-2 flex items-center justify-center md:justify-start gap-2"><span>📞</span> Contacto directo</h3>
              <p className="text-gray-300 text-sm">
                {contactInfo.correo ? (<span>Email: {contactInfo.correo}<br /></span>) : <span>Email: No disponible<br /></span>}
                {contactInfo.telefono ? (<span>Tel: {contactInfo.telefono}<br /></span>) : <span>Tel: No disponible<br /></span>}
                {contactInfo.horario ? (<span>Horario: {contactInfo.horario}</span>) : <span>Horario: No disponible</span>}
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-lg font-bold text-nexoria-orange mb-2">Síguenos en redes sociales</h3>
            <pre className="text-xs text-gray-400 bg-gray-800 p-2 rounded mb-2">{JSON.stringify(contactInfo, null, 2)}</pre>
            <div className="flex gap-4 mt-2">
              {redes.map((r) =>
                r.url ? (
                  <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center hover:bg-nexoria-orange transition-colors" aria-label={r.name}>
                    {r.icon}
                  </a>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 