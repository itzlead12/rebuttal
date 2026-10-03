"use client";

import React from "react";
import { Clock, Database, AlertOctagon, ArrowRight } from "lucide-react";
import { PROBLEM_CARDS } from "@/lib/constants";

export function Problem() {
  const iconMap = [
    <Clock key="clock" className="w-5 h-5 text-[#7C3AED]" />,
    <Database key="data" className="w-5 h-5 text-[#7C3AED]" />,
    <AlertOctagon key="alert" className="w-5 h-5 text-[#7C3AED]" />,
  ];

  return (
    <section id="why-rebuttal" className="py-20 sm:py-24 bg-[#FAFAFC] dark:bg-[#0A0B14] border-t border-[#E8E5F0] dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#6D28D9] dark:text-violet-400 mb-2">
            The Problem
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F1020] dark:text-white font-heading tracking-tight">
            Disputes cost money when evidence is scattered.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            PayPal gives you limited time to respond. Most sellers lose winnable cases simply because pulling receipts and tracking takes too long.
          </p>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROBLEM_CARDS.map((card, idx) => (
            <div
              key={card.title}
              className="rounded-2xl bg-white dark:bg-[#121324] p-6 sm:p-7 border border-[#E8E5F0] dark:border-white/10 shadow-subtle hover:border-violet-300 dark:hover:border-violet-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#F3EEFF] dark:bg-white/5 border border-violet-100 dark:border-white/10 flex items-center justify-center">
                    {iconMap[idx]}
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-400 dark:text-gray-500">
                    {card.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0F1020] dark:text-white font-heading mb-1">
                  {card.title}
                </h3>
                <h4 className="text-xs font-semibold text-[#7C3AED] dark:text-violet-400 mb-2.5">
                  {card.subtitle}
                </h4>

                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-3.5 border-t border-[#E8E5F0]/70 dark:border-white/10 flex items-center justify-between text-xs">
                <span className="text-gray-500 dark:text-gray-400">{card.badge}</span>
                <span className="text-xs font-semibold text-[#7C3AED] dark:text-violet-400 flex items-center gap-1">
                  Fixed by Rebuttal
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
