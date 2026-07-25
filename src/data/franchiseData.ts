/* ---------------------------------------------------------------------
   IMAGE PLACEHOLDER PATHS
   Drop your real files into the matching folder under /public/assets/
   using the exact file name below, and they'll appear automatically —
   no code changes needed. Until then, a neat placeholder box is shown.
--------------------------------------------------------------------- */

export const HERO_VIDEO_SRC = "/assets/hero/hero-bg.mp4";

export type WhyUsItem = { title: string; text: string; image: string };

export const WHY_US_HERO_IMAGE = "/assets/why-us/complete-agriculture-ecosystem.jpg";

export const WHY_US: WhyUsItem[] = [
  {
    title: "Proven Supply Chain",
    text: "Access verified seeds, crop inputs and organic produce straight from IGO's own farms and manufacturing units — no middlemen markups.",
    image: "/assets/why-us/proven-supply-chain.jpg",
  },
  {
    title: "Data-Backed Site Selection",
    text: "We help you pick your location using demand mapping from our 100+ city delivery and dealer network.",
    image: "/assets/why-us/data-backed-site-selection.jpg",
  },
  {
    title: "Hands-On Training",
    text: "A structured onboarding program covering operations, agri-product knowledge, and customer handling before you open doors.",
    image: "/assets/why-us/hands-on-training.jpg",
  },
  {
    title: "Dedicated Field Manager",
    text: "Every franchisee is paired with an IGO regional manager for the first 12 months of operations.",
    image: "/assets/why-us/dedicated-field-manager.jpg",
  },
  {
    title: "Financing Support",
    text: "Guidance on loans, NBFC tie-ups and government agri-subsidy schemes to ease your initial investment.",
    image: "/assets/why-us/financing-support.jpg",
  },
  {
    title: "Multi-Vertical Path",
    text: "Start with one unit and expand into adjacent IGO verticals as your first franchise matures.",
    image: "/assets/why-us/multi-vertical-path.jpg",
  },
];

/** The IGO Group's brand verticals — shown in both the products carousel and the verticals grid. */
export type Brand = { name: string; image: string; comingSoon?: boolean };

export const BRANDS: Brand[] = [
  { name: "IGO Agritech Farms", image: "/assets/brands/igo-agritech-farms.jpg" },
  { name: "Farmers Factory", image: "/assets/brands/igo-farmers-factory.jpg" },
  { name: "Valluvam", image: "/assets/brands/valluvam.jpg" },
  { name: "IGO Protein Cuts", image: "/assets/brands/igo-protein-cuts.jpg" },
  { name: "IGO Agri Mart", image: "/assets/brands/igo-agri-mart.jpg" },
  { name: "IGO Nursery", image: "/assets/brands/igo-nursery.jpg" },
  { name: "IGO Palm Cafe", image: "/assets/brands/igo-palm-cafe.jpg" },
  { name: "IGO Exports & Imports", image: "/assets/brands/igo-exports-imports.jpg" },
  { name: "IGO Tech Farming Foundation", image: "/assets/brands/igo-tech-farming-foundation.jpg" },
  { name: "IGO Mart", image: "/assets/brands/igo-mart.jpg" },
  { name: "IGO Fintech", image: "/assets/brands/igo-financial-services.jpg" },
  { name: "IGO Farmgate Mandi", image: "/assets/brands/igo-farmgate-mandi.jpg" },
  { name: "IGO Franchise", image: "/assets/brands/igo-franchise.jpg" },
  { name: "IGO Crop Care", image: "/assets/brands/igo-crop-care.jpg" },
  { name: "IGO Farm Land Estates", image: "/assets/brands/igo-agri-estate.jpg" },
  { name: "IGO Wealth Management", image: "/assets/brands/igo-wealth-management.jpg" },
  { name: "IGO Organic Pharmacy", image: "/assets/brands/igo-organic-pharmacy.jpg" },
  { name: "IGO Natural Cosmetics", image: "/assets/brands/igo-natural-cosmetics.jpg" },
  { name: "IGO Farm Factories", image: "/assets/brands/igo-farm-factories.jpg" },
  { name: "India Green", image: "/assets/brands/india-green.jpg" },
  { name: "India Green Organics", image: "/assets/brands/india-green-organics.jpg" },
  { name: "IGO Farm Loans & Grants", image: "/assets/brands/igo-farm-loans.jpg" },
  { name: "IGO Academy", image: "/assets/brands/igo-academy.jpg" },
  { name: "Farm Automation", image: "/assets/brands/farm-automation.jpg" },
  { name: "IGO Financial Services", image: "/assets/brands/igo-financial-services.jpg" },
  { name: "IGO Agri Estate", image: "/assets/brands/igo-agri-estate.jpg" },
  { name: "India Green Organic", image: "/assets/brands/india-green-organics.jpg" },
];

