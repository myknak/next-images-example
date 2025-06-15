"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  description,
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      image,
    });
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Link href={`/products/${id}`} className="block">
        <div className="overflow-hidden mb-4 relative h-80">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full"
          >
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </motion.div>
        </div>
        <h3 className="text-lg font-heading mb-1">{name}</h3>
        {description && (
          <p className="text-sm text-textCaption mb-2">{description}</p>
        )}
        <p className="text-primary font-medium">${price.toFixed(2)}</p>
      </Link>
      <button
        onClick={handleAddToCart}
        className="mt-3 w-full py-2 bg-primary text-white hover:bg-secondary transition-colors duration-300"
      >
        Add to Cart
      </button>
    </motion.div>
  );
};

export default ProductCard;
