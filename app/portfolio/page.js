'use client'; 

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye, Calendar, MapPin, Users, Award, Play, ArrowRight, Maximize2 } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';


const ArchitecturalPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Neo-Tokyo Penthouse',
      category: 'Luxury Residential',
      year: '2024',
      location: 'Shibuya, Tokyo',
      client: 'Private Client',
      area: '2,500 sq ft',
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
        'https://www.thedesignersite.co.uk/wp-content/uploads/2024/09/architectural-design.png',
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop'
      ],
      description: 'A cutting-edge penthouse that brings the cyberpunk aesthetic to life. Features holographic displays, neon accent lighting, and smart home integration responding to voice commands in both Japanese and English.',
      challenge: 'Integrating futuristic technology while maintaining livability and comfort for daily use.',
      solution: 'Created modular tech zones that can be activated or hidden based on the resident\'s needs, ensuring the space remains functional and comfortable.',
      tags: ['Cyberpunk', 'Smart Home', 'Luxury', 'Futuristic'],
      gradient: 'from-purple-600 to-cyan-400',
      awards: ['Tokyo Design Award 2024', 'Future Living Award'],
      featured: true
    },
    {
      id: 2,
      title: 'Minimalist Art Gallery',
      category: 'Cultural Space',
      year: '2024',
      location: 'Kyoto, Japan',
      client: 'Kyoto Art Foundation',
      area: '8,000 sq ft',
      images: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1567225477277-c2c098d9a6f4?w=800&h=600&fit=crop'
      ],
      description: 'A serene gallery space that creates perfect harmony between art and architecture. Clean lines, natural lighting, and flexible exhibition spaces showcase contemporary works.',
      challenge: 'Creating versatile spaces that complement diverse art forms while maintaining architectural integrity.',
      solution: 'Designed modular wall systems and dynamic lighting that adapts to different exhibitions and artistic requirements.',
      tags: ['Minimalist', 'Cultural', 'Flexible', 'Natural Light'],
      gradient: 'from-gray-600 to-blue-400',
      awards: ['Architecture Excellence Award 2024']
    },
    {
      id: 3,
      title: 'Sustainable Office Complex',
      category: 'Commercial',
      year: '2023',
      location: 'Osaka, Japan',
      client: 'Green Tech Solutions',
      area: '25,000 sq ft',
      images: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&h=600&fit=crop'
      ],
      description: 'An innovative office complex featuring green walls, solar panels, and natural ventilation systems. The design promotes productivity while minimizing environmental impact.',
      challenge: 'Achieving carbon neutrality while creating inspiring workspaces that enhance employee wellbeing.',
      solution: 'Integrated biophilic design principles with advanced sustainable technologies, creating a harmonious work environment.',
      tags: ['Sustainable', 'Biophilic', 'Innovation', 'Wellness'],
      gradient: 'from-green-500 to-emerald-600',
      awards: ['Green Building Award 2023', 'Sustainability Excellence']
    },
    {
      id: 4,
      title: 'Riverside Villa',
      category: 'Residential',
      year: '2023',
      location: 'Hakone, Japan',
      client: 'Private Family',
      area: '4,200 sq ft',
      images: [
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1615874694520-474822394e73?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1615874694502-e8d2c07e0c5b?w=800&h=600&fit=crop'
      ],
      description: 'A tranquil riverside retreat that seamlessly blends indoor and outdoor living. Floor-to-ceiling windows frame stunning mountain views while natural materials create warmth.',
      challenge: 'Designing a home that feels connected to nature while providing privacy and comfort for family life.',
      solution: 'Created flowing spaces with strategic window placement and outdoor courtyards that bring nature inside.',
      tags: ['Nature', 'Family', 'Views', 'Tranquil'],
      gradient: 'from-blue-400 to-teal-500',
      awards: ['Residential Design Award 2023']
    },
    {
      id: 5,
      title: 'Urban Cultural Center',
      category: 'Public Architecture',
      year: '2022',
      location: 'Tokyo, Japan',
      client: 'Tokyo Metropolitan Government',
      area: '15,000 sq ft',
      images: [
        'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=600&fit=crop'
      ],
      description: 'A dynamic cultural hub that serves multiple communities. The building features adaptable spaces for performances, exhibitions, and community gatherings.',
      challenge: 'Creating a building that serves diverse cultural needs while maintaining acoustic and functional requirements.',
      solution: 'Designed flexible spaces with moveable walls and advanced acoustic systems that adapt to different cultural activities.',
      tags: ['Community', 'Cultural', 'Adaptive', 'Public'],
      gradient: 'from-orange-500 to-red-500',
      awards: ['Public Architecture Award 2022', 'Community Impact Award']
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed', icon: Award },
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '25+', label: 'Awards Won', icon: Award },
    { number: '8+', label: 'Years Experience', icon: Calendar }
  ];

  const openLightbox = (project, imageIndex = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(imageIndex);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Header/>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-cyan-900/20" />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop)'
          }}
        />
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Architectural Portfolio
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Discover our collection of innovative architectural masterpieces that blend creativity, functionality, and aesthetic excellence
          </motion.p>
          
          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each project tells a unique story of innovation, creativity, and architectural excellence
            </p>
          </motion.div>

          {/* Dynamic Project Layout */}
          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-screen ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Project Images */}
                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:col-start-6' : ''}`}>
                  <div className="relative group">
                    {/* Main Image */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30 z-10`} />
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="flex gap-4">
                          <motion.button
                            onClick={() => openLightbox(project, 0)}
                            className="p-4 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-colors backdrop-blur-sm"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Eye className="w-6 h-6" />
                          </motion.button>
                          <motion.button
                            className="p-4 bg-cyan-600 rounded-full text-white hover:bg-cyan-700 transition-colors backdrop-blur-sm"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Maximize2 className="w-6 h-6" />
                          </motion.button>
                        </div>
                      </div>
                      
                      {/* Project Category Badge */}
                      <div className="absolute top-6 left-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm z-30">
                        {project.category}
                      </div>
                    </div>

                    {/* Thumbnail Grid */}
                    <div className="grid grid-cols-4 gap-3 mt-4">
                      {project.images.slice(0, 3).map((image, idx) => (
                        <motion.div
                          key={idx}
                          className="aspect-square rounded-lg overflow-hidden cursor-pointer group/thumb"
                          onClick={() => openLightbox(project, idx)}
                          whileHover={{ scale: 1.05 }}
                        >
                          <img
                            src={image}
                            alt={`${project.title} ${idx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover/thumb:scale-110"
                          />
                        </motion.div>
                      ))}
                      <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-lg flex items-center justify-center text-white text-sm border border-purple-600/30 cursor-pointer hover:bg-gradient-to-br hover:from-purple-600/30 hover:to-cyan-600/30 transition-all">
                        <span>+{project.images.length - 3}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`lg:col-span-5 space-y-8 ${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}>
                  <div>
                    <motion.h3
                      className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    <motion.p
                      className="text-lg text-gray-300 leading-relaxed mb-8"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {project.description}
                    </motion.p>
                  </div>

                  {/* Project Meta */}
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-400">
                        <Calendar className="w-5 h-5 text-purple-400" />
                        <span>{project.year}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-400">
                        <MapPin className="w-5 h-5 text-cyan-400" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-400">
                        <Users className="w-5 h-5 text-pink-400" />
                        <span>{project.client}</span>
                      </div>
                      <div className="text-gray-400">
                        <span className="text-green-400">Area:</span> {project.area}
                      </div>
                    </div>
                  </motion.div>

                  {/* Challenge & Solution */}
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-6 bg-gradient-to-r from-purple-900/20 to-transparent rounded-xl border-l-4 border-purple-400">
                      <h4 className="text-purple-400 font-semibold mb-3 text-lg">Challenge</h4>
                      <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-r from-cyan-900/20 to-transparent rounded-xl border-l-4 border-cyan-400">
                      <h4 className="text-cyan-400 font-semibold mb-3 text-lg">Solution</h4>
                      <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                    </div>
                  </motion.div>

                  {/* Tags */}
                  <motion.div
                    className="flex flex-wrap gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    viewport={{ once: true }}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-purple-600/20 text-purple-300 text-sm rounded-full border border-purple-600/30 hover:bg-purple-600/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>

                  {/* Awards & CTA */}
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    viewport={{ once: true }}
                  >
                    {project.awards && (
                      <div>
                        <h4 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                          <Award className="w-5 h-5" />
                          Awards & Recognition
                        </h4>
                        <ul className="space-y-2">
                          {project.awards.map((award, idx) => (
                            <li key={idx} className="text-gray-300 text-sm flex items-center gap-2">
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full" />
                              {award}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <motion.button
                      className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-600/50 transition-all duration-300"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>View Full Project</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <motion.div
            className="max-w-6xl w-full max-h-full overflow-hidden rounded-2xl bg-gray-900"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <div className="relative">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={selectedProject.title}
                className="w-full h-[70vh] object-cover"
              />
              
              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                ←
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                →
              </button>
              
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
              
              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 rounded-full text-white text-sm">
                {currentImageIndex + 1} / {selectedProject.images.length}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
              <p className="text-gray-300">{selectedProject.description}</p>
            </div>
          </motion.div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Create Your Dream Space?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's collaborate to bring your architectural vision to life with innovative design and exceptional craftsmanship.
            </p>
            <motion.button
              className="px-12 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-600/50 transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default ArchitecturalPortfolio;