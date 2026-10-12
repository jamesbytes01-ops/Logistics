"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
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
            <span>402 LOGISTIC DR, LAREDO, TX 78045</span>
          </div>
          <span className={styles.topBarBadge}>Commercial Operations & Cybersecurity Retail</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container">
        <div className={styles.navContainer}>
          {/* Brand Mark */}
          <Link href="/" className={styles.brand} onClick={closeMenu}>
            <div className={styles.brandLogoMark} aria-hidden="true">
              PG
            </div>
            <div className={styles.brandText}>
              <span className={styles.brandName}>PG SPECIALIZED LOGISTICS</span>
              <span className={styles.brandSub}>LLC &bull; LAREDO, TX</span>
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

            <Link href="/webroot-antivirus" className={styles.shopCtaButton}>
              Webroot Antivirus
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
              href="/webroot-antivirus"
              onClick={closeMenu}
              className={styles.shopCtaButton}
              style={{ justifyContent: "center" }}
            >
              Browse Webroot Antivirus
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
