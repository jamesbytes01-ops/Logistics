import React from "react";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/companyInfo";
import styles from "./ContactCallout.module.css";

export function ContactCallout() {
  return (
    <section className={styles.sectionWrapper} aria-labelledby="contact-callout-heading">
      <div className="container">
        <div className={styles.box}>
          <div>
            <h2 id="contact-callout-heading" className={styles.heading}>
              Connect with PG Specialized Logistics LLC
            </h2>
            <p className={styles.description}>
              Whether you are looking to discuss proposed commercial transportation coordination along southwest freight corridors or require inquiries regarding Webroot software licenses, our business operations team is ready to assist.
            </p>
            <div className={styles.actions}>
              <Link href="/contact" className="btn btnPrimary">
                Open Contact Form
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link href="/services" className="btn btnOutline">
                Review Service Scope
              </Link>
            </div>
          </div>

          <div className={styles.addressCard}>
            <div className={styles.addressCardTitle}>Verified Corporate Headquarters</div>
            <div className={styles.companyName}>{COMPANY_INFO.name}</div>
            <div className={styles.street}>{COMPANY_INFO.address.street}</div>
            <div className={styles.cityState}>
              {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.postalCode}, {COMPANY_INFO.address.country}
            </div>
            <div style={{ fontSize: "0.82rem", color: "#64748b" }}>
              Commercial Freight &amp; Digital Cybersecurity Solutions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
