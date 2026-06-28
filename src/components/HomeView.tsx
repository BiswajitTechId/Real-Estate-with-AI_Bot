import React, { useState, useEffect, useRef } from 'react';
import { 
  Building, Users, CalendarCheck, CheckCircle2, ChevronRight, PhoneCall, 
  MapPin, HelpCircle, HardHat, Sparkles, Building2, Landmark, Waves,
  ShieldAlert, Award, Hourglass, FileCheck2, Headphones, CalendarDays,
  ArrowRight, ChevronLeft, ChevronRight as ChevronRightIcon, Play, Pause, Eye,
  ShieldCheck, ArrowUpRight, Compass, Landmark as BankIcon
} from 'lucide-react';
import { 
  STATS_DATA, TRUST_POINTS, TIMELINE_DATA, CORE_VALUES, 
  INVEST_BERHAMPUR_REASONS, CONTACT_COORDINATES, HERO_BANNER_IMAGE 
} from '../data';
import { motion, useInView } from 'motion/react';
import TiltCard from './TiltCard';

interface AnimatedCounterProps {
  value: string;
  subtitle: string;
  label: string;
}

function AnimatedCounter({ value, subtitle, label }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const hasPlus = value.includes('+');
  const hasPercent = value.includes('%');

  useEffect(() => {
    if (isInView && !isNaN(numericValue)) {
      let start = 0;
      const end = numericValue;
      if (end === 0) return;
      
      const duration = 2000;
      const steps = 50;
      const stepValue = Math.ceil(end / steps);
      const stepTime = duration / steps;
      
      const timer = setInterval(() => {
        start += stepValue;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(start);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <div ref={ref} className="text-center py-6 md:py-0 first:pt-0 md:first:pl-0 md:px-4 flex flex-col justify-center items-center">
      <span className="block font-serif text-4xl sm:text-5xl font-black text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-300 tracking-tight">
        {isInView ? (
          <span>
            {displayValue}
            {hasPlus && "+"}
            {hasPercent && "%"}
          </span>
        ) : (
          "0"
        )}
      </span>
      <span className="mt-2 block font-display text-xs font-extrabold uppercase tracking-widest text-amber-400">
        {subtitle}
      </span>
      <span className="mt-1 block text-[11px] text-slate-300 font-medium leading-relaxed">
        {label}
      </span>
    </div>
  );
}

interface HomeViewProps {
  onNavigate: (tabId: string) => void;
  onRequestCallback: () => void;
}

const HERO_SCENES = [
  {
    id: 1,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-building-at-sunset-44381-large.mp4",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80",
    tagline: "Drone Aerial View • Prime Ram Nagar Hub",
    title: "Elite Architectural Masterpieces in Berhampur",
    desc: "Uncompromising structural longevity, Vastu-compliant dual aspect ventilation, and transparent title deeds backed by nearly two decades of local legacy."
  },
  {
    id: 2,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-luxury-real-estate-interior-design-32367-large.mp4",
    imageUrl: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1920&q=80",
    tagline: "Ultra-Premium Living • Elite Finishes",
    title: "Expansive Double Balconies & Grand High Ceilings",
    desc: "Spacious luxury flat layouts fitted with handpicked vitrified tile floors, panoramic double-height French windows, and structural excellence."
  },
  {
    id: 3,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-architect-working-on-blueprints-at-his-desk-42171-large.mp4",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80",
    tagline: "Tata Steel & ACC Cement • Structural Audits",
    title: "Built To Endure With certified A+ Construction Quality",
    desc: "Configured with earthquake-resistant premium columns, heavy certified concrete grades, and direct RERA protection at every milestone."
  },
  {
    id: 4,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-family-walking-into-their-new-house-41589-large.mp4",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1920&q=80",
    tagline: "100% On-Time Record • 450+ Active Families",
    title: "Secure Generational Handovers Built on Trust",
    desc: "Gated luxury ecosystems with multi-tier CCTV perimeter walls, modern rooftop landscaping, EV charging stations, and dedicated lifetime care."
  }
];

export default function HomeView({ onNavigate, onRequestCallback }: HomeViewProps) {
  const [currentScene, setCurrentScene] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % HERO_SCENES.length);
    }, 8500);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentScene((prev) => (prev - 1 + HERO_SCENES.length) % HERO_SCENES.length);
  };

  const handleNext = () => {
    setCurrentScene((prev) => (prev + 1) % HERO_SCENES.length);
  };

  const renderTrustIcon = (iconName: string) => {
    switch (iconName) {
      case 'CalendarDays': return <CalendarDays className="h-6 w-6 text-amber-400" />;
      case 'ShieldAlert': return <ShieldAlert className="h-6 w-6 text-amber-400" />;
      case 'Award': return <Award className="h-6 w-6 text-amber-400" />;
      case 'Hourglass': return <Hourglass className="h-6 w-6 text-amber-400" />;
      case 'FileCheck2': return <FileCheck2 className="h-6 w-6 text-amber-400" />;
      case 'Headphones': return <Headphones className="h-6 w-6 text-amber-400" />;
      default: return <CheckCircle2 className="h-6 w-6 text-amber-400" />;
    }
  };

  return (
    <div id="home-view-container" className="bg-slate-950 text-slate-100 overflow-x-hidden">
      
      {/* Decorative Background Glowing Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[140px] pointer-events-none z-0 animate-glow-pulse" />
      <div className="absolute top-[120vh] left-0 w-[450px] h-[450px] rounded-full bg-indigo-600/10 blur-[130px] pointer-events-none z-0 animate-glow-pulse" />
      <div className="absolute top-[280vh] right-[10%] w-[550px] h-[550px] rounded-full bg-amber-500/5 blur-[150px] pointer-events-none z-0 animate-glow-pulse" />

      {/* 1. Cinematic Full-Screen Hero Slideshow with Rich Visual Depth */}
      <section className="relative h-[92vh] min-h-[620px] w-full overflow-hidden bg-slate-950" id="hero-section">
        {HERO_SCENES.map((scene, idx) => {
          const isActive = idx === currentScene;
          return (
            <div 
              key={scene.id}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${isActive ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0 pointer-events-none'}`}
            >
              {/* Media Background */}
              <div className="absolute inset-0">
                {isVideoPlaying ? (
                  <video
                    ref={el => videoRefs.current[idx] = el}
                    src={scene.videoUrl}
                    poster={scene.imageUrl}
                    className="h-full w-full object-cover brightness-[0.4] contrast-[1.05]"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img 
                    src={scene.imageUrl} 
                    alt={scene.title} 
                    className="h-full w-full object-cover brightness-[0.4] contrast-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                )}
                
                {/* Layered Gradient Mask for Maximum Color Saturation */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-indigo-950/35"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-transparent to-slate-950/30"></div>
              </div>
              
              {/* Floating Geometric Lines in margins for high-end tech-lux visual identity */}
              <div className="absolute inset-y-0 left-8 w-[1px] bg-gradient-to-b from-white/0 via-white/10 to-white/0 hidden lg:block" />
              <div className="absolute inset-y-0 right-8 w-[1px] bg-gradient-to-b from-white/0 via-white/10 to-white/0 hidden lg:block" />

              {/* Text content wrapped inside relative container */}
              <div className="relative z-20 h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                <div className="max-w-3xl space-y-8">
                  
                  {/* Tagline Badge */}
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center space-x-3 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/10 px-5 py-2 border border-blue-500/30 backdrop-blur-md" 
                    id={`hero-badge-${scene.id}`}
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                    <span className="text-[10px] sm:text-xs font-display font-extrabold tracking-widest uppercase text-blue-300">
                      {scene.tagline}
                    </span>
                  </motion.div>

                  {/* Headline with luxurious word tracking and subtle shadow */}
                  <motion.h1 
                    initial={{ opacity: 0, y: 35 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="font-serif text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1] drop-shadow-md" 
                    id={`hero-title-${scene.id}`}
                  >
                    {scene.title.split(" ").map((word, i) => {
                      const isSpecial = ["Berhampur", "Luxury", "Endure", "Generational", "A+", "Elite", "Perfect"].includes(word.replace(/[^a-zA-Z+]/g, ""));
                      return (
                        <span key={i} className={isSpecial ? "block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-amber-300 mr-2 md:inline" : "inline mr-2 md:mr-3"}>
                          {word}{" "}
                        </span>
                      );
                    })}
                  </motion.h1>
                  
                  {/* Supporting Description */}
                  <motion.p 
                    initial={{ opacity: 0, y: 25 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                    transition={{ duration: 0.8, delay: 0.45 }}
                    className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-sans" 
                    id={`hero-desc-${scene.id}`}
                  >
                    {scene.desc}
                  </motion.p>

                  {/* Micro-interactive Action Handles */}
                  <motion.div 
                    initial={{ opacity: 0, y: 25 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4" 
                    id={`hero-ctas-${scene.id}`}
                  >
                    <button
                      onClick={() => onNavigate('projects')}
                      className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-900/35 transition-all hover:scale-102 hover:-translate-y-0.5 focus:outline-none flex items-center justify-center space-x-2 cursor-pointer overflow-hidden"
                      id={`hero-explore-btn-${scene.id}`}
                    >
                      <div className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      <span>Explore Projects</span>
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </button>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="bg-white/10 backdrop-blur-lg border border-white/15 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all hover:-translate-y-0.5 focus:outline-none flex items-center justify-center space-x-2 cursor-pointer hover:border-white/30"
                      id={`hero-visit-btn-${scene.id}`}
                    >
                      <CalendarCheck className="h-5 w-5 text-amber-400" />
                      <span>Book Private Tour</span>
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Cinematic Control Controls */}
        <div className="absolute bottom-10 right-10 z-30 flex items-center space-x-3 bg-slate-900/80 backdrop-blur-lg border border-white/10 p-2 rounded-full shadow-2xl">
          <button 
            onClick={handlePrev}
            className="p-2.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-all active:scale-95 cursor-pointer"
            title="Previous Scene"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          {/* Active scene indicators */}
          <div className="flex items-center space-x-2 px-1">
            {HERO_SCENES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentScene(index)}
                className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${index === currentScene ? 'w-8 bg-gradient-to-r from-blue-400 to-indigo-400' : 'w-2 bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="p-2.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-all active:scale-95 cursor-pointer"
            title="Next Scene"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>

          <span className="h-4 w-[1px] bg-white/10"></span>

          <button 
            onClick={() => setIsVideoPlaying(!isVideoPlaying)}
            className="p-2.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-all active:scale-95 cursor-pointer"
            title={isVideoPlaying ? "Pause Video Loops" : "Autoplay Video Loops"}
          >
            {isVideoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
        </div>
      </section>

      {/* 2. Overlapping Modern Glassmorphic Stats Strip with Vibrant Indigo Under-Glow */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-30 -mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" 
        id="stats-section"
      >
        <div className="relative group rounded-2xl overflow-hidden p-[1px] bg-gradient-to-br from-blue-500/40 via-indigo-500/20 to-amber-400/30 shadow-2xl">
          {/* Inner glassmorphic backdrop panel */}
          <div className="bg-slate-900/90 backdrop-blur-xl rounded-2xl p-8 md:p-10">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/10" id="stats-grid">
              {STATS_DATA.map((stat, idx) => (
                <div key={idx} className="transition-transform duration-300 hover:scale-105">
                  <AnimatedCounter 
                    value={stat.value} 
                    subtitle={stat.subtitle} 
                    label={stat.label} 
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Underlying neon color light reflection */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-500" />
        </div>
      </motion.section>

      {/* 3. Immersive Highlight Image Grid - Redefined with beautiful 3D TiltCards & Sunset Overlays */}
      <section className="py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden" id="real-estate-visual-grid">
        <div className="absolute top-[20%] left-[50%] w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none animate-glow-pulse" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Narrative side with bold luxury accents */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="space-y-3">
                <span className="font-display text-xs font-black uppercase tracking-widest text-blue-400 block">Modern Residential Spaces</span>
                <h2 className="font-serif text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                  Designed to Exceed Expectation, Crafted for Generations
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-justify">
                Step inside our finished projects to appreciate the sheer construction caliber. From breezy, double-height light channels to certified Fe500 earthquake steel layouts, Tilak Homes represents the peak of modern engineering inside the Silk City.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('gallery')}
                  className="group inline-flex items-center justify-center space-x-2 rounded-xl bg-slate-900 border border-slate-800 px-6 py-3.5 text-sm font-bold text-slate-200 hover:bg-slate-800 transition-all cursor-pointer shadow-3d-sm"
                >
                  <Eye className="h-4.5 w-4.5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span>Explore Gallery</span>
                </button>
                <button
                  onClick={() => onNavigate('projects')}
                  className="inline-flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3.5 text-sm font-bold hover:from-blue-500 hover:to-indigo-500 transition-all cursor-pointer shadow-lg shadow-blue-900/20 hover:scale-103"
                >
                  <span>View Blueprints</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>

            {/* Right side consisting of stunning 3D tilt image layers */}
            <div className="lg:col-span-7 grid grid-cols-12 gap-4" id="tilt-gallery-grid">
              
              <div className="col-span-8">
                <TiltCard className="overflow-hidden rounded-2xl h-64 group shadow-2xl relative border border-white/5 bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80" 
                    alt="Premium Luxury Interior" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-6">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400">Completed Projects</span>
                    <h4 className="text-white font-sans text-sm font-bold mt-1">Elegant Living Interiors & Custom Finishes</h4>
                  </div>
                </TiltCard>
              </div>
              
              <div className="col-span-4">
                <TiltCard className="overflow-hidden rounded-2xl h-64 group shadow-2xl relative border border-white/5 bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80" 
                    alt="ACC Concrete Foundations" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-400">Construction Checks</span>
                    <h4 className="text-white font-sans text-xs font-bold mt-1">A+ Steel Foundations</h4>
                  </div>
                </TiltCard>
              </div>
              
              <div className="col-span-4">
                <TiltCard className="overflow-hidden rounded-2xl h-48 group shadow-2xl relative border border-white/5 bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" 
                    alt="Landscaped Gated Escape" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-400">Gated Campus</span>
                    <h4 className="text-white font-sans text-xs font-bold mt-1">Active Landscaping</h4>
                  </div>
                </TiltCard>
              </div>
              
              <div className="col-span-8">
                <TiltCard className="overflow-hidden rounded-2xl h-48 group shadow-2xl relative border border-white/5 bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80" 
                    alt="Happy Family moving into new home" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-6">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400">Possession Ceremony</span>
                    <h4 className="text-white font-sans text-sm font-bold mt-1">450+ Satisfied Families in Berhampur</h4>
                  </div>
                </TiltCard>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Tilak Homes - Genuinely Structured Bento Grid with Light Outlines */}
      <section className="bg-slate-900 py-28 relative border-y border-white/5 overflow-hidden" id="why-choose-section">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-indigo-950/20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20 space-y-4"
          >
            <span className="font-display text-xs font-black uppercase tracking-widest text-blue-400 block">Trust Indicators</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-black tracking-tight text-white">
              Why Berhampur Families Choose Tilak Homes
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Unlike developers operating with uncertified local contractors, we enforce absolute material transparency. Every development undergoes thorough engineering diagnostics before registry handovers occur.
            </p>
          </motion.div>

          {/* Staggered Grid with 3D perspective lifts */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08 }
              }
            }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" 
            id="trust-points-grid"
          >
            {TRUST_POINTS.map((point, index) => (
              <motion.div 
                key={index} 
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-slate-800 to-slate-900 hover:from-blue-500/30 hover:to-indigo-500/20 transition-all duration-300 shadow-xl"
                id={`trust-card-${index}`}
              >
                <div className="rounded-2xl bg-slate-950/95 p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mb-6 border border-blue-500/20">
                      {renderTrustIcon(point.iconName)}
                    </div>
                    <h3 className="font-sans text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{point.title}</h3>
                    <p className="mt-3 text-xs text-slate-300 leading-relaxed text-justify">{point.description}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-extrabold uppercase text-amber-400 tracking-wider">Certified Guarantee</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Stunning Full-Width Parallax CTA Banner with Champagne-to-Indigo Overlay */}
      <section className="relative py-36 bg-slate-950 text-white overflow-hidden" id="cta-banner-1">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0.15 }}
          whileInView={{ scale: 1, opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-fixed bg-cover bg-center filter brightness-50" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80')" }}
        ></motion.div>
        
        {/* Colorful gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-indigo-950/80 to-slate-950/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-amber-500/10"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-8"
        >
          <span className="font-display text-xs font-black uppercase tracking-widest text-blue-300 block">Experience Luxury Living Firsthand</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-black leading-tight">
            Schedule a Private Chauffeur-Driven Site Tour This Weekend
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-200 leading-relaxed">
            Let us arrange comfortable private transport for you and your family. Browse our active columns, inspect the thickness of our steel rebar reinforcements, and review authentic RERA floor plans.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 text-sm font-bold shadow-xl shadow-blue-950/40 transition-all hover:scale-103 hover:-translate-y-0.5 cursor-pointer"
              id="cta-site-visit-btn"
            >
              <CalendarCheck className="h-4.5 w-4.5 text-amber-400" />
              <span>Book a Chauffeur Tour</span>
            </button>
            <button 
              onClick={onRequestCallback}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 text-white px-8 py-4 text-sm font-bold transition-all hover:scale-103 hover:-translate-y-0.5 cursor-pointer"
            >
              <PhoneCall className="h-4.5 w-4.5 text-amber-400" />
              <span>Request Direct Call</span>
            </button>
          </div>
        </motion.div>
      </section>

      {/* 6. Company Timeline (Corporate Legacy) with glowing trails and glass envelopes */}
      <section className="bg-slate-900 py-28 relative overflow-hidden" id="timeline-section">
        <div className="absolute top-[30%] left-[10%] w-[350px] h-[350px] bg-indigo-500/5 blur-[100px] pointer-events-none animate-glow-pulse" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20 space-y-4"
          >
            <span className="font-display text-xs font-black uppercase tracking-widest text-blue-400 block">Our Evolution</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-black tracking-tight text-white">
              Our Journey of Trust (Estd. 2008)
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              From a single premium brickwork block to towering multi-story milestones outfitted with rooftop lounges and high-speed dual elevator facilities.
            </p>
          </motion.div>

          <div className="relative border-l-2 border-white/10 ml-4 md:ml-32 py-4 space-y-12 animate-draw" id="timeline-flow">
            {TIMELINE_DATA.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="relative pl-8 md:pl-12 group" 
                  id={`timeline-item-${idx}`}
                >
                  {/* Glowing timeline nodes */}
                  <div className="absolute -left-[10px] top-1.5 h-5 w-5 rounded-full border-4 border-blue-500 bg-slate-950 group-hover:border-amber-400 group-hover:scale-110 transition-all duration-300 shadow-glow" />
                  
                  <div className="hidden md:block absolute -left-32 top-1.5 w-24 text-right">
                    <span className="font-display text-lg font-extrabold text-blue-400 group-hover:text-amber-400 transition-colors">{milestone.year}</span>
                  </div>

                  {/* Glassmorphic timeline envelope */}
                  <div className="glass-blue-premium rounded-2xl p-6 md:p-8 hover:bg-slate-800/40 transition-all duration-300 shadow-xl border border-white/5 hover:border-blue-500/20">
                    <div className="md:hidden mb-2">
                      <span className="inline-block rounded-full bg-blue-500/10 border border-blue-500/30 px-3 py-1 text-xs font-extrabold tracking-wider text-blue-300">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="font-sans text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">{milestone.title}</h3>
                    <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">{milestone.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Why Invest in Berhampur - Rich Coastal Layout with deep colors and interactive grids */}
      <section className="bg-slate-950 text-white py-28 relative overflow-hidden" id="invest-berhampur-section">
        {/* Soft background building silhouette overlay */}
        <div className="absolute inset-y-0 right-0 w-1/3 opacity-5 pointer-events-none hidden lg:block">
          <Building className="w-full h-full text-blue-300" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left pitch panel */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-6"
            >
              <span className="font-display text-xs font-black uppercase tracking-widest text-blue-400 block">Strategic Growth Hub</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Why Invest in Berhampur Real Estate?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-justify">
                Known as the 'Silk City' and the core gateway of South Odisha, Berhampur is witnessing rapid real estate appreciation. Proximity to expanding deepwater port corridors and premier educational parks ensures solid rental yields.
              </p>
              
              <div className="rounded-2xl overflow-hidden border border-white/15 h-64 shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" 
                  alt="Coastal City Growth" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-slate-950/30" />
              </div>
            </motion.div>

            {/* Right Reasons panel in 3D grid layout */}
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
              className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6" 
              id="reasons-grid"
            >
              {INVEST_BERHAMPUR_REASONS.map((reason, index) => (
                <motion.div 
                  key={index} 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-white/5 bg-slate-900/80 p-6 md:p-8 space-y-5 transition-all duration-300 hover:border-blue-500/20 shadow-lg group"
                  id={`reason-item-${index}`}
                >
                  <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400 w-12 h-12 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                    {index === 0 && <Landmark className="h-6 w-6" />}
                    {index === 1 && <Waves className="h-6 w-6" />}
                    {index === 2 && <Sparkles className="h-6 w-6" />}
                    {index === 3 && <Building2 className="h-6 w-6" />}
                  </div>
                  <div>
                    <h3 className="font-sans text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors">{reason.title}</h3>
                    <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. Mission & Vision - Warm Sunset Champagne-to-Blue Dual Gradient Backdrop */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-28 relative overflow-hidden border-t border-white/5" id="mission-vision-section">
        <div className="absolute top-[40%] right-[5%] w-[450px] h-[450px] bg-amber-500/5 blur-[120px] pointer-events-none animate-glow-pulse" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center animate-view" id="mission-vision-grid">
            
            {/* Mission breakdown text */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-8"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Compass className="h-6 w-6" />
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Our Corporate Vision & Leadership
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-justify">
                To stand as the absolute gold standard of premium architecture in Odisha. We eliminate shortcuts. Our core goal is to build secure, permanent legacy structures that enrich your neighborhood.
              </p>
              
              <div className="space-y-6 pt-2">
                <div className="border-l-4 border-blue-500 pl-5">
                  <h4 className="font-sans text-sm font-extrabold uppercase tracking-widest text-blue-400">
                    Slab-linked Schedule Accuracy
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                    By coordinating construction materials directly with factories and employing dedicated on-site engineering crews, we guarantee 100% delay-free handovers.
                  </p>
                </div>
                <div className="border-l-4 border-amber-400 pl-5">
                  <h4 className="font-sans text-sm font-extrabold uppercase tracking-widest text-amber-400">
                    Radical Legal Title Safeguards
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                    No legal loopholes, no unapproved floor heights. Every title report, land deed, and municipal safety certificate is available for buyer review before token booking.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Core Values grid wrapped in TiltCards */}
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
              className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6" 
              id="core-values-subgrid"
            >
              {CORE_VALUES.map((value, idx) => (
                <TiltCard 
                  key={idx} 
                  className="bg-slate-900/90 border border-white/5 p-8 shadow-xl group hover:border-blue-500/20" 
                  id={`core-value-${idx}`}
                >
                  <div className="text-blue-400 font-mono text-xs font-black tracking-widest uppercase mb-4 block opacity-60">
                    Value 0{idx + 1}
                  </div>
                  <h4 className="font-sans text-lg font-bold text-white group-hover:text-blue-300 transition-colors">{value.title}</h4>
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">{value.description}</p>
                </TiltCard>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* 9. Elegant Closing CTA Banner with Glowing Lighting Effects */}
      <section className="bg-slate-950 py-28 text-white relative overflow-hidden" id="cta-banner-2">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0.08 }}
          whileInView={{ scale: 1, opacity: 0.15 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center pointer-events-none brightness-50" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1920&q=80')" }}
        ></motion.div>
        
        {/* Soft colored neon background glows */}
        <div className="absolute -bottom-24 left-[50%] -translate-x-1/2 w-[300px] h-[300px] bg-blue-500/20 blur-[100px] pointer-events-none rounded-full animate-glow-pulse" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-8"
        >
          <span className="font-display text-xs font-black uppercase tracking-widest text-blue-300 block">Secure Your Dream Apartment</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-black leading-tight">
            Build Your Family's Shared Future With Tilak Homes
          </h2>
          <p className="mx-auto max-w-2xl text-xs sm:text-sm text-slate-300 leading-relaxed">
            Get in touch with our booking office to learn about custom structural modifications, upcoming block schedules, or bank financing programs. Let us build your family's future.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4" id="cta-banner-2-buttons">
            <button
              onClick={onRequestCallback}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 text-sm font-bold shadow-xl shadow-blue-900/30 transition-all hover:scale-103 hover:-translate-y-0.5 focus:outline-none cursor-pointer"
              id="cta2-callback-btn"
            >
              <PhoneCall className="h-4.5 w-4.5 text-blue-200" />
              <span>Request Immediate Callback</span>
            </button>
            <a
              href={`tel:${CONTACT_COORDINATES.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:bg-slate-800 hover:text-white px-8 py-4 text-sm font-bold transition-all hover:scale-103 hover:-translate-y-0.5 cursor-pointer"
              id="cta2-directcall"
            >
              <span>Call Corporate Office</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
