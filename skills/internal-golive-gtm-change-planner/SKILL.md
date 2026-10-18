---
name: internal-golive-gtm-change-planner
description: Internal Go-Live, GTM and Change Planner. Use when someone must plan, or revise, the rollout of any internal software to employees at a large organization (ERP, CRM, HRIS, ITSM, collaboration suite, dev tooling, security tool, internal platform, AI tool). Produces one integrated plan covering go-live readiness (cutover, go/no-go gates, hypercare, rollback), internal go-to-market (segments, messaging, launch tier, comms, enablement, champions) and change management (ADKAR, resistance, reinforcement), plus machine-readable plan data. Also use in "revise plan" mode when a drift report shows live signals diverging from an approved plan. Not for external customer launches.
---

# Internal Go-Live, GTM and Change Planner

One plan, three integrated lenses. Every workstream answers three questions:
1. **Go-live:** will the system, data, access and support be ready, and how do we decide and recover?
2. **Internal GTM:** who must hear what, from whom, when, and how do they learn it?
3. **Change:** will each group be Aware, Desire, Know, be Able, and stay Reinforced (ADKAR)?

The user is an expert. Do not explain frameworks. Be terse, specific, decision-oriented.

## Files
| File | Use |
|---|---|
| `templates/plan-template.md` | Fixed output structure. Always use it. |
| `templates/plan-data.schema.yaml` | Plan data shape for monitoring agents. |
| `templates/drift-diff-template.md` | Output for revise mode. |
| `risk-library.md` | Risk catalog with triggers, signals, mitigations. |
| `checklists.md` | Readiness by workstream, go/no-go, cutover runbook, hypercare, rollback. |
| `modules/ai-addon.md` | Load ONLY if tool type is AI or the tool has AI features. |
| `examples/` | Inputs and plans from test runs. Read only if unsure of the format. |

## Modes
- **Plan** (default): intake, decide, draft, self-check, deliver.
- **Revise**: input is an approved plan (plan data block) plus a drift report. Go to "Revise mode".

## 1. Intake
Ask in batches. Send one batch, wait for answers, then the next. Max 3 batches. First, offer: "Paste or link any existing docs (charter, PRD, project plan, comms drafts). I will pre-fill answers and only ask what is missing." If docs answer a question, do not ask it; list what you inferred and let the user correct it.

If the user says "assume", fill gaps with defaults and label each `[ASSUMPTION]`.

**Batch 1: the change (required)**
1. Tool and type: ERP, CRM, HRIS, ITSM, collaboration, dev tooling, security, internal platform, AI, other.
2. Change magnitude, pick one per line:
   - Replacing an existing tool / net new
   - Mandatory / optional
   - Workflow-changing / additive
3. Who is affected: groups or functions, rough headcount each, regions.
4. Target go-live date and any hard dates (contract end, audit, fiscal close, peak season).
5. Sponsor (role) and program owner (role).

**Batch 2: constraints and context**
6. Approved channels for comms and for listening (and which are off-limits).
7. Data migration in scope? Systems integrated? Identity / SSO / provisioning method?
8. Regulatory, works council, privacy or union constraints. Countries.
9. Budget or capacity limits: licenses, seats, usage caps, support headcount, training hours.
10. Other changes hitting the same groups in the window.

**Batch 3: success and risk appetite (skip if docs cover it)**
11. Business outcome in one sentence, and how it is measured today.
12. Risk appetite: big bang acceptable, or must be phased? Is rollback feasible?
13. Known resistance or past failed rollouts.

## 2. Decision rules
Apply in order. Record each decision and its reason in "Open decisions" if the user did not confirm it.

**2.1 Launch tier**
| Tier | Rule | Implications |
|---|---|---|
| T1 | Mandatory and workflow-changing; or touches money, payroll, customer data, or compliance records; or data migration | Full readiness gates, dress rehearsal, command center, exec sponsor comms, 4 to 12 week hypercare |
| T2 | Mandatory and additive; or replaces a tool for one function; or optional with access to sensitive data (AI included) | Readiness gates, pilot wave, 2 to 4 week hypercare per wave, manager kits |
| T3 | Optional and additive with no sensitive data | Light gates, self-serve enablement, office hours, 1 to 2 week hypercare |
Modifiers: more than 2,000 users, regulated data, works council, or a prior failed rollout raise T3 to T2. Only the T1 rule makes a T1. Modifiers still add their risks and gates at any tier.
**Hard constraints win.** If the user gave a duration, date, channel or budget, use it even when a default differs. Flag the conflict in Open decisions with the default and the reason.

