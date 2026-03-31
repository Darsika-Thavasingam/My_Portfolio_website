import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-primary/80 backdrop-blur-md border-b border-gray-800 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 text-2xl tracking-wide hover:opacity-80 transition-opacity" href="/">
          My Portfolio
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-300 font-medium hover:text-sky-400 transition-colors duration-300 text-sm uppercase tracking-wider"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className='block md:hidden focus:outline-none'
        >
          {toggleMenu ? (
            <XMarkIcon className='text-sky-400 h-8 w-8 transition-transform transform rotate-90' />
          ) : (
            <Bars3Icon className='text-white h-8 w-8 hover:text-sky-400 transition-colors' />
          )}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {toggleMenu && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-gray-900 border-b border-gray-800 shadow-2xl"
          >
            <ul className="flex flex-col text-center divide-y divide-gray-800">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setToggleMenu(false)}
                    className="block py-4 text-gray-300 hover:text-sky-400 hover:bg-gray-800 transition-all text-lg font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
