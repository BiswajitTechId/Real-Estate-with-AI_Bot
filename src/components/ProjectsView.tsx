import React, { useState } from 'react';
import { 
  Building, MapPin, ShieldAlert, BadgeDollarSign, Sparkles, CheckCircle2,
  Trees, ShieldCheck, Dumbbell, Zap, PhoneCall, ArrowUpDown, BatteryCharging,
  Home, Footprints, Baby, CloudRain, Eye, Users, Car, Droplet, Smile, Inbox,
  Phone, ArrowLeft, Download, Info, Check, Map, Compass, BookOpen, Layers, Star,
  Compass as BlueprintIcon, CalendarDays, ArrowUpRight
} from 'lucide-react';
import { PROJECTS_DATA, FUTURE_VENTURES, CONTACT_COORDINATES } from '../data';
import { Project, FloorPlan } from '../types';
import { motion } from 'motion/react';
import TiltCard from './TiltCard';

interface ProjectsViewProps {
  onShowNotification: (message: string) => void;
}

export default function ProjectsView({ onShowNotification }: ProjectsViewProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [statusFilter, setStatusFilter] = useState<'all' | 'ongoing' | 'completed'>('all');
  const [selectedFloorPlan, setSelectedFloorPlan] = useState<number>(0);
  const [projectSubTab, setProjectSubTab] = useState<'overview' | 'amenities' | 'floors' | 'location'>('overview');

  const filteredProjects = PROJECTS_DATA.filter(project => {
    if (statusFilter === 'all') return true;
    return project.status === statusFilter;
  });

  const renderAmenityIcon = (iconName: string) => {
    const iconClass = "h-5 w-5 text-blue-400 shrink-0";
    switch (iconName) {
      case 'Trees': return <Trees className={iconClass} />;
      case 'ShieldCheck': return <ShieldCheck className={iconClass} />;
      case 'Dumbbell': return <Dumbbell className={iconClass} />;
      case 'Zap': return <Zap className={iconClass} />;
      case 'PhoneCall': return <PhoneCall className={iconClass} />;
      case 'ArrowUpDown': return <ArrowUpDown className={iconClass} />;
      case 'BatteryCharging': return <BatteryCharging className={iconClass} />;
      case 'Home': return <Home className={iconClass} />;
      case 'Footprints': return <Footprints className={iconClass} />;
      case 'Baby': return <Baby className={iconClass} />;
      case 'CloudRain': return <CloudRain className={iconClass} />;
      case 'Eye': return <Eye className={iconClass} />;
      case 'Users': return <Users className={iconClass} />;
      case 'Car': return <Car className={iconClass} />;
      case 'Droplet': return <Droplet className={iconClass} />;
      case 'Smile': return <Smile className={iconClass} />;
      case 'Inbox': return <Inbox className={iconClass} />;
      case 'Phone': return <Phone className={iconClass} />;
      default: return <CheckCircle2 className={iconClass} />;
    }
  };

  const handleDownloadBrochure = (projectName: string) => {
    onShowNotification(`✨ Designing secure brochure for ${projectName}... Your PDF download will start in a brief second!`);
    
    setTimeout(() => {
      const element = document.createElement("a");
      const file = new Blob([
        `TILAK HOMES - ${projectName.toUpperCase()} BROCHURE\n\n` +
        `Developer: Tilak Homes (Berhampur, Odisha)\n` +
        `Estd: 2008\n` +
        `Contact: ${CONTACT_COORDINATES.phone} | ${CONTACT_COORDINATES.email}\n` +
        `Address: ${CONTACT_COORDINATES.officeAddress}\n\n` +
        `--- SUMMARY ---\n` +
        `Thank you for your interest. Tilak Homes is a premier real estate developer built on transparent titles, certified structural concrete grades, and reliable timelines. This brochure document serves as booking verification assistance.\n\n` +
        `Please bring this dynamic ticket copy to our corporate site office to claim an exclusive booking discount of ₹50,000!`
      ], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = `Tilak_Homes_${projectName.replace(' ', '_')}_Brochure.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      onShowNotification(`✅ Brochure for ${projectName} successfully downloaded! Check your downloads folder.`);
    }, 1500);
  };

  const renderFloorPlanSVG = (layoutType: 'type-a' | 'type-b' | 'type-c') => {
    if (layoutType === 'type-a') {
      return (
        <svg className="w-full max-w-lg aspect-square bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-[10px]" viewBox="0 0 400 400">
          <g fill="none" stroke="#334155" strokeWidth="2">
            <rect x="20" y="20" width="360" height="360" stroke="#475569" strokeWidth="4" />
            <rect x="20" y="20" width="220" height="180" />
            <rect x="240" y="20" width="140" height="200" />
            <rect x="20" y="200" width="160" height="180" />
            <rect x="180" y="200" width="120" height="180" />
            <rect x="300" y="220" width="80" height="100" />
            <rect x="300" y="320" width="80" height="60" />
          </g>
          <g fill="#cbd5e1" className="font-sans font-bold">
            <text x="130" y="100" textAnchor="middle" className="text-[11px] fill-slate-200">LIVING / DINING</text>
            <text x="130" y="120" textAnchor="middle" fill="#60a5fa" className="text-[10px] font-mono">18'0" x 12'0"</text>
            <text x="310" y="110" textAnchor="middle" className="text-[10px] fill-slate-200">MASTER BED</text>
            <text x="310" y="130" textAnchor="middle" fill="#60a5fa" className="text-[10px] font-mono">12'0" x 14'0"</text>
            <text x="90" y="280" textAnchor="middle" className="text-[10px] fill-slate-200">BEDROOM-2</text>
            <text x="90" y="300" textAnchor="middle" fill="#60a5fa" className="text-[10px] font-mono">11'0" x 12'0"</text>
            <text x="240" y="280" textAnchor="middle" className="text-[10px] fill-slate-200">KITCHEN</text>
            <text x="240" y="300" textAnchor="middle" fill="#60a5fa" className="text-[10px] font-mono">8'0" x 10'0"</text>
            <text x="340" y="260" textAnchor="middle" className="text-[8px] fill-slate-400">TOILET</text>
            <text x="340" y="350" textAnchor="middle" className="text-[8px] fill-slate-400">BALCONY</text>
          </g>
          <g stroke="#f59e0b" strokeWidth="2" fill="none">
            <circle cx="50" cy="50" r="15" />
            <line x1="50" y1="35" x2="50" y2="65" />
            <line x1="35" y1="50" x2="65" y2="50" />
            <polygon points="50,30 46,38 54,38" fill="#f59e0b" />
          </g>
          <text x="50" y="28" fill="#f59e0b" textAnchor="middle" className="font-sans font-black text-[9px]">N</text>
        </svg>
      );
    } else if (layoutType === 'type-b') {
      return (
        <svg className="w-full max-w-lg aspect-square bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-[10px]" viewBox="0 0 400 400">
          <g fill="none" stroke="#334155" strokeWidth="2">
            <rect x="20" y="20" width="360" height="360" stroke="#475569" strokeWidth="4" />
            <rect x="20" y="20" width="200" height="150" />
            <rect x="220" y="20" width="160" height="160" />
            <rect x="20" y="170" width="140" height="140" />
            <rect x="160" y="170" width="130" height="140" />
            <rect x="200" y="310" width="180" height="70" />
            <rect x="290" y="180" width="90" height="60" />
            <rect x="290" y="240" width="90" height="70" />
            <rect x="20" y="310" width="180" height="70" strokeDasharray="4,4" />
          </g>
          <g fill="#cbd5e1" className="font-sans font-bold">
            <text x="120" y="90" textAnchor="middle" className="text-[11px] fill-slate-200">LIVING / DINING</text>
            <text x="120" y="110" textAnchor="middle" fill="#60a5fa" className="text-[10px] font-mono">18' x 14'</text>
            <text x="300" y="90" textAnchor="middle" className="text-[10px] fill-slate-200">MASTER BED</text>
            <text x="300" y="110" textAnchor="middle" fill="#60a5fa" className="text-[10px] font-mono">12' x 15'</text>
            <text x="90" y="230" textAnchor="middle" className="text-[10px] fill-slate-200">BEDROOM-2</text>
            <text x="225" y="230" textAnchor="middle" className="text-[10px] fill-slate-200">BEDROOM-3</text>
            <text x="290" y="345" textAnchor="middle" className="text-[10px] fill-slate-200">KITCHEN</text>
            <text x="110" y="345" textAnchor="middle" className="text-[10px] fill-amber-400">BALCONY</text>
          </g>
          <g stroke="#f59e0b" strokeWidth="2" fill="none">
            <circle cx="50" cy="50" r="15" />
            <line x1="50" y1="35" x2="50" y2="65" />
            <line x1="35" y1="50" x2="65" y2="50" />
            <polygon points="50,30 46,38 54,38" fill="#f59e0b" />
          </g>
          <text x="50" y="28" fill="#f59e0b" textAnchor="middle" className="font-sans font-black text-[9px]">N</text>
        </svg>
      );
    } else {
      return (
        <svg className="w-full max-w-lg aspect-square bg-slate-900 border border-slate-800 rounded-2xl p-4 font-mono text-[10px]" viewBox="0 0 400 400">
          <g fill="none" stroke="#334155" strokeWidth="2">
            <rect x="20" y="20" width="360" height="360" stroke="#475569" strokeWidth="4" />
            <rect x="20" y="20" width="220" height="160" />
            <rect x="240" y="20" width="140" height="160" />
            <rect x="20" y="180" width="130" height="120" />
            <rect x="150" y="180" width="130" height="120" />
            <rect x="280" y="180" width="100" height="120" />
            <rect x="20" y="300" width="180" height="80" />
            <rect x="200" y="300" width="180" height="80" strokeDasharray="4,4" />
          </g>
          <g fill="#cbd5e1" className="font-sans font-bold">
            <text x="130" y="90" textAnchor="middle" className="text-[11px] fill-slate-200">GRAND DRAWING HALL</text>
            <text x="130" y="110" textAnchor="middle" fill="#60a5fa" className="text-[10px] font-mono">20' x 15'</text>
            <text x="310" y="90" textAnchor="middle" className="text-[10px] fill-slate-200">MASTER BED-1</text>
            <text x="85" y="235" textAnchor="middle" className="text-[9px] fill-slate-200">BEDROOM-2</text>
            <text x="215" y="235" textAnchor="middle" className="text-[9px] fill-slate-200">BEDROOM-3</text>
            <text x="330" y="235" textAnchor="middle" className="text-[9px] fill-slate-200">BEDROOM-4</text>
            <text x="110" y="345" textAnchor="middle" className="text-[10px] fill-slate-200">KITCHEN</text>
            <text x="290" y="345" textAnchor="middle" className="text-[10px] fill-amber-400">SKY TERRACE</text>
          </g>
          <g stroke="#f59e0b" strokeWidth="2" fill="none">
            <circle cx="50" cy="50" r="15" />
            <line x1="50" y1="35" x2="50" y2="65" />
            <line x1="35" y1="50" x2="65" y2="50" />
            <polygon points="50,30 46,38 54,38" fill="#f59e0b" />
          </g>
          <text x="50" y="28" fill="#f59e0b" textAnchor="middle" className="font-sans font-black text-[9px]">N</text>
        </svg>
      );
    }
  };

  if (selectedProject) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 text-slate-100" 
        id="project-portal"
      >
        {/* Back Button */}
        <button
          onClick={() => { setSelectedProject(null); setSelectedFloorPlan(0); }}
          className="inline-flex items-center space-x-2 text-xs font-bold text-slate-300 hover:text-blue-400 focus:outline-none mb-8 group transition-colors cursor-pointer"
          id="portal-back-btn"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to All Projects</span>
        </button>

        {/* Project Header Block */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-white/10 pb-8 mb-8" id="portal-header">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                selectedProject.status === 'ongoing' 
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                  : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
              }`}>
                {selectedProject.status === 'ongoing' ? 'Ongoing Development' : 'Completed & Handed Over'}
              </span>
              <span className="text-xs text-slate-300 font-mono bg-white/5 border border-white/10 px-2 py-1 rounded">ORERA: {selectedProject.rera}</span>
            </div>
            <h1 className="font-serif text-3xl font-black tracking-tight text-white md:text-5xl">{selectedProject.name}</h1>
            <p className="text-sm font-medium text-slate-300 flex items-center">
              <MapPin className="h-4.5 w-4.5 text-blue-400 mr-1.5 shrink-0" />
              <span>{selectedProject.address}</span>
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3" id="portal-header-actions">
            <button
              onClick={() => handleDownloadBrochure(selectedProject.name)}
              className="flex items-center justify-center space-x-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 px-5 py-3 text-sm font-bold transition-all cursor-pointer shadow-3d-sm"
              id="portal-brochure-btn"
            >
              <Download className="h-4 w-4 text-blue-400" />
              <span>Download Brochure</span>
            </button>
            <a
              href={`tel:${CONTACT_COORDINATES.phone}`}
              className="flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-5 py-3 text-sm font-bold transition-all shadow-lg"
              id="portal-callback-btn"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Request Pricing</span>
            </a>
          </div>
        </div>

        {/* Sub-Navigation Tabs */}
        <div className="flex border-b border-white/10 mb-8 overflow-x-auto scrollbar-hide space-x-2" id="portal-tabs">
          {[
            { id: 'overview', label: 'Overview & Gallery', icon: Info },
            { id: 'amenities', label: 'Amenities & Features', icon: Layers },
            { id: 'floors', label: 'Blueprints & Floor Plans', icon: Compass },
            { id: 'location', label: 'Map & Neighborhood', icon: Map }
          ].map((tab) => {
            const IconComponent = tab.icon;
            const isActive = projectSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setProjectSubTab(tab.id as any)}
                className={`flex items-center space-x-2 rounded-t-xl px-5 py-3.5 text-xs sm:text-sm font-extrabold tracking-wide border-b-2 transition-all cursor-pointer shrink-0 focus:outline-none ${
                  isActive 
                    ? 'border-blue-500 text-blue-400 bg-white/5 font-black' 
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
                id={`p-tab-${tab.id}`}
              >
                <IconComponent className={`h-4.5 w-4.5 ${isActive ? 'text-blue-400' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Contents */}
        <div className="py-4" id="portal-tab-content">
          {projectSubTab === 'overview' && (
            <div id="panel-overview" className="space-y-12 animate-fade-in">
              {/* Description & Quick Stats */}
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
                <div className="lg:col-span-8 space-y-4">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Project Ideology</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                    {selectedProject.description}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                    Designed with comprehensive passive solar planning and structural foundations conforming to zone-III seismic resistance standards. This gated development provides top-tier safety alongside modern community standards.
                  </p>
                </div>

                <div className="lg:col-span-4 rounded-2xl bg-slate-900 border border-white/5 p-6 space-y-4">
                  <h4 className="font-sans text-xs uppercase tracking-wider font-extrabold text-blue-400">Quick Specifications</h4>
                  <div className="space-y-3 text-xs" id="quick-specs-sub">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-slate-400 font-semibold">Price Range</span>
                      <span className="font-bold text-amber-400">{selectedProject.priceRange}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-slate-400 font-semibold">Apartment Sizes</span>
                      <span className="text-slate-200 font-bold">{selectedProject.sizes}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-slate-400 font-semibold">Location Hub</span>
                      <span className="text-slate-200 font-bold">{selectedProject.location}</span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span className="text-slate-400 font-semibold">Total Towers</span>
                      <span className="text-slate-200 font-bold">2 Premium Blocks</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* High-Resolution Project Showcase Gallery */}
              <div className="space-y-6">
                <div className="space-y-1">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Visual Showcase</h3>
                  <p className="text-xs text-slate-400">Real, unedited camera captures from construction milestones and finished layouts.</p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" id="portal-images-gallery">
                  {selectedProject.images.map((img, idx) => (
                    <TiltCard key={idx} className="overflow-hidden rounded-2xl h-64 group shadow-xl border border-white/5">
                      <img 
                        src={img} 
                        alt={`${selectedProject.name} showcase ${idx + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent flex items-end p-4">
                        <span className="text-xs text-white font-bold font-sans">Milestone Image 0{idx + 1}</span>
                      </div>
                    </TiltCard>
                  ))}
                </div>
              </div>
            </div>
          )}

          {projectSubTab === 'amenities' && (
            <div id="panel-amenities" className="animate-fade-in space-y-8">
              <div className="space-y-2">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Community Infrastructure & Amenities</h3>
                <p className="text-sm text-slate-300">
                  Every asset is modeled to assure absolute longevity, convenience, and health.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" id="portal-amenities-sub">
                {selectedProject.amenities.map((amenity, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start space-x-4 rounded-2xl border border-white/5 bg-slate-900 p-5 hover:bg-slate-800/50 hover:border-blue-500/20 transition-all group"
                  >
                    <div className="rounded-xl bg-blue-500/10 p-2.5 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      {renderAmenityIcon(amenity.iconName)}
                    </div>
                    <div>
                      <h4 className="font-sans text-sm font-bold text-white">{amenity.title}</h4>
                      <p className="mt-1 text-[11px] text-slate-400 leading-relaxed text-justify">{amenity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {projectSubTab === 'floors' && (
            <div id="panel-floors" className="grid grid-cols-1 gap-8 lg:grid-cols-12 animate-fade-in items-start">
              {/* Floor Plan Selectors */}
              <div className="lg:col-span-4 space-y-4">
                <div className="space-y-1 mb-6">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Architectural Layouts</h3>
                  <p className="text-xs text-slate-400">Click to load the dynamic certified floorplan vector scale.</p>
                </div>

                <div className="space-y-2" id="floor-buttons-list">
                  {selectedProject.floorPlans.map((fp, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedFloorPlan(idx)}
                      className={`w-full text-left rounded-xl p-4 border transition-all cursor-pointer focus:outline-none flex items-center justify-between ${
                        selectedFloorPlan === idx 
                          ? 'bg-blue-500/10 border-blue-500 text-white' 
                          : 'bg-slate-900 border-white/5 text-slate-300 hover:bg-slate-800'
                      }`}
                      id={`fp-btn-${idx}`}
                    >
                      <div>
                        <span className="block font-sans text-sm font-bold">{fp.title}</span>
                        <span className="block font-mono text-[10px] text-slate-400 mt-1">SBA: {fp.size}</span>
                      </div>
                      <BlueprintIcon className={`h-4.5 w-4.5 ${selectedFloorPlan === idx ? 'text-blue-400' : 'text-slate-400'}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Vector blueprint container */}
              <div className="lg:col-span-8 bg-slate-950 border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col items-center">
                <div className="mb-6 text-center space-y-1">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-blue-400">Active Technical Blueprint</span>
                  <h4 className="font-sans text-base sm:text-lg font-bold text-white">
                    {selectedProject.floorPlans[selectedFloorPlan].title} — {selectedProject.floorPlans[selectedFloorPlan].size}
                  </h4>
                </div>
                <div className="w-full flex justify-center bg-slate-900 p-4 sm:p-8 rounded-2xl border border-white/5 shadow-2xl">
                  {renderFloorPlanSVG(selectedProject.floorPlans[selectedFloorPlan].layoutType)}
                </div>
              </div>
            </div>
          )}

          {projectSubTab === 'location' && (
            <div id="panel-location" className="grid grid-cols-1 gap-8 lg:grid-cols-12 animate-fade-in">
              {/* Info column */}
              <div className="lg:col-span-4 space-y-6">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Prime Local Neighborhood</h3>
                  <p className="text-sm text-slate-300">
                    Situated in serene residential blocks in Berhampur. Perfect connectivity to local transport systems, medical institutions, and high-speed highways.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-sans text-xs uppercase tracking-wider font-extrabold text-blue-400">Neighborhood highlights:</h4>
                  <ul className="space-y-4 text-xs text-slate-300" id="portal-loc-highlights">
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 rounded-full bg-blue-500 mt-1 shrink-0" />
                      <span><strong>Healthcare</strong>: Near MKCG Medical College & Hospital and top regional specialists.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 rounded-full bg-blue-500 mt-1 shrink-0" />
                      <span><strong>Transit</strong>: Within 10 minutes drive to Berhampur railway junction and New Bus Stand.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 rounded-full bg-blue-500 mt-1 shrink-0" />
                      <span><strong>Leisure</strong>: Short 15 minutes drive to the serene Gopalpur-on-Sea beach.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 rounded-full bg-blue-500 mt-1 shrink-0" />
                      <span><strong>Education</strong>: Surrounded by high-ranking schools, colleges, and Khallikote university campus.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Google Map column */}
              <div className="lg:col-span-8 rounded-2xl overflow-hidden border border-white/5 bg-slate-900 shadow-xl h-96">
                <iframe
                  src={selectedProject.googleMapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${selectedProject.name} location map`}
                />
              </div>
            </div>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <div id="projects-list-view" className="bg-slate-950 pb-24 overflow-hidden text-slate-100">
      
      {/* Dynamic blurred color bulbs */}
      <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-blue-500/5 blur-[120px] pointer-events-none animate-glow-pulse" />
      <div className="absolute top-[60%] left-[5%] w-[380px] h-[380px] bg-indigo-500/5 blur-[100px] pointer-events-none animate-glow-pulse" />

      {/* Immersive Header Banner */}
      <div className="relative h-[40vh] min-h-[300px] w-full bg-slate-950 flex items-center justify-center text-center overflow-hidden mb-16">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0.15 }}
          animate={{ scale: 1, opacity: 0.25 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center filter brightness-50" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80')" }}
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
            <span>Tilak Portfolio</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Our Residential Landmarks
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">
            From super-premium ongoing high-rises to legacy completed campuses. Click on any development to inspect deep floorplans, maps, and specifications.
          </p>
        </motion.div>
      </div>

      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-center md:justify-between border-b border-white/10 pb-6 mb-12 gap-4">
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">Featured Communities</h2>
            <p className="text-xs text-slate-400 mt-1">Explore RERA-compliant projects engineered for generations.</p>
          </div>
          
          <div className="flex items-center space-x-2 bg-slate-900 p-1.5 rounded-xl border border-white/5" id="projects-filters">
            {[
              { id: 'all', label: 'Show All' },
              { id: 'ongoing', label: 'Ongoing' },
              { id: 'completed', label: 'Completed' }
            ].map((btn) => {
              const isActive = statusFilter === btn.id;
              return (
                <button
                  key={btn.id}
                  onClick={() => setStatusFilter(btn.id as any)}
                  className={`rounded-lg px-4 py-1.5 text-xs font-bold transition-all cursor-pointer focus:outline-none ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-md font-extrabold' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  id={`filter-${btn.id}`}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 gap-10 md:grid-cols-2" 
          id="projects-grid"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-slate-900/80 hover:bg-slate-900 transition-all duration-300 shadow-2xl"
              id={`project-card-${project.id}`}
            >
              {/* Image banner */}
              <div className="relative overflow-hidden bg-slate-900 aspect-video" id={`p-img-box-${project.id}`}>
                <img
                  src={project.images[0]}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <span className={`absolute top-4 left-4 inline-block rounded-lg px-3 py-1 text-[10px] font-bold uppercase tracking-wider shadow-sm ${
                  project.status === 'ongoing' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-slate-800 text-slate-200 border border-white/5'
                }`}>
                  {project.status === 'ongoing' ? 'Ongoing Construction' : 'Handover Ready'}
                </span>
              </div>

              {/* Content card */}
              <div className="flex flex-1 flex-col p-6 md:p-8 space-y-4" id={`p-content-box-${project.id}`}>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-[10px] sm:text-xs text-slate-400 font-medium">
                    <MapPin className="h-4 w-4 text-blue-400" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-[10px] text-blue-400 font-extrabold uppercase tracking-widest font-mono">
                    ORERA Reg: {project.rera}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify line-clamp-3">
                  {project.tagline} - {project.description}
                </p>

                {/* Specifications pills */}
                <div className="flex flex-wrap gap-2 pt-2" id={`p-specs-box-${project.id}`}>
                  <span className="rounded-lg bg-slate-950 border border-white/5 px-3 py-1 text-xs font-bold text-slate-300">
                    {project.configurations.join(', ')}
                  </span>
                  <span className="rounded-lg bg-slate-950 border border-white/5 px-3 py-1 text-xs font-bold text-slate-300">
                    {project.sizes}
                  </span>
                  <span className="rounded-lg bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs font-bold text-blue-400 font-mono">
                    {project.priceRange}
                  </span>
                </div>

                {/* Action */}
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => { setSelectedProject(project); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-bold text-slate-200 hover:text-blue-400 focus:outline-none cursor-pointer group"
                    id={`p-action-view-${project.id}`}
                  >
                    <span>View Blueprints & Details</span>
                    <Compass className="h-4.5 w-4.5 text-blue-400 transition-transform group-hover:rotate-45" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Future Ventures - Beautiful Bento Badges */}
        <section className="mt-28 border-t border-white/10 pt-20" id="future-ventures-section">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <span className="font-display text-xs font-black uppercase tracking-widest text-blue-400 block">
              Future Ventures
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-black tracking-tight text-white">
              Strategic Expansion & Upcoming Horizons
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We are actively drafting architectural blueprints and submitting regulatory clearances for premium residential blocks and commercial zones in Berhampur.
            </p>
          </div>

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
            className="grid grid-cols-1 gap-8 md:grid-cols-2" 
            id="future-ventures-grid"
          >
            {FUTURE_VENTURES.map((venture, idx) => (
              <TiltCard 
                key={idx} 
                className="bg-slate-900 border border-white/5 p-8 flex flex-col justify-between shadow-2xl hover:border-blue-500/20"
                id={`future-card-${idx}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-block rounded-lg bg-slate-950 border border-white/5 px-3 py-1 text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                      {venture.type}
                    </span>
                    <span className="text-xs text-amber-400 font-bold font-mono">{venture.timeline}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{venture.name}</h3>
                  <p className="text-xs text-slate-400 font-medium flex items-center">
                    <MapPin className="h-3.5 w-3.5 text-blue-400 mr-1.5 shrink-0" />
                    <span>{venture.location}</span>
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                    {venture.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => onShowNotification(`✨ Thank you! We will notify you about regulatory clearances and bookings for ${venture.name}!`)}
                    className="text-xs font-bold text-blue-400 hover:text-blue-300 focus:outline-none flex items-center space-x-1.5 cursor-pointer"
                    id={`future-notify-${idx}`}
                  >
                    <Info className="h-4 w-4" />
                    <span>Register Priority Interest</span>
                  </button>
                  <ArrowUpRight className="h-4.5 w-4.5 text-slate-500" />
                </div>
              </TiltCard>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}
