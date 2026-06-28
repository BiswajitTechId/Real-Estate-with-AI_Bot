import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, BookOpen, MessageSquare, PhoneCall, Sparkles } from 'lucide-react';
import { FAQ_DATA, CONTACT_COORDINATES } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQView() {
  const [expandedId, setExpandedId] = useState<string | null>("faq-1");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", "Loans & Finance", "Legal & RERA", "Booking & Pricing", "Amenities & Structure", "Possession & Transfer"];

  const filteredFAQs = selectedCategory === "all"
    ? FAQ_DATA
    : FAQ_DATA.filter(faq => faq.category === selectedCategory);

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <div id="faq-view-container" className="bg-slate-50/50 pb-24 overflow-hidden">
      {/* Immersive Header Banner */}
      <div className="relative h-[40vh] min-h-[300px] w-full bg-slate-950 flex items-center justify-center text-center overflow-hidden mb-16">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0.3 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center filter brightness-75" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80')" }}
        ></motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl px-4 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 rounded bg-blue-500/15 px-3 py-1 border border-blue-500/30 text-blue-400 text-xs font-display font-bold tracking-widest uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Buyer Guidance</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Acquiring a home is an exceptional family milestone. We provide completely honest, legally backed guidance to simplify your planning process.
          </p>
        </motion.div>
      </div>

      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Category Filters Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <span className="font-display text-xs font-bold uppercase tracking-wider text-blue-600 block">Clarify Your Doubts</span>
          <p className="text-sm text-slate-500">
            Select a topic category below to narrow down your search regarding financial loans, ORERA registry procedures, structural concrete grades, or handover details.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-4" id="faq-categories">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all focus:outline-none cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-950 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
                id={`faq-cat-filter-${idx}`}
              >
                {cat === 'all' ? 'All Queries' : cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Main Accordion block */}
        <motion.div 
          layout
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05 }
            }
          }}
          className="max-w-4xl mx-auto space-y-4" 
          id="faq-accordion-list"
        >
          {filteredFAQs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <motion.div
                layout
                key={faq.id}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 overflow-hidden"
                id={`faq-box-${faq.id}`}
              >
                {/* Question Trigger */}
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                  id={`faq-btn-${faq.id}`}
                >
                  <div className="flex items-start space-x-4">
                    <HelpCircle className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                    <span className="font-sans text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="h-5 w-5 shrink-0 text-slate-400 ml-4" />
                  ) : (
                    <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 ml-4" />
                  )}
                </button>

                {/* Answer Box */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-slate-100 p-6 bg-slate-50/40 rounded-b-2xl" id={`faq-ans-${faq.id}`}>
                        <span className="inline-block rounded-lg bg-blue-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-blue-700 mb-3 border border-blue-500/10">
                          {faq.category}
                        </span>
                        <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to action at bottom */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center rounded-2xl border border-slate-200 bg-white p-8 max-w-2xl mx-auto shadow-sm" 
          id="faq-cta"
        >
          <h3 className="font-sans text-lg font-bold text-slate-900">Have a specific design or customisation question?</h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed max-w-lg mx-auto">
            Our qualified civil engineers and corporate legal consultants are eager to help. Get an authentic consultation today without any obligations.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${CONTACT_COORDINATES.phone}`}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 px-6 py-3 text-sm font-bold shadow-sm transition-all hover:scale-102 hover:-translate-y-0.5"
              id="faq-cta-call"
            >
              <PhoneCall className="h-4 w-4 text-blue-400" />
              <span>Call sales: {CONTACT_COORDINATES.phone}</span>
            </a>
            <a
              href={`mailto:${CONTACT_COORDINATES.email}`}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 px-6 py-3 text-sm font-bold text-slate-700 transition-all hover:scale-102 hover:-translate-y-0.5"
              id="faq-cta-email"
            >
              <MessageSquare className="h-4 w-4 text-blue-600" />
              <span>Email our Desk</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
