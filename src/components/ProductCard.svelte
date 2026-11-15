<script>
  import { cart } from '../stores/cart.js';

  export let product;

  let isAdded = false;

  function handleAddToCart() {
    cart.addItem(product);
    isAdded = true;
    setTimeout(() => {
      isAdded = false;
    }, 1500);
  }
</script>

<div class="product" data-category={product.category}>
  {#if product.badge}
    <span class="product-badge">{product.badge}</span>
  {/if}

  <div class="image-wrapper">
    <img src={product.image} alt={product.name} loading="lazy" />
  </div>

  <div class="product-info">
    <div class="category-tag">{product.category}</div>
    <h3 class="product-title">{product.name}</h3>
    <p class="price">{product.priceStr || 'Rp ' + product.price.toLocaleString('id-ID')}</p>
    <p class="description">{product.description}</p>
    <button
      class="add-to-cart-btn {isAdded ? 'added' : ''}"
      on:click={handleAddToCart}
    >
      {#if isAdded}
        <i class="fas fa-check"></i> Ditambahkan!
      {:else}
        <i class="fas fa-shopping-cart"></i> Tambah ke Keranjang
      {/if}
    </button>
  </div>
</div>

<style>
  .product {
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .product:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
  }

  .image-wrapper {
    width: 100%;
    height: 220px;
    overflow: hidden;
    background-color: #f7ede2;
  }

  .product img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .product:hover img {
    transform: scale(1.08);
  }

  .product-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    background: var(--accent);
    color: white;
    padding: 0.3rem 0.7rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 700;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    z-index: 2;
  }

  .product-info {
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .category-tag {
    font-size: 0.75rem;
    text-transform: uppercase;
    font-weight: 700;
    color: #a06e46;
    letter-spacing: 0.5px;
    margin-bottom: 0.2rem;
  }

  .product-title {
    color: var(--dark);
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
  }

  .price {
    color: var(--accent);
    font-weight: 700;
    font-size: 1.15rem;
    margin-bottom: 0.6rem;
  }

  .description {
    color: #666;
    font-size: 0.88rem;
    line-height: 1.5;
    flex-grow: 1;
    margin-bottom: 1.2rem;
  }

  .add-to-cart-btn {
    background: var(--primary);
    color: var(--dark);
    border: 2px solid var(--primary);
    padding: 0.75rem 1rem;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.9rem;
    transition: var(--transition);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
  }

  .add-to-cart-btn:hover {
    background: transparent;
    color: var(--accent);
    border-color: var(--accent);
  }

  .add-to-cart-btn.added {
    background: var(--accent);
    color: white;
    border-color: var(--accent);
  }
</style>

