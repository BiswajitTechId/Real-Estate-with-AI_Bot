import React from 'react';
import { CORE_VALUES, CONTACT_COORDINATES } from '../data';
import { Award, ShieldCheck, Heart, Sparkles, Star, UserCheck, ShieldAlert, Award as BadgeIcon, CalendarCheck } from 'lucide-react';
import { motion } from 'motion/react';
import TiltCard from './TiltCard';

export default function AboutView() {
  const managementTeam = [
    {
      name: "Sri Rajesh Patro",
      role: "Founder & Managing Director",
      bio: "An industry veteran with 22+ years of real estate development and civil engineering experience. He supervises land acquisitions, structural safety layouts, and Odisha RERA licensing approvals."
    },
    {
      name: "Er. Manoj K. Panigrahy",
      role: "Chief Structural Engineer",
      bio: "Specializes in high-rise earthquake-resistant concrete modeling. He ensures that all Tilak developments adhere to strict IS code criteria and utilize superior materials like Tata Steel."
    },
    {
      name: "Smt. Sunita Tripathy",
      role: "Head of Legal & Documentation",
      bio: "Oversees litigation checks, land deed validation, bank approvals, and prompt Odisha RERA filings. She handles booking agreement transparency."
    },
    {
      name: "Sri Asit Kumar Sahu",
      role: "VP of Customer Success & Site Services",
      bio: "Manages post-occupancy facility transfers and residential welfare cooperation, ensuring that property maintenance and water systems run cleanly."
    }
  ];

  return (
    <div id="about-view-container" className="bg-slate-950 pb-24 overflow-hidden text-slate-100 relative">
      
      {/* Background Neon Glowing Orbs */}
      <div className="absolute top-[20%] left-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none animate-glow-pulse" />
      <div className="absolute top-[60%] right-[5%] w-[450px] h-[450px] rounded-full bg-indigo-500/5 blur-[130px] pointer-events-none animate-glow-pulse" />

      {/* 1. Immersive Full-Width About Header with Background Image */}
      <div className="relative h-[45vh] min-h-[350px] w-full bg-slate-950 flex items-center justify-center text-center overflow-hidden mb-16">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0.15 }}
          animate={{ scale: 1, opacity: 0.25 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center filter brightness-50" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')" }}
        ></motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-amber-500/5"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl px-4 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 rounded-full bg-blue-500/10 px-4 py-1.5 border border-blue-500/20 text-blue-300 text-xs font-display font-bold tracking-widest uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Legacy of South Odisha</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Our Legacy of Trust & Integrity
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">
            Redefining Berhampur's skyline since 2008 through architectural grandeur, premium building materials, and absolute litigation transparency.
          </p>
        </motion.div>
      </div>

      {/* 2. Introductory Core Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-stretch mb-24" id="about-intro-grid">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            <span className="font-display text-xs font-black uppercase tracking-widest text-blue-400 block">Our Foundations</span>
            <h2 className="font-serif text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              A Genuinely Accountable Partner For Your Generational Home
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
              At Tilak Homes, we recognize that acquiring a home is the most significant financial milestone your family will undertake. That is why we eliminate standard industry speculation. We utilize zero third-party brokers, secure absolute clear title verification, and enforce multi-layer structural checkdowns using premier certified materials like Tata Tiscon steel.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
              Our presence is deep-seated. Unlike non-local contractors who operate temporarily, our corporate headquarters sits directly in Ram Nagar, ensuring absolute post-purchase maintenance, warranty assistance, and client care for decades to come.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="border border-white/5 bg-slate-900/95 p-5 rounded-2xl flex items-start space-x-4 shadow-xl">
                <div className="rounded-xl bg-blue-500/10 p-2 text-blue-400 border border-blue-500/20 shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-extrabold uppercase tracking-wider text-white">100% Legal Transparency</h4>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">ODISHA RERA registered titles and complete structural engineering audits.</p>
                </div>
              </div>
              <div className="border border-white/5 bg-slate-900/95 p-5 rounded-2xl flex items-start space-x-4 shadow-xl">
                <div className="rounded-xl bg-blue-500/10 p-2 text-blue-400 border border-blue-500/20 shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-extrabold uppercase tracking-wider text-white">A+ Materials Only</h4>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">Tata Tiscon steel, premium ACC Cement, and certified branded fixtures.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Founder quote banner */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-slate-900/90 p-8 text-white border border-white/5 shadow-2xl relative overflow-hidden" 
            id="founder-profile-card"
          >
            {/* Background architectural overlay */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80')] bg-cover bg-center opacity-5"></div>
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
            
            <div className="space-y-4 relative z-10">
              <span className="text-blue-400 font-serif text-6xl font-black leading-none">“</span>
              <p className="text-xs sm:text-sm font-semibold text-slate-200 leading-relaxed italic text-justify">
                "{CONTACT_COORDINATES.founderQuote}"
              </p>
            </div>
            <div className="mt-8 flex items-center border-t border-white/5 pt-6 relative z-10">
              <div>
                <h4 className="font-sans text-sm font-black text-white">{CONTACT_COORDINATES.founderName}</h4>
                <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">{CONTACT_COORDINATES.founderTitle}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3. Core Values Block - Beautiful Bento Layout */}
        <section className="border-t border-white/10 pt-20 mb-24" id="about-values">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12 space-y-2"
          >
            <span className="font-display text-xs font-black uppercase tracking-widest text-blue-400 block">Our Foundations</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-black tracking-tight text-white">
              Our Core Operational Values
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              These values govern every brick laid, contract signed, and property handed over under the Tilak Homes brand.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2" 
            id="values-bento-grid"
          >
            {CORE_VALUES.map((val, idx) => (
              <TiltCard 
                key={idx} 
                className="group bg-slate-900 border border-white/5 p-8 shadow-2xl hover:border-blue-500/20" 
                id={`value-item-${idx}`}
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-sm mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                  {idx + 1}
                </div>
                <h3 className="font-sans text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{val.title}</h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">{val.description}</p>
              </TiltCard>
            ))}
          </motion.div>
        </section>

        {/* 4. Leadership Management Team - Elegant Portrait-Free Cards */}
        <section className="border-t border-white/10 pt-20" id="about-team">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-2"
          >
            <span className="font-display text-xs font-black uppercase tracking-widest text-blue-400 block">The Innovators</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-black tracking-tight text-white">
              Our Corporate Leadership Team
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Meet the experienced civil engineers, legal officers, and customer success managers steering our residential landmarks across Berhampur. (All portraits omitted per corporate request).
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08 }
              }
            }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" 
            id="team-grid"
          >
            {managementTeam.map((member, index) => (
              <TiltCard 
                key={index} 
                className="group bg-slate-900 border border-white/5 p-6 md:p-8 flex flex-col justify-between shadow-2xl hover:border-blue-500/20"
                id={`team-member-${index}`}
              >
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-black text-white group-hover:text-blue-400 transition-colors">{member.name}</h3>
                    <p className="text-[10px] text-amber-400 font-extrabold uppercase tracking-widest mt-1">{member.role}</p>
                    <p className="mt-4 text-[11px] sm:text-xs text-slate-300 leading-relaxed text-justify">{member.bio}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}
