# Rebuttal — Project Documentation

PayPal AI Hackathon · Solo entry · Written Oct 3, 2026

Tagline: Win the disputes you should win.

---

## 1. What Rebuttal Is

Rebuttal is an AI dispute copilot for small PayPal sellers. When a buyer opens a dispute, Rebuttal receives the event, gathers the seller's evidence (order, shipping and tracking, messages), scores whether the case is worth fighting, drafts the evidence response, lets the seller review and approve it, and submits it through the PayPal Disputes API. A dashboard tracks disputes won and money recovered.

**One-sentence pitch:** Small sellers lose disputes they could have won because they respond late or with weak evidence; Rebuttal fixes that in a few clicks.

---

## 2. Problem and Audience

- **Who:** Solo sellers and small online shops that sell through PayPal and have no dedicated support or finance staff.
- **Pain:** Disputes have strict deadlines, require well-organized evidence, and the process is confusing. Late or weak responses mean automatic losses, and every loss costs the sale plus dispute fees.
- **Why it matters:** Each lost dispute is real money for a small business. Recovered revenue is a metric judges and merchants understand immediately.

---

## 3. Scope

### Hero Flow
Dispute created -> webhook received -> evidence gathered -> AI scores and drafts -> seller approves -> submitted to PayPal -> dashboard updates.

### Supporting Features
1. **Win-probability score with explanation:** Clear percentage likelihood with supporting factors and risk points on every dispute.
2. **Recovered-money dashboard:** Track won, lost, and pending cases, total recovered revenue, and average response times.
3. **Prevention tips based on dispute patterns:** Practical suggestions (such as adding tracking within 24 hours, answering pre-dispute inquiries, and clarifying product descriptions).

### Explicitly Out of Scope
Multi-user teams, multiple payment providers, native mobile app, billing, and email marketing integrations. These are reserved as future roadmap items.

---

## 4. Tech Stack

- **Frontend:** Next.js (React) + Tailwind CSS (fast UI, dark and light theme support, standalone client rendering)
- **Backend:** Next.js API routes / route handlers (Node.js, TypeScript)
- **Database:** PostgreSQL with Prisma ORM (schema migrations and dispute persistence)
- **Data Table:** AG Grid (community) for sorting and filtering the dispute queue
- **Charts:** SVG / Chart.js for dispute recovery analytics and resolution timelines
- **PayPal APIs:** PayPal Sandbox OAuth2, Customer Disputes API, Orders API, Transaction Search API, and Webhooks
- **AI Engine:** Structured LLM API with strict JSON schema validation for scoring and rebuttal drafting
- **Hosting:** Render Web Service (pre-configured with render.yaml)

---

## 5. System Architecture

```
Buyer (Sandbox)                      Seller (Dashboard)
      |                                       |
      v                                       v
PayPal Sandbox ----- Webhook -----> Rebuttal API <----> Rebuttal Web UI
Disputes API  <---- Submit --------     |       +-----> LLM (Score + Draft)
Orders API    <---- Lookup --------     |
Tracking      <---- Carrier -------     v
Transaction Search <---------------+  PostgreSQL
```

### Core Components
1. **Webhook Receiver:** Accepts PayPal dispute events, verifies cryptographic signatures, stores raw events idempotently, and enqueues processing with immediate 2xx acknowledgement.
2. **PayPal Client:** Handles OAuth2 token management, automatic caching, retry backoffs on transient errors, and exposes typed dispute methods.
3. **Evidence Collector:** Automatically retrieves transaction history, order items, tracking scans, and buyer communications into a single normalized case file.
4. **AI Engine:** Performs two targeted operations: (a) scoring win likelihood with cited reasons, and (b) drafting a formal, factual response citing PayPal Seller Protection rules.
5. **Decision Layer:** Rules plus AI evaluation decide the recommendation: fight, accept/refund, or request more information.
6. **Approval Workflow:** Seller reviews the compiled evidence and draft, edits if necessary, and explicitly authorizes submission. Zero blind automation.
7. **Submission Service:** Transmits the evidence packet or accepts the claim through the PayPal Disputes API, recording confirmation tokens.
8. **Dashboard & Analytics:** Computes recovered capital, win rate trends, and resolution turnaround times.
9. **Seed / Demo Mode:** Loads realistic sample disputes so judges can interact with the complete system immediately.

---

## 6. End-to-End Workflow

