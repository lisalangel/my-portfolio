# Internal AI Platform Rollout Plan: Go-Live, Internal GTM and Change (EXAMPLE)
Version 0.3 | Status DRAFT | Tier T2 | Owner Senior TPM | Updated 2026-10-18
Magnitude: net new, optional, additive, AI. Input: `example-input-ai-platform.md`. All names, sizes and dates are EXAMPLE values.

## 1. One-page summary
**In short:** Pilot the AI platform with 160 people from 2027-01-11, open it to Engineering and Product on 2027-03-08 and to Sales and Support on 2027-04-12, inside a fixed monthly token budget. Decision needed now: segment quotas and works council date.
- **Outcome:** regular, valuable use within budget. Target 50% weekly active of activated users by 6 weeks after each wave [ESTIMATE]; spend at or under cap every month.
- **Approach:** T2 (optional, sensitive data via prompts). 8-week pilot (4 squads of 40), 2 waves, 2 weeks hypercare per wave (user constraint).
- **Top risks:** shadow AI in Engineering (A05), job fear in Support (A02), token overrun (A03), Sales overload from the February CRM upgrade (R10).
- **Gates:** G1 readiness 2026-12-28, G2 go/no-go 2027-01-08, G3 scale gate 2027-03-01, G4 W2 go/no-go 2027-04-09, G5 hypercare exits.
- **Listening:** allowlisted Slack channels (read-only, no DMs), Jira access queue, Confluence how-to pages, gateway usage data. Aggregate groups of 5+.

## 2. Stakeholder map and RACI
| Stakeholder (role) | Impact | Influence | Stance | Engagement |
|---|---|---|---|---|
| CTO (sponsor) | Low | High | Supportive | Steering every 2 weeks; launch and intent messages |
| Engineering managers | High | High | Mixed | Brief 1 week before staff; team use view |
| Support leads | High | Medium | Wary | HR-led Q&A before W2 |
| Sales leaders | Medium | High | Overloaded | One 15-min brief; W2 after quarter-end |
| Security lead | Medium | High | Cautious | AUP and data rules sign-off |
| Works council (EU) | Medium | High | Unknown | Consult by T-8 |
| Platform owner | High | High | Supportive | Quotas, routing, alerts |

| Activity or gate | R | A | C | I |
|---|---|---|---|---|
| AUP and data rules | Security lead | CTO | Legal, works council | All staff |
| Quotas and routing | Platform owner | CTO | Finance, segment leads | Users |
| G2 and G4 go/no-go | Senior TPM | CTO | Security, Platform, Support | Managers |
| G3 scale gate | Senior TPM | CTO | Segment leads | Steering |
| Comms (agent drafts, human sends) | Change lead | Senior TPM | Segment leads | Staff |
| Hypercare | Support lead | Platform owner | Champions | Senior TPM |

## 3. Segments and messages
| Segment | Size | What changes | Core message | Sender | Top objection and answer | ADKAR gap |
|---|---|---|---|---|---|---|
| Engineering | 1,200 | Approved AI replaces personal tools for code and docs | From 2027-03-08, use the platform for test and doc drafts; personal AI accounts stop being allowed for company code on 2027-04-30. Start: request a key in the access form. | VP Engineering, then managers | "My tool is better." Approved path has Opus on request and keeps code inside policy (Security lead). | Desire |
| Product | 250 | Drafting specs and research summaries | From 2027-03-08, draft PRD first versions and interview summaries with Sonnet; templates live on the how-to page. | CPO | "Output is generic." Use-case library has 5 tested prompts with examples (Enablement lead). | Knowledge |
| Sales | 600 | Account research and call prep | From 2027-04-12, prep a call brief in 10 minutes [ESTIMATE] with the account research prompt. No new CRM steps. | CRO, then managers | "No time during CRM upgrade." Wave starts after quarter-end; one 20-min session only. | Awareness |
| Support | 450 | Reply drafts and ticket summaries, human reviewed | From 2027-04-12, draft replies and summaries; you approve every reply that goes out. | VP Support with HR | "Will this replace us?" Written commitment from CTO and VP Support on intent; usage is never reported per person. | Desire |

