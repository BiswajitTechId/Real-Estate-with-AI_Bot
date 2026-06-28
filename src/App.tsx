import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import AssistantBot from './components/AssistantBot';
import HomeView from './components/HomeView';
import ProjectsView from './components/ProjectsView';
import GalleryView from './components/GalleryView';
import AboutView from './components/AboutView';
import FAQView from './components/FAQView';
import ContactView from './components/ContactView';
import { X, Sparkles, AlertCircle, Info, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [notification, setNotification] = useState<string | null>(null);

  // SEO: Update page title and description dynamically on tab transitions
  useEffect(() => {
    let title = "Tilak Homes | Premium Residential Apartments in Berhampur";
    let metaDescription = "Premium Residential Apartments in Berhampur by Tilak Homes, established since 2008. Explore luxury projects, Vastu floor plans, and prime locations.";

    switch (activeTab) {
      case 'home':
        title = "Tilak Homes | Premium Residential Apartments in Berhampur";
        metaDescription = "Premium Residential Apartments in Berhampur by Tilak Homes, established since 2008. Discover luxury projects, certified construction quality, and prime residential locations.";
        break;
      case 'projects':
        title = "Residential Projects by Tilak Homes | Berhampur";
        metaDescription = "Explore Tilak Homes' premium residential developments in Berhampur. Browse detailed structural floor plans, amenities, sizes, and Odisha RERA certificates.";
        break;
      case 'gallery':
        title = "Construction & Interiors Media Gallery | Tilak Homes";
        metaDescription = "Browse authentic high-res construction progress, apartment interiors, building exteriors, and possession ceremonies at Tilak Homes Berhampur.";
        break;
      case 'about':
        title = "About Tilak Homes | Real Estate Developer in Berhampur";
        metaDescription = "About Tilak Homes. Established in 2008 by Sri Rajesh Patro. Read about our legacy, core operational values, and experienced engineering leadership team.";
        break;
      case 'faq':
        title = "Homebuyer Frequently Asked Questions | Tilak Homes";
        metaDescription = "Frequently Asked Questions about purchasing apartments in Berhampur. Details on home loan banking approvals, legal papers, RERA, and booking procedures.";
        break;
      case 'contact':
        title = "Contact Tilak Homes | Book Site Visit & Request Callback";
        metaDescription = "Get in touch with Tilak Homes' corporate office in Ram Nagar, Berhampur. Schedule private chauffeur-driven site visits or request an immediate callback.";
        break;
      default:
        break;
    }

    // Set page title
    document.title = title;

    // Set meta description dynamically if tag exists, or create one
    let metaElement = document.querySelector('meta[name="description"]');
    if (metaElement) {
      metaElement.setAttribute("content", metaDescription);
    } else {
      metaElement = document.createElement('meta');
      metaElement.setAttribute('name', 'description');
      metaElement.setAttribute('content', metaDescription);
      document.head.appendChild(metaElement);
    }
  }, [activeTab]);

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 6000);
  };

  const handleFloatingVisitBook = () => {
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showNotification("✨ Let's schedule your site visit! Fill out our secure form below.");
  };

  const handleRequestCallbackTrigger = () => {
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showNotification("📞 Please fill out the Call Back form below to connect with an executive.");
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-800 antialiased" id="app-root">
      {/* Header Navigation */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main content viewport */}
      <main className="flex-grow overflow-x-hidden bg-slate-950">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.01, y: -15 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <HomeView 
                onNavigate={(tab) => { setActiveTab(tab); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                onRequestCallback={handleRequestCallbackTrigger}
              />
            </motion.div>
          )}
          {activeTab === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.01, y: -15 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectsView onShowNotification={showNotification} />
            </motion.div>
          )}
          {activeTab === 'gallery' && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.01, y: -15 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <GalleryView />
            </motion.div>
          )}
          {activeTab === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.01, y: -15 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <AboutView />
            </motion.div>
          )}
          {activeTab === 'faq' && (
            <motion.div
              key="faq"
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.01, y: -15 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <FAQView />
            </motion.div>
          )}
          {activeTab === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.01, y: -15 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <ContactView onShowNotification={showNotification} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating Action Elements (WhatsApp, Call, Scroll, Scheduler) */}
      <FloatingActions onBookVisitClick={handleFloatingVisitBook} />
      <AssistantBot onNavigate={(tab) => { setActiveTab(tab); window.scrollTo({ top: 0, behavior: 'smooth' }); }} onShowNotification={showNotification} />

      {/* Global Toast Notification Engine */}
      {notification && (
        <div 
          className="fixed bottom-6 left-6 z-50 max-w-md rounded border border-blue-500/20 bg-slate-900 p-4 text-white shadow-xl shadow-slate-950/20 animate-slide-in-left"
          id="global-toast-notification"
        >
          <div className="flex items-start space-x-3">
            <div className="rounded bg-blue-500/10 p-1 text-blue-500">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="font-sans text-xs font-semibold leading-relaxed text-slate-100">
                {notification}
              </p>
            </div>
            <button 
              onClick={() => setNotification(null)}
              className="text-slate-400 hover:text-white transition-colors focus:outline-none"
              id="toast-close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Footer Branding Component */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
