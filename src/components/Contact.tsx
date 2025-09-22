import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone, Globe } from 'lucide-react';

const Contact = () => {
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
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    const requiredFields = ['name', 'email', 'service', 'message'];
    const missingFields = requiredFields.filter(field => !formData[field].trim());

    if (missingFields.length > 0) {
      alert(`Please fill in the following required fields: ${missingFields.join(', ')}`);
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      alert(`✅ Thank you ${formData.name}! Your inquiry has been received. Our team will contact you within 24 hours at ${formData.email}.`);
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
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl opacity-15"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge technology? Let's discuss how we can 
            help accelerate your digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-6 lg:gap-8">
              {[
                {
                  icon: Mail,
                  title: 'Business Inquiries',
                  description: 'Ready to transform your business with AI and automation? Let\'s discuss your project requirements and explore how Oyffa can help accelerate your digital transformation.',
                  action: 'hello@oyffa.com'
                },
                {
                  icon: Globe,
                  title: 'Research Collaboration',
                  description: 'Interested in cutting-edge research in AI, quantum computing, or automation? We welcome academic partnerships and collaborative research opportunities.',
                  action: 'research@oyffa.com'
                },
                {
                  icon: Phone,
                  title: 'Enterprise Solutions',
                  description: 'Need scalable enterprise solutions? Our team specializes in large-scale implementations, system integrations, and custom development for Fortune 500 companies.',
                  action: '+91 8607629309'
                },
                {
                  icon: MapPin,
                  title: 'Global Delivery',
                  description: 'Based in India with a global perspective. We serve clients worldwide, delivering remote-first solutions with 24/7 support and seamless communication.',
                  action: 'Worldwide Service'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 lg:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <item.icon className="h-6 w-6 text-blue-200" />
                    <h3 className="text-lg lg:text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-blue-100 text-sm lg:text-base mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="text-white font-semibold text-sm lg:text-base">
                    {item.action}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Start Your Project</h3>
              <div className="w-16 h-1 bg-white/50 rounded-full mx-auto"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full px-4 lg:px-6 py-3 lg:py-4 bg-white/10 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full px-4 lg:px-6 py-3 lg:py-4 bg-white/10 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              {/* Company and Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-white font-medium mb-3">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    className="w-full px-4 lg:px-6 py-3 lg:py-4 bg-white/10 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 lg:px-6 py-3 lg:py-4 bg-white/10 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Service and Budget Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-white font-medium mb-3">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 lg:px-6 py-3 lg:py-4 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200"
                    required
                  >
                    <option value="" className="text-gray-800">Select a service</option>
                    <option value="automation" className="text-gray-800">Automation Solutions</option>
                    <option value="ai-ml" className="text-gray-800">AI & Data Science</option>
                    <option value="mobile" className="text-gray-800">Mobile App Development</option>
                    <option value="web" className="text-gray-800">Web Development & SaaS</option>
                    <option value="quantum" className="text-gray-800">Quantum Computing Research</option>
                    <option value="lowcode" className="text-gray-800">Low-Code/No-Code Solutions</option>
                    <option value="consultation" className="text-gray-800">General Consultation</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-white font-medium mb-3">
                    Project Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 lg:px-6 py-3 lg:py-4 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200"
                  >
                    <option value="" className="text-gray-800">Select budget range</option>
                    <option value="5k-15k" className="text-gray-800">$5,000 - $15,000</option>
                    <option value="15k-50k" className="text-gray-800">$15,000 - $50,000</option>
                    <option value="50k-100k" className="text-gray-800">$50,000 - $100,000</option>
                    <option value="100k+" className="text-gray-800">$100,000+</option>
                    <option value="discuss" className="text-gray-800">Let's discuss</option>
                  </select>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor="timeline" className="block text-white font-medium mb-3">
                  Project Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 lg:px-6 py-3 lg:py-4 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200"
                >
                  <option value="" className="text-gray-800">Select timeline</option>
                  <option value="immediate" className="text-gray-800">Immediate (&lt; 1 month)</option>
                  <option value="short" className="text-gray-800">Short-term (1-3 months)</option>
                  <option value="medium" className="text-gray-800">Medium-term (3-6 months)</option>
                  <option value="long" className="text-gray-800">Long-term (6+ months)</option>
                  <option value="ongoing" className="text-gray-800">Ongoing partnership</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-3">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Tell us about your project goals, technical requirements, and how we can help you succeed..."
                  className="w-full px-4 lg:px-6 py-3 lg:py-4 bg-white/10 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200 resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-blue-600 px-8 py-4 lg:py-5 rounded-lg font-bold text-lg hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
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
    </section>
  );
};

export default Contact;