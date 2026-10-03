"use client";

import React, { useState } from "react";
import {
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  FileText,
  Copy,
  Check,
  Scale,
} from "lucide-react";
import { MOCK_DISPUTE } from "@/lib/constants";

export function AiAnalysis() {
  const [showResponse, setShowResponse] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(MOCK_DISPUTE.draftResponse);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-section" className="py-20 sm:py-24 bg-[#FAFAFC] dark:bg-[#0A0B14] border-t border-[#E8E5F0] dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#6D28D9] dark:text-violet-400 mb-2">
            Explainable AI
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F1020] dark:text-white font-heading tracking-tight">
            AI that shows its work.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Rebuttal tells you why a case is winnable, cites the exact PayPal rule, and points out any missing facts.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <h3 className="text-xl sm:text-3xl font-extrabold text-[#0F1020] dark:text-white font-heading tracking-tight leading-snug">
              Know why a case is worth fighting.
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              No black-box answers. Rebuttal checks carrier GPS stamps, signature records, and order history against PayPal Seller Protection guidelines.
            </p>

            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  <strong className="text-gray-900 dark:text-white">Delivery Proof:</strong> Verifies package reached buyer&apos;s zip code.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  <strong className="text-gray-900 dark:text-white">Risk Warnings:</strong> Flags gaps in customer messages before you reply.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  <strong className="text-gray-900 dark:text-white">Policy Defense:</strong> Writes formal arguments based on Section 11.3.
                </p>
              </div>
            </div>

            <div className="pt-1">
              <button
                type="button"
                onClick={() => setShowResponse(!showResponse)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7C3AED] dark:text-violet-400 hover:text-[#6D28D9]"
              >
                <span>{showResponse ? "Hide draft" : "Preview sample draft response →"}</span>
              </button>
            </div>
          </div>

          {/* Right Column (7 Cols): Live AI Card */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white dark:bg-[#121324] border border-[#E8E5F0] dark:border-white/10 shadow-card p-6 sm:p-7 space-y-5">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E8E5F0] dark:border-white/10">
                <div>
                  <span className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Win Likelihood
                  </span>
                  <div className="text-3xl font-extrabold text-[#6D28D9] dark:text-violet-400 font-heading mt-0.5">
                    87%
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider block">
                    Recommendation
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#16A34A]/10 text-[#16A34A] border border-[#16A34A]/20 mt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Fight Claim
                  </span>
                </div>
              </div>

              {/* Factors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="font-bold text-[#16A34A] block mb-2">FOR (3)</span>
                  <div className="space-y-1.5 text-gray-700 dark:text-gray-300">
                    <div className="flex items-center gap-1.5 bg-[#FAFAFC] dark:bg-white/5 p-2 rounded-lg">
                      <Check className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                      <span>Tracking confirms delivery</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-[#FAFAFC] dark:bg-white/5 p-2 rounded-lg">
                      <Check className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                      <span>Order matches transaction</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-[#FAFAFC] dark:bg-white/5 p-2 rounded-lg">
                      <Check className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                      <span>Store policy supports claim</span>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="font-bold text-red-500 block mb-2">AGAINST (1)</span>
                  <div className="space-y-1.5 text-gray-700 dark:text-gray-300">
                    <div className="flex items-center gap-1.5 bg-amber-50/60 dark:bg-amber-500/10 p-2 rounded-lg text-amber-900 dark:text-amber-200">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>Buyer message was unanswered</span>
                    </div>
                    <div className="text-[11px] text-gray-500 dark:text-gray-400 p-2">
                      Mitigated by carrier delivery scan.
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-1 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setShowResponse(!showResponse)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white text-xs font-bold shadow-sm hover:opacity-95"
                >
                  {showResponse ? "Close draft" : "Generate response →"}
                </button>
                <span className="text-[11px] text-gray-400 italic">
                  Estimate based on PayPal policy data.
                </span>
              </div>

              {/* Draft Box */}
              {showResponse && (
                <div className="mt-3 pt-3 border-t border-[#E8E5F0] dark:border-white/10 bg-[#FAFAFC] dark:bg-white/5 rounded-xl p-3.5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
                      Generated Response Letter
                    </span>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="text-xs font-semibold text-[#7C3AED] dark:text-violet-400 flex items-center gap-1"
                    >
                      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      <span>{copied ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                  <pre className="text-xs font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto p-2.5 bg-white dark:bg-[#0A0B14] rounded-lg border border-[#E8E5F0] dark:border-white/10">
                    {MOCK_DISPUTE.draftResponse}
                  </pre>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
