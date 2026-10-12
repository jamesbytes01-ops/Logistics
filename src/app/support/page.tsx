import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/companyInfo";
import styles from "../policy.module.css";

export const metadata: Metadata = {
  title: "Product Support & Technical Guidance",
  description:
    "Installation instructions, keycode activation guides, and troubleshooting support for Webroot cybersecurity software.",
};

export default function SupportPage() {
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroHeader}>
        <div className="container">
          <span className={styles.kicker}>Customer Assistance</span>
          <h1 className={styles.title}>Webroot Product Support</h1>
          <p className={styles.subtitle}>
            Step-by-step guidance for installing, activating, and managing your Webroot cybersecurity licenses.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="containerNarrow">
          <div className={styles.card}>
            {/* Step 1: Download */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.heading2}>1. Download the Webroot Installer</h2>
              <p className={styles.paragraph}>
                Webroot features an ultra-lightweight client installer (typically under 5 MB). Once you receive your license keycode:
              </p>
              <ul className={styles.list}>
                <li><strong>Windows (PC):</strong> Download the official setup executable from Webroot&apos;s secured download portal. Run <code>wsainstall.exe</code> and follow on-screen prompts.</li>
                <li><strong>Apple macOS:</strong> Download the <code>.dmg</code> installer package. Open the package and drag Webroot SecureAnywhere to your Applications folder. When prompted by macOS System Settings, approve Full Disk Access and Kernel / System Extensions.</li>
                <li><strong>Mobile Devices (Android / iOS):</strong> Download &ldquo;Webroot Mobile Security&rdquo; directly from the Google Play Store or Apple App Store.</li>
              </ul>
            </div>

            {/* Step 2: Activation */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.heading2}>2. Activating Your License Keycode</h2>
              <p className={styles.paragraph}>
                Your keycode is a 20-character alphanumeric code formatted as:
                <br />
                <code>XXXX-XXXX-XXXX-XXXX-XXXX</code>
              </p>
              <p className={styles.paragraph}>
                During initial installation, enter this exact code when prompted. If the software is already installed in trial mode or using an older license:
              </p>
              <ul className={styles.list}>
                <li>Open the Webroot SecureAnywhere application.</li>
                <li>Click the <strong>Gear icon</strong> next to &ldquo;My Account&rdquo;.</li>
                <li>Under &ldquo;Activate a new keycode&rdquo;, paste your 20-character key and click <strong>Activate</strong>.</li>
              </ul>
            </div>

            {/* Step 3: Best Practices */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.heading2}>3. Installation Best Practices &amp; Conflict Resolution</h2>
              <ul className={styles.list}>
                <li><strong>Uninstall Legacy Antivirus:</strong> Although Webroot is designed to run seamlessly alongside many programs, we strongly recommend removing obsolete third-party antivirus suites prior to installation to optimize performance.</li>
                <li><strong>Run Initial Cloud Scan:</strong> Allow Webroot to perform its initial baseline scan immediately following installation. This generally completes in under 2 minutes.</li>
              </ul>
            </div>

            {/* Step 4: Contact Support */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.heading2}>4. Need Assistance with Your Order?</h2>
              <p className={styles.paragraph}>
                If you did not receive your keycode email, require an updated invoice, or have licensing questions, please reach out directly:
              </p>
              <div className={styles.calloutBox}>
                <strong>{COMPANY_INFO.name}</strong><br />
                {COMPANY_INFO.address.formatted}<br />
                Email:{" "}
                <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: "var(--color-navy-950)", fontWeight: 700, textDecoration: "underline" }}>
                  {COMPANY_INFO.email}
                </a><br />
                Inquiries can also be submitted through our{" "}
                <Link href="/contact" style={{ color: "var(--color-navy-950)", fontWeight: 700, textDecoration: "underline" }}>
                  Contact Page
                </Link>.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
