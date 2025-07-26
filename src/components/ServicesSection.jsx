import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Car, Shield, Clock } from 'lucide-react';

function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Expert Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive automotive solutions delivered by certified technicians using state-of-the-art equipment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Car className="h-12 w-12" />,
              title: "General Servicing",
              description: "Complete vehicle inspections, oil changes, filter replacements, and routine maintenance to keep your car running smoothly.",
              features: ["Oil & Filter Changes", "Brake Inspections", "Tire Rotations", "Fluid Top-ups"]
            },
            {
              icon: <Wrench className="h-12 w-12" />,
              title: "Engine Repairs",
              description: "Expert diagnosis and repair of engine issues, from minor tune-ups to major overhauls using genuine parts.",
              features: ["Engine Diagnostics", "Timing Belt Service", "Cooling System", "Fuel System Repair"]
            },
            {
              icon: <Shield className="h-12 w-12" />,
              title: "Brake Services",
              description: "Complete brake system maintenance and repairs to ensure your safety on the road with premium quality parts.",
              features: ["Brake Pad Replacement", "Disc Machining", "Brake Fluid Service", "ABS Diagnostics"]
            },
            {
              icon: <Clock className="h-12 w-12" />,
              title: "Transmission Service",
              description: "Professional transmission maintenance and repairs for both automatic and manual transmissions.",
              features: ["Transmission Flush", "Clutch Replacement", "Gearbox Repair", "Differential Service"]
            },
            {
              icon: <Car className="h-12 w-12" />,
              title: "Air Conditioning",
              description: "Complete A/C system service including gas recharge, leak detection, and component replacement.",
              features: ["Gas Recharge", "Leak Detection", "Compressor Service", "Filter Replacement"]
            },
            {
              icon: <Shield className="h-12 w-12" />,
              title: "Roadworthy Certificates",
              description: "Official roadworthy inspections and certificates for vehicle registration and transfer requirements.",
              features: ["Safety Inspections", "Compliance Checks", "Certificate Issue", "Pre-purchase Inspections"]
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/30 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-red-500 mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-400 flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;