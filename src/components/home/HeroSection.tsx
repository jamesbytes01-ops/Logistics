import React from "react";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/companyInfo";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section className={styles.heroWrapper} aria-labelledby="hero-heading">
      <div className={styles.heroBackgroundPattern} aria-hidden="true" />
      <div className="container">
        <div className={styles.heroContentGrid}>
          {/* Main Hero Copy */}
          <div className={styles.heroTextCol}>
            <div className={styles.badgePill}>
              <span className={styles.pulseDot} />
              <span>Commercial Freight & Cybersecurity Distribution</span>
            </div>

            <h1 id="hero-heading" className={styles.heroHeading}>
              Moving Business Forward with <span className={styles.heroHighlight}>Reliable Logistics.</span>
            </h1>

            <p className={styles.heroSubtitle}>
              Discover a professional approach to logistics, transportation coordination, and business-ready solutions. Headquartered at {COMPANY_INFO.address.street} in Laredo, Texas, we combine freight planning frameworks with authorized distribution of Webroot cybersecurity subscriptions.
            </p>

            <div className={styles.ctaRow}>
              <Link href="/services" className="btn btnPrimary">
                Explore Our Services
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link href="/shop" className="btn btnOutlineWhite">
                Shop Webroot Products
              </Link>
            </div>
          </div>

          {/* Logistics Operations Panel */}
          <div className={styles.heroCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardTitle}>Operational Hub Profile</span>
              <span className={styles.locationIndicator}>Laredo Gateway</span>
            </div>

            <div className={styles.specsList}>
              <div className={styles.specItem}>
                <div className={styles.specIconBox}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <div>
                  <div className={styles.specLabel}>Commercial Freight Coordination</div>
                  <div className={styles.specDesc}>
                    Focused planning for regional truckload and LTL transportation along vital southern logistics arteries.
                  </div>
                </div>
              </div>

              <div className={styles.specItem}>
                <div className={styles.specIconBox}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>
                <div>
                  <div className={styles.specLabel}>Supply Chain Documentation</div>
                  <div className={styles.specDesc}>
                    Verification of bill-of-lading, shipment manifests, and scheduled dock staging protocols.
                  </div>
                </div>
              </div>

              <div className={styles.specItem}>
                <div className={styles.specIconBox}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <div>
                  <div className={styles.specLabel}>Endpoint & Network Security</div>
                  <div className={styles.specDesc}>
                    Authentic Webroot cybersecurity licenses to safeguard administrative computers and mobile devices.
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.dualBusinessBanner}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              <span>Verified operating address: {COMPANY_INFO.address.formatted}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
