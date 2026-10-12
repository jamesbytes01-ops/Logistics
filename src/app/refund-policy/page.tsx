import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/companyInfo";
import styles from "../policy.module.css";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Refund Policy for Webroot software licenses and commercial freight bookings with PG Specialized Logistics LLC.",
};

export default function RefundPolicyPage() {
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroHeader}>
        <div className="container">
          <span className={styles.kicker}>Customer Care &amp; Billing</span>
          <h1 className={styles.title}>Refund Policy</h1>
          <p className={styles.subtitle}>Standard terms for software license purchases and service cancellations</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="containerNarrow">
          <div className={styles.card}>
            <div className={styles.sectionBlock}>
              <h2 className={styles.heading2}>1. Overview</h2>
              <p className={styles.paragraph}>
                At <strong>{COMPANY_INFO.name}</strong>, we strive to ensure total transparency regarding all transactions. Because our offerings encompass both intangible digital software licenses and contractual freight services, refund standards are structured according to the nature of the procurement.
              </p>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.heading2}>2. Software License Subscriptions (Webroot)</h2>
              <p className={styles.paragraph}>
                For retail Webroot cybersecurity software subscriptions:
              </p>
              <ul className={styles.list}>
                <li><strong>Unactivated Keys (30-Day Window):</strong> If you purchase a Webroot subscription and have not activated or registered the license keycode in the Webroot management console, you may request a 100% refund within 30 calendar days of invoice date.</li>
                <li><strong>Activated / Redeemed Licenses:</strong> Once a digital license keycode has been redeemed with the publisher (Webroot / OpenText), it is permanently assigned to the user account. Refund requests on activated licenses must be reviewed to verify publisher cancellation terms.</li>
                <li><strong>Defective Key Replacement:</strong> If any license keycode is verified as non-functional upon initial delivery, an immediate replacement keycode will be issued at no charge.</li>
              </ul>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.heading2}>3. Commercial Logistics &amp; Freight Services</h2>
              <p className={styles.paragraph}>
                Commercial transportation and logistics coordination fees are established under signed rate confirmations. In the event of a shipment cancellation:
              </p>
              <ul className={styles.list}>
                <li>Cancellations received prior to carrier dispatch may be eligible for a refund minus administrative coordination expenses.</li>
                <li>Truck Ordered Not Used (TONU) charges or carrier layover fees will apply if cancellation occurs after a vehicle has been dispatched or arrived at the shipping dock, as specified in the freight contract.</li>
              </ul>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.heading2}>4. How to Request a Refund</h2>
              <p className={styles.paragraph}>
                To request a refund, please submit a written notice with your order reference number, full name, and reason for the request through our{" "}
                <Link href="/contact" style={{ color: "var(--color-navy-950)", fontWeight: 700, textDecoration: "underline" }}>
                  Contact Portal
                </Link>{" "}
                or mail correspondence to:
              </p>
              <div className={styles.calloutBox}>
                <strong>{COMPANY_INFO.name}</strong><br />
                Attn: Accounts &amp; Billing Review<br />
                {COMPANY_INFO.address.formatted}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