## 4. Timeline by phase
| Phase | Dates (clock) | Key activities | Exit criteria | Owner |
|---|---|---|---|---|
| Plan | 2026-11-02 to 11-27 (T-10 to T-6) | Charter, AUP, works council consult, quota model | AUP drafted; consult held | Senior TPM |
| Prepare | 11-30 to 2027-01-08 (T-6 to T-1) | Keys flow, quotas, alerts, pilot training, 8 champions | G1, G2 passed | Change lead |
| Pilot | 01-11 to 03-05 (T0 to T+8) | 4 squads (one per function), weekly read | G3 scale gate | Senior TPM |
| Wave 1 | 03-08 (W1 T0) | Engineering and Product open | Activation 80% by W1 T+2 | Senior TPM |
| W1 hypercare | 03-08 to 03-19 | Daily triage, known issues | HC-5 met | Support lead |
| Wave 2 | 04-12 (W2 T0) | Sales and Support open | G4 passed | Senior TPM |
| W2 hypercare | 04-12 to 04-23 | Daily triage | HC-5 met | Support lead |
| Reinforce | 04-26 to 06-30 | Use-case refresh, showcases, outcome review | Outcome review held | Change lead |
Holiday freeze 2026-12-21 to 2027-01-01 [ASSUMPTION]: no comms or launches.

## 5. Go-live readiness and cutover
- **Readiness (G1, owners):** RC-T1 and RC-T2 Platform owner; RC-A1 and RC-A2 IT identity lead (key request to key issued under 24h); RC-E1 and RC-E2 Enablement lead; RC-C1 Change lead; RC-S1 Support lead; RC-G1 Security lead and Legal (AUP, works council).
- **Go/no-go (G2, G4):** decision owner CTO, on Senior TPM recommendation. Criteria: GNG-1 (0 sev-1 on gateway), GNG-4 (pilot or wave training 80%+), GNG-5, GNG-6, GNG-7 (no quarter-end overlap), GNG-8, GNG-9 (AUP published), GNG-10 (alerts tested at 50/80/100%), GNG-11 (all listening sources flowing).
- **Cutover (no migration):** CR-1 confirm rota and comms; CR-5 enable keys for the wave's IdP group, publish start message; CR-6 72-hour watch on access tickets and quota errors.
- **Rollback:** triggers are a data leakage incident, spend over 100% of cap mid-month, or gateway outage over 4 hours. Platform owner recommends; CTO decides within 2 hours. Steps: pause new keys, drop to Haiku-only quotas, or revoke the wave's group; Senior TPM posts in #ai-announcements. No point of no return.
- **Opt-in growth:** pilot waitlist, use-case library (5 per segment), fortnightly show-and-tell, champion office hours, adoption by segment shared with leaders.

## 6. Comms calendar
| Week | Audience | Message | Channel | Sender | Owner | Success signal |
|---|---|---|---|---|---|---|
| T-8 (11-16) | All staff | Why the platform, what is allowed, pilot dates | All-hands + email | CTO | Change lead | AUP page views; questions in #ai-help |
| T-6 (11-30) | Pilot managers | Pilot brief, talking points, team list | Manager meeting | Senior TPM | Change lead | 100% attended |
| T-4 (12-14) | Pilot users | Your use cases and how to get a key | Email from manager | Managers | Change lead | Keys requested 60%+ |
| T-1 (01-04) | Pilot users | Checklist, office hours | #ai-announcements | Senior TPM | Change lead | Training 80%+ |
| T0 (01-11) | Pilot users | You are live; where to get help | #ai-announcements | CTO | Change lead | Activation |
| T+1 to T+8 | Pilot | Weekly tip and known issues (agent drafts, human sends) | #ai-help | Senior TPM | Change lead | Repeat questions fall |
| W1 T-2 (02-22) | Eng and Product managers | Wave brief, team use view | Manager meeting | VP Eng, CPO | Change lead | Kits opened 60%+ |
| W1 T0 (03-08) | Eng and Product | Segment message above | Email + #ai-announcements | VP Eng, CPO | Change lead | Activation 80% by T+2 |
| W2 T-4 (03-15) | Support | Intent commitment and Q&A | Team meeting + email | VP Support with HR | HR partner | Fear themes fall in #ai-help |
| W2 T-2 (03-29) | Sales managers | 15-min brief after CRM upgrade | Sales leadership call | CRO | Change lead | Brief held |
| W2 T0 (04-12) | Sales and Support | Segment messages above | Email + #ai-announcements | CRO, VP Support | Change lead | Activation |
| W2 T+3 onward | All | Wins with numbers, new use cases | #ai-announcements, all-hands | Segment leads | Change lead | WAU holds |

