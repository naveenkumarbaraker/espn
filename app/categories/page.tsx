'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaNewspaper, FaBook } from 'react-icons/fa';

const categories = [
  {
    id: 'cricket',
    name: 'Cricket',
    description: 'Latest cricket news, match analysis, and player updates',
    articleCount: 12,
    newsCount: 15,
    icon: '🏏',
    image: 'https://peach-major-moose-180.mypinata.cloud/ipfs/bafybeifefk375yucmxx3xbps2jgsuefondbsfneyhuq2dtjw5eh7m7mpgu',
  },
  {
    id: 'football',
    name: 'Football',
    description: 'Football matches, transfers, and league updates',
    articleCount: 10,
    newsCount: 14,
    icon: '⚽',
    image: 'https://peach-major-moose-180.mypinata.cloud/ipfs/bafybeidp4jeyxlubxkmcwljqdho446epcrlnmvn6r7qbspolxvbe5hc6y4',
  },
  {
    id: 'basketball',
    name: 'Basketball',
    description: 'NBA, international basketball, and player highlights',
    articleCount: 8,
    newsCount: 11,
    icon: '🏀',
    image: 'https://peach-major-moose-180.mypinata.cloud/ipfs/bafybeiec4yokrk3gdethp7eraqs74cxz72gjwa2xussaimiteug34diase',
  },
  {
    id: 'wrestling',
    name: 'Wrestling',
    description: 'WWE, AEW, and professional wrestling news',
    articleCount: 6,
    newsCount: 9,
    icon: '🤼',
    image: 'https://peach-major-moose-180.mypinata.cloud/ipfs/bafkreibemkqkpvsblgiha3paatv4afif55vuxibsl7pdwcuy5ljjm6ns7y',
  },
  {
    id: 'ipl',
    name: 'IPL',
    description: 'Indian Premier League news, matches, and team updates',
    articleCount: 9,
    newsCount: 12,
    icon: '🏆',
    image: 'https://peach-major-moose-180.mypinata.cloud/ipfs/bafybeihuaukje2gvbzluq6ver777hesaigatev4lwprd6lsrmoayls7dtm',
  },
  {
    id: 'tennis',
    name: 'Tennis',
    description: 'Grand Slams, ATP, WTA, and player rankings',
    articleCount: 7,
    newsCount: 10,
    icon: '🎾',
    image: 'https://peach-major-moose-180.mypinata.cloud/ipfs/bafybeibbnq2o544hbhkg7f3tvfjizxctyzoafgyxlb42npvoef3hu2vpui',
  },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-light dark:bg-dark pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-dark dark:text-light">
            Sports Categories
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explore the world of sports through our comprehensive coverage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-dark-light rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-4xl">{category.icon}</span>
                  <h2 className="text-2xl font-bold text-white">
                    {category.name}
                  </h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {category.description}
                </p>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <FaBook className="mr-2" />
                    {category.articleCount} Articles
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <FaNewspaper className="mr-2" />
                    {category.newsCount} News
                  </div>
                </div>
                <div className="flex justify-between">
                  <Link
                    href={`/articles?category=${category.id}`}
                    className="inline-flex items-center text-primary dark:text-primary-light hover:text-secondary dark:hover:text-secondary-light"
                  >
                    View Articles <FaArrowRight className="ml-2" />
                  </Link>
                  <Link
                    href={`/news?category=${category.id}`}
                    className="inline-flex items-center text-primary dark:text-primary-light hover:text-secondary dark:hover:text-secondary-light"
                  >
                    View News <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 