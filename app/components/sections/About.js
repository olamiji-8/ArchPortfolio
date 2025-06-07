'use client'; 
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Award, Users, Calendar } from 'lucide-react'
import Card from '../ui/Card'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const stats = [
    {
      icon: Star,
      number: '150+',
      label: 'Projects Completed',
      color: 'text-anime-purple'
    },
    {
      icon: Award,
      number: '25+',
      label: 'Awards Won',
      color: 'text-anime-pink'
    },
    {
      icon: Users,
      number: '500+',
      label: 'Happy Clients',
      color: 'text-anime-cyan'
    },
    {
      icon: Calendar,
      number: '8+',
      label: 'Years Experience',
      color: 'text-purple-400'
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-anime-purple/20 rotate-12 rounded-2xl" />
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-anime-cyan/10 to-anime-pink/10 rounded-full blur-xl" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-anime-purple to-anime-cyan bg-clip-text text-transparent">
              About NekoArch Studio
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Born from a passion for anime aesthetics and architectural innovation, 
                NekoArch Studio represents the fusion of Eastern pop culture with 
                cutting-edge design principles.
              </p>
              
              <p>
                Our team of visionary architects and designers specializes in creating 
                spaces that transport you into the vibrant, imaginative worlds of anime. 
                From neon-lit cyberpunk offices to serene Studio Ghibli-inspired homes, 
                we bring fictional environments into reality.
              </p>
              
              <p>
                Every project is a journey of discovery, where we collaborate closely 
                with our clients to understand their favorite anime worlds and translate 
                those emotions into livable, functional spaces.
              </p>
            </div>

            {/* Philosophy Section */}
            <motion.div
              className="mt-8 p-6 bg-gradient-to-r from-anime-purple/10 to-anime-cyan/10 rounded-2xl border border-anime-purple/20"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-anime-cyan mb-3">Our Philosophy</h3>
              <p className="text-gray-300">
                "Architecture should evoke emotion, tell stories, and create memories. 
                By blending the limitless imagination of anime with practical design, 
                we create spaces that are both fantastical and functional."
              </p>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Card className="text-center p-8 group">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color === 'text-anime-purple' ? 'from-anime-purple/20 to-anime-purple/30' : stat.color === 'text-anime-pink' ? 'from-anime-pink/20 to-anime-pink/30' : stat.color === 'text-anime-cyan' ? 'from-anime-cyan/20 to-anime-cyan/30' : 'from-purple-400/20 to-purple-400/30'} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  
                  <motion.div
                    className={`text-3xl font-bold ${stat.color} mb-2`}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1, type: "spring" }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  <p className="text-gray-300 font-medium">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}