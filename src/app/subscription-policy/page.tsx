import React from "react";
import type { Metadata } from "next";
import { COMPANY_INFO } from "@/data/companyInfo";
import styles from "../policy.module.css";

export const metadata: Metadata = {
  title: "Subscription and Renewal Policy",
  description:
    "Information regarding Webroot subscription terms, duration periods, and renewal protocols with PG Specialized Logistics LLC.",
};

export default function SubscriptionPolicyPage() {
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroHeader}>
        <div className="container">
          <span className={styles.kicker}>Software Licensing Transparency</span>
          <h1 className={styles.title}>Subscription &amp; Renewal Policy</h1>
          <p className={styles.subtitle}>Standard terms regarding term lengths, renewals, and expiration dates</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="containerNarrow">
          <div className={styles.card}>
            <div className={styles.sectionBlock}>
              <h2 className={styles.heading2}>1. Term Durations and Billing Structure</h2>
              <p className={styles.paragraph}>
                All Webroot software licenses retailed by <strong>{COMPANY_INFO.name}</strong> are sold as fixed-term subscriptions:
              </p>
              <ul className={styles.list}>
                <li><strong>1-Year Subscriptions:</strong> Provide 365 calendar days of continuous cloud threat intelligence updates, antivirus scanning, and technical definitions from the date the license keycode is activated on your first device.</li>
                <li><strong>2-Year Subscriptions:</strong> Provide 730 calendar days of continuous protection from the initial date of software activation.</li>
              </ul>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.heading2}>2. Transparent Non-Predatory Billing (No Surprise Auto-Debits)</h2>
              <p className={styles.paragraph}>
                Unless explicitly chosen by a commercial client under a managed services contract, our standard retail licenses do not automatically bill recurring payments to your credit card without your consent. Customers receive renewal notifications prior to term expiration, allowing complete choice to extend, upgrade, or let the license expire.
              </p>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.heading2}>3. License Key Activation &amp; Transferability</h2>
              <p className={styles.paragraph}>
                When you install Webroot on a new PC, Mac, or mobile device, the license attaches to that device seat. If you retire or upgrade a computer during your active subscription period:
              </p>
              <ul className={styles.list}>
                <li>You can deactivate the decommissioned machine through the Webroot cloud console.</li>
                <li>Enter your existing keycode into the newly installed software client on your replacement computer.</li>
                <li>Your remaining term balance will continue without interruption.</li>
              </ul>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.heading2}>4. Expiration Grace Period</h2>
              <p className={styles.paragraph}>
                Upon expiration of an active term, real-time threat detection and cloud heuristic lookups are suspended by the publisher until a renewed license keycode is applied. We recommend renewing at least 7 days prior to term expiration to ensure zero gap in endpoint security.
              </p>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.heading2}>5. Questions Regarding Your Subscription</h2>
              <p className={styles.paragraph}>
                If you have questions regarding your keycode duration or require volume business renewals (5+ endpoints), please connect with our office:
              </p>
              <div className={styles.calloutBox}>
                <strong>{COMPANY_INFO.name}</strong><br />
                {COMPANY_INFO.address.formatted}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
