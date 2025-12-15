import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai',
      property: '2BHK Premium',
      rating: 5,
      review: 'Harmony Homes has exceeded all our expectations. The quality of construction, amenities, and customer service are outstanding. Our family feels safe and comfortable here.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      date: 'March 2023'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      location: 'Pune',
      property: '3BHK Luxury',
      rating: 5,
      review: 'The location is perfect with excellent connectivity. The amenities are world-class and the maintenance team is very responsive. Highly recommended for families.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      date: 'January 2023'
    },
    {
      id: 3,
      name: 'Anjali Patel',
      location: 'Ahmedabad',
      property: '3BHK Corner Unit',
      rating: 5,
      review: 'Best investment decision we ever made. The terrace and corner location provide amazing views. The builder is very transparent and delivered on time.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      date: 'November 2022'
    },
    {
      id: 4,
      name: 'Vikram Singh',
      location: 'Delhi',
      property: '2BHK Premium',
      rating: 5,
      review: 'The security features and 24/7 maintenance give us peace of mind. Children love the play areas and we enjoy the club house facilities.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      date: 'September 2023'
    },
    {
      id: 5,
      name: 'Meera Reddy',
      location: 'Hyderabad',
      property: '3BHK Luxury',
      rating: 5,
      review: 'The quality of materials used and the attention to detail is remarkable. Our home is beautiful, functional, and designed perfectly for modern living.',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      date: 'December 2022'
    },
    {
      id: 6,
      name: 'Amit Agarwal',
      location: 'Bangalore',
      property: '3BHK Corner Unit',
      rating: 5,
      review: 'Excellent value for money. The location is developing rapidly with great infrastructure. The builder maintained transparency throughout the process.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      date: 'February 2023'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Families' },
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '15+', label: 'Industry Awards' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-real-estate-dark mb-4">
            What Our <span className="text-real-estate-accent">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from hundreds of satisfied families who have made 
            Harmony Homes their dream destination.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-3xl md:text-4xl font-bold text-real-estate-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 property-card-hover">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-real-estate-accent opacity-60" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Review */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.review}"
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center space-x-4 border-t pt-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-real-estate-dark">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {testimonial.property} • {testimonial.location}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-real-estate-primary to-real-estate-secondary text-white p-8">
            <h3 className="text-3xl font-bold mb-4">
              Join Our Happy Community
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Be part of a growing community that values quality, comfort, and trust. 
              Experience the Harmony Homes difference today.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              {[
                { icon: '🏆', text: 'RERA Approved' },
                { icon: '🛡️', text: 'Secure Investment' },
                { icon: '✅', text: 'On-Time Delivery' },
                { icon: '📞', text: '24/7 Support' }
              ].map((indicator, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2">
                  <span className="text-2xl">{indicator.icon}</span>
                  <span className="font-medium">{indicator.text}</span>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-real-estate-accent text-real-estate-dark px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-colors duration-200"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Your Journey
            </motion.button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;