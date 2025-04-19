'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FaArrowRight, FaCalendarAlt, FaUser, FaClock, FaFilter } from 'react-icons/fa';

const news = [
  {
    id: 1,
    title: 'India vs England: 5th Test Match Preview',
    excerpt: 'All you need to know about the crucial final test match between India and England.',
    summary: 'Preview of the final test match including team news, pitch conditions, and key players to watch.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    category: 'Cricket',
    date: '2024-03-15',
    author: 'Rahul Sharma',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Champions League Quarter-Final Draw Announced',
    excerpt: 'The draw for the Champions League quarter-finals has been made, setting up some mouthwatering ties.',
    summary: 'Analysis of the Champions League quarter-final draw and predictions for each tie.',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    category: 'Football',
    date: '2024-03-14',
    author: 'David Wilson',
    readTime: '4 min read',
  },
  {
    id: 3,
    title: 'NBA Playoff Race Heats Up',
    excerpt: 'The battle for playoff positions in the NBA is reaching its climax.',
    summary: 'Analysis of the current NBA standings and predictions for the final playoff spots.',
    image: 'https://images.unsplash.com/photo-1546519638-68e109dbb01d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    category: 'Basketball',
    date: '2024-03-13',
    author: 'Mike Davis',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'WrestleMania 40 Match Card Announced',
    excerpt: 'The official match card for WrestleMania 40 has been revealed.',
    summary: 'Breakdown of all the matches announced for WrestleMania 40 and predictions for each bout.',
    image: 'https://images.unsplash.com/photo-1517639230359-9d2f5a1b0c0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    category: 'Wrestling',
    date: '2024-03-12',
    author: 'Alex Thompson',
    readTime: '5 min read',
  },
  {
    id: 5,
    title: 'IPL 2024: Opening Ceremony Details',
    excerpt: 'Everything you need to know about the IPL 2024 opening ceremony.',
    summary: 'Details about the IPL 2024 opening ceremony, including performers and special guests.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    category: 'IPL',
    date: '2024-03-11',
    author: 'Priya Patel',
    readTime: '4 min read',
  },
  {
    id: 6,
    title: 'Australian Open 2024: Final Preview',
    excerpt: 'Preview of the Australian Open men\'s and women\'s singles finals.',
    summary: 'Analysis of both the men\'s and women\'s singles finals at the Australian Open.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    category: 'Tennis',
    date: '2024-03-10',
    author: 'Emma Wilson',
    readTime: '5 min read',
  },
];

export default function NewsPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  const filteredNews = category
    ? news.filter((item) => item.category.toLowerCase() === category.toLowerCase())
    : news;

  return (
    <div className="min-h-screen bg-light dark:bg-dark pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-dark dark:text-light">
            {category ? `${category} News` : 'Sports News'}
          </h1>
          <div className="flex justify-center items-center gap-4">
            <Link
              href="/categories"
              className="inline-flex items-center text-primary dark:text-primary-light hover:text-secondary dark:hover:text-secondary-light"
            >
              <FaFilter className="mr-2" /> Browse Categories
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-dark-light rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-primary dark:text-primary-light font-semibold">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-4 text-dark dark:text-light">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.excerpt}
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {item.summary}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <FaUser className="mr-2" />
                    {item.author}
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    {item.date}
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-2" />
                    {item.readTime}
                  </div>
                </div>
                <Link
                  href={`/news/${item.id}`}
                  className="inline-flex items-center text-primary dark:text-primary-light mt-4 hover:text-secondary dark:hover:text-secondary-light"
                >
                  Read More <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
} 