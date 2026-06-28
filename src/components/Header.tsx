import React, { useState } from 'react';
import { Menu, X, Phone, CalendarDays, Award } from 'lucide-react';
import { CONTACT_COORDINATES } from '../data';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Our Projects' },
    { id: 'gallery', label: 'Media Gallery' },
    { id: 'about', label: 'About Us' },
    { id: 'faq', label: 'Homebuyer FAQs' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo and Branding */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex items-center space-x-3 text-left focus:outline-none"
          id="hdr-logo-btn"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded bg-slate-900 text-white font-serif text-xl font-extrabold shadow-md transition-all duration-300 group-hover:bg-blue-600">
            T
          </div>
          <div>
            <span className="block font-sans text-xl font-bold tracking-tight text-slate-900 leading-none">
              TILAK <span className="text-blue-600">HOMES</span>
            </span>
            <span className="block font-sans text-[9px] font-bold tracking-widest uppercase text-slate-500 mt-1">
              BERHAMPUR'S TRUSTED DEVELOPER
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-8" id="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative py-2 font-sans text-sm font-semibold tracking-wide transition-colors duration-200 focus:outline-none ${
                activeTab === item.id
                  ? 'text-blue-600 font-bold'
                  : 'text-slate-600 hover:text-blue-600'
              }`}
              id={`nav-item-${item.id}`}
            >
              {item.label}
              {activeTab === item.id && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-blue-600" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden items-center space-x-4 sm:flex" id="hdr-actions">
          <a
            href={`tel:${CONTACT_COORDINATES.phone}`}
            className="flex items-center space-x-2 rounded-xl bg-slate-50 px-4 py-2 text-sm font-bold tracking-wide text-slate-800 border border-slate-200 transition-all duration-200 hover:bg-slate-100"
            id="hdr-call-btn"
          >
            <Phone className="h-4 w-4 text-blue-600" />
            <span>{CONTACT_COORDINATES.phone}</span>
          </a>
          <button
            onClick={() => handleNavClick('contact')}
            className="bg-slate-900 hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold tracking-wide shadow-sm transition-all duration-200 focus:outline-none cursor-pointer"
            id="hdr-visit-btn"
          >
            BOOK SITE VISIT
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center lg:hidden" id="mobile-menu-btn-container">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 focus:outline-none"
            aria-expanded="false"
            id="hdr-menu-toggle"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white shadow-inner lg:hidden" id="mobile-nav">
          <div className="space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex w-full items-center rounded px-4 py-3 text-base font-semibold transition-colors duration-150 ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'
                }`}
                id={`mobile-nav-item-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <div className="mt-6 grid grid-cols-1 gap-2 pt-4 border-t border-slate-100">
              <a
                href={`tel:${CONTACT_COORDINATES.phone}`}
                className="flex items-center justify-center space-x-2 rounded bg-slate-50 py-3 text-center text-sm font-bold text-slate-800 border border-slate-200"
                id="mob-hdr-call"
              >
                <Phone className="h-4 w-4 text-blue-600" />
                <span>Call Builder</span>
              </a>
              <button
                onClick={() => handleNavClick('contact')}
                className="flex items-center justify-center space-x-2 rounded bg-slate-900 text-white py-3 text-center text-sm font-bold shadow"
                id="mob-hdr-visit"
              >
                <CalendarDays className="h-4 w-4 text-blue-400" />
                <span>Schedule Site Visit</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
