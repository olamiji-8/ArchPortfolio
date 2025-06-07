'use client'; 

import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Home, 
  Palette, 
  Lightbulb, 
  Users, 
  Zap, 
  ArrowRight, 
  CheckCircle,
  Star,
  MapPin,
  Calendar,
  Phone,
  Mail
} from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Services data
  const services = [
    {
      id: 1,
      icon: Building2,
      title: 'Anime-Inspired Architecture',
      description: 'Transform your space into a living anime world with our signature architectural designs that blend fantasy with functionality.',
      features: [
        'Custom anime-themed facades',
        'Iconic structural elements',
        'Futuristic building systems',
        '3D visualization previews'
      ],
      price: 'From ¥2,500,000',
      gradient: 'from-purple-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      icon: Home,
      title: 'Residential Design',
      description: 'Create your dream anime-inspired home with spaces that capture the essence of your favorite series and characters.',
      features: [
        'Studio Ghibli-style interiors',
        'Cyberpunk living spaces',
        'Traditional Japanese elements',
        'Smart home integration'
      ],
      price: 'From ¥1,800,000',
      gradient: 'from-pink-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      icon: Palette,
      title: 'Interior Design',
      description: 'Immersive interior experiences that transport you into your favorite anime worlds through color, texture, and atmosphere.',
      features: [
        'Character-inspired themes',
        'Ambient lighting design',
        'Custom furniture pieces',
        'Interactive design elements'
      ],
      price: 'From ¥800,000',
      gradient: 'from-cyan-500 to-green-500',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      icon: Lightbulb,
      title: 'Concept Development',
      description: 'From initial sketches to detailed blueprints, we help bring your wildest anime architectural dreams to reality.',
      features: [
        'Story-driven design concepts',
        'Detailed architectural drawings',
        'Material selection guidance',
        'Budget planning assistance'
      ],
      price: 'From ¥500,000',
      gradient: 'from-orange-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      icon: Users,
      title: 'Commercial Spaces',
      description: 'Design anime-themed cafés, shops, and entertainment venues that create unforgettable customer experiences.',
      features: [
        'Themed restaurant designs',
        'Retail space optimization',
        'Interactive customer zones',
        'Brand integration solutions'
      ],
      price: 'From ¥3,200,000',
      gradient: 'from-blue-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      icon: Zap,
      title: 'Renovation & Restoration',
      description: 'Transform existing spaces into anime wonderlands while preserving structural integrity and adding modern touches.',
      features: [
        'Heritage building adaptation',
        'Modern system integration',
        'Sustainable renovation practices',
        'Phased construction planning'
      ],
      price: 'From ¥1,200,000',
      gradient: 'from-green-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const processSteps = [
    { step: 1, title: 'Initial Consultation', description: 'Discuss your vision and anime inspirations' },
    { step: 2, title: 'Concept Design', description: 'Create detailed sketches and 3D visualizations' },
    { step: 3, title: 'Design Development', description: 'Refine details and select materials' },
    { step: 4, title: 'Construction', description: 'Bring your anime world to life' },
    { step: 5, title: 'Final Reveal', description: 'Step into your completed anime space' }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      
      {/* Architectural Hero Section with Unique Design */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_24%,rgba(168,85,247,0.1)_25%,rgba(168,85,247,0.1)_26%,transparent_27%,transparent_74%,rgba(168,85,247,0.1)_75%,rgba(168,85,247,0.1)_76%,transparent_77%),linear-gradient(-45deg,transparent_24%,rgba(6,182,212,0.1)_25%,rgba(6,182,212,0.1)_26%,transparent_27%,transparent_74%,rgba(6,182,212,0.1)_75%,rgba(6,182,212,0.1)_76%,transparent_77%)] bg-[length:40px_40px]" />
        </div>

        {/* Main Hero Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/50 to-gray-950 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/30 via-transparent to-gray-950 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Architectural Masterpiece" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        {/* Floating Architectural Elements */}
        <div className="absolute top-1/4 left-16 w-32 h-32 opacity-30 animate-float">
          <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl border border-purple-500/30 backdrop-blur-sm flex items-center justify-center">
            <Building2 className="w-16 h-16 text-purple-400" />
          </div>
        </div>

        <div className="absolute bottom-1/4 right-20 w-40 h-40 opacity-25 animate-float-delayed">
          <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-pink-500/20 rounded-full border border-cyan-500/30 backdrop-blur-sm flex items-center justify-center">
            <Palette className="w-20 h-20 text-cyan-400" />
          </div>
        </div>

        <div className="absolute top-1/3 right-1/4 w-24 h-24 opacity-40 animate-pulse-slow">
          <div className="w-full h-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl border border-pink-500/30 backdrop-blur-sm flex items-center justify-center">
            <Lightbulb className="w-12 h-12 text-pink-400" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-6 backdrop-blur-sm">
              Professional Architectural Services
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up">
              Designing
            </span>
            <br />
            <span className="text-5xl md:text-7xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-fade-in-up-delayed">
              Tomorrow's Spaces
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto animate-fade-in-up-delayed-2">
            Where anime aesthetics meet architectural excellence. Transform your world with our unique design philosophy that brings fantasy to life.
          </p>
          
          {/* Service Stats */}
          <div className="flex items-center justify-center gap-8 md:gap-16 text-gray-400 flex-wrap mb-12 animate-fade-in-up-delayed-3">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">6</div>
              <div className="text-sm text-gray-300">Core Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">200+</div>
              <div className="text-sm text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Support</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delayed-4">
            <button className="group bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
              <span className="flex items-center gap-2 justify-center">
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="group bg-gray-800/50 border border-gray-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-700/50 backdrop-blur-sm transition-all duration-300">
              <span className="flex items-center gap-2 justify-center">
                <Phone className="w-5 h-5" />
                Schedule Consultation
              </span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive architectural solutions that bring your anime-inspired dreams to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <div 
                  key={service.id} 
                  className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105"
                  onMouseEnter={() => setActiveService(index)}
                >
                  {/* Service Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient.replace('from-', 'from-').replace('to-', 'to-')}/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className="absolute top-4 left-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {service.price}
                      </span>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-gradient-to-r from-gray-800 to-gray-700 text-white py-3 rounded-xl font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              Our Design Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to completion, we guide you through every step of creating your dream space
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={step.step} className="flex items-center gap-8 mb-12 last:mb-0 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 group-hover:border-purple-500/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 mt-16 w-0.5 h-12 bg-gradient-to-b from-purple-500 to-cyan-500" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-500/5 to-cyan-500/5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss your vision and create something extraordinary together. 
            Your anime-inspired architectural journey starts with a simple conversation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
              <span className="flex items-center gap-2 justify-center">
                <Calendar className="w-5 h-5" />
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="group bg-gray-800/50 border border-gray-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-700/50 backdrop-blur-sm transition-all duration-300">
              <span className="flex items-center gap-2 justify-center">
                <Mail className="w-5 h-5" />
                Get Quote
              </span>
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex items-center justify-center gap-8 mt-12 flex-wrap text-gray-400">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>+81-3-1234-5678</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-purple-400" />
              <span>info@nekoarch.studio</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-pink-400" />
              <span>Shibuya, Tokyo</span>
            </div>
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
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-2deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
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
        
        .animate-fade-in-up-delayed-4 {
          animation: fade-in-up 1s ease-out 1.2s forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>

      <Footer />
    </div>
  );
}