import React from 'react';
import { Button } from './ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowUp,
  Home,
  Users,
  Award,
  Shield
} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    company: [
      { name: 'About Us', action: () => scrollToSection('testimonials') },
      { name: 'Our Projects', action: () => scrollToSection('properties') },
      { name: 'Amenities', action: () => scrollToSection('amenities') },
      { name: 'Location', action: () => scrollToSection('location') },
      { name: 'Floor Plans', action: () => scrollToSection('floor-plans') }
    ],
    services: [
      { name: 'Site Visits', action: () => scrollToSection('contact') },
      { name: 'Property Consultation', action: () => scrollToSection('contact') },
      { name: 'Home Loans', action: () => scrollToSection('contact') },
      { name: 'Interior Design', action: () => scrollToSection('contact') },
      { name: 'Property Management', action: () => scrollToSection('contact') }
    ],
    legal: [
      { name: 'Privacy Policy', action: () => {} },
      { name: 'Terms of Service', action: () => {} },
      { name: 'RERA Details', action: () => {} },
      { name: 'Cancellation Policy', action: () => {} }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700' }
  ];

  const trustBadges = [
    { icon: Shield, text: 'RERA Approved' },
    { icon: Award, text: 'Award Winning' },
    { icon: Users, text: '500+ Families' },
    { icon: Home, text: 'Premium Quality' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-real-estate-dark text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-real-estate-accent to-yellow-300 rounded-lg flex items-center justify-center">
                <span className="text-real-estate-dark font-bold text-xl">H</span>
              </div>
              <span className="font-bold text-xl text-white">
                Harmony Homes
              </span>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Creating premium living spaces with modern amenities, quality construction, 
              and exceptional customer service. Your dream home awaits at Harmony Homes.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-real-estate-accent" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-real-estate-accent" />
                <span className="text-gray-300">info@harmonyhomes.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-real-estate-accent" />
                <span className="text-gray-300">Prime Location, Mumbai, Maharashtra</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-colors duration-200 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 text-real-estate-accent">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-gray-300 hover:text-real-estate-accent transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 text-real-estate-accent">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-gray-300 hover:text-real-estate-accent transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Legal */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-real-estate-accent">
                Stay Updated
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Subscribe to get special offers and updates about new projects.
              </p>
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-real-estate-accent"
                />
                <Button className="bg-real-estate-accent hover:bg-real-estate-accent/90 text-real-estate-dark font-semibold">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-real-estate-accent">
                Legal
              </h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={link.action}
                      className="text-gray-300 hover:text-real-estate-accent transition-colors duration-200 text-sm text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/20"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-real-estate-accent mb-2">
              Why Choose Harmony Homes?
            </h3>
            <p className="text-gray-300">
              Your trusted partner in finding the perfect home
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-real-estate-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <badge.icon className="w-6 h-6 text-real-estate-accent" />
                </div>
                <p className="text-gray-300 text-sm font-medium">
                  {badge.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-real-estate-primary to-real-estate-secondary rounded-2xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Find Your Dream Home?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied families who have made Harmony Homes their perfect choice. 
              Book your site visit today and experience luxury living firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-real-estate-accent hover:bg-real-estate-accent/90 text-real-estate-dark font-semibold px-8"
                onClick={() => scrollToSection('contact')}
              >
                Book Site Visit
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-real-estate-primary bg-transparent"
                onClick={() => scrollToSection('properties')}
              >
                View Properties
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20 bg-black/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2023 Harmony Homes. All rights reserved. | RERA ID: MH12345678901234
            </div>
            
            {/* Back to Top Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="bg-real-estate-accent text-real-estate-dark p-2 rounded-full hover:bg-yellow-400 transition-colors duration-200"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;