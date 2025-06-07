// components/ui/Card.js
import { motion } from 'framer-motion'

export default function Card({ children, className = '', ...props }) {
  return (
    <motion.div
      className={`relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-anime-cyan/50 transition-all duration-300 ${className}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-anime-purple/10 via-transparent to-anime-cyan/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}