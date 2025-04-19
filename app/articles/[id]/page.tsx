import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaCalendarAlt, FaUser, FaClock } from 'react-icons/fa';

const articles = [
  {
    id: 1,
    title: 'The Evolution of T20 Cricket',
    excerpt: 'How T20 cricket has transformed the game and created new opportunities for players.',
    summary: 'An in-depth analysis of how T20 cricket has revolutionized the sport, from its impact on player fitness to the rise of franchise leagues worldwide.',
    content: `
      <p>T20 cricket has completely transformed the landscape of cricket since its inception. The fast-paced format has not only changed how the game is played but also how it's perceived by fans worldwide.</p>
      <p>One of the most significant impacts of T20 cricket has been on player fitness and training methods. Players now focus more on explosive power, agility, and quick decision-making skills.</p>
      <p>The format has also led to the rise of franchise leagues across the globe, creating new opportunities for players and bringing cricket to new audiences.</p>
    `,
    image: 'https://peach-major-moose-180.mypinata.cloud/ipfs/bafkreigxujzpbyugjvwayhbsvf6dxof5tuvsc2pye5feivcaiesrmsh2se',
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
    content: `
      <p>Women's football has seen unprecedented growth in recent years, with increasing viewership, sponsorship deals, and media coverage.</p>
      <p>The success of major tournaments like the FIFA Women's World Cup has played a crucial role in raising the profile of the women's game.</p>
      <p>Despite the progress, challenges remain in terms of equal pay, facilities, and opportunities for female players at all levels.</p>
    `,
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
    content: `
      <p>The NBA is witnessing a new era of talent, with young players making an immediate impact on the league.</p>
      <p>Players like Luka Dončić, Ja Morant, and Zion Williamson are redefining what's possible on the basketball court.</p>
      <p>This new generation is not only skilled but also more versatile, able to play multiple positions and adapt to different styles of play.</p>
    `,
    image: 'https://peach-major-moose-180.mypinata.cloud/ipfs/bafkreiai2equjipljd6kb2xo5rm2fkch7ipdkkjvulic2tqys7piflkdgu',
    category: 'Basketball',
    date: '2024-03-13',
    author: 'Mike Davis',
    readTime: '7 min read',
  },
];

export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id.toString(),
  }));
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = articles.find((a) => a.id.toString() === params.id);

  if (!article) {
    return (
      <div className="min-h-screen bg-light dark:bg-dark pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-dark dark:text-light">
            Article Not Found
          </h1>
          <Link
            href="/articles"
            className="inline-flex items-center text-primary dark:text-primary-light hover:text-secondary dark:hover:text-secondary-light"
          >
            <FaArrowLeft className="mr-2" /> Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light dark:bg-dark pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/articles"
          className="inline-flex items-center text-primary dark:text-primary-light hover:text-secondary dark:hover:text-secondary-light mb-8"
        >
          <FaArrowLeft className="mr-2" /> Back to Articles
        </Link>

        <article className="bg-white dark:bg-dark-light rounded-lg overflow-hidden shadow-lg">
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
            <h1 className="text-4xl font-bold mt-2 mb-6 text-dark dark:text-light">
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
            <div
              className="prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </article>
      </div>
    </div>
  );
} 