import { WebrootProduct } from "@/types";

export const WEBROOT_PRODUCTS: WebrootProduct[] = [
  {
    id: "wr-av-1d-1y",
    slug: "webroot-antivirus-1-device-1-year",
    name: "Webroot AntiVirus (1 Device / 1 Year)",
    shortDescription: "Fast, cloud-based threat protection engineered to protect a single PC or Mac without system slowdowns.",
    fullDescription: "Webroot AntiVirus utilizes continuous cloud threat intelligence to guard against viruses, ransomware, phishing, and spyware in real time. Unlike conventional antivirus software that downloads bulky virus definition files that sap system memory, Webroot's cloud architecture executes scans in under 20 seconds and uses less than 15MB of RAM.",
    price: 39.99,
    billingPeriod: "per year",
    deviceCount: 1,
    deviceLabel: "1 Device (PC or Mac)",
    duration: "1 Year",
    supportedOS: ["Windows", "macOS"],
    category: "Antivirus",
    badge: "Lightweight",
    features: [
      "Real-time cloud threat intelligence scanning",
      "Proactive ransomware rollback & shield",
      "Real-time anti-phishing protection for web browsing",
      "Identity shield protects personal data and browser credentials",
      "Lightning-fast scans with minimal RAM utilization"
    ],
    specs: {
      scanSpeed: "< 20 seconds",
      ramFootprint: "< 15 MB",
      cloudManaged: true,
      firewallIncluded: true,
      passwordManager: false,
      vpnIncluded: false
    },
    faqs: [
      {
        question: "Can I use this on both Windows and macOS?",
        answer: "Yes, this license covers 1 device, which can be either a Windows PC (Windows 10/11) or an Apple Mac (macOS 10.15 Catalina or newer)."
      },
      {
        question: "Does it slow down computer performance during scans?",
        answer: "No. Webroot operates via cloud intelligence, consuming a fraction of the system memory compared to traditional antivirus programs."
      }
    ]
  },
  {
    id: "wr-av-3d-1y",
    slug: "webroot-antivirus-3-devices-1-year",
    name: "Webroot AntiVirus (3 Devices / 1 Year)",
    shortDescription: "Essential cloud-driven antivirus and anti-ransomware protection for up to 3 PCs or Macs.",
    fullDescription: "Protect up to 3 household or office computers with Webroot AntiVirus. Powered by the BrightCloud threat intelligence network, Webroot scans files upon access and blocks known malicious payloads before they execute. Features automated rollback capabilities for ransomware modifications and a unified management console.",
    price: 49.99,
    billingPeriod: "per year",
    deviceCount: 3,
    deviceLabel: "Up to 3 Devices",
    duration: "1 Year",
    supportedOS: ["Windows", "macOS"],
    category: "Antivirus",
    badge: "Popular Value",
    features: [
      "Protection for up to 3 computers (PC or Mac)",
      "Always-on cloud-native malware detection",
      "Network monitor and outbound firewall protection",
      "Web threat shield blocks fraudulent and malicious URLs",
      "Automatic software updates without restart interruptions"
    ],
    specs: {
      scanSpeed: "< 20 seconds",
      ramFootprint: "< 15 MB",
      cloudManaged: true,
      firewallIncluded: true,
      passwordManager: false,
      vpnIncluded: false
    },
    faqs: [
      {
        question: "Can I split the 3 licenses across different computers?",
        answer: "Yes, you can install this software on up to 3 separate machines (Windows or macOS) linked to your Webroot account."
      }
    ]
  },
  {
    id: "wr-gamer-1d-1y",
    slug: "webroot-antivirus-for-pc-gamers",
    name: "Webroot AntiVirus for PC Gamers (1 PC / 1 Year)",
    shortDescription: "Zero-lag antivirus protection with automated silent mode engineered specifically for gaming rigs.",
    fullDescription: "Webroot AntiVirus for PC Gamers delivers high-performance endpoint security optimized for gaming. Scans run quietly in the background without frame drops, screen freezes, or distracting pop-ups during gameplay. Features a built-in system cleaner to optimize RAM, eliminate temporary junk files, and preserve peak frame rates.",
    price: 39.99,
    billingPeriod: "per year",
    deviceCount: 1,
    deviceLabel: "1 Gaming PC",
    duration: "1 Year",
    supportedOS: ["Windows"],
    category: "Gaming Edition",
    badge: "Gamer Mode",
    features: [
      "Silent gaming mode eliminates pop-ups and full-screen interruptions",
      "Zero-latency background operations with minimal CPU cycles",
      "System optimizer clears registry clutter and temporary cache files",
      "Shields gaming accounts, credentials, and virtual inventory",
      "Rapid threat neutralization without game restarts"
    ],
    specs: {
      scanSpeed: "< 15 seconds",
      ramFootprint: "< 10 MB",
      cloudManaged: true,
      firewallIncluded: true,
      passwordManager: false,
      vpnIncluded: false
    },
    faqs: [
      {
        question: "Will Webroot interrupt competitive games or full-screen applications?",
        answer: "No. The Gamer Edition automatically detects full-screen applications and suppresses non-critical alerts."
      }
    ]
  },
  {
    id: "wr-chromebook-1d-1y",
    slug: "webroot-security-for-chromebook",
    name: "Webroot Security for Chromebook (1 Device / 1 Year)",
    shortDescription: "Dedicated security shielding ChromeOS devices and Android apps from malicious threats and phishing.",
    fullDescription: "Custom-built protection designed for ChromeOS environments and Chromebook users. Guards against malicious Android apps, unsecured Wi-Fi connections, phishing scams, and suspicious web downloads while maintaining high battery efficiency.",
    price: 24.99,
    billingPeriod: "per year",
    deviceCount: 1,
    deviceLabel: "1 Chromebook",
    duration: "1 Year",
    supportedOS: ["ChromeOS", "Android"],
    category: "Mobile & ChromeOS",
    badge: "ChromeOS Optimized",
    features: [
      "Custom-tailored security profile for ChromeOS",
      "Scans Android applications downloaded from app stores",
      "Proactive protection against phishing and malicious links",
      "Ultra-low battery consumption profile",
      "Streamlined web protection extensions"
    ],
    specs: {
      scanSpeed: "< 10 seconds",
      ramFootprint: "< 10 MB",
      cloudManaged: true,
      firewallIncluded: false,
      passwordManager: false,
      vpnIncluded: false
    },
    faqs: [
      {
        question: "Is this compatible with school or managed Chromebooks?",
        answer: "It is compatible with Chromebooks where individual user app installation and Chrome extensions are permitted."
      }
    ]
  },
  {
    id: "wr-essentials-1d-1y",
    slug: "webroot-essentials-1-device-1-year",
    name: "Webroot Essentials (1 Device / 1 Year)",
    shortDescription: "Comprehensive entry-level security featuring antivirus, phishing defense, and password management for 1 device.",
    fullDescription: "Webroot Essentials provides modern multi-vector security for your personal computer or mobile device. In addition to high-speed cloud antivirus, this package includes integrated password management, real-time phishing interceptors, and breach alerts to guard against credential theft.",
    price: 49.99,
    billingPeriod: "per year",
    deviceCount: 1,
    deviceLabel: "1 Device (Cross-Platform)",
    duration: "1 Year",
    supportedOS: ["Windows", "macOS", "Android", "iOS"],
    category: "Essentials",
    badge: "Base Protection",
    features: [
      "Continuous cloud antivirus and anti-ransomware protection",
      "Integrated secure password manager powered by LastPass",
      "Real-time phishing and fraudulent website blocking",
      "Cross-platform protection for PC, Mac, phone, or tablet",
      "Automated threat rollback on infected systems"
    ],
    specs: {
      scanSpeed: "< 20 seconds",
      ramFootprint: "< 15 MB",
      cloudManaged: true,
      firewallIncluded: true,
      passwordManager: true,
      vpnIncluded: false
    },
    faqs: [
      {
        question: "Can I install this on a mobile device?",
        answer: "Yes, Webroot Essentials supports Windows, macOS, Android smartphones/tablets, and Apple iOS devices."
      }
    ]
  },
  {
    id: "wr-essentials-3d-1y",
    slug: "webroot-essentials-3-devices-1-year",
    name: "Webroot Essentials (3 Devices / 1 Year)",
    shortDescription: "Protection for up to 3 devices across PC, Mac, and mobile, with integrated password management.",
    fullDescription: "The ideal plan for multi-device individuals and households. Safeguard any combination of up to 3 PCs, Macs, smartphones, or tablets. Includes cloud malware defense, password management, scam SMS alerts on mobile, and continuous web shields.",
    price: 69.99,
    billingPeriod: "per year",
    deviceCount: 3,
    deviceLabel: "Up to 3 Devices",
    duration: "1 Year",
    supportedOS: ["Windows", "macOS", "Android", "iOS"],
    category: "Essentials",
    badge: "Recommended",
    features: [
      "Covers up to 3 devices: Windows, Mac, Android, and iOS",
      "Integrated password management across all registered devices",
      "Scam SMS and malicious link detection for mobile devices",
      "Real-time identity shield blocks keystroke loggers",
      "Single centralized account dashboard for easy license transfers"
    ],
    specs: {
      scanSpeed: "< 20 seconds",
      ramFootprint: "< 15 MB",
      cloudManaged: true,
      firewallIncluded: true,
      passwordManager: true,
      vpnIncluded: false
    },
    faqs: [
      {
        question: "Can I move a license if I buy a new phone or laptop?",
        answer: "Yes, you can easily deactivate an old device and activate the new one from your Webroot online console."
      }
    ]
  },
  {
    id: "wr-essentials-5d-1y",
    slug: "webroot-essentials-5-devices-1-year",
    name: "Webroot Essentials (5 Devices / 1 Year)",
    shortDescription: "Complete household security shielding up to 5 devices with unified password management and cloud defense.",
    fullDescription: "Extended household coverage for up to 5 computers, tablets, and smartphones. Provides real-time protection against malicious attachments, infected downloads, and phishing links across the entire family's hardware ecosystem.",
    price: 89.99,
    billingPeriod: "per year",
    deviceCount: 5,
    deviceLabel: "Up to 5 Devices",
    duration: "1 Year",
    supportedOS: ["Windows", "macOS", "Android", "iOS"],
    category: "Essentials",
    badge: "Family Pack",
    features: [
      "Full coverage for up to 5 family computers and mobile devices",
      "Cross-platform support across Windows, macOS, Android, and iOS",
      "Shared or individual password management configurations",
      "Fast cloud scans that run in the background without interruption",
      "Proactive protection against ransomware and credential phishing"
    ],
    specs: {
      scanSpeed: "< 20 seconds",
      ramFootprint: "< 15 MB",
      cloudManaged: true,
      firewallIncluded: true,
      passwordManager: true,
      vpnIncluded: false
    },
    faqs: [
      {
        question: "Does this plan include technical support?",
        answer: "Yes, standard technical assistance and online documentation are included with the active subscription."
      }
    ]
  },
  {
    id: "wr-essentials-3d-2y",
    slug: "webroot-essentials-3-devices-2-years",
    name: "Webroot Essentials (3 Devices / 2 Years)",
    shortDescription: "Two-year multi-year protection plan covering up to 3 devices with price stability and password security.",
    fullDescription: "Lock in two full years of cybersecurity protection for up to 3 PCs, Macs, smartphones, or tablets. Webroot Essentials 2-Year Plan eliminates annual renewal administrative tasks while keeping your hardware defended against the latest malware variants.",
    price: 129.99,
    billingPeriod: "2-year subscription",
    deviceCount: 3,
    deviceLabel: "Up to 3 Devices",
    duration: "2 Years",
    supportedOS: ["Windows", "macOS", "Android", "iOS"],
    category: "Essentials",
    badge: "2-Year Value",
    features: [
      "24 months of uninterrupted multi-device security coverage",
      "Protects up to 3 devices simultaneously",
      "Zero annual renewal hassle for two full years",
      "Password manager and identity shield included",
      "Continuous BrightCloud real-time threat intelligence updates"
    ],
    specs: {
      scanSpeed: "< 20 seconds",
      ramFootprint: "< 15 MB",
      cloudManaged: true,
      firewallIncluded: true,
      passwordManager: true,
      vpnIncluded: false
    },
    faqs: [
      {
        question: "Is the 2-year term billed monthly or upfront?",
        answer: "The subscription is paid upfront for the full 24-month duration."
      }
    ]
  },
  {
    id: "wr-is-plus-3d-1y",
    slug: "webroot-internet-security-plus-3-devices-1-year",
    name: "Webroot Internet Security Plus (3 Devices / 1 Year)",
    shortDescription: "Comprehensive internet security suite protecting 3 devices with mobile defenses and credential security.",
    fullDescription: "Webroot Internet Security Plus delivers robust threat mitigation across PCs, Macs, and mobile hardware. It shields your web browsing, blocks malicious downloads, encrypts passwords, and prevents phishing websites from intercepting credit card numbers and login credentials.",
    price: 59.99,
    billingPeriod: "per year",
    deviceCount: 3,
    deviceLabel: "Up to 3 Devices",
    duration: "1 Year",
    supportedOS: ["Windows", "macOS", "Android", "iOS"],
    category: "Internet Security",
    badge: "Versatile",
    features: [
      "Multi-device protection for up to 3 computers or mobile units",
      "Real-time phishing shield warns against deceptive login portals",
      "Secures mobile tablets and smartphones against malicious apps",
      "Password manager encrypts login credentials and auto-fills forms",
      "Zero bloatware footprint, installs in seconds"
    ],
    specs: {
      scanSpeed: "< 20 seconds",
      ramFootprint: "< 15 MB",
      cloudManaged: true,
      firewallIncluded: true,
      passwordManager: true,
      vpnIncluded: false
    },
    faqs: [
      {
        question: "What is the difference between AntiVirus and Internet Security Plus?",
        answer: "Internet Security Plus expands coverage to mobile devices (smartphones/tablets) and adds an encrypted password manager."
      }
    ]
  },
  {
    id: "wr-is-complete-5d-1y",
    slug: "webroot-internet-security-complete-5-devices-1-year",
    name: "Webroot Internet Security Complete (5 Devices / 1 Year)",
    shortDescription: "Complete security suite covering 5 devices, plus 25GB encrypted cloud backup and system optimizer.",
    fullDescription: "Webroot Internet Security Complete is the full-featured flagship tier of the classic SecureAnywhere line. Covers up to 5 devices and adds 25GB of secure cloud backup for critical documents and photos, along with an automated System Optimizer that purges online browsing traces and temporary cache files.",
    price: 79.99,
    billingPeriod: "per year",
    deviceCount: 5,
    deviceLabel: "Up to 5 Devices",
    duration: "1 Year",
    supportedOS: ["Windows", "macOS", "Android", "iOS"],
    category: "Complete Security",
    badge: "Includes Cloud Backup",
    features: [
      "5-device protection across PC, Mac, Android, and iOS",
      "25GB secure encrypted cloud backup storage",
      "System Optimizer wipes browsing traces and boosts performance",
      "Password manager and multi-device identity protection",
      "Anti-ransomware automatic rollback capability"
    ],
    specs: {
      scanSpeed: "< 20 seconds",
      ramFootprint: "< 15 MB",
      cloudManaged: true,
      firewallIncluded: true,
      passwordManager: true,
      vpnIncluded: false,
      cloudStorage: "25 GB Secure Cloud Storage"
    },
    faqs: [
      {
        question: "How does the 25GB cloud backup work?",
        answer: "Webroot automatically syncs your chosen folders (documents, photos) to secure encrypted cloud servers, accessible from any connected browser."
      }
    ]
  },
  {
    id: "wr-is-complete-5d-2y",
    slug: "webroot-internet-security-complete-5-devices-2-years",
    name: "Webroot Internet Security Complete (5 Devices / 2 Years)",
    shortDescription: "Two-year complete protection plan covering 5 devices, 25GB cloud backup, and system cleanup tools.",
    fullDescription: "Long-term peace of mind with 2 full years of Webroot Internet Security Complete. Protect up to 5 devices with cloud-native cybersecurity, 25GB cloud storage, password management, and system optimization utilities.",
    price: 149.99,
    billingPeriod: "2-year subscription",
    deviceCount: 5,
    deviceLabel: "Up to 5 Devices",
    duration: "2 Years",
    supportedOS: ["Windows", "macOS", "Android", "iOS"],
    category: "Complete Security",
    badge: "2-Year Complete",
    features: [
      "24-month multi-year complete security package",
      "Covers up to 5 devices (computers and smartphones)",
      "25GB encrypted cloud storage backup included for the entire term",
      "Automated system optimizer and privacy cleaner",
      "Continuous threat intelligence shielding without re-licensing friction"
    ],
    specs: {
      scanSpeed: "< 20 seconds",
      ramFootprint: "< 15 MB",
      cloudManaged: true,
      firewallIncluded: true,
      passwordManager: true,
      vpnIncluded: false,
      cloudStorage: "25 GB Secure Cloud Storage"
    },
    faqs: [
      {
        question: "Does the 25GB cloud storage remain active for the full 2 years?",
        answer: "Yes, the 25GB cloud backup space remains active throughout the entire 24-month subscription term."
      }
    ]
  },
  {
    id: "wr-vpn-3d-1y",
    slug: "webroot-secure-vpn-3-devices-1-year",
    name: "Webroot Secure VPN (3 Devices / 1 Year)",
    shortDescription: "Bank-grade 256-bit AES encrypted VPN securing online privacy and public Wi-Fi on 3 devices.",
    fullDescription: "Webroot Secure VPN secures your internet connection with military-grade 256-bit encryption. Safeguards your banking information, credentials, and personal browsing history on public Wi-Fi hotspots at airports, hotels, and cafes. Features a strict no-logs policy and an automatic internet kill switch.",
    price: 59.99,
    billingPeriod: "per year",
    deviceCount: 3,
    deviceLabel: "Up to 3 Devices",
    duration: "1 Year",
    supportedOS: ["Windows", "macOS", "Android", "iOS"],
    category: "VPN & Privacy",
    badge: "Privacy Shield",
    features: [
      "Bank-grade 256-bit AES data encryption",
      "Automatic kill switch prevents IP leaks if connection drops",
      "Strict zero-logging policy for browsing privacy",
      "Global server network across 30+ countries",
      "Seamless client for Windows, Mac, Android, and iOS"
    ],
    specs: {
      scanSpeed: "N/A (VPN)",
      ramFootprint: "< 20 MB",
      cloudManaged: true,
      firewallIncluded: false,
      passwordManager: false,
      vpnIncluded: true
    },
    faqs: [
      {
        question: "Does Webroot keep logs of my web browsing activity?",
        answer: "No. Webroot operates a strict no-logs policy, meaning none of your browsing data, IP queries, or download activities are logged or stored."
      }
    ]
  },
  {
    id: "wr-vpn-5d-1y",
    slug: "webroot-secure-vpn-5-devices-1-year",
    name: "Webroot Secure VPN (5 Devices / 1 Year)",
    shortDescription: "Household VPN privacy protection for up to 5 devices with unlimited bandwidth and encrypted tunnels.",
    fullDescription: "Protect the whole family's online privacy across up to 5 devices. Webroot Secure VPN prevents internet service providers and malicious eavesdroppers from inspecting web traffic, downloading unencrypted personal metadata, or tracking physical geographic locations.",
    price: 79.99,
    billingPeriod: "per year",
    deviceCount: 5,
    deviceLabel: "Up to 5 Devices",
    duration: "1 Year",
    supportedOS: ["Windows", "macOS", "Android", "iOS"],
    category: "VPN & Privacy",
    badge: "Family VPN",
    features: [
      "5 concurrent VPN connections across laptops, phones, and tablets",
      "Unlimited encrypted bandwidth without throttling",
      "DNS leak and IPv6 leak prevention protocols",
      "Simple one-click secure connect interface",
      "Automatic activation on untrusted public Wi-Fi networks"
    ],
    specs: {
      scanSpeed: "N/A (VPN)",
      ramFootprint: "< 20 MB",
      cloudManaged: true,
      firewallIncluded: false,
      passwordManager: false,
      vpnIncluded: true
    },
    faqs: [
      {
        question: "Can I connect multiple devices at the exact same time?",
        answer: "Yes, up to 5 devices can maintain concurrent encrypted VPN tunnels on this subscription."
      }
    ]
  },
  {
    id: "wr-premium-5d-1y",
    slug: "webroot-premium-protection-5-devices-1-year",
    name: "Webroot Premium Protection (5 Devices / 1 Year)",
    shortDescription: "All-in-one cybersecurity flagship suite combining cloud antivirus, Secure VPN, and identity monitoring for 5 devices.",
    fullDescription: "Webroot Premium Protection delivers comprehensive defense by integrating full-strength cloud antivirus, unlimited Webroot Secure VPN, password management, and dark web identity monitoring into a single unified package for up to 5 devices.",
    price: 129.99,
    billingPeriod: "per year",
    deviceCount: 5,
    deviceLabel: "Up to 5 Devices",
    duration: "1 Year",
    supportedOS: ["Windows", "macOS", "Android", "iOS"],
    category: "Premium Suite",
    badge: "All-In-One Flagship",
    features: [
      "Full cloud antivirus and real-time anti-ransomware protection",
      "Unlimited Webroot Secure VPN for encrypted Wi-Fi browsing",
      "Dark web identity breach monitoring and compromised credential alerts",
      "Encrypted password manager with cross-device sync",
      "Covers up to 5 computers, phones, or tablets with unified control"
    ],
    specs: {
      scanSpeed: "< 20 seconds",
      ramFootprint: "< 25 MB",
      cloudManaged: true,
      firewallIncluded: true,
      passwordManager: true,
      vpnIncluded: true
    },
    faqs: [
      {
        question: "Does this plan include both the Antivirus and the VPN in one purchase?",
        answer: "Yes. Webroot Premium Protection bundles both the full antivirus security engine and the Secure VPN client."
      }
    ]
  },
  {
    id: "wr-biz-endpoint-5seats-1y",
    slug: "webroot-business-endpoint-protection-5-seats-1-year",
    name: "Webroot Business Endpoint Protection (5 Endpoints / 1 Year)",
    shortDescription: "Enterprise-grade cloud endpoint security designed for business workstations and commercial offices.",
    fullDescription: "Webroot Business Endpoint Protection provides signatureless, cloud-managed cybersecurity for commercial workstations and servers. Managed through an intuitive web console, it deploys in seconds, uses minimal system resources, and automatically rolls back unapproved ransomware modifications.",
    price: 150.00,
    billingPeriod: "per year ($30/seat)",
    deviceCount: 5,
    deviceLabel: "5 Business Endpoints",
    duration: "1 Year",
    supportedOS: ["Windows", "macOS", "Virtual Environments"],
    category: "Business Solutions",
    badge: "Commercial / Business",
    features: [
      "5 endpoint licenses for business workstations, laptops, or servers",
      "Centralized cloud management console with multi-device policies",
      "Automated remediation and rollback of ransomware file alterations",
      "Ultra-lightweight <15MB agent with rapid background silent install",
      "Context-aware behavioral heuristics and offline file protection"
    ],
    specs: {
      scanSpeed: "< 20 seconds",
      ramFootprint: "< 15 MB",
      cloudManaged: true,
      firewallIncluded: true,
      passwordManager: false,
      vpnIncluded: false
    },
    faqs: [
      {
        question: "How is the business edition managed?",
        answer: "Administrators manage all 5 endpoints through the Webroot Business Management Console in any standard web browser, without requiring an on-premise server."
      },
      {
        question: "Can I add more endpoints in the future?",
        answer: "Yes, business licenses can scale to additional seats as your organization expands."
      }
    ]
  }
];

export const PRODUCT_CATEGORIES = [
  "All Categories",
  "Antivirus",
  "Essentials",
  "Internet Security",
  "Complete Security",
  "VPN & Privacy",
  "Premium Suite",
  "Gaming Edition",
  "Mobile & ChromeOS",
  "Business Solutions"
] as const;

export const OS_FILTERS = [
  "All Systems",
  "Windows",
  "macOS",
  "Android",
  "iOS",
  "ChromeOS"
] as const;

export const DEVICE_FILTERS = [
  "All Devices",
  "1 Device",
  "3 Devices",
  "5 Devices"
] as const;

export const DURATION_FILTERS = [
  "All Durations",
  "1 Year",
  "2 Years"
] as const;
