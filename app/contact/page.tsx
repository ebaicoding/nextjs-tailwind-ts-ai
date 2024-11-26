'use client';

import { useState } from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  return (
    <div className="min-h-screen bg-navy-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white font-poppins mb-4">Contact Us</h1>
          <p className="text-gray-400 text-lg font-inter">Get in touch with our team</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <form className="bg-navy-800 p-8 rounded-xl shadow-lg border border-navy-700">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-navy-900 text-white rounded-lg border border-navy-700 px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-navy-900 text-white rounded-lg border border-navy-700 px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-navy-900 text-white rounded-lg border border-navy-700 px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your message here..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-navy-800"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="bg-navy-800 p-8 rounded-xl shadow-lg border border-navy-700 h-fit">
            <h3 className="text-xl font-semibold text-white mb-6 font-poppins">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start text-gray-400">
                <MapPinIcon className="h-6 w-6 text-blue-500 mt-1 mr-3" />
                <p>123 Business Ave<br />Suite 100<br />New York, NY 10001</p>
              </div>
              <div className="flex items-center text-gray-400">
                <PhoneIcon className="h-5 w-5 text-blue-500 mr-3" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center text-gray-400">
                <EnvelopeIcon className="h-5 w-5 text-blue-500 mr-3" />
                <p>contact@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}