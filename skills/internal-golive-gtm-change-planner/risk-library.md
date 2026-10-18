# Risk library

Select a risk only when its trigger matches the intake. Tailor the signal to real sources and set a threshold. Default thresholds are `[ESTIMATE]`; replace with baselines when known. Evidence notes point to the research doc sources.

| ID | Risk | Trigger (include when) | Early warning signal (default threshold) | Mitigation | Owner role | Phase |
|---|---|---|---|---|---|---|
| R01 | Weak or absent sponsor | Always for T1/T2 | Sponsor misses 2 updates; no sponsor message by T-2w | Sponsor charter with dated visible acts; peer sponsor coalition | Program lead | Plan |
| R02 | Managers not modeling the change | Workflow-changing or mandatory | Manager kit opened by <60% of managers by T-1w; one org's use >20 pts below average | Brief managers 1w before staff; talking points; use-by-org view for leaders | Change lead | Prepare |
| R03 | Access or licensing friction | New identity, SSO, licenses or provisioning | Access tickets >5% of wave in week 1; activation <70% of licensed at T+2w | Group-based provisioning; self-serve claim; access dry run at T-2w | IT / identity lead | Prepare |
| R04 | Data migration defects | Replacing with data migration | Mock load reconciliation <99.5% on critical objects; open data defects at T-1w | 2+ mock loads; named data owners; reconciliation as go/no-go gate | Data lead | Build, cutover |
| R05 | Weak testing or bad timing | Workflow-changing, integrations, or T1 | UAT pass <95%; any open sev-1; go-live in peak, close or holiday | Dress rehearsal; entry and exit criteria; blackout calendar | Release manager | Cutover |
| R06 | Generic training | Any role-specific workflow | Completion <70% at T-1w; same how-to question 10+ times in week 1 | Role-based micro-training, 3+ formats, real job examples | Enablement lead | Prepare, launch |
| R07 | Under-resourced hypercare | T1/T2 | Open backlog grows 3 days running; first response above SLA | Command center; tiered support; project team on call; exit criteria | Support lead | Hypercare |
| R08 | Novelty drop-off | Optional or additive | Weekly active use falls 2 weeks in a row after week 3 | Reinforcement calendar; embed in workflows; manager check-ins | Change lead | Reinforce |
| R09 | Old tool never retired | Replacing | Legacy logins flat or rising 2w after cutover | Dated read-only and decommission; archive; redirect old links | Product owner | Sunset |
| R10 | Change fatigue | Other changes to same groups in window | 2+ changes land on a group in the same month | Check change calendar; resequence waves; cut non-essential asks | PMO | Plan |
| R11 | Champion burnout | Champion network used | Champion answer time doubles; 2+ drop-outs per wave | Time cap; rotation; recognition; manager agreement | Champion lead | Launch, reinforce |
| R12 | Measurement theater | Always | Only logins reported; no outcome metric by T+4w | Leading, lagging and outcome metrics plus listening | Program lead | All |
| R13 | Legal, works council or regional block | EU or regulated countries; usage telemetry; HR data | Legal questions after T-4w; country exclusions requested | Early consultation; works agreement; aggregate-only reporting | Legal / HR partner | Plan |
| R14 | Low trust or job fear | Automation, AI, monitoring, or headcount context | Repeated "are we allowed" or "will this replace us" questions | Sponsor statement on intent; clear policy; Q&A owned by HR | Sponsor | Plan, launch |
| R15 | Shadow IT or unclear acceptable use | Optional tools, or popular unsanctioned alternatives | Policy questions >5 per week; unsanctioned tool use detected | Publish acceptable use; make sanctioned path the easy path | Security lead | Plan, launch |
| R16 | Seat or usage cost limits | Consumption pricing or capped seats | Spend >80% of period cap before 70% of period; quota errors | Tiered quotas; alerts; published limits; reallocation rule | Platform owner | Launch onward |
| R17 | Integration failure at cutover | Integrations in scope | Interface test failures; error queue growth in rehearsal | Integration test cycle; monitoring; manual fallback per interface | Integration lead | Build, cutover |
| R18 | Enforcement backlash or exception flood | Mandatory | Exception requests >3% of users; escalations to sponsor | Clear exception criteria and owner; grace period; manager pre-brief | Program lead | Cutover |
| R19 | Permission or security misconfiguration | Data with access levels; security tools | Access review findings; users see data outside role | Role mapping review; least-privilege test; security sign-off gate | Security lead | Build |
| R20 | Productivity dip after go-live | Workflow-changing | Cycle time or throughput >15% worse than baseline in week 1 to 2 | Plan dip into targets; floor support; temporary capacity | Process owner | Hypercare |

AI-specific risks (A01 to A08) live in `modules/ai-addon.md`.
