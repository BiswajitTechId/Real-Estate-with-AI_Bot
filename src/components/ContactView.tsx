import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, CalendarCheck, PhoneCall, Check, Send, 
  Map, MessageSquare, ShieldCheck, HeartHandshake, User, Users, ClipboardCheck, 
  CheckCircle2, Compass, Home, Hammer, Key, Sparkles
} from 'lucide-react';
import { CONTACT_COORDINATES, PROJECTS_DATA } from '../data';
import { motion } from 'motion/react';

interface ContactViewProps {
  onShowNotification: (message: string) => void;
  callbackRequestTriggered?: boolean;
}

export default function ContactView({ onShowNotification, callbackRequestTriggered = false }: ContactViewProps) {
  // Callback Request Form States
  const [cbName, setCbName] = useState('');
  const [cbPhone, setCbPhone] = useState('');
  const [cbProject, setCbProject] = useState(PROJECTS_DATA[0].name);
  const [cbSubmitted, setCbSubmitted] = useState(false);

  // Site Visit Scheduler States
  const [svName, setSvName] = useState('');
  const [svPhone, setSvPhone] = useState('');
  const [svEmail, setSvEmail] = useState('');
  const [svDate, setSvDate] = useState('');
  const [svTime, setSvTime] = useState('10:00 AM');
  const [svProject, setSvProject] = useState(PROJECTS_DATA[0].name);
  const [svSubmitted, setSvSubmitted] = useState(false);

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cbName || !cbPhone) {
      onShowNotification("⚠️ Please fill in all fields to request a callback.");
      return;
    }
    setCbSubmitted(true);
    onShowNotification(`📞 Callback Request received! Our sales lead will call you at ${cbPhone} within 15 minutes!`);
  };

  const handleSiteVisitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!svName || !svPhone || !svDate) {
      onShowNotification("⚠️ Please fill in your Name, Phone Number, and Date to book a Site Visit.");
      return;
    }
    setSvSubmitted(true);
    onShowNotification(`🚗 Site Visit Scheduled! Our executive will coordinate a comfortable pick-up for ${svDate} at ${svTime}!`);
  };

  // Buying Process Steps
  const buyingSteps = [
    {
      step: "01",
      title: "Initial Engagement",
      desc: "Fill our rapid callback form, call us directly, or chat with our customer support desk on WhatsApp.",
      icon: <Phone className="h-5 w-5 text-blue-600" />
    },
    {
      step: "02",
      title: "Chauffeur Site Tour",
      desc: "Coordinate a comfortable, private site tour for you and your family to active construction projects.",
      icon: <CalendarCheck className="h-5 w-5 text-blue-600" />
    },
    {
      step: "03",
      title: "Vastu & Floor Selection",
      desc: "Select your desired block, Vastu-compliant apartment layout, and specific floor heights.",
      icon: <Compass className="h-5 w-5 text-blue-600" />
    },
    {
      step: "04",
      title: "Title & Documentation",
      desc: "Review legal papers and execute a clear, transparent Agreement for Sale with direct RERA protection.",
      icon: <ClipboardCheck className="h-5 w-5 text-blue-600" />
    },
    {
      step: "05",
      title: "Milestone-Linked Quality",
      desc: "Receive monthly high-resolution photographic progress reports verified by our Chief Structural Engineer.",
      icon: <Hammer className="h-5 w-5 text-blue-600" />
    },
    {
      step: "06",
      title: "Key Handover Ceremony",
      desc: "Collect your legal Occupancy Certificate (OC), utility registries, and dynamic home warranty handbook.",
      icon: <Key className="h-5 w-5 text-blue-600" />
    }
  ];

  return (
    <div id="contact-view-container" className="bg-slate-50/50 pb-24 overflow-hidden">
      {/* 1. Full-Width Background Cover Photo Header */}
      <div className="relative h-[45vh] min-h-[350px] w-full bg-slate-950 flex items-center justify-center text-center overflow-hidden mb-16">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0.3 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center filter brightness-75" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80')" }}
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
            <span>Connect With Us</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Schedule a Private Visit
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Experience the construction quality, structural concrete layouts, and elite localities firsthand. Our team provides comfortable private transport support.
          </p>
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 2. Transparent Buying Process Segment */}
        <section className="mb-24" id="buying-process-section">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-2"
          >
            <span className="font-display text-xs font-bold uppercase tracking-wider text-blue-600 block">Our Client Pathway</span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              A Transparent Homebuying Experience
            </h2>
            <p className="text-sm text-slate-500">
              Own your dream apartment in Berhampur with complete operational, structural, and legal clarity. We support you at every milestone.
            </p>
          </motion.div>

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
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" 
            id="buying-steps-grid"
          >
            {buyingSteps.map((stepItem, idx) => (
              <motion.div 
                key={idx} 
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative rounded-2xl border border-slate-200 bg-white p-8 flex flex-col justify-between hover:shadow-md hover:border-blue-500/10 transition-all duration-300 shadow-sm"
                id={`buying-step-${idx}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded bg-blue-50 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {stepItem.icon}
                    </div>
                    <span className="font-mono text-3xl font-black text-slate-100 group-hover:text-blue-500/10 transition-colors">{stepItem.step}</span>
                  </div>
                  <h3 className="mt-6 font-sans text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{stepItem.title}</h3>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed text-justify">{stepItem.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 3. Main Contact Columns */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 border-t border-slate-200/80 pt-20" id="contact-main-grid">
          {/* Left Column: Coordinates & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8" 
            id="contact-coordinates-panel"
          >
            <div className="space-y-2">
              <span className="font-display text-xs font-bold uppercase tracking-wider text-blue-600 block">Our Offices</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">Corporate Headquarters</h2>
              <p className="text-sm text-slate-500">
                Drop by our office or call us directly. Our executive team is happy to answer structural queries, share legal deeds, or host site visits.
              </p>
            </div>

            <div className="space-y-6" id="coordinates-details">
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-wider font-bold text-slate-400">Office Address</h4>
                  <p className="mt-1 text-sm text-slate-500 leading-relaxed font-semibold">{CONTACT_COORDINATES.officeAddress}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-wider font-bold text-slate-400">Sales Desk</h4>
                  <p className="mt-1 text-sm text-slate-800 font-bold font-mono">
                    <a href={`tel:${CONTACT_COORDINATES.phone}`} className="hover:text-blue-600 transition-colors">
                      {CONTACT_COORDINATES.phone}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-wider font-bold text-slate-400">Email Correspondence</h4>
                  <p className="mt-1 text-sm text-slate-800 font-bold font-mono">
                    <a href={`mailto:${CONTACT_COORDINATES.email}`} className="hover:text-blue-600 transition-colors">
                      {CONTACT_COORDINATES.email}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-wider font-bold text-slate-400">Business Hours</h4>
                  <p className="mt-1 text-sm text-slate-500 font-semibold">{CONTACT_COORDINATES.timing}</p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15024.184377017666!2d84.79373981180145!3d19.313498305007328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d4cd3d639c63b%3A0xe5c33190df0353c7!2sRam%20Nagar%2C%20Brahmapur%2C%20Odisha!5e0!3m2!1sen!2sin!4v1703650000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tilak Homes Corporate Headquarters Location"
              />
            </div>
          </motion.div>

          {/* Right Column: Interaction Forms */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8" 
            id="contact-forms-panel"
          >
            {/* Form 1: Call Back Request */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="rounded-xl bg-blue-50 p-2.5 text-blue-600">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-sans text-base sm:text-lg font-bold text-slate-900">Request a Free Call Back</h3>
                  <p className="text-xs text-slate-400">Our senior advisor will call you back within 15 minutes.</p>
                </div>
              </div>

              {cbSubmitted ? (
                <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 text-center" id="cb-success-panel">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500 animate-bounce" />
                  <h4 className="mt-4 font-sans text-base font-bold text-slate-900">Request Registered!</h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{cbName}</strong>. Our lead consultant is preparing specifications for <strong>{cbProject}</strong> and will call you at <strong>{cbPhone}</strong> shortly.
                  </p>
                  <button 
                    onClick={() => { setCbSubmitted(false); setCbName(''); setCbPhone(''); }}
                    className="mt-6 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer focus:outline-none"
                  >
                    Request Another Callback
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCallbackSubmit} className="space-y-4" id="cb-request-form">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Your Full Name</label>
                      <input
                        type="text"
                        value={cbName}
                        onChange={(e) => setCbName(e.target.value)}
                        placeholder="e.g., Alok Patnaik"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-blue-600 focus:bg-white focus:outline-none transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Phone Number (10-digit)</label>
                      <input
                        type="tel"
                        value={cbPhone}
                        onChange={(e) => setCbPhone(e.target.value)}
                        placeholder="e.g., +91 94370 XXXXX"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-blue-600 focus:bg-white focus:outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Project of Interest</label>
                    <select
                      value={cbProject}
                      onChange={(e) => setCbProject(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-blue-600 focus:bg-white focus:outline-none transition-all cursor-pointer"
                    >
                      {PROJECTS_DATA.map((proj) => (
                        <option key={proj.id} value={proj.name}>{proj.name} ({proj.location})</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white py-3.5 text-sm font-bold shadow-sm transition-all cursor-pointer"
                    id="cb-submit-btn"
                  >
                    <Send className="h-4 w-4 text-blue-400" />
                    <span>Request Call Back</span>
                  </button>
                </form>
              )}
            </div>

            {/* Form 2: Detailed Site Visit Booking */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="rounded-xl bg-blue-50 p-2.5 text-blue-600">
                  <CalendarCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-sans text-base sm:text-lg font-bold text-slate-900">Schedule a Private Site Visit</h3>
                  <p className="text-xs text-slate-400">Experience our construction quality firsthand. Free transport provided.</p>
                </div>
              </div>

              {svSubmitted ? (
                <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 text-center" id="sv-success-panel">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500 animate-bounce" />
                  <h4 className="mt-4 font-sans text-base font-bold text-slate-900">Site Visit Booked Successfully!</h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{svName}</strong>. Our driver and coordinator will contact you at <strong>{svPhone}</strong> to schedule pick-up for <strong>{svDate}</strong> at <strong>{svTime}</strong> to view <strong>{svProject}</strong>.
                  </p>
                  <button 
                    onClick={() => { setSvSubmitted(false); setSvName(''); setSvPhone(''); setSvDate(''); }}
                    className="mt-6 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer focus:outline-none"
                  >
                    Book Another Site Visit
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSiteVisitSubmit} className="space-y-4" id="sv-booking-form">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                      <input
                        type="text"
                        value={svName}
                        onChange={(e) => setSvName(e.target.value)}
                        placeholder="e.g., Rajesh Patro"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-blue-600 focus:bg-white focus:outline-none transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active Mobile Number</label>
                      <input
                        type="tel"
                        value={svPhone}
                        onChange={(e) => setSvPhone(e.target.value)}
                        placeholder="e.g., +91 94370 XXXXX"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-blue-600 focus:bg-white focus:outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="sm:col-span-2">
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email (Optional)</label>
                      <input
                        type="email"
                        value={svEmail}
                        onChange={(e) => setSvEmail(e.target.value)}
                        placeholder="e.g., homebuyer@gmail.com"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-blue-600 focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Select Target Project</label>
                      <select
                        value={svProject}
                        onChange={(e) => setSvProject(e.target.value)}
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-blue-600 focus:bg-white focus:outline-none transition-all cursor-pointer"
                      >
                        {PROJECTS_DATA.map((proj) => (
                          <option key={proj.id} value={proj.name}>{proj.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Preferred Date</label>
                      <input
                        type="date"
                        value={svDate}
                        onChange={(e) => setSvDate(e.target.value)}
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-blue-600 focus:bg-white focus:outline-none transition-all cursor-pointer"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Preferred Timing Slot</label>
                      <select
                        value={svTime}
                        onChange={(e) => setSvTime(e.target.value)}
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-blue-600 focus:bg-white focus:outline-none transition-all cursor-pointer"
                      >
                        <option value="09:00 AM - 11:00 AM">Morning (09:00 AM - 11:00 AM)</option>
                        <option value="11:00 AM - 01:00 PM">Noon (11:00 AM - 01:00 PM)</option>
                        <option value="02:00 PM - 04:00 PM">Afternoon (02:00 PM - 04:00 PM)</option>
                        <option value="04:00 PM - 06:00 PM">Evening (04:00 PM - 06:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white py-3.5 text-sm font-bold shadow-sm transition-all cursor-pointer"
                    id="sv-submit-btn"
                  >
                    <CalendarCheck className="h-4 w-4" />
                    <span>Schedule Private Site Visit</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
