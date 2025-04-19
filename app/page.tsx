'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaCalendarAlt, FaUser, FaClock, FaFilter } from 'react-icons/fa';

const featuredArticles = [
  {
    id: 1,
    title: 'The Evolution of T20 Cricket',
    excerpt: 'How T20 cricket has transformed the game and created new opportunities for players.',
    summary: 'An in-depth analysis of how T20 cricket has revolutionized the sport, from its impact on player fitness to the rise of franchise leagues worldwide.',
    image: 'https://peach-major-moose-180.mypinata.cloud/ipfs/bafybeidvztr4brg6eszvfrfnvvmkbfo2zzzw227qendlovx5lunhsxyqhe',
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
    image: 'https://peach-major-moose-180.mypinata.cloud/ipfs/bafybeia44uszvdlffl3wesdhzhumsoqbaeyvy4stfgpowhngwlridbwxvm',
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
    image: 'https://peach-major-moose-180.mypinata.cloud/ipfs/bafybeiec4yokrk3gdethp7eraqs74cxz72gjwa2xussaimiteug34diase',
    category: 'Basketball',
    date: '2024-03-13',
    author: 'Mike Davis',
    readTime: '7 min read',
  },
];

const latestNews = [
  {
    id: 1,
    title: 'India vs England: 5th Test Match Preview',
    excerpt: 'All you need to know about the crucial final test match between India and England.',
    summary: 'Preview of the final test match including team news, pitch conditions, and key players to watch.',
    image: 'https://peach-major-moose-180.mypinata.cloud/ipfs/bafkreigxujzpbyugjvwayhbsvf6dxof5tuvsc2pye5feivcaiesrmsh2se',
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
    image: 'https://peach-major-moose-180.mypinata.cloud/ipfs/bafybeicl3727hoa2brft7i5py4ubswplhu7c4q44ufhb42kengopmhrfn4',
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
    image: 'https://peach-major-moose-180.mypinata.cloud/ipfs/bafkreiai2equjipljd6kb2xo5rm2fkch7ipdkkjvulic2tqys7piflkdgu',
    category: 'Basketball',
    date: '2024-03-13',
    author: 'Mike Davis',
    readTime: '6 min read',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-light dark:bg-dark">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Sports Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Welcome to Sports Hub
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Your Ultimate Destination for Sports News and Articles
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/articles"
              className="bg-primary dark:bg-primary-light text-white px-8 py-3 rounded-lg hover:bg-secondary dark:hover:bg-secondary-light transition-colors"
            >
              Read Articles
            </Link>
            <Link
              href="/news"
              className="bg-white text-dark px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Latest News
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-dark dark:text-light">
              Featured Articles
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Discover our most popular sports articles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
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
      </section>

      {/* Latest News */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-dark-light">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-dark dark:text-light">
              Latest Sports News
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Stay updated with the latest happenings in the world of sports
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((news) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-dark rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-primary dark:text-primary-light font-semibold">
                    {news.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-4 text-dark dark:text-light">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {news.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <FaUser className="mr-2" />
                      {news.author}
                    </div>
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      {news.date}
                    </div>
                    <div className="flex items-center">
                      <FaClock className="mr-2" />
                      {news.readTime}
                    </div>
                  </div>
                  <Link
                    href={`/news/${news.id}`}
                    className="inline-flex items-center text-primary dark:text-primary-light mt-4 hover:text-secondary dark:hover:text-secondary-light"
                  >
                    Read More <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-dark dark:text-light">
              Sports Categories
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Explore our wide range of sports categories
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['Cricket', 'Football', 'Basketball', 'Wrestling', 'IPL', 'Tennis'].map((category) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Link
                  href={`/articles?category=${category.toLowerCase()}`}
                  className="block p-6 bg-white dark:bg-dark-light rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <span className="text-4xl mb-4 block">
                    {category === 'Cricket' && '🏏'}
                    {category === 'Football' && '⚽'}
                    {category === 'Basketball' && '🏀'}
                    {category === 'Wrestling' && '🤼'}
                    {category === 'IPL' && '🏆'}
                    {category === 'Tennis' && '🎾'}
                  </span>
                  <h3 className="text-lg font-semibold text-dark dark:text-light">
                    {category}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 