import React from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { HowItWorks } from "@/components/how-it-works";
import { AiAnalysis } from "@/components/ai-analysis";
import { RevenueSection } from "@/components/revenue-section";
import { DeveloperSection } from "@/components/developer-section";
import { Prevention } from "@/components/prevention";
import { Security } from "@/components/security";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] dark:bg-[#0A0B14] text-[#0F1020] dark:text-[#F8FAFC] overflow-x-hidden selection:bg-[#F3EEFF] dark:selection:bg-violet-950 selection:text-[#6D28D9] dark:selection:text-violet-300 transition-colors">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section with Dashboard Preview */}
        <Hero />

        {/* 01: The Problem */}
        <Problem />

        {/* 02: How Rebuttal Works */}
        <HowItWorks />

        {/* 03: Explainable AI Section */}
        <AiAnalysis />

        {/* 04: Dark Revenue & Financial Analytics */}
        <RevenueSection />

        {/* 05: Developer API & PayPal Webhooks Platform */}
        <DeveloperSection />

        {/* 06: Proactive Prevention Rules */}
        <Prevention />

        {/* 07: Security, Trust & Human Approval */}
        <Security />

        {/* 08: Final Dark CTA */}
        <FinalCta />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
