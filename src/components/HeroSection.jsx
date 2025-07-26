import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

function HeroSection({ handleBookingClick, handleQuoteClick }) {
  return (
    <section className="pt-16 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
      <img  
        className="absolute inset-0 w-full h-full object-cover" 
        alt="Modern automotive workshop with professional mechanics working on cars"
       src="https://images.unsplash.com/photo-1551522435-a13afa10f103" />
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Elite Auto Workshop
            <span className="block text-red-500">Pakenham</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed"
          >
            Your trusted automotive partner in Melbourne's southeast. Professional service, expert repairs, and unmatched quality for over 15 years.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              onClick={handleBookingClick}
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4 rounded-xl shadow-2xl transform hover:scale-105 transition-all"
            >
              Book Your Service
            </Button>
            <Button 
              onClick={handleQuoteClick}
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4 rounded-xl"
            >
              Get Free Quote
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;