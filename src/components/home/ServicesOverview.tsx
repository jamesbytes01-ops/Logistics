import React from "react";
import Link from "next/link";
import { PROPOSED_SERVICES } from "@/data/logisticsServices";
import styles from "./ServicesOverview.module.css";

export function ServicesOverview() {
  const getIcon = (id: string) => {
    switch (id) {
      case "freight-transportation":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="3" width="15" height="13" />
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
            <circle cx="5.5" cy="18.5" r="2.5" />
            <circle cx="18.5" cy="18.5" r="2.5" />
          </svg>
        );
      case "logistics-coordination":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        );
      case "distribution-delivery":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
        );
      case "supply-chain-support":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        );
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        );
    }
  };

  return (
    <section className={styles.sectionWrapper} aria-labelledby="services-overview-heading">
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.kicker}>Logistics Operations</span>
          <h2 id="services-overview-heading" className={styles.heading}>
            Transportation & Logistics Categories
          </h2>
          <p className={styles.subtext}>
            Proposed commercial service categories designed to support shippers, regional carriers, and freight managers operating through southwestern and interstate shipping lanes.
          </p>
          <div>
            <span className={styles.proposedNotice}>
              Notice: Offerings represent proposed commercial service models subject to formal contract confirmation.
            </span>
          </div>
        </div>

        <div className={styles.servicesGrid}>
          {PROPOSED_SERVICES.map((service) => (
            <article key={service.id} className={styles.serviceCard}>
              <div className={styles.cardTop}>
                <div className={styles.iconWrapper} aria-hidden="true">
                  {getIcon(service.id)}
                </div>
                <span className={styles.cardBadge}>{service.badge}</span>
              </div>

              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardSummary}>{service.shortSummary}</p>

              <ul className={styles.capabilitiesList}>
                {service.capabilities.slice(0, 3).map((cap, i) => (
                  <li key={i} className={styles.capabilityItem}>
                    <svg className={styles.checkBullet} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.cardAction}>
                <Link href={`/services#${service.id}`} className={styles.inquireLink}>
                  <span>Explore Service Scope</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.sectionFooterCta}>
          <div className={styles.ctaText}>
            <div className={styles.ctaTitle}>Discuss Your Commercial Freight Requirements</div>
            <div className={styles.ctaDesc}>
              Connect directly with our logistics team to discuss custom route coordination and freight requirements.
            </div>
          </div>
          <Link href="/contact" className="btn btnPrimary">
            Inquire About Services
          </Link>
        </div>
      </div>
    </section>
  );
}
