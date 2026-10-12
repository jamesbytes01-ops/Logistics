"use client";

import React, { useState } from "react";
import Link from "next/link";
import { WebrootProduct } from "@/types";
import { useCart } from "@/context/CartContext";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: WebrootProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [showAdded, setShowAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product.id, 1);
    setShowAdded(true);
    setTimeout(() => {
      setShowAdded(false);
    }, 1800);
  };

  return (
    <article className={styles.card} aria-label={product.name}>
      {showAdded && (
        <div className={styles.addedNotice} role="status">
          Added to cart
        </div>
      )}

      {/* Card Header & Product Representation */}
      <div className={styles.cardHeader}>
        <div className={styles.badgeRow}>
          <span className={styles.categoryTag}>{product.category}</span>
          {product.badge && <span className={styles.productBadge}>{product.badge}</span>}
        </div>

        {/* Distinctive Graphic Product Plate */}
        <div className={styles.imagePlaceholder} aria-hidden="true">
          <div className={styles.imageGraphic}>
            <span className={styles.imageLogoBrand}>WEBROOT &reg;</span>
            <span className={styles.imageTitle}>{product.name.split("(")[0]}</span>
          </div>
          {/* Subtle Watermark Shield */}
          <svg className={styles.imageWatermark} width="90" height="90" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>

        <h3 className={styles.productTitle}>
          <Link href={`/shop/${product.slug}`} className={styles.productTitleLink}>
            {product.name}
          </Link>
        </h3>

        <div className={styles.metaRow}>
          <span className={styles.metaItem}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="14" x="2" y="3" rx="2" />
              <line x1="8" x2="16" y1="21" y2="21" />
              <line x1="12" x2="12" y1="17" y2="21" />
            </svg>
            {product.deviceLabel}
          </span>
          <span>&bull;</span>
          <span className={styles.metaItem}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {product.duration}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className={styles.cardBody}>
        <p className={styles.description}>{product.shortDescription}</p>

        {/* Supported OS */}
        <div className={styles.osSection}>
          <span className={styles.osLabel}>Supported Platforms</span>
          <div className={styles.osTags}>
            {product.supportedOS.map(os => (
              <span key={os} className={styles.osTag}>
                {os}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features List */}
        <ul className={styles.featureList}>
          {product.features.slice(0, 3).map((feat, index) => (
            <li key={index} className={styles.featureItem}>
              <svg className={styles.featureIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Footer with Price and Actions */}
      <div className={styles.cardFooter}>
        <div className={styles.priceRow}>
          <div className={styles.priceWrapper}>
            <span className={styles.priceCurrency}>$</span>
            <span className={styles.priceAmount}>{product.price.toFixed(2)}</span>
            <span className={styles.pricePeriod}>/ {product.duration === "1 Year" ? "yr" : "2-yr"}</span>
          </div>
          <span className={styles.licenseTermBadge}>Direct Retail License</span>
        </div>

        <div className={styles.actionsRow}>
          <Link href={`/shop/${product.slug}`} className={styles.detailsBtn}>
            Details
          </Link>
          <button
            type="button"
            className={styles.addToCartBtn}
            onClick={handleAddToCart}
            aria-label={`Add ${product.name} to cart for $${product.price.toFixed(2)}`}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
