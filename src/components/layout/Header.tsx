"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { COMPANY_INFO } from "@/data/companyInfo";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isShopArea = pathname.startsWith("/webroot-antivirus") || pathname.startsWith("/shop") || pathname.startsWith("/cart") || pathname.startsWith("/checkout");

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={styles.headerWrapper}>
      {/* Top Utility Bar */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarInner}`}>
          <div className={styles.topBarLocation}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{COMPANY_INFO.address.street.toUpperCase()}, {COMPANY_INFO.address.city.toUpperCase()}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.postalCode}</span>
          </div>

          <div className={styles.topBarContactGroup}>
            <a href={`mailto:${COMPANY_INFO.email}`} className={styles.topBarLink}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>{COMPANY_INFO.email}</span>
            </a>
            <span className={styles.topBarDot}>&bull;</span>
            <a href={`tel:${COMPANY_INFO.phoneRaw}`} className={styles.topBarPhone}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container">
        <div className={styles.navContainer}>
          {/* Brand Mark */}
          <Link href="/" className={styles.brand} onClick={closeMenu}>
            <div className={styles.brandLogoMark} aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="shieldLeftHdr" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fde047" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>
                  <linearGradient id="shieldRightHdr" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d97706" />
                    <stop offset="100%" stopColor="#78350f" />
                  </linearGradient>
                  <linearGradient id="shieldCoreHdr" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#fef08a" />
                  </linearGradient>
                </defs>
                <path d="M18 5L7 10v11.5L18 32V25.5l-6-6V13.5L18 10z" fill="url(#shieldLeftHdr)" />
                <path d="M18 5l11 5v11.5L18 32V25.5l6-6V13.5L18 10z" fill="url(#shieldRightHdr)" />
                <polygon points="18,12 22.5,19 18,25 13.5,19" fill="url(#shieldCoreHdr)" />
                <polygon points="18,12 22.5,19 18,25" fill="#000000" opacity="0.18" />
                <polygon points="18,17 18.5,18.5 20,19 18.5,19.5 18,21 17.5,19.5 16,19 17.5,18.5" fill="#ffffff" />
              </svg>
            </div>
            <div className={styles.brandText}>
              <span className={styles.brandName}>TRINITY LOGISTICS SOLUTIONS</span>
              <span className={styles.brandSub}>LLC &bull; SAINT LOUIS, MO</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav} aria-label="Main Navigation">
            <Link
              href="/"
              className={`${styles.navLink} ${pathname === "/" ? styles.navLinkActive : ""}`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`${styles.navLink} ${pathname === "/services" ? styles.navLinkActive : ""}`}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`${styles.navLink} ${pathname === "/about" ? styles.navLinkActive : ""}`}
            >
              About Us
            </Link>
            <Link
              href="/webroot-antivirus"
              className={`${styles.navLink} ${pathname.startsWith("/webroot-antivirus") || pathname.startsWith("/shop") ? styles.navLinkActive : ""}`}
            >
              Webroot Antivirus
            </Link>
            <Link
              href="/contact"
              className={`${styles.navLink} ${pathname === "/contact" ? styles.navLinkActive : ""}`}
            >
              Contact
            </Link>
          </nav>

          {/* Navigation Actions (Cart + Shop CTA) */}
          <div className={styles.navActions}>
            {/* Cart indicator shown in e-commerce areas or when items are in cart */}
            {(isShopArea || itemCount > 0) && (
              <Link href="/cart" className={styles.cartButton} aria-label={`Shopping Cart with ${itemCount} items`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
                <span>Cart</span>
                <span className={styles.cartCountBadge}>{itemCount}</span>
              </Link>
            )}

            <Link href="/contact" className={styles.shopCtaButton}>
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className={styles.mobileToggle}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <Link
            href="/"
            onClick={closeMenu}
            className={`${styles.mobileNavLink} ${pathname === "/" ? styles.mobileNavLinkActive : ""}`}
          >
            Home
          </Link>
          <Link
            href="/services"
            onClick={closeMenu}
            className={`${styles.mobileNavLink} ${pathname === "/services" ? styles.mobileNavLinkActive : ""}`}
          >
            Services
          </Link>
          <Link
            href="/about"
            onClick={closeMenu}
            className={`${styles.mobileNavLink} ${pathname === "/about" ? styles.mobileNavLinkActive : ""}`}
          >
            About Us
          </Link>
          <Link
            href="/webroot-antivirus"
            onClick={closeMenu}
            className={`${styles.mobileNavLink} ${pathname.startsWith("/webroot-antivirus") || pathname.startsWith("/shop") ? styles.mobileNavLinkActive : ""}`}
          >
            Webroot Antivirus
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className={`${styles.mobileNavLink} ${pathname === "/contact" ? styles.mobileNavLinkActive : ""}`}
          >
            Contact
          </Link>

          <div className={styles.mobileActions}>
            <Link
              href="/cart"
              onClick={closeMenu}
              className={styles.cartButton}
              style={{ justifyContent: "center" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              <span>View Cart ({itemCount})</span>
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className={styles.shopCtaButton}
              style={{ justifyContent: "center" }}
            >
              Contact Our Logistics Team
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
