"use client";

import React, { useState, useMemo } from "react";
import { WEBROOT_PRODUCTS } from "@/data/webrootProducts";
import { ProductCard } from "@/components/shop/ProductCard";
import { ProductFilters, FilterState } from "@/components/shop/ProductFilters";
import styles from "./page.module.css";

export default function ShopPage() {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    category: "All Categories",
    os: "All Systems",
    devices: "All Devices",
    duration: "All Durations",
    sort: "featured",
  });

  const filteredProducts = useMemo(() => {
    return WEBROOT_PRODUCTS.filter((product) => {
      // 1. Search Query
      if (filters.search.trim()) {
        const query = filters.search.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.shortDescription.toLowerCase().includes(query);
        const matchesCategory = product.category.toLowerCase().includes(query);
        const matchesFeatures = product.features.some(f => f.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesCategory && !matchesFeatures) {
          return false;
        }
      }

      // 2. Category
      if (filters.category !== "All Categories" && product.category !== filters.category) {
        return false;
      }

      // 3. Operating System
      if (filters.os !== "All Systems") {
        if (!product.supportedOS.includes(filters.os as any)) {
          return false;
        }
      }

      // 4. Device Coverage
      if (filters.devices !== "All Devices") {
        if (filters.devices === "1 Device" && product.deviceCount !== 1) return false;
        if (filters.devices === "3 Devices" && product.deviceCount !== 3) return false;
        if (filters.devices === "5 Devices" && product.deviceCount !== 5) return false;
      }

      // 5. Duration
      if (filters.duration !== "All Durations" && product.duration !== filters.duration) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sort === "price-asc") {
        return a.price - b.price;
      }
      if (filters.sort === "price-desc") {
        return b.price - a.price;
      }
      if (filters.sort === "name-asc") {
        return a.name.localeCompare(b.name);
      }
      return 0; // default featured order
    });
  }, [filters]);

  return (
    <div className={styles.pageWrapper}>
      {/* Header Banner */}
      <section className={styles.heroHeader}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.kicker}>Software &amp; Digital Solutions Store</span>
            <h1 className={styles.title}>Webroot Cybersecurity Products</h1>
            <p className={styles.subtitle}>
              Browse legitimate, verified Webroot subscriptions. Lightweight cloud-native threat protection, secure VPN encryption, and multi-device identity defense with transparent pricing and direct licensing.
            </p>
            <div className={styles.licenseBanner}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>
                <strong>Authentic Licensing:</strong> All products are genuine Webroot software licenses. No grey-market codes, trial counterfeits, or unverified keys.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section className={styles.contentSection}>
        <div className="container">
          {/* Interactive Filters & Controls */}
          <ProductFilters
            filters={filters}
            onChange={setFilters}
            totalMatches={filteredProducts.length}
          />

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className={styles.grid}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#94a3b8" }}>
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <h2 className={styles.emptyTitle}>No matching products found</h2>
              <p className={styles.emptyText}>
                No products matched your selected criteria. Try resetting your search filters or adjusting your device and OS preferences.
              </p>
              <button
                type="button"
                onClick={() =>
                  setFilters({
                    search: "",
                    category: "All Categories",
                    os: "All Systems",
                    devices: "All Devices",
                    duration: "All Durations",
                    sort: "featured",
                  })
                }
                className="btn btnSecondary"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Trademark & License Disclaimer */}
          <div className={styles.trademarkDisclaimer}>
            <p>
              <strong>Product &amp; Trademark Notice:</strong> Webroot, Webroot SecureAnywhere, and BrightCloud are registered trademarks of OpenText Corporation. PG Specialized Logistics LLC offers authentic retail software licenses. Product specifications, system requirements, and manufacturer features are presented according to published manufacturer details.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
