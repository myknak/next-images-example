"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    console.log("Form submitted:", formData);
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/contact/hero/contacthero.jpg"
            alt="Lit candle beside vintage telephone"
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
              Get in Touch
            </h1>
            <p className="text-lg mb-8 max-w-xl">
              We'd love to hear from you. Whether you have a question about our products, need assistance with an order, or want to explore wholesale opportunities, our team is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <h2 className="text-h2 font-heading mb-6">Contact Us</h2>
              <p className="mb-8">
                Fill out the form below, and we'll get back to you as soon as possible. For immediate assistance, please call our customer service line during business hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="order">Order Inquiry</option>
                    <option value="product">Product Question</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Send Message
                </button>
                
                {formStatus === "success" && (
                  <div className="p-4 bg-green-50 text-green-800 border border-green-200">
                    Thank you for your message! We'll get back to you shortly.
                  </div>
                )}
                
                {formStatus === "error" && (
                  <div className="p-4 bg-red-50 text-red-800 border border-red-200">
                    There was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="bg-backgroundAlt p-8">
                <h3 className="text-xl font-heading mb-6">Customer Care</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Address</h4>
                    <p className="text-textCaption">
                      Nox Boutique<br />
                      456 Artisan Way, Suite 201<br />
                      Brooklyn, NY 11201
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Customer Service Hours</h4>
                    <p className="text-textCaption">
                      Monday - Friday: 9am - 6pm EST<br />
                      Saturday: 10am - 4pm EST<br />
                      Sunday: Closed
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Contact Information</h4>
                    <p className="text-textCaption mb-1">
                      <span className="font-medium">Email:</span> alla@nox.boutique
                    </p>
                    <p className="text-textCaption mb-1">
                      <span className="font-medium">Phone:</span> (888) 555-0197
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a href="#" aria-label="Instagram" className="text-primary hover:text-secondary transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                      <a href="#" aria-label="Pinterest" className="text-primary hover:text-secondary transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                      <a href="#" aria-label="Facebook" className="text-primary hover:text-secondary transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <img
                    src="https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/contact/contact/customercare.jpg"
                    alt="Customer care"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-backgroundAlt">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-h2 font-heading text-center mb-12">Frequently Asked Questions</h2>
          </ScrollReveal>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <ScrollReveal delay={0.1}>
                <div className="bg-white p-6">
                  <h3 className="text-lg font-medium mb-2">How long do your candles burn?</h3>
                  <p className="text-textCaption">
                    Our candles have varying burn times depending on the size. Small candles (3-4 oz) burn for approximately 20-25 hours, medium candles (8-10 oz) for 50-65 hours, and large candles (12-16 oz) for 70-90 hours. For optimal burn time, always follow our candle care instructions.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <div className="bg-white p-6">
                  <h3 className="text-lg font-medium mb-2">What are your shipping policies?</h3>
                  <p className="text-textCaption">
                    We offer free standard shipping on all orders over $75 within the continental US. Standard shipping typically takes 3-5 business days. Expedited shipping options are available at checkout. International shipping is available to select countries with varying rates.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.3}>
                <div className="bg-white p-6">
                  <h3 className="text-lg font-medium mb-2">Do you offer wholesale options?</h3>
                  <p className="text-textCaption">
                    Yes, we offer wholesale options for retailers, hotels, spas, and other businesses. We require a minimum order quantity and offer custom labeling options. Please contact our wholesale department at wholesale@nox.boutique for more information and to request our wholesale catalog.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.4}>
                <div className="bg-white p-6">
                  <h3 className="text-lg font-medium mb-2">What is your return policy?</h3>
                  <p className="text-textCaption">
                    We accept returns of unused, unopened items within 30 days of delivery. If you receive a damaged item, please contact us within 7 days of receipt with photos of the damage. We do not accept returns of used candles or items marked as final sale.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.5}>
                <div className="bg-white p-6">
                  <h3 className="text-lg font-medium mb-2">Are your candles safe for pets?</h3>
                  <p className="text-textCaption">
                    Our candles are made with pet-friendly soy wax and phthalate-free fragrances. However, we always recommend keeping lit candles away from pets and never leaving them unattended. Some essential oils can be harmful to pets, so please check our product descriptions for specific information.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-h2 font-heading mb-4">Stay Connected</h2>
            <p className="mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter for exclusive offers, new product announcements, and candle care tips.
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
