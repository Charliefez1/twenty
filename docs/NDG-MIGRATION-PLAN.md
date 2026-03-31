# NQI Hub → Twenty Migration Plan

## Strategy

Build NQI Hub as a **Twenty App** (`twenty-apps/nqi-hub/`) using the SDK's `defineObject`, `defineField`, `defineLogicFunction`, and `defineApplication` patterns. Custom objects automatically get full CRUD UI, routes, sidebar navigation, and views (table/kanban/calendar) without touching Twenty's core code.

The Client Portal (Phase 5) will be a separate React app consuming Twenty's GraphQL API.

---

## Phase 1 — Custom Objects (NDG Data Model)

Create all NDG-specific objects as a Twenty App. These automatically get:
- List pages (table, kanban, board, calendar views)
- Detail/edit pages
- Sidebar navigation
- GraphQL CRUD API
- Search indexing
- Workflow trigger support

### Objects to Create

| Object | Key Fields | Relations | Notes |
|--------|-----------|-----------|-------|
| **Project** | name, status (enum), stage, start_date, end_date, budget, currency, tags | → Company, → Person (owner), → Task[], → Invoice[], → Workshop[], → Delivery[] | Status: contracting → project_planning → session_planning → content_review → delivery → feedback_analytics → closed |
| **Invoice** | invoice_number, status (enum), issue_date, due_date, subtotal, vat_amount, total, currency, paid_date, quickbooks_id, notes | → Company, → Project, → InvoiceItem[] | Status: draft → sent → paid / overdue / cancelled. GBP default, VAT 20% |
| **InvoiceItem** | description, quantity, unit_price, vat_rate, total, sort_order | → Invoice, → Service, → Delivery | Line items |
| **Service** | name, category, price, duration, vat_rate, is_active | → InvoiceItem[] | Fixed pricing catalogue |
| **Contract** | title, status (enum), type (enum), start_date, end_date, value, currency, auto_renew, renewal_date, document_url, terms | → Company, → Project, parent → Contract | Types: master, project, sow, amendment |
| **Workshop** | title, description, date, status (enum), location, max_participants, deck_url, feedback_url, tags | → Person (facilitator), → Project, → Session[], → Delivery | Status: draft → planning → confirmed → materials_ready → delivered → follow_up |
| **Session** | type (enum), date, start_time, end_time, is_online, capacity, teams_link, delegate_count, cost, status | → Workshop, → Person (facilitator), → SessionAttendee[] | Types: awareness, champions, managers, leaders, coaching, consultancy |
| **SessionAttendee** | name, email, status (enum) | → Session | Status: confirmed, waitlist, cancelled |
| **Delivery** | date, location, delegate_count, satisfaction_score, kirkpatrick_level | → Project, → Company, → Workshop | Kirkpatrick: L1, L3, L4 |
| **Partner** | name, company_name, email, phone, commission_rate, status, type (enum) | | Types: referral, delivery, technology, content, edi, wellbeing |
| **Facilitator** | name, email, phone, travel_origin | → Session[] | Staff who deliver sessions |
| **CoachingRequest** | notes, status, role_group | → Person, → Company, → Session | Booking requests |
| **KnowledgeArticle** | title, content, category, tags, is_published | → Person (author) | Internal knowledge base |

### Views to Create

| Object | Default Views |
|--------|--------------|
| Project | Table (all), Kanban (by status), Calendar (by start_date) |
| Invoice | Table (all), Kanban (by status) |
| Workshop | Table (all), Kanban (by status), Calendar (by date) |
| Session | Calendar (by date), Kanban (by status) |
| Delivery | Table (all), Calendar (by date) |
| Contract | Table (all), Kanban (by status) |

### Files to Create

```
packages/twenty-apps/nqi-hub/
├── src/
│   ├── application-config.ts
│   ├── objects/
│   │   ├── project.ts
│   │   ├── invoice.ts
│   │   ├── invoice-item.ts
│   │   ├── service.ts
│   │   ├── contract.ts
│   │   ├── workshop.ts
│   │   ├── session.ts
│   │   ├── session-attendee.ts
│   │   ├── delivery.ts
│   │   ├── partner.ts
│   │   ├── facilitator.ts
│   │   ├── coaching-request.ts
│   │   └── knowledge-article.ts
│   ├── fields/
│   │   └── (custom fields on standard objects if needed)
│   ├── views/
│   │   ├── project-views.ts
│   │   ├── invoice-views.ts
│   │   ├── workshop-views.ts
│   │   ├── session-views.ts
│   │   └── delivery-views.ts
│   ├── roles/
│   │   └── ndg-roles.ts
│   └── navigation-menu-items/
│       └── ndg-nav.ts
├── package.json
└── tsconfig.json
```

---

## Phase 2 — Business Logic (Logic Functions + Workflows)

### Logic Functions

| Function | Purpose |
|----------|---------|
| **generate-invoice-pdf** | Generate PDF from Invoice + InvoiceItems. GBP, 20% VAT, NDG branding |
| **send-invoice-email** | Email invoice PDF to client contact |
| **availability-engine** | Calculate available session slots based on facilitator rules, travel blocks, capacity |
| **book-session** | Handle session booking: validate capacity, create attendee, send confirmation |
| **book-coaching** | Handle coaching request: create record, notify facilitator |
| **session-confirm** | Confirm booking: create Teams meeting link, send calendar invite |
| **quickbooks-sync** | Sync invoices to QuickBooks |

### Workflows (Using Twenty's Workflow Engine)

