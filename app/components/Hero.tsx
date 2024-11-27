// app/components/Hero.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: "Transform Your Business",
    subtitle: "With Our Next-Gen SaaS Platform",
    description: "Empower your team with cutting-edge tools and analytics to drive growth and efficiency.",
    image: "/nextjs-tailwind-ts-ai/images/hero_2.jpg", // Updated path
  },
  {
    id: 2,
    title: "Scale with Confidence",
    subtitle: "Enterprise Solutions for Growth",
    description: "Built for scale, designed for success. Take your business to the next level.",
    image: "/nextjs-tailwind-ts-ai/images/hero_1.jpg", // Updated path
  },
  {
    id: 3,
    title: "Data-Driven Insights",
    subtitle: "Make Informed Decisions",
    description: "Turn data into actionable insights with our advanced analytics platform.",
    image: "/nextjs-tailwind-ts-ai/images/hero_3.jpg", // Updated path
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[calc(100vh-5rem)] mt-20 overflow-hidden bg-navy-900">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              {!loading && (
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />
              )}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                unoptimized
                className="object-cover"
                onLoadingComplete={() => setLoading(false)}
              />
              <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="max-w-3xl"
                >
                  <h2 className="text-blue-400 text-lg sm:text-xl font-semibold mb-2 font-poppins drop-shadow-lg">
                    {slide.subtitle}
                  </h2>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-poppins leading-tight drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-lg text-gray-200 mb-6 font-inter drop-shadow-md">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg">
                      Get Started
                    </button>
                    <button className="px-6 py-2.5 bg-black/50 text-white rounded-lg font-medium hover:bg-black/60 transition-colors shadow-lg backdrop-blur-sm">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 bg-blue-500' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;