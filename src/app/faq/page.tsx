import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/companyInfo";
import styles from "../policy.module.css";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions regarding logistics coordination services and authentic Webroot cybersecurity software subscriptions.",
};

export default function FAQPage() {
  const faqs = [
    {
      q: "What is the primary scope of PG Specialized Logistics LLC?",
      a: `${COMPANY_INFO.name} coordinates commercial freight, transportation scheduling, and supply-chain logistics originating from the Laredo, TX shipping corridor. In addition, we retail authentic retail licenses for Webroot cybersecurity software.`
    },
    {
      q: "Are the logistics capabilities listed on this site confirmed service offerings?",
      a: "The logistics categories presented on this website represent proposed commercial service models. Specific transport execution, capacity commitments, and freight lanes are established through direct commercial agreement, rate verification, and carrier contract execution."
    },
    {
      q: "Are the Webroot cybersecurity products genuine?",
      a: "Yes. All software products featured in our catalog represent authentic, verifiable Webroot software licenses. Subscriptions are backed by manufacturer cloud infrastructure and updates."
    },
    {
      q: "How are Webroot software licenses delivered?",
      a: "Upon checkout confirmation, software license keycodes and manufacturer download instructions are dispatched electronically to your designated recipient email address."
    },
    {
      q: "Can I use Webroot on multiple operating systems?",
      a: "Yes. Depending on the plan selected, Webroot licenses support Windows, macOS, Android, and iOS devices. You can verify OS compatibility on each individual product details page."
    },
    {
      q: "What is your physical office location?",
      a: `Our verified business address is ${COMPANY_INFO.address.formatted}. We do not operate an unverified walk-in retail storefront; inquiries are managed through our official communication channels.`
    },
    {
      q: "How can I obtain a custom commercial freight quote or enterprise software proposal?",
      a: "You can submit an inquiry through our Contact page specifying your freight lane requirements or multi-endpoint software deployment specifications."
    }
  ];

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroHeader}>
        <div className="container">
          <span className={styles.kicker}>Support &amp; Answers</span>
          <h1 className={styles.title}>Frequently Asked Questions</h1>
          <p className={styles.subtitle}>
            Clear guidance regarding our logistics coordination and software licensing services.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="containerNarrow">
          <div className={styles.card}>
            {faqs.map((faq, idx) => (
              <div key={idx} className={styles.faqItem}>
                <h2 className={styles.faqQ}>{faq.q}</h2>
                <p className={styles.faqA}>{faq.a}</p>
              </div>
            ))}

            <div className={styles.calloutBox}>
              Have an operational question not addressed here? Please visit our{" "}
              <Link href="/contact" style={{ color: "var(--color-navy-950)", fontWeight: 700, textDecoration: "underline" }}>
                Contact Page
              </Link>{" "}
              to connect directly with our operations staff.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
