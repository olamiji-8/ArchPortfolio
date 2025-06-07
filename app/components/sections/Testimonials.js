'use client'; 
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
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
      gradient: 'from-pink-400 to-purple-400'
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
      gradient: 'from-cyan-400 to-blue-600'
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
      gradient: 'from-green-400 to-cyan-400'
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
      gradient: 'from-blue-400 to-teal-400'
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
      gradient: 'from-pink-400 to-purple-600'
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
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-anime-purple/10 to-anime-pink/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-gradient-to-r from-anime-cyan/10 to-anime-purple/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-anime-purple to-anime-cyan bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the amazing clients who've 
            transformed their spaces with our anime-inspired designs.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="relative p-8 md:p-12 overflow-hidden">
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[currentIndex].gradient} opacity-5`} />
            
            {/* Quote icon */}
            <div className="absolute top-6 left-6 text-anime-purple/30">
              <Quote className="w-12 h-12" />
            </div>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <motion.blockquote
                key={testimonials[currentIndex].id}
                className="text-xl md:text-2xl text-gray-100 text-center mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                "{testimonials[currentIndex].quote}"
              </motion.blockquote>

              {/* Author */}
              <motion.div
                key={`author-${testimonials[currentIndex].id}`}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-4xl mb-4">{testimonials[currentIndex].avatar}</div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-anime-cyan font-medium mb-1">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-gray-400 text-sm mb-2">
                  {testimonials[currentIndex].company}
                </p>
                <p className="text-anime-purple text-sm">
                  Project: {testimonials[currentIndex].project}
                </p>
              </motion.div>
            </div>
          </Card>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-6">
          <motion.button
            className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all duration-300"
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          {/* Dots indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-anime-cyan scale-125'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          <motion.button
            className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all duration-300"
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Testimonial Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <Card className="p-6 h-full group cursor-pointer" onClick={() => setCurrentIndex(index)}>
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-anime-cyan transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 text-sm line-clamp-3">
                  "{testimonial.quote}"
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}