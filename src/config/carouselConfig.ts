// =========================================================================
// 🎛️ CONFIG KHUSUS UKURAN & POSISI BAJU (TERPISAH & TIDAK BOLEH BERUBAH)
// =========================================================================

export const CAROUSEL_SIZING_CONFIG = {
  // Tinggi dasar gambar baju (pixel) - diperbesar drastis agar mengisi viewport
  defaultHeight: 580,

  // Offset vertikal menempel ke rail (pixel)
  globalOffsetY: -44,

  // Lebar kolom slide di carousel
  slideWidthClass: 'flex-[0_0_62%] sm:flex-[0_0_48%] md:flex-[0_0_38%] lg:flex-[0_0_34%]',

  // Margin rapat antar baju
  overlapMarginClass: '-mx-6 sm:-mx-8 lg:-mx-10',

  // Skala ukuran
  scaleSelected: 1.15, // Baju aktif maju dan diperbesar sedikit
  scaleDefault: 1.0,   // Baju non-aktif tetap ukuran 1.0 penuh

  // Sudut hadap samping (derajat)
  sideRotationY: 65,   // Menghadap ke kiri
};
