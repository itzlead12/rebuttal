"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X, ShieldCheck, Sun, Moon } from "lucide-react";
import { Logo } from "@/components/logo";
import { NAV_ITEMS } from "@/lib/constants";
import { useTheme } from "@/components/theme-provider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAFAFC]/90 dark:bg-[#0F1020]/90 backdrop-blur-md border-b border-[#E8E5F0] dark:border-white/10 py-3.5 shadow-subtle"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <Logo variant="full" size="md" inverted={theme === "dark"} />
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-[#F3EEFF] dark:bg-white/5 text-[#6D28D9] dark:text-violet-300 border border-[#E8E5F0] dark:border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse"></span>
              PayPal Copilot
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#17113F]/75 dark:text-gray-300 hover:text-[#7C3AED] dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3.5">
            {/* Dark / Light Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-[#E8E5F0] dark:border-white/10 bg-white/70 dark:bg-white/5 text-[#17113F] dark:text-gray-200 hover:bg-[#F3EEFF] dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle dark/light theme"
              title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-[#7C3AED]" />
              )}
            </button>

            <a
              href="#login"
              className="text-sm font-medium text-[#17113F]/80 dark:text-gray-300 hover:text-[#0F1020] dark:hover:text-white transition-colors px-3 py-2"
            >
              Sign in
            </a>
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] hover:opacity-95 transition-all px-4 py-2.5 rounded-xl shadow-sm hover:shadow-glow"
            >
              <span>Get started</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu toggle & theme */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-[#E8E5F0] dark:border-white/10 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-[#7C3AED]" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#17113F] dark:text-white hover:bg-[#F3EEFF] dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-4 pb-6 px-4 bg-white/95 dark:bg-[#0F1020]/95 backdrop-blur-xl rounded-2xl border border-[#E8E5F0] dark:border-white/10 shadow-elevated">
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-[#17113F] dark:text-gray-200 hover:text-[#7C3AED] hover:bg-[#F3EEFF] dark:hover:bg-white/5 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t border-[#E8E5F0] dark:border-white/10 my-2 pt-3 flex flex-col gap-2">
                <a
                  href="#login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 text-sm font-medium text-[#17113F] dark:text-gray-200 border border-[#E8E5F0] dark:border-white/10 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                >
                  Sign in
                </a>
                <a
                  href="#get-started"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] rounded-xl shadow-sm"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
