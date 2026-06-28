import React from 'react';
import { Award, ShieldCheck, Milestone, CheckCircle, Mail, Phone, MapPin, ExternalLink, Sparkles, Building2 } from 'lucide-react';
import { CONTACT_COORDINATES, PARTNER_BANKS } from '../data';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300" id="main-footer">
      {/* Trust Badges and Certificates bar */}
      <div className="border-b border-slate-800 bg-slate-900/50 py-10" id="footer-trust-strip">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" id="footer-trust-grid">
            <div className="flex items-start space-x-4">
              <div className="rounded bg-blue-500/10 p-2 text-blue-500">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">Estd. 2008</h4>
                <p className="mt-1 text-xs text-slate-400">18 years of residential engineering excellence in Berhampur.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="rounded bg-emerald-500/10 p-2 text-emerald-500">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">ORERA Registered</h4>
                <p className="mt-1 text-xs text-slate-400">Complete compliance with Odisha Real Estate Regulatory Authority.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="rounded bg-blue-500/10 p-2 text-blue-500">
                <Milestone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">Litigation-Free</h4>
                <p className="mt-1 text-xs text-slate-400">Vetted and secure clear property land titles guaranteed.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="rounded bg-indigo-500/10 p-2 text-indigo-500">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">On-Time Handover</h4>
                <p className="mt-1 text-xs text-slate-400">Proud history of 100% on-time delivery across 12+ projects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Contents */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="footer-main-content">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12" id="footer-grid">
          {/* Brand & Address column */}
          <div className="lg:col-span-4" id="footer-brand-col">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-600 text-white font-black">
                T
              </div>
              <span className="font-sans text-xl font-black uppercase tracking-tight text-white">
                TILAK<span className="text-blue-500">HOMES</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Berhampur's trusted home builder. Committed to turning dream residential projects into structurally supreme, premium, life-long assets since 2008.
            </p>

            <div className="mt-8 space-y-4" id="footer-coords-list">
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-blue-500" />
                <span className="text-slate-300">{CONTACT_COORDINATES.officeAddress}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-5 w-5 shrink-0 text-blue-500" />
                <a href={`tel:${CONTACT_COORDINATES.phone}`} className="hover:text-blue-500 hover:underline">
                  {CONTACT_COORDINATES.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-5 w-5 shrink-0 text-blue-500" />
                <a href={`mailto:${CONTACT_COORDINATES.email}`} className="hover:text-blue-500 hover:underline">
                  {CONTACT_COORDINATES.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 lg:col-start-6" id="footer-links-col">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Builder Portals</h4>
            <ul className="mt-4 space-y-3 text-sm" id="footer-links-ul">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-blue-500 transition-colors focus:outline-none">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('projects')} className="hover:text-blue-500 transition-colors focus:outline-none">
                  Residential Projects
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('gallery')} className="hover:text-blue-500 transition-colors focus:outline-none">
                  Construction Media Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-blue-500 transition-colors focus:outline-none">
                  Our Legacy & Values
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('faq')} className="hover:text-blue-500 transition-colors focus:outline-none">
                  Homebuyer FAQs
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-blue-500 transition-colors focus:outline-none">
                  Book a Site Visit
                </button>
              </li>
            </ul>
          </div>

          {/* Partner Banks Column */}
          <div className="lg:col-span-5" id="footer-banks-col">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Pre-Approved Banking Partners</h4>
            <p className="mt-2 text-xs text-slate-400">
              Enjoy easy structural home loans with minimal interest rates via pre-approved files.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs" id="partner-banks-grid">
              {PARTNER_BANKS.map((bank, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 rounded border border-slate-800 bg-slate-900/60 px-3 py-2.5 text-slate-300"
                >
                  <Building2 className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                  <span className="font-semibold truncate">{bank.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded bg-blue-500/5 p-4 border border-blue-500/15" id="rera-badge">
              <p className="text-[11px] leading-relaxed text-blue-500 font-medium">
                *RERA DISCLAIMER: Information on other platforms may be out of date. Homebuyers are requested to verify project documents directly in our office or the Odisha RERA Portal (rera.odisha.gov.in) before booking.
              </p>
            </div>
          </div>
        </div>

        {/* Lower copyright bar */}
        <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500" id="footer-bottom">
          <p>© {new Date().getFullYear()} Tilak Homes Real Estate Developer. All Rights Reserved.</p>
          <p className="mt-2 sm:mt-0">Designed & Maintained locally in Berhampur, Odisha.</p>
        </div>
      </div>
    </footer>
  );
}
