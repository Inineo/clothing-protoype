export interface Product {
  id: string;
  name: string;
  category: 'store' | 'clothing' | 'caps' | 'bags' | 'shoes';
  price: number;
  image: string;
  // Offset manual per-gambar (opsional, satuan pixel):
  offsetY?: number; // Nilai positif = turun, nilai negatif = naik (cth: -10)
  height?: number;  // Ukuran tinggi per gambar (cth: 460)
}

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Summit 800 Down Puffer',
    category: 'clothing',
    price: 349,
    image: '/products/74c45083-3890-4d52-b5f9-88c87104fb6d-removebg-preview.png',
    offsetY: 33,
    height: 450,
  },
  {
    id: 'p2',
    name: 'Alpine Windbreak Jacket',
    category: 'clothing',
    price: 289,
    image: '/products/493a895f-5248-4511-ba30-fed465b3ab38-removebg-preview.png',
    offsetY: -5,
    height: 480,
  },
  {
    id: 'p3',
    name: 'Thermal Fleece Zip',
    category: 'clothing',
    price: 189,
    image: '/products/869949d7-f9a4-446f-a3c4-0eba2b058dea-removebg-preview.png',
    offsetY: 1,
    height: 480,
  },
  {
    id: 'p4',
    name: 'Glacier Technical Anorak',
    category: 'clothing',
    price: 229,
    image: '/products/8e14d774-e400-4acd-a986-6d09a35d422c-removebg-preview.png',
    offsetY: 0,
    height: 480,
  },
  {
    id: 'p5',
    name: 'Field Expedition Parka',
    category: 'clothing',
    price: 319,
    image: '/products/c90e265e-fef7-4ded-a47c-4d2f5c592ca4-removebg-preview.png',
    offsetY: 0,
    height: 480,
  },
];
