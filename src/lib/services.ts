export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  icon: string;
  heroImage: string;
}

export const services: Service[] = [
  {
    slug: "construction",
    title: "Construction Works",
    shortDescription:
      "Expert construction services for commercial, residential, and infrastructure projects across Tanzania.",
    longDescription:
      "Cmakey Company Limited delivers high-quality construction works from the ground up. Our experienced team handles everything from site preparation and structural engineering to interior finishing, ensuring every project meets international standards while respecting local building codes and community needs.",
    features: [
      "Commercial & residential building construction",
      "Infrastructure and civil works",
      "Renovation & refurbishment projects",
      "Project management and supervision",
      "Quality assurance and compliance",
      "Site planning and feasibility studies",
    ],
    icon: "🏗️",
    heroImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
  },
  {
    slug: "hospitality",
    title: "Hospitality Services",
    shortDescription:
      "Premier hospitality solutions covering accommodation, catering, and event management in Dar es Salaam.",
    longDescription:
      "Our hospitality division provides world-class services across accommodation, catering, conference facilities, and event management. We combine warm Tanzanian hospitality with international service standards to create memorable experiences for guests and clients alike.",
    features: [
      "Hotel and accommodation management",
      "Catering and food services",
      "Conference and event planning",
      "Corporate hospitality packages",
      "Staff training and management",
      "Venue setup and decoration",
    ],
    icon: "🏨",
    heroImage:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80",
  },
  {
    slug: "entertainment",
    title: "Entertainment Services",
    shortDescription:
      "Dynamic entertainment solutions for events, corporate functions, and cultural celebrations.",
    longDescription:
      "Cmakey's entertainment division brings creativity and professionalism to every occasion. From corporate events and product launches to cultural festivals and private parties, we provide end-to-end entertainment solutions that captivate audiences and leave lasting impressions.",
    features: [
      "Event production and management",
      "Live entertainment booking",
      "Audio-visual and staging equipment",
      "Corporate team-building activities",
      "Cultural and traditional events",
      "Brand activation campaigns",
    ],
    icon: "🎭",
    heroImage:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80",
  },
  {
    slug: "clearing",
    title: "Clearing & Forwarding",
    shortDescription:
      "Efficient customs clearance and freight forwarding services through all Tanzanian ports and borders.",
    longDescription:
      "Navigate Tanzania's import and export regulations with confidence. Our clearing and forwarding experts handle all customs documentation, duty assessments, and port procedures—ensuring your cargo moves smoothly through Dar es Salaam Port and border crossings without unnecessary delays.",
    features: [
      "Customs documentation and filing",
      "Import and export clearance",
      "Duty and tax assessment support",
      "Port handling and inspection liaison",
      "Freight forwarding coordination",
      "Compliance with TCRA and TRA regulations",
    ],
    icon: "📦",
    heroImage:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80",
  },
  {
    slug: "logistics",
    title: "Logistics Services",
    shortDescription:
      "Comprehensive logistics and supply chain management for businesses of all sizes.",
    longDescription:
      "From first-mile collection to last-mile delivery, Cmakey's logistics arm powers seamless supply chains across Tanzania and the East African region. We combine a modern fleet, experienced drivers, and robust tracking systems to ensure your goods arrive on time, every time.",
    features: [
      "Road freight and haulage",
      "Warehousing and distribution",
      "Fleet management services",
      "Cold-chain logistics",
      "Real-time cargo tracking",
      "Cross-border transportation",
    ],
    icon: "🚛",
    heroImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
  },
  {
    slug: "supply",
    title: "General Material Supply",
    shortDescription:
      "Reliable procurement and supply of general materials, equipment, and consumables.",
    longDescription:
      "Cmakey acts as a trusted procurement partner, sourcing and supplying a diverse range of materials—from construction supplies and industrial equipment to office consumables and perishables. Our supplier network ensures competitive pricing, quality assurance, and timely delivery.",
    features: [
      "Construction materials and hardware",
      "Office supplies and consumables",
      "Industrial and mechanical equipment",
      "Procurement and sourcing services",
      "Bulk supply agreements",
      "Quality inspection before delivery",
    ],
    icon: "🔩",
    heroImage:
      "https://images.unsplash.com/photo-1565138163291-2aa5a2c0f5aa?w=1200&q=80",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
