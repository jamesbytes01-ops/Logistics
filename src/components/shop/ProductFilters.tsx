"use client";

import React from "react";
import { PRODUCT_CATEGORIES, OS_FILTERS, DEVICE_FILTERS, DURATION_FILTERS } from "@/data/webrootProducts";
import styles from "./ProductFilters.module.css";

export interface FilterState {
  search: string;
  category: string;
  os: string;
  devices: string;
  duration: string;
  sort: string;
}

interface ProductFiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  totalMatches: number;
}

export function ProductFilters({ filters, onChange, totalMatches }: ProductFiltersProps) {
  const updateField = (field: keyof FilterState, value: string) => {
    onChange({
      ...filters,
      [field]: value,
    });
  };

  const handleReset = () => {
    onChange({
      search: "",
      category: "All Categories",
      os: "All Systems",
      devices: "All Devices",
      duration: "All Durations",
      sort: "featured",
    });
  };

  const hasActiveFilters =
    filters.search !== "" ||
    filters.category !== "All Categories" ||
    filters.os !== "All Systems" ||
    filters.devices !== "All Devices" ||
    filters.duration !== "All Durations" ||
    filters.sort !== "featured";

  return (
    <div className={styles.filterContainer}>
      {/* Search Input */}
      <div className={styles.searchRow}>
        <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Search Webroot products (e.g. Antivirus, VPN, Complete, Gaming, 5 Devices)..."
          value={filters.search}
          onChange={(e) => updateField("search", e.target.value)}
          className={styles.searchInput}
          aria-label="Search Webroot product catalog"
        />
      </div>

      {/* Select Controls Grid */}
      <div className={styles.controlsGrid}>
        {/* Category */}
        <div className={styles.filterGroup}>
          <label htmlFor="filter-category" className={styles.filterLabel}>
            Product Category
          </label>
          <select
            id="filter-category"
            value={filters.category}
            onChange={(e) => updateField("category", e.target.value)}
            className={styles.selectInput}
          >
            {PRODUCT_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Operating System */}
        <div className={styles.filterGroup}>
          <label htmlFor="filter-os" className={styles.filterLabel}>
            Operating System
          </label>
          <select
            id="filter-os"
            value={filters.os}
            onChange={(e) => updateField("os", e.target.value)}
            className={styles.selectInput}
          >
            {OS_FILTERS.map((os) => (
              <option key={os} value={os}>
                {os}
              </option>
            ))}
          </select>
        </div>

        {/* Device Coverage */}
        <div className={styles.filterGroup}>
          <label htmlFor="filter-devices" className={styles.filterLabel}>
            Device Coverage
          </label>
          <select
            id="filter-devices"
            value={filters.devices}
            onChange={(e) => updateField("devices", e.target.value)}
            className={styles.selectInput}
          >
            {DEVICE_FILTERS.map((dev) => (
              <option key={dev} value={dev}>
                {dev}
              </option>
            ))}
          </select>
        </div>

        {/* Duration */}
        <div className={styles.filterGroup}>
          <label htmlFor="filter-duration" className={styles.filterLabel}>
            Subscription Term
          </label>
          <select
            id="filter-duration"
            value={filters.duration}
            onChange={(e) => updateField("duration", e.target.value)}
            className={styles.selectInput}
          >
            {DURATION_FILTERS.map((dur) => (
              <option key={dur} value={dur}>
                {dur}
              </option>
            ))}
          </select>
        </div>

        {/* Sorting */}
        <div className={styles.filterGroup}>
          <label htmlFor="filter-sort" className={styles.filterLabel}>
            Sort By
          </label>
          <select
            id="filter-sort"
            value={filters.sort}
            onChange={(e) => updateField("sort", e.target.value)}
            className={styles.selectInput}
          >
            <option value="featured">Featured Offerings</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Product Name: A to Z</option>
          </select>
        </div>
      </div>

      {/* Filter Status Bar */}
      <div className={styles.statusBar}>
        <div>
          Showing <span className={styles.matchCount}>{totalMatches}</span> verified product{totalMatches === 1 ? "" : "s"}
        </div>
        {hasActiveFilters && (
          <button type="button" onClick={handleReset} className={styles.resetBtn}>
            Reset All Filters
          </button>
        )}
      </div>
    </div>
  );
}
