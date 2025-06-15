"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProductCard from "@/components/ui/ProductCard";

// Product data
const products = [
  {
    id: "midnight-noir",
    name: "Midnight Noir",
    price: 38,
    image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/products/collection/product1.jpg",
    description: "Rich black amber and vanilla with hints of sandalwood",
    category: "noir"
  },
  {
    id: "snowdrift",
    name: "Snowdrift",
    price: 42,
    image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/products/collection/product2.jpg",
    description: "Fresh cotton, white musk, and a touch of eucalyptus",
    category: "white"
  },
  {
    id: "starlight",
    name: "Starlight",
    price: 36,
    image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/products/collection/product3.jpg",
    description: "Bergamot, silver sage, and cedarwood in a hand-etched tin",
    category: "silver"
  },
  {
    id: "ember",
    name: "Ember",
    price: 44,
    image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/products/collection/product4.jpg",
    description: "Smoky vetiver, amber, and warm spices with ember-like gradient wax",
    category: "noir"
  },
  {
    id: "amber-glow",
    name: "Amber Glow",
    price: 38,
    image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/collection/amberglass.jpg",
    description: "Warm amber, vanilla, and golden honey in an amber glass vessel",
    category: "amber"
  },
  {
    id: "midnight-garden",
    name: "Midnight Garden",
    price: 46,
    image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/collection/matteblackvessel.jpg",
    description: "Night-blooming jasmine, bergamot, and black pepper in a matte black vessel",
    category: "noir"
  },
  {
    id: "abstract-dreams",
    name: "Abstract Dreams",
    price: 52,
    image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/collection/paintedceramic.jpg",
    description: "Lavender, chamomile, and sandalwood in a hand-painted ceramic vessel",
    category: "artisan"
  },
  {
    id: "wanderlust-trio",
    name: "Wanderlust Trio",
    price: 48,
    image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/collection/traveltins.jpg",
    description: "Set of three travel-sized candles in our bestselling scents",
    category: "travel"
  }
];

// Categories
const categories = [
  { id: "all", name: "All Products" },
  { id: "noir", name: "Noir Collection" },
  { id: "white", name: "White Collection" },
  { id: "silver", name: "Silver Collection" },
  { id: "amber", name: "Amber Collection" },
  { id: "artisan", name: "Artisan Collection" },
  { id: "travel", name: "Travel Collection" }
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  // Filter products by category
  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") {
      return a.price - b.price;
    } else if (sortBy === "price-high") {
      return b.price - a.price;
    } else if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    // Default: featured (original order)
    return 0;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/products/hero/shophero.jpg"
            alt="Array of assorted candles"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <h1 className="text-h1 font-heading mb-4 leading-tight">
              Find Your Signature Scent
            </h1>
            <p className="text-lg mb-8 max-w-xl">
              Explore our collection of handcrafted luxury candles, each designed to create a unique ambiance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Filter and Sort Controls */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <ScrollReveal>
                <h2 className="text-h2 font-heading mb-4 md:mb-0">Our Collection</h2>
              </ScrollReveal>
              
              <ScrollReveal delay={0.1}>
                <div className="flex items-center">
                  <label htmlFor="sort" className="mr-2 text-sm">Sort by:</label>
                  <select 
                    id="sort" 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-secondary px-3 py-2 focus:outline-none"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name: A to Z</option>
                  </select>
                </div>
              </ScrollReveal>
            </div>
            
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 text-sm transition-colors ${
                      activeCategory === category.id
                        ? "bg-primary text-white"
                        : "bg-backgroundAlt hover:bg-secondary hover:text-white"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedProducts.map((product, index) => (
              <ScrollReveal key={product.id} delay={0.1 * (index % 4)}>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  description={product.description}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-backgroundAlt">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-h2 font-heading text-center mb-12">Why Choose Nox Boutique</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-heading mb-3">Handcrafted with Care</h3>
                <p className="text-textCaption">
                  Each candle is hand-poured in small batches to ensure quality and attention to detail.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.33997 12C7.33997 12 9.33997 15 12 15C14.66 15 16.66 12 16.66 12C16.66 12 14.66 9 12 9C9.33997 9 7.33997 12 7.33997 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-heading mb-3">Premium Ingredients</h3>
                <p className="text-textCaption">
                  We use only the finest soy wax, cotton wicks, and phthalate-free fragrances.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 20V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.93 4.93L6.34 6.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.66 17.66L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.93 19.07L6.34 17.66" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.66 6.34L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-heading mb-3">Long Burn Time</h3>
                <p className="text-textCaption">
                  Our candles are designed to burn evenly for 50-70 hours, depending on the size.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Care Guide Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="text-h2 font-heading text-center mb-8">Candle Care Guide</h2>
              <p className="text-center mb-12">
                Follow these simple tips to get the most out of your Nox Boutique candle.
              </p>
            </ScrollReveal>
            
            <div className="space-y-6">
              <ScrollReveal delay={0.1}>
                <div className="flex items-start">
                  <div className="bg-backgroundAlt rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="font-medium">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">First Burn</h3>
                    <p className="text-textCaption">
                      Allow the wax to melt completely across the surface on the first burn (about 2-3 hours). This prevents tunneling and ensures an even burn for the life of your candle.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <div className="flex items-start">
                  <div className="bg-backgroundAlt rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="font-medium">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Trim the Wick</h3>
                    <p className="text-textCaption">
                      Always trim the wick to 1/4 inch before each burn. This prevents smoking, soot, and extends the life of your candle.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.3}>
                <div className="flex items-start">
                  <div className="bg-backgroundAlt rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="font-medium">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Burn Time</h3>
                    <p className="text-textCaption">
                      Don't burn your candle for more than 4 hours at a time. Allow it to cool before relighting.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.4}>
                <div className="flex items-start">
                  <div className="bg-backgroundAlt rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="font-medium">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Reuse the Vessel</h3>
                    <p className="text-textCaption">
                      When you've enjoyed all the wax, clean out the vessel with warm, soapy water and repurpose it as a planter, storage container, or decorative piece.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-h2 font-heading mb-4">Find Your Perfect Match</h2>
            <p className="mb-8 max-w-xl mx-auto">
              Not sure which scent is right for you? Take our quick quiz to discover your ideal fragrance profile.
            </p>
            <button className="bg-white text-primary px-8 py-3 inline-block hover:bg-secondary hover:text-white transition-colors">
              Take the Scent Quiz
            </button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
