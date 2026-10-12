import { LogisticsService } from "@/types";

export const PROPOSED_SERVICES: LogisticsService[] = [
  {
    id: "freight-transportation",
    title: "Freight Transportation",
    badge: "Proposed Capability",
    shortSummary: "Proposed regional and dry freight transportation coordination positioned at the key trade corridor of Laredo, Texas.",
    fullDescription: "Proposed freight transportation services engineered to facilitate movement of goods through direct linehauls, Full Truckload (FTL), and Less Than Truckload (LTL) carrier networks. Positioned in the prime international shipping hub of Laredo, Texas, proposed capabilities focus on structured scheduling, reliable routing, and verified bill-of-lading handling.",
    operationalScope: "Regional interstate routes, cross-border corridor logistics, dry van and standard palletized freight coordination.",
    capabilities: [
      "Full Truckload (FTL) network coordination",
      "Less Than Truckload (LTL) scheduling",
      "Laredo trade corridor route oversight",
      "Bill of lading and dispatch verification",
      "Carrier capacity matching"
    ],
    keyBenefits: [
      "Clear route communication without exaggerated delivery timelines",
      "Direct focus on operational safety and cargo integrity",
      "Structured documentation handling at transfer points"
    ]
  },
  {
    id: "logistics-coordination",
    title: "Logistics Coordination",
    badge: "Proposed Capability",
    shortSummary: "Systematic coordination of shipments, carrier scheduling, and milestone communication across freight lanes.",
    fullDescription: "Structured logistical planning and transport management designed to bring transparency and control to supply networks. Coordination protocols focus on milestone check-ins, transit confirmation, and proactive schedule alignment between origins, transfer points, and receiving destinations.",
    operationalScope: "Carrier communication, transit milestone tracking, dispatch scheduling, and documentation reconciliation.",
    capabilities: [
      "Shipment milestone check-in monitoring",
      "Driver dispatch and arrival coordination",
      "Exceptions communication and route rerouting support",
      "Delivery window appointment coordination",
      "Centralized shipment administrative management"
    ],
    keyBenefits: [
      "Transparent status tracking without automated false promises",
      "Single-point operational communications",
      "Rigorous adherence to shipping appointments and dock hours"
    ]
  },
  {
    id: "distribution-delivery",
    title: "Distribution & Delivery",
    badge: "Proposed Capability",
    shortSummary: "Planned distribution scheduling, regional transit handoffs, and dock-to-dock delivery management.",
    fullDescription: "Distribution frameworks designed to organize palletized and commercial freight for staged delivery and scheduled receiving. Geared toward commercial shippers requiring organized transit handoffs, scheduled appointment unloading, and documented proof-of-delivery protocols.",
    operationalScope: "Dock-to-dock deliveries, commercial distribution hubs, pallet transfer points, and receiving dock schedules.",
    capabilities: [
      "Receiving dock appointment coordination",
      "Commercial distribution staging alignment",
      "Proof of delivery (POD) receipt capture",
      "Staged cross-hub transport scheduling",
      "Cargo condition verification at handoff"
    ],
    keyBenefits: [
      "Documented chain of custody at each physical handoff",
      "Minimization of detention time through strict schedule synchronization",
      "Commercial-grade receiving compliance"
    ]
  },
  {
    id: "supply-chain-support",
    title: "Supply-Chain Support",
    badge: "Proposed Capability",
    shortSummary: "Administrative and operational support for vendor workflows, freight manifests, and shipping compliance.",
    fullDescription: "Proposed supply-chain support services structured to assist commercial entities with the operational requirements of freight movement. From paperwork audits to vendor dispatch schedules, our focus is on eliminating logistical bottlenecks through meticulous preparation.",
    operationalScope: "Documentation verification, cross-dock administrative support, and compliance checklist auditing.",
    capabilities: [
      "Freight manifest and documentation review",
      "Vendor shipping requirement verification",
      "Cross-docking administrative facilitation",
      "Commercial invoice and packing slip alignment",
      "Operational workflow consultation"
    ],
    keyBenefits: [
      "Audit-ready documentation trails for commercial shipments",
      "Reduced clearance and receiving delays",
      "Structured compliance oversight for partner carriers"
    ]
  },
  {
    id: "commercial-transportation-solutions",
    title: "Commercial Transportation Solutions",
    badge: "Proposed Capability",
    shortSummary: "Tailored commercial shipping arrangements for regular lane requirements and specific freight profiles.",
    fullDescription: "Dedicated commercial freight solutions developed for businesses with recurring lane demands or specialized scheduling requirements. We collaborate directly with commercial clients to establish dependable dispatch frameworks tailored to specific operational rhythms.",
    operationalScope: "Dedicated freight lane coordination, recurring contractual routes, and enterprise shipment scheduling.",
    capabilities: [
      "Dedicated recurring lane coordination",
      "Contractual transport planning",
      "Custom dispatch timing and seasonal surge planning",
      "Capacity reservation frameworks",
      "Operational performance reporting"
    ],
    keyBenefits: [
      "Predictable transport scheduling for recurring business lanes",
      "Tailored logistics protocols matching facility dock constraints",
      "Direct commercial collaboration focused on long-term dependability"
    ]
  }
];
