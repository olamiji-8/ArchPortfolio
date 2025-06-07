'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Layout from '../components/layout/Layout';
import About from '../components/sections/About';
import { Users, Target, Lightbulb, Award, Calendar, MapPin } from 'lucide-react';
import Card from '../components/ui/Card';

export default function AboutPage() {
  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Ensure all arrays are properly defined with fallbacks
  const teamMembers = [
    {
      id: 1, // Add unique ID for better key handling
      name: 'Akira Tanaka',
      role: 'Founder & Lead Architect',
      image: '/api/placeholder/300/300',
      bio: 'Passionate about merging anime aesthetics with modern architecture. 15+ years of experience in innovative design.',
      specialty: 'Cyberpunk & Futuristic Design',
      gradient: 'from-anime-purple to-anime-cyan'
    },
    {
      id: 2,
      name: 'Yuki Sato',
      role: 'Senior Interior Designer',
      image: '/api/placeholder/300/300',
      bio: 'Expert in creating immersive interior experiences inspired by Studio Ghibli and slice-of-life anime.',
      specialty: 'Natural & Whimsical Interiors',
      gradient: 'from-green-400 to-anime-pink'
    },
    {
      id: 3,
      name: 'Hiroshi Nakamura',
      role: 'Project Manager',
      image: '/api/placeholder/300/300',
      bio: 'Ensures every project runs smoothly from concept to completion with precision and care.',
      specialty: 'Project Coordination',
      gradient: 'from-anime-cyan to-blue-500'
    },
    {
      id: 4,
      name: 'Sakura Yamamoto',
      role: '3D Visualization Artist',
      image: '/api/placeholder/300/300',
      bio: 'Brings architectural dreams to life through stunning 3D renders and virtual walkthroughs.',
      specialty: 'Digital Art & Visualization',
      gradient: 'from-anime-pink to-purple-500'
    }
  ];

  const values = [
    {
      id: 1,
      icon: Target,
      title: 'Vision',
      description: 'To create architectural experiences that transport people into the magical worlds of anime, making the impossible possible.',
      color: 'text-anime-purple'
    },
    {
      id: 2,
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of design, incorporating cutting-edge technology with timeless anime aesthetics.',
      color: 'text-anime-cyan'
    },
    {
      id: 3,
      icon: Users,
      title: 'Collaboration',
      description: 'Every project is a partnership. We work closely with clients to understand their anime inspirations and bring them to life.',
      color: 'text-anime-pink'
    }
  ];

  const milestones = [
    {
      id: 1,
      year: '2016',
      title: 'Studio Founded',
      description: 'NekoArch Studio was born in Shibuya, Tokyo, with a dream to merge anime culture with architecture.'
    },
    {
      id: 2,
      year: '2018',
      title: 'First Major Project',
      description: 'Completed our first anime-themed café, gaining recognition in the architectural community.'
    },
    {
      id: 3,
      year: '2020',
      title: 'International Recognition',
      description: 'Won the "Innovation in Design" award at the Tokyo Architecture Awards.'
    },
    {
      id: 4,
      year: '2022',
      title: 'Global Expansion',
      description: 'Opened satellite offices and started working on international anime-inspired projects.'
    },
    {
      id: 5,
      year: '2024',
      title: 'Sustainability Focus',
      description: 'Launched our eco-friendly anime architecture initiative, combining sustainability with style.'
    }
  ];

  // Helper function to get background gradient class
  const getBackgroundGradient = (color) => {
    switch (color) {
      case 'text-anime-purple':
        return 'from-anime-purple/20 to-anime-purple/30';
      case 'text-anime-cyan':
        return 'from-anime-cyan/20 to-anime-cyan/30';
      case 'text-anime-pink':
        return 'from-anime-pink/20 to-anime-pink/30';
      default:
        return 'from-anime-purple/20 to-anime-purple/30';
    }
  };

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
              About NekoArch
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Where architectural dreams meet anime imagination
            </p>
            <div className="flex items-center justify-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Est. 2016</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Tokyo, Japan</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>25+ Awards</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main About Section */}
      <About />

      {/* Mission & Values */}
      <section className="py-20 relative" ref={missionRef}>
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-anime-cyan to-anime-purple bg-clip-text text-transparent">
              Our Mission & Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values && values.length > 0 && values.map((value, index) => {
              // Safety check for value object
              if (!value || !value.icon || !value.title) return null;
              
              const IconComponent = value.icon;
              
              return (
                <motion.div
                  key={value.id || index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={missionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="text-center p-8 h-full">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${getBackgroundGradient(value.color)} mb-6`}>
                      <IconComponent className={`w-8 h-8 ${value.color || 'text-anime-purple'}`} />
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 ${value.color || 'text-anime-purple'}`}>
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description || ''}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-anime-purple/5 to-anime-cyan/5" ref={teamRef}>
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-anime-pink to-anime-cyan bg-clip-text text-transparent">
              Meet Our Creative Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our passionate team of architects, designers, and visionaries who bring anime worlds to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers && teamMembers.length > 0 && teamMembers.map((member, index) => {
              // Safety check for member object
              if (!member || !member.name) return null;
              
              return (
                <motion.div
                  key={member.id || index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={teamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden group">
                    {/* Member Image */}
                    <div className="relative aspect-square overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient || 'from-anime-purple to-anime-cyan'} opacity-80`} />
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                        <p className="text-anime-cyan text-sm">{member.role || ''}</p>
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="p-6">
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        {member.bio || ''}
                      </p>
                      <div className="px-3 py-1 bg-anime-purple/20 text-anime-cyan text-xs rounded-full inline-block border border-anime-purple/30">
                        {member.specialty || 'Specialist'}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-anime-purple to-anime-pink bg-clip-text text-transparent">
              Our Journey
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones && milestones.length > 0 && milestones.map((milestone, index) => {
              // Safety check for milestone object
              if (!milestone || !milestone.year || !milestone.title) return null;
              
              return (
                <motion.div
                  key={milestone.id || index}
                  className="flex items-start gap-8 mb-12 last:mb-0"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-2xl font-bold text-anime-cyan">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-anime-purple rounded-full mt-2 relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-anime-cyan rounded-full" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-300">{milestone.description || ''}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}