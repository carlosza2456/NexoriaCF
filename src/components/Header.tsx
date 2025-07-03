'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: '¿Quiénes Somos?', href: '#quienes-somos' },
    { label: 'Propuesta de Valor', href: '#propuesta-valor' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Casos de Éxito', href: '#casos-exito' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-[#181818] z-50 font-sans" style={{fontFamily: 'var(--font-inter)'}}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-2">
        <div className="flex items-center justify-between h-14">
          {/* Logo como texto */}
          <Link href="/" className="flex items-center py-2 select-none" onClick={closeMenu}>
            <span className="text-2xl md:text-3xl font-extrabold text-[#FF6F00] tracking-tight" style={{letterSpacing: '0.01em'}}>NEXORIA</span>
          </Link>
          {/* Menú de escritorio */}
          <nav className="hidden md:flex items-center space-x-10 ml-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white text-base font-medium hover:text-[#FF6F00] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          {/* Botón de menú hamburguesa - visible solo en móvil */}
          <button
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span 
                className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span 
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span 
                className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#181818] border-t border-gray-800"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block text-white text-base font-medium hover:text-[#FF6F00] transition-colors py-2"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 