"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Quiz questions and options
const quizQuestions = [
  {
    id: "mood",
    question: "What mood do you want to create in your space?",
    options: [
      { id: "relaxing", text: "Calm & Relaxing", image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/collection/paintedceramic.jpg" },
      { id: "energizing", text: "Energizing & Uplifting", image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/products/collection/product2.jpg" },
      { id: "cozy", text: "Warm & Cozy", image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/collection/amberglass.jpg" },
      { id: "luxurious", text: "Sophisticated & Luxurious", image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/products/collection/product1.jpg" }
    ]
  },
  {
    id: "scent",
    question: "What scent family do you typically prefer?",
    options: [
      { id: "floral", text: "Floral & Botanical", image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/collection/paintedceramic.jpg" },
      { id: "woody", text: "Woody & Earthy", image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/products/collection/product4.jpg" },
      { id: "fresh", text: "Fresh & Clean", image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/products/collection/product2.jpg" },
      { id: "spicy", text: "Warm & Spicy", image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/collection/amberglass.jpg" }
    ]
  },
  {
    id: "space",
    question: "Where will you primarily use your candle?",
    options: [
      { id: "living", text: "Living Room", image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/collection/matteblackvessel.jpg" },
      { id: "bedroom", text: "Bedroom", image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/collection/paintedceramic.jpg" },
      { id: "bathroom", text: "Bathroom", image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/products/collection/product2.jpg" },
      { id: "office", text: "Home Office", image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/products/collection/product3.jpg" }
    ]
  },
  {
    id: "season",
    question: "What's your favorite season?",
    options: [
      { id: "spring", text: "Spring", image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/products/collection/product2.jpg" },
      { id: "summer", text: "Summer", image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/products/collection/product3.jpg" },
      { id: "fall", text: "Fall", image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/collection/amberglass.jpg" },
      { id: "winter", text: "Winter", image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/products/collection/product1.jpg" }
    ]
  },
  {
    id: "vessel",
    question: "What vessel style do you prefer?",
    options: [
      { id: "matte", text: "Matte Black", image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/collection/matteblackvessel.jpg" },
      { id: "glass", text: "Clear/Frosted Glass", image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/products/collection/product2.jpg" },
      { id: "ceramic", text: "Artisan Ceramic", image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/collection/paintedceramic.jpg" },
      { id: "metal", text: "Metallic/Tin", image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/collection/traveltins.jpg" }
    ]
  }
];

// Product recommendations based on quiz answers
const productRecommendations = {
  // Relaxing mood recommendations
  "relaxing-floral-bedroom-spring-ceramic": ["abstract-dreams", "snowdrift"],
  "relaxing-floral-bedroom-winter-ceramic": ["abstract-dreams", "snowdrift"],
  "relaxing-fresh-bedroom-spring-glass": ["snowdrift", "starlight"],
  "relaxing-woody-bedroom-fall-matte": ["midnight-garden", "ember"],
  
  // Energizing mood recommendations
  "energizing-fresh-office-spring-glass": ["snowdrift", "starlight"],
  "energizing-fresh-living-summer-glass": ["starlight", "snowdrift"],
  "energizing-floral-office-summer-ceramic": ["abstract-dreams", "starlight"],
  
  // Cozy mood recommendations
  "cozy-spicy-living-fall-matte": ["ember", "midnight-noir"],
  "cozy-woody-living-winter-matte": ["midnight-noir", "ember"],
  "cozy-spicy-bedroom-winter-glass": ["amber-glow", "ember"],
  "cozy-woody-living-fall-ceramic": ["abstract-dreams", "ember"],
  
  // Luxurious mood recommendations
  "luxurious-woody-living-winter-matte": ["midnight-noir", "midnight-garden"],
  "luxurious-spicy-living-fall-metal": ["wanderlust-trio", "starlight"],
  "luxurious-floral-bathroom-spring-ceramic": ["abstract-dreams", "midnight-garden"],
  
  // Default recommendations for other combinations
  "default": ["wanderlust-trio", "midnight-noir", "amber-glow"]
};

// Product data (simplified version from products page)
const products = [
  {
    id: "midnight-noir",
    name: "Midnight Noir",
    price: 38,
    image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/products/collection/product1.jpg",
    description: "Rich black amber and vanilla with hints of sandalwood",
  },
  {
    id: "snowdrift",
    name: "Snowdrift",
    price: 42,
    image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/products/collection/product2.jpg",
    description: "Fresh cotton, white musk, and a touch of eucalyptus",
  },
  {
    id: "starlight",
    name: "Starlight",
    price: 36,
    image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/products/collection/product3.jpg",
    description: "Bergamot, silver sage, and cedarwood in a hand-etched tin",
  },
  {
    id: "ember",
    name: "Ember",
    price: 44,
    image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/products/collection/product4.jpg",
    description: "Smoky vetiver, amber, and warm spices with ember-like gradient wax",
  },
  {
    id: "amber-glow",
    name: "Amber Glow",
    price: 38,
    image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/collection/amberglass.jpg",
    description: "Warm amber, vanilla, and golden honey in an amber glass vessel",
  },
  {
    id: "midnight-garden",
    name: "Midnight Garden",
    price: 46,
    image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/collection/matteblackvessel.jpg",
    description: "Night-blooming jasmine, bergamot, and black pepper in a matte black vessel",
  },
  {
    id: "abstract-dreams",
    name: "Abstract Dreams",
    price: 52,
    image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/collection/paintedceramic.jpg",
    description: "Lavender, chamomile, and sandalwood in a hand-painted ceramic vessel",
  },
  {
    id: "wanderlust-trio",
    name: "Wanderlust Trio",
    price: 48,
    image: "https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/collection/traveltins.jpg",
    description: "Set of three travel-sized candles in our bestselling scents",
  }
];

const ScentFinderQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [recommendedProducts, setRecommendedProducts] = useState<any[]>([]);

  const handleOptionSelect = (questionId: string, optionId: string) => {
    setAnswers({ ...answers, [questionId]: optionId });
    
    if (currentQuestionIndex < quizQuestions.length - 1) {
      // Move to next question
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 300);
    } else {
      // Quiz completed, show results
      getRecommendations();
    }
  };

  const getRecommendations = () => {
    // Create a key based on selected answers
    const { mood, scent, space, season, vessel } = answers;
    const key = `${mood}-${scent}-${space}-${season}-${vessel}`;
    
    // Get recommended product IDs
    let recommendedIds = productRecommendations[key as keyof typeof productRecommendations];
    
    // If no specific recommendation for this combination, use default
    if (!recommendedIds) {
      recommendedIds = productRecommendations.default;
    }
    
    // Get full product details
    const recommendations = recommendedIds.map(id => 
      products.find(product => product.id === id)
    ).filter(Boolean);
    
    setRecommendedProducts(recommendations);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
    setRecommendedProducts([]);
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div className="bg-backgroundAlt p-8 rounded-lg shadow-md">
      <AnimatePresence mode="wait">
        {!showResults ? (
          <motion.div
            key="question"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-8">
              <div className="flex justify-between mb-4">
                <span className="text-sm text-textCaption">
                  Question {currentQuestionIndex + 1} of {quizQuestions.length}
                </span>
                <button 
                  onClick={resetQuiz} 
                  className="text-sm text-primary hover:text-secondary"
                >
                  Start Over
                </button>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <h3 className="text-xl font-heading mb-6">{currentQuestion.question}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQuestion.options.map((option) => (
                <motion.div
                  key={option.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer border rounded-lg overflow-hidden ${
                    answers[currentQuestion.id] === option.id
                      ? "border-primary ring-2 ring-primary"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => handleOptionSelect(currentQuestion.id, option.id)}
                >
                  <div className="h-40 relative overflow-hidden">
                    <Image 
                      src={option.image} 
                      alt={option.text} 
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4 flex items-center">
                    <div className={`w-5 h-5 rounded-full border flex-shrink-0 mr-3 ${
                      answers[currentQuestion.id] === option.id
                        ? "border-primary bg-primary"
                        : "border-gray-300"
                    }`}>
                      {answers[currentQuestion.id] === option.id && (
                        <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <span className="font-medium">{option.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <h3 className="text-2xl font-heading mb-2">Your Perfect Scent Match</h3>
            <p className="mb-8">Based on your preferences, we recommend these candles for you:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {recommendedProducts.map((product) => (
                <motion.div
                  key={product.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <Link href={`/products/${product.id}`}>
                    <div className="h-64 relative overflow-hidden">
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-heading text-lg mb-2">{product.name}</h4>
                      <p className="text-sm text-textCaption mb-2">{product.description}</p>
                      <p className="font-medium">${product.price}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={resetQuiz}
                className="btn-secondary"
              >
                Retake Quiz
              </button>
              <Link href="/products" className="btn-primary">
                View All Products
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScentFinderQuiz;
