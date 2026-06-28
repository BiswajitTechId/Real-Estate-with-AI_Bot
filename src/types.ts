export type ProjectStatus = 'ongoing' | 'completed' | 'upcoming';

export interface Amenity {
  name: string;
  iconName: string; // references lucide icon names
}

export interface FloorPlan {
  title: string;
  bhk: string;
  size: string;
  layoutType: 'type-a' | 'type-b' | 'type-c'; // to draw custom SVG diagrams dynamically
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  location: string;
  address: string;
  rera: string;
  priceRange: string;
  configurations: string[]; // e.g., ["2 BHK", "3 BHK"]
  sizes: string; // e.g., "1050 - 1580 Sq.Ft."
  amenities: Amenity[];
  highlights: string[];
  images: string[];
  floorPlans: FloorPlan[];
  completionDate: string;
  googleMapEmbedUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  project: string;
  date: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface GalleryCategory {
  id: string;
  name: string;
}

export interface GalleryItem {
  id: string;
  category: string;
  image: string;
  caption: string;
}
