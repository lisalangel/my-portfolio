# Test run notes: rubric critique and skill changes

## Run 1 (plan v0.1, AI platform example) failed these rubric checks
| # | Failure in v0.1 | Skill change made |
|---|---|---|
| 1 | Tier T1 from headcount alone; implied command center and 4 to 12 week hypercare, conflicting with the stated 2 weeks | Tier rules rewritten: T1 only by base rule; modifiers lift T3 to T2. New "hard constraints win" rule with conflict flagging |
| 2 | A comms row used Slack DM, which the intake forbade | New 2.7b channel and listening constraints; rubric check for forbidden channels and human senders |
| 3 | Generic messages ("Draft PRDs faster") and reassurance objections | Message formula with date, task, start step; objection answers must be fact, policy or named commitment |
| 4 | Vague metrics ("Falls 2 weeks"), no outcome metric per segment, "active" undefined | Metric rules: op, value, window; one outcome metric per segment; define active |
| 5 | Triggered risks missing (R01, R12, R13 works council, A01 data leakage); signals with no source | Silent trigger check over the whole library; rubric check for "Always" and legal risks |
| 6 | No plan data block | Plan data made mandatory and never abbreviated |
| 7 | Rollback "pause access" with no trigger or owner; no pilot scale gate | Checklists: GNG-9 to GNG-11 for optional or AI tools, scale gate, SaaS rollback still needs triggers and owner |
| 8 | Single "All" enablement row; no wave dates or per-wave T-minus | One row per segment; per-wave clocks with calendar dates |
| 9 | No way for a monitoring agent to map signals to plan items | New Listening plan section (10b) in the template |

## Run 2 (plan v0.2) remaining failures
| # | Failure | Fix |
|---|---|---|
| 10 | Plan data abbreviated "to save tokens" | Rule: prose may be short, data may not; flow-style one line per item |
| 11 | 7 risks had no signal id (sponsor, managers, timing) | `source: manual` signals with owner and cadence; rubric: every risk links to a signal |
| 12 | Length rule counted YAML | Length rule now excludes plan data |

## Run 3 (v0.3) passes all rubric checks. Known limits
- Outcome targets are [ESTIMATE]; baselines are measured at T-2.
- Revise mode test (example-drift-report.md to example-revise-output.md) added a rule: name knock-on effects and an approver per change.
- ITSM example is short form by design; it checks the replacement and mandatory branches, not full formatting.
