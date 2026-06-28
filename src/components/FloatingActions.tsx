import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, CalendarDays, MessageSquare } from 'lucide-react';
import { CONTACT_COORDINATES } from '../data';

interface FloatingActionsProps {
  onBookVisitClick: () => void;
}

export default function FloatingActions({ onBookVisitClick }: FloatingActionsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 left-3 right-auto z-50 flex flex-col items-center space-y-3 sm:left-auto sm:right-6" id="floating-actions-container">
      {/* WhatsApp Action */}
      <a
        href={`https://wa.me/${CONTACT_COORDINATES.whatsapp.replace('+', '').replace(' ', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-transform duration-300 hover:scale-115 hover:bg-emerald-600 focus:outline-none"
        title="Chat on WhatsApp"
        id="float-whatsapp"
      >
        <MessageSquare className="h-6 w-6" />
      </a>

      {/* Call Now Action */}
      <a
        href={`tel:${CONTACT_COORDINATES.phone}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform duration-300 hover:scale-115 hover:bg-blue-700 focus:outline-none"
        title="Call Our Sales Team"
        id="float-call"
      >
        <Phone className="h-5 w-5" />
      </a>

      {/* Book Visit Action */}
      <button
        onClick={onBookVisitClick}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white border border-slate-800 shadow-lg transition-transform duration-300 hover:scale-115 hover:bg-slate-850 focus:outline-none"
        title="Book a Site Visit"
        id="float-visit"
      >
        <CalendarDays className="h-5 w-5" />
      </button>

      {/* Back to Top */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-slate-800 focus:outline-none"
          title="Back to Top"
          id="float-totop"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
