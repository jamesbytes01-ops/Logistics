import React from "react";
import type { Metadata } from "next";
import { COMPANY_INFO } from "@/data/companyInfo";
import styles from "../policy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for PG Specialized Logistics LLC detailing how customer data and electronic inquiries are managed.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroHeader}>
        <div className="container">
          <span className={styles.kicker}>Regulatory &amp; Compliance</span>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.subtitle}>Last updated: October 2026</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="containerNarrow">
          <div className={styles.card}>
            <div className={styles.sectionBlock}>
              <h2 className={styles.heading2}>1. Commitment to Privacy</h2>
              <p className={styles.paragraph}>
                <strong>{COMPANY_INFO.name}</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), located at {COMPANY_INFO.address.formatted}, respects your privacy and is committed to protecting the personal information you share with us through this website.
              </p>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.heading2}>2. Information We Collect</h2>
              <p className={styles.paragraph}>
                We collect personal information solely when you voluntarily provide it through our contact forms or checkout order review workflows:
              </p>
              <ul className={styles.list}>
                <li><strong>Contact Details:</strong> Name, business name, and email address for shipment correspondence or software license keycode electronic delivery.</li>
                <li><strong>Billing Information:</strong> Street address, city, state, and postal code for commercial invoice generation.</li>
                <li><strong>Communication Records:</strong> Subject and message contents submitted through commercial inquiry forms.</li>
              </ul>
              <p className={styles.paragraph}>
                We do not collect sensitive payment card numbers on unencrypted or unintegrated client-side forms.
              </p>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.heading2}>3. How We Use Your Information</h2>
              <p className={styles.paragraph}>
                Personal data is utilized exclusively for genuine operational purposes:
              </p>
              <ul className={styles.list}>
                <li>Fulfilling orders and transmitting genuine Webroot software license keys.</li>
                <li>Responding to commercial logistics inquiries and coordinating freight proposals.</li>
                <li>Complying with applicable commercial law and taxation regulations in the State of Texas and the United States.</li>
              </ul>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.heading2}>4. Information Sharing and Disclosure</h2>
              <p className={styles.paragraph}>
                We do not sell, rent, or trade your personal data to third-party marketers. Information may only be disclosed to trusted service partners strictly necessary to fulfill software provisioning or under lawful subpoena from judicial authorities.
              </p>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.heading2}>5. Data Security</h2>
              <p className={styles.paragraph}>
                We employ standard TLS/SSL encryption for data transmitted across this site. Access to business records is restricted to authorized personnel managing logistics dispatch and software account administration.
              </p>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.heading2}>6. Contacting Our Data Privacy Representative</h2>
              <p className={styles.paragraph}>
                For inquiries regarding this privacy statement or to request deletion of your contact records, please direct written inquiries to:
              </p>
              <div className={styles.calloutBox}>
                <strong>{COMPANY_INFO.name}</strong><br />
                Attn: Compliance &amp; Privacy<br />
                {COMPANY_INFO.address.formatted}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
