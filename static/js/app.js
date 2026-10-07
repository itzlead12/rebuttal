// Rebuttal - Consolidated Client Logic

document.addEventListener("DOMContentLoaded", function () {
  // ==========================================
  // 1. Theme Management
  // ==========================================
  const htmlEl = document.documentElement;
  const themeToggleBtns = document.querySelectorAll("[data-action='toggle-theme']");

  function getSavedTheme() {
    return localStorage.getItem("rebuttal-theme") || "dark";
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      htmlEl.classList.add("dark");
    } else {
      htmlEl.classList.remove("dark");
    }
    localStorage.setItem("rebuttal-theme", theme);
    updateThemeIcons(theme);
  }

  function updateThemeIcons(theme) {
    themeToggleBtns.forEach(function (btn) {
      const sunIcon = btn.querySelector(".icon-sun");
      const moonIcon = btn.querySelector(".icon-moon");
      if (sunIcon && moonIcon) {
        if (theme === "dark") {
          sunIcon.classList.remove("hidden");
          moonIcon.classList.add("hidden");
          btn.setAttribute("title", "Switch to light theme");
        } else {
          sunIcon.classList.add("hidden");
          moonIcon.classList.remove("hidden");
          btn.setAttribute("title", "Switch to dark theme");
        }
      }
    });
  }

  // Initial theme setup
  applyTheme(getSavedTheme());

  themeToggleBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const currentTheme = htmlEl.classList.contains("dark") ? "dark" : "light";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
    });
  });

  // ==========================================
  // 2. Navbar Scrolling & Mobile Menu
  // ==========================================
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 20) {
        navbar.classList.add(
          "bg-[#FAFAFC]/90",
          "dark:bg-[#0F1020]/90",
          "backdrop-blur-md",
          "border-b",
          "border-[#E8E5F0]",
          "dark:border-white/10",
          "py-3.5",
          "shadow-subtle"
        );
        navbar.classList.remove("bg-transparent", "py-5");
      } else {
        navbar.classList.remove(
          "bg-[#FAFAFC]/90",
          "dark:bg-[#0F1020]/90",
          "backdrop-blur-md",
          "border-b",
          "border-[#E8E5F0]",
          "dark:border-white/10",
          "py-3.5",
          "shadow-subtle"
        );
        navbar.classList.add("bg-transparent", "py-5");
      }
    });
  }

  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenuDrawer = document.getElementById("mobile-menu-drawer");
  const iconMenu = document.getElementById("icon-menu-hamburger");
  const iconClose = document.getElementById("icon-menu-close");

  if (mobileMenuToggle && mobileMenuDrawer) {
    mobileMenuToggle.addEventListener("click", function () {
      const isOpen = !mobileMenuDrawer.classList.contains("hidden");
      if (isOpen) {
        mobileMenuDrawer.classList.add("hidden");
        if (iconMenu) iconMenu.classList.remove("hidden");
        if (iconClose) iconClose.classList.add("hidden");
      } else {
        mobileMenuDrawer.classList.remove("hidden");
        if (iconMenu) iconMenu.classList.add("hidden");
        if (iconClose) iconClose.classList.remove("hidden");
      }
    });

    const mobileNavLinks = mobileMenuDrawer.querySelectorAll("a");
    mobileNavLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenuDrawer.classList.add("hidden");
        if (iconMenu) iconMenu.classList.remove("hidden");
        if (iconClose) iconClose.classList.add("hidden");
      });
    });
  }

  // ==========================================
  // 3. Dispute Modal & Accept Claim Toggle
  // ==========================================
  const modal = document.getElementById("dispute-modal");
  const modalBackdrop = document.getElementById("modal-backdrop");
  const openModalBtns = document.querySelectorAll("[data-action='open-modal']");
  const closeModalBtns = document.querySelectorAll("[data-action='close-modal']");
  const modalCheckbox = document.getElementById("modal-human-approval");
  const modalSubmitBtn = document.getElementById("modal-submit-btn");
  const modalReviewView = document.getElementById("modal-review-view");
  const modalSuccessView = document.getElementById("modal-success-view");
  const modalDoneBtn = document.getElementById("modal-done-btn");
  const modalCopyBtn = document.getElementById("modal-copy-btn");
  const modalDraftText = document.getElementById("modal-draft-textarea");
  const acceptClaimBtn = document.getElementById("btn-accept-claim");

  function openModal() {
    if (modal) {
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    }
  }

  function closeModal() {
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  }

  function resetModal() {
    if (modalCheckbox) modalCheckbox.checked = false;
    if (modalSubmitBtn) {
      modalSubmitBtn.disabled = true;
      modalSubmitBtn.className =
        "flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold text-gray-500 bg-gray-300 dark:bg-white/10 cursor-not-allowed transition-all shadow-sm";
      modalSubmitBtn.innerHTML = '<span>Submit Rebuttal to PayPal</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
    }
    if (modalReviewView) modalReviewView.classList.remove("hidden");
    if (modalSuccessView) modalSuccessView.classList.add("hidden");
  }

  openModalBtns.forEach(function (btn) {
    btn.addEventListener("click", openModal);
  });

  closeModalBtns.forEach(function (btn) {
    btn.addEventListener("click", closeModal);
  });

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", closeModal);
  }

  if (modalCheckbox && modalSubmitBtn) {
    modalCheckbox.addEventListener("change", function () {
      if (this.checked) {
        modalSubmitBtn.disabled = false;
        modalSubmitBtn.className =
          "flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] hover:opacity-95 hover:shadow-glow cursor-pointer transition-all shadow-sm";
      } else {
        modalSubmitBtn.disabled = true;
        modalSubmitBtn.className =
          "flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold text-gray-500 bg-gray-300 dark:bg-white/10 cursor-not-allowed transition-all shadow-sm";
      }
    });
  }

  if (modalSubmitBtn) {
    modalSubmitBtn.addEventListener("click", function () {
      if (modalCheckbox && !modalCheckbox.checked) return;
      modalSubmitBtn.disabled = true;
      modalSubmitBtn.innerHTML = "<span>Submitting to PayPal API...</span>";

      setTimeout(function () {
        if (modalReviewView) modalReviewView.classList.add("hidden");
        if (modalSuccessView) modalSuccessView.classList.remove("hidden");
      }, 1200);
    });
  }

  if (modalDoneBtn) {
    modalDoneBtn.addEventListener("click", function () {
      resetModal();
      closeModal();
    });
  }

  if (modalCopyBtn && modalDraftText) {
    modalCopyBtn.addEventListener("click", function () {
      navigator.clipboard.writeText(modalDraftText.value).then(function () {
        const originalContent = modalCopyBtn.innerHTML;
        modalCopyBtn.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5 text-[#16A34A]"><path d="M20 6 9 17l-5-5"/></svg> Copied!';
        setTimeout(function () {
          modalCopyBtn.innerHTML = originalContent;
        }, 2000);
      });
    });
  }

  if (acceptClaimBtn) {
    let accepted = false;
    acceptClaimBtn.addEventListener("click", function () {
      accepted = !accepted;
      acceptClaimBtn.textContent = accepted ? "Claim Conceded" : "Accept claim";
    });
  }

  // ==========================================
  // 4. How It Works - Step Selection
  // ==========================================
  const stepCards = document.querySelectorAll("[data-step-index]");
  stepCards.forEach(function (card) {
    card.addEventListener("click", function () {
      stepCards.forEach(function (c) {
        c.className =
          "cursor-pointer rounded-2xl p-6 border transition-all flex flex-col justify-between bg-[#FAFAFC] dark:bg-[#121324] border-[#E8E5F0] dark:border-white/10 hover:border-violet-300";
        const iconDiv = c.querySelector(".step-icon-container");
        if (iconDiv) {
          iconDiv.className =
            "step-icon-container w-10 h-10 rounded-xl flex items-center justify-center bg-[#17113F] dark:bg-white/10";
        }
      });

      card.className =
        "cursor-pointer rounded-2xl p-6 border transition-all flex flex-col justify-between bg-white dark:bg-[#17113F] border-[#7C3AED] shadow-card ring-2 ring-[#7C3AED]/20";
      const activeIconDiv = card.querySelector(".step-icon-container");
      if (activeIconDiv) {
        activeIconDiv.className =
          "step-icon-container w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] shadow-glow";
      }
    });
  });

  // ==========================================
  // 5. AI Analysis - Toggle & Copy Draft
  // ==========================================
  const aiToggleBtn1 = document.getElementById("ai-toggle-draft-btn-1");
  const aiToggleBtn2 = document.getElementById("ai-toggle-draft-btn-2");
  const aiDraftBox = document.getElementById("ai-draft-box");
  const aiCopyBtn = document.getElementById("ai-copy-draft-btn");
  const aiDraftPre = document.getElementById("ai-draft-content");

  let aiDraftOpen = false;
  function toggleAiDraft() {
    aiDraftOpen = !aiDraftOpen;
    if (aiDraftBox) {
      if (aiDraftOpen) {
        aiDraftBox.classList.remove("hidden");
      } else {
        aiDraftBox.classList.add("hidden");
      }
    }
    if (aiToggleBtn1) {
      aiToggleBtn1.querySelector("span").textContent = aiDraftOpen
        ? "Hide draft"
        : "Preview sample draft response →";
    }
    if (aiToggleBtn2) {
      aiToggleBtn2.textContent = aiDraftOpen ? "Close draft" : "Generate response →";
    }
  }

  if (aiToggleBtn1) aiToggleBtn1.addEventListener("click", toggleAiDraft);
  if (aiToggleBtn2) aiToggleBtn2.addEventListener("click", toggleAiDraft);

  if (aiCopyBtn && aiDraftPre) {
    aiCopyBtn.addEventListener("click", function () {
      navigator.clipboard.writeText(aiDraftPre.innerText).then(function () {
        const textSpan = aiCopyBtn.querySelector(".copy-text");
        const iconSpan = aiCopyBtn.querySelector(".copy-icon");
        if (textSpan) textSpan.textContent = "Copied";
        if (iconSpan) {
          iconSpan.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3 h-3 text-emerald-500"><path d="M20 6 9 17l-5-5"/></svg>';
        }
        setTimeout(function () {
          if (textSpan) textSpan.textContent = "Copy";
          if (iconSpan) {
            iconSpan.innerHTML =
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3 h-3"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>';
          }
        }, 2000);
      });
    });
  }

  // ==========================================
  // 6. Revenue Chart Interactive Bar Selection
  // ==========================================
  const chartBars = document.querySelectorAll("[data-chart-month-idx]");
  const ytdPeakDisplay = document.getElementById("ytd-peak-display");
  const chartData = [
    { month: "May", amount: 2400 },
    { month: "Jun", amount: 3950 },
    { month: "Jul", amount: 5600 },
    { month: "Aug", amount: 8200 },
    { month: "Sep", amount: 10450 },
    { month: "Oct", amount: 12840 },
  ];

  chartBars.forEach(function (barCol) {
    barCol.addEventListener("click", function () {
      const idx = parseInt(this.getAttribute("data-chart-month-idx"), 10);
      if (isNaN(idx)) return;

      if (ytdPeakDisplay) {
        ytdPeakDisplay.textContent = "$" + chartData[idx].amount.toLocaleString();
      }

      chartBars.forEach(function (c, cIdx) {
        const tooltip = c.querySelector(".bar-tooltip");
        const barFill = c.querySelector(".bar-fill");
        const label = c.querySelector(".bar-label");

        if (cIdx === idx) {
          if (tooltip) {
            tooltip.className =
              "bar-tooltip text-[10px] font-mono transition-opacity opacity-100 text-violet-300 font-bold";
          }
          if (barFill) {
            barFill.className =
              "bar-fill w-full rounded-t-md transition-all duration-300 bg-gradient-to-t from-[#4F46E5] to-[#7C3AED] shadow-glow";
          }
          if (label) {
            label.className = "bar-label text-xs font-mono text-white font-bold";
          }
        } else {
          if (tooltip) {
            tooltip.className =
              "bar-tooltip text-[10px] font-mono transition-opacity opacity-0 group-hover:opacity-100 text-gray-400";
          }
          if (barFill) {
            barFill.className =
              "bar-fill w-full rounded-t-md transition-all duration-300 bg-gradient-to-t from-violet-900/60 to-violet-600/60 group-hover:from-[#4F46E5]/80 group-hover:to-[#7C3AED]/80";
          }
          if (label) {
            label.className = "bar-label text-xs font-mono text-gray-400";
          }
        }
      });
    });
  });

  // ==========================================
  // 7. Developer Section - Tabs & Code Copy
  // ==========================================
  const devTabs = document.querySelectorAll("[data-dev-tab]");
  const devCodeBlock = document.getElementById("dev-code-block");
  const copyDevCodeBtn = document.getElementById("btn-copy-dev-code");
  const copyInstallBtn = document.getElementById("btn-copy-install");

  const codeSnippets = {
    webhook: `// Next.js / Node.js PayPal Webhook Handler
import { Rebuttal } from "@rebuttal/sdk";

const rebuttal = new Rebuttal({
  apiKey: process.env.REBUTTAL_API_KEY,
  paypalClientId: process.env.PAYPAL_CLIENT_ID,
  paypalSecret: process.env.PAYPAL_SECRET,
});

export async function POST(req: Request) {
  const event = await req.json();

  // Handle incoming dispute event from PayPal Resolution Center
  if (event.event_type === "CUSTOMER.DISPUTE.CREATED") {
    const caseFile = await rebuttal.disputes.receive({
      disputeId: event.resource.dispute_id,
      transactionId: event.resource.disputed_transactions[0].seller_transaction_id,
      amount: event.resource.dispute_amount.value,
      currency: event.resource.dispute_amount.currency_code,
      reason: event.resource.reason, // e.g. MERCHANDISE_OR_SERVICE_NOT_RECEIVED
    });

    // Automatically aggregate carrier tracking & store invoices
    await rebuttal.evidence.autoCompile(caseFile.id);

    console.log(\`Case \${caseFile.id} compiled. Win likelihood: \${caseFile.score}%\`);
  }

  return Response.json({ status: "acknowledged" });
}`,

    sdk: `// Programmatic Dispute Evaluation & Human Review Trigger
import { Rebuttal } from "@rebuttal/sdk";

const rebuttal = new Rebuttal({ apiKey: process.env.REBUTTAL_API_KEY });

// 1. Evaluate dispute using evidence-grounded AI
const evaluation = await rebuttal.disputes.evaluate("PP-D-94812", {
  carrier: "USPS",
  trackingNumber: "9400111899223190248",
  orderId: "SHOP-10842",
});

console.log(evaluation.winLikelihood); // 0.87 (87%)
console.log(evaluation.recommendation); // "FIGHT"
console.log(evaluation.policyCitation); // "PayPal Seller Protection 11.3"

// 2. Draft factual rebuttal letter
const draft = await rebuttal.disputes.generateDraft("PP-D-94812");

// 3. Request explicit human sign-off (Zero blind submission)
await rebuttal.approvals.notifyMerchant({
  disputeId: "PP-D-94812",
  draft: draft.text,
  channel: "slack_webhook", // or "email" / "dashboard"
});`,

    curl: `# Direct REST API Call
curl -X POST https://api.rebuttal.ai/v1/disputes/evaluate \\
  -H "Authorization: Bearer rbt_live_8f93e291a" \\
  -H "Content-Type: application/json" \\
  -d '{
    "paypal_dispute_id": "PP-D-94812",
    "claim_type": "ITEM_NOT_RECEIVED",
    "dispute_amount": 428.00,
    "currency": "USD",
    "evidence": {
      "carrier": "USPS_PRIORITY",
      "tracking_code": "9400111899223190248",
      "recipient_zip": "78701",
      "delivery_status": "DELIVERED_FRONT_DOOR"
    }
  }'`,

    json: `{
  "dispute_id": "PP-D-94812",
  "status": "EVALUATED",
  "win_likelihood": 0.87,
  "confidence_interval": [0.83, 0.91],
  "recommendation": "FIGHT",
  "applicable_policy": "PAYPAL_SELLER_PROTECTION_SEC_11_3",
  "factors_for": [
    "Carrier online tracking confirms physical delivery to recipient zip code",
    "Shipping address strictly matches PayPal transaction order #10842",
    "Fulfillment timestamp was within 24h of payment authorization"
  ],
  "factors_against": [
    "Buyer pre-dispute message on Oct 11 was unresolved"
  ],
  "human_approval_required": true,
  "submission_ready": false,
  "created_at": "2026-10-14T15:20:10Z"
}`,
  };

  let currentTab = "webhook";

  devTabs.forEach(function (tabBtn) {
    tabBtn.addEventListener("click", function () {
      const tabName = this.getAttribute("data-dev-tab");
      if (!tabName || !codeSnippets[tabName]) return;
      currentTab = tabName;

      devTabs.forEach(function (t) {
        t.className =
          "px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors flex items-center gap-1.5 text-gray-400 hover:text-white hover:bg-white/5";
      });

      this.className =
        "px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors flex items-center gap-1.5 bg-[#7C3AED] text-white shadow-sm";

      if (devCodeBlock) {
        devCodeBlock.textContent = codeSnippets[tabName];
      }
    });
  });

  if (copyDevCodeBtn) {
    copyDevCodeBtn.addEventListener("click", function () {
      navigator.clipboard.writeText(codeSnippets[currentTab]).then(function () {
        const originalHtml = copyDevCodeBtn.innerHTML;
        copyDevCodeBtn.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5 text-emerald-400"><path d="M20 6 9 17l-5-5"/></svg><span class="text-emerald-400">Copied!</span>';
        setTimeout(function () {
          copyDevCodeBtn.innerHTML = originalHtml;
        }, 2000);
      });
    });
  }

  if (copyInstallBtn) {
    copyInstallBtn.addEventListener("click", function () {
      navigator.clipboard.writeText("npm i @rebuttal/sdk").then(function () {
        copyInstallBtn.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5 text-emerald-400"><path d="M20 6 9 17l-5-5"/></svg>';
        setTimeout(function () {
          copyInstallBtn.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>';
        }, 2000);
      });
    });
  }
});
