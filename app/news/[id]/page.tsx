import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaCalendarAlt, FaUser, FaClock } from 'react-icons/fa';

const news = [
  {
    id: 1,
    title: 'India vs England: 5th Test Match Preview',
    excerpt: 'All you need to know about the crucial final test match between India and England.',
    summary: 'Preview of the final test match including team news, pitch conditions, and key players to watch.',
    content: `
      <p>The fifth and final test match between India and England promises to be a thrilling encounter as both teams look to end the series on a high note.</p>
      <p>India will be looking to maintain their home dominance, while England will be eager to salvage some pride after a challenging series.</p>
      <p>Key players to watch include Virat Kohli, who is in excellent form, and James Anderson, who has been England's standout performer with the ball.</p>
    `,
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
    content: `
      <p>The Champions League quarter-final draw has produced some exciting matchups that promise to deliver thrilling football action.</p>
      <p>Defending champions Manchester City will face a tough test against Bayern Munich, while Real Madrid takes on Chelsea in a repeat of last year's semi-final.</p>
      <p>Other notable ties include PSG vs Barcelona and Inter Milan vs Atletico Madrid, ensuring a mix of attacking flair and tactical battles.</p>
    `,
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
    content: `
      <p>The NBA playoff race is entering its final stages, with several teams still fighting for their postseason lives.</p>
      <p>In the Western Conference, the battle for the final play-in spots is particularly intense, with multiple teams separated by just a few games.</p>
      <p>The Eastern Conference is more settled at the top, but the race for seeding positions could have significant implications for the playoffs.</p>
    `,
    image: 'https://peach-major-moose-180.mypinata.cloud/ipfs/bafkreiai2equjipljd6kb2xo5rm2fkch7ipdkkjvulic2tqys7piflkdgu',
    category: 'Basketball',
    date: '2024-03-13',
    author: 'Mike Davis',
    readTime: '6 min read',
  },
];

export async function generateStaticParams() {
  return news.map((item) => ({
    id: item.id.toString(),
  }));
}

export default function NewsPage({ params }: { params: { id: string } }) {
  const newsItem = news.find((n) => n.id.toString() === params.id);

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-light dark:bg-dark pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-dark dark:text-light">
            News Not Found
          </h1>
          <Link
            href="/news"
            className="inline-flex items-center text-primary dark:text-primary-light hover:text-secondary dark:hover:text-secondary-light"
          >
            <FaArrowLeft className="mr-2" /> Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light dark:bg-dark pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/news"
          className="inline-flex items-center text-primary dark:text-primary-light hover:text-secondary dark:hover:text-secondary-light mb-8"
        >
          <FaArrowLeft className="mr-2" /> Back to News
        </Link>

        <article className="bg-white dark:bg-dark-light rounded-lg overflow-hidden shadow-lg">
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
            <h1 className="text-4xl font-bold mt-2 mb-6 text-dark dark:text-light">
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
            <div
              className="prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: newsItem.content }}
            />
          </div>
        </article>
      </div>
    </div>
  );
} 