# Go-live checklists

Cite items by id in the plan (for example "Gate G2 uses RC-D1 to RC-D3"). Copy only items that apply.

## 1. Readiness by workstream (RC)
| ID | Workstream | Ready when |
|---|---|---|
| RC-T1 | Technical | Production configured; environments frozen; performance tested at peak load |
| RC-T2 | Technical | Integrations tested end to end; monitoring and alerts live |
| RC-D1 | Data | Mock loads done (2+); reconciliation meets threshold on critical objects |
| RC-D2 | Data | Data owners signed off; cleansing complete; cutover load timed |
| RC-A1 | Access and identity | SSO, groups and roles mapped; provisioning dry run passed |
| RC-A2 | Access and identity | Licenses or quotas assigned; deprovisioning of legacy planned |
| RC-P1 | Process | SOPs updated; process owners signed off; controls mapped |
| RC-P2 | Process | Workarounds and manual fallbacks documented |
| RC-E1 | People and enablement | Role training complete to threshold; proficiency checked where workflow-changing |
| RC-E2 | People and enablement | Managers briefed; champions trained and scheduled |
| RC-C1 | Comms | Go-live message, known issues page, and help path published |
| RC-S1 | Support | Service desk scripts, KB articles, routing, and L2/L3 rota ready |
| RC-S2 | Support | Command center staffed (T1); escalation times agreed |
| RC-G1 | Governance and compliance | Security, privacy, legal, works council sign-offs as required |
| RC-G2 | Governance and compliance | Audit evidence captured; change ticket approved |
| RC-L1 | Legacy | Read-only or freeze date set; sunset owner named |

## 2. Go/no-go (GNG)
Run as staged checkpoints: T-2w readiness review, T-1w rehearsal review, T-1d final go/no-go. Decision owner: sponsor on recommendation of program lead.
| ID | Criterion | Typical threshold [ESTIMATE] |
|---|---|---|
| GNG-1 | Open defects | 0 sev-1; sev-2 with workaround and owner |
| GNG-2 | Test results | UAT and regression pass >=95%; integrations 100% critical paths |
| GNG-3 | Data | Reconciliation >=99.5% critical objects; sign-off by data owners |
| GNG-4 | People | Training completion >=80% of wave; managers briefed 100% |
| GNG-5 | Support | Hypercare staffed; scripts live; rota confirmed |
| GNG-6 | Rollback | Rollback plan rehearsed; point of no return defined |
| GNG-7 | Business | No conflict with peak, close, audit; business owners agree |
| GNG-8 | Compliance | All required sign-offs recorded |
Add for optional or AI tools (replace GNG-3 when no migration):
| GNG-9 | Policy | Acceptable use published; approved and banned uses listed |
| GNG-10 | Cost controls | Quotas live; budget alerts tested at 50/80/100% |
| GNG-11 | Listening | Signals flowing from every allowed source in the listening plan |
Scale gate for pilots: expand (targets met), extend (mixed, with fix list), stop (adoption or value below floor).

Outcomes: Go / Go with conditions (named owner and date) / No-go (new date and reason).

## 3. Cutover runbook outline (CR)
- CR-1 Pre-cutover (T-2w to T-1d): freeze changes, final mock, comms to impacted users, confirm rota, backups verified.
- CR-2 Freeze and extract: legacy to read-only, final extract, timestamps logged.
- CR-3 Load and validate: load, reconcile, smoke tests by business testers, sign-off per step.
- CR-4 Point of no return: explicit decision, logged with time and approver.
- CR-5 Enable: switch access, redirect old entry points, go-live message.
- CR-6 Early life (first 72h): command center, hourly then daily checkpoints, known issues page.
Each step: id, task, owner, start, duration, dependency, verification, rollback step.

## 4. Hypercare model (HC)
- HC-1 Duration by tier: T1 4 to 12 weeks, T2 2 to 4, T3 1 to 2 [ESTIMATE].
- HC-2 Tiers: L0 self-serve and champions; L1 service desk; L2 product or config team; L3 vendor or engineering.
- HC-3 Rituals: daily triage standup; daily known-issues update; weekly sponsor summary.
- HC-4 Metrics: ticket volume and themes, first response, time to resolve, backlog, adoption by segment, sentiment.
- HC-5 Exit criteria: tickets back to steady-state baseline for 2 weeks; no open sev-1/sev-2; adoption at target; handover to run team signed.

## 5. Rollback (RB)
- RB-1 Triggers: sev-1 with no workaround beyond N hours; data integrity failure; business process blocked for a critical segment.
- RB-2 Decision owner and time box (for example decide within 2 hours of trigger).
- RB-3 Point of no return: after which roll-forward with fixes is the only path; communicated before cutover.
- RB-4 Steps: re-enable legacy, restore data, reverse integrations, comms to users.
- RB-5 Rehearsed at least once for T1.
- For SaaS or additive tools without data migration, rollback can be "pause rollout and revert access". It still needs RB-1 triggers, RB-2 owner and the user comms. There is no point of no return; say so.
