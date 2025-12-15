import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PropertyShowcase from './components/PropertyShowcase';
import Features from './components/Features';
import FloorPlans from './components/FloorPlans';
import Location from './components/Location';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <PropertyShowcase />
        <Features />
        <FloorPlans />
        <Location />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;