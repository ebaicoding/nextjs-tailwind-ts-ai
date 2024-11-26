// app/components/TestimonialsCarousel.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "CEO, TechCorp",
    content: "This SaaS solution transformed our business operations completely.",
    image: "/images/testimonial_1.jpg"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "CTO, StartupX",
    content: "The best investment we've made for our company's growth.",
    image: "/images/testimonial_2.jpg"
  },
  {
    id: 3,
    name: "Jane Johnson",
    role: "CTO, StartupX",
    content: "The best investment we've made for our company's growth.",
    image: "/images/testimonial_3.jpg"
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="bg-navy-800 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-poppins text-white">
          What Our Clients Say
        </h2>
        
        <div className="relative h-[300px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full"
            >
              <div className="bg-navy-700 rounded-xl shadow-lg p-8 mx-4 border border-navy-600">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 relative mb-4 rounded-full overflow-hidden">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-200 mb-6 font-inter text-lg">
                    &quot;{testimonials[currentIndex].content}&quot;
                  </p>
                  <h4 className="font-semibold text-white mb-1 font-poppins">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-blue-400 font-inter">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            onClick={() => {
              setDirection(-1);
              setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-navy-600 p-2 rounded-full shadow-lg hover:bg-navy-500 transition-colors"
          >
            <ChevronLeftIcon className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={() => {
              setDirection(1);
              setCurrentIndex((prev) => (prev + 1) % testimonials.length);
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-navy-600 p-2 rounded-full shadow-lg hover:bg-navy-500 transition-colors"
          >
            <ChevronRightIcon className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-blue-500' 
                  : 'bg-navy-600 hover:bg-navy-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;