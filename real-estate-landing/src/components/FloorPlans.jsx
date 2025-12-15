import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Maximize, Bed, Bath, Square, ArrowRight, ZoomIn } from 'lucide-react';
import { motion } from 'framer-motion';

const FloorPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const floorPlans = [
    {
      id: 1,
      type: '2BHK',
      title: 'Premium 2BHK',
      area: '1,250 sq ft',
      price: '₹65 L onwards',
      bedrooms: 2,
      bathrooms: 2,
      description: 'Perfect for small families seeking comfort and luxury with modern amenities.',
      layout: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Spacious Living Room', 'Modular Kitchen', 'Balcony with Garden View', 'Master Bedroom with Walk-in Closet'],
      roomDetails: [
        { room: 'Living Room', size: '15\' x 12\'', area: '180 sq ft' },
        { room: 'Master Bedroom', size: '14\' x 12\'', area: '168 sq ft' },
        { room: 'Second Bedroom', size: '12\' x 10\'', area: '120 sq ft' },
        { room: 'Kitchen', size: '12\' x 8\'', area: '96 sq ft' },
        { room: 'Balcony', size: '8\' x 6\'', area: '48 sq ft' }
      ]
    },
    {
      id: 2,
      type: '3BHK',
      title: 'Luxury 3BHK',
      area: '1,850 sq ft',
      price: '₹95 L onwards',
      bedrooms: 3,
      bathrooms: 3,
      description: 'Spacious family home with premium finishes and additional amenities.',
      layout: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Study Room', 'Servant Room', 'Store Room', 'Premium Kitchen with Island', 'Master Bedroom Suite'],
      roomDetails: [
        { room: 'Living Room', size: '18\' x 14\'', area: '252 sq ft' },
        { room: 'Master Bedroom', size: '16\' x 14\'', area: '224 sq ft' },
        { room: 'Second Bedroom', size: '14\' x 12\'', area: '168 sq ft' },
        { room: 'Third Bedroom', size: '12\' x 10\'', area: '120 sq ft' },
        { room: 'Kitchen', size: '14\' x 10\'', area: '140 sq ft' },
        { room: 'Study Room', size: '10\' x 8\'', area: '80 sq ft' }
      ]
    },
    {
      id: 3,
      type: '3BHK Corner',
      title: 'Spacious 3BHK Corner',
      area: '2,200 sq ft',
      price: '₹1.2 Cr onwards',
      bedrooms: 3,
      bathrooms: 3,
      description: 'Premium corner unit with private terrace and panoramic city views.',
      layout: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Private Terrace', 'Corner Unit', 'Panoramic Views', 'Luxury Fittings', 'Premium Location'],
      roomDetails: [
        { room: 'Living Room', size: '20\' x 16\'', area: '320 sq ft' },
        { room: 'Master Bedroom', size: '18\' x 14\'', area: '252 sq ft' },
        { room: 'Second Bedroom', size: '15\' x 12\'', area: '180 sq ft' },
        { room: 'Third Bedroom', size: '14\' x 12\'', area: '168 sq ft' },
        { room: 'Kitchen', size: '16\' x 12\'', area: '192 sq ft' },
        { room: 'Terrace', size: '20\' x 15\'', area: '300 sq ft' }
      ]
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

  const planVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="floor-plans" className="py-20 bg-gray-50">
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
            Detailed <span className="text-real-estate-accent">Floor Plans</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Carefully designed layouts that maximize space utilization while ensuring optimal natural light and ventilation. 
            Choose from our range of thoughtfully planned 2BHK and 3BHK apartments.
          </p>
        </motion.div>

        {/* Floor Plan Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-full p-2 shadow-lg">
            {floorPlans.map((plan, index) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedPlan === index
                    ? 'bg-real-estate-primary text-white shadow-md'
                    : 'text-gray-600 hover:text-real-estate-primary'
                }`}
              >
                {plan.type}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Selected Floor Plan */}
        <motion.div
          key={selectedPlan}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Floor Plan Visualization */}
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <div className="relative group">
                <img
                  src={floorPlans[selectedPlan].layout}
                  alt={`${floorPlans[selectedPlan].title} Layout`}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-real-estate-primary bg-transparent"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <ZoomIn className="mr-2 w-4 h-4" />
                    View Full Size
                  </Button>
                </div>
              </div>
            </Card>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Square className="w-8 h-8 text-real-estate-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-real-estate-dark">
                    {floorPlans[selectedPlan].area}
                  </div>
                  <div className="text-gray-600 text-sm">Total Area</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Maximize className="w-8 h-8 text-real-estate-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-real-estate-dark">
                    {floorPlans[selectedPlan].price}
                  </div>
                  <div className="text-gray-600 text-sm">Starting Price</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Floor Plan Details */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl text-real-estate-dark">
                  {floorPlans[selectedPlan].title}
                </CardTitle>
                <p className="text-gray-600 text-lg">
                  {floorPlans[selectedPlan].description}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Configuration */}
                <div className="flex space-x-6">
                  <div className="flex items-center space-x-2">
                    <Bed className="w-5 h-5 text-real-estate-accent" />
                    <span className="font-semibold">{floorPlans[selectedPlan].bedrooms} BHK</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bath className="w-5 h-5 text-real-estate-accent" />
                    <span className="font-semibold">{floorPlans[selectedPlan].bathrooms} Bathrooms</span>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-real-estate-dark mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {floorPlans[selectedPlan].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <ArrowRight className="w-4 h-4 text-real-estate-accent" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Room Details */}
                <div>
                  <h4 className="font-semibold text-real-estate-dark mb-3">Room-wise Details</h4>
                  <div className="space-y-3">
                    {floorPlans[selectedPlan].roomDetails.map((room, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium text-real-estate-dark">{room.room}</div>
                          <div className="text-sm text-gray-600">{room.size}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-real-estate-accent">{room.area}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button className="flex-1 bg-real-estate-primary hover:bg-real-estate-primary/90">
                    Download Brochure
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-real-estate-accent text-real-estate-accent hover:bg-real-estate-accent hover:text-real-estate-dark"
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Enquire Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Modal for Full Size View */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <Button
                variant="outline"
                className="absolute top-4 right-4 z-10 border-white text-white hover:bg-white hover:text-real-estate-primary bg-transparent"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </Button>
              <img
                src={floorPlans[selectedPlan].layout}
                alt={`${floorPlans[selectedPlan].title} Full Layout`}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FloorPlans;