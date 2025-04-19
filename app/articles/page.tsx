'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FaArrowRight, FaCalendarAlt, FaUser, FaClock, FaFilter } from 'react-icons/fa';

const articles = [
  {
    id: 1,
    title: 'The Evolution of T20 Cricket',
    excerpt: 'How T20 cricket has transformed the game and created new opportunities for players.',
    summary: 'An in-depth analysis of how T20 cricket has revolutionized the sport, from its impact on player fitness to the rise of franchise leagues worldwide.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    category: 'Cricket',
    date: '2024-03-15',
    author: 'John Smith',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'The Rise of Women\'s Football',
    excerpt: 'Exploring the growing popularity and development of women\'s football globally.',
    summary: 'A comprehensive look at how women\'s football has grown in popularity, the challenges it has overcome, and its future prospects.',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    category: 'Football',
    date: '2024-03-14',
    author: 'Sarah Johnson',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'NBA: The New Generation of Superstars',
    excerpt: 'Analyzing the impact of young players on the NBA landscape.',
    summary: 'A detailed examination of how the new generation of NBA players is changing the game and setting new standards for excellence.',
    image: 'https://images.unsplash.com/photo-1546519638-68e109dbb01d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    category: 'Basketball',
    date: '2024-03-13',
    author: 'Mike Davis',
    readTime: '7 min read',
  },
  {
    id: 4,
    title: 'WWE: The Art of Storytelling in Wrestling',
    excerpt: 'How WWE creates compelling narratives that captivate millions of fans.',
    summary: 'An exploration of the storytelling techniques used in professional wrestling and how they create emotional connections with the audience.',
    image: 'https://images.unsplash.com/photo-1517639230359-9d2f5a1b0c0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    category: 'Wrestling',
    date: '2024-03-12',
    author: 'Alex Thompson',
    readTime: '5 min read',
  },
  {
    id: 5,
    title: 'IPL 2024: Team Analysis and Predictions',
    excerpt: 'A comprehensive preview of the upcoming IPL season.',
    summary: 'Detailed analysis of each team\'s strengths, weaknesses, and chances in the upcoming IPL season, including key players to watch.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    category: 'IPL',
    date: '2024-03-11',
    author: 'Rahul Sharma',
    readTime: '9 min read',
  },
  {
    id: 6,
    title: 'The Future of Tennis: Next Gen Stars',
    excerpt: 'Profiling the young players set to dominate tennis in the coming years.',
    summary: 'A look at the rising stars in tennis who are poised to take over from the current generation of champions.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    category: 'Tennis',
    date: '2024-03-10',
    author: 'Emma Wilson',
    readTime: '6 min read',
  },
];

export default function ArticlesPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  const filteredArticles = category
    ? articles.filter((article) => article.category.toLowerCase() === category.toLowerCase())
    : articles;

  return (
    <div className="min-h-screen bg-light dark:bg-dark pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-dark dark:text-light">
            {category ? `${category} Articles` : 'Sports Articles'}
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
          {filteredArticles.map((article) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-dark-light rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-primary dark:text-primary-light font-semibold">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-4 text-dark dark:text-light">
                  {article.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {article.excerpt}
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {article.summary}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <FaUser className="mr-2" />
                    {article.author}
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    {article.date}
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-2" />
                    {article.readTime}
                  </div>
                </div>
                <Link
                  href={`/articles/${article.id}`}
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