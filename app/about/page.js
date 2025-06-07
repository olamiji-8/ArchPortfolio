'use client';
import { useState, useEffect } from 'react';
import { Users, Target, Lightbulb, Award, Calendar, MapPin } from 'lucide-react';

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
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto opacity-0 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              About NekoArch
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Where architectural dreams meet anime imagination
            </p>
            <div className="flex items-center justify-center gap-8 text-gray-400 flex-wrap">
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
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}