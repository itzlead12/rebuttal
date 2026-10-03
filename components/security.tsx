"use client";

import React from "react";
import { ShieldCheck, Database, Eye, Lock, CheckCircle } from "lucide-react";
import { TRUST_PRINCIPLES } from "@/lib/constants";

export function Security() {
  const iconList = [
    <ShieldCheck key="shield" className="w-6 h-6 text-[#7C3AED] dark:text-violet-400" />,
    <Database key="db" className="w-6 h-6 text-[#7C3AED] dark:text-violet-400" />,
    <Eye key="eye" className="w-6 h-6 text-[#7C3AED] dark:text-violet-400" />,
    <Lock key="lock" className="w-6 h-6 text-[#7C3AED] dark:text-violet-400" />,
  ];

  return (
    <section id="security" className="py-24 sm:py-32 bg-[#FAFAFC] dark:bg-[#0A0B14] border-t border-[#E8E5F0] dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-bold uppercase tracking-wider text-[#6D28D9] dark:text-violet-400 mb-3">
            05 — Trust & Governance
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F1020] dark:text-white font-heading tracking-tight leading-tight">
            Built to keep sellers in control.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            When customer relationships and payment processing privileges are on the line, blind autonomy is a liability. Rebuttal operates on strict principles of transparency, human oversight, and verifiable auditability.
          </p>
        </div>

        {/* 4 Trust Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TRUST_PRINCIPLES.map((principle, idx) => (
            <div
              key={principle.title}
              className="rounded-2xl bg-white dark:bg-[#121324] p-7 sm:p-8 border border-[#E8E5F0] dark:border-white/10 shadow-subtle hover:shadow-card hover:border-violet-200 dark:hover:border-violet-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F3EEFF] dark:bg-white/5 border border-violet-100 dark:border-white/10 flex items-center justify-center shrink-0">
                  {iconList[idx]}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F1020] dark:text-white font-heading">
                    {principle.title}
                  </h3>
                  <h4 className="text-sm font-semibold text-[#6D28D9] dark:text-violet-400 mt-0.5 mb-2">
                    &ldquo;{principle.statement}&rdquo;
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Compliance Banner */}
        <div className="mt-12 rounded-2xl bg-white dark:bg-[#121324] border border-[#E8E5F0] dark:border-white/10 p-6 sm:p-8 shadow-subtle flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-[#0F1020] dark:text-white">
              Bank-Grade Encryption & Official API Integration
            </h4>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              OAuth 2.0 authenticated connections directly to PayPal REST Disputes API. Zero storage of customer credit cards or banking credentials.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-semibold text-gray-700 dark:text-gray-300">
              <Lock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>TLS 1.3 / AES-256</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-semibold text-gray-700 dark:text-gray-300">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>SOC2 Compliant Cloud</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-semibold text-gray-700 dark:text-gray-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>PayPal Partner Ready</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
