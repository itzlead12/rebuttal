export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Why Rebuttal", href: "#why-rebuttal" },
  { label: "Revenue", href: "#revenue" },
  { label: "Developers", href: "#developers" },
  { label: "Security", href: "#security" },
];

export const MOCK_DISPUTE = {
  id: "PP-D-94812",
  type: "Item Not Received",
  amount: "$428.00",
  currency: "USD",
  buyer: "Marcus Vance",
  buyerEmail: "m.vance@gmail.com",
  dateFiled: "Today, 10:14 AM",
  deadline: "6 days left",
  winLikelihood: 87,
  recommendation: "Fight dispute",
  recommendationType: "FIGHT" as const,
  aiSummary:
    "Tracking shows delivery to buyer's front door with GPS stamp. Order matches transaction record.",
  factorsFor: [
    { text: "Tracking confirms delivered to buyer's address (Austin, TX)", verified: true },
    { text: "Order matches transaction #10842", verified: true },
    { text: "Store policy supports your claim", verified: true },
    { text: "USPS Priority proof attached", verified: true },
  ],
  factorsAgainst: [
    { text: "Buyer sent 1 message before dispute", critical: false },
  ],
  draftResponse: `To the PayPal Dispute Team,

We are submitting evidence for Dispute Case #PP-D-94812 ($428.00 USD).

The buyer claimed "Item Not Received". Carrier records confirm successful delivery:

1. CARRIER: USPS Priority Mail (Tracking: 9400 1118 9922 3190 248).
2. PROOF: Delivered on Oct 14 at 11:42 AM to front door in Austin, TX 78701, matching the transaction address.
3. MATCH: Order #10842 invoice matches this purchase.

Under PayPal Seller Protection (Section 11.3), online tracking confirming delivery qualifies this transaction for dispute protection.

Please close this dispute in our favor and release the funds.

Alex Mercer · Mercer Gear`,
};

export const REVENUE_METRICS = {
  totalRecovered: "$12,840",
  quarterGrowth: "+18.4%",
  winRate: "87%",
  wonCount: 48,
  totalCases: 55,
  lostCount: 7,
  pendingCount: 4,
  pendingAmount: "$1,730",
  avgResponseTime: "18m",
  chartData: [
    { month: "May", amount: 2400, won: 8, lost: 2 },
    { month: "Jun", amount: 3950, won: 12, lost: 1 },
    { month: "Jul", amount: 5600, won: 15, lost: 2 },
    { month: "Aug", amount: 8200, won: 22, lost: 3 },
    { month: "Sep", amount: 10450, won: 34, lost: 4 },
    { month: "Oct", amount: 12840, won: 48, lost: 7 },
  ],
};

export const PROBLEM_CARDS = [
  {
    step: "01",
    title: "Tight Deadlines",
    subtitle: "Every dispute has a timer.",
    description:
      "You only get a few days to reply. Miss the window, and PayPal automatically refunds the buyer from your money.",
    badge: "10-20 Day Limit",
  },
  {
    step: "02",
    title: "Scattered Evidence",
    subtitle: "Proof is spread everywhere.",
    description:
      "Tracking is at USPS, receipts are in Shopify, and messages are in your inbox. Gathering it by hand takes hours.",
    badge: "Hours of Work",
  },
  {
    step: "03",
    title: "Weak Responses",
    subtitle: "Angry replies don't win.",
    description:
      "PayPal only accepts clear, factual proof. Missing one tracking detail turns a winnable dispute into lost money.",
    badge: "Lost Revenue",
  },
];

export const WORKFLOW_STEPS = [
  {
    number: "01",
    name: "Receive",
    tagline: "Dispute arrives automatically.",
    detail: "Rebuttal catches the dispute from PayPal the moment it's filed.",
  },
  {
    number: "02",
    name: "Gather",
    tagline: "Evidence is pulled together.",
    detail: "We match tracking, order info, receipts, and buyer messages into one file.",
  },
  {
    number: "03",
    name: "Rebuttal",
    tagline: "AI writes the response.",
    detail: "AI scores your win chances and drafts a factual, policy-backed reply.",
  },
  {
    number: "04",
    name: "Approve",
    tagline: "You review and submit.",
    detail: "You check the reply and click approve. Nothing sends without your say.",
  },
];

export const PREVENTION_CARDS = [
  {
    icon: "Truck",
    title: "Auto-sync tracking",
    trigger: "Missing tracking",
    action: "Fulfillment Sync",
    description: "Uploads carrier tracking right away so buyers cannot claim non-delivery.",
    impact: "-42% Disputes",
  },
  {
    icon: "Clock",
    title: "Catch upset buyers early",
    trigger: "Unanswered inquiry",
    action: "Early Warning",
    description: "Flags unhappy customers so you can solve issues before they open a dispute.",
    impact: "+65% Early Fixes",
  },
  {
    icon: "FileCheck2",
    title: "Fix confusing descriptions",
    trigger: "Item not as described",
    action: "Listing Review",
    description: "Spots products that get disputed often so you can clarify sizing and details.",
    impact: "-31% Claims",
  },
];

export const TRUST_PRINCIPLES = [
  {
    icon: "ShieldCheck",
    title: "Human Approval",
    statement: "Nothing is sent without you.",
    description: "You have the final say. Review the letter, edit it, and click approve.",
  },
  {
    icon: "Database",
    title: "Real Facts Only",
    statement: "No hallucinated claims.",
    description: "The AI only uses verified tracking numbers, dates, and order receipts.",
  },
  {
    icon: "Eye",
    title: "Clear Reasons",
    statement: "See why you can win.",
    description: "We show the points in your favor and any risks before you decide to fight.",
  },
  {
    icon: "Lock",
    title: "Audit Trail",
    statement: "Everything is logged.",
    description: "Every file, response draft, and PayPal submission is saved for your records.",
  },
];
