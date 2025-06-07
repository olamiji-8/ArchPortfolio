'use client'; 
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import Card from '../ui/Card'

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Sakura Tanaka',
      role: 'Café Owner',
      company: 'Moonlight Café',
      avatar: '🌸',
      rating: 5,
      quote: "NekoArch transformed my café into a magical Studio Ghibli wonderland. My customers feel like they're dining in a fairy tale. The attention to detail is incredible!",
      project: 'Studio Ghibli Café',
      gradient: 'from-pink-400 via-rose-300 to-purple-400',
      glowColor: 'pink'
    },
    {
      id: 2,
      name: 'Hiroshi Yamamoto',
      role: 'Tech CEO',
      company: 'CyberTech Industries',
      avatar: '🤖',
      rating: 5,
      quote: "Our cyberpunk-themed office has become the talk of Tokyo. NekoArch perfectly captured the Ghost in the Shell aesthetic we wanted. Productivity and morale are through the roof!",
      project: 'Cyberpunk Office',
      gradient: 'from-cyan-400 via-blue-300 to-blue-600',
      glowColor: 'cyan'
    },
    {
      id: 3,
      name: 'Yuki Sato',
      role: 'Homeowner',
      company: 'Private Residence',
      avatar: '🏠',
      rating: 5,
      quote: "Living in my anime-inspired home feels like being inside my favorite series every day. The team understood my vision perfectly and brought it to life beyond my wildest dreams.",
      project: 'Anime-Inspired Residence',
      gradient: 'from-green-400 via-emerald-300 to-cyan-400',
      glowColor: 'green'
    },
    {
      id: 4,
      name: 'Akiko Nakamura',
      role: 'Spa Director',
      company: 'Zen Wellness Center',
      avatar: '🧘‍♀️',
      rating: 5,
      quote: "The Spirited Away-inspired spa design creates such a serene atmosphere. Our clients constantly compliment the magical ambiance. It's truly a healing space.",
      project: 'Spirited Away Spa',
      gradient: 'from-blue-400 via-indigo-300 to-teal-400',
      glowColor: 'blue'
    },
    {
      id: 5,
      name: 'Takeshi Kimura',
      role: 'Boutique Owner',
      company: 'Magical Girl Fashion',
      avatar: '✨',
      rating: 5,
      quote: "My Sailor Moon boutique attracts customers from around the world. The celestial design elements and pastel aesthetics perfectly match my brand vision.",
      project: 'Sailor Moon Boutique',
      gradient: 'from-pink-400 via-purple-300 to-purple-600',
      glowColor: 'purple'
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000)
    return () => clearInterval(interval)
  }, [])

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-transparent via-black/5 to-transparent" ref={ref}>
      {/* Enhanced Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div 
          className="absolute top-1/4 left-0 w-80 h-80 bg-gradient-to-r from-anime-purple/20 to-anime-pink/20 rounded-full blur-3xl"
          animate={floatingAnimation}
        />
        <motion.div 
          className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-r from-anime-cyan/20 to-anime-purple/20 rounded-full blur-3xl"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-anime-pink/10 to-anime-cyan/10 rounded-full blur-3xl"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
        />
      </div>

      {/* Floating sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-anime-purple/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-anime-purple/20 to-anime-cyan/20 rounded-full border border-anime-purple/30 mb-6"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-anime-cyan" />
            <span className="text-sm font-medium text-anime-cyan">Client Stories</span>
            <Sparkles className="w-4 h-4 text-anime-purple" />
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-anime-purple via-anime-pink to-anime-cyan bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            What Our
            <br />
            <span className="relative">
              Clients Say
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-anime-purple to-anime-cyan rounded-full"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Don't just take our word for it. Hear from the amazing clients who've 
            transformed their spaces with our anime-inspired designs and brought their 
            <span className="text-anime-cyan font-medium"> wildest dreams to life</span>.
          </motion.p>
        </motion.div>

        {/* Enhanced Main Testimonial */}
        <motion.div
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            {/* Glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${testimonials[currentIndex].gradient} opacity-20 blur-xl rounded-3xl scale-105`} />
            
            <Card className="relative p-10 md:p-16 overflow-hidden backdrop-blur-sm bg-black/40 border-2 border-white/10">
              {/* Enhanced background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[currentIndex].gradient} opacity-10`} />
              
              {/* Animated quote icon */}
              <motion.div 
                className="absolute top-8 left-8 text-anime-purple/40"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Quote className="w-16 h-16" />
              </motion.div>

              <div className="relative z-10">
                {/* Enhanced Stars */}
                <motion.div 
                  className="flex justify-center mb-8"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                    >
                      <Star className="w-8 h-8 text-yellow-400 fill-current mx-1 drop-shadow-lg" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Enhanced Quote */}
                <motion.blockquote
                  key={testimonials[currentIndex].id}
                  className="text-2xl md:text-3xl text-gray-100 text-center mb-10 leading-relaxed font-light"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-anime-cyan text-4xl font-serif">"</span>
                  {testimonials[currentIndex].quote}
                  <span className="text-anime-purple text-4xl font-serif">"</span>
                </motion.blockquote>

                {/* Enhanced Author */}
                <motion.div
                  key={`author-${testimonials[currentIndex].id}`}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.div 
                    className="text-6xl mb-6"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {testimonials[currentIndex].avatar}
                  </motion.div>
                  
                  <h4 className="text-2xl font-bold text-white mb-3">
                    {testimonials[currentIndex].name}
                  </h4>
                  
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-anime-cyan font-semibold text-lg">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-gray-400 mb-3">
                      {testimonials[currentIndex].company}
                    </p>
                    <div className="px-4 py-2 bg-gradient-to-r from-anime-purple/20 to-anime-cyan/20 rounded-full border border-anime-purple/30">
                      <p className="text-anime-purple text-sm font-medium">
                        Project: {testimonials[currentIndex].project}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Card>
          </div>
        </motion.div>

        {/* Enhanced Navigation */}
        <div className="flex justify-center items-center gap-8 mb-16">
          <motion.button
            className="p-4 bg-gradient-to-r from-white/10 to-white/5 hover:from-anime-purple/30 hover:to-anime-cyan/30 border border-white/20 rounded-full text-white transition-all duration-300 backdrop-blur-sm"
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)" }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          {/* Enhanced Dots indicator */}
          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`relative overflow-hidden rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? 'w-12 h-4 bg-gradient-to-r from-anime-cyan to-anime-purple'
                    : 'w-4 h-4 bg-white/20 hover:bg-white/40'
                }`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 bg-white/30 rounded-full"
                    animate={{ x: [-20, 20, -20] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          <motion.button
            className="p-4 bg-gradient-to-r from-white/10 to-white/5 hover:from-anime-purple/30 hover:to-anime-cyan/30 border border-white/20 rounded-full text-white transition-all duration-300 backdrop-blur-sm"
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(34, 211, 238, 0.5)" }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Enhanced Testimonial Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card 
                className={`p-8 h-full group cursor-pointer transition-all duration-300 backdrop-blur-sm bg-black/30 border border-white/10 hover:border-anime-cyan/50 hover:shadow-2xl ${
                  index === currentIndex ? 'ring-2 ring-anime-cyan/50 shadow-xl shadow-anime-cyan/20' : ''
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="text-3xl mr-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-anime-cyan transition-colors text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 text-sm line-clamp-4 mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="mt-auto">
                  <span className="text-xs text-anime-purple font-medium px-3 py-1 bg-anime-purple/10 rounded-full">
                    {testimonial.project}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}