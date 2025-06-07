'use client'; 
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Instagram, 
  Facebook, 
  Youtube,
  Heart,
  ArrowUp
} from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    services: [
      { name: 'Residential Design', href: '/services#residential' },
      { name: 'Commercial Architecture', href: '/services#commercial' },
      { name: 'Interior Design', href: '/services#interior' },
      { name: 'Renovation', href: '/services#renovation' },
      { name: 'Consultation', href: '/services#consultation' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Careers', href: '/careers' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Style Guide', href: '/resources/style-guide' },
      { name: 'Project Gallery', href: '/gallery' },
      { name: 'FAQs', href: '/faq' },
      { name: 'Contact', href: '/contact' }
    ]
  }

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Youtube', icon: Youtube, href: '#', color: 'hover:text-red-500' }
  ]

  return (
    <footer className="relative bg-gradient-to-t from-black/50 to-transparent border-t border-white/10">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-anime-purple/5 via-transparent to-anime-cyan/5" />
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-anime-purple to-anime-pink bg-clip-text text-transparent inline-block mb-4">
                NekoArch
              </Link>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transforming ordinary spaces into extraordinary anime-inspired environments. 
                Where imagination meets architecture, and dreams become reality.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-anime-cyan" />
                  <span>hello@nekoarch.studio</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-anime-pink" />
                  <span>+81 3-1234-5678</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-anime-purple" />
                  <span>Shibuya, Tokyo, Japan</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className={`p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-gray-400 ${social.color} transition-all duration-300`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-anime-cyan transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-anime-cyan transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-anime-cyan transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Our Latest Projects
            </h3>
            <p className="text-gray-300 mb-6">
              Get exclusive insights into our anime-inspired architectural creations and design tips.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-anime-cyan focus:ring-1 focus:ring-anime-cyan transition-all duration-300"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-anime-purple to-anime-cyan text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-anime-purple/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="flex items-center space-x-2 text-gray-300 mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <span>© 2025 NekoArch Studio. Made with</span>
            <Heart className="w-4 h-4 text-anime-pink fill-current" />
            <span>and lots of anime inspiration</span>
          </motion.div>

          <motion.div
            className="flex items-center space-x-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/privacy" className="text-gray-300 hover:text-anime-cyan transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-anime-cyan transition-colors duration-300">
              Terms of Service
            </Link>
            
            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="p-2 bg-anime-purple/20 hover:bg-anime-purple/30 border border-anime-purple/30 rounded-full text-anime-purple hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-r from-anime-purple/10 to-transparent rounded-full blur-2xl" />
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-r from-anime-cyan/10 to-transparent rounded-full blur-2xl" />
    </footer>
  )
}