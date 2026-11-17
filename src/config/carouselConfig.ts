// =========================================================================
// 🎛️ CONFIG KHUSUS UKURAN & POSISI BAJU (TERPISAH & TIDAK BOLEH BERUBAH)
// =========================================================================

export const CAROUSEL_SIZING_CONFIG = {
  // Tinggi dasar gambar baju (pixel) - diperbesar drastis agar mengisi viewport
  defaultHeight: 580,

  // Offset vertikal menempel ke rail (pixel)
  globalOffsetY: -44,

  // Lebar kolom slide di carousel (proporsional agar center pas di tengah viewport)
  slideWidthClass: 'flex-[0_0_55%] sm:flex-[0_0_42%] md:flex-[0_0_34%] lg:flex-[0_0_30%]',

  // Margin rapat antar baju (tanpa margin negatif ekstrem yang merusak loop dan snap center Embla)
  overlapMarginClass: 'px-0',

  // Skala ukuran
  scaleSelected: 1.15, // Baju aktif maju dan diperbesar sedikit
  scaleDefault: 1.0,   // Baju non-aktif tetap ukuran 1.0 penuh

  // Sudut hadap samping (derajat)
  sideRotationY: 65,   // Menghadap ke kiri
};
