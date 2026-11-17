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

  // File gambar dua sisi
  frontImage: string; // Tampil saat dipilih (menghadap depan)
  sideImage: string;  // Tampil saat tidak dipilih (menghadap samping)

  // 🎛️ Pengaturan manual per-mode (front & side terpisah agar presisi):
  front?: ProductImageTransform;
  side?: ProductImageTransform;

  // Metadata detail samping
  sku?: string;
  material?: string;
  fit?: string;
  description?: string;
  features?: string[];
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
    material: '100% Ripstop Nylon, 800-Fill Goose Down',
    fit: 'Boxy Oversized Fit',
    description: 'Heavyweight thermal protection designed for sub-zero alpine conditions with engineered weatherproofing.',
    features: ['DWR Waterproof Coating', 'Internal Storm Flap', 'Reinforced YKK Zips'],
    // Atur ukuran & posisi khusus baju 1:
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
    material: 'High-Density Breathable Polyester Shell',
    fit: 'Articulated Athletic Cut',
    description: 'Ultra-light wind blocking jacket featuring high-density weave construction and ergonomic stretch panels.',
    features: ['Packable Hood System', 'Laser-Cut Vent Ports', 'Reflective Accents'],
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
    material: '380GSM Heavy Brushed Polar Fleece',
    fit: 'Relaxed Drop-Shoulder',
    description: 'Dense insulating mid-layer garment with custom ghost graphic texturing and soft interior fleece brushing.',
    features: ['Micro-Bound Cuffs', 'Dual Welt Hand Pockets', 'Anti-Pill Treatment'],
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
    material: '3-Layer Bonded GORE Membrane',
    fit: 'Technical Regular Fit',
    description: 'Functional anorak with waterproof taped seams, front kangaroo utility storage, and adjustable side cinch.',
    features: ['Fully Taped Seams', 'Modular Chest Rig Loop', 'Waterguard Zippers'],
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
    material: 'Heavyweight Waxed Canvas Cotton',
    fit: 'Extended Relaxed Silhouette',
    description: 'Rugged utility outerwear crafted from abrasion-resistant waxed canvas with multi-compartment field pockets.',
    features: ['Wax-Treated Weather Shield', 'Internal Drawstring Waist', 'Heavy Brass Hardware'],
    front: { height: 580, offsetY: -70, offsetX: 0, scale: 1.29, rotateZ: 0 },
    side:  { height: 580, offsetY: -50, offsetX: 0, scale: 1.25, rotateZ: 0 },
  },
];
