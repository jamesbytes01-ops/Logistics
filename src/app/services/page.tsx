import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PROPOSED_SERVICES } from "@/data/logisticsServices";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Commercial Logistics & Freight Services",
  description:
    "Explore proposed commercial logistics and transportation services from PG Specialized Logistics LLC, situated at 402 Logistic Dr in Laredo, Texas.",
};

export default function ServicesPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Header Banner */}
      <section className={styles.heroHeader}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.kicker}>Capabilities & Proposed Scope</span>
            <h1 className={styles.title}>Commercial Logistics Services</h1>
            <p className={styles.subtitle}>
              Structured transportation coordination, freight dispatch planning, and supply-chain support originating from the prime international logistics corridor in Laredo, Texas.
            </p>
            <div className={styles.disclaimerBanner}>
              <strong>Notice of Proposed Capability:</strong> The categories outlined below detail our proposed commercial freight capabilities. Services are established and confirmed on a per-contract basis following carrier alignment and rate confirmation.
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className={styles.servicesListSection}>
        <div className="container">
          {PROPOSED_SERVICES.map((service) => (
            <article key={service.id} id={service.id} className={styles.serviceBlock}>
              <div className={styles.serviceHeader}>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <span className={styles.serviceBadge}>{service.badge}</span>
              </div>

              <p className={styles.serviceDescription}>{service.fullDescription}</p>

              <div className={styles.detailsGrid}>
                <div>
                  <h3 className={styles.columnHeading}>Core Coordination Capabilities</h3>
                  <ul className={styles.list}>
                    {service.capabilities.map((cap, i) => (
                      <li key={i} className={styles.listItem}>
                        <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className={styles.columnHeading}>Operational Objectives</h3>
                  <ul className={styles.list}>
                    {service.keyBenefits.map((ben, i) => (
                      <li key={i} className={styles.listItem}>
                        <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.scopeBox}>
                <strong>Operational Scope:</strong> {service.operationalScope}
              </div>
            </article>
          ))}

          {/* Contact CTA */}
          <div className={styles.ctaSection}>
            <div>
              <h2 className={styles.ctaHeading}>Ready to Discuss Freight Coordination?</h2>
              <p className={styles.ctaText}>
                Contact our operations team to discuss your cargo specifications, lane requirements, or dock delivery appointment schedules.
              </p>
            </div>
            <Link href="/contact" className="btn btnPrimary">
              Inquire About Capabilities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