/** Full 27-brand dataset with category, description, status and link */
export type IGO27Brand = {
  name: string;
  category: string;
  description: string;
  image: string;
  status: "active" | "dev";
  statusLabel: string;
  link: string;
};

export const IGO_27_BRANDS: IGO27Brand[] = [
  {
    name: "IGO Agritech Farms",
    category: "Core Business",
    description: "Leading agricultural engineering and infrastructure development for modern tech-enabled farming across India.",
    image: "/assets/brands/igo-agritech-farms.jpg",
    status: "active",
    statusLabel: "Active Division",
    link: "https://famersfactory.com",
  },
  {
    name: "Farmers Factory",
    category: "Processing & Mfg",
    description: "State-of-the-art food processing and manufacturing division delivering pure, fresh, organic products directly to consumers.",
    image: "/assets/brands/igo-farmers-factory.jpg",
    status: "active",
    statusLabel: "Active Division",
    link: "https://famersfactory.com",
  },
  {
    name: "Valluvam",
    category: "Agri Consultancy",
    description: "Expert agricultural consultancy providing strategic guidance, research, and sustainable farming methodologies.",
    image: "/assets/brands/valluvam.jpg",
    status: "active",
    statusLabel: "Active Division",
    link: "https://famersfactory.com",
  },
  {
    name: "Protein Cuts",
    category: "Farm-to-Table",
    description: "Premium quality, ethically sourced meat and protein products delivered fresh from our trusted network of farms.",
    image: "/assets/brands/igo-protein-cuts.jpg",
    status: "active",
    statusLabel: "Active Division",
    link: "https://famersfactory.com",
  },
  {
    name: "IGO Agri Mart",
    category: "Distribution",
    description: "Comprehensive agricultural distribution network supplying seeds, fertilizers, and essential farming equipment.",
    image: "/assets/brands/igo-agri-mart.jpg",
    status: "active",
    statusLabel: "Active Division",
    link: "https://igocropcare.com/products",
  },
  {
    name: "IGO Nursery",
    category: "Plant Propagation",
    description: "Advanced plant propagation center offering high-yield saplings and organic seedlings for commercial farming.",
    image: "/assets/brands/igo-nursery.jpg",
    status: "active",
    statusLabel: "Active Division",
    link: "https://famersfactory.com",
  },
  {
    name: "Palm Cafe",
    category: "F&B",
    description: "Farm-to-cafe dining experience showcasing our fresh produce through healthy, sustainable culinary creations.",
    image: "/assets/brands/igo-palm-cafe.jpg",
    status: "active",
    statusLabel: "Active Division",
    link: "https://famersfactory.com",
  },
  {
    name: "IGO Exports & Imports",
    category: "Trade",
    description: "International trade division connecting Indian agri products to global markets and bringing world-class inputs to India.",
    image: "/assets/brands/igo-exports-imports.jpg",
    status: "active",
    statusLabel: "Active Division",
    link: "https://famersfactory.com",
  },
  {
    name: "IGO Tech Farming Foundation",
    category: "Foundation",
    description: "Research and education foundation advancing agri-science and technology for the next generation of tech farming.",
    image: "/assets/brands/igo-tech-farming-foundation.jpg",
    status: "active",
    statusLabel: "Active Division",
    link: "https://famersfactory.com",
  },
  {
    name: "IGO Mart",
    category: "Retail",
    description: "Supermarket chain offering quality products at accessible prices — part of IGO Group's consumer retail vision.",
    image: "/assets/brands/igo-mart.jpg",
    status: "active",
    statusLabel: "Active Division",
    link: "https://famersfactory.com",
  },
  {
    name: "IGO Fintech",
    category: "Fintech",
    description: "Micro finance unit providing financial support to farmers and agriculture entrepreneurs across India.",
    image: "/assets/brands/igo-financial-services.jpg",
    status: "active",
    statusLabel: "Active Division",
    link: "https://famersfactory.com",
  },
  {
    name: "IGO Farmgate Mandi",
    category: "Programme",
    description: "Direct procurement platform empowering farmers to sell produce straight from the farm gate at fair market prices.",
    image: "/assets/brands/igo-farmgate-mandi.jpg",
    status: "active",
    statusLabel: "Active Division",
    link: "https://famersfactory.com",
  },
  {
    name: "IGO Franchise",
    category: "Franchise",
    description: "Expanding our successful agricultural models through comprehensive franchise partnership opportunities.",
    image: "/assets/brands/igo-franchise.jpg",
    status: "active",
    statusLabel: "Active Division",
    link: "https://www.igofranchise.com",
  },
  {
    name: "IGO Crop Care",
    category: "Agri Input",
    description: "Advanced agricultural input division focusing on organic pest control and sustainable crop protection.",
    image: "/assets/brands/igo-crop-care.jpg",
    status: "dev",
    statusLabel: "In Development",
    link: "https://igocropcare.com",
  },
  {
    name: "IGO Farm Land Estates",
    category: "Real Estate",
    description: "Premier agricultural real estate division specializing in sustainable farm land development and management.",
    image: "/assets/brands/igo-agri-estate.jpg",
    status: "dev",
    statusLabel: "In Development",
    link: "#",
  },
  {
    name: "IGO Wealth Management",
    category: "Investment",
    description: "Expert financial advisory tailored for agricultural investments and rural wealth generation.",
    image: "/assets/brands/igo-wealth-management.jpg",
    status: "dev",
    statusLabel: "In Development",
    link: "#",
  },
  {
    name: "IGO Organic Pharmacy",
    category: "Healthcare",
    description: "Pioneering healthcare division integrating traditional medicinal plants with modern pharmaceutical standards.",
    image: "/assets/brands/igo-organic-pharmacy.jpg",
    status: "dev",
    statusLabel: "In Development",
    link: "#",
  },
  {
    name: "IGO Natural Cosmetics",
    category: "Lifestyle",
    description: "Premium organic beauty and personal care products crafted from naturally sourced farm ingredients.",
    image: "/assets/brands/igo-natural-cosmetics.jpg",
    status: "dev",
    statusLabel: "In Development",
    link: "#",
  },
  {
    name: "IGO Farm Factories",
    category: "Infrastructure",
    description: "Building next-generation agricultural processing facilities for maximum yield and minimum waste.",
    image: "/assets/brands/igo-farm-factories.jpg",
    status: "dev",
    statusLabel: "In Development",
    link: "#",
  },
  {
    name: "India Green",
    category: "Sustainability",
    description: "Dedicated sustainability initiative focusing on environmental conservation and green farming practices.",
    image: "/assets/brands/india-green.jpg",
    status: "dev",
    statusLabel: "In Development",
    link: "#",
  },
  {
    name: "India Green Organics",
    category: "Organic",
    description: "Promoting chemical-free farming and certifying organic produce for national and international markets.",
    image: "/assets/brands/india-green-organics.jpg",
    status: "dev",
    statusLabel: "In Development",
    link: "#",
  },
  {
    name: "IGO Farm Loans & Grants",
    category: "Finance",
    description: "Facilitating financial access, government subsidies, and specialized grants for farmers across India.",
    image: "/assets/brands/igo-farm-loans.jpg",
    status: "dev",
    statusLabel: "In Development",
    link: "#",
  },
  {
    name: "IGO Academy",
    category: "Education",
    description: "Premier agri-education platform offering training, certification, and skill development for modern farmers.",
    image: "/assets/brands/igo-academy.jpg",
    status: "dev",
    statusLabel: "In Development",
    link: "#",
  },
  {
    name: "Farm Automation",
    category: "Engineering",
    description: "Cutting-edge precision agriculture and automation solutions transforming traditional farm operations.",
    image: "/assets/brands/farm-automation.jpg",
    status: "dev",
    statusLabel: "In Development",
    link: "#",
  },
  {
    name: "IGO Financial Services",
    category: "Financial",
    description: "Comprehensive financial solutions bridging the gap between agriculture and modern banking services.",
    image: "/assets/brands/igo-financial-services.jpg",
    status: "dev",
    statusLabel: "In Development",
    link: "#",
  },
  {
    name: "IGO Agri Estate",
    category: "Agri Land",
    description: "Managed agricultural land division offering turnkey farm ownership and professional farm management.",
    image: "/assets/brands/igo-agri-estate.jpg",
    status: "dev",
    statusLabel: "In Development",
    link: "#",
  },
  {
    name: "India Green Organic",
    category: "Organic Trade",
    description: "Connecting certified organic farmers with premium buyers through transparent, fair trade supply chains.",
    image: "/assets/brands/india-green-organics.jpg",
    status: "dev",
    statusLabel: "In Development",
    link: "#",
  },
];

