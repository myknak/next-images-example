"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import ScrollReveal from "@/components/ui/ScrollReveal";

type ProductDetails = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  details: {
    scent: string;
    burnTime: string;
    weight: string;
    dimensions: string;
    materials: string;
  };
  longDescription: string;
};

export default function ProductClient({ product }: { product: ProductDetails }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      });
    }
    
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <ScrollReveal>
            <div className="sticky top-24">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-lg shadow-lg relative aspect-square"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Product Details */}
          <ScrollReveal delay={0.2}>
            <div>
              <h1 className="text-h2 font-heading mb-2">{product.name}</h1>
              <p className="text-2xl font-medium mb-4">${product.price}</p>
              <p className="mb-6">{product.description}</p>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <div className="flex items-center">
                  <button
                    onClick={decreaseQuantity}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:bg-gray-100"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <div className="w-16 h-10 flex items-center justify-center border-t border-b border-gray-300">
                    {quantity}
                  </div>
                  <button
                    onClick={increaseQuantity}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:bg-gray-100"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                className={`w-full py-3 px-6 mb-8 transition-colors ${
                  addedToCart
                    ? "bg-green-600 text-white"
                    : "bg-primary text-white hover:bg-secondary"
                }`}
              >
                {addedToCart ? "Added to Cart!" : "Add to Cart"}
              </motion.button>

              {/* Product Tabs */}
              <div className="border-b border-gray-200 mb-6">
                <div className="flex space-x-8">
                  <button
                    className={`py-2 text-sm font-medium border-b-2 ${
                      activeTab === "description"
                        ? "border-primary text-primary"
                        : "border-transparent hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab("description")}
                  >
                    Description
                  </button>
                  <button
                    className={`py-2 text-sm font-medium border-b-2 ${
                      activeTab === "details"
                        ? "border-primary text-primary"
                        : "border-transparent hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab("details")}
                  >
                    Details
                  </button>
                  <button
                    className={`py-2 text-sm font-medium border-b-2 ${
                      activeTab === "care"
                        ? "border-primary text-primary"
                        : "border-transparent hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab("care")}
                  >
                    Candle Care
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="text-sm leading-relaxed">
                {activeTab === "description" && (
                  <div>
                    <p>{product.longDescription}</p>
                  </div>
                )}

                {activeTab === "details" && (
                  <div>
                    <ul className="space-y-3">
                      <li className="flex">
                        <span className="font-medium w-32">Scent Notes:</span>
                        <span>{product.details.scent}</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-32">Burn Time:</span>
                        <span>{product.details.burnTime}</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-32">Weight:</span>
                        <span>{product.details.weight}</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-32">Dimensions:</span>
                        <span>{product.details.dimensions}</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-32">Materials:</span>
                        <span>{product.details.materials}</span>
                      </li>
                    </ul>
                  </div>
                )}

                {activeTab === "care" && (
                  <div>
                    <h3 className="font-medium mb-2">For the best candle experience:</h3>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Trim the wick to 1/4 inch before each lighting</li>
                      <li>Allow the wax to melt to the edges on the first burn (approximately 2-3 hours)</li>
                      <li>Never leave a burning candle unattended</li>
                      <li>Keep away from drafts, children, and pets</li>
                      <li>Burn on a heat-resistant surface</li>
                      <li>Discontinue use when 1/2 inch of wax remains</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