**2.2 Magnitude branches (add every branch that applies)**
- **Replacing:** add migration plan (scope, mock loads >=2, reconciliation gate), parallel-run decision, legacy sunset dates (read-only date, decommission date, archive owner), "what moves, what stays" message, redirect from old entry points. Add risks R04, R09.
- **Net new:** add "why now / what it replaces in your day" message; no sunset section; stronger Desire work.
- **Mandatory:** add enforcement mechanism (access removal, workflow gating, policy), dated cutover, grace period, exception process with owner, manager accountability. Communicate the date at least 3 times before it hits.
- **Optional:** add opt-in growth plan: waitlist or pilot cohort, use-case library, peer showcases, adoption targets by segment, nudges. No enforcement language. Add risk R08 strongly.
- **Workflow-changing:** role-based training mandatory before access; process owner sign-off; updated SOPs; Ability check (proficiency) before go-live gate.
- **Additive:** short enablement (<30 min core), embed in existing workflow, focus on habit.
- **AI tool or AI features:** load `modules/ai-addon.md` and apply it.

**2.3 Pilot and waves**
- T1/T2: pilot with 1 to 3 representative groups (include one skeptical group) for 2 to 8 weeks, then waves sized so hypercare can absorb them. Each wave has entry criteria from the prior wave's exit.
- Big bang only if: tightly coupled data (single ledger), coexistence impossible, and dress rehearsal passed. State why.
- Avoid wave dates on peak or close periods and on weeks other changes hit the same group.
- Every wave gets its own T-minus clock (W1 T-2, W2 T0). Give calendar dates, not only offsets.
- Size waves so peak tickets fit support capacity: expected tickets = users x ticket rate [ESTIMATE] must be below L1 and L2 weekly capacity.

**2.4 Segments and messaging**
- Segment by impact, not org chart: what changes in their day, how much, what they lose.
- For each segment: one core message (what changes, why, what is in it for them, by when, where to get help), the sender (manager for personal impact, sponsor for why), and the top objection with the answer.
- Message formula: `From {date}, {segment} can/must {specific task} in {tool}, so {concrete benefit or what stops}. Start here: {link or step}.`
- Objection answers must be a fact, a policy, or a commitment from a named role, not reassurance.
- Reject any message that would fit any tool. It must name a task, a date, or a number.

**2.5 Champions**
- Ratio: about 1 per 25 to 50 users in workflow-changing rollouts, 1 per 50 to 100 additive [ESTIMATE].
- Size champions per wave, not only for the full population.
- Charter: time cap (hours per week), manager agreement, early access, feedback loop, recognition, rotation at hypercare exit.

**2.6 Enablement mix**
- Role-based, task-first. Formats: live demo or lab, 2 to 5 min clips, quick reference, in-app guidance if available, office hours.
- Workflow-changing: proficiency check before go-live. Additive: optional, <30 min.
- One enablement row per segment minimum. An "All users" row is allowed only in addition.

**2.7 Comms calendar**
- Rhythm, T-minus weeks: T-8 announce why (sponsor), T-6 manager brief, T-4 what changes by segment, T-2 how to get ready, T-1 reminder plus checklist, T0 go-live, T+1 tips and known issues, T+2 to T+6 wins and reinforcement. Compress for T3.
- Each row: date, audience, message, channel, sender, owner, success signal.

**2.7b Channel and listening constraints**
- Intake channel limits apply to sending and listening. Never plan a comms row or a signal on a forbidden channel (for example no DMs).
- Comms drafted by any agent are sent by a named human role. Say so in the sender column.
- Listening plan: for each metric and risk signal, name the allowed source, the query or channel, the ADKAR stage or metric it feeds, and the threshold. Aggregate to groups of at least 5 people unless the user states otherwise.

**2.8 Support and hypercare**
- Tiers: L0 self-serve and champions, L1 service desk with scripts, L2 product or config team, L3 vendor or engineering.
- Command center for T1. Daily standup during hypercare. Exit on criteria, not dates (see checklists).

**2.9 Governance**
- Steering cadence, decision owners, RACI for gates. Go/no-go owners named by role. Escalation path with response times.

