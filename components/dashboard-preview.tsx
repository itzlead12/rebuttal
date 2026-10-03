"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Clock,
  ArrowUpRight,
  Sparkles,
  Lock,
  Activity,
} from "lucide-react";
import { RebuttalIcon } from "@/components/logo";
import { MOCK_DISPUTE, REVENUE_METRICS } from "@/lib/constants";
import { DisputeModal } from "@/components/dispute-modal";

export function DashboardPreview() {
  const [modalOpen, setModalOpen] = useState(false);
  const [claimAccepted, setClaimAccepted] = useState(false);

  return (
    <section id="product" className="relative w-full">
      {/* Container with subtle glow behind dashboard */}
      <div className="relative mx-auto max-w-6xl rounded-2xl p-1 sm:p-2.5 bg-gradient-to-b from-[#E8E5F0] dark:from-[#2A2359] via-[#F3EEFF]/40 dark:via-[#17113F]/40 to-transparent shadow-elevated transition-colors">
        <div className="rounded-xl bg-white dark:bg-[#121324] border border-[#E8E5F0] dark:border-white/10 overflow-hidden shadow-subtle">
          
          {/* Top Window Bar & PayPal Connection Status */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 border-b border-[#E8E5F0] dark:border-white/10 bg-[#FAFAFC] dark:bg-[#0F1020]">
            {/* Left: Window controls & Brand identifier */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 mr-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <div className="flex items-center gap-2">
                <RebuttalIcon size={26} />
                <span className="text-xs font-bold text-[#0F1020] dark:text-white font-heading">Rebuttal OS</span>
              </div>
              <span className="text-gray-300 dark:text-gray-600">/</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium hidden sm:inline">Dispute Operations</span>
            </div>

            {/* Middle/Right: Connected to PayPal badge */}
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-xs font-medium text-emerald-800 dark:text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Connected to PayPal API</span>
              </div>

              <div className="hidden md:flex items-center gap-2 pl-2 border-l border-gray-200 dark:border-gray-700 text-xs text-gray-600 dark:text-gray-300">
                <span className="w-6 h-6 rounded-full bg-[#17113F] dark:bg-violet-600 text-white flex items-center justify-center font-bold text-[10px]">
                  AM
                </span>
                <span className="font-medium">Alex Mercer · Mercer Gear</span>
              </div>
            </div>
          </div>

          {/* Inner Dashboard Body */}
          <div className="p-4 sm:p-6 lg:p-8 space-y-6 bg-white dark:bg-[#121324] transition-colors">
            
            {/* Header Greeting & Fast Stats Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#E8E5F0]/60 dark:border-white/10">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0F1020] dark:text-white font-heading tracking-tight">
                  Good morning, Alex
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                  1 urgent dispute requires human review. 4 active cases tracking on schedule.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-medium text-[#7C3AED] dark:text-violet-300 bg-[#F3EEFF] dark:bg-white/5 px-3 py-1.5 rounded-lg border border-violet-100 dark:border-white/10 self-start sm:self-auto">
                <Activity className="w-3.5 h-3.5" />
                <span>Syncing live PayPal dispute events</span>
              </div>
            </div>

            {/* 4 Metric Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {/* Metric 1: Recovered */}
              <div className="p-4 rounded-xl border border-[#E8E5F0] dark:border-white/10 bg-[#FAFAFC] dark:bg-[#17113F]/50 hover:border-violet-200 dark:hover:border-violet-500/30 transition-colors">
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 font-medium">
                  <span>Recovered</span>
                  <span className="inline-flex items-center text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-1.5 py-0.5 rounded">
                    +18.4%
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0F1020] dark:text-white font-heading mt-2">
                  $12,840
                </div>
                <div className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                  <span>48 successful rebuttals</span>
                </div>
              </div>

              {/* Metric 2: Win likelihood */}
              <div className="p-4 rounded-xl border border-violet-100 dark:border-violet-500/20 bg-[#F3EEFF]/40 dark:bg-[#7C3AED]/10 hover:border-violet-300 transition-colors">
                <div className="flex items-center justify-between text-xs text-violet-800 dark:text-violet-300 font-medium">
                  <span>Win likelihood</span>
                  <span className="inline-flex items-center text-[11px] font-semibold text-violet-700 dark:text-violet-300 bg-white dark:bg-white/10 px-1.5 py-0.5 rounded border border-violet-200 dark:border-white/10">
                    High
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#6D28D9] dark:text-violet-400 font-heading mt-2">
                  87%
                </div>
                <div className="text-[11px] text-violet-700 dark:text-violet-300 mt-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Calibrated by dispute AI</span>
                </div>
              </div>

              {/* Metric 3: Pending disputes */}
              <div className="p-4 rounded-xl border border-[#E8E5F0] dark:border-white/10 bg-[#FAFAFC] dark:bg-[#17113F]/50 hover:border-violet-200 dark:hover:border-violet-500/30 transition-colors">
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 font-medium">
                  <span>Pending disputes</span>
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0F1020] dark:text-white font-heading mt-2">
                  4
                </div>
                <div className="text-[11px] text-amber-700 dark:text-amber-400 mt-1">
                  $1,730 total under review
                </div>
              </div>

              {/* Metric 4: Avg response time */}
              <div className="p-4 rounded-xl border border-[#E8E5F0] dark:border-white/10 bg-[#FAFAFC] dark:bg-[#17113F]/50 hover:border-violet-200 dark:hover:border-violet-500/30 transition-colors">
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 font-medium">
                  <span>Avg response time</span>
                  <Clock className="w-3.5 h-3.5 text-gray-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0F1020] dark:text-white font-heading mt-2">
                  18m
                </div>
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1">
                  vs 4.2 days seller average
                </div>
              </div>
            </div>

            {/* Active Dispute Requiring Attention Banner */}
            <div className="rounded-xl border-2 border-violet-200 dark:border-violet-500/30 bg-white dark:bg-[#17113F]/70 p-5 sm:p-6 shadow-card relative overflow-hidden transition-colors">
              {/* Subtle accent corner glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#7C3AED]/10 dark:from-[#7C3AED]/20 to-transparent pointer-events-none rounded-bl-full" />

              {/* Card Header Tag */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#E8E5F0] dark:border-white/10">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span>
                    Dispute requiring attention
                  </span>
                  <span className="text-xs font-mono text-gray-500 dark:text-gray-400">Case #PP-D-94812</span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span>Response deadline: 6 days remaining</span>
                </div>
              </div>

              {/* Claim Title and Big Value */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-5">
                {/* Left 7 Cols: Claim Details & Evidence Checklist */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase font-semibold tracking-wider text-gray-500 dark:text-gray-400">
                        Dispute Reason
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#0F1020] dark:text-white font-heading mt-0.5">
                        Item not received
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        Filed by Marcus Vance · Shopify Order #10842 · Oct 12, 2026
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs uppercase font-semibold tracking-wider text-gray-500 dark:text-gray-400">
                        Disputed Amount
                      </div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#0F1020] dark:text-white font-heading">
                        $428.00
                      </div>
                    </div>
                  </div>

                  {/* Evidence Checklist */}
                  <div className="bg-[#FAFAFC] dark:bg-white/5 rounded-xl p-4 border border-[#E8E5F0] dark:border-white/10 space-y-2.5">
                    <div className="text-xs font-bold text-[#17113F] dark:text-white uppercase tracking-wider flex items-center justify-between">
                      <span>Compiled Case Evidence</span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-semibold text-[11px] bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/20">
                        4/4 Verified
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                      <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200 bg-white dark:bg-[#121324] p-2 rounded-lg border border-[#E8E5F0]/80 dark:border-white/10">
                        <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                        <span className="font-medium">Tracking verified</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200 bg-white dark:bg-[#121324] p-2 rounded-lg border border-[#E8E5F0]/80 dark:border-white/10">
                        <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                        <span className="font-medium">Order matched</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200 bg-white dark:bg-[#121324] p-2 rounded-lg border border-[#E8E5F0]/80 dark:border-white/10">
                        <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                        <span className="font-medium">Delivery confirmed</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200 bg-white dark:bg-[#121324] p-2 rounded-lg border border-[#E8E5F0]/80 dark:border-white/10">
                        <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                        <span className="font-medium">Seller policy found</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right 5 Cols: AI Win Likelihood & Explanation */}
                <div className="lg:col-span-5 flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-gradient-to-b from-[#F3EEFF]/80 dark:from-white/5 to-[#FAFAFC] dark:to-white/5 border border-violet-100 dark:border-white/10">
                  <div className="space-y-3">
                    {/* Win Likelihood Meter */}
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="font-bold text-[#17113F] dark:text-white flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
                          Win likelihood
                        </span>
                        <span className="text-base font-extrabold text-[#6D28D9] dark:text-violet-400 font-heading">
                          87%
                        </span>
                      </div>
                      {/* Visual Progress Bar */}
                      <div className="w-full h-3 rounded-full bg-violet-100 dark:bg-white/10 overflow-hidden p-0.5 border border-violet-200 dark:border-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] transition-all duration-1000"
                          style={{ width: "87%" }}
                        />
                      </div>
                      <div className="flex justify-between text-[10px] text-gray-500 dark:text-gray-400 mt-1 font-mono">
                        <span>Low risk</span>
                        <span>High confidence</span>
                      </div>
                    </div>

                    {/* AI Explanation Box */}
                    <div className="rounded-lg bg-white/90 dark:bg-[#0F1020]/90 p-3 border border-violet-200/70 dark:border-white/10 text-xs leading-relaxed text-gray-700 dark:text-gray-300">
                      <span className="font-bold text-[#6D28D9] dark:text-violet-400 block mb-1">
                        AI Case Evaluation:
                      </span>
                      &ldquo;Delivery tracking confirms the package reached the buyer&apos;s address and the transaction matches the order record.&rdquo;
                    </div>
                  </div>

                  {/* Call to action buttons */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => setModalOpen(true)}
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white text-xs font-bold shadow-sm hover:opacity-95 hover:shadow-glow transition-all"
                    >
                      <span>Review response</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setClaimAccepted(!claimAccepted)}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-[#E8E5F0] dark:border-white/15 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 text-xs font-semibold hover:bg-gray-50 dark:hover:bg-white/10 transition-colors"
                    >
                      {claimAccepted ? "Claim Conceded" : "Accept claim"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Trust Guarantee Footnote */}
              <div className="mt-4 pt-3 border-t border-[#E8E5F0]/70 dark:border-white/10 flex flex-wrap items-center justify-between text-[11px] text-gray-500 dark:text-gray-400 gap-2">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3 h-3 text-[#7C3AED]" />
                  Human review gate enabled: No automated submission without your approval.
                </span>
                <span className="text-violet-700 dark:text-violet-400 font-medium">Click &ldquo;Review response&rdquo; to test live</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Interactive Review Modal */}
      <DisputeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
