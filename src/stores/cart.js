import { writable, derived } from 'svelte/store';

// Helper format Rupiah
export function formatRupiah(amount) {
  if (typeof amount !== 'number') {
    amount = parseInt(String(amount).replace(/[^0-9]/g, '')) || 0;
  }
  return 'Rp ' + amount.toLocaleString('id-ID');
}

// Inisialisasi keranjang dari localStorage jika ada
function getInitialCart() {
  try {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    return [];
  }
}

function createCartStore() {
  const { subscribe, set, update } = writable(getInitialCart());

  // Simpan ke localStorage setiap ada perubahan
  subscribe((items) => {
    try {
      localStorage.setItem('cart', JSON.stringify(items));
    } catch (e) {
      console.error('Gagal menyimpan keranjang ke localStorage', e);
    }
  });

  return {
    subscribe,
    addItem: (product) => {
      update((items) => {
        const id = product.id;
        const existing = items.find((item) => item.id === id);
        if (existing) {
          return items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          return [
            ...items,
            {
              id: product.id,
              name: product.name,
              price: product.priceStr || formatRupiah(product.price),
              priceNum: product.price,
              image: product.image,
              quantity: 1,
              category: product.category || ''
            }
          ];
        }
      });
    },
    updateQuantity: (id, quantity) => {
      const q = Math.max(1, parseInt(quantity) || 1);
      update((items) =>
        items.map((item) => (item.id === id ? { ...item, quantity: q } : item))
      );
    },
    removeItem: (id) => {
      update((items) => items.filter((item) => item.id !== id));
    },
    clearCart: () => {
      set([]);
    }
  };
}

export const cart = createCartStore();

// Derived values
export const cartCount = derived(cart, ($cart) =>
  $cart.reduce((total, item) => total + item.quantity, 0)
);

export const cartSubtotal = derived(cart, ($cart) =>
  $cart.reduce((sum, item) => {
    const price =
      typeof item.priceNum === 'number'
        ? item.priceNum
        : parseInt(String(item.price).replace(/[^0-9]/g, '')) || 0;
    return sum + price * item.quantity;
  }, 0)
);

export const cartDiscount = derived(cartSubtotal, ($subtotal) =>
  $subtotal > 500000 ? 50000 : 0
);

export const cartTotal = derived(
  [cartSubtotal, cartDiscount],
  ([$subtotal, $discount]) => Math.max(0, $subtotal - $discount)
);

