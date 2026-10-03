"use client";

import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { Logo } from "@/components/logo";

export function FinalCta() {
  return (
    <section className="py-20 sm:py-28 bg-[#17113F] text-white relative overflow-hidden bg-grid-dark">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#7C3AED]/20 to-[#4F46E5]/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        {/* Logo Icon */}
        <div className="flex justify-center">
          <Logo variant="icon" size="lg" />
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
          Don&apos;t lose money on disputes you should win.
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg text-gray-300 max-w-lg mx-auto">
          Let Rebuttal handle the evidence. You make the final decision. Connect in 3 minutes.
        </p>

        {/* Action Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#get-started"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white text-sm font-bold shadow-elevated hover:opacity-95 transition-all"
          >
            <span>Get started</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#product"
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-colors"
          >
            <span>See live dashboard</span>
          </a>
        </div>

        {/* Simple bullet points */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-5 text-xs text-gray-400">
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400" />
            No credit card needed
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400" />
            Human approval gate
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400" />
            3-minute PayPal setup
          </span>
        </div>

      </div>
    </section>
  );
}
