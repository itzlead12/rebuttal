"use client";

import React, { useState } from "react";
import {
  X,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Truck,
  Lock,
  ArrowRight,
  Sparkles,
  AlertCircle,
  Copy,
  Check,
} from "lucide-react";
import { MOCK_DISPUTE } from "@/lib/constants";
import { RebuttalIcon } from "@/components/logo";

interface DisputeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DisputeModal({ isOpen, onClose }: DisputeModalProps) {
  const [humanApproved, setHumanApproved] = useState(false);
  const [responseDraft, setResponseDraft] = useState(MOCK_DISPUTE.draftResponse);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(responseDraft);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = () => {
    if (!humanApproved) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setHumanApproved(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0F1020]/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#121324] rounded-2xl shadow-elevated border border-[#E8E5F0] dark:border-white/10 overflow-hidden my-8 z-10 transition-colors">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E5F0] dark:border-white/10 bg-[#FAFAFC] dark:bg-[#0F1020]">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center shrink-0">
              <RebuttalIcon size={36} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300">
                  {MOCK_DISPUTE.id}
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20">
                  {MOCK_DISPUTE.deadline}
                </span>
              </div>
              <h3 className="text-base font-bold text-[#0F1020] dark:text-white font-heading">
                Review & Human Approval: {MOCK_DISPUTE.type}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          /* Submission Confirmation View */
          <div className="p-8 sm:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-[#0F1020] dark:text-white font-heading mb-2">
              Rebuttal Successfully Dispatched to PayPal
            </h4>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto text-sm mb-6 leading-relaxed">
              Your factual defense, verified carrier GPS tracking, and Shopify order files have been transmitted to the PayPal Resolution Center API.
            </p>
            <div className="bg-[#FAFAFC] dark:bg-white/5 border border-[#E8E5F0] dark:border-white/10 rounded-xl p-4 max-w-md mx-auto mb-8 text-left text-xs font-mono space-y-1.5 text-gray-700 dark:text-gray-300">
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">PayPal Case ID:</span>
                <span className="font-semibold text-gray-900 dark:text-white">{MOCK_DISPUTE.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">API Transmit Token:</span>
                <span className="text-violet-700 dark:text-violet-400 font-semibold">PP-DISP-TX-9941829B</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Authorization:</span>
                <span>Human Approved by Alex Mercer</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Dispute Amount:</span>
                <span className="font-bold text-gray-900 dark:text-white">{MOCK_DISPUTE.amount} USD</span>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white text-sm font-semibold shadow-sm hover:opacity-95"
            >
              Done & Return to Dashboard
            </button>
          </div>
        ) : (
          /* Main Review Content */
          <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
            {/* Top Overview Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-xl border border-[#E8E5F0] dark:border-white/10 bg-[#FAFAFC] dark:bg-white/5">
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Claim Amount</span>
                <div className="text-xl font-bold text-[#0F1020] dark:text-white font-heading mt-0.5">
                  {MOCK_DISPUTE.amount}
                </div>
                <span className="text-[11px] text-gray-500 dark:text-gray-400">Buyer: {MOCK_DISPUTE.buyer}</span>
              </div>

              <div className="p-3.5 rounded-xl border border-violet-100 dark:border-violet-500/20 bg-[#F3EEFF]/60 dark:bg-violet-500/10">
                <span className="text-xs text-violet-800 dark:text-violet-300 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" /> Win Likelihood
                </span>
                <div className="text-xl font-bold text-[#6D28D9] dark:text-violet-400 font-heading mt-0.5">
                  {MOCK_DISPUTE.winLikelihood}%
                </div>
                <span className="text-[11px] text-violet-700 dark:text-violet-300 font-medium">Recommendation: Fight</span>
              </div>

              <div className="p-3.5 rounded-xl border border-[#E8E5F0] dark:border-white/10 bg-[#FAFAFC] dark:bg-white/5">
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Human Control</span>
                <div className="text-sm font-semibold text-gray-900 dark:text-white mt-1 flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-[#7C3AED]" /> Approval Mandatory
                </div>
                <span className="text-[11px] text-gray-500 dark:text-gray-400">Zero auto-submissions</span>
              </div>
            </div>

            {/* Gathered Evidence Panel */}
            <div className="border border-[#E8E5F0] dark:border-white/10 rounded-xl p-4 bg-white dark:bg-[#121324]">
              <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#7C3AED]" /> Gathered Evidence (4 items verified)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {MOCK_DISPUTE.factorsFor.map((factor, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2 rounded-lg bg-[#FAFAFC] dark:bg-white/5 border border-[#E8E5F0] dark:border-white/10"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 leading-snug">{factor.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Generated Rebuttal Letter (Editable) */}
            <div className="border border-[#E8E5F0] dark:border-white/10 rounded-xl p-4 bg-white dark:bg-[#121324]">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#7C3AED]" />
                  <span className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Draft Rebuttal Response (Factual & Policy-Grounded)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1 text-xs text-[#7C3AED] dark:text-violet-400 hover:text-[#6D28D9] font-medium"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#16A34A]" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy letter
                    </>
                  )}
                </button>
              </div>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-2">
                You can freely edit or refine any paragraph below before giving final authorization.
              </p>
              <textarea
                value={responseDraft}
                onChange={(e) => setResponseDraft(e.target.value)}
                rows={9}
                className="w-full text-xs font-mono leading-relaxed p-3.5 rounded-lg border border-[#E8E5F0] dark:border-white/10 bg-[#FAFAFC] dark:bg-[#0A0B14] text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 focus:border-[#7C3AED]"
              />
            </div>

            {/* Human In The Loop Approval Checkbox */}
            <div className="p-4 rounded-xl border-2 border-violet-200 dark:border-violet-500/30 bg-[#F3EEFF]/40 dark:bg-violet-950/20">
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={humanApproved}
                  onChange={(e) => setHumanApproved(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-[#7C3AED] focus:ring-[#7C3AED]"
                />
                <div className="text-xs">
                  <span className="font-bold text-[#17113F] dark:text-white block">
                    Human Authorization Required
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 leading-relaxed block mt-0.5">
                    I confirm that I have reviewed the case evidence and authorize Rebuttal to formally dispatch this response to the PayPal Disputes API under PayPal Seller Protection Section 11.3.
                  </span>
                </div>
              </label>
            </div>

            {/* Footer Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-500" />
                <span>Win likelihood is an objective estimate, not a guarantee.</span>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-[#E8E5F0] dark:border-white/15 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/10"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={!humanApproved || isSubmitting}
                  onClick={handleSubmit}
                  className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold text-white transition-all shadow-sm ${
                    humanApproved && !isSubmitting
                      ? "bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] hover:opacity-95 hover:shadow-glow cursor-pointer"
                      : "bg-gray-300 dark:bg-white/10 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? (
                    <span>Submitting to PayPal API...</span>
                  ) : (
                    <>
                      <span>Submit Rebuttal to PayPal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
