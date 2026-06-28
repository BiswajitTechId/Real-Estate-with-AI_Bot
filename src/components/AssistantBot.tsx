import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Building2,
  PhoneCall,
  CalendarDays,
  ArrowRight,
  X,
  MessageCircleMore,
  MessagesSquare
} from 'lucide-react';
import { CONTACT_COORDINATES, PROJECTS_DATA } from '../data';

const RoboAvatar = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const sizeMap = {
    sm: 'w-4.5 h-4.5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };
  
  return (
    <svg className={`${sizeMap[size]} fill-current`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      {/* Robot head */}
      <rect x="4" y="3" width="16" height="12" rx="2" ry="2" opacity="0.8" />
      {/* Left eye */}
      <circle cx="9" cy="7" r="2" />
      {/* Right eye */}
      <circle cx="15" cy="7" r="2" />
      {/* Antenna left */}
      <rect x="7" y="1" width="1" height="3" />
      {/* Antenna right */}
      <rect x="16" y="1" width="1" height="3" />
      {/* Body */}
      <rect x="5" y="15" width="14" height="7" rx="1" ry="1" opacity="0.7" />
      {/* Left arm */}
      <rect x="2" y="17" width="2" height="5" rx="1" ry="1" />
      {/* Right arm */}
      <rect x="20" y="17" width="2" height="5" rx="1" ry="1" />
      {/* Indicator light */}
      <circle cx="12" cy="19" r="1.5" fill="currentColor" opacity="0.6" />
    </svg>
  );
};

type AssistantOption = 'about' | 'projects' | 'contact' | 'visit';

interface AssistantBotProps {
  onNavigate: (tab: string) => void;
  onShowNotification?: (message: string) => void;
}

const optionMeta: Array<{
  id: AssistantOption;
  label: string;
  icon: typeof Sparkles;
  accent: string;
}> = [
  { id: 'about', label: 'About', icon: Sparkles, accent: 'from-sky-500 to-cyan-500' },
  { id: 'projects', label: 'Project', icon: Building2, accent: 'from-indigo-500 to-blue-500' },
  { id: 'contact', label: 'Contact', icon: PhoneCall, accent: 'from-emerald-500 to-lime-500' },
  { id: 'visit', label: 'Book Site Visit', icon: CalendarDays, accent: 'from-amber-500 to-orange-500' }
];

const contentMap: Record<AssistantOption, { title: string; body: string; ctaLabel: string; target: string }> = {
  about: {
    title: 'About Tilak Homes',
    body: 'Tilak Homes is a trusted Berhampur real estate brand since 2008. We focus on clear titles, Odisha RERA-backed transparency, premium materials, and long-term post-sale support for homebuyers.',
    ctaLabel: 'Open About Page',
    target: 'about'
  },
  projects: {
    title: 'Current Projects',
    body: `We are currently shaping premium living spaces across Ram Nagar, Engineering School Road, Gandhinagar, and Lochapada. Signature projects include ${PROJECTS_DATA.map((project) => project.name).join(', ')}.`,
    ctaLabel: 'View Projects',
    target: 'projects'
  },
  contact: {
    title: 'Contact Us',
    body: `Reach our sales desk at ${CONTACT_COORDINATES.phone} or ${CONTACT_COORDINATES.email}. Our corporate office is at ${CONTACT_COORDINATES.officeAddress} and we are available ${CONTACT_COORDINATES.timing}.`,
    ctaLabel: 'Open Contact Page',
    target: 'contact'
  },
  visit: {
    title: 'Book a Site Visit',
    body: 'Schedule a comfortable, private site walk-through for your family to explore our active projects, structural quality, and local amenities with our guided team.',
    ctaLabel: 'Book Site Visit',
    target: 'contact'
  }
};

export default function AssistantBot({ onNavigate, onShowNotification }: AssistantBotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeOption, setActiveOption] = useState<AssistantOption | null>(null);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    if (!isOpen) {
      setShowWelcome(true);
      setActiveOption(null);
      return;
    }

    const timer = window.setTimeout(() => setShowWelcome(false), 900);
    return () => window.clearTimeout(timer);
  }, [isOpen]);

  const handleSelect = (option: AssistantOption) => {
    setActiveOption(option);
  };

  const handleNavigate = () => {
    if (!activeOption) return;
    const target = contentMap[activeOption].target;
    onNavigate(target);
    if (activeOption === 'visit') {
      onShowNotification?.('🚗 Our executive will help you schedule a private site visit.');
    } else {
      onShowNotification?.('✨ We have opened the relevant section for you.');
    }
  };

  return (
    <div className="fixed bottom-6 right-3 z-[60] flex flex-col items-end sm:right-6" id="assistant-bot-shell">
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="assistant-panel"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className="absolute bottom-full right-0 mb-3 rounded-[24px] border border-slate-800/80 bg-slate-950/95 p-4 shadow-2xl shadow-slate-950/40 backdrop-blur overflow-hidden"
            style={{ width: 'min(100vw - 1.5rem, 320px)', boxSizing: 'border-box' }}
          >
            <div className="mb-3 flex items-start justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white">
                  <RoboAvatar size="sm" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Tilak Assistant</p>
                  <p className="text-[11px] text-slate-400">Your guided property concierge</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setActiveOption(null);
                }}
                className="rounded-full p-2 text-slate-400 transition hover:bg-white/5 hover:text-white"
                aria-label="Close assistant"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <AnimatePresence mode="wait">
              {showWelcome ? (
                <motion.div
                  key="welcome"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="mb-3 rounded-[18px] border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-indigo-500/10 p-3"
                >
                  <div className="mb-2 flex items-center gap-2 text-sky-300">
                    <MessagesSquare className="h-3.5 w-3.5" />
                    <span className="text-[12px] font-semibold">Hello! I’m here to help.</span>
                  </div>
                  <p className="text-[12px] leading-5 text-slate-300">
                    I can give you a quick overview of Tilak Homes, show current projects, share contact details, or help you book a private site visit.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="prompt"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="mb-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-3 text-[12px] leading-5 text-slate-300"
                >
                  <div className="mb-1 flex items-center gap-2 text-sky-300">
                    <MessageCircleMore className="h-3.5 w-3.5" />
                    <span className="font-semibold">Need help choosing?</span>
                  </div>
                  Select one of the options below to view a quick summary and jump to the right section.
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {activeOption ? (
                <motion.div
                  key={activeOption}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
                    <div className="mb-2 flex items-center gap-2">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br ${optionMeta.find((entry) => entry.id === activeOption)?.accent} text-white`}>
                        {React.createElement(optionMeta.find((entry) => entry.id === activeOption)?.icon ?? Sparkles, { className: 'h-4 w-4' })}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{contentMap[activeOption].title}</p>
                        <p className="text-[11px] text-slate-400">Instant overview</p>
                      </div>
                    </div>
                    <p className="text-[12px] leading-5 text-slate-300">{contentMap[activeOption].body}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setActiveOption(null)}
                      className="rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-[11px] font-semibold text-slate-300 transition hover:border-slate-500 hover:text-white"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleNavigate}
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 px-3 py-2 text-[11px] font-semibold text-white transition hover:brightness-110"
                    >
                      {contentMap[activeOption].ctaLabel}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="options"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="grid gap-2"
                >
                  {optionMeta.map((option) => {
                    const Icon = option.icon;
                    return (
                      <motion.button
                        key={option.id}
                        whileHover={{ y: -2, scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleSelect(option.id)}
                        className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-3 py-3 text-left transition hover:border-slate-600 hover:bg-slate-800/80"
                      >
                        <div className="flex items-center gap-2">
                          <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${option.accent} text-white`}>
                            <Icon className="h-4 w-4" />
                          </div>
                          <span className="text-sm font-semibold text-white">{option.label}</span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-slate-400" />
                      </motion.button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setIsOpen((value) => !value)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full border border-sky-400/20 bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 text-white shadow-lg shadow-sky-900/30"
        aria-label="Open assistant"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -20, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 20, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 20, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -20, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <RoboAvatar size="lg" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
