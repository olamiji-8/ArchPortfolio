'use client'; 
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Play, Pause } from 'lucide-react'
import { useState, useRef } from 'react'
import Button from '../ui/Button'

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef(null)

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <>
      {/* Video Section */}
      <section className="relative h-[75vh] md:h-[85vh] overflow-hidden">
        <motion.div
          className="relative w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* YouTube Video Background - Embedded as iframe with full coverage */}
          <iframe
            ref={videoRef}
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/LFMeFT6e5bI?autoplay=1&mute=1&loop=1&playlist=LFMeFT6e5bI&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"
            title="Architecture Showcase"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ 
              pointerEvents: 'none',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: 'scale(1.5)', // Scale up to fill and crop
              transformOrigin: 'center center'
            }}
          />

          {/* Original Video Background (commented out) */}
          {/* 
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/architecture-showcase.mp4" type="video/mp4" />
            <div className="absolute inset-0 bg-gradient-to-br from-anime-purple/40 via-anime-pink/30 to-anime-cyan/40" />
          </video>
          */}

          {/* Video Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          
          {/* Video Controls - Note: These won't work with YouTube embed due to API restrictions */}
          {/* You would need to implement YouTube Player API for full control */}
          <motion.button
            className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 opacity-50 cursor-not-allowed"
            onClick={() => {
              // YouTube embed controls are limited without YouTube Player API
              console.log('YouTube embed controls require YouTube Player API for full functionality')
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="Video controls not available with basic YouTube embed"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </motion.button>

          {/* Video Title Overlay */}
          <motion.div
            className="absolute bottom-8 left-8 text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-anime-purple to-anime-cyan bg-clip-text text-transparent">
              Architectural Excellence
            </h3>
            <p className="text-gray-200 text-sm md:text-base max-w-md">
              Experience the fusion of modern design and anime-inspired aesthetics
            </p>
          </motion.div>

          {/* Animated Border */}
          <motion.div
            className="absolute inset-0 border-4 border-transparent"
            style={{
              background: 'linear-gradient(45deg, #9333ea, #ec4899, #06b6d4) border-box',
              WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'exclude'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </motion.div>
      </section>

      {/* Main Hero Content */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated buildings silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-dark-space/80 to-transparent">
          <motion.div
            className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-anime-purple/20 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Main heading with anime styling */}
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-anime-purple via-anime-pink to-anime-cyan bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Crafting Magical
              <br />
              <span className="relative">
                Architectural Dreams
                <motion.div
                  className="absolute -top-4 -right-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="text-anime-cyan w-8 h-8" />
                </motion.div>
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Where anime aesthetics meet architectural innovation. 
              We transform ordinary spaces into extraordinary experiences.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button variant="primary" size="large" className="group">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="large">
                View Our Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-1/4 left-10 w-4 h-4 bg-anime-pink rounded-full opacity-60"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/3 right-10 w-6 h-6 border-2 border-anime-cyan rounded-full opacity-40"
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-anime-purple rounded-full opacity-50"
            animate={{ x: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </section>
    </>
  )
}