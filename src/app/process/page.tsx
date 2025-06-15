"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Process() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/process/hero/processhero.jpg"
            alt="Close-up of swirling molten wax"
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
              The Art of Candle Making
            </h1>
            <p className="text-lg mb-8 max-w-xl">
              Discover the meticulous process behind every Nox Boutique candle, where tradition meets modern craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Process Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <ScrollReveal>
              <h2 className="text-h2 font-heading mb-6">Our Process</h2>
              <p className="text-lg mb-4">
                At Nox Boutique, we believe that creating the perfect candle is both an art and a science. Each step in our process is executed with precision and care to ensure exceptional quality.
              </p>
              <p>
                From selecting the finest raw materials to the final quality check, our master chandlers oversee every detail. This commitment to craftsmanship is what sets our candles apart and creates an unparalleled sensory experience.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <ScrollReveal delay={0.1}>
              <div className="text-center">
                <div className="w-20 h-20 bg-backgroundAlt rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-heading mb-3">Quality Materials</h3>
                <p className="text-textCaption">
                  We source only the finest soy wax, cotton wicks, and premium fragrance oils to ensure a clean, long-lasting burn.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="text-center">
                <div className="w-20 h-20 bg-backgroundAlt rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-heading mb-3">Precise Technique</h3>
                <p className="text-textCaption">
                  Our master chandlers use time-tested techniques combined with modern innovations to create the perfect candle.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="text-center">
                <div className="w-20 h-20 bg-backgroundAlt rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-heading mb-3">Rigorous Testing</h3>
                <p className="text-textCaption">
                  Every candle undergoes extensive testing to ensure optimal burn time, scent throw, and safety.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="section-padding bg-backgroundAlt">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-h2 font-heading text-center mb-12">From Raw Materials to Finished Product</h2>
          </ScrollReveal>
          
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary text-white flex items-center justify-center text-2xl font-heading">
                    01
                  </div>
                  <img
                    src="https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/about/about/values.jpg"
                    alt="Raw materials selection"
                    className="w-full h-auto"
                  />
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <h3 className="text-2xl font-heading mb-4">Material Selection</h3>
                <p className="mb-4">
                  Our process begins with the careful selection of premium materials. We use only 100% soy wax from sustainable American farms, cotton wicks that ensure a clean burn, and phthalate-free fragrance oils.
                </p>
                <p>
                  For our vessels, we work with artisans who create custom containers from glass, ceramic, and concrete. Each material is chosen not only for its aesthetic appeal but also for its ability to complement and enhance the candle's fragrance.
                </p>
              </ScrollReveal>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ScrollReveal className="order-2 md:order-1">
                <h3 className="text-2xl font-heading mb-4">Fragrance Development</h3>
                <p className="mb-4">
                  Creating the perfect scent is both an art and a science. Our master perfumers work to develop complex, layered fragrances that evolve as the candle burns.
                </p>
                <p>
                  Each scent undergoes multiple iterations and testing phases to ensure it delivers the intended experience. We consider not only the initial impression but how the fragrance develops over time and how it interacts with different environments.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2} className="order-1 md:order-2">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary text-white flex items-center justify-center text-2xl font-heading">
                    02
                  </div>
                  <img
                    src="https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/home/about/scentguide.jpg"
                    alt="Fragrance development"
                    className="w-full h-auto"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary text-white flex items-center justify-center text-2xl font-heading">
                    03
                  </div>
                  <img
                    src="https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/process/about/pouring.jpg"
                    alt="Traditional pouring"
                    className="w-full h-auto"
                  />
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <h3 className="text-2xl font-heading mb-4">Traditional Pouring</h3>
                <p className="mb-4">
                  Our candles are hand-poured in small batches to ensure quality and consistency. The wax is melted to a precise temperature before adding the fragrance oils, which allows for optimal scent binding.
                </p>
                <p>
                  Each vessel is prepared with a centered wick, and the wax is poured at a specific temperature to prevent air bubbles and ensure an even surface. This traditional method takes more time but results in a superior candle.
                </p>
              </ScrollReveal>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ScrollReveal className="order-2 md:order-1">
                <h3 className="text-2xl font-heading mb-4">Curing & Finishing</h3>
                <p className="mb-4">
                  After pouring, our candles undergo a curing process of at least 48 hours. This allows the fragrance to properly bind with the wax and ensures a consistent scent throw when burned.
                </p>
                <p>
                  Once cured, each candle receives its finishing touches. Wicks are trimmed to the perfect length, vessels are cleaned and polished, and labels are carefully applied. Every candle undergoes a final quality check before being packaged for shipping.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2} className="order-1 md:order-2">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary text-white flex items-center justify-center text-2xl font-heading">
                    04
                  </div>
                  <img
                    src="https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/process/about/finishing.jpg"
                    alt="Finishing touches"
                    className="w-full h-auto"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Testing */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="text-h2 font-heading text-center mb-8">Our Quality Standards</h2>
              <p className="text-center mb-12">
                Before any candle leaves our workshop, it undergoes rigorous testing to ensure it meets our exacting standards.
              </p>
            </ScrollReveal>
            
            <div className="space-y-6">
              <ScrollReveal delay={0.1}>
                <div className="flex items-start">
                  <div className="bg-backgroundAlt rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Burn Testing</h3>
                    <p className="text-textCaption">
                      We test burn samples from each batch to ensure consistent burn time, even melting, and proper wick performance. This helps us guarantee that every candle will burn cleanly for its entire life.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <div className="flex items-start">
                  <div className="bg-backgroundAlt rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  <div>
                    <h3 className="text-lg font-medium mb-2">Scent Evaluation</h3>
                    <p className="text-textCaption">
                      Our team of trained evaluators assesses each batch for scent accuracy, throw strength, and how the fragrance develops over time. This ensures that the candle delivers the intended olfactory experience.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.3}>
                <div className="flex items-start">
                  <div className="bg-backgroundAlt rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Visual Inspection</h3>
                    <p className="text-textCaption">
                      Each candle undergoes a thorough visual inspection to check for any imperfections in the wax, vessel, or label. Only candles that meet our aesthetic standards are approved for sale.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.4}>
                <div className="flex items-start">
                  <div className="bg-backgroundAlt rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Safety Certification</h3>
                    <p className="text-textCaption">
                      Our candles are tested to ensure they meet all safety standards. This includes flame height, container heat resistance, and stability. We prioritize safety without compromising on quality or aesthetics.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Tours */}
      <section className="section-padding bg-backgroundAlt">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <img
                src="https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/about/hero/abouthero.jpg"
                alt="Candle making workshop"
                className="w-full h-auto"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <h2 className="text-h2 font-heading mb-4">Visit Our Workshop</h2>
              <p className="mb-4">
                We invite you to experience the art of candle making firsthand by visiting our Brooklyn workshop. See our artisans at work and learn about the process that goes into creating each Nox Boutique candle.
              </p>
              <p className="mb-6">
                Tours are available by appointment and include a behind-the-scenes look at our production process, a fragrance exploration session, and the opportunity to pour your own custom candle to take home.
              </p>
              <Link href="/contact" className="btn-primary">
                Book a Tour
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-h2 font-heading mb-4">Experience the Difference</h2>
            <p className="mb-8 max-w-xl mx-auto">
              Discover the exceptional quality that comes from our meticulous process and commitment to craftsmanship.
            </p>
            <Link href="/products" className="bg-white text-primary px-8 py-3 inline-block hover:bg-secondary hover:text-white transition-colors">
              Shop Our Collection
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
