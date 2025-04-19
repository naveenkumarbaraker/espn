'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaUser, FaClock } from 'react-icons/fa';

const articles = [
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
    image: 'https://peach-major-moose-180.mypinata.cloud/ipfs/bafkreiai2equjipljd6kb2xo5rm2fkch7ipdkkjvulic2tqys7piflkdgu',
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
    image: 'https://www.kupywrestlingwallpapers.info/wallpapers/2025/alexa-bliss-the-fiend-wallpaper-4k.jpg',
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
    image: 'https://peach-major-moose-180.mypinata.cloud/ipfs/bafybeiecmocmgu4swnnoursyw3f34apwiwnyfg7xudujsjplx3jzugxmam',
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
    image: 'https://peach-major-moose-180.mypinata.cloud/ipfs/bafkreibfqx3sxhh2a7ihmlzw6dnx34cyt4dlx6le5rmiuouj7jwzx3r4vy',
    category: 'Tennis',
    date: '2024-03-10',
    author: 'Emma Wilson',
    readTime: '6 min read',
  },
];

function ArticlesContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  const filteredArticles = category
    ? articles.filter((article) => article.category.toLowerCase() === category.toLowerCase())
    : articles;

  return (
    <div className="min-h-screen bg-light dark:bg-dark pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-dark dark:text-light">
          {category ? `${category} Articles` : 'Sports Articles'}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.id}`}
              className="block bg-white dark:bg-dark-light rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
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
                <h2 className="text-xl font-bold mt-2 mb-4 text-dark dark:text-light">
                  {article.title}
                </h2>
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ArticlesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-light dark:bg-dark pt-24 flex items-center justify-center">Loading...</div>}>
      <ArticlesContent />
    </Suspense>
  );
} 