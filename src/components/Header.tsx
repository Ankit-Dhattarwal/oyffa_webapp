import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
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
          <div className="flex items-center space-x-4 cursor-pointer group">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">O</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Oyffa<span className="text-teal-500 font-mono">+</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {[
              { href: 'hero', label: 'Home' },
              { href: 'about', label: 'About' },
              { href: 'services', label: 'Services' },
              { href: 'contact', label: 'Contact' }
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={`#${item.href}`}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
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
                { href: 'hero', label: 'Home' },
                { href: 'about', label: 'About' },
                { href: 'services', label: 'Services' },
                { href: 'contact', label: 'Contact' }
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={`#${item.href}`}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="block px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200 font-medium"
                  >
                    {item.label}
                  </a>
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