1. **Step 1 — Dispute opens:** A buyer opens an "Item Not Received" or "Significantly Not As Described" claim in PayPal.
2. **Step 2 — Webhook handling:** Rebuttal verifies the signature, prevents duplicates by event ID, creates a record with status `received`, and returns 200 OK.
3. **Step 3 — Evidence gathering:** Fetches dispute details (reason, amount, deadline), connects transaction records, and extracts tracking proof into an `evidence_ready` case file.
4. **Step 4 — AI scoring:** Evaluates the case file against PayPal rules. Outputs a win likelihood estimate (e.g. 87%), top factors for and against, and a clear recommendation.
5. **Step 5 — AI drafting:** Compiles a factual response letter citing delivery confirmation timestamps, invoice matching, and Section 11.3 Seller Protection.
6. **Step 6 — Seller review:** The seller inspects the dispute in the dashboard queue, verifies the evidence, edits the response text if desired, and checks the authorization box.
7. **Step 7 — Submission:** Dispatches the response directly to the PayPal Disputes API and updates the status to `submitted`.
8. **Step 8 — Outcome tracking:** Follow-up webhooks update the case status to `won` or `lost`, updating total recovered revenue metrics.
9. **Step 9 — Prevention tips:** Cross-case analysis identifies patterns and surfaces actionable tips to avoid repeat chargebacks.

---

## 7. Conceptual Data Model

- **Seller:** ID, PayPal merchant reference, policy text, default response tone.
- **WebhookEvent:** Event ID (unique), event type, raw JSON payload, received timestamp, processed status.
- **Dispute:** PayPal dispute ID (unique), status (`received`, `evidence_ready`, `awaiting_approval`, `submitted`, `won`, `lost`, `accepted`), reason, amount, currency, deadline, outcome.
- **CaseFile:** Dispute reference, normalized JSON of transaction details, order lines, tracking milestones, buyer messages.
- **Evidence:** Dispute reference, evidence type (tracking scan, invoice, photo, communication), source, text or file pointer.
- **Analysis:** Dispute reference, win likelihood, reasons for, reasons against, recommendation, created timestamp.
- **Draft:** Dispute reference, rebuttal text, attached evidence checklist, human approval flag, approved timestamp.
- **Tip:** Generated insight text, supporting statistics, trigger rule.

---

## 8. PayPal Integration Details

- **OAuth2 Authentication:** Client credentials grant type against PayPal Sandbox endpoints.
- **Webhooks:** Listens to `CUSTOMER.DISPUTE.CREATED`, `CUSTOMER.DISPUTE.UPDATED`, and `CUSTOMER.DISPUTE.RESOLVED`, validating signatures via PayPal's webhook verification endpoint.
- **Customer Disputes API:** Queries dispute metadata, submits evidence via provide-evidence actions, sends messages, or accepts claims.
- **Orders & Transaction Search:** Correlates disputed transactions to original order details and customer records.
- **Shipment Tracking:** Pulls carrier delivery milestones and recipient postal code confirmation.

---

## 9. AI Design Rules

- **No fabrication:** The model is strictly constrained to facts in the verified case file. Every statement in the draft maps to an actual tracking number, date, or order item.
- **Structured output:** All AI generations return validated JSON schemas with automatic retry on schema mismatch.
- **Human in the loop:** No dispute response is ever dispatched automatically. Explicit merchant authorization is mandatory.
- **Explainability:** Transparent reasons are provided for every score so the seller understands the strengths and risks of the case.
- **Calibration honesty:** Scored as a "win likelihood estimate", not a guaranteed ruling.
- **Privacy:** Minimizes buyer personal data; excludes unnecessary identifiers from AI prompt context.
- **Cost control:** Exactly one scoring call and one drafting call per dispute lifecycle, with cached outputs.

---

## 10. Security and Reliability

- Secrets and credentials managed exclusively via environment variables; never checked into version control.
- Cryptographic signature validation on all incoming webhook requests.
- Idempotent event processing backed by unique database constraints.
- Exponential backoff retry logic on rate limits (429) and upstream server errors (5xx).
- Complete immutable audit logging of AI outputs and PayPal API responses.

---

## 11. UI Screens

1. **Dashboard:** Total recovered revenue, win rate, pending dispute count, average response time, and active prevention rules.
2. **Dispute Queue:** Filterable table sorted by deadline urgency, displaying amount, dispute reason, win score, and current status.
3. **Case View:** Complete case file, win likelihood breakdown, editable factual rebuttal draft, evidence attachments, and the Approve & Submit action.
4. **Settings:** Connected PayPal merchant status, store return policy text, dispute alert preferences, and API configuration.

---

## 12. Local Development

### Prerequisites
- Node.js 18.x or 20.x
- npm 9.x or higher

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Open http://localhost:3000 in your browser.

### Build and Test Production Bundle
```bash
npm run build
npm start
```

---

## 13. Deployment to Render

The repository includes a `render.yaml` blueprint for automatic deployment on Render as a Web Service.

### Deployment Steps:
1. Log into your Render Dashboard.
2. Select **New +** -> **Blueprint**.
3. Connect the repository: `https://github.com/itzlead12/rebuttal.git`.
4. Render automatically applies the build command (`npm install && npm run build`) and start command (`npm start`).
5. Set any necessary sandbox environment variables in the Render service settings.

---

## 14. License

This project is licensed under the MIT License.
