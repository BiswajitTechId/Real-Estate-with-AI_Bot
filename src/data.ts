import { Project, FAQItem, TimelineItem, Testimonial, TeamMember, GalleryItem, GalleryCategory } from './types';

// Image paths from asset generation
export const HERO_BANNER_IMAGE = "/src/assets/images/tilak_hero_banner_1782575538948.jpg";
export const INTERIOR_IMAGE_1 = "/src/assets/images/tilak_interior_1782575556574.jpg";

// Curated high-quality, professional CDN images representing construction, completed facades, site visits, and team
export const PROJECTS_DATA: Project[] = [
  {
    id: "tilak-heights",
    name: "Tilak Heights",
    tagline: "Ultra-Modern 2 & 3 BHK Apartments with Panoramas of Berhampur",
    description: "Tilak Heights sets a new benchmark for upscale high-rise living in Berhampur. Featuring modern earthquake-resistant structural engineering, premium vitrified tile finishes, spacious double-balconies, and state-of-the-art safety systems. Located at the prime junction of Ram Nagar, it offers rapid access to top educational institutions and healthcare centers.",
    status: "ongoing",
    location: "Ram Nagar, Berhampur",
    address: "Plot No. 402, Ram Nagar Main Road, Near MKCG Medical College, Berhampur, Odisha - 760001",
    rera: "RP/15/2025/00742 (Registered under Odisha RERA)",
    priceRange: "₹48.5 Lakhs - ₹72.0 Lakhs",
    configurations: ["2 BHK", "3 BHK"],
    sizes: "1180 - 1650 Sq.Ft.",
    amenities: [
      { name: "Premium Rooftop Garden", iconName: "Trees" },
      { name: "24/7 Multi-tier Security & CCTV", iconName: "ShieldCheck" },
      { name: "Fully Equipped Fitness Hub", iconName: "Dumbbell" },
      { name: "Continuous Power Backup", iconName: "Zap" },
      { name: "Intercom & Firefighting Systems", iconName: "PhoneCall" },
      { name: "High-Speed Dual Elevators", iconName: "ArrowUpDown" },
      { name: "Dedicated EV Charging Station", iconName: "BatteryCharging" }
    ],
    highlights: [
      "Just 3 minutes drive to MKCG Medical College",
      "Vastu-compliant architectural planning for every flat",
      "Stunning 360-degree panoramic skyline views from private balconies",
      "Secured covered stilt parking space with modular slots",
      "Abundant groundwater supply supplemented by modern rainwater harvesting"
    ],
    images: [
      HERO_BANNER_IMAGE,
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      INTERIOR_IMAGE_1,
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    ],
    floorPlans: [
      { title: "Standard 2 BHK Layout", bhk: "2 BHK", size: "1180 Sq.Ft.", layoutType: "type-a" },
      { title: "Premium 3 BHK Deluxe Layout", bhk: "3 BHK", size: "1650 Sq.Ft.", layoutType: "type-b" }
    ],
    completionDate: "December 2026",
    googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15024.184377017666!2d84.79373981180145!3d19.313498305007328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d4cd3d639c63b%3A0xe5c33190df0353c7!2sRam%20Nagar%2C%20Brahmapur%2C%20Odisha!5e0!3m2!1sen!2sin!4v1703650000000!5m2!1sen!2sin"
  },
  {
    id: "tilak-imperial",
    name: "Tilak Imperial",
    tagline: "Exclusive Luxury Living Near Engineering School Junction",
    description: "A super-premium gated community consisting of exceptionally crafted 3 and 4 BHK luxury residences. Built with high-grade Tata steel and premium ACC cement, Tilak Imperial combines luxury lifestyle features with rock-solid durability. Positioned in a serene yet highly connected neighborhood.",
    status: "ongoing",
    location: "Engineering School Road, Berhampur",
    address: "Near Engineering School Road, Khodasingi, Berhampur, Odisha - 760010",
    rera: "RP/15/2024/00611 (Registered under Odisha RERA)",
    priceRange: "₹65.0 Lakhs - ₹95.0 Lakhs",
    configurations: ["3 BHK", "4 BHK"],
    sizes: "1550 - 2100 Sq.Ft.",
    amenities: [
      { name: "State-of-the-art Clubhouse", iconName: "Home" },
      { name: "Premium Gymnasium", iconName: "Dumbbell" },
      { name: "Jogging & Walking Track", iconName: "Footprints" },
      { name: "Children's Safe Play Area", iconName: "Baby" },
      { name: "Intercom & Audio Safety", iconName: "Mic" },
      { name: "Rainwater Harvesting Infrastructure", iconName: "CloudRain" },
      { name: "High-Security CCTV Perimeter", iconName: "Eye" }
    ],
    highlights: [
      "Located directly on the prime Engineering School Road",
      "Only 5 minutes from National Highway-16 access point",
      "Fully integrated fire safety system with dedicated water storage",
      "Underground drainage with an eco-friendly sewage treatment unit",
      "Branded sanitaryware (Jaguar / Cera) and premium electric fittings"
    ],
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
      INTERIOR_IMAGE_1,
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"
    ],
    floorPlans: [
      { title: "Imperial 3 BHK Layout", bhk: "3 BHK", size: "1550 Sq.Ft.", layoutType: "type-b" },
      { title: "Royal 4 BHK Penthouse", bhk: "4 BHK", size: "2100 Sq.Ft.", layoutType: "type-c" }
    ],
    completionDate: "June 2027",
    googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3755.974950292723!2d84.814322!3d19.324831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d4ceea3e2f5ff%3A0xb30e32230198f6d!2sEngineering%20School%20Road%20Brahmapur%20Odisha!5e0!3m2!1sen!2sin!4v1703651000000!5m2!1sen!2sin"
  },
  {
    id: "tilak-residency",
    name: "Tilak Residency",
    tagline: "Berhampur's Pioneer Completed Modern Residential Marvel",
    description: "Completed with absolute perfection, Tilak Residency remains one of the most sought-after residential addresses in Gandhinagar, Berhampur. Representing architectural brilliance and exceptional maintenance, this project has been fully handed over to 110+ extremely satisfied families.",
    status: "completed",
    location: "Gandhinagar, Berhampur",
    address: "Biju Patnaik Lane, Gandhi Nagar 5th Line, Berhampur, Odisha - 760001",
    rera: "RP/15/2018/00201 (Completed & Handed Over)",
    priceRange: "₹42.0 Lakhs - ₹58.0 Lakhs (Resale & Limited Developer Inventory)",
    configurations: ["2 BHK", "3 BHK"],
    sizes: "1050 - 1480 Sq.Ft.",
    amenities: [
      { name: "Community Multi-Purpose Hall", iconName: "Users" },
      { name: "Elevator Service with Backup", iconName: "ArrowUpDown" },
      { name: "24-Hour Active Security", iconName: "Shield" },
      { name: "Dedicated Car Parking", iconName: "Car" },
      { name: "Centralized Water Treatment", iconName: "Droplet" }
    ],
    highlights: [
      "100% Occupied - Vibrant community of local families",
      "Immediate possession & quick title transfer registration",
      "Located in Gandhinagar, the cultural and commercial heart of Berhampur",
      "Approved and verified by major nationalized banks for immediate loans",
      "Excellent rental yield and capital appreciation since handover"
    ],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    ],
    floorPlans: [
      { title: "Classic 2 BHK Standard", bhk: "2 BHK", size: "1050 Sq.Ft.", layoutType: "type-a" },
      { title: "Grand 3 BHK Executive", bhk: "3 BHK", size: "1480 Sq.Ft.", layoutType: "type-b" }
    ],
    completionDate: "October 2021",
    googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15024.167098485494!2d84.7925112!3d19.3137912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d4cd3d40cb97b%3A0x63eb3717fc8a5f8!2sGandhi%20Nagar%2C%20Brahmapur%2C%20Odisha!5e0!3m2!1sen!2sin!4v1703652000000!5m2!1sen!2sin"
  },
  {
    id: "tilak-enclave",
    name: "Tilak Enclave",
    tagline: "Serene & Comfortable Family Smart Living at Lochapada",
    description: "A tranquil gated escape that keeps you remarkably close to the city center. Tilak Enclave offers exceptionally airy, dual-aspect apartments surrounded by pristine green open areas, making it perfect for retirees and young, growing families alike.",
    status: "completed",
    location: "Lochapada, Berhampur",
    address: "Lochapada Road, Near Hanuman Temple, Berhampur, Odisha - 760001",
    rera: "RP/15/2020/00345 (Completed & Handed Over)",
    priceRange: "₹38.0 Lakhs - ₹55.0 Lakhs",
    configurations: ["2 BHK", "3 BHK"],
    sizes: "1100 - 1500 Sq.Ft.",
    amenities: [
      { name: "Beautiful Landscaped Garden", iconName: "Trees" },
      { name: "Children's Play Zone", iconName: "Smile" },
      { name: "Continuous CCTV Protection", iconName: "Eye" },
      { name: "Secure Underground Parking", iconName: "Inbox" },
      { name: "Intercom Facility", iconName: "Phone" }
    ],
    highlights: [
      "Completed and occupied by 85 happy local families",
      "Peaceful residential zone away from central city traffic congestion",
      "Direct municipal water line connection + deep borewell systems",
      "Close proximity to prestigious regional schools and shopping hubs",
      "Impeccably maintained campus with highly active Resident Welfare Association"
    ],
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    ],
    floorPlans: [
      { title: "Standard 2 BHK Layout", bhk: "2 BHK", size: "1100 Sq.Ft.", layoutType: "type-a" },
      { title: "Standard 3 BHK Layout", bhk: "3 BHK", size: "1500 Sq.Ft.", layoutType: "type-b" }
    ],
    completionDate: "May 2023",
    googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15024.167098485494!2d84.7700000!3d19.3000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d4ca6b05bfda9%3A0xbc4e52bf3cb6cbfe!2sLochapada%2C%20Brahmapur%2C%20Odisha!5e0!3m2!1sen!2sin!4v1703653000000!5m2!1sen!2sin"
  }
];

