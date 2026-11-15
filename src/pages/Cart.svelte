<script>
  import {
    cart,
    cartCount,
    cartSubtotal,
    cartDiscount,
    cartTotal,
    formatRupiah
  } from '../stores/cart.js';
  import { router } from '../stores/router.js';

  let customerName = '';
  let customerPhone = '';
  let customerAddress = '';
  let customerNote = '';
  let orderSuccess = false;

  function handleQuantityChange(id, value) {
    const qty = parseInt(value);
    if (!isNaN(qty) && qty >= 1) {
      cart.updateQuantity(id, qty);
    }
  }

  function handleCheckoutWhatsApp() {
    if ($cart.length === 0) {
      alert('Keranjang belanja Anda kosong!');
      return;
    }

    if (!customerName.trim() || !customerPhone.trim() || !customerAddress.trim()) {
      alert('Silakan lengkapi data Nama, Nomor WhatsApp, dan Alamat Pengiriman sebelum melanjutkan.');
      return;
    }

    // Format rincian pesanan
    const orderItems = $cart.map((item) => {
      return `• ${item.name} (${item.quantity}x) - ${item.price}`;
    });

    let message = `Halo Indah Bakery, saya ingin memesan:\n\n`;
    message += `*Daftar Pesanan:*\n${orderItems.join('\n')}\n\n`;
    message += `*Rincian Harga:*\n`;
    message += `Subtotal: ${formatRupiah($cartSubtotal)}\n`;
    if ($cartDiscount > 0) {
      message += `Diskon Promo: -${formatRupiah($cartDiscount)}\n`;
    }
    message += `*Total Pembayaran: ${formatRupiah($cartTotal)}*\n\n`;
    message += `*Data Pelanggan:*\n`;
    message += `Nama: ${customerName.trim()}\n`;
    message += `Nomor WhatsApp: ${customerPhone.trim()}\n`;
    message += `Alamat Lengkap: ${customerAddress.trim()}\n`;
    if (customerNote.trim()) {
      message += `Catatan Khusus: ${customerNote.trim()}\n`;
    }
    message += `\nMohon konfirmasi ketersediaan dan proses pesanan saya. Terima kasih!`;

    const encoded = encodeURIComponent(message);
    const whatsappNumber = '6283821927793';
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, '_blank');

    orderSuccess = true;
    cart.clearCart();
  }
</script>

