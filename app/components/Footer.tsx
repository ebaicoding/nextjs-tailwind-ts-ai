// app/components/Footer.tsx
'use client';

import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-poppins">SaaS App</h3>
            <p className="text-sm font-inter">
              Modern solutions for modern businesses
            </p>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-inter">
              <li><Link href="/features">Features</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 font-inter">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <FaTwitter className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
              <FaLinkedin className="w-6 h-6 hover:text-blue-600 cursor-pointer" />
              <FaGithub className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center font-inter">
          <p>&copy; {new Date().getFullYear()} SaaS App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;