export const CONTACT_CONFIG = {
  companyName: 'Web Development',
  whatsappNumber: '+92 327 0798352',
  whatsappDigits: '923270798352',
  whatsappUrl: 'https://wa.me/923270798352',
  fiverrUrl: 'https://www.fiverr.com/skpwebdevelope',
};

export function buildWhatsAppLink(message: string): string {
  return `${CONTACT_CONFIG.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export type ServiceCategory = 'All' | 'E-Commerce' | 'Python & AI' | 'Design & Web';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: Exclude<ServiceCategory, 'All'>;
  description: string;
  iconName:
    | 'ShoppingBag'
    | 'Watch'
    | 'Gem'
    | 'Shirt'
    | 'Footprints'
    | 'Smartphone'
    | 'Terminal'
    | 'Sparkles'
    | 'Layout'
    | 'Bot';
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'ecommerce-dev',
    number: '01',
    title: 'E-Commerce Website Development',
    category: 'E-Commerce',
    description:
      'Complete online stores built with fast product filtering, secure checkout flows, cart management, and conversion-focused product pages.',
    iconName: 'ShoppingBag',
  },
  {
    id: 'watches-store',
    number: '02',
    title: 'Watches Store Websites',
    category: 'E-Commerce',
    description:
      'High-contrast luxury and sports watch storefronts with sharp timepiece galleries, sale highlights, and effortless mobile purchasing.',
    iconName: 'Watch',
  },
  {
    id: 'jewellery-store',
    number: '03',
    title: 'Jewellery Store Websites',
    category: 'E-Commerce',
    description:
      'Refined fine jewellery shopping websites featuring bridal sets, rings, necklaces, ornate branding, and seamless product browsing.',
    iconName: 'Gem',
  },
  {
    id: 'clothing-fashion',
    number: '04',
    title: 'Clothing & Fashion Websites',
    category: 'E-Commerce',
    description:
      'Lookbook-driven apparel and fashion stores complete with seasonal collections, size guides, variant selectors, and smooth carts.',
    iconName: 'Shirt',
  },
  {
    id: 'shoes-store',
    number: '05',
    title: 'Shoes Store Websites',
    category: 'E-Commerce',
    description:
      'Modern footwear retail websites engineered with multi-angle product showcases, size availability filters, and fast checkout.',
    iconName: 'Footprints',
  },
  {
    id: 'mobile-responsive',
    number: '06',
    title: 'Mobile Responsive Website Development',
    category: 'Design & Web',
    description:
      'Fluid, mobile-first interfaces tested across smartphones, tablets, laptops, and widescreen desktops for zero layout breakage.',
    iconName: 'Smartphone',
  },
  {
    id: 'python-programming',
    number: '07',
    title: 'Python Programming',
    category: 'Python & AI',
    description:
      'Custom Python scripts, scalable web backends, REST APIs, data processing pipelines, and reliable business automation tools.',
    iconName: 'Terminal',
  },
  {
    id: 'ai-website-dev',
    number: '08',
    title: 'AI Website Development',
    category: 'Python & AI',
    description:
      'Intelligent web applications featuring smart recommendations, AI-assisted search, and automated customer engagement workflows.',
    iconName: 'Sparkles',
  },
  {
    id: 'website-design-dev',
    number: '09',
    title: 'Website Design & Development',
    category: 'Design & Web',
    description:
      'Custom business websites crafted from scratch with clean UI/UX architecture, SEO-ready markup, and fast loading performance.',
    iconName: 'Layout',
  },
  {
    id: 'ai-chatbots-automation',
    number: '10',
    title: 'AI Chatbots & Automation',
    category: 'Python & AI',
    description:
      '24/7 AI chat assistants and automated order or inquiry workflows integrated directly into your website to convert global visitors.',
    iconName: 'Bot',
  },
];

export type PortfolioCategory =
  | 'All'
  | 'Python & AI'
  | 'Jewellery Stores'
  | 'Watch Stores'
  | 'Fashion & Clothing'
  | 'Business & E-Commerce';

export interface PortfolioProject {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, 'All'>;
  subtitle: string;
  image: string;
  alt: string;
  techStack: string[];
  summary: string;
  deliverables: string[];
  featuredBrandLogo?: 'nayab-jewellery';
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'python-ai-automation',
    title: 'Python AI & Automation Solutions',
    category: 'Python & AI',
    subtitle: 'Intelligent Business Workflows & Python Systems',
    image: '/assets/aistudio/python-coding-websites_948796c4.jpg',
    alt: 'Python AI and automation solutions visual showing glowing Python symbol and neural circuitry',
    techStack: ['Python', 'AI Integration', 'Automation', 'FastAPI'],
    summary:
      'Modern Python programming, AI integration, automation and intelligent business solutions.',
    deliverables: [
      'Custom Python Automation Scripts & APIs',
      'AI Model & Chatbot Integration',
      'Intelligent Data Processing & Lead Routing',
    ],
  },
  {
    id: 'nayab-jewellery-store',
    title: 'Premium Jewellery E-Commerce Store',
    category: 'Jewellery Stores',
    subtitle: 'Nayab Jewellery E-Commerce Website',
    image: '/assets/aistudio/sameer-jewelry-logo_723180b6.jpg',
    alt: 'Nayab Jewellery e-commerce website screenshot with gold crest logo and bridal jewellery hero banner',
    techStack: ['E-Commerce', 'Luxury Branding', 'Responsive UI'],
    summary:
      'A professional jewellery shopping website with premium branding, attractive product displays, shopping features and responsive design.',
    deliverables: [
      'Nayab Jewellery Crest Branding & Dark Header',
      'Promotional Campaign & Bridal Collection Showcase',
      'Search, Account, Shopping Bag & Mobile Menu',
    ],
    featuredBrandLogo: 'nayab-jewellery',
  },
  {
    id: 'luxury-watches-store',
    title: 'Luxury Watches E-Commerce Store',
    category: 'Watch Stores',
    subtitle: 'Chronograph & Dress Watch Online Storefront',
    image: '/assets/aistudio/sameer-watches-logo_06a53692.jpg',
    alt: 'Luxury watches e-commerce showcase featuring blue dial chronograph and rose gold dress watch',
    techStack: ['E-Commerce', 'Responsive Design', 'Product Catalog'],
    summary:
      'Sleek watch retail storefront highlighting men’s chronographs and women’s minimalist timepieces with promotional badges and clean product cards.',
    deliverables: [
      'High-Resolution Timepiece Showcase Grid',
      'Sale Badges & Category Filtering',
      'Direct WhatsApp & Checkout Integration',
    ],
  },
  {
    id: 'aura-fashion-archive',
    title: 'Aura Archive — Fashion Boutique Store',
    category: 'Fashion & Clothing',
    subtitle: 'Editorial Lookbook & Multi-Device Apparel Store',
    image: '/src/assets/images/portfolio_fashion_store_1795665279088.jpg',
    alt: 'Aura modern fashion boutique website mockup on desktop and smartphone',
    techStack: ['React', 'Mobile-First', 'Tailwind CSS'],
    summary:
      'Seasonal lookbook and fashion e-commerce platform synchronized across desktop and mobile viewports for effortless shopping on any screen.',
    deliverables: [
      'Desktop & Mobile Lookbook Parity',
      'Quick Size Selection Drawer',
      'Editorial Campaign Landing Pages',
    ],
  },
  {
    id: 'mira-clothing-store',
    title: 'Mira Essentials — Clothing Storefront',
    category: 'Fashion & Clothing',
    subtitle: 'Apparel Catalog & Slide-Out Shopping Bag',
    image: '/src/assets/images/portfolio_clothing_store_1795665279211.jpg',
    alt: 'Mira clothing and apparel storefront website mockup with shopping bag drawer',
    techStack: ['React', 'Python API', 'E-Commerce'],
    summary:
      'Contemporary clothing storefront built with instant category tabs, clean knitwear and outerwear grids, and a persistent slide-out cart.',
    deliverables: [
      'Instant Size & Color Swatches',
      'Persistent Slide-Out Cart Drawer',
      'Fast Image Loading Optimization',
    ],
  },
  {
    id: 'velo-ecommerce-hub',
    title: 'Velo Tech — Multi-Category E-Commerce',
    category: 'Business & E-Commerce',
    subtitle: 'Dynamic Product Filtering & Streamlined Checkout',
    image: '/src/assets/images/portfolio_ecommerce_platform_1795665281047.jpg',
    alt: 'Velo Tech multi-category e-commerce platform mockup on laptop and tablet',
    techStack: ['React', 'Python API', 'TypeScript'],
    summary:
      'Full-scale online store architecture supporting multi-brand filtering, price range sliders, and a clean multi-step checkout interface.',
    deliverables: [
      'Multi-Facet Category & Brand Filters',
      'Responsive Tablet & Desktop Checkout',
      'Order Summary & Payment Integration',
    ],
  },
];

export interface WhyChooseUsItem {
  number: string;
  title: string;
  description: string;
}

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    number: '01',
    title: 'Professional Website Design',
    description:
      'Custom, brand-aligned visual interfaces crafted to earn instant trust from international visitors and turn traffic into inquiries.',
  },
  {
    number: '02',
    title: '100% Responsive Layout',
    description:
      'Every section, navigation menu, and checkout screen is tested across mobile phones, tablets, laptops, and large monitors.',
  },
  {
    number: '03',
    title: 'Modern Technologies',
    description:
      'Built on clean React, TypeScript, Tailwind CSS, and Python stacks for long-term maintainability and crisp performance.',
  },
  {
    number: '04',
    title: 'AI Integration',
    description:
      'Practical AI chatbots, smart search, and automated workflows that answer customer questions around the clock.',
  },
  {
    number: '05',
    title: 'SEO-Friendly Structure',
    description:
      'Semantic HTML headings, clean metadata, fast page structure, and mobile usability engineered to support search rankings.',
  },
  {
    number: '06',
    title: 'Fast Loading Speed',
    description:
      'Lightweight assets, optimized bundling, and clean code ensure visitors never bounce waiting for heavy pages to load.',
  },
  {
    number: '07',
    title: 'Customer Support',
    description:
      'Clear communication from kickoff to launch via WhatsApp and Fiverr, plus dependable post-delivery assistance.',
  },
  {
    number: '08',
    title: 'Affordable Packages',
    description:
      'Transparent Silver, Gold, and Diamond tiers tailored for startups, growing stores, and custom enterprise requirements.',
  },
];

export interface TestimonialPlaceholder {
  id: string;
  placeholderLabel: string;
  clientName: string;
  projectType: string;
  rating: number;
  quote: string;
}

/**
 * Sample Testimonial Placeholders — Replace with real Fiverr client reviews as orders are completed.
 */
export const TESTIMONIAL_PLACEHOLDERS: TestimonialPlaceholder[] = [
  {
    id: 'sample-review-1',
    placeholderLabel: 'Editable Sample Placeholder',
    clientName: 'Client Name Placeholder — Jewellery Store Owner',
    projectType: 'Jewellery E-Commerce Website',
    rating: 5,
    quote:
      '[Sample Placeholder] Replace this card with your real Fiverr review highlighting storefront design quality, branding clarity, and mobile shopping experience.',
  },
  {
    id: 'sample-review-2',
    placeholderLabel: 'Editable Sample Placeholder',
    clientName: 'Client Name Placeholder — Watch Retailer',
    projectType: 'Watches E-Commerce Store',
    rating: 5,
    quote:
      '[Sample Placeholder] Replace this card with an authentic client review describing clean product presentation, fast loading speed, and smooth communication.',
  },
  {
    id: 'sample-review-3',
    placeholderLabel: 'Editable Sample Placeholder',
    clientName: 'Client Name Placeholder — Business Founder',
    projectType: 'Python AI & Automation',
    rating: 5,
    quote:
      '[Sample Placeholder] Replace this card with real Fiverr client feedback showcasing Python automation, AI chatbot integration, and on-time delivery.',
  },
];

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  featured?: boolean;
  features: string[];
  deliveryNote: string;
}

export const PRICING_PLANS: PricingTier[] = [
  {
    id: 'silver',
    name: 'Silver Package',
    tagline: 'Essential online presence for new businesses & personal brands.',
    features: [
      'Basic Business Website',
      'Responsive Design',
      'Essential Pages',
      'Basic Contact Form',
    ],
    deliveryNote: 'Clean launch-ready structure',
  },
  {
    id: 'gold',
    name: 'Gold Package',
    tagline: 'Complete storefront & conversion engine for growing retail brands.',
    featured: true,
    features: [
      'Professional Website',
      'E-commerce Functionality',
      'Responsive Design',
      'Advanced Features',
      'WhatsApp Integration',
    ],
    deliveryNote: 'Most popular for online stores',
  },
  {
    id: 'diamond',
    name: 'Diamond Package',
    tagline: 'Full custom engineering with Python backend, AI chatbot & hosting.',
    features: [
      'Premium Custom Website',
      'Advanced E-commerce',
      'AI Chatbot Integration',
      'Python Development',
      'Domain & Hosting Setup',
      'Premium Support',
    ],
    deliveryNote: 'End-to-end custom architecture',
  },
];
