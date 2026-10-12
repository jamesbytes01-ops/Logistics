"use client";

import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { WebrootProduct } from "@/types";
import { WEBROOT_PRODUCTS } from "@/data/webrootProducts";

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface HydratedCartItem {
  product: WebrootProduct;
  quantity: number;
  lineTotal: number;
}

interface CartContextType {
  items: CartItem[];
  hydratedItems: HydratedCartItem[];
  itemCount: number;
  subtotal: number;
  addToCart: (productId: string, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "pg_logistics_webroot_cart_v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: CartItem[] = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          // Validate product IDs against source of truth
          const validItems = parsed.filter(item =>
            WEBROOT_PRODUCTS.some(p => p.id === item.productId) && item.quantity > 0
          );
          setItems(validItems);
        }
      }
    } catch {
      // Fallback on storage errors
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Fallback
    }
  }, [items, isLoaded]);

  // Hydrate items against trusted product data (source of truth)
  const hydratedItems = useMemo<HydratedCartItem[]>(() => {
    return items
      .map(item => {
        const product = WEBROOT_PRODUCTS.find(p => p.id === item.productId);
        if (!product) return null;
        return {
          product,
          quantity: item.quantity,
          lineTotal: +(product.price * item.quantity).toFixed(2),
        };
      })
      .filter((item): item is HydratedCartItem => item !== null);
  }, [items]);

  const itemCount = useMemo(() => {
    return items.reduce((total, item) => total + item.quantity, 0);
  }, [items]);

  const subtotal = useMemo(() => {
    const raw = hydratedItems.reduce((total, item) => total + item.lineTotal, 0);
    return +raw.toFixed(2);
  }, [hydratedItems]);

  const addToCart = (productId: string, quantity = 1) => {
    if (quantity <= 0) return;
    // Verify product exists in official catalog
    const productExists = WEBROOT_PRODUCTS.some(p => p.id === productId);
    if (!productExists) return;

    setItems(prev => {
      const existingIndex = prev.findIndex(item => item.productId === productId);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
        };
        return next;
      }
      return [...prev, { productId, quantity }];
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.productId === productId ? { ...item, quantity: Math.min(quantity, 50) } : item
      )
    );
  };

  const removeFromCart = (productId: string) => {
    setItems(prev => prev.filter(item => item.productId !== productId));
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        hydratedItems,
        itemCount,
        subtotal,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
