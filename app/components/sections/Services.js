'use client'; 
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Home, Building, Wrench, Palette, Users, Settings } from 'lucide-react'
import Card from '../ui/Card'

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: Home,
      title: 'Residential Design',
      description: 'Creating dream homes with anime-inspired aesthetics and modern functionality.',
      color: 'from-anime-purple to-anime-pink'
    },
    {
      icon: Building,
      title: 'Commercial Architecture',
      description: 'Innovative commercial spaces that blend futuristic design with practical solutions.',
      color: 'from-anime-cyan to-anime-purple'
    },
    {
      icon: Palette,
      title: 'Interior Design',
      description: 'Immersive interior experiences inspired by your favorite anime worlds.',
      color: 'from-anime-pink to-anime-cyan'
    },
    {
      icon: Wrench,
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces into magical environments with our renovation expertise.',
      color: 'from-purple-500 to-anime-purple'
    },
    {
      icon: Users,
      title: 'Consulting Services',
      description: 'Expert guidance for your architectural projects from concept to completion.',
      color: 'from-anime-cyan to-blue-500'
    },
    {
      icon: Settings,
      title: 'Project Management',
      description: 'Seamless project execution with our dedicated management team.',
      color: 'from-anime-pink to-purple-500'
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-anime-purple to-anime-cyan bg-clip-text text-transparent">
            Our Magical Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer everything you need to bring your architectural visions to life, 
            infused with the wonder and creativity of anime aesthetics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full group">
                <div className="p-8">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-anime-cyan transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-anime-purple/5 to-anime-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}