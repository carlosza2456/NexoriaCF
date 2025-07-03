'use client';

import { useState, useEffect } from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/admin/messages');
      if (!response.ok) throw new Error('Error al cargar los mensajes');
      const data = await response.json();
      setMessages(data);
    } catch (err) {
      setError('Error al cargar los mensajes');
    } finally {
      setLoading(false);
    }
  };

  const toggleMessageRead = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/messages/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ read: !messages.find(m => m.id === id)?.read }),
      });

      if (!response.ok) throw new Error('Error al actualizar el mensaje');
      
      setMessages(messages.map(message => 
        message.id === id ? { ...message, read: !message.read } : message
      ));
    } catch (err) {
      setError('Error al actualizar el mensaje');
    }
  };

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FF6F00]"></div>
    </div>
  );

  if (error) return (
    <div className="text-red-500 text-center bg-red-50 p-4 rounded-lg">
      {error}
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Mensajes Recibidos</h1>
        <div className="bg-gray-100 px-4 py-2 rounded-lg">
          <span className="text-sm font-medium text-gray-600">
            Total: {messages.length}
          </span>
        </div>
      </div>

      <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100">
        <ul className="divide-y divide-gray-200">
          {messages.length === 0 ? (
            <li className="p-8 text-center text-gray-500">
              No hay mensajes recibidos
            </li>
          ) : (
            messages.map((message) => (
              <li 
                key={message.id} 
                className={`p-6 hover:bg-gray-50 transition-colors duration-150 ease-in-out ${
                  message.read ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <p className="text-lg font-semibold text-[#FF6F00]">
                          {message.name}
                        </p>
                        <span className="text-sm text-gray-500">
                          {new Date(message.createdAt).toLocaleDateString('es-ES', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">{message.email}</p>
                    <p className="mt-3 text-gray-900 whitespace-pre-wrap">
                      {message.message}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleMessageRead(message.id)}
                    className="ml-4 flex-shrink-0 p-2 rounded-full hover:bg-gray-100 transition-colors duration-150 ease-in-out"
                    title={message.read ? "Marcar como no leído" : "Marcar como leído"}
                  >
                    {message.read ? (
                      <CheckCircleIcon className="h-6 w-6 text-green-500" />
                    ) : (
                      <XCircleIcon className="h-6 w-6 text-gray-400" />
                    )}
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
} 