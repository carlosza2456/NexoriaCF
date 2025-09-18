'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  read: boolean;
  createdAt: string;
}

interface Stats {
  totalVisits: number;
  totalMessages: number;
  totalPosts: number;
  totalServices: number;
  recentVisits: {
    date: string;
    count: number;
  }[];
  popularPages: {
    path: string;
    views: number;
  }[];
}

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [stats, setStats] = useState<Stats>({
    totalVisits: 0,
    totalMessages: 0,
    totalPosts: 0,
    totalServices: 0,
    recentVisits: [],
    popularPages: []
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    } else if (status === 'authenticated') {
      fetchData();
    }
  }, [status, router]);

  const fetchData = async () => {
    try {
      // Cargar mensajes
      const messagesResponse = await fetch('/api/admin/messages');
      if (messagesResponse.ok) {
        const messagesData = await messagesResponse.json();
        setMessages(messagesData);
      }

      // Cargar estadísticas
      const statsResponse = await fetch('/api/admin/stats');
      if (statsResponse.ok) {
        const statsData = await statsResponse.json();
        setStats(statsData);
      }
    } catch (error) {
      console.error('Error al cargar datos:', error);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (messageId: string) => {
    try {
      const response = await fetch(`/api/admin/messages/${messageId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ read: true }),
      });

      if (response.ok) {
        setMessages(messages.map(msg => 
          msg.id === messageId ? { ...msg, read: true } : msg
        ));
      }
    } catch (error) {
      console.error('Error al marcar mensaje como leído:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-nexoria-orange"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-8">Panel de Control</h1>

      {/* Tarjetas de estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Visitas Totales</h3>
          <p className="mt-2 text-3xl font-bold text-nexoria-orange">{stats.totalVisits}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Mensajes</h3>
          <p className="mt-2 text-3xl font-bold text-nexoria-orange">{stats.totalMessages}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Posts</h3>
          <p className="mt-2 text-3xl font-bold text-nexoria-orange">{stats.totalPosts}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Servicios</h3>
          <p className="mt-2 text-3xl font-bold text-nexoria-orange">{stats.totalServices}</p>
        </div>
      </div>

      {/* Accesos rápidos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Link
          href="/admin/content/home"
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <h3 className="text-lg font-medium text-gray-900">Página Principal</h3>
          <p className="mt-2 text-gray-500">Editar contenido de la página principal</p>
        </Link>
        <Link
          href="/admin/content/services"
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <h3 className="text-lg font-medium text-gray-900">Servicios</h3>
          <p className="mt-2 text-gray-500">Gestionar servicios y beneficios</p>
        </Link>
        <Link
          href="/admin/content/blog"
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <h3 className="text-lg font-medium text-gray-900">Blog</h3>
          <p className="mt-2 text-gray-500">Administrar posts y categorías</p>
        </Link>
      </div>

      {/* Gráfico de visitas recientes */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Visitas Recientes</h2>
        <div className="h-64">
          <div className="flex h-full items-end space-x-2">
            {stats.recentVisits.map((visit, index) => (
              <div key={index} className="flex-1">
                <div 
                  className="bg-nexoria-orange bg-opacity-75 rounded-t"
                  style={{ height: `${(visit.count / Math.max(...stats.recentVisits.map(v => v.count))) * 100}%` }}
                ></div>
                <p className="text-xs text-gray-500 mt-1 text-center">{new Date(visit.date).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Páginas populares */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Páginas Más Visitadas</h2>
        <div className="space-y-4">
          {stats.popularPages.map((page, index) => (
            <div key={index} className="flex items-center">
              <div className="flex-1">
                <div className="h-4 bg-gray-100 rounded">
                  <div 
                    className="h-full bg-nexoria-orange rounded"
                    style={{ width: `${(page.views / Math.max(...stats.popularPages.map(p => p.views))) * 100}%` }}
                  ></div>
                </div>
              </div>
              <span className="ml-4 text-sm text-gray-500">{page.path}</span>
              <span className="ml-4 text-sm font-medium">{page.views} visitas</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mensajes recientes */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Mensajes Recientes</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {messages.slice(0, 5).map((message) => (
            <div key={message.id} className={`p-6 ${message.read ? 'bg-gray-50' : 'bg-white'}`}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{message.name}</h3>
                  <p className="text-sm text-gray-500">{message.email}</p>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500">
                    {new Date(message.createdAt).toLocaleDateString()}
                  </span>
                  {!message.read && (
                    <button
                      onClick={() => markAsRead(message.id)}
                      className="ml-4 text-sm text-nexoria-orange hover:text-opacity-75"
                    >
                      Marcar como leído
                    </button>
                  )}
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-700">{message.message}</p>
            </div>
          ))}
        </div>
        <div className="p-6 border-t border-gray-200">
          <Link
            href="/admin/messages"
            className="text-sm text-nexoria-orange hover:text-opacity-75"
          >
            Ver todos los mensajes →
          </Link>
        </div>
      </div>
    </div>
  );
} 