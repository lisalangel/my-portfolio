# Example 2 (short): ITSM replacement, mandatory (EXAMPLE)
Short-form test of the replacement and mandatory branches. All values are EXAMPLE or [ASSUMPTION].

**Intake (condensed):** Legacy ITSM to new ITSM. Replacing; mandatory; workflow-changing for 300 IT agents, additive for 8,000 requesters. Contract on legacy ends 2027-06-30. Migration: open tickets, 3 years of closed tickets, CMDB, KB. SSO via IdP. EU works council. Fiscal close in first week of each quarter.

## 1. One-page summary
**In short:** Move all IT agents and requesters to the new ITSM on 2027-04-17 (Saturday cutover), legacy read-only the same day, decommissioned 2027-06-25 before contract end.
- Tier T1 (mandatory, workflow-changing, data migration). Approach: agent pilot (one regional desk, 40 agents) from 2027-03-01, then big bang for requesters because ticket routing cannot run in two tools (reason recorded).
- Gates: G1 readiness 04-02, G2 rehearsal review 04-09, G3 final go/no-go 04-16 18:00, point of no return 04-17 14:00, hypercare exit about 05-28.

## 2. Branches applied by the skill
| Branch | What it added |
|---|---|
| Replacing | Migration plan: 3 mock loads (02-13, 03-13, 04-03), reconciliation 99.5% on open tickets and CMDB CIs as GNG-3; "what moves, what stays" message (closed tickets older than 3 years stay in archive); old portal links redirect from 04-17; legacy read-only 04-17, decommission 06-25, archive owner IT records lead. Risks R04, R09. |
| Mandatory | Enforcement: legacy email-to-ticket intake switched off at cutover; old portal read-only. Grace: requesters can view legacy tickets until 06-25. Exceptions: none for agents; requester exceptions via service desk lead. Date communicated at T-6, T-4, T-2, T-1, T0. Risk R18. |
| Workflow-changing (agents) | Role labs by queue (L1, L2, change managers); proficiency check (5 core tasks in sandbox) required for access; SOPs updated; process owner sign-off as RC-P1. Risk R20 with planned 2-week dip. |
| Additive (requesters) | 3-min clip and portal banner; no training required. |

## 3. Cutover runbook outline
| Step | Task | Owner | When | Verify | Rollback step |
|---|---|---|---|---|---|
| CR-1 | Freeze config; confirm rota; final comms | Release manager | 04-10 to 04-16 | Rota signed | n/a |
| CR-2 | Legacy to read-only; final extract | ITSM admin | 04-17 06:00 | Extract counts logged | Re-open legacy |
| CR-3 | Load, reconcile, smoke test 20 scripts | Data lead | 06:00 to 13:00 | 99.5% reconcile; tests pass | Restore legacy writes |
| CR-4 | Point of no return decision | CIO (sponsor) | 14:00 | Logged with approver | Last chance to roll back |
| CR-5 | Enable SSO groups; redirect portal and email | Identity lead | 14:00 to 16:00 | Test users route correctly | Roll forward only |
| CR-6 | Command center live 72h | Support lead | 04-17 to 04-20 | Hourly checkpoints | Roll forward only |
Rollback triggers before CR-4: reconciliation under 99.5% on open tickets, any sev-1 in smoke tests, routing failure. Decision owner CIO within 1 hour.

## 4. Hypercare and metrics (condensed)
- 6 weeks hypercare [default T1 4 to 12]. Command center week 1, daily standup weeks 1 to 4.
- Leading: agent proficiency pass 95% before access; tickets misrouted under 2%; legacy logins (should fall to 0 except read-only lookups); requester portal tickets vs email.
- Lagging and outcome: mean time to resolve back to baseline by week 4 (dip planned, R20); SLA breach rate; CSAT.
- Exit: MTTR within 10% of baseline for 2 weeks; no sev-1/sev-2; misroutes under 1%.

## 5. Top risks selected
R01, R02, R04, R05 (fiscal close avoided by mid-month date), R06, R07, R09, R12, R13 (works council: agent activity data), R17 (integrations with HR and asset tools), R18, R19 (role-based ticket visibility), R20.

## 6. What this example tested
Replacement and mandatory branches fired correctly; big bang was allowed only with a stated reason; rollback has a point of no return. Full tables and plan data omitted here to save tokens; a real run produces the full template.
