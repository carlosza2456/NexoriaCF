'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { InboxIcon, TrashIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

interface Message {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  interest: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/admin/messages');
      if (!response.ok) throw new Error('Error al cargar los mensajes');
      let data = await response.json();
      data = data.sort((a: Message, b: Message) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      setMessages(data);
    } catch (err) {
      setError('No se pudieron cargar los mensajes.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const toggleRead = async (id: string, read: boolean) => {
    try {
      await fetch(`/api/admin/messages/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ read: !read }),
      });
      fetchMessages();
    } catch (error) {
      alert('Error al actualizar el mensaje.');
    }
  };

  const deleteMessage = async (id: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este mensaje?')) {
      try {
        await fetch(`/api/admin/messages/${id}`, { method: 'DELETE' });
        fetchMessages();
      } catch (error) {
        alert('Error al eliminar el mensaje.');
      }
    }
  };

  if (loading) return <div className="text-center p-8">Cargando mensajes...</div>;
  if (error) return <div className="text-red-500 text-center p-8">{error}</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2"><InboxIcon className="h-8 w-8 text-[#FF6F00]" /> Mensajes Recibidos</h1>
      </div>
      <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100">
        <ul className="divide-y divide-gray-200">
          {messages.length === 0 ? (
            <li className="p-8 text-center text-gray-500">No hay mensajes.</li>
          ) : (
            messages.map((msg) => (
              <motion.li
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-6 hover:bg-gray-50 transition-colors ${!msg.read ? 'bg-orange-50' : ''}`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{msg.name} - <span className="text-gray-600 font-normal">{msg.email}</span></h3>
                      <span className="text-xs text-gray-500">{new Date(msg.createdAt).toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1"><b>Interés:</b> {msg.interest}</p>
                    {msg.phone && <p className="text-sm text-gray-600 mb-1"><b>Teléfono:</b> {msg.phone}</p>}
                    {msg.company && <p className="text-sm text-gray-600 mb-1"><b>Empresa:</b> {msg.company}</p>}
                    <p className="mt-2 text-gray-800 bg-gray-100 p-3 rounded-md">{msg.message}</p>
                  </div>
                  <div className="flex flex-col gap-2 ml-4">
                    <button onClick={() => toggleRead(msg.id, msg.read)} className={`p-2 rounded-full hover:bg-gray-200 ${!msg.read ? 'text-green-500' : 'text-gray-400'}`} title={!msg.read ? 'Marcar como leído' : 'Marcar como no leído'}>
                      {!msg.read ? <EyeIcon className="h-5 w-5" /> : <EyeSlashIcon className="h-5 w-5" />}
                    </button>
                    <button onClick={() => deleteMessage(msg.id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-gray-200 rounded-full" title="Eliminar mensaje">
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
} 