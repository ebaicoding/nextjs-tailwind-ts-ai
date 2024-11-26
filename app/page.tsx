import Image from "next/image";
import Hero from './components/Hero';
import TestimonialsCarousel from './components/TestimonialsCarousel';

export default function HomePage() {
  return (
    <div className="bg-navy-500 min-h-screen">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <section className="text-center mb-24">
          <h2 className="text-3xl font-bold text-white font-poppins mb-4">
            Trusted by Industry Leaders
          </h2>
          {/* Add logos grid */}
        </section>
        <TestimonialsCarousel />
      </div>
    </div>
  );
}
