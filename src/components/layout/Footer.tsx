import React from "react";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/companyInfo";
import styles from "./Footer.module.css";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerMain}`}>
        <div className={styles.grid}>
          {/* Brand & Address Column */}
          <div className={styles.brandCol}>
            <div className={styles.brandHeading}>
              <div className={styles.brandLogoMark} aria-hidden="true">
                PG
              </div>
              <span className={styles.brandName}>{COMPANY_INFO.name}</span>
            </div>
            <p className={styles.brandDescription}>
              Professional logistics coordination and authorized retail distribution of authentic Webroot cybersecurity software subscriptions.
            </p>
            <div className={styles.addressBox}>
              <span className={styles.addressLabel}>Official Business Location</span>
              <span>{COMPANY_INFO.address.street}</span>
              <span>{COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.postalCode}</span>
              <span>{COMPANY_INFO.address.country}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className={styles.colHeading}>Navigation</h3>
            <ul className={styles.linkList}>
              <li><Link href="/" className={styles.link}>Home</Link></li>
              <li><Link href="/services" className={styles.link}>Logistics Services</Link></li>
              <li><Link href="/about" className={styles.link}>About Company</Link></li>
              <li><Link href="/shop" className={styles.link}>Webroot Catalog</Link></li>
              <li><Link href="/contact" className={styles.link}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Software Categories */}
          <div>
            <h3 className={styles.colHeading}>Webroot Store</h3>
            <ul className={styles.linkList}>
              <li><Link href="/shop?category=Antivirus" className={styles.link}>AntiVirus Protection</Link></li>
              <li><Link href="/shop?category=Essentials" className={styles.link}>Essentials Plans</Link></li>
              <li><Link href="/shop?category=Internet+Security" className={styles.link}>Internet Security Plus</Link></li>
              <li><Link href="/shop?category=Complete+Security" className={styles.link}>Complete Security Suite</Link></li>
              <li><Link href="/shop?category=VPN+%26+Privacy" className={styles.link}>Secure VPN Client</Link></li>
              <li><Link href="/shop?category=Business+Solutions" className={styles.link}>Business Endpoints</Link></li>
            </ul>
          </div>

          {/* Policies & Support */}
          <div>
            <h3 className={styles.colHeading}>Customer Policies</h3>
            <ul className={styles.linkList}>
              <li><Link href="/faq" className={styles.link}>Frequently Asked Questions</Link></li>
              <li><Link href="/privacy-policy" className={styles.link}>Privacy Policy</Link></li>
              <li><Link href="/terms" className={styles.link}>Terms & Conditions</Link></li>
              <li><Link href="/refund-policy" className={styles.link}>Refund Policy</Link></li>
              <li><Link href="/subscription-policy" className={styles.link}>Subscription & Renewal</Link></li>
              <li><Link href="/support" className={styles.link}>Technical Support</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimers & Regulatory Notices */}
      <div className={styles.disclaimerSection}>
        <div className="container">
          <p className={styles.disclaimerText}>
            <strong>Commercial Logistics Disclosure:</strong> Logistics and transportation capabilities listed on this website represent proposed commercial service offerings subject to definitive contract terms, carrier assignment, and verified service agreements.
          </p>
          <p className={styles.disclaimerText}>
            <strong>Trademark & Software Notice:</strong> Webroot, SecureAnywhere, and related trademarks are intellectual property of OpenText Corporation. PG Specialized Logistics LLC sells authentic, verifiable software retail licenses.
          </p>
          <div className={styles.bottomBar}>
            <div>
              &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </div>
            <div>
              Registered Address: {COMPANY_INFO.address.formatted}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
