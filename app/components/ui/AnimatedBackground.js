'use client'; 
import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  const particles = Array.from({ length: 50 }, (_, i) => i)

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-space via-purple-900/20 to-pink-900/20" />
      
      {/* Animated particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-1 h-1 bg-anime-cyan rounded-full opacity-60"
          initial={{
            x: Math.random() * window?.innerWidth || 1920,
            y: Math.random() * window?.innerHeight || 1080,
          }}
          animate={{
            x: Math.random() * (window?.innerWidth || 1920),
            y: Math.random() * (window?.innerHeight || 1080),
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 border border-anime-purple/30 rotate-45"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute top-1/3 right-1/4 w-24 h-24 border border-anime-pink/30 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-gradient-to-r from-anime-cyan/20 to-anime-purple/20 rounded-full blur-xl"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}