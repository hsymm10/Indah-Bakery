# Indah Bakery - Svelte 5

Website resmi **Indah Bakery** yang telah dimigrasi dari HTML/JS statis tradisional ke arsitektur modern berbasis **Svelte 5** dan **Vite**.

## ✨ Fitur-Fitur Utama

1. **Komponen Modern Svelte 5 & Vite**:
   - Performa loading secepat kilat dengan Single Page Application (SPA).
   - Fast Refresh (HMR) saat pengembangan lokal.

2. **Routing & Navigasi**:
   - Beranda (`/` / `#/`)
   - Daftar Produk (`#/products`)
   - Keranjang Belanja (`#/cart`)
   - Tentang Kami (`#/about`)
   - Responsive Navbar dengan menu mobile hamburger dan badge jumlah item di keranjang secara real-time.

3. **Katalog Produk Interaktif**:
   - Filter kategori cepat: *Semua*, *Roti*, *Pizza*, *Donut*, *Brownis*.
   - Fitur pencarian instan (real-time search) berdasarkan nama dan deskripsi roti/kue.
   - Badge produk menarik (*Terlaris*, *Spesial*, *Baru*).
   - Tombol interaktif "Tambah ke Keranjang" dengan animasi feedback visual.

4. **Sistem Keranjang & Checkout WhatsApp**:
   - Keranjang belanja reaktif tersimpan otomatis di `localStorage`.
   - Kontrol kuantitas produk (+ / - / input langsung) dan tombol hapus.
   - Perhitungan otomatis subtotal, potongan diskon (diskon promo Rp 50.000 jika belanja di atas Rp 500.000), dan total pembayaran.
   - Form data pelanggan (Nama, Nomor WhatsApp, Alamat Pengiriman, Catatan).
   - Integrasi Checkout langsung ke WhatsApp resmi Indah Bakery (`+62 838-2192-7793`) dengan pesan pesanan terformat rapi.

5. **Struktur Proyek**:
   ```
   Indah-Bakery-main/
   ├── public/                # Asset publik (gambar img/, robots.txt, sitemap.xml)
   ├── src/
   │   ├── components/        # Komponen Svelte (Navbar, Footer, ProductCard)
   │   ├── data/              # Database produk (products.js)
   │   ├── pages/             # Halaman (Home, Products, Cart, About)
   │   ├── stores/            # Reactive stores (cart.js, router.js)
   │   ├── app.css            # Desain warna tema bakery & font Poppins
   │   ├── App.svelte         # Root layout aplikasi
   │   └── main.js            # Entry point Svelte 5
   ├── legacy_static/         # Backup berkas HTML lama
   ├── index.html             # Entry template Vite
   ├── vite.config.js         # Konfigurasi Vite
   └── svelte.config.js       # Konfigurasi Svelte
   ```

## 🚀 Cara Menjalankan

### 1. Jalankan Mode Pengembangan (Dev Server):
```bash
npm run dev
```

### 2. Bangun untuk Produksi (Production Build):
```bash
npm run build
```
Hasil build siap produksi akan berada di direktori `dist/`.

### 3. Preview Hasil Build:
```bash
npm run preview
```

