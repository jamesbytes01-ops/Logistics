import React from "react";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/companyInfo";
import styles from "./CompanyIntro.module.css";

export function CompanyIntro() {
  return (
    <section className={styles.sectionWrapper} aria-labelledby="intro-heading">
      <div className="container">
        <div className={styles.layoutGrid}>
          {/* Main Column */}
          <div className={styles.contentCol}>
            <span className={styles.kicker}>About Our Organization</span>
            <h2 id="intro-heading" className={styles.heading}>
              Focused on Operational Integrity and Verified Service Delivery
            </h2>
            <p className={styles.leadText}>
              <strong>{COMPANY_INFO.name}</strong> operates from {COMPANY_INFO.address.street} in Laredo, Texas — one of North America’s premier commercial transit and freight gateways.
            </p>
            <p className={styles.bodyText}>
              Our focus centers on two critical pillars of modern business continuity: structured freight transportation and distribution coordination, alongside digital endpoint security through authentic Webroot software licenses. By pairing physical logistics planning with digital cybersecurity tools, we support commercial resilience from warehouse dock to executive workstation.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <div className={styles.infoCardTitle}>Logistics Planning</div>
                <div className={styles.infoCardText}>
                  Coordination of freight transit, appointment scheduling, and carrier milestones with transparent communication.
                </div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoCardTitle}>Endpoint Security</div>
                <div className={styles.infoCardText}>
                  Authentic retail licensing of cloud-native Webroot cybersecurity for laptops, desktops, and mobile hardware.
                </div>
              </div>
            </div>

            <div>
              <Link href="/about" className="btn btnSecondary">
                Read More About Our Approach
              </Link>
            </div>
          </div>

          {/* Highlights Column */}
          <div className={styles.visualCol}>
            <div className={styles.visualBox}>
              <div className={styles.visualHeader}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <div className={styles.visualTitle}>Operating Principles</div>
              </div>

              <div className={styles.visualPoints}>
                <div className={styles.visualPoint}>
                  <svg className={styles.checkIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong>Factual Service Scope:</strong> Clear representation of proposed capabilities without unsubstantiated claims or fictitious statistics.
                  </div>
                </div>

                <div className={styles.visualPoint}>
                  <svg className={styles.checkIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong>Strategic Location:</strong> Situated in Laredo, TX (ZIP 78045), directly aligned with central commercial shipping corridors.
                  </div>
                </div>

                <div className={styles.visualPoint}>
                  <svg className={styles.checkIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong>Authentic Software Delivery:</strong> Genuine Webroot subscriptions with verified pricing, specifications, and manufacturer terms.
                  </div>
                </div>
              </div>

              <div className={styles.addressNotice}>
                <strong>Location:</strong> {COMPANY_INFO.address.formatted}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
