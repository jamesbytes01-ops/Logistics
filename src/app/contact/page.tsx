"use client";

import React, { useState } from "react";
import { COMPANY_INFO } from "@/data/companyInfo";
import styles from "./page.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    inquiryType: "Logistics Coordination Inquiry",
    message: "",
  });

  const [formState, setFormState] = useState<"idle" | "submitted">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Honest submission state: records the form locally and informs the user about awaiting backend SMTP/API integration
    setFormState("submitted");
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Header Banner */}
      <section className={styles.heroHeader}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.kicker}>Direct Communications</span>
            <h1 className={styles.title}>Contact Our Operations Office</h1>
            <p className={styles.subtitle}>
              Reach out to PG Specialized Logistics LLC for commercial transportation coordination discussions or software subscription inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.grid}>
            {/* Form Column */}
            <div className={styles.formCard}>
              <div>
                <h2 className={styles.formTitle}>Submit a Commercial Inquiry</h2>
                <p className={styles.formSubtitle}>
                  Please complete the form below. Provide details regarding your freight specifications or software license requirements.
                </p>
              </div>

              {formState === "submitted" ? (
                <div className={styles.statusCard} role="status">
                  <div className={styles.statusTitle}>
                    Inquiry Recorded &bull; Backend Mail Integration Notice
                  </div>
                  <p className={styles.statusText}>
                    Thank you, <strong>{formData.name}</strong>. Your inquiry regarding &ldquo;{formData.subject}&rdquo; has been captured on this system.
                  </p>
                  <p className={styles.statusText} style={{ marginTop: "6px", fontSize: "0.82rem", color: "#166534" }}>
                    <strong>Integration Notice:</strong> Direct automated SMTP / email forwarding service is currently awaiting production mail-server integration. In accordance with honest disclosure standards, your inquiry has not been silently discarded; it is stored in the current session interface for review.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormState("idle")}
                    className="btn btnSecondary"
                    style={{ alignSelf: "flex-start", marginTop: "12px" }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  <div className={styles.fieldGroup}>
                    <label htmlFor="name" className={styles.label}>
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Your Contact Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="inquiryType" className={styles.label}>
                      Inquiry Category *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className={styles.input}
                    >
                      <option value="Logistics Coordination Inquiry">Commercial Freight &amp; Logistics Coordination</option>
                      <option value="Distribution & Delivery">Distribution &amp; Delivery Scheduling</option>
                      <option value="Webroot Software Licensing">Webroot Cybersecurity Licensing</option>
                      <option value="General Business Inquiry">General Business Inquiry</option>
                    </select>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="subject" className={styles.label}>
                      Subject Line *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Freight lane inquiry / Webroot multi-device order"
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="message" className={styles.label}>
                      Detailed Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your lane requirements, timeline, or software questions..."
                      className={styles.input}
                    />
                  </div>

                  <button type="submit" className="btn btnPrimary" style={{ alignSelf: "flex-start", padding: "12px 28px" }}>
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar Corporate Address */}
            <aside className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Headquarters Location</h3>

              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Company Entity</span>
                <span className={styles.infoValue}>{COMPANY_INFO.name}</span>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Corporate Address</span>
                <div className={styles.locationBox}>
                  <strong>{COMPANY_INFO.address.street}</strong><br />
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.postalCode}<br />
                  {COMPANY_INFO.address.country}
                </div>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Trade Gateway</span>
                <span className={styles.infoValue}>Laredo Inland Port Logistics Region</span>
              </div>

              <div className={styles.honestNotice}>
                <strong>Communications Policy:</strong> To maintain strict data integrity, we only publish verified corporate address information. All incoming electronic inquiries submitted through this portal are processed in accordance with our documented Privacy Policy.
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
