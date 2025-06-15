import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import * as React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartProvider from '@/context/CartContext';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
});

export const metadata: Metadata = {
  title: '@NoxBoutique | Handcrafted Luxury Candles',
  description: 'Nox Boutique offers premium, eco-conscious candles poured by master chandlers. Discover our immersive storytelling, scent-finder quiz, and seamless shopping to elevate ambient living.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
