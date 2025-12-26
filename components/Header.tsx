import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { AppRoute } from '../types';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Services', path: AppRoute.SERVICES },
    { name: 'Work', path: AppRoute.WORK },
    { name: 'Why Us', path: AppRoute.WHY_US },
    { name: 'Contact', path: AppRoute.CONTACT },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-site/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <NavLink to={AppRoute.HOME} className="flex items-center gap-3 group">
          <Logo className="h-10 w-auto" />
          <span className="text-xl md:text-2xl font-bold tracking-widest text-heading group-hover:text-white transition-colors duration-300">
            LOKI DIGITAL
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                  isActive ? 'text-gold-500' : 'text-body hover:text-heading'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA & Status */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs text-body uppercase tracking-wider">Accepting New Clients</span>
          </div>
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/5 hover:bg-gold-500 hover:text-site border border-white/10 hover:border-gold-500 text-heading px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2"
          >
            Get a Free Edit <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-heading"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-site border-b border-white/10 p-6 md:hidden flex flex-col space-y-6 animate-in slide-in-from-top-5 duration-200 shadow-2xl">
           {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `text-lg font-medium tracking-wide uppercase transition-colors duration-300 ${
                  isActive ? 'text-gold-500' : 'text-body hover:text-heading'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
           <div className="pt-4 border-t border-white/10 flex flex-col space-y-4">
             <div className="flex items-center space-x-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs text-body uppercase tracking-wider">Accepting New Clients</span>
              </div>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gold-500 text-site px-6 py-3 text-sm font-bold uppercase tracking-widest text-center"
              >
                Get a Free Edit
              </a>
           </div>
        </div>
      )}
    </header>
  );
};