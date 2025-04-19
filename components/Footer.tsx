'use client';

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaFacebook, href: 'https://facebook.com' },
    { icon: FaTwitter, href: 'https://twitter.com' },
    { icon: FaInstagram, href: 'https://instagram.com' },
    { icon: FaLinkedin, href: 'https://linkedin.com' },
  ];

  const footerLinks = [
    {
      title: 'Quick Links',
      links: ['Home', 'About', 'Contact', 'Privacy Policy', 'Terms of Service'],
    },
    {
      title: 'Categories',
      links: ['Technology', 'Lifestyle', 'Business', 'Health', 'Education'],
    },
    {
      title: 'Resources',
      links: ['Blog', 'Newsletter', 'Events', 'Support', 'FAQ'],
    },
  ];

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold text-primary mb-4">ModernBlog</h2>
            <p className="text-gray-400 mb-4">
              Your source for the latest news, articles, and insights across various topics.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and articles.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="input bg-gray-800 text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} ModernBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 