## 7. Enablement plan
| Segment | Format | Duration | Timing | Proficiency check | Owner |
|---|---|---|---|---|---|
| Engineering | Live lab on test and doc drafts; 3 clips | 60 min + clips | W1 T-1 | Optional lab exercise | Enablement lead |
| Product | Prompt library walkthrough | 45 min | W1 T-1 | None | Enablement lead |
| Sales | Single call-prep session, recorded | 20 min | W2 T-1 | None | Sales enablement |
| Support | Reply-draft lab with human review rules | 60 min | W2 T-1 | Review rules quiz (required) | Support lead |
| All users | AUP and data rules, AI literacy record (EU) | 15 min | Before key issued | Completion tracked | Security lead |
Practice hours beyond the session come from weekly office hours [ESTIMATE: total 3 to 5 hours per core user over the first month].

## 8. Champions plan
- Pilot: 8 champions (2 per squad). W1: 20 (about 1 per 70). W2: 15 (about 1 per 70). Ratios [ESTIMATE].
- Charter: 2 hours a week cap, manager written agreement, early Opus access, monthly recognition by CTO, rotate at each hypercare exit.
- Home: #ai-champions (allowlisted). Champions who opt in may be named in the weekly read; nobody else is.

## 9. Support and hypercare
- L0 #ai-help with champions and how-to pages; L1 service desk with key and quota scripts; L2 platform engineers (2); L3 gateway vendor.
- No command center (T2). Daily 15-min triage during each 2-week hypercare; known-issues pin in #ai-help; weekly sponsor note.
- SLAs [ESTIMATE]: key issued under 24h; L1 first response under 4 business hours.
- Exit (HC-5): access tickets under 10 a week for 2 weeks, no open sev-1 or sev-2, activation at 80%.

## 10. Metrics and gates
| ID | Metric | Type | Definition and source | Baseline | Target | Action threshold | Owner |
|---|---|---|---|---|---|---|---|
| M1 | Activation | Leading | Users with 1+ request / users in wave group; gateway logs | 0 | 80% by T+2w | < 70% at T+2w | Platform owner |
| M2 | Weekly active | Leading | Activated users with requests on 3+ days in a week; gateway usage API | 0 | 50% by T+6w [ESTIMATE] | Falls 2 weeks running or < 35% | Change lead |
| M3 | Spend vs cap | Leading | Monthly token spend / segment cap; gateway | n/a | <= 100% | > 80% before day 21 | Platform owner |
| M4 | Quota errors | Leading | Quota-limit responses per 100 active users per week; gateway | n/a | < 2 [ESTIMATE] | > 5 | Platform owner |
| M5 | Time to key | Leading | Median hours, request to key; Jira access queue | n/a | < 24h | > 48h | IT identity lead |
| M6 | Repeat questions | Leading | Same question 3+ times a week; #ai-help | n/a | 0 unanswered | Any, 2 weeks running | Enablement lead |
| M7 | ADKAR pulse | Leading | 5-point pulse per segment, groups of 5+ | Measure at T-2 | +0.5 on weakest element | Any element < 3.0 | Change lead |
| O1 | Eng outcome | Outcome | Self-reported hours saved per week (pulse) | Measure at T-2 | 2h [ESTIMATE] | < 1h at W1 T+6 | VP Engineering |
| O2 | Product outcome | Outcome | Days from spec start to review; Jira timestamps | Last quarter median | -20% [ESTIMATE] | No change at W1 T+8 | CPO |
| O3 | Sales outcome | Outcome | Minutes of call prep (pulse) | Measure at W2 T-2 | -30% [ESTIMATE] | No change at W2 T+6 | CRO |
| O4 | Support outcome | Outcome | Team-level handle time; support tool [DECISION NEEDED] | Last quarter | -10% [ESTIMATE] | Quality score falls | VP Support |
Gates: G1 readiness (RC list), G2 and G4 go/no-go (GNG list), G3 scale gate: expand if M1 >= 80%, M2 >= 40% and M3 <= 100% in pilot; extend 4 weeks if mixed; stop if M2 < 20%. G5 hypercare exit (HC-5).

