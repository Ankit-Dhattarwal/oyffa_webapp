import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">O</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Oyffa<span className="text-teal-400 font-mono">+</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Research-driven product company specializing in AI, automation, and custom software solutions. 
              Founded by IIT alumni with a mission to democratize intelligent technology.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>hello@oyffa.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+91 8607629309</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>Global Service</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'Automation Solutions',
                'AI & Data Science',
                'Mobile Development',
                'Web Development & SaaS',
                'Quantum Computing',
                'Low-Code Solutions'
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about-us' },
                { label: 'Contact', href: '/contact' },
                { label: 'Our Expertise', href: '/services' },
                { label: 'Careers', href: 'mailto:hello@oyffa.com' },
                { label: 'Research', href: 'mailto:research@oyffa.com' }
              ].map((item, index) => (
                <li key={index}>
                  {item.href.startsWith('mailto:') ? (
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Industries</h3>
            <ul className="space-y-3">
              {[
                'Healthcare & Life Sciences',
                'Financial Services',
                'E-commerce & Retail',
                'Manufacturing & Supply Chain',
                'Education & EdTech',
                'Startups & SMBs'
              ].map((industry, index) => (
                <li key={index}>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {industry}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2024 Oyffa. All rights reserved. | Built with passion for innovation and intelligent automation | IIT Alumni Founded
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;