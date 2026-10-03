"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="bg-[#0F1020] text-gray-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info & Tagline (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="full" size="md" inverted />
            <p className="text-sm text-gray-400 max-w-sm font-heading font-medium text-white/90">
              Win the disputes you should win.
            </p>
            <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
              AI-powered dispute copilot for PayPal sellers. Gathers evidence, evaluates cases, drafts factual responses, and requires human approval before submission.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-gray-500 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
              <span>All Systems Operational · PayPal API Active</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Product
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#product" className="hover:text-white transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How it works
                </a>
              </li>
              <li>
                <a href="#ai-section" className="hover:text-white transition-colors">
                  Explainable AI
                </a>
              </li>
              <li>
                <a href="#revenue" className="hover:text-white transition-colors">
                  Revenue Recovery
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-white transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* How It Works Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              How it works
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  01 Receive Event
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  02 Gather Evidence
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  03 AI Rebuttal
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  04 Human Approval
                </a>
              </li>
            </ul>
          </div>

          {/* Documentation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Documentation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#docs" className="hover:text-white transition-colors">
                  API Connectors
                </a>
              </li>
              <li>
                <a href="#docs" className="hover:text-white transition-colors">
                  PayPal Webhooks
                </a>
              </li>
              <li>
                <a href="#docs" className="hover:text-white transition-colors">
                  Seller Protection
                </a>
              </li>
              <li>
                <a href="#docs" className="hover:text-white transition-colors">
                  Evidence Standards
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © 2026 Rebuttal. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-400">Terms of Service</a>
            <a href="#security" className="hover:text-gray-400">Trust Center</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