| Trigger | Action | Description |
|---------|--------|-------------|
| Invoice status → "sent" | Send invoice email | Auto-email when invoice marked sent |
| Invoice due_date passed + status="sent" | Update status → "overdue" | CRON: daily check for overdue invoices |
| Project status → "delivery" | Create Workshop records | Auto-scaffold workshops when project enters delivery |
| Session status → "confirmed" | Create Teams meeting | Auto-generate Teams link on confirmation |
| Delivery created | Create feedback Form | Auto-generate L1 feedback form for delivery |
| Deal won (Opportunity) | Create Project + Contract | Handoff from sales pipeline to delivery |

### Files to Create

```
packages/twenty-apps/nqi-hub/src/
├── logic-functions/
│   ├── generate-invoice-pdf.ts
│   ├── send-invoice-email.ts
│   ├── availability-engine.ts
│   ├── book-session.ts
│   ├── book-coaching.ts
│   ├── session-confirm.ts
│   └── quickbooks-sync.ts
└── (workflows configured via Twenty UI or API)
```

---

## Phase 3 — Integrations

Twenty already has Gmail + Calendar sync built-in. Additional integrations:

| Integration | Approach |
|------------|----------|
| **Gmail** | Built-in (Connected Accounts) |
| **Google Calendar** | Built-in (Connected Accounts) |
| **Microsoft Teams** | Logic function using MS Graph API (create meeting links) |
| **QuickBooks** | Logic function using QuickBooks API (invoice sync) |
| **Clarify CRM** | Logic function or workflow to sync pipeline data |

---

## Phase 4 — AI Features

### Charlie AI Chatbot
- Build as a Twenty AI Agent (twenty-apps supports `agents/` and `skills/` dirs)
- Neurodiversity-specialised: ADHD, Autism, Dyslexia, Dyspraxia, Dyscalculia guidance
- Cinema/retail workplace scenarios
- Uses Twenty's MCP server integration point

### Multi-Agent Assistant
- Project Planner agent
- Proposal Writer agent
- Meeting Analyst agent
- Data Analyst agent
- Content Writer agent

### Daily Brief
- CRON workflow: runs each morning
- Aggregates: overdue tasks, today's meetings, pipeline changes, invoice status
- Sends summary via email or notification

### Files to Create

```
packages/twenty-apps/nqi-hub/src/
├── agents/
│   ├── charlie-ai.ts
│   ├── project-planner.ts
│   ├── proposal-writer.ts
│   ├── meeting-analyst.ts
│   └── daily-brief.ts
└── skills/
    ├── neurodiversity-guidance.ts
    ├── proposal-generation.ts
    └── meeting-analysis.ts
```

---

## Phase 5 — Client Portal (Separate App)

The only component that needs a separate frontend. A lightweight React app consuming Twenty's GraphQL API with org-scoped auth.

### Portal Features
- Dashboard (project status, upcoming sessions, invoices)
- Project view (read-only, with deliverables)
- Invoice list + payment status
- Session booking (browse + book available sessions)
- Coaching request form
- Document library (shared files)
- Feedback/evaluation forms (Kirkpatrick L1, L3, L4)
- Toolkit (scenarios, learning pathways, quick-use resources)
- Forums (org-scoped discussion)
- Announcements
- Charlie AI chat (neurodiversity support)
- Custom branding per organisation

### Auth
- Invite-based access (token system)
- Scoped to organisation via Twenty's workspace/API key model
- Separate JWT flow or API key per portal user

### Stack
- React + Vite + Tailwind + shadcn/ui (familiar stack)
- Apollo Client → Twenty GraphQL API
- Deployed independently (Vercel/Netlify or same Docker stack)

---

## Data Migration

Migrate from existing Supabase (project-canvas-hub) to Twenty:

| Source (Supabase) | Target (Twenty) |
|-------------------|-----------------|
| organisations | Company (standard) |
| contacts | Person (standard) |
| projects | Project (custom) |
| tasks | Task (standard) |
| invoices + invoice_items | Invoice + InvoiceItem (custom) |
| contracts | Contract (custom) |
| services | Service (custom) |
| workshops | Workshop (custom) |
| portal_sessions | Session (custom) |
| session_attendees | SessionAttendee (custom) |
| deliveries | Delivery (custom) |
| partners | Partner (custom) |
| facilitators | Facilitator (custom) |
| coaching_requests | CoachingRequest (custom) |
| knowledge_articles | KnowledgeArticle (custom) |
| meetings | Twenty's calendar events |
| emails | Twenty's messaging module |

---

## What We Get for Free (No Build Required)

- CRM (companies, contacts, pipeline/opportunities)
- Email sync (Gmail, Outlook)
- Calendar sync (Google, Microsoft, CalDAV)
- Task management
- Notes & attachments
- Activity timeline
- Views (table, kanban, board, calendar)
- Search & command palette
- Workflow automation engine
- Custom objects & fields
- Multi-tenancy (workspace isolation)
- Auth (email, Google, Microsoft, SSO)
- Roles & permissions
- GraphQL + REST API
- Dark mode
- i18n support
- Docker/K8s deployment

---

## Execution Order

1. **Set up Twenty dev environment** (Docker compose, seed data)
2. **Create `twenty-apps/nqi-hub/` app** with all custom objects
3. **Install app** → verify auto-generated UI works
4. **Add views** (kanban, calendar) for key objects
5. **Build logic functions** (invoicing, booking, availability)
6. **Configure workflows** (status automations, notifications)
7. **Add integrations** (Teams, QuickBooks)
8. **Build AI agents** (Charlie, proposal writer, etc.)
9. **Migrate data** from Supabase
10. **Build Client Portal** (separate React app)