export const FUTURE_VENTURES = [
  {
    name: "Tilak Serene Villas",
    location: "Gopalpur Road, Berhampur",
    description: "An ultra-premium enclave of luxury boutique villas offering unparalleled privacy, private pools, landscaped lawns, and smart automation systems. Designed for sophisticated living, just 10 minutes away from the golden sands of Gopalpur beach.",
    timeline: "Planning Stage (RERA Filing in Progress)",
    type: "Premium Residential Villas"
  },
  {
    name: "Tilak Commercial Hub",
    location: "New Bus Stand Junction, Berhampur",
    description: "A futuristic commercial hub tailored for banks, premium corporate offices, medical chambers, and international luxury retail brands. Featuring centrally managed HVAC, heavy-duty capsule elevators, and extensive multi-level basement car parking.",
    timeline: "RERA Registration Scheduled for Q4 2026",
    type: "Premium Commercial Complex"
  }
];

export const STATS_DATA = [
  { label: "Years of Trust & Excellence", value: "18+", subtitle: "Established in 2008" },
  { label: "Happy Local Families", value: "450+", subtitle: "Living in Tilak Communities" },
  { label: "Completed Projects", value: "12+", subtitle: "Residential Developments" },
  { label: "On-Time Delivery Record", value: "100%", subtitle: "Zero Project Delay History" },
  { label: "Approved Partner Banks", value: "8+", subtitle: "Hassle-free Loan Assistance" }
];

