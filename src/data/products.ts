export interface ProductImageTransform {
  height?: number;   // Tinggi gambar dalam pixel
  offsetY?: number;  // Naik/turun vertikal (minus = naik, plus = turun)
  offsetX?: number;  // Geser horizontal (minus = kiri, plus = kanan)
  scale?: number;    // Skala perbesaran (cth: 1 atau 1.05)
  rotateZ?: number;  // Kemiringan rotasi 2D derajat
}

export interface Product {
  id: string;
  name: string;
  category: 'store' | 'clothing' | 'caps' | 'bags' | 'shoes';
  price: number;

  frontImage: string;
  sideImage: string;

  front?: ProductImageTransform;
  side?: ProductImageTransform;

  // Metadata detail samping yang lebih kaya & lengkap:
  sku?: string;
  material?: string;
  fit?: string;
  weight?: string;
  origin?: string;
  care?: string;
  description?: string;
  features?: string[];
  techSpecs?: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Summit 800 Down Puffer',
    category: 'clothing',
    price: 349,
    frontImage: '/products/product-front/1.png',
    sideImage: '/products/product-side/1.png',
    sku: 'SMT-800-RD',
    material: '100% Ripstop Nylon Shell, 800-Fill Hydrophobic Goose Down',
    fit: 'Boxy Oversized Silhouette with Drop Shoulder',
    weight: '620 GSM Heavyweight Insulation',
    origin: 'Crafted in Portugal / Fabric from Japan',
    care: 'Dry Clean Only / Tumble Dry with Tennis Balls',
    description: 'Engineered for extreme sub-zero conditions. Features seamless baffle construction to prevent cold spots and a micro-membrane DWR shell for complete moisture resistance.',
    features: ['DWR Storm-Proof Coating', 'Internal Baffle Chamber Flap', 'Heavyweight YKK Vislon Zips', 'Elasticated Hem Cinch System'],
    techSpecs: ['Temperature Rating: -25°C', 'Fill Power: 800+ RDS Certified', 'Breathability: 15,000 g/m²'],
    front: { height: 580, offsetY: -60, offsetX: 0, scale: 1.25, rotateZ: 0 },
    side:  { height: 540, offsetY: 15, offsetX: 0, scale: 1.1, rotateZ: 0 },
  },
  {
    id: 'p2',
    name: 'Alpine Windbreak Jacket',
    category: 'clothing',
    price: 289,
    frontImage: '/products/product-front/2.png',
    sideImage: '/products/product-side/2.png',
    sku: 'ALP-WNB-BK',
    material: '3-Layer High-Density Breathable Technical Polyester Shell',
    fit: 'Articulated Athletic Cut with Ergonomic Gussets',
    weight: '340 GSM Midweight Shell',
    origin: 'Designed in Berlin / Made in Italy',
    care: 'Machine Wash Cold / Hang Dry in Shade',
    description: 'Ultra-light wind protection jacket designed for all-terrain mobility. Constructed with high-tenacity weave fibers and heat-welded seam tape for total wind obstruction.',
    features: ['Packable Ergonomic Hood', 'Laser-Cut Underarm Vent Ports', '3M Scotchlite Reflective Hits', 'Water-Resistant Aquaguard Zips'],
    techSpecs: ['Wind Resistance: 0 CFM Total Block', 'Hydrostatic Head: 20,000mm', 'Pack Volume: 1.2L Pocketable'],
    front: { height: 580, offsetY: 0, offsetX: 0, scale: 1.01, rotateZ: 0 },
    side:  { height: 580, offsetY: 25, offsetX: 0, scale: 1.02, rotateZ: 0 },
  },
  {
    id: 'p3',
    name: 'Thermal Fleece Zip',
    category: 'clothing',
    price: 189,
    frontImage: '/products/product-front/3.png',
    sideImage: '/products/product-side/3.png',
    sku: 'THM-FLC-GR',
    material: '420GSM Heavyweight Brushed Double-Faced Polar Fleece',
    fit: 'Relaxed Drop-Shoulder Oversized Profile',
    weight: '510 GSM Heavy Midlayer',
    origin: 'Knitted & Finished in Seoul, South Korea',
    care: 'Machine Wash Delicate / Do Not Iron',
    description: 'Dense insulating layer showcasing our custom spectral ghost graphic. Built with high-loft thermal fibers that trap body warmth while maintaining breathable air circulation.',
    features: ['Micro-Bound Lycra Cuffs', 'Dual Welt Handwarmer Pockets', 'Anti-Pill Thermal Treatment', 'Reinforced Nylon Elbow Patches'],
    techSpecs: ['Thermal Retention: Clo 1.8 Rating', 'Fabric Finish: Peached Velour', 'Hardware: Matte Gunmetal Pullers'],
    front: { height: 580, offsetY: -60, offsetX: 0, scale: 1.25, rotateZ: 0 },
    side:  { height: 580, offsetY: 9, offsetX: -5, scale: 1.09, rotateZ: 0 },
  },
  {
    id: 'p4',
    name: 'Glacier Technical Anorak',
    category: 'clothing',
    price: 229,
    frontImage: '/products/product-front/4.png',
    sideImage: '/products/product-side/4.png',
    sku: 'GLC-TCH-AN',
    material: '3-Layer Bonded GORE-Style Microporous Membrane',
    fit: 'Technical Regular Fit with Extended Droptail',
    weight: '410 GSM All-Weather Hard Shell',
    origin: 'Precision Welded in Vancouver, Canada',
    care: 'Technical Outerwear Wash / Re-proof Annually',
    description: 'A stormproof pullover anorak combining deep alpine protection with utilitarian tactical storage. Features an asymmetric front zip and full-perimeter storm hood.',
    features: ['100% Fully Taped Seams', 'Modular Kangaroo Chest Rig Loop', 'Dual-Way Side Ventilation Zips', 'Adjustable Dual-Point Hem Cinch'],
    techSpecs: ['Waterproof Rating: 28,000mm', 'Vapor Permeability: RET < 4.5', 'Abrasion Cycles: 50,000+ Martindale'],
    front: { height: 580, offsetY: -98, offsetX: 0, scale: 1.4, rotateZ: 0 },
    side:  { height: 580, offsetY: -67, offsetX: 0, scale: 1.3, rotateZ: 0 },
  },
  {
    id: 'p5',
    name: 'Field Expedition Parka',
    category: 'clothing',
    price: 319,
    frontImage: '/products/product-front/5.png',
    sideImage: '/products/product-side/5.png',
    sku: 'FLD-EXP-PK',
    material: '12oz Heavyweight Double-Waxed Cotton Canvas & Flannel Lining',
    fit: 'Extended Relaxed Silhouette with Articulated Sleeves',
    weight: '890 GSM Ultra-Heavy Outerwear',
    origin: 'Hand-Waxed & Finished in England',
    care: 'Sponge Clean with Cold Water / Rewax As Needed',
    description: 'Timeless utility outerwear built from industrial-grade waxed canvas. Develops a unique rich patina over time while resisting brush, wind, and severe downpours.',
    features: ['Hand-Applied Natural Paraffin Wax', 'Dual Internal Security Pockets', 'Heavy Solid Brass Snap Buttons', 'Storm Cuffs with Thumbholes'],
    techSpecs: ['Canvas Grade: 12oz Double Duck', 'Lining: 100% Brushed Tartan Cotton', 'Hardware: Solid Antiqued Brass'],
    front: { height: 580, offsetY: -70, offsetX: 0, scale: 1.29, rotateZ: 0 },
    side:  { height: 580, offsetY: -50, offsetX: 0, scale: 1.25, rotateZ: 0 },
  },
];
