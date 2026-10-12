import React from "react";
import type { Metadata } from "next";
import { COMPANY_INFO } from "@/data/companyInfo";
import styles from "../policy.module.css";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions governing the use of the PG Specialized Logistics LLC website and software procurement.",
};

export default function TermsPage() {
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroHeader}>
        <div className="container">
          <span className={styles.kicker}>Legal Agreement</span>
          <h1 className={styles.title}>Terms and Conditions</h1>
          <p className={styles.subtitle}>Effective Date: October 2026</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="containerNarrow">
          <div className={styles.card}>
            <div className={styles.sectionBlock}>
              <h2 className={styles.heading2}>1. Acceptance of Terms</h2>
              <p className={styles.paragraph}>
                By accessing and utilizing this website operated by <strong>{COMPANY_INFO.name}</strong> (&ldquo;Company&rdquo;), you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any provision herein, you must refrain from utilizing this website.
              </p>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.heading2}>2. Nature of Logistics Services</h2>
              <p className={styles.paragraph}>
                Information provided on this website concerning freight transportation, logistics coordination, distribution, and supply-chain support represents proposed commercial capabilities. Nothing on this website constitutes a binding offer of carriage or guaranteed transit timeline. All transportation services are subject to definitive written freight agreements, carrier rate confirmations, and formal bills of lading.
              </p>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.heading2}>3. Software License Sales and Third-Party EULA</h2>
              <p className={styles.paragraph}>
                All cybersecurity software items retailed through this website represent authentic retail licenses of Webroot software products. The customer acknowledges that use of Webroot software is subject to the End User License Agreement (EULA) and terms established by the software publisher, OpenText Corporation / Webroot Inc. Company sells licenses as a retail entity and does not warrant continuous third-party cloud uptime beyond published manufacturer specifications.
              </p>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.heading2}>4. Intellectual Property Rights</h2>
              <p className={styles.paragraph}>
                All website text, layout, graphic marks, and organization are proprietary to {COMPANY_INFO.name}. Webroot, SecureAnywhere, and BrightCloud are registered trademarks of OpenText Corporation and are utilized on this site solely to identify genuine software items being offered for license.
              </p>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.heading2}>5. Limitation of Liability</h2>
              <p className={styles.paragraph}>
                In no event shall {COMPANY_INFO.name} be liable for any indirect, punitive, incidental, or consequential damages resulting from website unavailability, carrier transport disruptions, or third-party software updates, to the maximum extent permitted under applicable law.
              </p>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.heading2}>6. Governing Law &amp; Jurisdiction</h2>
              <p className={styles.paragraph}>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Texas, United States, without regard to conflict of law principles. Any legal action arising from these terms shall be instituted in Webb County, Texas.
              </p>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.heading2}>7. Corporate Location</h2>
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
