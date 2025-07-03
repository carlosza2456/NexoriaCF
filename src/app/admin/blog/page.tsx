'use client';

import { useState, useEffect } from 'react';
import { PencilIcon, TrashIcon, PlusIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  slug: string;
  image?: string;
  published: boolean;
  createdAt: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/admin/blog');
      if (!response.ok) throw new Error('Error al cargar las entradas');
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError('Error al cargar las entradas');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const postData = {
      title: formData.get('title') as string,
      content: formData.get('content') as string,
      slug: formData.get('slug') as string,
      image: formData.get('image') as string,
      published: formData.get('published') === 'true',
    };

    try {
      const response = await fetch('/api/admin/blog' + (editingPost ? `/${editingPost.id}` : ''), {
        method: editingPost ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) throw new Error('Error al guardar la entrada');
      
      await fetchPosts();
      setIsModalOpen(false);
      setEditingPost(null);
    } catch (err) {
      setError('Error al guardar la entrada');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('¿Estás seguro de que deseas eliminar esta entrada?')) return;

    try {
      const response = await fetch(`/api/admin/blog/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Error al eliminar la entrada');
      
      await fetchPosts();
    } catch (err) {
      setError('Error al eliminar la entrada');
    }
  };

  const togglePublished = async (post: BlogPost) => {
    try {
      const response = await fetch(`/api/admin/blog/${post.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...post, published: !post.published }),
      });

      if (!response.ok) throw new Error('Error al actualizar la entrada');
      
      await fetchPosts();
    } catch (err) {
      setError('Error al actualizar la entrada');
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
        <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
        <button
          onClick={() => {
            setEditingPost(null);
            setIsModalOpen(true);
          }}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-[#FF6F00] hover:bg-[#FF8F00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6F00] transition-colors duration-150 ease-in-out"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Nueva Entrada
        </button>
      </div>

      <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100">
        <ul className="divide-y divide-gray-200">
          {posts.length === 0 ? (
            <li className="p-8 text-center text-gray-500">
              No hay entradas en el blog
            </li>
          ) : (
            posts.map((post) => (
              <li key={post.id} className="p-6 hover:bg-gray-50 transition-colors duration-150 ease-in-out">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {post.title}
                        </h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          post.published 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {post.published ? 'Publicado' : 'Borrador'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">
                        {new Date(post.createdAt).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                    <p className="mt-2 text-gray-600 line-clamp-2">
                      {post.content}
                    </p>
                    <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <span className="font-medium text-[#FF6F00]">Slug:</span>
                        <span className="ml-1">{post.slug}</span>
                      </span>
                      {post.image && (
                        <span className="flex items-center">
                          <span className="font-medium text-[#FF6F00]">Imagen:</span>
                          <span className="ml-1 truncate max-w-xs">{post.image}</span>
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-2 ml-4">
                    <button
                      onClick={() => togglePublished(post)}
                      className="p-2 text-gray-400 hover:text-[#FF6F00] rounded-full hover:bg-gray-100 transition-colors duration-150 ease-in-out"
                      title={post.published ? "Desactivar publicación" : "Publicar entrada"}
                    >
                      {post.published ? (
                        <EyeIcon className="h-5 w-5" />
                      ) : (
                        <EyeSlashIcon className="h-5 w-5" />
                      )}
                    </button>
                    <button
                      onClick={() => {
                        setEditingPost(post);
                        setIsModalOpen(true);
                      }}
                      className="p-2 text-gray-400 hover:text-[#FF6F00] rounded-full hover:bg-gray-100 transition-colors duration-150 ease-in-out"
                      title="Editar entrada"
                    >
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="p-2 text-gray-400 hover:text-red-600 rounded-full hover:bg-gray-100 transition-colors duration-150 ease-in-out"
                      title="Eliminar entrada"
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
          <div className="bg-white rounded-xl p-8 max-w-3xl w-full shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {editingPost ? 'Editar Entrada' : 'Nueva Entrada'}
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
                  defaultValue={editingPost?.title}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#FF6F00] focus:border-[#FF6F00] sm:text-sm transition-colors duration-150 ease-in-out"
                />
              </div>
              <div>
                <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
                  Slug
                </label>
                <input
                  type="text"
                  name="slug"
                  id="slug"
                  required
                  defaultValue={editingPost?.slug}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#FF6F00] focus:border-[#FF6F00] sm:text-sm transition-colors duration-150 ease-in-out"
                />
              </div>
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                  Contenido
                </label>
                <textarea
                  name="content"
                  id="content"
                  required
                  defaultValue={editingPost?.content}
                  rows={10}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#FF6F00] focus:border-[#FF6F00] sm:text-sm transition-colors duration-150 ease-in-out"
                />
              </div>
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  URL de la imagen
                </label>
                <input
                  type="text"
                  name="image"
                  id="image"
                  defaultValue={editingPost?.image}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#FF6F00] focus:border-[#FF6F00] sm:text-sm transition-colors duration-150 ease-in-out"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Estado
                </label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="published"
                      value="true"
                      defaultChecked={editingPost?.published}
                      className="form-radio h-4 w-4 text-[#FF6F00] focus:ring-[#FF6F00] border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Publicado</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="published"
                      value="false"
                      defaultChecked={!editingPost?.published}
                      className="form-radio h-4 w-4 text-[#FF6F00] focus:ring-[#FF6F00] border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Borrador</span>
                  </label>
                </div>
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setEditingPost(null);
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