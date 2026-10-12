import React from "react";
import Link from "next/link";
import { WEBROOT_PRODUCTS } from "@/data/webrootProducts";
import { ProductCard } from "@/components/shop/ProductCard";
import styles from "./FeaturedShop.module.css";

export function FeaturedShop() {
  // Select 4 distinct representative products
  const featuredIds = [
    "wr-av-1d-1y",
    "wr-essentials-3d-1y",
    "wr-is-complete-5d-1y",
    "wr-vpn-3d-1y",
  ];

  const featured = WEBROOT_PRODUCTS.filter((p) => featuredIds.includes(p.id));

  return (
    <section className={styles.sectionWrapper} aria-labelledby="featured-shop-heading">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.kicker}>Authorized Software Retail</span>
            <h2 id="featured-shop-heading" className={styles.heading}>
              Featured Webroot Cybersecurity Solutions
            </h2>
            <p className={styles.subtext}>
              Explore verified Webroot antivirus, VPN, and device security subscriptions. Cloud-based protection with rapid scan speeds, low system resource footprint, and authentic retail licensing.
            </p>
          </div>

          <div>
            <Link href="/shop" className="btn btnSecondary">
              Browse All 15 Offerings
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className={styles.productsGrid}>
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Banner Pathway */}
        <div className={styles.bottomBanner}>
          <div>
            <div className={styles.bannerTitle}>Need Coverage for Multiple Devices or Workstations?</div>
            <p className={styles.bannerText}>
              Our complete catalog features 15 distinct, verified Webroot subscriptions spanning single-PC antivirus, multi-device household plans, encrypted VPN tunnels, and commercial business endpoint protection.
            </p>
          </div>
          <Link href="/shop" className="btn btnPrimary">
            View Complete Software Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
