export interface Service {
  slug: string;
  title: string;
  icon: string;
  heroImage: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: "Construction" | "Logistics" | "Hospitality" | "Entertainment" | "Clearing" | "Supply";
  client: string;
  location: string;
  year: string;
  description: string;
  image: string;
  featured?: boolean;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  service: string;
  message: string;
  createdAt: string;
  read: boolean;
}

export interface Activity {
  id: string;
  type: "system" | "project" | "service" | "message" | "auth";
  action: string;
  timestamp: string;
  details: string;
}

export interface AdminProfile {
  username: string;
  password?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  order?: number;
}
