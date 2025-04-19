'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaUsers, FaLightbulb, FaGlobe } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-light dark:bg-dark pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-dark dark:text-light">
            About Our Platform
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are dedicated to providing high-quality content that informs, educates, and inspires our readers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-dark-light rounded-lg p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-dark dark:text-light">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our mission is to create a platform where knowledge meets innovation. We strive to deliver
              accurate, timely, and engaging content across various topics, from technology and business
              to lifestyle and science.
            </p>
            <div className="flex items-center text-primary dark:text-primary-light">
              <FaLightbulb className="mr-2" />
              <span>Inspiring Innovation</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-dark-light rounded-lg p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-dark dark:text-light">Our Vision</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We envision a world where information is accessible, reliable, and empowering. Our platform
              aims to be a trusted source of knowledge that helps individuals and organizations make
              informed decisions.
            </p>
            <div className="flex items-center text-primary dark:text-primary-light">
              <FaGlobe className="mr-2" />
              <span>Global Impact</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-dark-light rounded-lg p-8 shadow-lg mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-dark dark:text-light">Our Team</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Our team consists of passionate writers, editors, and content creators who are experts in
            their respective fields. We work together to ensure that every piece of content meets our
            high standards of quality and accuracy.
          </p>
          <div className="flex items-center text-primary dark:text-primary-light">
            <FaUsers className="mr-2" />
            <span>Dedicated Professionals</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center text-primary dark:text-primary-light hover:text-secondary dark:hover:text-secondary-light"
          >
            Get in Touch <FaArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 