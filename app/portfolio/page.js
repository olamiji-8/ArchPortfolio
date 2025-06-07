'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Layout from '../components/layout/Layout';
import Portfolio from '../components/sections/Portfolio';
import { ExternalLink, Eye, Calendar, MapPin, Users, Award, Play } from 'lucide-react';
import Card from '../components/ui/Card';

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const featuredProjects = [
    {
      id: 1,
      title: 'Neo-Tokyo Penthouse',
      category: 'residential',
      type: 'Luxury Residential',
      year: '2024',
      location: 'Shibuya, Tokyo',
      client: 'Private Client',
      area: '2,500 sq ft',
      images: [
        '/api/placeholder/800/600',
        '/api/placeholder/800/600',
        '/api/placeholder/800/600',
        '/api/placeholder/800/600'
      ],
      description: 'A cutting-edge penthouse that brings the cyberpunk aesthetic of Ghost in the Shell to life. Features include holographic displays, neon accent lighting, and smart home integration that responds to voice commands in both Japanese and English.',
      challenges: 'Integrating futuristic technology while maintaining livability and comfort for daily use.',
      solution: 'Created modular tech zones that can be activated or hidden based on the resident\'s needs.',
      tags: ['Cyberpunk', 'Smart Home', 'Luxury', 'Futuristic'],
      gradient: 'from-anime-purple to-anime-cyan',
      awards: ['Tokyo Design Award 2024', 'Future Living Award']
    },
    {
      id: 2,
      title: 'Ghibli-Inspired Community Center',
      category: 'commercial',
      type: 'Community Building',
      year: '2024',
      location: 'Kyoto, Japan',
      client: 'Kyoto City Council',
      area: '15,000 sq ft',
      images: [
        '/api/placeholder/800/600',
        '/api/placeholder/800/600',
        '/api/placeholder/800/600',
        '/api/placeholder/800/600'
      ],
      description: 'A magical community center inspired by Studio Ghibli films, featuring organic architecture, natural materials, and spaces that feel like they\'re straight out of My Neighbor Totoro and Spirited Away.',
      challenges: 'Creating a whimsical atmosphere while meeting strict building codes and safety regulations.',
      solution: 'Used curved timber construction and natural ventilation systems that double as artistic elements.',
      tags: ['Ghibli', 'Community', 'Natural', 'Family-Friendly'],
      gradient: 'from-green-400 to-anime-pink',
      awards: ['Sustainable Design Award 2024']
    },
    {
      id: 3,
      title: 'Anime Production Studio',
      category: 'commercial',
      type: 'Creative Workspace',
      year: '2023',
      location: 'Osaka, Japan',
      client: 'Sunrise Studios',
      area: '25,000 sq ft',
      images: [
        '/api/placeholder/800/600',
        '/api/placeholder/800/600',
        '/api/placeholder/800/600',
        '/api/placeholder/800/600'
      ],
      description: 'A state-of-the-art animation studio designed to inspire creativity, featuring flexible workspaces, recording studios, and exhibition areas that showcase the anime creation process.',
      challenges: 'Balancing creative inspiration with practical needs for animation production.',
      solution: 'Created themed zones for different production stages, from concept art to final animation.',
      tags: ['Creative', 'Flexible', 'Production', 'Modern'],
      gradient: 'from-anime-cyan to-purple-600',
      awards: ['Workspace Innovation Award 2023']
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed', icon: Award },
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '25+', label: 'Awards Won', icon: Award },
    { number: '8+', label: 'Years Experience', icon: Calendar }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-anime-purple/10 via-transparent to-anime-cyan/10" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-anime-purple via-anime-pink to-anime-cyan bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Explore our collection of anime-inspired architectural masterpieces
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-anime-cyan mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gradient-to-r from-anime-purple/5 to-anime-cyan/5">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-anime-cyan to-anime-purple bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Detailed showcases of our most ambitious and innovative anime-inspired architectural projects.
            </p>
          </motion.div>

          <div className="space-y-32">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Project Images */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Card className="overflow-hidden group">
                    <div className="relative aspect-video">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                      <div className="absolute inset-0 bg-black/40" />
                      
                      {/* Main Image */}
                      <div className="w-full h-full bg-gray-800" />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                        <div className="flex gap-4">
                          <motion.button
                            className="p-4 bg-anime-purple rounded-full text-white hover:bg-anime-purple/80 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Eye className="w-6 h-6" />
                          </motion.button>
                          <motion.button
                            className="p-4 bg-anime-cyan rounded-full text-white hover:bg-anime-cyan/80 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Play className="w-6 h-6" />
                          </motion.button>
                        </div>
                      </div>
                      
                      {/* Project Type Badge */}
                      <div className="absolute top-6 left-6 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white">
                        {project.type}
                      </div>
                    </div>
                  </Card>

                  {/* Thumbnail Grid */}
                  <div className="grid grid-cols-4 gap-2 mt-4">
                    {project.images.slice(1, 4).map((image, idx) => (
                      <div key={idx} className="aspect-square bg-gray-700 rounded-lg" />
                    ))}
                    <div className="aspect-square bg-gradient-to-br from-anime-purple/20 to-anime-cyan/20 rounded-lg flex items-center justify-center text-white text-sm">
                      +{project.images.length - 4}
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="mb-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-xl text-gray-300 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Meta */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{project.year}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>{project.client}</span>
                      </div>
                      <div className="text-gray-400">
                        Area: {project.area}
                      </div>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="mb-6">
                    <h4 className="text-anime-cyan font-semibold mb-2">Challenge:</h4>
                    <p className="text-gray-300 mb-4">{project.challenges}</p>
                    <h4 className="text-anime-pink font-semibold mb-2">Solution:</h4>
                    <p className="text-gray-300">{project.solution}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-anime-purple/20 text-anime-cyan text-sm rounded-full border border-anime-purple/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Awards */}
                  {project.awards && (
                    <div className="mb-6">
                      <h4 className="text-anime-purple font-semibold mb-2">Awards:</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {project.awards.map((award, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-anime-purple" />
                            {award}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA Button */}
                  <motion.button
                    className="px-6 py-3 bg-gradient-to-r from-anime-purple to-anime-cyan text-white font-semibold rounded-full hover:shadow-lg hover:shadow-anime-purple/50 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Full Project
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Portfolio Grid */}
      <Portfolio />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-anime-purple/10 to-anime-cyan/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-anime-pink to-anime-cyan bg-clip-text text-transparent">
              Ready to Create Your Anime Dream Space?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's bring your favorite anime worlds to life in your next architectural project. 
              Contact us to start your magical journey.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-anime-purple to-anime-cyan text-white font-semibold rounded-full hover:shadow-lg hover:shadow-anime-purple/50 transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}