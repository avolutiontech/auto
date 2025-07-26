import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Award } from 'lucide-react';

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Pakenham's Most Trusted Auto Workshop
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              For over 15 years, Elite Auto Workshop has been serving the Pakenham community with exceptional automotive services. Our team of certified technicians combines traditional craftsmanship with cutting-edge technology to deliver unparalleled results.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Located in the heart of Pakenham, we're proud to be your local automotive experts, providing honest advice, competitive pricing, and quality workmanship that keeps your vehicle running at its best.
            </p>
            
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-red-500 mb-2">
                  <Users className="h-8 w-8 mx-auto" />
                </div>
                <div className="text-3xl font-bold text-white">2500+</div>
                <div className="text-gray-400">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-red-500 mb-2">
                  <Award className="h-8 w-8 mx-auto" />
                </div>
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-red-500 mb-2">
                  <Star className="h-8 w-8 mx-auto" />
                </div>
                <div className="text-3xl font-bold text-white">4.9</div>
                <div className="text-gray-400">Star Rating</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img  
              className="rounded-2xl shadow-2xl w-full h-96 object-cover" 
              alt="Professional automotive technicians working in modern workshop"
             src="https://images.unsplash.com/photo-1551522435-a13afa10f103" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;