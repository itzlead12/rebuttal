# Rebuttal — Win the disputes you should win.

> **AI-powered dispute copilot for PayPal sellers.**  
> Rebuttal gathers your evidence, evaluates your case, drafts the response, and helps you submit it — so you can spend less time fighting disputes and more time running your business.

---

## 🚀 Overview

Rebuttal is a serious fintech SaaS application engineered specifically for small-to-medium PayPal sellers facing chargebacks and dispute claims (*Item Not Received*, *Significantly Not As Described*, *Unauthorized Transaction*). 

Unlike generic AI chatbots, Rebuttal is a structured dispute intelligence engine built on **explainability**, **verifiable evidence aggregation**, and **strict human approval**.

### The 4-Step Resolution Workflow:
1. **Receive:** Webhook event arrives from PayPal Resolution Center.
2. **Gather:** Rebuttal aggregates carrier tracking (USPS/UPS/FedEx GPS scans), store invoices (Shopify/Woo), customer messages, and seller policies.
3. **Rebuttal:** AI evaluates win likelihood (e.g. 87%), lists factors for/against, and drafts an authoritative rebuttal citation based on PayPal Seller Protection guidelines (Section 11.3).
4. **Approve:** The merchant reviews, edits, and authorizes the response before anything is dispatched to the PayPal Disputes API.

---

## 🎨 Brand & Design System

- **Official Colors:**
  - **Primary Violet:** `#6D28D9`
  - **Electric Violet:** `#7C3AED`
  - **Indigo:** `#4338CA`
  - **Deep Navy:** `#17113F`
  - **Ink:** `#0F1020`
  - **Background:** `#FAFAFC`
  - **Soft Violet:** `#F3EEFF`
  - **Signature Gradient:** `#7C3AED` → `#4F46E5`
- **Typography:** Inter (body text & tables) + Plus Jakarta Sans / Google Sans (headings & metrics)
- **Aesthetic:** Clean, calm, high-trust fintech SaaS (reminiscent of Stripe + Linear) with generous whitespace, subtle 1px borders, and zero gaudy neon templates.

---

## 🛠 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3 (Dark & Light Theme Mode with ThemeProvider)
- **Icons:** Lucide React
- **Developer Section:** TypeScript SDK, PayPal Webhook Handlers, cURL REST endpoints & JSON output
- **Animations:** Framer Motion & CSS Micro-interactions
- **Hosting Target:** Render Web Service

---

## 💻 Local Development

### 1. Prerequisites
- Node.js 18.x or 20.x
- npm 9.x or higher

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### 4. Build for production
```bash
npm run build
npm start
```

---

## 🌐 Deploying to Render

This project is pre-configured for seamless zero-downtime deployment to [Render](https://render.com).

### Option A: Automatic Blueprint Deployment (Recommended)
1. Push this repository to GitHub or GitLab.
2. Log into [Render Dashboard](https://dashboard.render.com).
3. Click **New +** → **Blueprint**.
4. Connect your repository. Render will automatically read [`render.yaml`](./render.yaml).
5. Click **Apply**. Render will automatically run:
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
6. Your site will be live at `https://rebuttal.onrender.com` (or your assigned subdomain)!

### Option B: Manual Web Service Setup
If creating manually in the Render UI:
1. Click **New +** → **Web Service**.
2. Select your repository.
3. Configure the settings:
   - **Name:** `rebuttal`
   - **Environment:** `Node`
   - **Region:** `Oregon (US West)` or your preferred region
   - **Branch:** `main`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Plan:** `Free`
4. Click **Create Web Service**.

---

## 📂 Project Architecture

```
rebuttal/
├── app/
│   ├── globals.css         # Custom tokens, gradients, and scrollbar styling
│   ├── icon.svg            # Dynamic SVG favicon
│   ├── layout.tsx          # Root layout with SEO and Google Fonts
│   └── page.tsx            # Main landing page assembling all sections
├── components/
│   ├── ai-analysis.tsx     # Explainable AI section with likelihood calculation
│   ├── dashboard-preview.tsx # Interactive SaaS product dashboard mockup
│   ├── developer-section.tsx # Developer Platform, SDK, and Webhook code playground
│   ├── dispute-modal.tsx   # Interactive human review & approval modal
│   ├── final-cta.tsx       # Dark navy closing conversion section
│   ├── footer.tsx          # Complete multi-column fintech footer
│   ├── hero.tsx            # Hero section with headline and trust badges
│   ├── how-it-works.tsx    # Connected visual timeline 4-step workflow
│   ├── logo.tsx            # Official Rebuttal brand logo (image + SVG mark)
│   ├── navbar.tsx          # Responsive sticky navigation header with theme toggle
│   ├── prevention.tsx      # Proactive dispute pattern prevention cards
│   ├── problem.tsx         # The 3 cost drivers of scattered evidence
│   ├── revenue-section.tsx # Dark navy revenue recovery analytics & ledger
│   ├── security.tsx        # Human approval, audit trail & compliance principles
│   └── theme-provider.tsx  # Dynamic Dark & Light theme state manager
├── lib/
│   └── constants.ts        # Mock datasets, metrics, and case file constants
├── public/
│   ├── favicon.svg         # Crisp vector favicon
│   ├── logo.png            # Official uploaded Rebuttal brand logo
│   └── rebuttal-logo.png   # Full brand asset
├── next.config.ts          # Next.js configuration
├── package.json            # Scripts & dependencies
├── postcss.config.js       # PostCSS configuration
├── render.yaml             # Render Blueprint specification
├── tailwind.config.ts      # Rebuttal brand color palette & theme extensions
└── tsconfig.json           # Strict TypeScript configuration
```

---

## 🛡️ License & Copyright

© 2026 Rebuttal. All rights reserved.
