"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/hero/herocandleflicker.jpg"
            alt="Luxury candle with gentle flame"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <h1 className="text-h1 font-heading mb-4 leading-tight">
              Elevate Your Space with Artisanal Luxury
            </h1>
            <p className="text-lg mb-8 max-w-xl">
              Hand-poured candles crafted by master chandlers using sustainable materials and premium fragrances.
            </p>
            <Link href="/products" className="btn-primary">
              Shop the Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-h2 font-heading text-center mb-12">Featured Collections</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="group">
                <div className="overflow-hidden mb-4 relative h-64">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="h-full w-full"
                  >
                    <Image
                      src="https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/collection/amberglass.jpg"
                      alt="Amber glass candle"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </motion.div>
                </div>
                <h3 className="text-lg font-heading mb-2">Amber Collection</h3>
                <p className="text-sm text-textCaption mb-4">
                  Warm, inviting scents in amber glass vessels that create a cozy atmosphere.
                </p>
                <Link href="/products" className="text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors">
                  Explore Collection
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="group">
                <div className="overflow-hidden mb-4 relative h-64">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="h-full w-full"
                  >
                    <Image
                      src="https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/collection/matteblackvessel.jpg"
                      alt="Matte black concrete vessel"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </motion.div>
                </div>
                <h3 className="text-lg font-heading mb-2">Noir Collection</h3>
                <p className="text-sm text-textCaption mb-4">
                  Bold, sophisticated fragrances in matte black concrete vessels.
                </p>
                <Link href="/products" className="text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors">
                  Explore Collection
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="group">
                <div className="overflow-hidden mb-4 relative h-64">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="h-full w-full"
                  >
                    <Image
                      src="https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/collection/paintedceramic.jpg"
                      alt="Hand-painted ceramic candle"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </motion.div>
                </div>
                <h3 className="text-lg font-heading mb-2">Artisan Collection</h3>
                <p className="text-sm text-textCaption mb-4">
                  Hand-painted ceramic vessels with unique abstract designs and complex scent profiles.
                </p>
                <Link href="/products" className="text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors">
                  Explore Collection
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="group">
                <div className="overflow-hidden mb-4 relative h-64">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="h-full w-full"
                  >
                    <Image
                      src="https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/collection/traveltins.jpg"
                      alt="Trio of mini travel tins"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </motion.div>
                </div>
                <h3 className="text-lg font-heading mb-2">Travel Collection</h3>
                <p className="text-sm text-textCaption mb-4">
                  Portable luxury in mini travel tins, perfect for gifting or on-the-go ambiance.
                </p>
                <Link href="/products" className="text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors">
                  Explore Collection
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Scent Exploration Guide Section */}
      <section className="section-padding bg-backgroundAlt">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/about/scentguide.jpg"
                  alt="Scent exploration guide"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <h2 className="text-h2 font-heading mb-4">Find Your Signature Scent</h2>
              <p className="mb-6">
                Not sure which fragrance is right for you? Our interactive scent finder quiz helps you discover your perfect match based on your preferences and lifestyle.
              </p>
              <p className="mb-8">
                Whether you prefer woody, floral, citrus, or spicy notes, we'll guide you to the candles that will transform your space into a personal sanctuary.
              </p>
              <Link href="/scent-finder" className="btn-primary">
                Take the Scent Quiz
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sustainability Promise Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={0.2} className="order-2 md:order-1">
              <h2 className="text-h2 font-heading mb-4">Our Sustainability Promise</h2>
              <p className="mb-4">
                Every Nox Boutique candle is crafted with a commitment to environmental responsibility and ethical sourcing.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>100% soy wax from sustainable American farms</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Phthalate-free fragrances and essential oils</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Recycled and recyclable packaging</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Reusable vessels that reduce waste</span>
                </li>
              </ul>
              <Link href="/about" className="btn-primary">
                Learn More
              </Link>
            </ScrollReveal>
            
            <ScrollReveal className="order-1 md:order-2">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/about/sustainability.jpg"
                  alt="Sustainable packaging"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-h2 font-heading mb-4">Join Our Community</h2>
            <p className="mb-8 max-w-xl mx-auto">
              Subscribe to receive exclusive offers, early access to limited editions, and candle care tips.
            </p>
            <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 text-primary focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-white text-primary px-6 py-3 hover:bg-secondary hover:text-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
