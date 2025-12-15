import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-real-estate-primary to-real-estate-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <span className={`font-bold text-xl ${isScrolled ? 'text-real-estate-dark' : 'text-white'}`}>
              Harmony Homes
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Properties', 'Amenities', 'Floor Plans', 'Location', 'Testimonials', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className={`font-medium transition-colors hover:text-real-estate-accent ${
                  isScrolled ? 'text-real-estate-dark' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className={`w-4 h-4 ${isScrolled ? 'text-real-estate-dark' : 'text-white'}`} />
              <span className={`text-sm ${isScrolled ? 'text-real-estate-dark' : 'text-white'}`}>
                +91 98765 43210
              </span>
            </div>
            <Button
              size="sm"
              className="bg-real-estate-accent hover:bg-real-estate-accent/90 text-real-estate-dark"
              onClick={() => scrollToSection('contact')}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? 'text-real-estate-dark' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg rounded-b-lg">
            <nav className="flex flex-col space-y-4 p-6">
              {['Home', 'Properties', 'Amenities', 'Floor Plans', 'Location', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-left font-medium text-real-estate-dark hover:text-real-estate-accent transition-colors"
                >
                  {item}
                </button>
              ))}
              <div className="flex items-center space-x-2 pt-4 border-t">
                <Phone className="w-4 h-4 text-real-estate-dark" />
                <span className="text-sm text-real-estate-dark">+91 98765 43210</span>
              </div>
              <Button
                className="bg-real-estate-accent hover:bg-real-estate-accent/90 text-real-estate-dark mt-2"
                onClick={() => scrollToSection('contact')}
              >
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;