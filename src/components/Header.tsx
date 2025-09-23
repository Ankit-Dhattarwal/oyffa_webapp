import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-xl shadow-lg border-b border-gray-200' 
          : 'bg-white/95 backdrop-blur-lg border-b border-gray-100'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 cursor-pointer group">
            <img 
              src="/WhatsApp_Image_2025-09-22_at_23.05.33-removebg-preview.png" 
              alt="Oyffa Technologies" 
             className="h-16 w-auto transform transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {[
              { href: '/', label: 'Home' },
              { href: '/about-us', label: 'About' },
              { href: '/services', label: 'Services' },
              { href: '/contact', label: 'Contact' }
            ].map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group py-2 ${
                    location.pathname === item.href ? 'text-blue-600' : ''
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ${
                    location.pathname === item.href ? 'w-full' : 'w-0'
                  }`}></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-lg">
            <ul className="py-4 space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about-us', label: 'About' },
                { href: '/services', label: 'Services' },
                { href: '/contact', label: 'Contact' }
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    onClick={handleMobileMenuClose}
                    className={`block px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200 font-medium ${
                      location.pathname === item.href ? 'text-blue-600 bg-blue-50' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;