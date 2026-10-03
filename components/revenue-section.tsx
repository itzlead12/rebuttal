"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  DollarSign,
  CheckCircle2,
  XCircle,
  Clock,
  ArrowUpRight,
  Filter,
  BarChart3,
  Shield,
} from "lucide-react";
import { REVENUE_METRICS } from "@/lib/constants";

export function RevenueSection() {
  const [selectedMonth, setSelectedMonth] = useState(5); // Oct by default

  const recentCases = [
    {
      id: "PP-D-94812",
      customer: "Marcus Vance",
      reason: "Item Not Received",
      amount: "$428.00",
      status: "PENDING",
      date: "Oct 14, 2026",
    },
    {
      id: "PP-D-93201",
      customer: "Elena Rostova",
      reason: "Unauthorized Transaction",
      amount: "$892.50",
      status: "WON",
      date: "Oct 10, 2026",
    },
    {
      id: "PP-D-92188",
      customer: "David Kim",
      reason: "Significantly Not As Described",
      amount: "$310.00",
      status: "WON",
      date: "Oct 04, 2026",
    },
    {
      id: "PP-D-91043",
      customer: "Sarah Jenkins",
      reason: "Item Not Received",
      amount: "$215.00",
      status: "LOST",
      date: "Sep 28, 2026",
    },
    {
      id: "PP-D-90412",
      customer: "Liam O'Connor",
      reason: "Duplicate Charge",
      amount: "$640.00",
      status: "WON",
      date: "Sep 22, 2026",
    },
  ];

  const maxChartAmount = 14000;

  return (
    <section id="revenue" className="py-24 sm:py-32 bg-[#0F1020] text-white relative overflow-hidden bg-grid-dark">
      {/* Dark violet ambient glow behind the chart */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#7C3AED]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-medium text-violet-300 mb-4">
            <DollarSign className="w-3.5 h-3.5 text-[#7C3AED]" />
            <span>FINANCIAL INTELLIGENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            Turn recovered disputes into visible revenue.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
            Every won dispute is profit saved from being written off. Rebuttal tracks every dollar recovered, measures win velocity across dispute types, and builds a defensible ledger of store health.
          </p>
        </div>

        {/* 4 Stat Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          
          {/* Main Stat: Recovered */}
          <div className="p-6 rounded-2xl bg-[#17113F]/90 border border-white/10 shadow-card">
            <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
              <span>Total Recovered</span>
              <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                <TrendingUp className="w-3 h-3" />
                {REVENUE_METRICS.quarterGrowth}
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-2">
              {REVENUE_METRICS.totalRecovered}
            </div>
            <div className="text-xs text-gray-400 mt-2 font-mono">
              Saved from chargeback forfeitures
            </div>
          </div>

          {/* Won Status */}
          <div className="p-6 rounded-2xl bg-[#17113F]/90 border border-white/10 shadow-card">
            <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                Won Cases
              </span>
              <span className="text-xs font-mono text-gray-400">87% Rate</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-2">
              {REVENUE_METRICS.wonCount}
            </div>
            <div className="text-xs text-emerald-400/90 mt-2 font-mono">
              $12,840 retained revenue
            </div>
          </div>

          {/* Lost Status */}
          <div className="p-6 rounded-2xl bg-[#17113F]/90 border border-white/10 shadow-card">
            <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
              <span className="flex items-center gap-1.5 text-red-400">
                <XCircle className="w-4 h-4" />
                Lost Cases
              </span>
              <span className="text-xs font-mono text-gray-400">13% Rate</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-2">
              {REVENUE_METRICS.lostCount}
            </div>
            <div className="text-xs text-gray-400 mt-2 font-mono">
              Uncontested / defect claims
            </div>
          </div>

          {/* Pending Status */}
          <div className="p-6 rounded-2xl bg-[#17113F]/90 border border-white/10 shadow-card">
            <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
              <span className="flex items-center gap-1.5 text-amber-400">
                <Clock className="w-4 h-4" />
                Pending
              </span>
              <span className="text-xs font-mono text-amber-400">Active</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-2">
              {REVENUE_METRICS.pendingCount}
            </div>
            <div className="text-xs text-amber-400/90 mt-2 font-mono">
              {REVENUE_METRICS.pendingAmount} currently in review
            </div>
          </div>

        </div>

        {/* Financial Chart & Resolution Stream */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Monthly Revenue Recovery Chart (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#17113F]/80 border border-white/10 p-6 sm:p-7 shadow-card">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-violet-300">
                  RECOVERY RUN-RATE
                </span>
                <h3 className="text-lg font-bold text-white font-heading mt-0.5">
                  Monthly Recovered Dispute Capital
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-gray-400">Selected YTD Peak:</span>
                <div className="text-lg font-bold text-emerald-400 font-mono">
                  ${REVENUE_METRICS.chartData[selectedMonth].amount.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Custom Interactive SVG/CSS Bar + Line Chart */}
            <div className="pt-6 pb-2">
              <div className="h-56 flex items-end justify-between gap-3 sm:gap-6 px-2">
                {REVENUE_METRICS.chartData.map((d, idx) => {
                  const heightPercent = Math.round((d.amount / maxChartAmount) * 100);
                  const isHovered = selectedMonth === idx;
                  return (
                    <div
                      key={d.month}
                      onClick={() => setSelectedMonth(idx)}
                      className="flex-1 flex flex-col items-center gap-2 group cursor-pointer"
                    >
                      {/* Floating Tooltip Amount on Hover */}
                      <span
                        className={`text-[10px] font-mono transition-opacity ${
                          isHovered ? "opacity-100 text-violet-300 font-bold" : "opacity-0 group-hover:opacity-100 text-gray-400"
                        }`}
                      >
                        ${(d.amount / 1000).toFixed(1)}k
                      </span>

                      {/* Bar with gradient */}
                      <div className="w-full bg-white/5 rounded-t-lg h-44 flex items-end p-1">
                        <div
                          className={`w-full rounded-t-md transition-all duration-300 ${
                            isHovered
                              ? "bg-gradient-to-t from-[#4F46E5] to-[#7C3AED] shadow-glow"
                              : "bg-gradient-to-t from-violet-900/60 to-violet-600/60 group-hover:from-[#4F46E5]/80 group-hover:to-[#7C3AED]/80"
                          }`}
                          style={{ height: `${heightPercent}%` }}
                        />
                      </div>

                      {/* Month Label */}
                      <span
                        className={`text-xs font-mono ${
                          isHovered ? "text-white font-bold" : "text-gray-400"
                        }`}
                      >
                        {d.month}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Chart Legend */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-gray-400 font-mono">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-gradient-to-r from-[#7C3AED] to-[#4F46E5]" />
                    <span>Dispute Capital Retained ($)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-emerald-400" />
                    <span>Won Rulings</span>
                  </div>
                </div>
                <span>PayPal Disputes API Sync</span>
              </div>
            </div>
          </div>

          {/* Right: Live Dispute Resolution Ledger (5 Cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#17113F]/80 border border-white/10 p-6 sm:p-7 shadow-card">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="text-base font-bold text-white font-heading">
                Recent Case Outcomes
              </h3>
              <span className="text-xs font-mono text-gray-400">Live stream</span>
            </div>

            <div className="mt-4 space-y-3">
              {recentCases.map((c) => (
                <div
                  key={c.id}
                  className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors flex items-center justify-between text-xs"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-gray-400 text-[11px]">{c.id}</span>
                      <span className="font-semibold text-white">{c.customer}</span>
                    </div>
                    <div className="text-[11px] text-gray-400 mt-0.5">
                      {c.reason} · {c.date}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-bold text-white font-mono">{c.amount}</div>
                    <span
                      className={`inline-block mt-0.5 px-2 py-0.5 rounded text-[10px] font-bold ${
                        c.status === "WON"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : c.status === "PENDING"
                          ? "bg-amber-500/20 text-amber-300"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {c.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-center">
              <span className="text-xs text-gray-400 font-mono">
                Average payout recovery turnaround: 72 hours
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