export const TRUST_POINTS = [
  {
    title: "Established Since 2008",
    description: "For nearly two decades, we have been driving Berhampur's urban transition, backed by rock-solid values and local accountability.",
    iconName: "CalendarDays"
  },
  {
    title: "Odisha RERA Registered",
    description: "Every ongoing Tilak project strictly complies with ORERA regulations, ensuring 100% legal clarity and document transparency.",
    iconName: "ShieldAlert"
  },
  {
    title: "A+ Grade Construction",
    description: "We use only highly certified raw materials—Tata Steel, ACC Cement, premium electric switches, and Jaguar bath fittings.",
    iconName: "Award"
  },
  {
    title: "Timely Delivery Guarantee",
    description: "We work with efficient, fully systemized project timelines. Our 100% on-time record is a testament to our operational focus.",
    iconName: "Hourglass"
  },
  {
    title: "Clear, Transparent Titles",
    description: "We offer completely litigation-free projects with exhaustive structural safety certifications and direct bank approvals.",
    iconName: "FileCheck2"
  },
  {
    title: "Unmatched Post-Sale Care",
    description: "We do not step away after key handover. Our dedicated customer desk assists in maintaining properties for years to come.",
    iconName: "Headphones"
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  { year: "2008", title: "Inception in Silk City", description: "Tilak Homes was founded by Sri Rajesh Patro in Berhampur with a vision to build safe, high-quality residential spaces at transparent price points." },
  { year: "2012", title: "Pioneering Multi-Story Structures", description: "Successfully designed and delivered 'Tilak Mansion', introducing Berhampur's first residential campus featuring automated high-speed elevator services." },
  { year: "2016", title: "150+ Milestones Handed Over", description: "Completed two major residential complexes ahead of the promised construction schedule, earning deep respect and trust from Berhampur families." },
  { year: "2018", title: "The Gandhinagar Benchmark", description: "Launched 'Tilak Residency' in Gandhinagar, setting a benchmark for luxury aesthetics and premium vitrified tiling standards in South Odisha." },
  { year: "2021", title: "RERA Adoption & Systemization", description: "Successfully navigated regulatory changes by adopting Odisha RERA protocols 100%, fully establishing client-first legal transparency." },
  { year: "2024", title: "Smart-Living Expansion", description: "Launched Tilak Heights & Tilak Imperial, incorporating modern earthquake-resistant framing, EV charging stations, and rooftop landscaping." }
];

export const CORE_VALUES = [
  { title: "Unmatched Integrity", description: "No hidden charges, no unapproved alterations. Everything promised in the agreement is delivered with absolute architectural precision." },
  { title: "Rooted Local Expertise", description: "We belong to Berhampur. We understand the local soil conditions, groundwater trends, wind speeds, and cultural requirements." },
  { title: "Premium Workmanship", description: "We believe a home is a permanent legacy. Our structural concrete grades, electric circuits, and sanitary installations endure for generations." },
  { title: "Customer Centricity", description: "We design structures keeping everyday functional convenience in mind—Vastu compliance, natural wind channels, and spacious utility spaces." }
];

export const PARTNER_BANKS = [
  { name: "State Bank of India (SBI)", logoText: "SBI Approved" },
  { name: "HDFC Bank", logoText: "HDFC Approved" },
  { name: "ICICI Bank", logoText: "ICICI Approved" },
  { name: "LIC Housing Finance", logoText: "LIC HFL Approved" },
  { name: "Canara Bank", logoText: "Canara Approved" },
  { name: "Axis Bank", logoText: "Axis Approved" }
];

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  { id: 'all', name: 'Show All Photos' },
  { id: 'exterior', name: 'Building Exteriors' },
  { id: 'interior', name: 'Apartment Interiors' },
  { id: 'progress', name: 'Construction Progress' },
  { id: 'possession', name: 'Handover Ceremonies' },
  { id: 'team', name: 'Office & Management' }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g1",
    category: "exterior",
    image: HERO_BANNER_IMAGE,
    caption: "Dynamic street view of Tilak Heights during finishing stages"
  },
  {
    id: "g2",
    category: "interior",
    image: INTERIOR_IMAGE_1,
    caption: "Vast, open living room with elegant vitrified tiles and dynamic lighting fixtures"
  },
  {
    id: "g3",
    category: "exterior",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    caption: "Stunning modern facade of completed Tilak Residency"
  },
  {
    id: "g4",
    category: "progress",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    caption: "Quality concrete casting checks using high-grade Tata steel reinforcements"
  },
  {
    id: "g5",
    category: "possession",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    caption: "A happy family receiving their apartment keys during our annual possession ceremony"
  },
  {
    id: "g6",
    category: "interior",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
    caption: "Bright bedroom layouts with full-height ventilation and structural safety clearances"
  },
  {
    id: "g7",
    category: "team",
    image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=800&q=80",
    caption: "Tilak Homes' main corporate office in Ram Nagar, welcoming prospective homeowners"
  },
  {
    id: "g8",
    category: "progress",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    caption: "Underground column curing checks executed under professional structural supervisors"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Dr. Alok K. Panigrahy",
    role: "Senior Consultant, MKCG Medical College",
    text: "As a doctor at MKCG, proximity to the hospital was crucial. Tilak Heights offered the perfect location in Ram Nagar. The construction quality is superb, and they were 100% transparent with documentation. I highly recommend them to anybody looking for stress-free living.",
    rating: 5,
    project: "Tilak Heights (Ongoing)",
    date: "March 2026"
  },
  {
    id: "t2",
    name: "Smt. Lopamudra Patnaik",
    role: "Retired Principal, Berhampur",
    text: "We purchased a 3 BHK flat in Tilak Residency back in 2021. Even after 5 years, the structural concrete, outer plastering, and lift services operate in absolute perfect order. The water supply is clean and their community planning has made our retirement peaceful.",
    rating: 5,
    project: "Tilak Residency (Completed)",
    date: "January 2026"
  },
  {
    id: "t3",
    name: "Er. Debashis Tripathy",
    role: "Software Architect & NRI (Berhampur Native)",
    text: "Buying a flat while living abroad is usually a nightmare. However, Tilak Homes provided monthly photographic progress updates. My family back home visited the site and was deeply impressed by the ACC cement brands used and Tata reinforcement. Transparent and fully professional.",
    rating: 5,
    project: "Tilak Imperial (Ongoing)",
    date: "May 2026"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "Loans & Finance",
    question: "Are your projects approved by nationalized banks for home loans?",
    answer: "Yes, 100%. All Tilak Homes projects are pre-approved by prominent financial institutions, including the State Bank of India (SBI), HDFC, ICICI, LIC Housing Finance, and Canara Bank. Our dedicated desk handles all documentation to ensure hassle-free loan sanctioning."
  },
  {
    id: "faq-2",
    category: "Legal & RERA",
    question: "Do you have valid Odisha RERA registrations and title clearances?",
    answer: "Absolutely. Legal compliance is our primary core value. Every ongoing development is registered under Odisha RERA with public registry listings. We possess clear land deeds, non-encumbrance certifications, fire safety NOCs, and structural stability certificates from certified engineers."
  },
  {
    id: "faq-3",
    category: "Booking & Pricing",
    question: "What is the detailed booking process and payment schedule?",
    answer: "The process is simple: 1) Schedule a site visit with our manager. 2) Choose your desired block, floor, and flat number. 3) Block the unit with an initial token booking deposit (₹2 Lakhs). 4) Sign the standard Agreement for Sale. 5) Make construction-linked installment payments as slab casting milestones are met."
  },
  {
    id: "faq-4",
    category: "Amenities & Structure",
    question: "What concrete grades, reinforcement brands, and fixtures do you use?",
    answer: "We employ M20/M25 concrete grades with standard Fe500 Tata Tiscon/Kamdhenu Steel. Outer walls are built with premium weatherproofing paint and robust plaster. Plumbing utilizes Supreme pipes, while bathroom sanitaryware is sourced from premium Cera or Jaguar fittings."
  },
  {
    id: "faq-5",
    category: "Possession & Transfer",
    question: "What is your historical delay record and what happens during handovers?",
    answer: "Since 2008, we have maintained a proud 100% on-time completion record across 12 completed residential blocks. During handover, we supply the Occupancy Certificate (OC), structural safety blueprints, direct utility connection registers, and hand over a legally clean property deed."
  }
];