## 10b. Listening plan
| Signal id | Allowed source and query | Feeds | Threshold | Privacy |
|---|---|---|---|---|
| S1 | #ai-help: "what is this / why now" themes | Awareness, M6 | 5+ a week after T0 | Group of 5+ |
| S2 | #ai-help: "are we allowed" and fear themes | Desire, A02, A05 | 3+ a week per segment | Group of 5+ |
| S3 | Jira access queue | Knowledge, M5, R03 | > 48h median | Aggregate |
| S4 | Confluence how-to comments: "fails for me" | Ability, R06 | 3+ on one page | Aggregate |
| S5 | #ai-help: peers answering peers | Champion candidates | 3+ answers a week | Opt-in only |
| S6 | Gateway usage and spend | M1 to M4, A03 | As metrics | Aggregate by segment |
| S7 | Pulse survey | M7, O1, O3 | As metrics | Groups of 5+ |
| S8 to S13 | Manual checks: steering, manager kits, change calendar, L1 backlog, #ai-champions, legal tracker | R01, R02, R05, R07, R10, R11, R13 | As risk register | Aggregate |
No DMs are read. No signal is reported per person.

## 11. Risk register
| ID | Risk | Early warning signal and threshold | Mitigation | Owner | Phase |
|---|---|---|---|---|---|
| R01 | Weak sponsor | CTO misses 2 steering; no T-8 message | Dated sponsor acts in charter | Senior TPM | Plan |
| R02 | Managers not modeling | Kits opened < 60% at W1 T-1 | Manager brief 1 week ahead; team use view | Change lead | Prepare |
| R03 | Key friction | S3 median > 48h; M1 < 70% | IdP group auto-issue; self-serve form | IT identity lead | Prepare |
| R05 | Bad timing | Wave overlaps quarter-end or CRM upgrade | W2 after quarter-end; blackout calendar | PMO | Plan |
| R06 | Generic training | S4 3+ per page; M6 repeats | Segment labs; use-case library | Enablement lead | Prepare |
| R07 | Thin hypercare | L1 backlog grows 3 days | Platform engineers on rota; scripts | Support lead | Hypercare |
| R08 | Novelty drop-off | M2 falls 2 weeks after week 3 | Show-and-tell; new use cases monthly | Change lead | Reinforce |
| R10 | Change fatigue (Sales) | CRM upgrade slips into April | Move W2 Sales to May | PMO | Plan |
| R11 | Champion burnout | 2+ drop-outs per wave | 2h cap; rotation | Champion lead | Launch |
| R12 | Measurement theater | No outcome data by W1 T+4 | O1 to O4 in weekly read | Senior TPM | All |
| R13 / A07 | Works council or AI literacy duty | Consult not held by T-8 | Consult early; literacy record | Legal / HR partner | Plan |
| A01 | Data leakage | DLP alerts; S2 policy questions | AUP, data guide, DLP | Security lead | Launch |
| A02 | Job fear (Support) | S2 fear themes 3+ a week | Written intent commitment; HR Q&A | VP Support | Plan, launch |
| A03 | Token overrun | M3 > 80% before day 21 | Quotas, Haiku default, Opus on request | Platform owner | Launch onward |
| A04 | Bad outputs | Repeat "wrong answer" posts | Known-limits page; human review | Product owner | Launch onward |
| A05 | Shadow AI (Eng) | "Can I use X" 3+ a week | Approved path easiest; dated cutoff | Security lead | All |
| A06 | Shallow use | 80%+ of requests in one task type | Segment use cases; champion demos | Enablement lead | Reinforce |
| A08 | Uneven quotas | Quota complaints from one segment | Monthly quota review | Platform owner | Launch onward |

