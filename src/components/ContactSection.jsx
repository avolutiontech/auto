import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

function ContactSection({ handleContactClick }) {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to experience the Elite Auto Workshop difference? Contact us today for expert automotive service in Pakenham.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-red-600 p-3 rounded-xl">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Visit Our Workshop</h3>
                <p className="text-gray-300">123 Main Street<br />Pakenham VIC 3810<br />Melbourne, Australia</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-red-600 p-3 rounded-xl">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us Today</h3>
                <p className="text-gray-300">(03) 5941 2345<br />Mobile: 0412 345 678</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-red-600 p-3 rounded-xl">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300">info@eliteautopakenham.com.au<br />bookings@eliteautopakenham.com.au</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-red-600 p-3 rounded-xl">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Opening Hours</h3>
                <div className="text-gray-300 space-y-1">
                  <p>Monday - Friday: 7:30 AM - 5:30 PM</p>
                  <p>Saturday: 8:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/30 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                    placeholder="Smith"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="0412 345 678"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Service Required</label>
                <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-red-500 transition-colors">
                  <option>General Service</option>
                  <option>Engine Repair</option>
                  <option>Brake Service</option>
                  <option>Transmission</option>
                  <option>Air Conditioning</option>
                  <option>Roadworthy Certificate</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  rows="4" 
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors resize-none"
                  placeholder="Tell us about your vehicle and what service you need..."
                ></textarea>
              </div>
              
              <Button 
                onClick={handleContactClick}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg rounded-xl transform hover:scale-105 transition-all"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;