<div class="cart-page fade-in">
  <!-- Cart Hero -->
  <div class="cart-hero">
    <h1>Keranjang Belanja</h1>
    <p>Periksa pesanan Anda dan lanjutkan ke pemesanan langsung via WhatsApp.</p>
  </div>

  <div class="cart-container">
    {#if orderSuccess}
      <div class="success-box">
        <i class="fas fa-check-circle success-icon"></i>
        <h2>Pesanan Berhasil Dialihkan ke WhatsApp!</h2>
        <p>Terima kasih telah memesan di Indah Bakery. Tim kami akan segera merespon pesan WhatsApp Anda.</p>
        <button class="continue-shopping" on:click={() => { orderSuccess = false; router.navigate('products'); }}>
          <i class="fas fa-shopping-bag"></i> Belanja Lagi
        </button>
      </div>
    {:else if $cart.length === 0}
      <div class="empty-cart">
        <i class="fas fa-shopping-cart"></i>
        <h2>Keranjang Belanja Kosong</h2>
        <p>Anda belum memilih produk roti atau kue apapun.</p>
        <button class="continue-shopping" on:click={() => router.navigate('products')}>
          <i class="fas fa-arrow-left"></i> Lanjutkan Belanja
        </button>
      </div>
    {:else}
      <!-- Daftar Item Keranjang -->
      <div class="cart-items">
        <div class="cart-header-title">
          <h2>Daftar Pesanan ({$cartCount} item)</h2>
          <button class="btn-clear-cart" on:click={() => cart.clearCart()} title="Kosongkan keranjang">
            <i class="fas fa-trash-alt"></i> Kosongkan
          </button>
        </div>

        {#each $cart as item (item.id)}
          <div class="cart-item">
            <img src={item.image} alt={item.name} />
            <div class="cart-item-details">
              <h3 class="cart-item-title">{item.name}</h3>
              <p class="cart-item-price">{item.price}</p>

              <div class="cart-item-actions">
                <div class="cart-item-quantity">
                  <button
                    class="quantity-btn minus"
                    on:click={() => handleQuantityChange(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    class="quantity-input"
                    value={item.quantity}
                    min="1"
                    on:input={(e) => handleQuantityChange(item.id, e.target.value)}
                  />
                  <button
                    class="quantity-btn plus"
                    on:click={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                <button class="remove-item" on:click={() => cart.removeItem(item.id)}>
                  <i class="fas fa-trash"></i> Hapus
                </button>
              </div>
            </div>
          </div>
        {/each}

        <!-- Form Data Pelanggan -->
        <div class="customer-form">
          <h3><i class="fas fa-user-edit"></i> Data Pengiriman</h3>
          <p class="form-desc">Lengkapi data berikut untuk dicantumkan pada format pesan WhatsApp Anda.</p>

          <div class="form-group">
            <label for="c-name">Nama Lengkap *</label>
            <input
              id="c-name"
              type="text"
              placeholder="Contoh: Budi Santoso"
              bind:value={customerName}
              required
            />
          </div>

          <div class="form-group">
            <label for="c-phone">Nomor WhatsApp *</label>
            <input
              id="c-phone"
              type="tel"
              placeholder="Contoh: 08123456789"
              bind:value={customerPhone}
              required
            />
          </div>

          <div class="form-group">
            <label for="c-addr">Alamat Lengkap Pengiriman *</label>
            <textarea
              id="c-addr"
              rows="3"
              placeholder="Contoh: Jl. Flamboyan No. 12, RT 02/05, Desa Jayasampurna..."
              bind:value={customerAddress}
              required
            ></textarea>
          </div>

          <div class="form-group">
            <label for="c-note">Catatan Tambahan (Opsional)</label>
            <input
              id="c-note"
              type="text"
              placeholder="Contoh: Tolong kirim sebelum jam 3 sore..."
              bind:value={customerNote}
            />
          </div>
        </div>
      </div>

      <!-- Ringkasan Belanja -->
      <div class="cart-summary">
        <h3 class="summary-title">Ringkasan Belanja</h3>

        <div class="summary-details">
          <div class="summary-row">
            <span>Subtotal Produk</span>
            <span class="value">{formatRupiah($cartSubtotal)}</span>
          </div>

          <div class="summary-row">
            <span>Diskon Promo { #if $cartDiscount > 0 }<small>(Belanja &gt; 500rb)</small>{/if}</span>
            <span class="value discount">
              {$cartDiscount > 0 ? `-${formatRupiah($cartDiscount)}` : 'Rp 0'}
            </span>
          </div>

          {#if $cartSubtotal > 0 && $cartSubtotal <= 500000}
            <div class="discount-hint">
              <i class="fas fa-info-circle"></i> Tambah belanja <strong>{formatRupiah(500001 - $cartSubtotal)}</strong> lagi untuk dapat diskon Rp 50.000!
            </div>
          {/if}

          <div class="summary-row summary-total">
            <span>Total Akhir</span>
            <span class="value">{formatRupiah($cartTotal)}</span>
          </div>
        </div>

        <button class="checkout-btn" on:click={handleCheckoutWhatsApp}>
          <i class="fab fa-whatsapp"></i> Pesan Sekarang via WhatsApp
        </button>

        <p class="checkout-safe-note">
          <i class="fas fa-shield-alt"></i> Pesanan dikirim langsung ke WhatsApp resmi Indah Bakery (+62 838-2192-7793).
        </p>
      </div>
    {/if}
  </div>
</div>

<style>
  .cart-hero {
    background: linear-gradient(rgba(255, 191, 120, 0.82), rgba(255, 238, 169, 0.82)),
      url('https://images.unsplash.com/photo-1603532648955-a039f2e364da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80');
    background-size: cover;
    background-position: center;
    height: 35vh;
    min-height: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 2rem;
    position: relative;
    margin-bottom: 2.5rem;
  }

  .cart-hero h1 {
    font-size: 3rem;
    color: var(--dark);
    text-shadow: 0 2px 4px rgba(255, 255, 255, 0.8);
    margin-bottom: 0.8rem;
    font-weight: 800;
  }

  .cart-hero p {
    font-size: 1.15rem;
    color: var(--dark);
  }

  .cart-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
    padding: 0 8% 4rem;
    max-width: 1250px;
    margin: 0 auto;
    align-items: flex-start;
  }

  .cart-items {
    flex: 2;
    min-width: 320px;
  }

  .cart-header-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.2rem;
  }

  .cart-header-title h2 {
    color: var(--dark);
    font-size: 1.4rem;
  }

  .btn-clear-cart {
    background: none;
    border: none;
    color: #c0392b;
    cursor: pointer;
    font-size: 0.88rem;
    font-weight: 600;
    transition: var(--transition);
  }

  .btn-clear-cart:hover {
    text-decoration: underline;
  }

  .cart-item {
    display: flex;
    background: white;
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 1.2rem;
    box-shadow: var(--shadow);
    align-items: center;
    padding: 0.8rem;
    gap: 1.2rem;
  }

  .cart-item img {
    width: 110px;
    height: 110px;
    object-fit: cover;
    border-radius: 12px;
  }

  .cart-item-details {
    flex-grow: 1;
  }

  .cart-item-title {
    font-size: 1.15rem;
    color: var(--dark);
    margin-bottom: 0.3rem;
  }

  .cart-item-price {
    font-size: 1.1rem;
    color: var(--accent);
    font-weight: 700;
    margin-bottom: 0.8rem;
  }

  .cart-item-actions {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .cart-item-quantity {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .quantity-btn {
    width: 32px;
    height: 32px;
    background: var(--primary);
    color: var(--dark);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
  }

  .quantity-btn:hover:not(:disabled) {
    background: var(--accent);
    color: white;
  }

  .quantity-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .quantity-input {
    width: 50px;
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 0.3rem;
  }

  .remove-item {
    background: none;
    border: none;
    color: #e74c3c;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    transition: var(--transition);
  }

  .remove-item:hover {
    color: #c0392b;
    transform: scale(1.05);
  }

  /* Customer Form */
  .customer-form {
    margin-top: 2rem;
    background: white;
    padding: 1.8rem;
    border-radius: 16px;
    box-shadow: var(--shadow);
  }

  .customer-form h3 {
    color: var(--dark);
    margin-bottom: 0.4rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .form-desc {
    font-size: 0.85rem;
    color: #777;
    margin-bottom: 1.5rem;
  }

  .form-group {
    margin-bottom: 1.2rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.4rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--dark);
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 0.95rem;
    font-family: inherit;
    outline: none;
    transition: var(--transition);
  }

  .form-group input:focus,
  .form-group textarea:focus {
    border-color: var(--accent);
    box-shadow: 0 0 8px rgba(210, 105, 30, 0.2);
  }

  /* Summary Box */
  .cart-summary {
    flex: 1;
    min-width: 300px;
    background: var(--secondary);
    border-radius: 16px;
    padding: 2rem;
    box-shadow: var(--shadow);
    position: sticky;
    top: 100px;
  }

  .summary-title {
    font-size: 1.5rem;
    color: var(--dark);
    margin-bottom: 1.5rem;
    border-bottom: 2px solid rgba(139, 69, 19, 0.15);
    padding-bottom: 0.5rem;
  }

  .summary-details {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-bottom: 1.8rem;
  }

  .summary-row {
    display: flex;
    justify-content: space-between;
    font-size: 0.95rem;
  }

  .summary-row .value {
    font-weight: 600;
  }

  .summary-row .discount {
    color: #27ae60;
  }

  .discount-hint {
    background: rgba(255, 255, 255, 0.7);
    padding: 0.6rem 0.8rem;
    border-radius: 8px;
    font-size: 0.82rem;
    color: #8b4513;
    border-left: 3px solid var(--accent);
  }

  .summary-total {
    font-size: 1.3rem;
    font-weight: 800;
    color: var(--accent);
    border-top: 2px solid var(--primary);
    padding-top: 1rem;
    margin-top: 0.5rem;
  }

  .checkout-btn {
    background-color: #25d366;
    color: white;
    border: none;
    padding: 1rem;
    font-size: 1.05rem;
    font-weight: 700;
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    width: 100%;
    justify-content: center;
    transition: var(--transition);
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.35);
  }

  .checkout-btn:hover {
    background-color: #128c7e;
    transform: translateY(-2px);
  }

  .checkout-safe-note {
    font-size: 0.8rem;
    color: #7d5e46;
    text-align: center;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
  }

  /* Empty state & Success */
  .empty-cart,
  .success-box {
    text-align: center;
    padding: 4rem 2rem;
    background: white;
    border-radius: 20px;
    box-shadow: var(--shadow);
    width: 100%;
    max-width: 600px;
    margin: 1rem auto;
  }

  .empty-cart i {
    font-size: 4.5rem;
    color: var(--primary);
    margin-bottom: 1.5rem;
  }

  .success-icon {
    font-size: 4.5rem;
    color: #27ae60;
    margin-bottom: 1.5rem;
  }

  .empty-cart h2,
  .success-box h2 {
    font-size: 1.8rem;
    color: var(--dark);
    margin-bottom: 0.8rem;
  }

  .empty-cart p,
  .success-box p {
    color: #666;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .continue-shopping {
    background: var(--primary);
    color: var(--dark);
    border: none;
    padding: 0.85rem 2.2rem;
    border-radius: 30px;
    font-weight: 700;
    cursor: pointer;
    font-size: 1rem;
    transition: var(--transition);
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
  }

  .continue-shopping:hover {
    background: var(--accent);
    color: white;
  }
</style>

