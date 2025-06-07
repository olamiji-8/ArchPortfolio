// components/ui/Button.js
import { motion } from 'framer-motion'

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  className = '', 
  onClick,
  ...props 
}) {
  const baseClasses = 'relative font-semibold rounded-full transition-all duration-300 overflow-hidden group cursor-pointer'
  
  const variants = {
    primary: 'bg-gradient-to-r from-anime-purple to-anime-pink text-white hover:shadow-lg hover:shadow-anime-purple/50',
    outline: 'border-2 border-anime-cyan text-anime-cyan hover:bg-anime-cyan hover:text-dark-space',
    ghost: 'text-anime-cyan hover:bg-anime-cyan/10'
  }
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  }

  return (
    <motion.button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      {...props}
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </motion.button>
  )
}