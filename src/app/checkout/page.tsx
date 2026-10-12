"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import styles from "./page.module.css";

export default function CheckoutPage() {
  const { hydratedItems, itemCount, subtotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mockRef = `PGL-REQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(mockRef);
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <div className={styles.pageWrapper}>
        <section className={styles.heroHeader}>
          <div className="container">
            <h1 className={styles.title}>Order Request Acknowledged</h1>
            <p className={styles.subtitle}>Demonstration &amp; Direct Invoice Workflow</p>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className="container">
            <div className={styles.successCard}>
              <div className={styles.successIcon} aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <h2 className={styles.successTitle}>Demonstration Request Submitted</h2>
              <p className={styles.successText}>
                <strong>Reference Code: {referenceId}</strong>
              </p>
              <p className={styles.successText}>
                Thank you, <strong>{formData.fullName || "Customer"}</strong>. As stated, this website currently operates in demonstration / pre-integration mode without an active live payment gateway. No credit card has been charged.
              </p>
              <p className={styles.successText}>
                For active commercial licensing and official invoices, our operations staff at 402 Logistic Dr, Laredo, TX can be reached via our contact page.
              </p>

              <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
                <Link href="/webroot-antivirus" className="btn btnPrimary">
                  Back to Software Catalog
                </Link>
                <Link href="/contact" className="btn btnOutline">
                  Contact Office
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (itemCount === 0) {
    return (
      <div className={styles.pageWrapper}>
        <section className={styles.heroHeader}>
          <div className="container">
            <h1 className={styles.title}>Checkout Review</h1>
            <p className={styles.subtitle}>Review items before proceeding</p>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className="container">
            <div className={styles.formCard} style={{ textAlign: "center", padding: "64px 32px" }}>
              <h2>Your cart is currently empty</h2>
              <p style={{ color: "#64748b", margin: "12px 0 24px" }}>
                There are no items to review for checkout.
              </p>
              <Link href="/webroot-antivirus" className="btn btnPrimary" style={{ margin: "0 auto" }}>
                Browse Webroot Catalog
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
          <h1 className={styles.title}>Checkout &amp; Order Review</h1>
          <p className={styles.subtitle}>
            Order review and direct software licensing dispatch form
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.checkoutGrid}>
            {/* Customer Details Form */}
            <form onSubmit={handleSubmit} className={styles.formCard}>
              {/* Honest Payment Status Notice */}
              <div className={styles.noticeAlert}>
                <svg className={styles.alertIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <div>
                  <div className={styles.alertTitle}>Demonstration &amp; Pending Payment Gateway Notice</div>
                  <div className={styles.alertText}>
                    Live automated payment processor integration (Stripe / merchant terminal) is currently pending configuration. In accordance with security standards, <strong>no sensitive payment card data is collected on this form</strong>. Completing this step records a demo license requisition or corporate invoice request.
                  </div>
                </div>
              </div>

              <div>
                <h2 className={styles.sectionHeading}>License Recipient Information</h2>
                <div className={styles.inputGrid}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="fullName" className={styles.label}>
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Recipient Email (for license key dispatch) *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className={styles.input}
                    />
                  </div>

                  <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                    <label htmlFor="companyName" className={styles.label}>
                      Company Name (Optional)
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Commercial Enterprise LLC"
                      className={styles.input}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h2 className={styles.sectionHeading}>Billing Address Information</h2>
                <div className={styles.inputGrid}>
                  <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                    <label htmlFor="address" className={styles.label}>
                      Street Address *
                    </label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="100 Commercial Blvd, Suite 200"
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="city" className={styles.label}>
                      City *
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Laredo"
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="state" className={styles.label}>
                      State / Province *
                    </label>
                    <input
                      id="state"
                      name="state"
                      type="text"
                      required
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="TX"
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="zipCode" className={styles.label}>
                      Postal / ZIP Code *
                    </label>
                    <input
                      id="zipCode"
                      name="zipCode"
                      type="text"
                      required
                      value={formData.zipCode}
                      onChange={handleChange}
                      placeholder="78045"
                      className={styles.input}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h2 className={styles.sectionHeading}>Requisition Notes (Optional)</h2>
                <div className={styles.inputGroup}>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Specify special billing terms, multiple recipient emails, or enterprise deployment requirements..."
                    className={styles.input}
                  />
                </div>
              </div>

              <button type="submit" className="btn btnPrimary" style={{ width: "100%", padding: "14px" }}>
                Submit License Order Requisition &bull; ${subtotal.toFixed(2)}
              </button>
            </form>

            {/* Order Review Sidebar */}
            <aside className={styles.summaryCard}>
              <h2 className={styles.summaryTitle}>Cart Items ({itemCount})</h2>

              <div className={styles.reviewList}>
                {hydratedItems.map(({ product, quantity, lineTotal }) => (
                  <div key={product.id} className={styles.reviewItem}>
                    <div>
                      <div className={styles.reviewName}>{product.name}</div>
                      <div className={styles.reviewMeta}>
                        Qty: {quantity} &times; ${product.price.toFixed(2)} &bull; {product.duration}
                      </div>
                    </div>
                    <div className={styles.reviewPrice}>${lineTotal.toFixed(2)}</div>
                  </div>
                ))}
              </div>

              <div className={styles.totalsRow}>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className={styles.totalsRow}>
                <span>License Key Dispatch</span>
                <span style={{ color: "var(--color-status-success)", fontWeight: 600 }}>Electronic Delivery</span>
              </div>

              <div className={styles.grandTotalRow}>
                <span>Total Due</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <Link href="/cart" className="btn btnOutline" style={{ textAlign: "center" }}>
                Edit Cart Items
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
