import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppRoute } from '../types';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-site py-12 mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-2">
              <Logo className="h-8 w-auto" />
              <h3 className="text-2xl font-bold tracking-widest text-heading">
                LOKI DIGITAL
              </h3>
            </div>
            <p className="text-body text-sm">Premium visuals for premium brands.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-body uppercase tracking-wider">
            <NavLink to={AppRoute.SERVICES} className="hover:text-gold-500 transition-colors">Services</NavLink>
            <NavLink to={AppRoute.WORK} className="hover:text-gold-500 transition-colors">Work</NavLink>
            <NavLink to={AppRoute.WHY_US} className="hover:text-gold-500 transition-colors">Why Us</NavLink>
            <NavLink to={AppRoute.CONTACT} className="hover:text-gold-500 transition-colors">Contact</NavLink>
          </div>

          <div className="text-neutral-600 text-xs text-center md:text-right">
            &copy; {new Date().getFullYear()} Loki Digital. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};