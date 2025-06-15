"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Checkout() {
  const router = useRouter();
  const { cart, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    sameAsBilling: true,
    shippingAddress: "",
    shippingCity: "",
    shippingState: "",
    shippingZipCode: "",
    shippingCountry: "United States",
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: ""
  });
  
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Redirect to products if cart is empty
  useEffect(() => {
    if (cart.length === 0) {
      router.push("/products");
    }
  }, [cart, router]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };
  
  const nextStep = () => {
    setStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };
  
  const prevStep = () => {
    setStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      setStep(4); // Order confirmation step
    }, 2000);
  };
  
  // Calculate shipping cost
  const shippingCost = cartTotal >= 75 ? 0 : 8.95;
  
  // Calculate tax (assume 8.875% for NY)
  const taxRate = 0.08875;
  const taxAmount = cartTotal * taxRate;
  
  // Calculate order total
  const orderTotal = cartTotal + shippingCost + taxAmount;

  return (
    <div className="pt-32 pb-16 bg-white">
      <div className="container-custom">
        {/* Checkout Steps */}
        <div className="mb-12">
          <div className="flex justify-between items-center max-w-3xl mx-auto">
            <div className={`flex flex-col items-center ${step >= 1 ? "text-primary" : "text-textCaption"}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 1 ? "bg-primary text-white" : "bg-backgroundAlt"}`}>
                1
              </div>
              <span className="text-sm">Cart</span>
            </div>
            <div className={`flex-1 h-0.5 mx-2 ${step >= 2 ? "bg-primary" : "bg-backgroundAlt"}`}></div>
            <div className={`flex flex-col items-center ${step >= 2 ? "text-primary" : "text-textCaption"}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 2 ? "bg-primary text-white" : "bg-backgroundAlt"}`}>
                2
              </div>
              <span className="text-sm">Shipping</span>
            </div>
            <div className={`flex-1 h-0.5 mx-2 ${step >= 3 ? "bg-primary" : "bg-backgroundAlt"}`}></div>
            <div className={`flex flex-col items-center ${step >= 3 ? "text-primary" : "text-textCaption"}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 3 ? "bg-primary text-white" : "bg-backgroundAlt"}`}>
                3
              </div>
              <span className="text-sm">Payment</span>
            </div>
            <div className={`flex-1 h-0.5 mx-2 ${step >= 4 ? "bg-primary" : "bg-backgroundAlt"}`}></div>
            <div className={`flex flex-col items-center ${step >= 4 ? "text-primary" : "text-textCaption"}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 4 ? "bg-primary text-white" : "bg-backgroundAlt"}`}>
                4
              </div>
              <span className="text-sm">Confirmation</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Checkout Form */}
          <div className="lg:col-span-2">
            {/* Step 1: Cart Review */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h1 className="text-2xl font-heading mb-6">Review Your Cart</h1>
                
                {cart.length === 0 ? (
                  <div className="text-center py-12 bg-backgroundAlt">
                    <p className="mb-6">Your cart is empty</p>
                    <Link href="/products" className="btn-primary">
                      Shop Now
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="space-y-6 mb-8">
                      {cart.map((item) => (
                        <div key={item.id} className="flex border-b border-secondary/20 pb-6">
                          <div className="w-24 h-24 flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="ml-4 flex-grow">
                            <div className="flex justify-between">
                              <h3 className="font-medium">{item.name}</h3>
                              <button 
                                onClick={() => removeFromCart(item.id)}
                                className="text-textCaption hover:text-primary"
                                aria-label="Remove item"
                              >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </button>
                            </div>
                            <p className="text-sm text-textCaption mb-2">${item.price.toFixed(2)}</p>
                            <div className="flex items-center">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-6 h-6 flex items-center justify-center border border-secondary"
                                aria-label="Decrease quantity"
                              >
                                -
                              </button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-6 h-6 flex items-center justify-center border border-secondary"
                                aria-label="Increase quantity"
                              >
                                +
                              </button>
                              <span className="ml-auto font-medium">
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-between mb-8">
                      <Link href="/products" className="text-primary hover:text-secondary">
                        <span className="flex items-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                            <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Continue Shopping
                        </span>
                      </Link>
                      
                      <button 
                        onClick={nextStep}
                        className="btn-primary"
                      >
                        Proceed to Shipping
                      </button>
                    </div>
                  </>
                )}
              </motion.div>
            )}
            
            {/* Step 2: Shipping Information */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h1 className="text-2xl font-heading mb-6">Shipping Information</h1>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block mb-1 text-sm font-medium">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block mb-1 text-sm font-medium">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block mb-1 text-sm font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block mb-1 text-sm font-medium">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block mb-1 text-sm font-medium">
                      Billing Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="city" className="block mb-1 text-sm font-medium">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="state" className="block mb-1 text-sm font-medium">
                        State/Province *
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="zipCode" className="block mb-1 text-sm font-medium">
                        ZIP/Postal Code *
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="country" className="block mb-1 text-sm font-medium">
                      Country *
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="sameAsBilling"
                      name="sameAsBilling"
                      checked={formData.sameAsBilling}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="sameAsBilling" className="text-sm">
                      Shipping address same as billing
                    </label>
                  </div>
                  
                  {!formData.sameAsBilling && (
                    <div className="space-y-4 pt-4 border-t border-secondary/20">
                      <h3 className="text-lg font-medium">Shipping Address</h3>
                      
                      <div>
                        <label htmlFor="shippingAddress" className="block mb-1 text-sm font-medium">
                          Address *
                        </label>
                        <input
                          type="text"
                          id="shippingAddress"
                          name="shippingAddress"
                          value={formData.shippingAddress}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                          required={!formData.sameAsBilling}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label htmlFor="shippingCity" className="block mb-1 text-sm font-medium">
                            City *
                          </label>
                          <input
                            type="text"
                            id="shippingCity"
                            name="shippingCity"
                            value={formData.shippingCity}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                            required={!formData.sameAsBilling}
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="shippingState" className="block mb-1 text-sm font-medium">
                            State/Province *
                          </label>
                          <input
                            type="text"
                            id="shippingState"
                            name="shippingState"
                            value={formData.shippingState}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                            required={!formData.sameAsBilling}
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="shippingZipCode" className="block mb-1 text-sm font-medium">
                            ZIP/Postal Code *
                          </label>
                          <input
                            type="text"
                            id="shippingZipCode"
                            name="shippingZipCode"
                            value={formData.shippingZipCode}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                            required={!formData.sameAsBilling}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="shippingCountry" className="block mb-1 text-sm font-medium">
                          Country *
                        </label>
                        <select
                          id="shippingCountry"
                          name="shippingCountry"
                          value={formData.shippingCountry}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                          required={!formData.sameAsBilling}
                        >
                          <option value="United States">United States</option>
                          <option value="Canada">Canada</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Australia">Australia</option>
                        </select>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-between pt-4">
                    <button 
                      type="button"
                      onClick={prevStep}
                      className="btn-secondary"
                    >
                      Back to Cart
                    </button>
                    
                    <button 
                      type="button"
                      onClick={nextStep}
                      className="btn-primary"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
            
            {/* Step 3: Payment Information */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h1 className="text-2xl font-heading mb-6">Payment Information</h1>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Payment Method</h3>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center border border-secondary px-4 py-2 cursor-pointer bg-backgroundAlt">
                        <input
                          type="radio"
                          id="creditCard"
                          name="paymentMethod"
                          checked
                          readOnly
                          className="mr-2"
                        />
                        <label htmlFor="creditCard" className="cursor-pointer">
                          Credit Card
                        </label>
                      </div>
                      
                      <div className="flex items-center border border-secondary px-4 py-2 cursor-not-allowed opacity-50">
                        <input
                          type="radio"
                          id="paypal"
                          name="paymentMethod"
                          disabled
                          className="mr-2"
                        />
                        <label htmlFor="paypal" className="cursor-not-allowed">
                          PayPal
                        </label>
                      </div>
                      
                      <div className="flex items-center border border-secondary px-4 py-2 cursor-not-allowed opacity-50">
                        <input
                          type="radio"
                          id="applePay"
                          name="paymentMethod"
                          disabled
                          className="mr-2"
                        />
                        <label htmlFor="applePay" className="cursor-not-allowed">
                          Apple Pay
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="cardName" className="block mb-1 text-sm font-medium">
                      Name on Card *
                    </label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="cardNumber" className="block mb-1 text-sm font-medium">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      placeholder="XXXX XXXX XXXX XXXX"
                      className="w-full px-4 py-2 border border-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cardExpiry" className="block mb-1 text-sm font-medium">
                        Expiration Date (MM/YY) *
                      </label>
                      <input
                        type="text"
                        id="cardExpiry"
                        name="cardExpiry"
                        value={formData.cardExpiry}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        className="w-full px-4 py-2 border border-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="cardCvc" className="block mb-1 text-sm font-medium">
                        CVC/CVV *
                      </label>
                      <input
                        type="text"
                        id="cardCvc"
                        name="cardCvc"
                        value={formData.cardCvc}
                        onChange={handleChange}
                        placeholder="XXX"
                        className="w-full px-4 py-2 border border-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-secondary/20">
                    <h3 className="text-lg font-medium mb-4">Billing Summary</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${cartTotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>{shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax</span>
                        <span>${taxAmount.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-medium text-lg pt-2 border-t border-secondary/20">
                        <span>Total</span>
                        <span>${orderTotal.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-4">
                    <button 
                      type="button"
                      onClick={prevStep}
                      className="btn-secondary"
                      disabled={isProcessing}
                    >
                      Back
                    </button>
                    
                    <button 
                      type="submit"
                      className="btn-primary min-w-[150px]"
                      disabled={isProcessing}
                    >
                      {isProcessing ? "Processing..." : "Place Order"}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
            
            {/* Step 4: Order Confirmation */}
            {step === 4 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <h1 className="text-2xl font-heading mb-4">Order Confirmed!</h1>
                <p className="mb-6 max-w-md mx-auto">
                  Thank you for your order. We've received your payment and will begin processing your order right away.
                </p>
                <p className="mb-8 text-sm text-textCaption max-w-md mx-auto">
                  Order #NOX-{Math.floor(100000 + Math.random() * 900000)}<br />
                  A confirmation email has been sent to {formData.email}
                </p>
                
                <Link href="/products" className="btn-primary">
                  Continue Shopping
                </Link>
              </motion.div>
            )}
          </div>
          
          {/* Order Summary Sidebar */}
          {step < 4 && (
            <div className="lg:col-span-1">
              <div className="bg-backgroundAlt p-6 sticky top-32">
                <h2 className="text-xl font-heading mb-4">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center">
                      <div className="w-16 h-16 flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-3 flex-grow">
                        <h3 className="text-sm font-medium">{item.name}</h3>
                        <p className="text-xs text-textCaption">Qty: {item.quantity}</p>
                      </div>
                      <div className="text-sm font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-secondary/20 pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>{shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>${taxAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-medium pt-2 border-t border-secondary/20">
                    <span>Total</span>
                    <span>${orderTotal.toFixed(2)}</span>
                  </div>
                </div>
                
                {cartTotal < 75 && (
                  <div className="mt-6 p-3 bg-accent/20 text-sm">
                    Add ${(75 - cartTotal).toFixed(2)} more to qualify for free shipping!
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
