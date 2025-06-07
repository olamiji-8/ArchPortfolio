'use client'; 
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Award, Users, Calendar, Sparkles, Zap, Heart } from 'lucide-react'
import { useState, useEffect } from 'react'

// Enhanced Card component
const Card = ({ children, className = "", ...props }) => (
  <div 
    className={`bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 group ${className}`} 
    {...props}
  >
    {children}
  </div>
)

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const stats = [
    {
      icon: Star,
      number: '150+',
      label: 'Projects Completed',
      color: 'text-purple-400',
      bgGradient: 'from-purple-500/20 to-purple-600/30',
      hoverGradient: 'from-purple-500/30 to-purple-600/40'
    },
    {
      icon: Award,
      number: '25+',
      label: 'Awards Won',
      color: 'text-pink-400',
      bgGradient: 'from-pink-500/20 to-rose-500/30',
      hoverGradient: 'from-pink-500/30 to-rose-500/40'
    },
    {
      icon: Users,
      number: '500+',
      label: 'Happy Clients',
      color: 'text-cyan-400',
      bgGradient: 'from-cyan-500/20 to-blue-500/30',
      hoverGradient: 'from-cyan-500/30 to-blue-500/40'
    },
    {
      icon: Calendar,
      number: '8+',
      label: 'Years Experience',
      color: 'text-emerald-400',
      bgGradient: 'from-emerald-500/20 to-teal-500/30',
      hoverGradient: 'from-emerald-500/30 to-teal-500/40'
    }
  ]

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" ref={ref}>
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating geometric shapes */}
        <motion.div 
          className="absolute top-32 right-32 w-24 h-24 border-2 border-purple-500/30 rotate-45 rounded-xl"
          animate={{
            y: [-20, 20, -20],
            rotate: [45, 225, 45],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-40 left-40 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-full"
          animate={{
            x: [-30, 30, -30],
            y: [20, -20, 20],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Sparkle effects */}
        <motion.div
          className="absolute top-1/4 left-1/3"
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1
          }}
        >
          <Sparkles className="w-6 h-6 text-purple-400" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-1/4"
          animate={{
            scale: [0, 1, 0],
            rotate: [360, 180, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 2
          }}
        >
          <Zap className="w-5 h-5 text-cyan-400" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Enhanced Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glowing background effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-3xl blur-xl" />
            
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-3 mb-6"
              >
                <Heart className="w-6 h-6 text-pink-400 animate-pulse" />
                <span className="text-pink-400 font-semibold tracking-wider uppercase text-sm">About Us</span>
              </motion.div>

              <motion.h2 
                className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                  NekoArch
                </span>
                <br />
                <span className="text-white text-4xl md:text-5xl">Studio</span>
              </motion.h2>
              
              <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="relative"
                >
                  <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-transparent rounded-full" />
                  Born from a passion for <span className="text-purple-400 font-semibold">anime aesthetics</span> and architectural innovation, 
                  NekoArch Studio represents the fusion of Eastern pop culture with 
                  cutting-edge design principles.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="relative"
                >
                  <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-transparent rounded-full" />
                  Our team of <span className="text-cyan-400 font-semibold">visionary architects</span> and designers specializes in creating 
                  spaces that transport you into the vibrant, imaginative worlds of anime. 
                  From neon-lit cyberpunk offices to serene Studio Ghibli-inspired homes.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="relative"
                >
                  <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-pink-500 to-transparent rounded-full" />
                  Every project is a <span className="text-pink-400 font-semibold">journey of discovery</span>, where we collaborate closely 
                  with our clients to understand their favorite anime worlds and translate 
                  those emotions into livable, functional spaces.
                </motion.p>
              </div>

              {/* Enhanced Philosophy Section */}
              <motion.div
                className="mt-12 relative"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.1 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-3xl blur-sm opacity-75 group-hover:opacity-100 transition duration-1000" />
                <div className="relative p-8 bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center"
                      animate={isHovered ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Sparkles className="w-6 h-6 text-cyan-400" />
                    </motion.div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Our Philosophy
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    "Architecture should evoke emotion, tell stories, and create memories. 
                    By blending the limitless imagination of anime with practical design, 
                    we create spaces that are both <span className="text-purple-400 font-semibold">fantastical</span> and <span className="text-cyan-400 font-semibold">functional</span>."
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Stats Section */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + index * 0.15,
                  type: "spring",
                  bounce: 0.4
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="text-center p-8 h-full relative overflow-hidden">
                  {/* Background gradient effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                  
                  {/* Icon container */}
                  <motion.div 
                    className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${stat.bgGradient} mb-6 group-hover:scale-110 transition-all duration-500`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className={`w-10 h-10 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                    
                    {/* Sparkle effect on hover */}
                    <motion.div
                      className="absolute -top-1 -right-1"
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sparkles className="w-4 h-4 text-yellow-400" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Number with animated counting effect */}
                  <motion.div
                    className={`relative text-4xl font-bold ${stat.color} mb-3`}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.6 + index * 0.1, 
                      type: "spring",
                      bounce: 0.6
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.number}
                    <motion.div
                      className="absolute -inset-2 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>
                  
                  <p className="relative text-gray-300 font-medium text-sm tracking-wide uppercase">
                    {stat.label}
                  </p>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  )
}