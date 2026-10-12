import React from "react";
import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { CompanyIntro } from "@/components/home/CompanyIntro";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { OperationalApproach } from "@/components/home/OperationalApproach";
import { FeaturedShop } from "@/components/home/FeaturedShop";
import { ContactCallout } from "@/components/home/ContactCallout";

export const metadata: Metadata = {
  title: "PG Specialized Logistics LLC | Moving Business Forward with Reliable Logistics",
  description:
    "PG Specialized Logistics LLC — Freight transportation coordination and commercial logistics solutions based in Laredo, TX, paired with genuine Webroot cybersecurity software subscriptions.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Company Introduction */}
      <CompanyIntro />

      {/* 3. Logistics & Transportation Service Categories */}
      <ServicesOverview />

      {/* 4. Operational Approach & Business Values */}
      <OperationalApproach />

      {/* 5. Featured Webroot Products & Pathway */}
      <FeaturedShop />

      {/* 6. Contact & Corporate Location */}
      <ContactCallout />
    </>
  );
}
