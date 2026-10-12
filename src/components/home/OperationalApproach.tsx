import React from "react";
import styles from "./OperationalApproach.module.css";

export function OperationalApproach() {
  const values = [
    {
      title: "Verifiable Operations",
      description: "We communicate honest shipment milestones, realistic transit windows, and accurate carrier availability without speculative guarantees.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    },
    {
      title: "Cross-Border Gateway Positioning",
      description: "Situated directly in Laredo, TX (402 Logistic Dr), our team understands the operational precision required at major transit nodes.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
          <line x1="8" y1="2" x2="8" y2="18" />
          <line x1="16" y1="6" x2="16" y2="22" />
        </svg>
      )
    },
    {
      title: "Documentary Precision",
      description: "Every shipment demands precise paperwork. We emphasize clean bills of lading, appointment confirmations, and audit-ready records.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      )
    },
    {
      title: "Dual Physical & Digital Security",
      description: "Modern supply chains rely on secure digital infrastructure. We provide authentic Webroot endpoint protection to defend logistics workstations.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    }
  ];

  return (
    <section className={styles.sectionWrapper} aria-labelledby="approach-heading">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.kicker}>Our Principles</span>
          <h2 id="approach-heading" className={styles.heading}>
            Operational Approach & Core Values
          </h2>
          <p className={styles.subtext}>
            Built upon principles of direct accountability, transparent logistical communication, and dependable administrative execution.
          </p>
        </div>

        <div className={styles.valuesGrid}>
          {values.map((val, idx) => (
            <div key={idx} className={styles.valueCard}>
              <div className={styles.iconBox} aria-hidden="true">
                {val.icon}
              </div>
              <h3 className={styles.valueTitle}>{val.title}</h3>
              <p className={styles.valueDesc}>{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
