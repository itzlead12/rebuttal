"use client";

import React from "react";
import { Truck, Clock, FileCheck2, ShieldCheck, Zap } from "lucide-react";
import { PREVENTION_CARDS } from "@/lib/constants";

export function Prevention() {
  const iconList = [
    <Truck key="truck" className="w-5 h-5 text-[#7C3AED] dark:text-violet-400" />,
    <Clock key="clock" className="w-5 h-5 text-[#7C3AED] dark:text-violet-400" />,
    <FileCheck2 key="file" className="w-5 h-5 text-[#7C3AED] dark:text-violet-400" />,
  ];

  return (
    <section className="py-24 sm:py-32 bg-white dark:bg-[#0F1020] border-t border-[#E8E5F0] dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-bold uppercase tracking-wider text-[#6D28D9] dark:text-violet-400 mb-3">
            04 — Prevention & Intelligence
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F1020] dark:text-white font-heading tracking-tight leading-tight">
            Stop repeating the same mistakes.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Winning disputes is essential, but preventing them entirely preserves your merchant standing and buyer trust. Rebuttal mines dispute patterns to recommend targeted operational changes.
          </p>
        </div>

        {/* 3 Prevention Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PREVENTION_CARDS.map((item, idx) => (
            <div
              key={item.title}
              className="rounded-2xl bg-[#FAFAFC] dark:bg-[#121324] p-7 sm:p-8 border border-[#E8E5F0] dark:border-white/10 hover:border-violet-300 dark:hover:border-violet-500/30 hover:bg-white dark:hover:bg-[#17113F]/50 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Card Icon & Impact Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-[#F3EEFF] dark:bg-white/5 border border-violet-100 dark:border-white/10 flex items-center justify-center">
                    {iconList[idx]}
                  </div>
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-500/20">
                    {item.impact}
                  </span>
                </div>

                {/* Prevention Title */}
                <h3 className="text-lg font-bold text-[#0F1020] dark:text-white font-heading mb-2">
                  {item.title}
                </h3>

                {/* Subtag Trigger */}
                <div className="inline-flex items-center gap-1.5 text-xs text-violet-800 dark:text-violet-300 bg-[#F3EEFF] dark:bg-white/5 px-2 py-0.5 rounded font-mono mb-3">
                  <Zap className="w-3 h-3 text-[#7C3AED] dark:text-violet-400" />
                  <span>{item.action}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Rule Indicator */}
              <div className="mt-6 pt-4 border-t border-[#E8E5F0]/70 dark:border-white/10 flex items-center justify-between text-xs">
                <span className="text-gray-500 dark:text-gray-400">Trigger: {item.trigger}</span>
                <span className="font-semibold text-[#7C3AED] dark:text-violet-400 flex items-center gap-1">
                  Active policy
                  <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
