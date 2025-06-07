'use client'; 
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { ExternalLink, Eye, Calendar, MapPin } from 'lucide-react'
import Card from '../ui/Card'

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'interior', label: 'Interior Design' }
  ]

  const projects = [
    {
      id: 1,
      title: 'Cyberpunk Penthouse',
      category: 'residential',
      type: 'Residential Design',
      year: '2024',
      location: 'Tokyo, Japan',
      image: '/api/placeholder/600/400',
      description: 'A futuristic penthouse inspired by Ghost in the Shell, featuring neon lighting and high-tech aesthetics.',
      tags: ['Cyberpunk', 'Modern', 'Smart Home'],
      gradient: 'from-anime-purple to-anime-cyan'
    },
    {
      id: 2,
      title: 'Studio Ghibli Café',
      category: 'commercial',
      type: 'Commercial Design',
      year: '2024',
      location: 'Kyoto, Japan',
      image: '/api/placeholder/600/400',
      description: 'A whimsical café design inspired by Studio Ghibli films, creating a magical dining experience.',
      tags: ['Whimsical', 'Natural', 'Cozy'],
      gradient: 'from-green-400 to-anime-pink'
    },
    {
      id: 3,
      title: 'Demon Slayer Dojo',
      category: 'interior',
      type: 'Interior Design',
      year: '2023',
      location: 'Osaka, Japan',
      image: '/api/placeholder/600/400',
      description: 'Traditional Japanese dojo with modern anime-inspired elements for martial arts training.',
      tags: ['Traditional', 'Modern', 'Training'],
      gradient: 'from-red-500 to-orange-500'
    },
    {
      id: 4,
      title: 'Sailor Moon Boutique',
      category: 'commercial',
      type: 'Retail Design',
      year: '2023',
      location: 'Harajuku, Tokyo',
      image: '/api/placeholder/600/400',
      description: 'Magical girl themed boutique with celestial design elements and pastel color schemes.',
      tags: ['Magical', 'Pastel', 'Retail'],
      gradient: 'from-anime-pink to-purple-400'
    },
    {
      id: 5,
      title: 'Attack on Titan Office',
      category: 'commercial',
      type: 'Office Design',
      year: '2023',
      location: 'Shibuya, Tokyo',
      image: '/api/placeholder/600/400',
      description: 'Bold industrial office design inspired by the walls and architecture of Attack on Titan.',
      tags: ['Industrial', 'Bold', 'Corporate'],
      gradient: 'from-gray-600 to-anime-purple'
    },
    {
      id: 6,
      title: 'Spirited Away Spa',
      category: 'commercial',
      type: 'Wellness Center',
      year: '2022',
      location: 'Nara, Japan',
      image: '/api/placeholder/600/400',
      description: 'Serene spa design inspired by the bathhouse in Spirited Away, promoting relaxation and healing.',
      tags: ['Serene', 'Wellness', 'Traditional'],
      gradient: 'from-blue-400 to-anime-cyan'
    }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-anime-purple to-anime-cyan bg-clip-text text-transparent">
            Our Magical Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our collection of anime-inspired architectural masterpieces, 
            where imagination meets reality in perfect harmony.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-anime-purple to-anime-cyan text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              layout
              className="group"
            >
              <Card className="overflow-hidden h-full">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
                  <div className="absolute inset-0 bg-black/20" />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                    <div className="flex gap-4">
                      <motion.button
                        className="p-3 bg-anime-purple rounded-full text-white hover:bg-anime-purple/80 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Eye className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        className="p-3 bg-anime-cyan rounded-full text-white hover:bg-anime-cyan/80 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                  
                  {/* Project Type Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm">
                    {project.type}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-anime-cyan transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Project Meta */}
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-anime-purple/20 text-anime-cyan text-xs rounded-full border border-anime-purple/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-anime-purple to-anime-cyan text-white font-semibold rounded-full hover:shadow-lg hover:shadow-anime-purple/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}