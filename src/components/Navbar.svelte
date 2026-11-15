<script>
  import { router } from '../stores/router.js';
  import { cartCount } from '../stores/cart.js';

  let isMobileMenuOpen = false;

  function toggleMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  function goTo(route) {
    router.navigate(route);
    isMobileMenuOpen = false;
  }
</script>

<nav class="navbar">
  <div class="logo-container" on:click={() => goTo('home')} role="button" tabindex="0" on:keydown={(e) => e.key === 'Enter' && goTo('home')}>
    <img src="/img/logo indah bakery.jpg" alt="Logo Indah Bakery" class="navbar-logo" />
    <span class="logo">Indah Bakery</span>
  </div>

  <button class="hamburger" on:click={toggleMenu} aria-label="Toggle menu">
    <i class="fas fa-bars"></i>
  </button>

  <ul class="menu {isMobileMenuOpen ? 'active' : ''}">
    <li>
      <a
        href="#/"
        class={$router === 'home' ? 'active' : ''}
        on:click|preventDefault={() => goTo('home')}
      >
        Home
      </a>
    </li>
    <li>
      <a
        href="#/about"
        class={$router === 'about' ? 'active' : ''}
        on:click|preventDefault={() => goTo('about')}
      >
        About
      </a>
    </li>
    <li>
      <a
        href="#/products"
        class={$router === 'products' ? 'active' : ''}
        on:click|preventDefault={() => goTo('products')}
      >
        Products
      </a>
    </li>
    <li class="cart-link-wrapper">
      <a
        href="#/cart"
        class={$router === 'cart' ? 'active' : ''}
        on:click|preventDefault={() => goTo('cart')}
      >
        <i class="fas fa-shopping-cart"></i> Keranjang
        {#if $cartCount > 0}
          <span class="cart-badge">{$cartCount}</span>
        {/if}
      </a>
    </li>
  </ul>
</nav>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 8%;
    background: var(--primary);
    box-shadow: var(--shadow);
    position: sticky;
    top: 0;
    z-index: 1000;
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    cursor: pointer;
    user-select: none;
  }

  .navbar-logo {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--dark);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }

  .logo {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--dark);
    letter-spacing: 1px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .menu {
    display: flex;
    list-style: none;
    align-items: center;
  }

  .menu li {
    margin: 0 0.5rem;
  }

  .menu a {
    text-decoration: none;
    color: var(--dark);
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    border-radius: 25px;
    transition: var(--transition);
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
  }

  .menu a:hover:not(.active) {
    background: rgba(255, 255, 255, 0.35);
  }

  .menu .active {
    background: var(--secondary);
    color: var(--accent);
    font-weight: 700;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .cart-badge {
    background: var(--accent);
    color: white;
    border-radius: 50%;
    font-size: 0.75rem;
    font-weight: 700;
    width: 22px;
    height: 22px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 4px;
    animation: fadeIn 0.3s ease;
  }

  .hamburger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--dark);
    font-size: 1.6rem;
    padding: 0.5rem;
  }

  @media (max-width: 768px) {
    .navbar {
      padding: 0.9rem 6%;
    }

    .hamburger {
      display: block;
    }

    .menu {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background: var(--primary);
      flex-direction: column;
      padding: 1rem 0;
      clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
      transition: var(--transition);
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    }

    .menu.active {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }

    .menu li {
      margin: 0.5rem 0;
      text-align: center;
      width: 100%;
    }

    .menu a {
      justify-content: center;
      width: 80%;
      margin: 0 auto;
    }
  }
</style>

