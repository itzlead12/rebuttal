"use client";

import React from "react";
import { ArrowRight, Play, Lock } from "lucide-react";
import { DashboardPreview } from "@/components/dashboard-preview";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-grid-subtle transition-colors">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-[#F3EEFF] dark:from-[#7C3AED]/15 via-transparent to-transparent pointer-events-none -z-10 blur-3xl opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Top Content */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EEFF] dark:bg-white/5 border border-[#E8E5F0] dark:border-white/10 text-xs font-semibold text-[#6D28D9] dark:text-violet-300 shadow-subtle">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse"></span>
            <span>AI Dispute Copilot for PayPal Sellers</span>
          </div>

          {/* Huge Headline */}
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0F1020] dark:text-white font-heading tracking-tight leading-[1.1]">
            Win the disputes <br />
            <span className="gradient-text">you should win.</span>
          </h1>

          {/* Subheadline (Simple & Natural) */}
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto leading-relaxed">
            Rebuttal gathers your tracking, scores your case, and writes the defense. You review it and submit in one click.
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#product"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white text-sm font-semibold shadow-card hover:opacity-95 transition-all"
            >
              <span>Protect your revenue</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-[#E8E5F0] dark:border-white/15 bg-white dark:bg-white/5 text-[#0F1020] dark:text-white text-sm font-semibold hover:bg-gray-50 dark:hover:bg-white/10 transition-colors"
            >
              <Play className="w-3.5 h-3.5 text-[#7C3AED] fill-[#7C3AED]/20" />
              <span>How it works</span>
            </a>
          </div>

          {/* Trust Statement */}
          <div className="pt-1 flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <Lock className="w-3.5 h-3.5 text-[#7C3AED]" />
            <span>Human approval required. Nothing is sent without your review.</span>
          </div>
        </div>

        {/* Dashboard Preview Section */}
        <div className="mt-12 sm:mt-16">
          <DashboardPreview />
        </div>

      </div>
    </section>
  );
}
