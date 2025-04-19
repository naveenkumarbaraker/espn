'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowLeft } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-light dark:bg-dark pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-dark dark:text-light">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-dark-light rounded-lg p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-dark dark:text-light">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary dark:focus:ring-primary-light focus:border-primary dark:focus:border-primary-light bg-white dark:bg-dark text-dark dark:text-light"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary dark:focus:ring-primary-light focus:border-primary dark:focus:border-primary-light bg-white dark:bg-dark text-dark dark:text-light"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary dark:focus:ring-primary-light focus:border-primary dark:focus:border-primary-light bg-white dark:bg-dark text-dark dark:text-light"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary dark:focus:ring-primary-light focus:border-primary dark:focus:border-primary-light bg-white dark:bg-dark text-dark dark:text-light"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary dark:bg-primary-light text-white dark:text-dark py-2 px-4 rounded-md hover:bg-secondary dark:hover:bg-secondary-light transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-dark-light rounded-lg p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-dark dark:text-light">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <FaEnvelope className="text-primary dark:text-primary-light mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-dark dark:text-light">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">contact@blogplatform.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaPhone className="text-primary dark:text-primary-light mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-dark dark:text-light">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-primary dark:text-primary-light mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-dark dark:text-light">Address</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    123 Innovation Street<br />
                    Tech City, TC 12345<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center text-primary dark:text-primary-light hover:text-secondary dark:hover:text-secondary-light"
              >
                <FaArrowLeft className="mr-2" /> Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 