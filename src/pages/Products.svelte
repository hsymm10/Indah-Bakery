<script>
  import { products, categories } from '../data/products.js';
  import ProductCard from '../components/ProductCard.svelte';

  let selectedCategory = 'Semua';
  let searchQuery = '';

  $: filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'Semua' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  function selectCategory(cat) {
    selectedCategory = cat;
  }
</script>

<div class="products-page fade-in">
  <!-- Hero Section -->
  <div class="product-hero">
    <h1>Menu Produk Kami</h1>
    <p>Dipanggang dengan cinta setiap hari menggunakan bahan-bahan pilihan bermutu tinggi.</p>
  </div>

  <div class="controls-wrapper">
    <!-- Filter Kategori -->
    <div class="category-filters">
      {#each categories as category}
        <button
          class="filter-btn {selectedCategory === category ? 'active' : ''}"
          on:click={() => selectCategory(category)}
        >
          {category}
        </button>
      {/each}
    </div>

    <!-- Kotak Pencarian -->
    <div class="search-box">
      <i class="fas fa-search search-icon"></i>
      <input
        type="text"
        placeholder="Cari produk favorit (misal: Pizza, Donat, Coklat)..."
        bind:value={searchQuery}
      />
      {#if searchQuery}
        <button class="clear-search" on:click={() => (searchQuery = '')} aria-label="Hapus pencarian">
          <i class="fas fa-times"></i>
        </button>
      {/if}
    </div>

    <div class="results-count">
      Menampilkan <strong>{filteredProducts.length}</strong> produk
      {#if selectedCategory !== 'Semua'}
        dalam kategori <em>{selectedCategory}</em>
      {/if}
    </div>
  </div>

  <!-- Product Grid -->
  <div class="product-container">
    {#if filteredProducts.length > 0}
      <div class="grid">
        {#each filteredProducts as product (product.id)}
          <ProductCard {product} />
        {/each}
      </div>
    {:else}
      <div class="no-results">
        <i class="fas fa-cookie-bite"></i>
        <h3>Produk tidak ditemukan</h3>
        <p>Maaf, tidak ada produk yang cocok dengan pencarian "{searchQuery}".</p>
        <button
          class="btn-reset"
          on:click={() => {
            selectedCategory = 'Semua';
            searchQuery = '';
          }}
        >
          Reset Filter & Pencarian
        </button>
      </div>
    {/if}
  </div>
</div>

<style>
  .product-hero {
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
    margin-bottom: 2rem;
  }

  .product-hero h1 {
    font-size: 3rem;
    color: var(--dark);
    text-shadow: 0 2px 4px rgba(255, 255, 255, 0.8);
    margin-bottom: 0.8rem;
    font-weight: 800;
  }

  .product-hero p {
    font-size: 1.15rem;
    max-width: 600px;
    color: var(--dark);
  }

  .controls-wrapper {
    max-width: 1100px;
    margin: 0 auto 2rem;
    padding: 0 8%;
  }

  .category-filters {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-bottom: 1.5rem;
  }

  .filter-btn {
    background: white;
    border: 2px solid var(--primary);
    color: var(--dark);
    padding: 0.6rem 1.6rem;
    border-radius: 25px;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 600;
    transition: var(--transition);
  }

  .filter-btn:hover {
    background: var(--secondary);
    border-color: var(--accent);
  }

  .filter-btn.active {
    background: var(--accent);
    color: white;
    border-color: var(--accent);
    box-shadow: 0 4px 12px rgba(210, 105, 30, 0.25);
  }

  .search-box {
    position: relative;
    max-width: 600px;
    margin: 0 auto 1rem;
  }

  .search-icon {
    position: absolute;
    left: 1.2rem;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    font-size: 1rem;
  }

  .search-box input {
    width: 100%;
    padding: 0.85rem 3rem 0.85rem 3rem;
    border-radius: 30px;
    border: 2px solid #ecd3be;
    font-size: 0.95rem;
    outline: none;
    transition: var(--transition);
    background: white;
  }

  .search-box input:focus {
    border-color: var(--accent);
    box-shadow: 0 0 10px rgba(210, 105, 30, 0.15);
  }

  .clear-search {
    position: absolute;
    right: 1.2rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #888;
    cursor: pointer;
    font-size: 1rem;
  }

  .results-count {
    text-align: center;
    color: #777;
    font-size: 0.9rem;
  }

  .product-container {
    padding: 0 8% 4rem;
    max-width: 1300px;
    margin: 0 auto;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    gap: 2rem;
  }

  .no-results {
    text-align: center;
    padding: 4rem 2rem;
    background: white;
    border-radius: 20px;
    box-shadow: var(--shadow);
    max-width: 500px;
    margin: 2rem auto;
  }

  .no-results i {
    font-size: 4rem;
    color: var(--primary);
    margin-bottom: 1rem;
  }

  .no-results h3 {
    color: var(--dark);
    margin-bottom: 0.5rem;
  }

  .no-results p {
    color: #777;
    margin-bottom: 1.5rem;
  }

  .btn-reset {
    background: var(--primary);
    color: var(--dark);
    border: none;
    padding: 0.7rem 1.8rem;
    border-radius: 25px;
    cursor: pointer;
    font-weight: 600;
    transition: var(--transition);
  }

  .btn-reset:hover {
    background: var(--accent);
    color: white;
  }

  @media (max-width: 768px) {
    .product-hero h1 {
      font-size: 2.2rem;
    }
  }
</style>

