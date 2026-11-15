<script>
  import Navbar from './components/Navbar.svelte';
  import Footer from './components/Footer.svelte';
  import Home from './pages/Home.svelte';
  import Products from './pages/Products.svelte';
  import Cart from './pages/Cart.svelte';
  import About from './pages/About.svelte';
  import { router } from './stores/router.js';
</script>

<div class="app-layout">
  <Navbar />

  <main class="main-content">
    {#if $router === 'home'}
      <Home />
    {:else if $router === 'products'}
      <Products />
    {:else if $router === 'cart'}
      <Cart />
    {:else if $router === 'about'}
      <About />
    {:else}
      <Home />
    {/if}
  </main>

  <Footer />
</div>

<style>
  .app-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .main-content {
    flex-grow: 1;
  }
</style>