export type ProcessStage = { num: string; title: string; text: string };

export const PROCESS_STAGES: ProcessStage[] = [
  { num: "01", title: "Apply", text: "Submit your city, capital and vertical interest. Let's build your future together." },
  { num: "02", title: "Onboard & Train", text: "Site visit, agreement, and hands-on operations training to get you future-ready." },
  { num: "03", title: "Launch", text: "Store fit-out, opening inventory, and launch marketing to go live with confidence." },
  { num: "04", title: "Grow", text: "Ongoing supply, field support, business insights and reviews to help you scale." },
];

export type ProcessValue = { title: string; text: string };

export const PROCESS_VALUES: ProcessValue[] = [
  { title: "Sustainable by Nature", text: "We grow with nature, not against it." },
  { title: "Partner in Growth", text: "Your success is our long-term mission." },
  { title: "Trust & Transparency", text: "Clear process, strong support, lasting trust." },
  { title: "Future-Ready Network", text: "Technology, training and innovation at every step." },
];

export type Opportunity = {
  id: string;
  name: string;
  category: "retail" | "fnb" | "agri";
  categoryLabel: string;
  icon: string;
  image: string;
  desc: string;
  investment: string;
  format: string;
  breakeven: string;
  includes: string[];
};

export const OPPORTUNITIES: Opportunity[] = [
  {
    id: "agri-mart",
    name: "IGO Agri Mart",
    category: "retail",
    categoryLabel: "Retail",
    icon: "🏬",
    image: "/assets/brands/igo-agri-mart.jpg",
    desc: "A neighbourhood farm-input retail store stocked with seeds, fertilizers and tools.",
    investment: "₹12–18 L",
    format: "500–800 sq.ft",
    breakeven: "14–18 months",
    includes: [
      "Full store setup & branding kit",
      "Opening inventory on consignment",
      "POS + inventory software included",
    ],
  },
  {
    id: "palm-cafe",
    name: "Palm Cafe",
    category: "fnb",
    categoryLabel: "Food & Beverage",
    icon: "☕",
    image: "/assets/brands/igo-palm-cafe.jpg",
    desc: "Farm-to-cafe dining outlet built around IGO's own fresh produce and dairy.",
    investment: "₹22–35 L",
    format: "800–1200 sq.ft",
    breakeven: "18–24 months",
    includes: [
      "Kitchen design & equipment list",
      "Menu, recipes & staff training",
      "Weekly farm-fresh produce supply",
    ],
  },
  {
    id: "igo-nursery",
    name: "IGO Nursery",
    category: "agri",
    categoryLabel: "Plant Propagation",
    icon: "🌿",
    image: "/assets/brands/igo-nursery.jpg",
    desc: "High-yield sapling and organic seedling outlet for commercial and home growers.",
    investment: "₹8–14 L",
    format: "0.5–1 acre",
    breakeven: "12–16 months",
    includes: [
      "Starter saplings & greenhouse setup",
      "Propagation & care training",
      "Buy-back arrangement for surplus stock",
    ],
  },
  {
    id: "farmers-factory",
    name: "Farmers Factory Outlet",
    category: "fnb",
    categoryLabel: "Farm-to-Table",
    icon: "🧺",
    image: "/assets/brands/igo-farmers-factory.jpg",
    desc: "A fresh produce & organic grocery counter sourced daily from IGO partner farms.",
    investment: "₹15–20 L",
    format: "600–900 sq.ft",
    breakeven: "15–20 months",
    includes: [
      "Cold-storage & display fit-out",
      "Daily farm-to-store logistics",
      "Loyalty & delivery app access",
    ],
  },
  {
    id: "cropcare-retail",
    name: "IGO CropCare Retail",
    category: "agri",
    categoryLabel: "Agri Input",
    icon: "🧪",
    image: "/assets/brands/igo-crop-care.jpg",
    desc: "A crop-protection and nutrition counter backed by IGO's AI crop-doctor tool.",
    investment: "₹10–16 L",
    format: "400–700 sq.ft",
    breakeven: "12–15 months",
    includes: [
      "Verified product catalog",
      "In-store AI diagnosis kiosk",
      "Dealer margin support scheme",
    ],
  },
  {
    id: "organic-pharmacy",
    name: "IGO Organic Pharmacy",
    category: "retail",
    categoryLabel: "Healthcare",
    icon: "🌾",
    image: "/assets/brands/igo-organic-pharmacy.jpg",
    desc: "A wellness counter blending traditional medicinal plants with modern pharmacy standards.",
    investment: "₹18–26 L",
    format: "500–750 sq.ft",
    breakeven: "18–22 months",
    includes: [
      "Licensing & compliance support",
      "Curated organic product range",
      "Staff pharma & wellness training",
    ],
  },
];

