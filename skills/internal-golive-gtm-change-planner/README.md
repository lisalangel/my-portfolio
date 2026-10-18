# Internal Go-Live, GTM and Change Planner

This skill covers go-live readiness, internal go-to-market, and change management for rolling internal software out to employees. AI is a conditional add-on: load `modules/ai-addon.md` only when the tool is an AI tool or has AI features.

## Modes

- **plan:** the default. Collect intake, apply the decision rules, and deliver one integrated plan plus machine-readable plan data.
- **revise:** start from an approved plan and a drift report, then propose a minimal diff. The approved plan stays as it is until a human approves each change.

## File map

| Path | What it is |
| --- | --- |
| `SKILL.md` | Skill instructions: intake, decision rules, output, revise mode, and the quality check. |
| `risk-library.md` | Risk catalog with triggers, signals, mitigations, owners, and phases. |
| `checklists.md` | Readiness by workstream, go/no-go, cutover runbook, hypercare, and rollback. |
| `modules/ai-addon.md` | Conditional add-on for AI tools and AI features. |
| `templates/plan-template.md` | Fixed structure for the plan. |
| `templates/plan-data.schema.yaml` | Shape of the machine-readable plan data. |
| `templates/drift-diff-template.md` | Output structure for revise mode. |
| `examples/` | Sample inputs, a full plan, a drift report, and a revise output. These use EXAMPLE data. |

## Quick start

```text
Use the internal-golive-gtm-change-planner skill to plan the rollout of <tool> to <audience>
```