## 12. Open decisions
| # | Decision | Options | Recommended | Owner | Due |
|---|---|---|---|---|---|
| D1 | Segment token caps | Flat / tiered by segment | Tiered, Haiku default | Platform owner | 2026-11-27 |
| D2 | Usage API exposure | Gateway export / none | Gateway export, aggregate | Platform owner | 2026-11-27 |
| D3 | Works council date | Before or after T-8 | Before T-8 | Legal / HR partner | 2026-11-13 |
| D4 | Support outcome source | Support tool / pulse | Support tool, team level | VP Support | 2027-03-15 |
| D5 | Personal AI cutoff for Eng | 2027-04-30 / none | 2027-04-30 if G3 passes | Security lead | 2027-03-01 |
| D6 | Pilot squads | One per function | One per function, include one skeptical team | Senior TPM | 2026-11-20 |

## Appendix: plan data
```yaml
plan: {id: ai-platform-rollout, version: 0.3, status: DRAFT, approved_by: null, tool: internal AI platform, tool_type: ai, magnitude: {replacing: false, mandatory: false, workflow_changing: false, ai: true}, tier: T2, go_live: 2027-01-11}
segments:
  - {id: eng, name: Engineering, size: 1200, owner_role: VP Engineering, waves: [pilot, w1]}
  - {id: prod, name: Product, size: 250, owner_role: CPO, waves: [pilot, w1]}
  - {id: sales, name: Sales, size: 600, owner_role: CRO, waves: [pilot, w2]}
  - {id: supp, name: Support, size: 450, owner_role: VP Support, waves: [pilot, w2]}
waves:
  - {id: pilot, segments: [eng, prod, sales, supp], start: 2027-01-11, entry_criteria: [G1, G2], exit_gate: G3}
  - {id: w1, segments: [eng, prod], start: 2027-03-08, entry_criteria: [G3], exit_gate: G5_w1}
  - {id: w2, segments: [sales, supp], start: 2027-04-12, entry_criteria: [G4], exit_gate: G5_w2}
phases:
  - {id: plan, start: 2026-11-02, end: 2026-11-27, owner_role: Senior TPM, exit_criteria: [AUP drafted, works council consult held]}
  - {id: prepare, start: 2026-11-30, end: 2027-01-08, owner_role: Change lead, exit_criteria: [G1, G2]}
  - {id: pilot, start: 2027-01-11, end: 2027-03-05, owner_role: Senior TPM, exit_criteria: [G3]}
  - {id: hc_w1, start: 2027-03-08, end: 2027-03-19, owner_role: Support lead, exit_criteria: [G5_w1]}
  - {id: hc_w2, start: 2027-04-12, end: 2027-04-23, owner_role: Support lead, exit_criteria: [G5_w2]}
  - {id: reinforce, start: 2027-04-26, end: 2027-06-30, owner_role: Change lead, exit_criteria: [outcome review held]}
gates:
  - {id: G1, name: readiness, date: 2026-12-28, decision_owner: Senior TPM, criteria: [{check: RC-T1}, {check: RC-A1}, {check: RC-E1}, {check: RC-G1}]}
  - {id: G2, name: pilot go/no-go, date: 2027-01-08, decision_owner: CTO, criteria: [{check: GNG-1}, {check: GNG-9}, {check: GNG-10}, {check: GNG-11}]}
  - {id: G3, name: scale gate, date: 2027-03-01, decision_owner: CTO, criteria: [{metric_id: M1, op: ">=", value: 0.80}, {metric_id: M2, op: ">=", value: 0.40}, {metric_id: M3, op: "<=", value: 1.0}]}
  - {id: G4, name: W2 go/no-go, date: 2027-04-09, decision_owner: CTO, criteria: [{check: GNG-4}, {check: GNG-7}, {metric_id: M5, op: "<=", value: 24}]}
  - {id: G5_w1, name: W1 hypercare exit, date: 2027-03-19, decision_owner: Support lead, criteria: [{check: HC-5}]}
  - {id: G5_w2, name: W2 hypercare exit, date: 2027-04-23, decision_owner: Support lead, criteria: [{check: HC-5}]}
metrics:
  - {id: M1, type: leading, source: gateway_logs, baseline: 0, target: 0.80, threshold: {op: "<", value: 0.70, window: T+2w}, segment: all, estimate: false}
  - {id: M2, type: leading, source: gateway_usage_api, baseline: 0, target: 0.50, threshold: {op: "<", value: 0.35, window: 7d}, segment: all, estimate: true}
  - {id: M3, type: leading, source: gateway_spend, target: 1.0, threshold: {op: ">", value: 0.80, window: before day 21}, segment: each, estimate: false}
  - {id: M4, type: leading, source: gateway_logs, target: 2, threshold: {op: ">", value: 5, window: 7d}, segment: all, estimate: true}
  - {id: M5, type: leading, source: jira_access_queue, target: 24, threshold: {op: ">", value: 48, window: 7d}, segment: all, estimate: false}
  - {id: M6, type: leading, source: slack_ai_help, target: 0, threshold: {op: ">", value: 0, window: 2 weeks}, segment: all, estimate: false}
  - {id: M7, type: leading, source: pulse, baseline: T-2 survey, target: +0.5 weakest, threshold: {op: "<", value: 3.0, window: per pulse}, segment: each, estimate: false}
  - {id: O1, type: outcome, source: pulse, target: 2, threshold: {op: "<", value: 1, window: W1 T+6}, segment: eng, estimate: true}
  - {id: O2, type: outcome, source: jira_timestamps, target: -0.20, threshold: {op: ">=", value: 0, window: W1 T+8}, segment: prod, estimate: true}
  - {id: O3, type: outcome, source: pulse, target: -0.30, threshold: {op: ">=", value: 0, window: W2 T+6}, segment: sales, estimate: true}
  - {id: O4, type: outcome, source: DECISION_NEEDED, target: -0.10, threshold: {op: "<", value: quality baseline, window: monthly}, segment: supp, estimate: true}
signals:
  - {id: S1, source: slack_channel, query_or_channel: "#ai-help", maps_to: [M6, awareness], privacy: aggregate_only}
  - {id: S2, source: slack_channel, query_or_channel: "#ai-help", maps_to: [A02, A05, A01, desire], privacy: aggregate_only}
  - {id: S3, source: jira, query_or_channel: access_queue, maps_to: [M5, R03, knowledge], privacy: aggregate_only}
  - {id: S4, source: confluence, query_or_channel: how-to page comments, maps_to: [R06, ability], privacy: aggregate_only}
  - {id: S5, source: slack_channel, query_or_channel: "#ai-help", maps_to: [champion_candidates], privacy: opt_in_only}
  - {id: S6, source: gateway, query_or_channel: usage and spend export, maps_to: [M1, M2, M3, M4, A03, A06, A08], privacy: aggregate_only}
  - {id: S7, source: pulse, query_or_channel: monthly pulse, maps_to: [M7, O1, O3], privacy: aggregate_only}
  - {id: S8, source: manual, query_or_channel: steering attendance and sponsor acts, maps_to: [R01], cadence: biweekly, owner_role: Senior TPM, privacy: aggregate_only}
  - {id: S9, source: manual, query_or_channel: manager kit opens and brief attendance, maps_to: [R02], cadence: weekly, owner_role: Change lead, privacy: aggregate_only}
  - {id: S10, source: manual, query_or_channel: change calendar review (CRM upgrade, quarter-end), maps_to: [R05, R10], cadence: biweekly, owner_role: PMO, privacy: aggregate_only}
  - {id: S11, source: manual, query_or_channel: L1 backlog trend, maps_to: [R07], cadence: daily in hypercare, owner_role: Support lead, privacy: aggregate_only}
  - {id: S12, source: slack_channel, query_or_channel: "#ai-champions answer times and drop-outs", maps_to: [R11], cadence: weekly, owner_role: Champion lead, privacy: opt_in_only}
  - {id: S13, source: manual, query_or_channel: legal and works council tracker, maps_to: [R13_A07], cadence: weekly until T-8, owner_role: Legal HR partner, privacy: aggregate_only}
risks:
  - {id: R01, signal_ids: [S8], threshold: "CTO misses 2 steering", owner_role: Senior TPM, phase: plan, status: open}
  - {id: R02, signal_ids: [S9], threshold: "kits opened < 60% at W1 T-1", owner_role: Change lead, phase: prepare, status: open}
  - {id: R03, signal_ids: [S3, S6], threshold: "M5 > 48 or M1 < 0.70", owner_role: IT identity lead, phase: prepare, status: open}
  - {id: R05, signal_ids: [S10], threshold: "wave overlaps quarter-end or CRM upgrade", owner_role: PMO, phase: plan, status: open}
  - {id: R06, signal_ids: [S4, S1], threshold: "3+ fail comments on one page", owner_role: Enablement lead, phase: prepare, status: open}
  - {id: R07, signal_ids: [S11], threshold: "L1 backlog grows 3 days", owner_role: Support lead, phase: hypercare, status: open}
  - {id: R08, signal_ids: [S6], threshold: "M2 falls 2 weeks after week 3", owner_role: Change lead, phase: reinforce, status: open}
  - {id: R10, signal_ids: [S10], threshold: "CRM upgrade slips into April", owner_role: PMO, phase: plan, status: open}
  - {id: R11, signal_ids: [S12], threshold: "2+ champion drop-outs per wave", owner_role: Champion lead, phase: launch, status: open}
  - {id: R12, signal_ids: [S7], threshold: "no outcome data by W1 T+4", owner_role: Senior TPM, phase: all, status: open}
  - {id: R13_A07, signal_ids: [S13], threshold: "consult not held by T-8", owner_role: Legal HR partner, phase: plan, status: open}
  - {id: A01, signal_ids: [S2], threshold: "any DLP alert; policy questions 5+ a week", owner_role: Security lead, phase: launch, status: open}
  - {id: A02, signal_ids: [S2], threshold: "fear themes 3+ a week", owner_role: VP Support, phase: launch, status: open}
  - {id: A03, signal_ids: [S6], threshold: "M3 > 0.80 before day 21", owner_role: Platform owner, phase: launch, status: open}
  - {id: A04, signal_ids: [S1], threshold: "wrong-answer posts 3+ a week", owner_role: Product owner, phase: launch, status: open}
  - {id: A05, signal_ids: [S2], threshold: "can-I-use-X 3+ a week", owner_role: Security lead, phase: all, status: open}
  - {id: A06, signal_ids: [S6], threshold: "80%+ requests one task type", owner_role: Enablement lead, phase: reinforce, status: open}
  - {id: A08, signal_ids: [S6], threshold: "quota complaints from one segment", owner_role: Platform owner, phase: launch, status: open}
comms:
  - {id: C1, week: T-8, audience: all, channel: all-hands, sender_role: CTO, owner_role: Change lead}
  - {id: C2, week: T-6, audience: pilot managers, channel: manager meeting, sender_role: Senior TPM, owner_role: Change lead}
  - {id: C3, week: T-4, audience: pilot, channel: email, sender_role: managers, owner_role: Change lead}
  - {id: C4, week: T-1, audience: pilot, channel: "#ai-announcements", sender_role: Senior TPM, owner_role: Change lead}
  - {id: C5, week: T0, audience: pilot, channel: "#ai-announcements", sender_role: CTO, owner_role: Change lead}
  - {id: C6, week: T+1..T+8, audience: pilot, channel: "#ai-help", sender_role: Senior TPM, owner_role: Change lead}
  - {id: C7, week: W1 T-2, audience: eng and prod managers, channel: manager meeting, sender_role: VP Engineering and CPO, owner_role: Change lead}
  - {id: C8, week: W1 T0, audience: [eng, prod], channel: "email, #ai-announcements", sender_role: VP Engineering and CPO, owner_role: Change lead}
  - {id: C9, week: W2 T-4, audience: supp, channel: team meeting, sender_role: VP Support with HR, owner_role: HR partner}
  - {id: C10, week: W2 T-2, audience: sales managers, channel: leadership call, sender_role: CRO, owner_role: Change lead}
  - {id: C11, week: W2 T0, audience: [sales, supp], channel: "email, #ai-announcements", sender_role: CRO and VP Support, owner_role: Change lead}
  - {id: C12, week: W2 T+3, audience: all, channel: "#ai-announcements", sender_role: segment leads, owner_role: Change lead}
decisions:
  - {id: D1, owner_role: Platform owner, due: 2026-11-27, status: open}
  - {id: D2, owner_role: Platform owner, due: 2026-11-27, status: open}
  - {id: D3, owner_role: Legal HR partner, due: 2026-11-13, status: open}
  - {id: D4, owner_role: VP Support, due: 2027-03-15, status: open}
  - {id: D5, owner_role: Security lead, due: 2027-03-01, status: open}
  - {id: D6, owner_role: Senior TPM, due: 2026-11-20, status: open}
```
