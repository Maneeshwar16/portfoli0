import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'HOME' },
    { href: '#about', label: 'ORIGIN' },
    { href: '#skills', label: 'POWERS' },
    { href: '#projects', label: 'MISSIONS' },
    { href: '#contact', label: 'SIGNAL' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-yellow-400 shadow-2xl border-b-4 border-black' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="relative">
            <div className="bg-red-600 text-white px-6 py-3 rounded-lg border-4 border-black shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <span className="text-2xl font-black tracking-wider">MANEESHWAR</span>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 border-2 border-black rounded-full flex items-center justify-center">
              <Zap size={16} className="text-black" />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="relative group">
                <div className="bg-white border-3 border-black px-4 py-2 font-black text-black hover:bg-blue-400 hover:text-white transition-all duration-200 transform hover:scale-105 hover:-rotate-1 shadow-lg">
                  {item.label}
                </div>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden bg-red-600 border-3 border-black p-2 text-white hover:bg-red-700 transition-colors transform hover:scale-110"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-yellow-400 border-b-4 border-black">
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block bg-white border-2 border-black px-4 py-3 font-black text-black hover:bg-blue-400 hover:text-white transition-colors transform hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
