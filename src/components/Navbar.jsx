
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../Assets/vj-logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/services', label: 'Services' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/franchise', label: 'Franchise' }
  ];
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white shadow-md py-2">
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center z-20 transform transition-all duration-300 hover:scale-105">
        <img 
          src={logo} 
          alt="Fitness Club Logo" 
          className="h-12 md:h-14"
        />

        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`navbar-link ${location.pathname === link.path ? 'text-red-600' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-20 text-fitness-black focus:outline-none hover:text-red-600 transition-colors duration-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-gray-900/95 z-10 flex flex-col items-center justify-center space-y-8 transition-all duration-300 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-2xl font-medium transition-all duration-300 transform hover:scale-110 hover:text-red-500 ${location.pathname === link.path ? 'text-red-500' : 'text-white'}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
