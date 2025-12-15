import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Bath, Bed, Car, Square, MapPin, Eye, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const PropertyShowcase = () => {
  const properties = [
    {
      id: 1,
      title: 'Premium 2BHK Apartment',
      price: '₹65 L onwards',
      area: '1,250 sq ft',
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Modular Kitchen', 'Balcony', 'Power Backup', 'Security'],
      status: 'Ready to Move',
      isPopular: true
    },
    {
      id: 2,
      title: 'Luxury 3BHK Apartment',
      price: '₹95 L onwards',
      area: '1,850 sq ft',
      bedrooms: 3,
      bathrooms: 3,
      parking: 2,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Study Room', 'Servant Room', 'Store Room', 'Premium Finishes'],
      status: 'Under Construction',
      isPopular: false
    },
    {
      id: 3,
      title: 'Spacious 3BHK Corner Unit',
      price: '₹1.2 Cr onwards',
      area: '2,200 sq ft',
      bedrooms: 3,
      bathrooms: 3,
      parking: 2,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Corner Unit', 'Private Terrace', 'Premium View', 'Luxury Fittings'],
      status: 'Ready to Move',
      isPopular: true
    }
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="properties" className="py-20 bg-gray-50">
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
            Premium <span className="text-real-estate-accent">Properties</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of meticulously designed 2BHK and 3BHK apartments, 
            crafted for modern families seeking comfort and luxury.
          </p>
        </motion.div>

        {/* Properties Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {properties.map((property) => (
            <motion.div key={property.id} variants={cardVariants}>
              <Card className="property-card-hover overflow-hidden bg-white shadow-lg group">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      property.status === 'Ready to Move' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {property.status}
                    </span>
                  </div>

                  {/* Popular Badge */}
                  {property.isPopular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-real-estate-accent text-real-estate-dark px-3 py-1 rounded-full text-xs font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <button className="bg-white text-real-estate-dark p-2 rounded-full hover:bg-real-estate-accent transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="bg-white text-real-estate-dark p-2 rounded-full hover:bg-real-estate-accent transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-semibold text-real-estate-dark">
                      {property.title}
                    </CardTitle>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-real-estate-accent">
                        {property.price}
                      </div>
                      <div className="text-sm text-gray-500">All inclusive</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">Prime Location, Mumbai</span>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Property Details */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Bed className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{property.bedrooms} Bedrooms</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Bath className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{property.bathrooms} Bathrooms</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Square className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{property.area}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Car className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{property.parking} Parking</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {property.features.map((feature, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-real-estate-primary hover:bg-real-estate-primary/90"
                      size="sm"
                    >
                      Get Details
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-real-estate-accent text-real-estate-accent hover:bg-real-estate-accent hover:text-real-estate-dark"
                    >
                      Schedule Visit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-real-estate-primary text-real-estate-primary hover:bg-real-estate-primary hover:text-white px-8 py-3"
          >
            View All Properties
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyShowcase;