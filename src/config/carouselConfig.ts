// =========================================================================
// 🎛️ CONFIG KHUSUS UKURAN & POSISI BAJU (TERPISAH & TIDAK BOLEH BERUBAH)
// =========================================================================

export const CAROUSEL_SIZING_CONFIG = {
  // Tinggi dasar gambar baju (pixel)
  defaultHeight: 480,

  // Offset vertikal menempel ke rail (pixel, minus = naik mendekati rail)
  globalOffsetY: -38,

  // Lebar kolom slide di carousel (Tailwind class string)
  slideWidthClass: 'flex-[0_0_55%] sm:flex-[0_0_42%] md:flex-[0_0_34%] lg:flex-[0_0_30%]',

  // Margin rapat antar baju (Tailwind class string)
  overlapMarginClass: '-mx-6 sm:-mx-8 lg:-mx-10',

  // Skala ukuran
  scaleSelected: 1.15, // Baju aktif maju dan diperbesar sedikit
  scaleDefault: 1.0,   // Baju non-aktif tetap ukuran 1.0 penuh (tidak mengecil)

  // Sudut hadap samping (derajat)
  sideRotationY: 45,   // Menghadap ke kiri
};
