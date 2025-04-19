'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaCalendarAlt, FaUser, FaClock } from 'react-icons/fa';

// This would typically come from an API or database
const articles = [
  {
    id: 1,
    title: 'The Future of Artificial Intelligence',
    excerpt: 'Exploring the latest advancements in AI and their impact on society.',
    content: `Artificial Intelligence (AI) is revolutionizing the way we live and work. From self-driving cars to virtual assistants, AI technologies are becoming increasingly integrated into our daily lives. This article explores the latest developments in AI and their potential impact on various industries.

The rapid advancement of machine learning algorithms and neural networks has enabled computers to perform tasks that were once thought to be exclusive to human intelligence. Deep learning, a subset of machine learning, has particularly shown remarkable progress in areas such as image recognition, natural language processing, and predictive analytics.

As we look to the future, AI is expected to continue transforming industries such as healthcare, finance, transportation, and manufacturing. However, with these advancements come important ethical considerations and the need for responsible AI development.`,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    category: 'Technology',
    date: '2024-03-15',
    author: 'John Doe',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'Sustainable Living in Modern Cities',
    excerpt: 'How urban areas are adapting to climate change and promoting sustainability.',
    content: `Modern cities are at the forefront of the sustainability movement, implementing innovative solutions to combat climate change and create more livable environments. This article examines the various approaches cities are taking to become more sustainable.

From green building initiatives to renewable energy projects, urban areas are leading the way in environmental innovation. Public transportation systems are being electrified, green spaces are being expanded, and waste management systems are becoming more efficient.

The integration of smart technology with urban planning is creating new opportunities for sustainable development. Cities are using data analytics to optimize energy usage, reduce emissions, and improve overall quality of life for their residents.`,
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df',
    category: 'Lifestyle',
    date: '2024-03-14',
    author: 'Jane Smith',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'The Rise of Remote Work',
    excerpt: 'Analyzing the long-term effects of remote work on productivity and work-life balance.',
    content: `The shift to remote work has transformed the modern workplace, creating new opportunities and challenges for both employers and employees. This article explores the long-term implications of this significant change in how we work.

Remote work has demonstrated that many jobs can be performed effectively from anywhere, leading to increased flexibility and improved work-life balance for many employees. Companies are rethinking their office spaces and work policies to accommodate this new reality.

However, remote work also presents challenges such as maintaining team cohesion, ensuring effective communication, and managing work-life boundaries. The article discusses strategies for addressing these challenges while maximizing the benefits of remote work arrangements.`,
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
    category: 'Business',
    date: '2024-03-13',
    author: 'Mike Johnson',
    readTime: '7 min read',
  },
];

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = articles.find((a) => a.id === parseInt(params.id));

  if (!article) {
    return (
      <div className="min-h-screen bg-light dark:bg-dark pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-dark dark:text-light">Article Not Found</h1>
          <Link href="/articles" className="text-primary dark:text-primary-light hover:underline">
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light dark:bg-dark pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/articles"
          className="inline-flex items-center text-primary dark:text-primary-light mb-8 hover:text-secondary dark:hover:text-secondary-light"
        >
          <FaArrowLeft className="mr-2" /> Back to Articles
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-dark-light rounded-lg overflow-hidden"
        >
          <div className="relative h-96">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <span className="text-primary dark:text-primary-light font-semibold">
              {article.category}
            </span>
            <h1 className="text-3xl font-bold mt-2 mb-4 text-dark dark:text-light">
              {article.title}
            </h1>
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-8">
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
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                {article.excerpt}
              </p>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                {article.content.split('\n\n').map((paragraph, index) => (
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