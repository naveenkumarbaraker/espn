'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaCalendarAlt, FaUser, FaClock } from 'react-icons/fa';

// This would typically come from an API or database
const news = [
  {
    id: 1,
    title: 'Global Tech Summit 2024 Announced',
    excerpt: 'Major tech companies to gather for annual innovation conference.',
    content: `The Global Tech Summit 2024, one of the most anticipated technology events of the year, has been officially announced. Scheduled to take place in San Francisco from June 15-17, 2024, the summit will bring together industry leaders, innovators, and technology enthusiasts from around the world.

This year's summit will focus on several key themes, including artificial intelligence, quantum computing, sustainable technology, and the future of work. Over 200 speakers from leading tech companies and research institutions are expected to participate in panel discussions, workshops, and keynote presentations.

The event will also feature an innovation showcase where startups and established companies can demonstrate their latest technological advancements. Special emphasis will be placed on technologies that address global challenges such as climate change, healthcare accessibility, and digital inclusion.`,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
    category: 'Technology',
    date: '2024-03-15',
    author: 'Sarah Williams',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'New Environmental Policy Announced',
    excerpt: 'Government unveils comprehensive plan for sustainable development.',
    content: `The government has announced a comprehensive new environmental policy aimed at accelerating the transition to a sustainable economy. The policy, unveiled today, includes ambitious targets for reducing carbon emissions, increasing renewable energy production, and protecting natural ecosystems.

Key components of the policy include:
- A 50% reduction in carbon emissions by 2030
- Investment in renewable energy infrastructure
- Implementation of sustainable transportation initiatives
- Protection of critical wildlife habitats
- Support for green technology innovation

The policy represents a significant step forward in the country's commitment to addressing climate change and promoting environmental sustainability. It includes both regulatory measures and financial incentives to encourage businesses and individuals to adopt more sustainable practices.`,
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d',
    category: 'Environment',
    date: '2024-03-14',
    author: 'David Chen',
    readTime: '4 min read',
  },
  {
    id: 3,
    title: 'Economic Growth Forecast Updated',
    excerpt: 'Experts revise economic projections for the coming year.',
    content: `Economic analysts have released updated growth forecasts for the coming year, showing stronger-than-expected performance across multiple sectors. The revised projections indicate a more optimistic outlook for both domestic and global economic conditions.

Key findings from the updated forecast include:
- GDP growth projection increased to 3.2%
- Strong performance in technology and manufacturing sectors
- Improved employment rates
- Stabilization of inflation rates
- Increased consumer confidence

The positive revisions are attributed to several factors, including technological advancements, improved trade relations, and successful implementation of economic stimulus measures. However, analysts caution that ongoing global uncertainties and potential supply chain disruptions could still impact the final outcomes.`,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    category: 'Economy',
    date: '2024-03-13',
    author: 'Emily Rodriguez',
    readTime: '6 min read',
  },
];

export default function NewsPage({ params }: { params: { id: string } }) {
  const newsItem = news.find((n) => n.id === parseInt(params.id));

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-light dark:bg-dark pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-dark dark:text-light">News Not Found</h1>
          <Link href="/news" className="text-primary dark:text-primary-light hover:underline">
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light dark:bg-dark pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/news"
          className="inline-flex items-center text-primary dark:text-primary-light mb-8 hover:text-secondary dark:hover:text-secondary-light"
        >
          <FaArrowLeft className="mr-2" /> Back to News
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-dark-light rounded-lg overflow-hidden"
        >
          <div className="relative h-96">
            <Image
              src={newsItem.image}
              alt={newsItem.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <span className="text-primary dark:text-primary-light font-semibold">
              {newsItem.category}
            </span>
            <h1 className="text-3xl font-bold mt-2 mb-4 text-dark dark:text-light">
              {newsItem.title}
            </h1>
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-8">
              <div className="flex items-center">
                <FaUser className="mr-2" />
                {newsItem.author}
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2" />
                {newsItem.date}
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2" />
                {newsItem.readTime}
              </div>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                {newsItem.excerpt}
              </p>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                {newsItem.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
} 