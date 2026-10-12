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
              Professional commercial logistics coordination and authorized retail distribution of authentic Webroot cybersecurity software subscriptions.
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
              <li><Link href="/webroot-antivirus" className={styles.link}>Webroot Antivirus</Link></li>
              <li><Link href="/contact" className={styles.link}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Software Categories */}
          <div>
            <h3 className={styles.colHeading}>Webroot Store</h3>
            <ul className={styles.linkList}>
              <li><Link href="/webroot-antivirus?category=Antivirus" className={styles.link}>AntiVirus Protection</Link></li>
              <li><Link href="/webroot-antivirus?category=Essentials" className={styles.link}>Essentials Plans</Link></li>
              <li><Link href="/webroot-antivirus?category=Internet+Security" className={styles.link}>Internet Security Plus</Link></li>
              <li><Link href="/webroot-antivirus?category=Complete+Security" className={styles.link}>Complete Security Suite</Link></li>
              <li><Link href="/webroot-antivirus?category=VPN+%26+Privacy" className={styles.link}>Secure VPN Client</Link></li>
              <li><Link href="/webroot-antivirus?category=Business+Solutions" className={styles.link}>Business Endpoints</Link></li>
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

        {/* Prominent Legal & Commercial Disclaimer Card */}
        <div className={styles.disclaimerCard}>
          <div className={styles.disclaimerCardHeader}>
            <svg className={styles.disclaimerIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span className={styles.disclaimerCardTitle}>IMPORTANT LEGAL &amp; COMMERCIAL DISCLAIMER</span>
          </div>

          <div className={styles.disclaimerCardBody}>
            <p>
              <strong>Independent Retailer &amp; Trademark Attribution:</strong> PG SPECIALIZED LOGISTICS LLC is an independent commercial company and an independent reseller/retailer of authentic computer software products. Webroot, Webroot SecureAnywhere, BrightCloud, and associated logos are registered trademarks of OpenText Corporation. PG Specialized Logistics LLC is not directly affiliated with, sponsored by, or endorsed by OpenText Corporation.
            </p>
            <p>
              <strong>Authentic Software Licensing &amp; Delivery:</strong> All software subscriptions sold through this website are genuine, legitimate, and sourced through verified commercial distribution channels. Product keys and activation instructions are delivered electronically upon order processing and are governed by the respective software publisher&apos;s End User License Agreement (EULA).
            </p>
            <p>
              <strong>Commercial Logistics Capabilities:</strong> Freight transportation coordination, logistics planning, and distribution capabilities referenced on this website reflect commercial services managed from our registered commercial address at 402 LOGISTIC DR, LAREDO, TX 78045. All transportation arrangements are subject to formal written carrier agreements, route availability, and regulatory compliance.
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimers & Regulatory Notices */}
      <div className={styles.disclaimerSection}>
        <div className="container">
          <div className={styles.bottomBar}>
            <div>
              &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </div>
            <div>
              Registered Corporate Address: {COMPANY_INFO.address.formatted}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