export const INVEST_BERHAMPUR_REASONS = [
  {
    title: "Educational & Healthcare Nucleus",
    description: "Berhampur is the established educational hub of South Odisha, housing MKCG Medical College, Khallikote University, and prestigious research parks."
  },
  {
    title: "Proximity to Gopalpur Port & Tourism",
    description: "Just 12 km from the expanding Gopalpur Deepwater Port and beautiful tourist beaches, creating significant industrial growth and real estate rental yields."
  },
  {
    title: "Affordable Coastal Living",
    description: "Offers the pristine climate of a coastal zone but at a fraction of the real estate acquisition costs of Bhubaneswar or Cuttack, with massive capital growth space."
  },
  {
    title: "Smart Infrastructure Connectivity",
    description: "Equipped with wide multi-lane internal roads, a major commercial railway junction, and rapidly expanding urban green belts."
  }
];

export const CONTACT_COORDINATES = {
  phone: "+91 94370 20853",
  whatsapp: "+919437020853",
  email: "info@tilakhomes.com",
  officeAddress: "Tilak Homes, 1st Floor, Tilak Plaza, Ram Nagar Main Road, Berhampur, Odisha - 760001",
  timing: "Monday to Sunday (9:00 AM - 8:00 PM)",
  founderName: "Sri Rajesh Patro",
  founderTitle: "Founder & Managing Director",
  founderQuote: "Since 2008, our mission has been simple: to build high-quality, legally bulletproof homes in Berhampur that common families can buy with pride and live in with absolute peace of mind."
};
