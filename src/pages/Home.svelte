<script>
  import { products } from '../data/products.js';
  import { router } from '../stores/router.js';
  import ProductCard from '../components/ProductCard.svelte';

  // Ambil produk unggulan (featured) untuk beranda
  const featuredProducts = products.filter((p) => p.featured);
</script>

<div class="home-page fade-in">
  <!-- Hero Section -->
  <section class="background-image">
    <div class="container-h1">
      <img src="/img/logo indah bakery.jpg" alt="Logo Indah Bakery" class="logoa" />
      <h1 class="h1">~~Indah Bakery~~</h1>
      <h2 class="h2">"Cita Rasa yang Membuat Anda Kembali Lagi"</h2>
      <div class="hero-actions">
        <button class="btn-primary" on:click={() => router.navigate('products')}>
          <i class="fas fa-bread-slice"></i> Lihat Semua Produk
        </button>
        <button class="btn-secondary" on:click={() => router.navigate('about')}>
          <i class="fas fa-info-circle"></i> Tentang Kami
        </button>
      </div>
    </div>
  </section>

  <!-- Keunggulan Toko -->
  <section class="features-bar">
    <div class="feature-item">
      <div class="feature-icon"><i class="fas fa-award"></i></div>
      <div class="feature-text">
        <h4>100% Halal</h4>
        <p>Bahan pilihan & terjamin halal</p>
      </div>
    </div>
    <div class="feature-item">
      <div class="feature-icon"><i class="fas fa-bread-slice"></i></div>
      <div class="feature-text">
        <h4>Dipanggang Setiap Hari</h4>
        <p>Selalu segar dan hangat</p>
      </div>
    </div>
    <div class="feature-item">
      <div class="feature-icon"><i class="fas fa-heart"></i></div>
      <div class="feature-text">
        <h4>Bahan Premium</h4>
        <p>Coklat Belgia & keju berkualitas</p>
      </div>
    </div>
    <div class="feature-item">
      <div class="feature-icon"><i class="fab fa-whatsapp"></i></div>
      <div class="feature-text">
        <h4>Pesan Mudah via WA</h4>
        <p>Langsung kirim ke lokasi Anda</p>
      </div>
    </div>
  </section>

  <!-- Section Title -->
  <div class="hero-title-section">
    <p class="hero-tag">^^shopping^^</p>
    <h3 class="section-title">Produk Pilihan Terfavorit</h3>
    <p class="section-subtitle">Aneka donat lembut, pizza lezat, dan roti isi spesial kami</p>
  </div>

  <!-- Featured Products Grid -->
  <section class="products-grid-container">
    <div class="products">
      {#each featuredProducts as product (product.id)}
        <ProductCard {product} />
      {/each}
    </div>

    <div class="view-all-wrapper">
      <button class="btn-view-all" on:click={() => router.navigate('products')}>
        Jelajahi Semua {products.length} Menu Lengkap <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  </section>
</div>

<style>
  .background-image {
    background: linear-gradient(rgba(255, 191, 120, 0.82), rgba(255, 238, 169, 0.82)),
      url('https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1778&q=80');
    background-size: cover;
    background-position: center;
    min-height: 75vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    padding: 3rem 1.5rem;
  }

  .container-h1 {
    position: relative;
    z-index: 2;
    max-width: 800px;
    margin: 0 auto;
  }

  .logoa {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    border: 5px solid var(--secondary);
    box-shadow: 0 10px 25px rgba(139, 69, 19, 0.25);
    margin-bottom: 1.5rem;
    animation: float 4s ease-in-out infinite;
    object-fit: cover;
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-16px); }
    100% { transform: translateY(0px); }
  }

  .h1 {
    font-size: 3.2rem;
    color: var(--dark);
    margin-bottom: 0.8rem;
    text-shadow: 0 2px 8px rgba(255, 255, 255, 0.7);
    font-weight: 800;
  }

  .h2 {
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--text);
    max-width: 650px;
    margin: 0 auto 2rem;
    line-height: 1.4;
  }

  .hero-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn-primary {
    background: var(--dark);
    color: var(--secondary);
    border: none;
    padding: 0.9rem 2rem;
    border-radius: 30px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    box-shadow: 0 4px 15px rgba(139, 69, 19, 0.3);
  }

  .btn-primary:hover {
    background: var(--accent);
    color: white;
    transform: translateY(-3px);
  }

  .btn-secondary {
    background: white;
    color: var(--dark);
    border: 2px solid var(--dark);
    padding: 0.9rem 2rem;
    border-radius: 30px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
  }

  .btn-secondary:hover {
    background: var(--secondary);
    transform: translateY(-3px);
  }

  /* Features Bar */
  .features-bar {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
    padding: 2.5rem 8%;
    background: white;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .feature-icon {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: var(--secondary);
    color: var(--accent);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    flex-shrink: 0;
  }

  .feature-text h4 {
    font-size: 1.05rem;
    color: var(--dark);
    margin-bottom: 0.2rem;
  }

  .feature-text p {
    font-size: 0.85rem;
    color: #777;
  }

  /* Title section */
  .hero-title-section {
    padding: 3rem 8% 1rem;
    text-align: center;
    background: var(--light);
  }

  .hero-tag {
    font-size: 1.6rem;
    color: var(--accent);
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 0.4rem;
  }

  .section-title {
    font-size: 2.2rem;
    color: var(--dark);
    margin-bottom: 0.5rem;
  }

  .section-subtitle {
    color: #666;
    font-size: 1.05rem;
  }

  /* Products Grid */
  .products-grid-container {
    padding: 2rem 8% 4rem;
    background: var(--light);
  }

  .products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    gap: 2rem;
  }

  .view-all-wrapper {
    text-align: center;
    margin-top: 3.5rem;
  }

  .btn-view-all {
    background: var(--accent);
    color: white;
    border: none;
    padding: 1rem 2.5rem;
    border-radius: 35px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    box-shadow: 0 4px 15px rgba(210, 105, 30, 0.3);
  }

  .btn-view-all:hover {
    background: var(--dark);
    transform: translateY(-3px) scale(1.02);
  }

  @media (max-width: 768px) {
    .h1 {
      font-size: 2.4rem;
    }
    .h2 {
      font-size: 1.2rem;
    }
    .background-image {
      min-height: 65vh;
    }
    .features-bar {
      grid-template-columns: 1fr;
      padding: 1.5rem 6%;
    }
  }
</style>

