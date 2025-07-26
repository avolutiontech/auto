import React from 'react';
import { Wrench } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Wrench className="h-8 w-8 text-red-500" />
              <span className="text-xl font-bold text-white">Elite Auto Workshop</span>
            </div>
            <p className="text-gray-400 mb-4">
              Pakenham's premier automotive service center, delivering excellence since 2008.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                <span className="text-white text-sm">f</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                <span className="text-white text-sm">ig</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                <span className="text-white text-sm">g</span>
              </div>
            </div>
          </div>
          
          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Services</span>
            <ul className="space-y-2 text-gray-400">
              <li>General Servicing</li>
              <li>Engine Repairs</li>
              <li>Brake Services</li>
              <li>Transmission</li>
              <li>Air Conditioning</li>
              <li>Roadworthy Certificates</li>
            </ul>
          </div>
          
          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Quick Links</span>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-red-500 transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-red-500 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-red-500 transition-colors">Contact</a></li>
              <li className="hover:text-red-500 transition-colors cursor-pointer">Book Online</li>
              <li className="hover:text-red-500 transition-colors cursor-pointer">Get Quote</li>
            </ul>
          </div>
          
          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Contact Info</span>
            <div className="space-y-2 text-gray-400">
              <p>123 Main Street<br />Pakenham VIC 3810</p>
              <p>(03) 5941 2345</p>
              <p>info@eliteautopakenham.com.au</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Elite Auto Workshop Pakenham. All rights reserved. | ABN: 12 345 678 901
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;