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

export const projects: Project[] = [
  {
    id: "1",
    title: "Kilwa Road Expansion Phase II",
    category: "Construction",
    client: "TANROADS",
    location: "Dar es Salaam",
    year: "2024",
    description: "Major structural enhancement and road expansion to improve traffic flow in the southern corridor of Dar es Salaam.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&q=80",
    featured: true,
  },
  {
    id: "2",
    title: "Mining Equipment Port Clearance",
    category: "Clearing",
    client: "Geita Gold Mine",
    location: "Dar es Salaam Port",
    year: "2023",
    description: "Successfully cleared and forwarded heavy-duty mining machinery through Dar es Salaam Port within record time, ensuring zero downtime for the client.",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80",
    featured: true,
  },
  {
    id: "3",
    title: "Eco-Logic Logistics Network",
    category: "Logistics",
    client: "East Africa Green Energy",
    location: "Regional (TZ, UG, KE)",
    year: "2024",
    description: "Multi-border specialized logistics for renewable energy components, including solar panels and wind turbine sections.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    featured: true,
  },
  {
    id: "4",
    title: "Corporate Summit Hospitality",
    category: "Hospitality",
    client: "Investment Promotion Center",
    location: "Julius Nyerere Intl. Convention Centre",
    year: "2023",
    description: "End-to-end hospitality management for the 2023 East Africa Investment Summit, catering to over 500 regional delegates.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
  },
  {
    id: "5",
    title: "Dar Night Marathon Entertainment",
    category: "Entertainment",
    client: "City Council",
    location: "Dar es Salaam",
    year: "2023",
    description: "Full event production including sound, lighting, and cultural performances for the city's premier night-time sporting event.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
  },
  {
    id: "6",
    title: "Heavy Machinery Supply Contract",
    category: "Supply",
    client: "Infrastructure Development Authority",
    location: "Dodoma",
    year: "2024",
    description: "Procurement and supply of critical industrial materials and heavy-duty machinery for governmental infrastructure projects.",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ec3?w=800&q=80",
  },
];
