"use client";

import React, { useState } from "react";
import Link from "next/link";
import { WebrootProduct } from "@/types";
import { useCart } from "@/context/CartContext";
import styles from "./page.module.css";

interface ProductDetailViewProps {
  product: WebrootProduct;
}

export function ProductDetailView({ product }: ProductDetailViewProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumb Navigation */}
      <div className={styles.breadcrumbBar}>
        <div className="container">
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span>/</span>
            <Link href="/shop" className={styles.breadcrumbLink}>Webroot Store</Link>
            <span>/</span>
            <span aria-current="page">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container">
        <div className={styles.mainGrid}>
          {/* Visual Presentation Column */}
          <div className={styles.imageCol}>
            <div className={styles.productGraphicHero}>
              <span className={styles.brandLabel}>WEBROOT &reg; SECURITY</span>
              <h2 className={styles.graphicTitle}>{product.name.split("(")[0]}</h2>
              <span className={styles.graphicBadge}>{product.deviceLabel} &bull; {product.duration}</span>

              {/* Watermark icon */}
              <svg className={styles.watermarkShield} width="180" height="180" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
          </div>

          {/* Details & Purchase Controls */}
          <div className={styles.infoCol}>
            <div className={styles.titleArea}>
              <div className={styles.badgeRow}>
                <span className={styles.categoryTag}>{product.category}</span>
                {product.badge && <span className="badge badgeAmber">{product.badge}</span>}
              </div>

              <h1 className={styles.productName}>{product.name}</h1>

              <div className={styles.metaTags}>
                <span className={styles.metaItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="14" x="2" y="3" rx="2" />
                    <line x1="8" x2="16" y1="21" y2="21" />
                    <line x1="12" x2="12" y1="17" y2="21" />
                  </svg>
                  {product.deviceLabel}
                </span>
                <span>&bull;</span>
                <span className={styles.metaItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {product.duration} Term
                </span>
              </div>
            </div>

            {/* Price & Purchase Box */}
            <div className={styles.priceBox}>
              <div className={styles.priceRow}>
                <div className={styles.priceWrapper}>
                  <span className={styles.priceCurrency}>$</span>
                  <span className={styles.priceAmount}>{product.price.toFixed(2)}</span>
                  <span className={styles.pricePeriod}>/ {product.billingPeriod}</span>
                </div>
                <span className="badge badgeSubtle">Authentic Retail License</span>
              </div>

              <div className={styles.purchaseControls}>
                <div className={styles.quantityGroup}>
                  <button
                    type="button"
                    className={styles.qtyBtn}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className={styles.qtyDisplay}>{quantity}</span>
                  <button
                    type="button"
                    className={styles.qtyBtn}
                    onClick={() => setQuantity(Math.min(25, quantity + 1))}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className={styles.addToCartBtn}
                  onClick={handleAddToCart}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                  </svg>
                  Add {quantity} to Cart &bull; ${(product.price * quantity).toFixed(2)}
                </button>
              </div>

              {added && (
                <div className={styles.addedFeedback} role="status">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Added {quantity} unit(s) to your cart!</span>
                  <Link href="/cart" style={{ textDecoration: "underline", marginLeft: "auto", fontWeight: 700 }}>
                    View Cart
                  </Link>
                </div>
              )}
            </div>

            {/* Full Description */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>Product Overview</h2>
              <p className={styles.fullDescription}>{product.fullDescription}</p>
            </div>

            {/* Features List */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>Included Cybersecurity Features</h2>
              <ul className={styles.featuresGrid}>
                {product.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications & Compatibility Table */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>Technical Specifications &amp; Compatibility</h2>
              <table className={styles.specsTable}>
                <tbody>
                  <tr>
                    <th>Supported Operating Systems</th>
                    <td>{product.supportedOS.join(", ")}</td>
                  </tr>
                  <tr>
                    <th>Device Allocation</th>
                    <td>{product.deviceLabel}</td>
                  </tr>
                  <tr>
                    <th>License Duration</th>
                    <td>{product.duration}</td>
                  </tr>
                  <tr>
                    <th>Average Scan Speed</th>
                    <td>{product.specs.scanSpeed}</td>
                  </tr>
                  <tr>
                    <th>Client RAM Usage</th>
                    <td>{product.specs.ramFootprint}</td>
                  </tr>
                  <tr>
                    <th>Outbound Firewall &amp; Network Monitor</th>
                    <td>{product.specs.firewallIncluded ? "Included" : "Not Applicable"}</td>
                  </tr>
                  <tr>
                    <th>Password Manager</th>
                    <td>{product.specs.passwordManager ? "Included (LastPass integration)" : "Not Included"}</td>
                  </tr>
                  <tr>
                    <th>Secure VPN Tunnel</th>
                    <td>{product.specs.vpnIncluded ? "Included (256-bit AES)" : "Not Included"}</td>
                  </tr>
                  {product.specs.cloudStorage && (
                    <tr>
                      <th>Cloud Storage Space</th>
                      <td>{product.specs.cloudStorage}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* FAQs */}
            {product.faqs && product.faqs.length > 0 && (
              <div className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>Frequently Asked Questions</h2>
                {product.faqs.map((faq, idx) => (
                  <div key={idx} className={styles.faqItem}>
                    <div className={styles.faqQ}>{faq.question}</div>
                    <div className={styles.faqA}>{faq.answer}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
