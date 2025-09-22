import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Building, Globe, Users, Lightbulb } from 'lucide-react';
import LocationModal from './LocationModal';

const Contact = () => {
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const requiredFields = ['name', 'email', 'service', 'message'];
    const missingFields = requiredFields.filter(field => !formData[field].trim());
    
    if (missingFields.length > 0) {
      alert(`Please fill in the following required fields: ${missingFields.join(', ')}`);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      const serviceName = e.currentTarget.querySelector(`select[name="service"] option[value="${formData.service}"]`)?.textContent || formData.service;
      alert(`✅ Thank you ${formData.name}! Your inquiry about ${serviceName} has been received. Our team will contact you within 24 hours at ${formData.email}.`);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge technology? Let's discuss how Oyffa Technologies can help accelerate your digital transformation journey.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Business Inquiries</h3>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  Ready to transform your business with AI and automation? Let's discuss your project requirements and explore how Oyffa Technologies can help accelerate your digital transformation.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Research Collaboration</h3>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  Interested in cutting-edge research in AI, quantum computing, or automation? We welcome academic partnerships and collaborative research opportunities.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Global Delivery</h3>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  Based in India with a global perspective. We serve clients worldwide with 24/7 support, agile methodology, and seamless communication.
                </p>
              </div>
            </div>

            {/* Direct Contact Info */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-blue-200" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a href="mailto:hello@oyffa.com" className="text-blue-200 hover:text-white transition-colors">
                      hello@oyffa.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-blue-200" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <a href="tel:+918607629309" className="text-blue-200 hover:text-white transition-colors">
                      +91 8607629309
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-blue-200" />
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <button 
                      onClick={() => setIsLocationModalOpen(true)}
                      className="text-blue-200 hover:text-white transition-colors text-left"
                    >
                      Bangalore, Karnataka, India
                      <br />
                      <span className="text-sm">Click to view on map</span>
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="h-5 w-5 text-blue-200" />
                  <div>
                    <p className="text-white font-medium">Business Hours</p>
                    <p className="text-blue-200">Mon-Fri: 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-10 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Start Your Project</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Company and Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-white font-medium mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Service and Budget Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-white font-medium mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                  >
                    <option value="" className="bg-gray-800">Select a service</option>
                    <option value="automation" className="bg-gray-800">Automation Solutions</option>
                    <option value="ai-ml" className="bg-gray-800">AI & Data Science</option>
                    <option value="mobile" className="bg-gray-800">Mobile App Development</option>
                    <option value="web" className="bg-gray-800">Web Development & SaaS</option>
                    <option value="quantum" className="bg-gray-800">Quantum Computing Research</option>
                    <option value="lowcode" className="bg-gray-800">Low-Code/No-Code Solutions</option>
                    <option value="consultation" className="bg-gray-800">General Consultation</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-white font-medium mb-2">
                    Project Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                  >
                    <option value="" className="bg-gray-800">Select budget range</option>
                    <option value="5k-15k" className="bg-gray-800">$5,000 - $15,000</option>
                    <option value="15k-50k" className="bg-gray-800">$15,000 - $50,000</option>
                    <option value="50k-100k" className="bg-gray-800">$50,000 - $100,000</option>
                    <option value="100k+" className="bg-gray-800">$100,000+</option>
                    <option value="discuss" className="bg-gray-800">Let's discuss</option>
                  </select>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor="timeline" className="block text-white font-medium mb-2">
                  Project Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                >
                  <option value="" className="bg-gray-800">Select timeline</option>
                  <option value="immediate" className="bg-gray-800">Immediate (&lt; 1 month)</option>
                  <option value="short" className="bg-gray-800">Short-term (1-3 months)</option>
                  <option value="medium" className="bg-gray-800">Medium-term (3-6 months)</option>
                  <option value="long" className="bg-gray-800">Long-term (6+ months)</option>
                  <option value="ongoing" className="bg-gray-800">Ongoing partnership</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Tell us about your project goals, technical requirements, and how we can help you succeed..."
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 resize-vertical"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Project Inquiry
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Location Modal */}
      <LocationModal 
        isOpen={isLocationModalOpen} 
        onClose={() => setIsLocationModalOpen(false)} 
      />
    </section>
  );
};

export default Contact;