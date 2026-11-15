import { writable } from 'svelte/store';

function getRouteFromHash() {
  const hash = window.location.hash.slice(1);
  if (hash === '/products' || hash === 'products') return 'products';
  if (hash === '/cart' || hash === 'cart') return 'cart';
  if (hash === '/about' || hash === 'about') return 'about';
  return 'home';
}

function createRouter() {
  const { subscribe, set } = writable(getRouteFromHash());

  // Listen to hash change
  if (typeof window !== 'undefined') {
    window.addEventListener('hashchange', () => {
      set(getRouteFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  return {
    subscribe,
    navigate: (route) => {
      window.location.hash = `#/${route === 'home' ? '' : route}`;
      set(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
}

export const router = createRouter();

