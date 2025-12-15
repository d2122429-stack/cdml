import React from 'react';
import { Card, CardContent } from './ui/card';
import { 
  Car, 
  Shield, 
  Wifi, 
  Dumbbell, 
  Users, 
  Waves, 
  TreePine, 
  Zap,
  Droplets,
  Car as CarFront,
  Camera,
  Coffee,
  School,
  Heart,
  TreePine as Garden
} from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const amenities = [
    {
      category: 'Fitness & Recreation',
      icon: Dumbbell,
      color: 'bg-red-100 text-red-600',
      items: [
        { icon: Dumbbell, name: 'Modern Gym', description: 'State-of-the-art fitness center' },
        { icon: Waves, name: 'Swimming Pool', description: 'Olympic-size pool with kids area' },
        { icon: Users, name: 'Jogging Track', description: '2km dedicated jogging track' },
        { icon: TreePine, name: 'Meditation Garden', description: 'Peaceful green spaces' }
      ]
    },
    {
      category: 'Security & Convenience',
      icon: Shield,
      color: 'bg-blue-100 text-blue-600',
      items: [
        { icon: Shield, name: '24/7 Security', description: 'Round-the-clock security personnel' },
        { icon: Car, name: 'Covered Parking', description: 'Dedicated parking for residents' },
        { icon: Camera, name: 'CCTV Surveillance', description: 'Comprehensive security monitoring' },
        { icon: Zap, name: 'Power Backup', description: 'Uninterrupted power supply' }
      ]
    },
    {
      category: 'Lifestyle & Community',
      icon: Coffee,
      color: 'bg-green-100 text-green-600',
      items: [
        { icon: Coffee, name: 'Club House', description: 'Premium community center' },
        { icon: School, name: 'Children Play Area', description: 'Safe and fun playground' },
        { icon: Garden, name: 'Landscaped Gardens', description: 'Beautiful green landscapes' },
        { icon: Droplets, name: 'Rainwater Harvesting', description: 'Eco-friendly water conservation' }
      ]
    },
    {
      category: 'Connectivity',
      icon: Wifi,
      color: 'bg-purple-100 text-purple-600',
      items: [
        { icon: Wifi, name: 'High-Speed Internet', description: 'Fiber optic connectivity' },
        { icon: CarFront, name: 'EV Charging', description: 'Electric vehicle charging points' },
        { icon: Heart, name: 'Near Hospital', description: 'Proximity to healthcare facilities' },
        { icon: TreePine, name: 'Near Railway Station', description: '5 minutes walk to metro' }
      ]
    }
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
    <section id="amenities" className="py-20 bg-white">
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
            World-Class <span className="text-real-estate-accent">Amenities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience a lifestyle enriched with premium amenities designed for modern families. 
            Everything you need for a comfortable and luxurious life is right at your doorstep.
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {amenities.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mr-4`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-real-estate-dark">
                      {category.category}
                    </h3>
                  </div>

                  {/* Amenities List */}
                  <div className="space-y-4">
                    {category.items.map((amenity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                      >
                        <div className={`w-10 h-10 rounded-lg ${category.color} flex items-center justify-center flex-shrink-0`}>
                          <amenity.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-real-estate-dark mb-1">
                            {amenity.name}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {amenity.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '15+', label: 'Premium Amenities' },
            { number: '24/7', label: 'Security & Maintenance' },
            { number: '100%', label: 'Power Backup' },
            { number: '5★', label: 'Rating' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-real-estate-light to-white rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-real-estate-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-real-estate-primary to-real-estate-secondary rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Experience Luxury Living Today
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Book a site visit and discover how our amenities can enhance your lifestyle
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-real-estate-accent text-real-estate-dark px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-colors duration-200"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Schedule Site Visit
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;