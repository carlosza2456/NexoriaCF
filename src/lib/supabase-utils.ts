import { supabase } from './supabase'

// Tipos para las tablas de Supabase
export interface User {
  id: string
  name?: string
  email?: string
  email_verified?: string
  image?: string
  password: string
  role: string
  created_at: string
  updated_at: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  benefits: string
  created_at: string
  updated_at: string
}

export interface Post {
  id: string
  title: string
  content: string
  excerpt: string
  slug: string
  image?: string
  category: string
  published: boolean
  created_at: string
  updated_at: string
}

export interface Message {
  id: string
  name: string
  email: string
  phone?: string
  company?: string
  interest: string
  message?: string
  read: boolean
  created_at: string
}

export interface ContactInfo {
  id: string
  direccion: string
  telefono: string
  correo: string
  horario: string
  whatsapp?: string
  telegram?: string
  linkedin?: string
  facebook?: string
  twitter?: string
  instagram?: string
}

// Funciones de utilidad para servicios
export const servicesApi = {
  async getAll() {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data as Service[]
  },

  async getById(id: string) {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) throw error
    return data as Service
  },

  async create(service: Omit<Service, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('services')
      .insert(service)
      .select()
      .single()
    
    if (error) throw error
    return data as Service
  },

  async update(id: string, updates: Partial<Service>) {
    const { data, error } = await supabase
      .from('services')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data as Service
  },

  async delete(id: string) {
    const { error } = await supabase
      .from('services')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// Funciones de utilidad para posts
export const postsApi = {
  async getAll() {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data as Post[]
  },

  async getPublished() {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data as Post[]
  },

  async getBySlug(slug: string) {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single()
    
    if (error) throw error
    return data as Post
  },

  async create(post: Omit<Post, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('posts')
      .insert(post)
      .select()
      .single()
    
    if (error) throw error
    return data as Post
  },

  async update(id: string, updates: Partial<Post>) {
    const { data, error } = await supabase
      .from('posts')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data as Post
  },

  async delete(id: string) {
    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// Funciones de utilidad para mensajes
export const messagesApi = {
  async getAll() {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data as Message[]
  },

  async getUnread() {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .eq('read', false)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data as Message[]
  },

  async create(message: Omit<Message, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('messages')
      .insert(message)
      .select()
      .single()
    
    if (error) throw error
    return data as Message
  },

  async markAsRead(id: string) {
    const { data, error } = await supabase
      .from('messages')
      .update({ read: true })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data as Message
  },

  async delete(id: string) {
    const { error } = await supabase
      .from('messages')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

// Funciones de utilidad para información de contacto
export const contactInfoApi = {
  async get() {
    const { data, error } = await supabase
      .from('contact_info')
      .select('*')
      .eq('id', 'main')
      .single()
    
    if (error) throw error
    return data as ContactInfo
  },

  async update(updates: Partial<ContactInfo>) {
    const { data, error } = await supabase
      .from('contact_info')
      .update(updates)
      .eq('id', 'main')
      .select()
      .single()
    
    if (error) throw error
    return data as ContactInfo
  }
}

// Función para migrar datos desde Prisma a Supabase
export async function migrateDataFromPrisma() {
  // Esta función se puede usar para migrar datos existentes
  // desde tu base de datos SQLite a Supabase
  console.log('Función de migración - implementar según necesidades específicas')
} 