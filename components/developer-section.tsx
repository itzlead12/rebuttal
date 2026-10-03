"use client";

import React, { useState } from "react";
import {
  Code2,
  Terminal,
  Copy,
  Check,
  Zap,
  Webhook,
  ShieldCheck,
  ArrowRight,
  Server,
  Layers,
  FileCode,
} from "lucide-react";

export function DeveloperSection() {
  const [activeTab, setActiveTab] = useState<"webhook" | "sdk" | "curl" | "json">("webhook");
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedInstall, setCopiedInstall] = useState(false);

  const codeSnippets = {
    webhook: `// Next.js / Node.js PayPal Webhook Handler
import { Rebuttal } from "@rebuttal/sdk";

const rebuttal = new Rebuttal({
  apiKey: process.env.REBUTTAL_API_KEY,
  paypalClientId: process.env.PAYPAL_CLIENT_ID,
  paypalSecret: process.env.PAYPAL_SECRET,
});

export async function POST(req: Request) {
  const event = await req.json();

  // Handle incoming dispute event from PayPal Resolution Center
  if (event.event_type === "CUSTOMER.DISPUTE.CREATED") {
    const caseFile = await rebuttal.disputes.receive({
      disputeId: event.resource.dispute_id,
      transactionId: event.resource.disputed_transactions[0].seller_transaction_id,
      amount: event.resource.dispute_amount.value,
      currency: event.resource.dispute_amount.currency_code,
      reason: event.resource.reason, // e.g. MERCHANDISE_OR_SERVICE_NOT_RECEIVED
    });

    // Automatically aggregate carrier tracking & store invoices
    await rebuttal.evidence.autoCompile(caseFile.id);

    console.log(\`Case \${caseFile.id} compiled. Win likelihood: \${caseFile.score}%\`);
  }

  return Response.json({ status: "acknowledged" });
}`,

    sdk: `// Programmatic Dispute Evaluation & Human Review Trigger
import { Rebuttal } from "@rebuttal/sdk";

const rebuttal = new Rebuttal({ apiKey: process.env.REBUTTAL_API_KEY });

// 1. Evaluate dispute using evidence-grounded AI
const evaluation = await rebuttal.disputes.evaluate("PP-D-94812", {
  carrier: "USPS",
  trackingNumber: "9400111899223190248",
  orderId: "SHOP-10842",
});

console.log(evaluation.winLikelihood); // 0.87 (87%)
console.log(evaluation.recommendation); // "FIGHT"
console.log(evaluation.policyCitation); // "PayPal Seller Protection 11.3"

// 2. Draft factual rebuttal letter
const draft = await rebuttal.disputes.generateDraft("PP-D-94812");

// 3. Request explicit human sign-off (Zero blind submission)
await rebuttal.approvals.notifyMerchant({
  disputeId: "PP-D-94812",
  draft: draft.text,
  channel: "slack_webhook", // or "email" / "dashboard"
});`,

    curl: `# Direct REST API Call
curl -X POST https://api.rebuttal.ai/v1/disputes/evaluate \\
  -H "Authorization: Bearer rbt_live_8f93e291a" \\
  -H "Content-Type: application/json" \\
  -d '{
    "paypal_dispute_id": "PP-D-94812",
    "claim_type": "ITEM_NOT_RECEIVED",
    "dispute_amount": 428.00,
    "currency": "USD",
    "evidence": {
      "carrier": "USPS_PRIORITY",
      "tracking_code": "9400111899223190248",
      "recipient_zip": "78701",
      "delivery_status": "DELIVERED_FRONT_DOOR"
    }
  }'`,

    json: `{
  "dispute_id": "PP-D-94812",
  "status": "EVALUATED",
  "win_likelihood": 0.87,
  "confidence_interval": [0.83, 0.91],
  "recommendation": "FIGHT",
  "applicable_policy": "PAYPAL_SELLER_PROTECTION_SEC_11_3",
  "factors_for": [
    "Carrier online tracking confirms physical delivery to recipient zip code",
    "Shipping address strictly matches PayPal transaction order #10842",
    "Fulfillment timestamp was within 24h of payment authorization"
  ],
  "factors_against": [
    "Buyer pre-dispute message on Oct 11 was unresolved"
  ],
  "human_approval_required": true,
  "submission_ready": false,
  "created_at": "2026-10-14T15:20:10Z"
}`,
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCopyInstall = () => {
    navigator.clipboard.writeText("npm i @rebuttal/sdk");
    setCopiedInstall(true);
    setTimeout(() => setCopiedInstall(false), 2000);
  };

  return (
    <section id="developers" className="py-24 sm:py-32 bg-[#0F1020] text-white relative overflow-hidden border-t border-white/10 bg-grid-dark">
      {/* Background ambient violet glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-[#7C3AED]/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-medium text-violet-300 mb-4">
              <Code2 className="w-3.5 h-3.5 text-[#7C3AED]" />
              <span>DEVELOPER PLATFORM & WEBHOOKS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Built for developers. <br />
              <span className="gradient-text">Ready for PayPal.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400">
              Integrate dispute defense into your stack. Catch PayPal webhooks, match carrier tracking, and draft responses with a few lines of code.
            </p>
          </div>

          {/* Quick Install Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex items-center gap-2 bg-[#17113F] border border-white/10 px-4 py-2.5 rounded-xl font-mono text-xs text-gray-300 shadow-card">
              <Terminal className="w-3.5 h-3.5 text-[#7C3AED]" />
              <span>npm i @rebuttal/sdk</span>
              <button
                type="button"
                onClick={handleCopyInstall}
                className="ml-2 p-1 text-gray-400 hover:text-white transition-colors"
                title="Copy install command"
              >
                {copiedInstall ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
            <a
              href="#docs"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-xs font-semibold text-white transition-colors"
            >
              <span>Read API Docs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Code Showcase Split Layout */}
        <div className="rounded-2xl bg-[#17113F]/90 border border-white/10 shadow-elevated overflow-hidden">
          
          {/* Top Bar with Tab Buttons & Action */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b border-white/10 bg-[#0F1020]/70">
            {/* Tabs */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto py-1">
              <button
                type="button"
                onClick={() => setActiveTab("webhook")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors flex items-center gap-1.5 ${
                  activeTab === "webhook"
                    ? "bg-[#7C3AED] text-white shadow-sm"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Webhook className="w-3.5 h-3.5" />
                <span>PayPal Webhook</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("sdk")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors flex items-center gap-1.5 ${
                  activeTab === "sdk"
                    ? "bg-[#7C3AED] text-white shadow-sm"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>TypeScript SDK</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("curl")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors flex items-center gap-1.5 ${
                  activeTab === "curl"
                    ? "bg-[#7C3AED] text-white shadow-sm"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>cURL</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("json")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors flex items-center gap-1.5 ${
                  activeTab === "json"
                    ? "bg-[#7C3AED] text-white shadow-sm"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Server className="w-3.5 h-3.5" />
                <span>Evaluation JSON</span>
              </button>
            </div>

            {/* Copy Code Button */}
            <button
              type="button"
              onClick={handleCopyCode}
              className="inline-flex items-center gap-1.5 text-xs text-violet-300 hover:text-white font-mono bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 transition-colors"
            >
              {copiedCode ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy code</span>
                </>
              )}
            </button>
          </div>

          {/* Code Body */}
          <div className="p-4 sm:p-6 overflow-x-auto bg-[#0A0B14]">
            <pre className="font-mono text-xs sm:text-[13px] leading-relaxed text-gray-200 selection:bg-[#7C3AED]/40">
              <code>{codeSnippets[activeTab]}</code>
            </pre>
          </div>

          {/* Bottom Feature Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 sm:p-6 border-t border-white/10 bg-[#0F1020]/40 text-xs">
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Verified Signatures</span>
                <span className="text-gray-400">Validates PayPal webhook tokens and certificate chains automatically.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">&lt; 300ms Inference</span>
                <span className="text-gray-400">Low-latency case scoring with explainability reasons.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Layers className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Multi-Carrier Adapters</span>
                <span className="text-gray-400">Unified tracking parser for USPS, FedEx, UPS, and DHL.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
