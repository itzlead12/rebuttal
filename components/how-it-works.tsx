"use client";

import React, { useState } from "react";
import {
  Inbox,
  FolderSearch,
  Sparkles,
  CheckCircle2,
  Lock,
  ArrowRight,
} from "lucide-react";
import { WORKFLOW_STEPS } from "@/lib/constants";

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [
    <Inbox key="0" className="w-5 h-5 text-white" />,
    <FolderSearch key="1" className="w-5 h-5 text-white" />,
    <Sparkles key="2" className="w-5 h-5 text-white" />,
    <CheckCircle2 key="3" className="w-5 h-5 text-white" />,
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-white dark:bg-[#0F1020] border-t border-[#E8E5F0] dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#6D28D9] dark:text-violet-400 mb-2">
            How It Works
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F1020] dark:text-white font-heading tracking-tight">
            From dispute to decision in minutes.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            A simple 4-step workflow that keeps you in control from start to finish.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WORKFLOW_STEPS.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-2xl p-6 border transition-all flex flex-col justify-between ${
                  isSelected
                    ? "bg-white dark:bg-[#17113F] border-[#7C3AED] shadow-card ring-2 ring-[#7C3AED]/20"
                    : "bg-[#FAFAFC] dark:bg-[#121324] border-[#E8E5F0] dark:border-white/10 hover:border-violet-300"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isSelected
                          ? "bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] shadow-glow"
                          : "bg-[#17113F] dark:bg-white/10"
                      }`}
                    >
                      {stepIcons[idx]}
                    </div>
                    <span className="text-xs font-mono font-bold text-gray-400 dark:text-gray-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="text-xs font-bold uppercase tracking-wider text-[#7C3AED] dark:text-violet-400 mb-1">
                    {step.name}
                  </div>
                  <h3 className="text-base font-bold text-[#0F1020] dark:text-white font-heading mb-2 leading-snug">
                    {step.tagline}
                  </h3>

                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E8E5F0]/70 dark:border-white/10 flex items-center justify-between text-xs">
                  {idx === 3 ? (
                    <span className="inline-flex items-center gap-1 font-bold text-violet-700 dark:text-violet-300 bg-[#F3EEFF] dark:bg-white/10 px-2 py-0.5 rounded">
                      <Lock className="w-3 h-3" />
                      Human Approval
                    </span>
                  ) : (
                    <span className="text-gray-400 dark:text-gray-500">Auto</span>
                  )}
                  <span className="text-gray-400 text-[11px]">Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small Human Approval Banner */}
        <div className="mt-8 rounded-xl bg-gradient-to-r from-[#F3EEFF] dark:from-white/5 to-[#FAFAFC] dark:to-white/5 border border-violet-100 dark:border-white/10 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Lock className="w-5 h-5 text-[#7C3AED] shrink-0" />
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
              <strong className="text-[#0F1020] dark:text-white">Human review required:</strong> We prepare the evidence, but nothing is submitted until you click approve.
            </p>
          </div>
          <a
            href="#ai-section"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7C3AED] dark:text-violet-400 shrink-0"
          >
            <span>See AI evaluation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
