'use client'; 

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, Calendar, MapPin, Users, Award, Play, ArrowRight, Maximize2, ChevronDown, Star } from 'lucide-react';

const ArchitecturalHomepage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeFilter, setActiveFilter] = useState('featured');

  const categories = [
    { id: 'featured', label: 'Featured Works', count: 6 },
    { id: 'residential', label: 'Residential', count: 12 },
    { id: 'commercial', label: 'Commercial', count: 8 },
    { id: 'cultural', label: 'Cultural', count: 5 }
  ];

  const featuredProjects = [
    {
      id: 1,
      title: 'Neo-Tokyo Penthouse',
      category: 'Luxury Residential',
      year: '2024',
      location: 'Shibuya, Tokyo',
      area: '2,500 sq ft',
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop'
      ],
      description: 'A cutting-edge penthouse that brings cyberpunk aesthetics to life with holographic displays and smart integration.',
      tags: ['Cyberpunk', 'Smart Home', 'Luxury'],
      gradient: 'from-purple-600 via-pink-500 to-cyan-400',
      featured: true,
      awards: ['Tokyo Design Award 2024']
    },
    {
      id: 2,
      title: 'Minimalist Art Gallery',
      category: 'Cultural Space',
      year: '2024',
      location: 'Kyoto, Japan',
      area: '8,000 sq ft',
      images: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop'
      ],
      description: 'Serene gallery spaces creating perfect harmony between art and architecture through clean lines and natural light.',
      tags: ['Minimalist', 'Cultural', 'Natural Light'],
      gradient: 'from-blue-600 via-teal-500 to-green-400',
      awards: ['Architecture Excellence Award 2024']
    },
    {
      id: 3,
      title: 'Sustainable Office Complex',
      category: 'Commercial',
      year: '2023',
      location: 'Osaka, Japan',
      area: '25,000 sq ft',
      images: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop'
      ],
      description: 'Innovative office complex featuring green walls, solar panels, and biophilic design principles.',
      tags: ['Sustainable', 'Biophilic', 'Innovation'],
      gradient: 'from-green-600 via-emerald-500 to-teal-400',
      awards: ['Green Building Award 2023']
    },
    {
      id: 4,
      title: 'Riverside Villa',
      category: 'Residential',
      year: '2023',
      location: 'Hakone, Japan',
      area: '4,200 sq ft',
      images: [
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1615874694520-474822394e73?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=800&h=600&fit=crop'
      ],
      description: 'Tranquil riverside retreat seamlessly blending indoor-outdoor living with stunning mountain views.',
      tags: ['Nature', 'Views', 'Tranquil'],
      gradient: 'from-blue-500 via-cyan-400 to-teal-300',
      awards: ['Residential Design Award 2023']
    },
    {
      id: 5,
      title: 'Urban Cultural Center',
      category: 'Public Architecture',
      year: '2022',
      location: 'Tokyo, Japan',
      area: '15,000 sq ft',
      images: [
        'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop'
      ],
      description: 'Dynamic cultural hub serving multiple communities with adaptable spaces and advanced acoustic systems.',
      tags: ['Community', 'Cultural', 'Adaptive'],
      gradient: 'from-orange-600 via-red-500 to-pink-400',
      awards: ['Public Architecture Award 2022']
    },
    {
      id: 6,
      title: 'Zen Meditation Retreat',
      category: 'Wellness',
      year: '2023',
      location: 'Mount Fuji, Japan',
      area: '3,800 sq ft',
      images: [
        'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=800&h=600&fit=crop'
      ],
      description: 'Peaceful retreat center designed for meditation and reflection, harmonizing with natural surroundings.',
      tags: ['Zen', 'Wellness', 'Nature'],
      gradient: 'from-slate-600 via-gray-500 to-stone-400',
      awards: ['Wellness Design Award 2023']
    }
  ];

  const stats = [
    { number: '250+', label: 'Projects Completed', icon: Award },
    { number: '750+', label: 'Happy Clients', icon: Users },
    { number: '35+', label: 'Awards Won', icon: Star },
    { number: '12+', label: 'Years Experience', icon: Calendar }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-cyan-900/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,198,199,0.3),transparent_50%)]" />
        </div>

        {/* Floating Geometric Elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-purple-400/30 rotate-45"
          animate={{ rotate: [45, 405], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-24 h-24 border border-cyan-400/30"
          animate={{ rotate: [0, 360], y: [-20, 20, -20] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="relative z-10 text-center max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-7xl md:text-9xl font-extralight mb-8 tracking-tight">
              <span className="block bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                ARCHITECTURAL
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent font-bold">
                EXCELLENCE
              </span>
            </h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Crafting spaces that transcend boundaries between imagination and reality, 
              where every line tells a story of innovation and every space breathes life.
            </motion.p>
          </motion.div>
          
          {/* Interactive Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              >
                <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-500 group-hover:bg-white/10">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-500">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/10 group-hover:to-cyan-600/10 rounded-2xl transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-purple-400" />
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-light mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Featured
              </span>
              <br />
              <span className="text-white font-bold">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover our most celebrated architectural achievements that have redefined 
              the boundaries between art, technology, and human experience.
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                className={`group px-8 py-4 rounded-full transition-all duration-500 font-medium ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-600/30'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10 hover:border-purple-400/50'
                }`}
                onClick={() => setActiveFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="mr-2">{category.label}</span>
                <span className="text-xs opacity-70">({category.count})</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-purple-400/30 transition-all duration-700 group-hover:bg-white/10">
                  {/* Project Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 z-10`} />
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex gap-3">
                        <motion.button
                          onClick={() => openLightbox(project, 0)}
                          className="p-4 bg-purple-600/80 backdrop-blur-sm rounded-full text-white hover:bg-purple-700/80 transition-colors"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Eye className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                          className="p-4 bg-cyan-600/80 backdrop-blur-sm rounded-full text-white hover:bg-cyan-700/80 transition-colors"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-6 left-6 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white text-sm z-30 border border-white/20">
                      {project.category}
                    </div>

                    {/* Award Badge */}
                    {project.awards && (
                      <div className="absolute top-6 right-6 p-2 bg-yellow-500/20 backdrop-blur-md rounded-full z-30 border border-yellow-400/30">
                        <Star className="w-4 h-4 text-yellow-400" />
                      </div>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-500">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Project Meta */}
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {project.year}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {project.location}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full border border-purple-600/30 hover:bg-purple-600/30 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Project Link */}
                    <motion.div
                      className="flex items-center gap-2 text-cyan-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500"
                      whileHover={{ x: 5 }}
                    >
                      <span>View Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="group px-12 py-5 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-purple-600/30 transition-all duration-500 text-lg relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore All Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="max-w-6xl w-full max-h-full overflow-hidden rounded-3xl bg-gray-900/80 backdrop-blur-xl border border-white/20"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
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
                  className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-all duration-300 border border-white/20"
                >
                  ←
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-all duration-300 border border-white/20"
                >
                  →
                </button>
                
                {/* Close button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-6 right-6 p-4 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-all duration-300 border border-white/20"
                >
                  ✕
                </button>
                
                {/* Image counter */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-3 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">{selectedProject.description}</p>
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {selectedProject.year}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {selectedProject.location}
                  </span>
                  <span>{selectedProject.area}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-cyan-900/20" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-light mb-8 tracking-tight">
              <span className="text-white">Ready to</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent font-bold">
                Create Magic?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Let's collaborate to transform your vision into architectural reality. 
              Every great space begins with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                className="px-12 py-5 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-purple-600/30 transition-all duration-500 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
              <motion.button
                className="px-12 py-5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-500 text-lg"
                whileHover={{ scale: 1.05, borderColor: 'rgba(168, 85, 247, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                View Process
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ArchitecturalHomepage;