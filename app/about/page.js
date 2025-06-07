'use client';
import { useState, useEffect } from 'react';
import { Users, Target, Lightbulb, Award, Calendar, MapPin, Play } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';


export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

  // Ensure component only renders on client side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until mounted on client
  if (!mounted) {
    return null;
  }

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Akira Tanaka',
      role: 'Founder & Lead Architect',
      bio: 'Passionate about merging anime aesthetics with modern architecture. 15+ years of experience in innovative design.',
      specialty: 'Cyberpunk & Futuristic Design',
      gradient: 'from-purple-500 to-cyan-500'
    },
    {
      id: 2,
      name: 'Yuki Sato',
      role: 'Senior Interior Designer',
      bio: 'Expert in creating immersive interior experiences inspired by Studio Ghibli and slice-of-life anime.',
      specialty: 'Natural & Whimsical Interiors',
      gradient: 'from-green-400 to-pink-500'
    },
    {
      id: 3,
      name: 'Hiroshi Nakamura',
      role: 'Project Manager',
      bio: 'Ensures every project runs smoothly from concept to completion with precision and care.',
      specialty: 'Project Coordination',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      id: 4,
      name: 'Sakura Yamamoto',
      role: '3D Visualization Artist',
      bio: 'Brings architectural dreams to life through stunning 3D renders and virtual walkthroughs.',
      specialty: 'Digital Art & Visualization',
      gradient: 'from-pink-500 to-purple-500'
    }
  ];

  // Values data
  const values = [
    {
      id: 1,
      icon: Target,
      title: 'Vision',
      description: 'To create architectural experiences that transport people into the magical worlds of anime, making the impossible possible.',
      color: 'text-purple-400'
    },
    {
      id: 2,
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of design, incorporating cutting-edge technology with timeless anime aesthetics.',
      color: 'text-cyan-400'
    },
    {
      id: 3,
      icon: Users,
      title: 'Collaboration',
      description: 'Every project is a partnership. We work closely with clients to understand their anime inspirations and bring them to life.',
      color: 'text-pink-400'
    }
  ];

  // Milestones data
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

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header/>
      
      {/* Architectural Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background architectural images with parallax effect */}
        <div className="absolute inset-0">
          {/* Main hero image */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/30 to-gray-950 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover opacity-60"
          />
          
          {/* Floating architectural elements */}
          <div className="absolute top-20 left-20 w-32 h-32 opacity-20 animate-float">
            <img 
              src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
              alt="Architecture Detail" 
              className="w-full h-full object-cover rounded-xl border border-cyan-500/30"
            />
          </div>
          
          <div className="absolute bottom-32 right-20 w-40 h-40 opacity-25 animate-float-delayed">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
              alt="Modern Building" 
              className="w-full h-full object-cover rounded-xl border border-purple-500/30"
            />
          </div>
          
          <div className="absolute top-1/2 right-10 w-24 h-24 opacity-30 animate-pulse">
            <img 
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
              alt="Glass Architecture" 
              className="w-full h-full object-cover rounded-full border border-pink-500/40"
            />
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-5xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up">
            Where Dreams
            <br />
            <span className="text-5xl md:text-7xl">Take Shape</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in-up-delayed">
            Architecture inspired by anime aesthetics, designed for the future
          </p>
          
          {/* Stats */}
          <div className="flex items-center justify-center gap-12 text-gray-400 flex-wrap mb-12">
            <div className="text-center animate-fade-in-up-delayed-2">
              <div className="text-3xl font-bold text-cyan-400 mb-1">150+</div>
              <div className="text-sm">Projects Completed</div>
            </div>
            <div className="text-center animate-fade-in-up-delayed-2">
              <div className="text-3xl font-bold text-purple-400 mb-1">25+</div>
              <div className="text-sm">Awards Won</div>
            </div>
            <div className="text-center animate-fade-in-up-delayed-2">
              <div className="text-3xl font-bold text-pink-400 mb-1">8</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
          
          {/* CTA Button */}
          <button className="group bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 animate-fade-in-up-delayed-3">
            <span className="flex items-center gap-2">
              Explore Our Work
              <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Secondary Hero Images Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Minimalist Design" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold mb-2">Minimalist Beauty</h3>
                <p className="text-sm text-gray-200">Clean lines meet functional design</p>
              </div>
            </div>
            
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Glass Architecture" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold mb-2">Transparent Innovation</h3>
                <p className="text-sm text-gray-200">Light and space in harmony</p>
              </div>
            </div>
            
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80" 
                alt="Modern Curves" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold mb-2">Fluid Forms</h3>
                <p className="text-sm text-gray-200">Where curves tell stories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Our Studio
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              NekoArch Studio is a pioneering architectural firm that specializes in creating immersive, 
              anime-inspired spaces. We blend cutting-edge design with the whimsical and fantastical 
              elements of Japanese animation culture to create unique architectural experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our Mission & Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => {
              const IconComponent = value.icon;
              
              return (
                <div key={value.id} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl text-center p-8 h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color === 'text-purple-400' ? 'from-purple-400/20 to-purple-400/30' : value.color === 'text-cyan-400' ? 'from-cyan-400/20 to-cyan-400/30' : 'from-pink-400/20 to-pink-400/30'} mb-6`}>
                    <IconComponent className={`w-8 h-8 ${value.color}`} />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${value.color}`}>
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500/5 to-cyan-500/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Meet Our Creative Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our passionate team of architects, designers, and visionaries who bring anime worlds to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden group">
                {/* Member Image */}
                <div className="relative aspect-square overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-80`} />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-cyan-400 text-sm">{member.role}</p>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="px-3 py-1 bg-purple-500/20 text-cyan-400 text-xs rounded-full inline-block border border-purple-500/30">
                    {member.specialty}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Journey
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone) => (
              <div key={milestone.id} className="flex items-start gap-8 mb-12 last:mb-0">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-cyan-400">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-purple-500 rounded-full mt-2 relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-2deg); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        
        .animate-fade-in-up-delayed {
          animation: fade-in-up 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-up-delayed-2 {
          animation: fade-in-up 1s ease-out 0.6s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-up-delayed-3 {
          animation: fade-in-up 1s ease-out 0.9s forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>

      <Footer/>
    </div>
  );
}