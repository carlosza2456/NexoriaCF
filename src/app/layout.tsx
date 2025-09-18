import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nexoria Consulting Firm - Consultoría Estratégica Toluca Edomex y Ciudad de México',
  description: 'Transformamos empresas en Toluca Estado de México y Ciudad de México eliminando pérdidas ocultas, reduciendo riesgos legales y fortaleciendo estructuras corporativas. Sistema Nexoria 360: Diagnostica, Diseña, Ejecuta y Evoluciona.',
  keywords: 'consultoría estratégica Toluca, consultora legal en Toluca, consultoría empresarial Ciudad de México, optimización empresarial Edomex, compliance corporativo CDMX, KPIs Toluca, constitución empresas Estado de México, Nexoria Toluca, consultoría CDMX',
  authors: [{ name: 'Nexoria Consulting Firm' }],
  creator: 'Nexoria Consulting Firm',
  publisher: 'Nexoria Consulting Firm',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://nexoria.com',
    title: 'Nexoria Consulting Firm - Consultoría Estratégica Toluca Edomex y Ciudad de México',
    description: 'Transformamos empresas en Toluca Estado de México y Ciudad de México eliminando pérdidas ocultas, reduciendo riesgos legales y fortaleciendo estructuras corporativas.',
    siteName: 'Nexoria Consulting Firm',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexoria Consulting Firm - Consultoría Estratégica Toluca Edomex y Ciudad de México',
    description: 'Transformamos empresas en Toluca Estado de México y Ciudad de México eliminando pérdidas ocultas, reduciendo riesgos legales y fortaleciendo estructuras corporativas.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
} 