export type OperatingSystem = "Windows" | "macOS" | "Android" | "iOS" | "ChromeOS" | "Virtual Environments";

export interface WebrootProduct {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  billingPeriod: string; // e.g. "per year", "2-year license"
  deviceCount: number;
  deviceLabel: string; // e.g. "1 Device", "Up to 3 Devices", "5 Endpoints"
  duration: string; // "1 Year" | "2 Years"
  supportedOS: OperatingSystem[];
  category: "Antivirus" | "Essentials" | "Internet Security" | "Complete Security" | "VPN & Privacy" | "Premium Suite" | "Business Solutions" | "Gaming Edition" | "Mobile & ChromeOS";
  features: string[];
  specs: {
    scanSpeed: string;
    ramFootprint: string;
    cloudManaged: boolean;
    firewallIncluded: boolean;
    passwordManager: boolean;
    vpnIncluded: boolean;
    cloudStorage?: string;
  };
  badge?: string;
  faqs?: { question: string; answer: string }[];
}

export interface LogisticsService {
  id: string;
  title: string;
  badge: string;
  shortSummary: string;
  fullDescription: string;
  capabilities: string[];
  operationalScope: string;
  keyBenefits: string[];
}
