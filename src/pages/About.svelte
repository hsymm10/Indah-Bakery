<script>
  import { router } from '../stores/router.js';
</script>

<div class="about-page fade-in">
  <!-- Hero Section -->
  <div class="about-hero">
    <h1>Tentang Kami</h1>
    <p>Indah Bakery berdiri sejak 2017, menghadirkan kue-kue premium dan tradisional dengan bahan terbaik dan rasa otentik.</p>
  </div>

  <div class="about-container">
    <!-- Story Section -->
    <div class="story-grid">
      <div class="story-image">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          alt="Dapur Indah Bakery"
        />
      </div>
      <div class="story-text">
        <span class="badge-subtitle">Kisah Kami</span>
        <h2>Perjalanan Cita Rasa Sejak 2017</h2>
        <p>
          Berawal dari kecintaan terhadap kelezatan roti segar buatan rumah, <strong>Indah Bakery</strong> kini telah tumbuh menjadi pilihan utama keluarga untuk aneka donat lembut, roti beraneka rasa, pizza mini, dan brownies premium.
        </p>
        <p>
          Kami percaya bahwa setiap gigitan roti harus menghadirkan kebahagiaan. Oleh karena itu, seluruh resep kami dibuat dengan racikan khas, kebersihan terjamin, serta standar mutu bahan pilihan tanpa kompromi.
        </p>
      </div>
    </div>

    <!-- Visi & Misi Cards -->
    <div class="cards-grid">
      <div class="info-card">
        <div class="card-icon"><i class="fas fa-eye"></i></div>
        <h3>Visi Kami</h3>
        <p>Menjadi toko roti dan kue terpercaya yang selalu menyajikan kelezatan alami, inovatif, dan menjadi bagian dari setiap momen istimewa keluarga.</p>
      </div>

      <div class="info-card">
        <div class="card-icon"><i class="fas fa-bullseye"></i></div>
        <h3>Misi Kami</h3>
        <p>Berkomitmen menghadirkan produk roti halal, higienis, sehat, dan ramah di kantong dengan pelayanan yang ramah dan cepat.</p>
      </div>

      <div class="info-card">
        <div class="card-icon"><i class="fas fa-users"></i></div>
        <h3>Tim Kami</h3>
        <p>Dikelola oleh tim profesional dan baker berpengalaman yang berdedikasi menjaga rasa, tekstur, dan kesegaran produk setiap hari.</p>
      </div>
    </div>

    <!-- Call to action -->
    <div class="contact-cta">
      <h2>Ingin Pesan Roti untuk Acara Spesial?</h2>
      <p>Kami menerima pesanan partai besar, ulang tahun, arisan, rapat kantor, maupun catering dengan kemasan rapi dan harga khusus.</p>
      <div class="cta-buttons">
        <a
          href="https://wa.me/6283821927793?text=Halo%20Indah%20Bakery%2C%20saya%20ingin%20konsultasi%20pesanan%20kue%20atau%20acara."
          target="_blank"
          rel="noopener noreferrer"
          class="btn-wa"
        >
          <i class="fab fa-whatsapp"></i> Hubungi Kami via WhatsApp
        </a>
        <button class="btn-menu" on:click={() => router.navigate('products')}>
          <i class="fas fa-bread-slice"></i> Lihat Menu Produk
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  .about-hero {
    background: linear-gradient(rgba(255, 191, 120, 0.82), rgba(255, 238, 169, 0.82)),
      url('https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80');
    background-size: cover;
    background-position: center;
    height: 40vh;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 2rem;
    position: relative;
    margin-bottom: 3rem;
  }

  .about-hero h1 {
    font-size: 3.2rem;
    color: var(--dark);
    text-shadow: 0 2px 4px rgba(255, 255, 255, 0.8);
    margin-bottom: 0.8rem;
    font-weight: 800;
  }

  .about-hero p {
    font-size: 1.15rem;
    max-width: 650px;
    color: var(--dark);
  }

  .about-container {
    padding: 0 8% 4rem;
    max-width: 1100px;
    margin: 0 auto;
  }

  .story-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    margin-bottom: 4rem;
  }

  .story-image img {
    width: 100%;
    border-radius: 20px;
    box-shadow: var(--shadow-lg);
    object-fit: cover;
    height: 350px;
  }

  .badge-subtitle {
    color: var(--accent);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 1px;
  }

  .story-text h2 {
    font-size: 2.2rem;
    color: var(--dark);
    margin: 0.4rem 0 1.2rem;
    line-height: 1.3;
  }

  .story-text p {
    color: #555;
    margin-bottom: 1rem;
    line-height: 1.7;
    font-size: 1rem;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .info-card {
    background: white;
    padding: 2.2rem;
    border-radius: 20px;
    box-shadow: var(--shadow);
    text-align: center;
    transition: var(--transition);
  }

  .info-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-lg);
  }

  .card-icon {
    width: 60px;
    height: 60px;
    background: var(--secondary);
    color: var(--accent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    margin: 0 auto 1.2rem;
  }

  .info-card h3 {
    color: var(--dark);
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }

  .info-card p {
    color: #666;
    line-height: 1.6;
    font-size: 0.95rem;
  }

  .contact-cta {
    background: linear-gradient(135deg, var(--secondary), #f5d6a8);
    padding: 3rem 2rem;
    border-radius: 24px;
    text-align: center;
    box-shadow: var(--shadow);
  }

  .contact-cta h2 {
    color: var(--dark);
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }

  .contact-cta p {
    color: var(--text);
    max-width: 650px;
    margin: 0 auto 2rem;
    font-size: 1.05rem;
  }

  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: 1.2rem;
    flex-wrap: wrap;
  }

  .btn-wa {
    background-color: #25d366;
    color: white;
    text-decoration: none;
    padding: 0.9rem 2rem;
    border-radius: 30px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    transition: var(--transition);
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
  }

  .btn-wa:hover {
    background-color: #128c7e;
    transform: translateY(-3px);
  }

  .btn-menu {
    background: var(--dark);
    color: var(--secondary);
    border: none;
    padding: 0.9rem 2rem;
    border-radius: 30px;
    font-weight: 700;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    transition: var(--transition);
  }

  .btn-menu:hover {
    background: var(--accent);
    color: white;
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    .about-hero h1 {
      font-size: 2.2rem;
    }
    .story-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
</style>

