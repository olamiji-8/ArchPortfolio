'use client'; 
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <motion.header 
      className="w-full z-50 backdrop-blur-lg shadow-lg shadow-anime-purple/20 rounded-xl"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      drag
      dragConstraints={{ top: 0, bottom: 200, left: 0, right: 0 }}
      dragElastic={{ top: 0.2, bottom: 0.2 }}
      whileDrag={{ scale: 1.02, boxShadow: '0 20px 60px rgba(147, 51, 234, 0.4)' }}
      style={{
        backgroundColor: '#180C21',
        border: '4px solid #180C21',
        boxShadow: '0 10px 40px rgba(147, 51, 234, 0.25), 0 4px 20px rgba(147, 51, 234, 0.2)',
        cursor: 'grab'
      }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-anime-purple to-anime-pink bg-clip-text text-transparent">
            NekoArch
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-anime-cyan transition-all duration-300 px-3 py-2 rounded-lg hover:bg-anime-purple/20 hover:shadow-md hover:shadow-anime-cyan/20 border border-transparent hover:border-anime-cyan/30"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-lg border border-anime-purple/30 hover:bg-anime-purple/20 hover:shadow-md hover:shadow-anime-purple/20 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav
            className="md:hidden mt-4 pb-4 border-t border-anime-purple/20 pt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 px-3 text-white hover:text-anime-cyan transition-all duration-300 rounded-lg hover:bg-anime-purple/20 hover:shadow-md hover:shadow-anime-cyan/20 border border-transparent hover:border-anime-cyan/30 mb-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}