'use client';

import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Real-Time Alerts',
    description: 'Receive instant warnings for floods, earthquakes, storms, and other crises.',
    img: '/images/feature1.png',
  },
  {
    title: 'Disaster Mapping',
    description: 'Access interactive maps that display affected zones and safe shelters.',
    img: '/images/feature2.png',
  },
  {
    title: 'Emergency Resources',
    description: 'Find critical resources like helplines, aid centers, and live updates.',
    img: '/images/feature3.png',
  },
  {
    title: 'Volunteer Coordination',
    description: 'Mobilize and organize volunteers during rescue and relief operations.',
    img: '/images/feature4.png',
  },
  {
    title: 'Incident Reporting',
    description: 'Quickly report disaster events to authorities and response teams.',
    img: '/images/feature5.png',
  },
];

const Features = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0px',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/images/features.png')",
      }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold font-serif text-white mb-20"
        >
          Features & Services
        </motion.h2>

        <div className="w-full max-w-5xl">
          <Slider {...settings}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-4"
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="bg-white rounded-lg shadow-lg p-6 text-center max-w-xs mx-auto cursor-pointer transition-transform"
                >
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="rounded-md mb-4 w-full h-48 object-cover"
                  />
                  <h3 className="text-xl font-serif font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-700 text-sm font-sans">{feature.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Features;
