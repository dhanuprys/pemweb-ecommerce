import { create } from "zustand";

const useCart = create((set, get) => ({
    products: [],
    addProduct: (product, quantity = 1) => set((state) => {
        const existingProduct = state.products.find((p) => p.id === product.id);
        if (existingProduct) {
            return { products: state.products.map((p) => p.id === product.id ? { ...p, quantity: p.quantity + quantity } : p) };
        }
        return { products: [...state.products, { ...product, quantity: quantity }] };
    }),
    removeProduct: (product) => set((state) => {
        const existingProduct = state.products.find((p) => p.id === product.id);
        if (existingProduct) {
            return { products: state.products.map((p) => p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p) };
        }
        return { products: state.products.filter((p) => p.id !== product.id) };
    }),
    clearProducts: () => set({ products: [] }),
    getTotalProducts: () => get().products.length,
    getTotalPrice: () => get().products.reduce((total, product) => total + product.price, 0),
    getTotalQuantity: () => get().products.reduce((total, product) => total + product.quantity, 0),
    getTotalPrice: () => get().products.reduce((total, product) => total + product.price, 0),
}));

export default useCart;