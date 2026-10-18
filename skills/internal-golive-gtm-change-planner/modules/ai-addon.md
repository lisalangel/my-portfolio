# AI add-on module

Load only when the tool is AI or adds AI features. Adds intake questions, decisions, risks, metrics and plan sections. Keep it proportional: an AI feature inside a CRM gets the short version (A-intake 1 to 3, risks A01, A02, A05).

## A-intake (add to Batch 2)
1. Model access path: vendor app, API via gateway, embedded feature. Which models or tiers?
2. Cost model and caps: per seat, per token, budget owner, current spend controls.
3. Data rules: what data may go in, retention, approved use cases, banned uses.
4. Human review rules: where outputs need human sign-off.
5. Telemetry allowed: aggregate only, or per user? Any works council or privacy limits?

## Decision rules
- **Acceptable use first:** publish the AI acceptable use policy before or with launch. No launch without it.
- **Use-case led enablement:** each segment gets 3 to 5 named use cases from its real work, with prompts and examples. Not generic "prompting 101".
- **Training dose:** plan at least several hours of hands-on practice for core segments; research links more training hours to regular use (BCG 2025, see research doc).
- **Cost guardrails:** tiered quotas by segment; route simple tasks to cheaper models; budget alerts at 50/80/100%; publish limits so users are not surprised. Add token or seat spend as a leading metric.
- **Trust work:** sponsor statement on intent (augment, not surveillance or cuts, only if true); HR-owned Q&A on jobs; aggregate-only usage reporting by default.
- **Quality loop:** a feedback path for bad outputs; known-limitations page; human review for named high-risk outputs.
- **Measure value, not logins:** pick 1 to 2 outcome metrics per segment (cycle time, tickets deflected, PR throughput) with baselines.
- **Novelty curve:** plan reinforcement from week 3; refresh use-case library monthly.

## AI risks
| ID | Risk | Early warning signal (default) | Mitigation | Owner role | Phase |
|---|---|---|---|---|---|
| A01 | Data leakage or policy breach | Policy questions >5/week; DLP alerts | AUP; data classification guide; DLP; approved data list | Security lead | Plan, launch |
| A02 | Low trust or job fear | Fear themes in help channel; low pilot volunteers | Sponsor intent statement; HR Q&A; aggregate-only reporting | Sponsor | Plan, launch |
| A03 | Token or seat cost overrun | Spend >80% of cap before 70% of period | Quotas, routing, alerts, reallocation rule | Platform owner | Launch onward |
| A04 | Hallucination or quality incidents | Repeat "wrong answer" reports; rework tickets | Known-limits page; human review rules; feedback loop | Product owner | Launch onward |
| A05 | Shadow AI | Unsanctioned AI tool use; "can I use X" questions | Make sanctioned path easiest; clear list of approved tools | Security lead | All |
| A06 | Shallow, generic use | Most usage in 1 to 2 trivial tasks; flat outcome metrics | Segment use-case library; champions demo real work | Enablement lead | Reinforce |
| A07 | Regulatory exposure (for example EU AI Act literacy duty, works council) | Late legal questions; EU staff excluded | AI literacy training record; works agreement; DPIA | Legal / HR partner | Plan |
| A08 | Uneven access across groups | Use concentrated in one function; quota complaints from others | Quotas by need; wave plan by segment; review monthly | Program lead | Launch onward |

## Plan sections to add
- AI acceptable use summary and data rules (5 bullets max).
- Use-case library per segment (table: segment, use case, model tier, expected outcome).
- Cost guardrails (quotas, alerts, owner).
- AI metrics in plan data: spend vs cap, quota errors, use-case coverage per segment, quality reports.
