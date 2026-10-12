import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/companyInfo";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Our Company",
  description:
    "Learn about PG Specialized Logistics LLC, based in Laredo, Texas — dedicated to operational precision in freight logistics and digital software distribution.",
};

export default function AboutPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Header Banner */}
      <section className={styles.heroHeader}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.kicker}>Corporate Overview</span>
            <h1 className={styles.title}>About PG Specialized Logistics LLC</h1>
            <p className={styles.subtitle}>
              Committed to operational discipline, direct communication, and commercial logistics coordination from Laredo, Texas.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.twoColGrid}>
            <div className={styles.mainCol}>
              <div>
                <h2 className={styles.sectionBlockTitle}>Company Overview</h2>
                <p className={styles.paragraph}>
                  <strong>{COMPANY_INFO.name}</strong> is a specialized commercial logistics and software distribution enterprise based in Laredo, Texas. Operating at the core of the largest inland port system in the United States, our business is positioned where industrial freight flows intersect between regional transport arteries and cross-border commercial corridors.
                </p>
                <p className={styles.paragraph} style={{ marginTop: "12px" }}>
                  In tandem with freight coordination capabilities, we operate an authorized software distribution practice offering genuine Webroot cybersecurity licenses. This dual focus addresses both the tangible physical demands of freight transport and the essential digital protections required by modern commercial offices.
                </p>
              </div>

              <div>
                <h2 className={styles.sectionBlockTitle}>Our Business Approach</h2>
                <p className={styles.paragraph}>
                  We believe that commercial logistics requires uncompromising honesty. Rather than making speculative promises regarding transit speeds or fleet capacities, our business approach prioritizes verified appointment scheduling, accurate dock staging, and strict adherence to bill-of-lading protocols.
                </p>
                <p className={styles.paragraph} style={{ marginTop: "12px" }}>
                  Every commercial shipment represents valuable capital and critical customer commitments. We coordinate with qualified carrier networks, maintaining transparent milestone communication at every stage of the shipment lifecycle.
                </p>
              </div>

              <div>
                <h2 className={styles.sectionBlockTitle}>Operational Values</h2>
                <div className={styles.valuesList}>
                  <div className={styles.valueItem}>
                    <div className={styles.valueItemTitle}>Direct Accountability</div>
                    <p className={styles.valueItemText}>
                      We maintain open, transparent communication regarding dispatch milestones, carrier status, and delivery schedules without automated obfuscation.
                    </p>
                  </div>

                  <div className={styles.valueItem}>
                    <div className={styles.valueItemTitle}>Documentation Integrity</div>
                    <p className={styles.valueItemText}>
                      Rigorous review of shipping manifests, bills of lading, and proof of delivery ensures complete administrative precision and audit readiness.
                    </p>
                  </div>

                  <div className={styles.valueItem}>
                    <div className={styles.valueItemTitle}>Authorized Digital Security</div>
                    <p className={styles.valueItemText}>
                      Our software offerings are authentic Webroot software licenses with full manufacturer validity, transparent pricing, and direct technical specifications.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className={styles.sectionBlockTitle}>Commitment to Professional Service</h2>
                <p className={styles.paragraph}>
                  Whether assisting commercial clients with freight lane coordination or delivering multi-device cybersecurity subscriptions, our commitment remains grounded in professional rigor, compliance with regulatory standards, and respect for our commercial partners.
                </p>
              </div>
            </div>

            {/* Sidebar Details */}
            <aside className={styles.sidebarCard}>
              <h3 className={styles.sidebarCardTitle}>Official Corporate Profile</h3>

              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Legal Entity</span>
                <span className={styles.detailValue}>{COMPANY_INFO.name}</span>
              </div>

              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Corporate Jurisdiction</span>
                <span className={styles.detailValue}>Texas, United States</span>
              </div>

              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Principal Business Location</span>
                <div className={styles.addressBox}>
                  <strong>{COMPANY_INFO.address.street}</strong><br />
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.postalCode}<br />
                  {COMPANY_INFO.address.country}
                </div>
              </div>

              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Primary Activities</span>
                <span className={styles.detailValue}>
                  Freight &amp; Logistics Coordination<br />
                  Webroot Cybersecurity Subscriptions
                </span>
              </div>

              <div style={{ marginTop: "12px" }}>
                <Link href="/contact" className="btn btnPrimary" style={{ width: "100%" }}>
                  Contact Our Office
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
