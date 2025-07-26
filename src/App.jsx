import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

function App() {
  const handleContactClick = () => {
    toast({
      title: "🚧 Contact form isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 4000,
    });
  };

  const handleBookingClick = () => {
    toast({
      title: "🚧 Online booking isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 4000,
    });
  };

  const handleQuoteClick = () => {
    toast({
      title: "🚧 Quote request isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 4000,
    });
  };

  return (
    <>
      <Helmet>
        <title>Elite Auto Workshop Pakenham - Professional Car Service & Repairs</title>
        <meta name="description" content="Premier automobile workshop in Pakenham, Melbourne. Expert car servicing, repairs, and maintenance. Quality workmanship, competitive prices, and exceptional customer service." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-2"
              >
                <Wrench className="h-8 w-8 text-red-500" />
                <span className="text-xl font-bold text-white">Elite Auto Workshop</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden md:flex items-center space-x-8"
              >
                <a href="#services" className="text-white hover:text-red-500 transition-colors">Services</a>
                <a href="#about" className="text-white hover:text-red-500 transition-colors">About</a>
                <a href="#contact" className="text-white hover:text-red-500 transition-colors">Contact</a>
                <Button onClick={handleBookingClick} className="bg-red-600 hover:bg-red-700 text-white">
                  Book Service
                </Button>
              </motion.div>
            </div>
          </div>
        </nav>

        <HeroSection handleBookingClick={handleBookingClick} handleQuoteClick={handleQuoteClick} />
        <ServicesSection />
        <AboutSection />
        <ContactSection handleContactClick={handleContactClick} />
        <Footer />
        
        <Toaster />
      </div>
    </>
  );
}

export default App;