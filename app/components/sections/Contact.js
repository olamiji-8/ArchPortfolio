'use client'; 
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react'
import Card from '../ui/Card'
import Button from '../ui/Button'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    animeStyle: '',
    budget: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      animeStyle: '',
      budget: '',
      message: ''
    })
    
    alert('Thank you for your message! We\'ll get back to you within 24 hours.')
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'hello@nekoarch.studio',
      description: 'Send us your project details',
      color: 'text-anime-purple'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+81 3-1234-5678',
      description: 'Mon-Fri 9:00-18:00 JST',
      color: 'text-anime-pink'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'Shibuya, Tokyo, Japan',
      description: 'Schedule a consultation',
      color: 'text-anime-cyan'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      value: 'Worldwide Projects',
      description: 'Remote consultations available',
      color: 'text-purple-400'
    }
  ]

  const projectTypes = [
    'Residential Design',
    'Commercial Architecture',
    'Interior Design',
    'Renovation',
    'Consultation'
  ]

  const animeStyles = [
    'Studio Ghibli',
    'Cyberpunk',
    'Traditional Japanese',
    'Magical Girl',
    'Shonen Action',
    'Slice of Life',
    'Other'
  ]

  const budgetRanges = [
    'Under $50k',
    '$50k - $100k',
    '$100k - $250k',
    '$250k - $500k',
    '$500k+'
  ]

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-anime-purple/5 to-anime-pink/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-r from-anime-cyan/5 to-anime-purple/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-anime-purple to-anime-cyan bg-clip-text text-transparent">
            Let's Create Magic Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your space into an anime wonderland? 
            Share your vision with us and let's bring your dreams to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Tell Us About Your Project</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-anime-cyan focus:ring-1 focus:ring-anime-cyan transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-anime-cyan focus:ring-1 focus:ring-anime-cyan transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-anime-cyan focus:ring-1 focus:ring-anime-cyan transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-anime-cyan focus:ring-1 focus:ring-anime-cyan transition-all duration-300"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-dark-space">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Anime Style Preference
                    </label>
                    <select
                      name="animeStyle"
                      value={formData.animeStyle}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-anime-cyan focus:ring-1 focus:ring-anime-cyan transition-all duration-300"
                    >
                      <option value="">Select anime style</option>
                      {animeStyles.map((style) => (
                        <option key={style} value={style} className="bg-dark-space">
                          {style}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-anime-cyan focus:ring-1 focus:ring-anime-cyan transition-all duration-300"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range} className="bg-dark-space">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-anime-cyan focus:ring-1 focus:ring-anime-cyan transition-all duration-300 resize-none"
                    placeholder="Tell us about your vision, favorite anime inspirations, and any specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="large"
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card className="p-6 group">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${info.color === 'text-anime-purple' ? 'from-anime-purple/20 to-anime-purple/30' : info.color === 'text-anime-pink' ? 'from-anime-pink/20 to-anime-pink/30' : info.color === 'text-anime-cyan' ? 'from-anime-cyan/20 to-anime-cyan/30' : 'from-purple-400/20 to-purple-400/30'} group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-1 group-hover:text-anime-cyan transition-colors">
                        {info.title}
                      </h4>
                      <p className={`font-semibold ${info.color} mb-1`}>
                        {info.value}
                      </p>
                      <p className="text-sm text-gray-400">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-anime-purple" />
                  <h4 className="font-bold text-white">Response Time</h4>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We typically respond to all inquiries within 24 hours. 
                  For urgent projects, please call us directly during business hours.
                </p>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-anime-purple/10 to-anime-cyan/10 rounded-xl border border-anime-purple/20">
                  <p className="text-sm text-anime-cyan font-medium mb-2">
                    🌟 Free Consultation Available
                  </p>
                  <p className="text-xs text-gray-400">
                    Schedule a complimentary 30-minute consultation to discuss your anime-inspired project ideas.
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}