**2.10 Metrics and gates**
- Leading (weekly): activation, active use by segment, training completion, ticket volume and themes, sentiment.
- Lagging (monthly): process outcome, legacy usage, time or cost metric, quality metric.
- Each metric: definition, source, baseline, target, threshold that triggers action. Thresholds without baseline are `[ESTIMATE]`.
- At least one outcome metric per segment, tied to the business outcome. Define "active" precisely (for example 3+ sessions in a week).
- Thresholds use op, value and window (for example `< 70% over 7 days`).
- Gates: readiness gate (T-2w), go/no-go (T-1d), wave gates, hypercare exit, sunset gate. For optional pilots, also a scale gate: expand, extend, or stop, with criteria.

**2.11 Reinforcement**
- Weeks 3 to 12: manager check-ins, recognition, embed in rituals and dashboards, remove workarounds, retire legacy, adoption review by segment.

## 3. Risk library
Read `risk-library.md` (and AI risks if the module is loaded). Silently check every trigger against the intake; include every match and nothing else. Risks marked "Always" are always included. Do not print the trigger check. Copy signal, mitigation, owner role, phase; tailor the signal to named channels and data sources; set a threshold. Add program-specific risks the library lacks.

## 4. Output
Use `templates/plan-template.md` exactly, in order. Then ALWAYS append the plan data block (YAML per `templates/plan-data.schema.yaml`); a plan without it is incomplete. Prose may be short; data may not be abbreviated. Use one flow-style line per item. Signals no system can observe use `source: manual` with owner and cadence, so every risk links to a signal. The plan data must hold every metric, gate, signal and risk with thresholds so a monitoring agent can compare live signals to the plan.

Labels: `[ASSUMPTION]` for inputs you supplied, `[ESTIMATE]` for numbers without a source, `[DECISION NEEDED]` for open calls. Never invent stats, quotes, or names.

## 5. Revise mode
Input: approved plan data + drift report (signals, observed values, dates).
1. Match each drift item to plan items (metric, gate, risk, wave, comms row).
2. Classify: within tolerance (no change), breach (propose change), new risk (propose addition), plan error (propose correction).
3. Propose a minimal diff using `templates/drift-diff-template.md`: each change has id, section and item id, before, after, reason tied to evidence (signal id, value, window), impact including knock-on effects on other ids, confidence, and an approver role.
4. Never edit, overwrite, or re-issue the approved plan. Output only the proposal, status `PENDING_APPROVAL`. A human approves or rejects each change. Bump plan version only after explicit approval, and only in the approved items.
5. If evidence is thin (one signal, small group, under 5 people), mark `WATCH` and propose no change.

## 6. Quality self-check (run before delivering, fix failures, do not print the rubric unless asked)
- [ ] Every phase and every gate has an owner role.
- [ ] Every risk has a signal with a threshold, a mitigation, an owner and a phase.
- [ ] Every metric has definition, source, baseline (or `[ESTIMATE]`), target, threshold.
- [ ] Go/no-go has explicit criteria and a named decision owner; rollback has a trigger and point of no return.
- [ ] Magnitude branches applied (sunset if replacing, enforcement if mandatory, growth if optional).
- [ ] No generic message: each names a task, date, or number for its segment.
- [ ] Each comms row has a sender and a channel that the intake allowed.
- [ ] All estimates and assumptions labeled. No invented figures.
- [ ] Plan data block present, parses, and ids match the tables.
- [ ] Every user hard constraint (dates, durations, channels, budget) is honored or flagged as a conflict.
- [ ] No comms row or signal uses a forbidden channel; agent-drafted comms have a human sender.
- [ ] Every segment has its own message, enablement row and outcome metric.
- [ ] Every library risk whose trigger matches is included (check "Always" risks, legal or works council, data).
- [ ] Each wave has dates, entry criteria and a gate; tier matches the rule and modifiers.
- [ ] Every risk in plan data has at least one signal id (manual allowed).
- [ ] Length: one-page summary fits ~300 words; prose under ~2,500 words (excluding plan data) unless T1 with migration.

## 7. Token rules
- Ask only unanswered questions. Do not restate the user's input.
- Tables over prose. No framework explanations. No preambles.
- Load the AI module and checklists only when needed; cite checklist items by id instead of copying them all.
- Revise mode outputs only the diff, never the full plan.
