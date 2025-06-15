"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ScentFinderQuiz from "@/components/quiz/ScentFinderQuiz";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ScentFinderPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/about/scentguide.jpg"
            alt="Scent exploration guide"
            fill
            priority
            className="object-cover"
            sizes="100vw"
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
              Discover the perfect candle to transform your space into a personal sanctuary with our interactive scent finder quiz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-h2 font-heading text-center mb-8">Scent Finder Quiz</h2>
              <p className="text-center mb-12">
                Answer a few simple questions about your preferences, and we'll recommend the perfect candles for your space and mood.
              </p>
              <ScentFinderQuiz />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