export type Tier = {
  id: string;
  name: string;
  price: string;
  desc: string;
  features: string[];
  featured?: boolean;
  cta: string;
};

export const TIERS: Tier[] = [
  {
    id: "starter",
    name: "Starter",
    price: "₹8–15 L",
    desc: "For first-time entrepreneurs entering a single small-format outlet.",
    features: [
      "Brand license & signage kit",
      "Standard operations manual",
      "Group WhatsApp support line",
      "Quarterly performance review",
    ],
    cta: "Choose Starter",
  },
  {
    id: "growth",
    name: "Growth",
    price: "₹15–26 L",
    desc: "For operators ready to run a full-format store with dedicated field support.",
    features: [
      "Everything in Starter, plus:",
      "Dedicated regional field manager",
      "Local launch marketing package",
      "Priority supply allocation",
      "Financing & subsidy guidance",
    ],
    featured: true,
    cta: "Choose Growth",
  },
  {
    id: "multi-unit",
    name: "Multi-Unit",
    price: "Custom",
    desc: "For investors planning 2+ outlets across a district or region.",
    features: [
      "Everything in Growth, plus:",
      "Cluster site-selection support",
      "Shared regional warehousing",
      "Dedicated onboarding cohort",
    ],
    cta: "Talk to Us",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  initials: string;
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Muthu Selvam",
    role: "IGO Agri Mart, Salem",
    initials: "MS",
    quote:
      "The training before launch made the biggest difference. By month two, our team already knew the product range better than most competitors nearby.",
  },
  {
    name: "Kavitha Ramesh",
    role: "Farmers Factory Outlet, Trichy",
    initials: "KR",
    quote:
      "Having a field manager check in every month kept us accountable in the early days. That support is the real difference from running it alone.",
  },
  {
    name: "Vignesh Prakash",
    role: "IGO Nursery, Coimbatore",
    initials: "VP",
    quote:
      "The nursery's buy-back arrangement gave us confidence to stock more variety than we would have on our own. Sales grew steadily through the season.",
  },
];

export type FAQ = { q: string; a: string };

export const FAQS: FAQ[] = [
  {
    q: "What is the minimum investment to start an IGO franchise?",
    a: "It depends on the vertical you choose — starting from roughly ₹8 lakh for an IGO Nursery unit up to ₹35 lakh for a full Palm Cafe outlet. We'll help you match a vertical to your budget during the application call.",
  },
  {
    q: "Do I need agricultural or retail experience?",
    a: "No prior experience is required. Every franchisee goes through structured onboarding and training before opening, covering operations, product knowledge and customer handling.",
  },
  {
    q: "How long does it take to open after signing?",
    a: "Typically 45–90 days from agreement to launch, depending on the vertical, site readiness and local approvals.",
  },
  {
    q: "Can I run more than one outlet?",
    a: "Yes. Our Multi-Unit tier is designed for partners who want to operate two or more outlets across a district, with shared warehousing and a dedicated onboarding cohort.",
  },
  {
    q: "What ongoing support does IGO provide?",
    a: "A dedicated regional field manager for your first year, priority supply allocation, quarterly performance reviews, and access to the IGO partner support line.",
  },
];
