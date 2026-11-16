export interface Product {
  id: string;
  name: string;
  category: 'store' | 'clothing' | 'caps' | 'bags' | 'shoes';
  price: number;
  image: string;

  // Detail & Deskripsi Baju (Muncul di Kiri & Kanan Layar):
  sku?: string;
  material?: string;
  fit?: string;
  description?: string;
  features?: string[];

  // 🎛️ Pengaturan manual per-gambar:
  height?: number;
  offsetY?: number;
  offsetX?: number;
  scale?: number;
  rotateZ?: number;
}

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Summit 800 Down Puffer',
    category: 'clothing',
    price: 349,
    image: '/products/74c45083-3890-4d52-b5f9-88c87104fb6d-removebg-preview.png',
    sku: 'SMT-800-RD',
    material: '100% Ripstop Nylon, 800-Fill Goose Down',
    fit: 'Boxy Oversized Fit',
    description: 'Heavyweight thermal protection designed for sub-zero alpine conditions with engineered weatherproofing.',
    features: ['DWR Waterproof Coating', 'Internal Storm Flap', 'Reinforced YKK Zips'],
    height: 580,
    offsetY: 33,
    offsetX: 0,
    scale: 1,
    rotateZ: 0,
  },
  {
    id: 'p2',
    name: 'Alpine Windbreak Jacket',
    category: 'clothing',
    price: 289,
    image: '/products/493a895f-5248-4511-ba30-fed465b3ab38-removebg-preview.png',
    sku: 'ALP-WNB-BK',
    material: 'High-Density Breathable Polyester Shell',
    fit: 'Articulated Athletic Cut',
    description: 'Ultra-light wind blocking jacket featuring high-density weave construction and ergonomic stretch panels.',
    features: ['Packable Hood System', 'Laser-Cut Vent Ports', 'Reflective Accents'],
    height: 580,
    offsetY: -5,
    offsetX: 0,
    scale: 1,
    rotateZ: 0,
  },
  {
    id: 'p3',
    name: 'Thermal Fleece Zip',
    category: 'clothing',
    price: 189,
    image: '/products/869949d7-f9a4-446f-a3c4-0eba2b058dea-removebg-preview.png',
    sku: 'THM-FLC-GR',
    material: '380GSM Heavy Brushed Polar Fleece',
    fit: 'Relaxed Drop-Shoulder',
    description: 'Dense insulating mid-layer garment with custom ghost graphic texturing and soft interior fleece brushing.',
    features: ['Micro-Bound Cuffs', 'Dual Welt Hand Pockets', 'Anti-Pill Treatment'],
    height: 580,
    offsetY: 1,
    offsetX: 0,
    scale: 1,
    rotateZ: 0,
  },
  {
    id: 'p4',
    name: 'Glacier Technical Anorak',
    category: 'clothing',
    price: 229,
    image: '/products/8e14d774-e400-4acd-a986-6d09a35d422c-removebg-preview.png',
    sku: 'GLC-TCH-AN',
    material: '3-Layer Bonded GORE Membrane',
    fit: 'Technical Regular Fit',
    description: 'Functional anorak with waterproof taped seams, front kangaroo utility storage, and adjustable side cinch.',
    features: ['Fully Taped Seams', 'Modular Chest Rig Loop', 'Waterguard Zippers'],
    height: 580,
    offsetY: 0,
    offsetX: 0,
    scale: 1,
    rotateZ: 0,
  },
  {
    id: 'p5',
    name: 'Field Expedition Parka',
    category: 'clothing',
    price: 319,
    image: '/products/c90e265e-fef7-4ded-a47c-4d2f5c592ca4-removebg-preview.png',
    sku: 'FLD-EXP-PK',
    material: 'Heavyweight Waxed Canvas Cotton',
    fit: 'Extended Relaxed Silhouette',
    description: 'Rugged utility outerwear crafted from abrasion-resistant waxed canvas with multi-compartment field pockets.',
    features: ['Wax-Treated Weather Shield', 'Internal Drawstring Waist', 'Heavy Brass Hardware'],
    height: 580,
    offsetY: 0,
    offsetX: 0,
    scale: 1,
    rotateZ: 0,
  },
];
