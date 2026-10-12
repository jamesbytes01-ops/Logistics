"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import styles from "./page.module.css";

export default function CartPage() {
  const { hydratedItems, itemCount, subtotal, updateQuantity, removeFromCart, clearCart } = useCart();

  if (itemCount === 0) {
    return (
      <div className={styles.pageWrapper}>
        <section className={styles.heroHeader}>
          <div className="container">
            <h1 className={styles.title}>Your Shopping Cart</h1>
            <p className={styles.subtitle}>Review your selected Webroot software licenses</p>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className="container">
            <div className={styles.emptyBox}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              <h2 className={styles.emptyTitle}>Your cart is currently empty</h2>
              <p className={styles.emptyText}>
                You haven&apos;t added any Webroot cybersecurity licenses to your cart yet. Explore our verified product catalog to find the right protection plan for your devices.
              </p>
              <Link href="/webroot-antivirus" className="btn btnPrimary">
                Return to Webroot Store
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroHeader}>
        <div className="container">
          <h1 className={styles.title}>Your Shopping Cart</h1>
          <p className={styles.subtitle}>
            You have {itemCount} license subscription{itemCount === 1 ? "" : "s"} selected.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.cartGrid}>
            {/* Items List Card */}
            <div className={styles.itemsCard}>
              <div className={styles.tableHeader}>
                <span>Product Name</span>
                <span>Unit Price</span>
                <span>Quantity</span>
                <span style={{ textAlign: "right" }}>Total</span>
                <span></span>
              </div>

              <div className={styles.itemsList}>
                {hydratedItems.map(({ product, quantity, lineTotal }) => (
                  <div key={product.id} className={styles.cartRow}>
                    {/* Title & Metadata */}
                    <div className={styles.productInfo}>
                      <Link href={`/webroot-antivirus/${product.slug}`} className={styles.itemTitle}>
                        {product.name}
                      </Link>
                      <span className={styles.itemMeta}>
                        {product.deviceLabel} &bull; {product.duration} License
                      </span>
                    </div>

                    {/* Unit Price */}
                    <div className={styles.unitPrice}>
                      ${product.price.toFixed(2)}
                    </div>

                    {/* Quantity Controls */}
                    <div className={styles.qtyControls}>
                      <button
                        type="button"
                        className={styles.qtyBtn}
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        aria-label={`Decrease quantity of ${product.name}`}
                      >
                        -
                      </button>
                      <span className={styles.qtyVal}>{quantity}</span>
                      <button
                        type="button"
                        className={styles.qtyBtn}
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        aria-label={`Increase quantity of ${product.name}`}
                      >
                        +
                      </button>
                    </div>

                    {/* Line Total */}
                    <div className={styles.lineTotal} style={{ textAlign: "right" }}>
                      ${lineTotal.toFixed(2)}
                    </div>

                    {/* Remove Action */}
                    <div>
                      <button
                        type="button"
                        className={styles.removeBtn}
                        onClick={() => removeFromCart(product.id)}
                        aria-label={`Remove ${product.name} from cart`}
                        title="Remove item"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Link href="/webroot-antivirus" className="btn btnOutline">
                  &larr; Continue Shopping
                </Link>
                <button
                  type="button"
                  onClick={clearCart}
                  style={{ color: "#64748b", fontSize: "0.85rem", textDecoration: "underline", cursor: "pointer" }}
                >
                  Clear Entire Cart
                </button>
              </div>
            </div>

            {/* Cart Summary Card */}
            <aside className={styles.summaryCard}>
              <h2 className={styles.summaryHeading}>Order Summary</h2>

              <div className={styles.summaryRow}>
                <span>Items Subtotal ({itemCount})</span>
                <span style={{ fontWeight: 600 }}>${subtotal.toFixed(2)}</span>
              </div>

              <div className={styles.summaryRow}>
                <span>Digital Delivery</span>
                <span style={{ color: "var(--color-status-success)", fontWeight: 600 }}>Free (Email Key)</span>
              </div>

              <div className={styles.summaryRow}>
                <span>Estimated Sales Tax</span>
                <span>Calculated at checkout</span>
              </div>

              <div className={styles.totalRow}>
                <span>Estimated Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <Link href="/checkout" className="btn btnPrimary" style={{ width: "100%" }}>
                Proceed to Checkout
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>

              <div className={styles.checkoutNotice}>
                <strong>Digital Delivery Notice:</strong> Webroot license keys and download instructions are dispatched electronically to your designated business or personal email following confirmation.
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
