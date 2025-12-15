import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { 
  MapPin, 
  Train, 
  Plane, 
  Car, 
  School, 
  Heart,
  ShoppingCart,
  Clock,
  Navigation
} from 'lucide-react';
import { motion } from 'framer-motion';

const Location = () => {
  const nearbyPlaces = [
    {
      category: 'Transportation',
      icon: Train,
      color: 'bg-blue-100 text-blue-600',
      places: [
        { name: 'Central Railway Station', distance: '2.5 km', time: '5 min drive' },
        { name: 'Airport', distance: '15 km', time: '25 min drive' },
        { name: 'Metro Station', distance: '500 m', time: '5 min walk' },
        { name: 'Bus Stop', distance: '200 m', time: '2 min walk' }
      ]
    },
    {
      category: 'Healthcare',
      icon: Heart,
      color: 'bg-red-100 text-red-600',
      places: [
        { name: 'City Hospital', distance: '1.2 km', time: '3 min drive' },
        { name: 'Apollo Clinic', distance: '800 m', time: '2 min drive' },
        { name: 'Dental Care Center', distance: '600 m', time: '5 min walk' },
        { name: 'Pharmacy', distance: '300 m', time: '3 min walk' }
      ]
    },
    {
      category: 'Education',
      icon: School,
      color: 'bg-green-100 text-green-600',
      places: [
        { name: 'International School', distance: '1.5 km', time: '5 min drive' },
        { name: 'College of Engineering', distance: '3.2 km', time: '10 min drive' },
        { name: 'Primary School', distance: '800 m', time: '2 min drive' },
        { name: 'Library', distance: '1.8 km', time: '7 min drive' }
      ]
    },
    {
      category: 'Shopping & Entertainment',
      icon: ShoppingCart,
      color: 'bg-purple-100 text-purple-600',
      places: [
        { name: 'Shopping Mall', distance: '2.1 km', time: '8 min drive' },
        { name: 'Supermarket', distance: '400 m', time: '3 min walk' },
        { name: 'Movie Theater', distance: '3.5 km', time: '12 min drive' },
        { name: 'Restaurant Zone', distance: '1.1 km', time: '5 min drive' }
      ]
    }
  ];

  const transportHubs = [
    { icon: Train, name: 'Metro Station', distance: '500m', color: 'bg-blue-500' },
    { icon: Car, name: 'Highway Access', distance: '1.2km', color: 'bg-green-500' },
    { icon: Plane, name: 'Airport', distance: '15km', color: 'bg-purple-500' },
    { icon: Train, name: 'Railway Station', distance: '2.5km', color: 'bg-orange-500' }
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
    <section id="location" className="py-20 bg-white">
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
            Prime <span className="text-real-estate-accent">Location</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategically located in the heart of the city with excellent connectivity to all major landmarks. 
            Enjoy the perfect balance of urban convenience and peaceful living.
          </p>
        </motion.div>

        {/* Location Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="overflow-hidden">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="w-6 h-6 text-real-estate-accent" />
                <span>Project Location</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative h-96 bg-gray-200">
                {/* Placeholder for actual map */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-real-estate-accent mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-real-estate-dark mb-2">
                      Harmony Homes
                    </h3>
                    <p className="text-gray-600">
                      Prime Location, Mumbai, Maharashtra
                    </p>
                  </div>
                </div>
                {/* Overlay with interactive elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button 
                    className="bg-real-estate-accent hover:bg-real-estate-accent/90 text-real-estate-dark"
                    onClick={() => window.open('https://maps.google.com', '_blank')}
                  >
                    <Navigation className="mr-2 w-4 h-4" />
                    View on Google Maps
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Transport Connectivity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-real-estate-primary to-real-estate-secondary text-white">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-6 text-center">
                Excellent Connectivity
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {transportHubs.map((hub, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`w-16 h-16 ${hub.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                      <hub.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold mb-1">{hub.name}</h4>
                    <p className="text-white/80 text-sm">{hub.distance}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Nearby Places */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {nearbyPlaces.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg ${category.color} flex items-center justify-center`}>
                      <category.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-bold text-real-estate-dark">
                      {category.category}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.places.map((place, placeIndex) => (
                      <motion.div
                        key={placeIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: placeIndex * 0.1 }}
                        className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                      >
                        <div>
                          <h4 className="font-semibold text-real-estate-dark">
                            {place.name}
                          </h4>
                          <div className="flex items-center space-x-2 text-gray-600">
                            <MapPin className="w-3 h-3" />
                            <span className="text-sm">{place.distance}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1 text-real-estate-accent">
                            <Clock className="w-3 h-3" />
                            <span className="text-sm font-medium">{place.time}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Location Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-real-estate-light rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-real-estate-dark mb-4">
              Why This Location is Perfect
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Situated in one of Mumbai's fastest-growing neighborhoods, our project offers the best of urban living 
              with world-class infrastructure and connectivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Smart City Initiative',
                description: 'Part of the government\'s Smart City development plan',
                icon: '🏙️'
              },
              {
                title: 'Future-Ready',
                description: 'Planned metro expansion and infrastructure upgrades',
                icon: '🚇'
              },
              {
                title: 'High Appreciation',
                description: 'Expected 25% property value increase in 5 years',
                icon: '📈'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="text-xl font-semibold text-real-estate-dark mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600">
                  {benefit.description}
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
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <h3 className="text-2xl font-bold text-real-estate-dark mb-4">
            Visit Our Site Today
          </h3>
          <p className="text-gray-600 mb-6">
            Experience the location firsthand and see why this is the perfect place for your family
          </p>
          <Button
            size="lg"
            className="bg-real-estate-primary hover:bg-real-estate-primary/90 px-8 py-3"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Schedule Site Visit
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;