'use client';

import { useState, useEffect } from 'react';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline';

interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/admin/services');
      if (!response.ok) throw new Error('Error al cargar los servicios');
      const data = await response.json();
      setServices(data);
    } catch (err) {
      setError('Error al cargar los servicios');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const serviceData = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      icon: formData.get('icon') as string,
    };

    try {
      const response = await fetch('/api/admin/services' + (editingService ? `/${editingService.id}` : ''), {
        method: editingService ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(serviceData),
      });

      if (!response.ok) throw new Error('Error al guardar el servicio');
      
      await fetchServices();
      setIsModalOpen(false);
      setEditingService(null);
    } catch (err) {
      setError('Error al guardar el servicio');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('¿Estás seguro de que deseas eliminar este servicio?')) return;

    try {
      const response = await fetch(`/api/admin/services/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Error al eliminar el servicio');
      
      await fetchServices();
    } catch (err) {
      setError('Error al eliminar el servicio');
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
        <h1 className="text-3xl font-bold text-gray-900">Servicios</h1>
        <button
          onClick={() => {
            setEditingService(null);
            setIsModalOpen(true);
          }}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-[#FF6F00] hover:bg-[#FF8F00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6F00] transition-colors duration-150 ease-in-out"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Nuevo Servicio
        </button>
      </div>

      <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100">
        <ul className="divide-y divide-gray-200">
          {services.length === 0 ? (
            <li className="p-8 text-center text-gray-500">
              No hay servicios registrados
            </li>
          ) : (
            services.map((service) => (
              <li key={service.id} className="p-6 hover:bg-gray-50 transition-colors duration-150 ease-in-out">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-gray-600 whitespace-pre-wrap">
                      {service.description}
                    </p>
                    {service.icon && (
                      <p className="mt-2 text-sm text-gray-500">
                        Icono: {service.icon}
                      </p>
                    )}
                  </div>
                  <div className="flex space-x-2 ml-4">
                    <button
                      onClick={() => {
                        setEditingService(service);
                        setIsModalOpen(true);
                      }}
                      className="p-2 text-gray-400 hover:text-[#FF6F00] rounded-full hover:bg-gray-100 transition-colors duration-150 ease-in-out"
                      title="Editar servicio"
                    >
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(service.id)}
                      className="p-2 text-gray-400 hover:text-red-600 rounded-full hover:bg-gray-100 transition-colors duration-150 ease-in-out"
                      title="Eliminar servicio"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-8 max-w-2xl w-full shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {editingService ? 'Editar Servicio' : 'Nuevo Servicio'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Título
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  required
                  defaultValue={editingService?.title}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#FF6F00] focus:border-[#FF6F00] sm:text-sm transition-colors duration-150 ease-in-out"
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Descripción
                </label>
                <textarea
                  name="description"
                  id="description"
                  required
                  defaultValue={editingService?.description}
                  rows={5}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#FF6F00] focus:border-[#FF6F00] sm:text-sm transition-colors duration-150 ease-in-out"
                />
              </div>
              <div>
                <label htmlFor="icon" className="block text-sm font-medium text-gray-700">
                  Icono (nombre de HeroIcon)
                </label>
                <input
                  type="text"
                  name="icon"
                  id="icon"
                  defaultValue={editingService?.icon}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#FF6F00] focus:border-[#FF6F00] sm:text-sm transition-colors duration-150 ease-in-out"
                />
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setEditingService(null);
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-150 ease-in-out"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-[#FF6F00] border border-transparent rounded-lg hover:bg-[#FF8F00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6F00] transition-colors duration-150 ease-in-out"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 