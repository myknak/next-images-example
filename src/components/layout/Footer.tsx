"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a newsletter service
    alert(`Thank you for subscribing! Check your email for 10% off your first order.`);
    setEmail("");
  };

  return (
    <footer className="bg-backgroundAlt pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-1"
          >
            <img 
              src="https://d2jb2caottkk25.cloudfront.net/test333.chernov.xyz/logo/logo.jpg" 
              alt="Nox Boutique Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-textCaption mb-4">
              Premium, eco-conscious candles poured by master chandlers.
            </p>
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
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-secondary transition-colors">Our Story</Link></li>
              <li><Link href="/products" className="text-sm hover:text-secondary transition-colors">Shop All</Link></li>
              <li><Link href="/process" className="text-sm hover:text-secondary transition-colors">Our Process</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-secondary transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="text-sm hover:text-secondary transition-colors">Scent Finder Quiz</Link></li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm hover:text-secondary transition-colors">Shipping & Returns</Link></li>
              <li><Link href="#" className="text-sm hover:text-secondary transition-colors">FAQ</Link></li>
              <li><Link href="#" className="text-sm hover:text-secondary transition-colors">Care Guide</Link></li>
              <li><Link href="#" className="text-sm hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm hover:text-secondary transition-colors">Terms of Service</Link></li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-textCaption mb-4">
              Subscribe for exclusive offers, candle care tips, and new releases.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email for 10% off first order"
                className="px-4 py-2 border border-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 hover:bg-secondary transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        <div className="border-t border-secondary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-xs text-textCaption">
                Nox Boutique<br />
                456 Artisan Way, Suite 201, Brooklyn, NY 11201<br />
                Customer Service Hours: Monday-Friday 9 am-6 pm EST
              </p>
            </div>
            <div className="text-xs text-textCaption">
              <p>© {new Date().getFullYear()} Nox Boutique. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
