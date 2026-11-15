<script>
  import { router } from '../stores/router.js';

  function goTo(route) {
    router.navigate(route);
  }
</script>

<footer class="footer">
  <div class="footer-content">
    <div class="footer-brand">
      <h3>Indah Bakery</h3>
      <p>Sejak 2017 <strong>Indah Bakery</strong> ❤️ Lezatnya Bikin Nagih!</p>
      <p class="tagline">Menghadirkan kue dan roti berkualitas premium dengan cita rasa otentik yang selalu dirindukan.</p>
    </div>

    <div class="footer-links">
      <h4>Navigasi Cepat</h4>
      <ul>
        <li><button on:click={() => goTo('home')}>Beranda</button></li>
        <li><button on:click={() => goTo('products')}>Daftar Produk</button></li>
        <li><button on:click={() => goTo('about')}>Tentang Kami</button></li>
        <li><button on:click={() => goTo('cart')}>Keranjang Belanja</button></li>
      </ul>
    </div>

    <div class="footer-contact">
      <h4>Hubungi Kami</h4>
      <p><i class="fas fa-map-marker-alt"></i> Jl. Kongsi No.2, Jayasampurna, Serang Baru, Bekasi, Jawa Barat 17530</p>
      <p><i class="fab fa-whatsapp"></i> +62 838-2192-7793</p>
      <div class="social-icons">
        <a
          href="https://wa.me/6283821927793?text=Halo%20Indah%20Bakery%2C%20saya%20ingin%20memesan%20produk%20Anda."
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp Indah Bakery"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png" alt="WhatsApp" />
        </a>
        <a
          href="https://www.tiktok.com/@indahbakery"
          target="_blank"
          rel="noopener noreferrer"
          title="TikTok Indah Bakery"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" />
        </a>
      </div>
    </div>
  </div>

  <div class="map-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.37739681089!2d107.10012321476812!3d-6.211379395509097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699a9f2d4fbb79%3A0xf5e9c4802a94b30f!2sJl.%20Kongsi%20No.2%2C%20Jayasampurna%2C%20Serang%20Baru%2C%20Bekasi%2C%20Jawa%20Barat%2017530!5e0!3m2!1sid!2sid!4v1720428413000!5m2!1sid!2sid"
      width="100%"
      height="280"
      style="border:0; border-radius:12px;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="Indah Bakery – Peta Lokasi"
    ></iframe>
  </div>

  <div class="footer-bottom">
    <p>&copy; {new Date().getFullYear()} Indah Bakery. Seluruh hak cipta dilindungi.</p>
  </div>
</footer>

<style>
  .footer {
    background: var(--dark);
    color: var(--secondary);
    padding: 3.5rem 8% 1.5rem;
    position: relative;
    margin-top: 3rem;
  }

  .footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background: linear-gradient(to right, var(--primary), var(--secondary));
  }

  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2.5rem;
    margin-bottom: 2.5rem;
  }

  .footer-brand h3 {
    font-size: 1.8rem;
    color: var(--primary);
    margin-bottom: 0.8rem;
  }

  .footer-brand .tagline {
    font-size: 0.9rem;
    color: #ebd3be;
    margin-top: 0.5rem;
  }

  .footer-links h4,
  .footer-contact h4 {
    font-size: 1.2rem;
    color: var(--primary);
    margin-bottom: 1rem;
    border-bottom: 2px solid var(--accent);
    padding-bottom: 0.4rem;
    display: inline-block;
  }

  .footer-links ul {
    list-style: none;
  }

  .footer-links li {
    margin-bottom: 0.6rem;
  }

  .footer-links button {
    background: none;
    border: none;
    color: var(--secondary);
    cursor: pointer;
    font-size: 0.95rem;
    transition: var(--transition);
    padding: 0;
    text-align: left;
  }

  .footer-links button:hover {
    color: var(--primary);
    transform: translateX(5px);
  }

  .footer-contact p {
    font-size: 0.95rem;
    margin-bottom: 0.8rem;
    display: flex;
    align-items: flex-start;
    gap: 0.6rem;
    color: #ebd3be;
  }

  .footer-contact i {
    color: var(--primary);
    margin-top: 4px;
  }

  .social-icons {
    display: flex;
    gap: 1.2rem;
    margin-top: 1.2rem;
  }

  .social-icons a {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(255, 238, 169, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
  }

  .social-icons a:hover {
    background: var(--primary);
    transform: translateY(-4px) scale(1.1);
  }

  .social-icons img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }

  .map-container {
    max-width: 900px;
    margin: 2rem auto;
    box-shadow: var(--shadow);
    border-radius: 12px;
    overflow: hidden;
  }

  .footer-bottom {
    text-align: center;
    border-top: 1px solid rgba(255, 238, 169, 0.2);
    padding-top: 1.5rem;
    font-size: 0.85rem;
    color: #c9b4a1;
  }
</style>

