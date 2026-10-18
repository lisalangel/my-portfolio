# Plan change proposal (revise mode test output)
Plan ai-platform-rollout v0.3 (APPROVED) | Drift report 2027-02-01 | Status: PENDING_APPROVAL
**In short:** 3 changes proposed, 2 within tolerance or on watch. The approved plan is unchanged until a human approves each change.

## Drift summary
| Signal id | Plan expected | Observed | Classification |
|---|---|---|---|
| S3 / M5 | Median < 24h, act > 48h | 61h | Breach |
| S6 / M3 (eng) | Act if > 80% before day 21 | 84% on day 18 | Breach |
| S2 (supp) | Act at 3+ fear themes a week | 4 | Breach |
| S2 (sales) | Act at 3+ | 1 | Within tolerance |
| S6 / M2 (prod) | Target 50% by T+6w | 52% at T+4w | Within tolerance |

## Proposed changes
| Change id | Section and item id | Before | After | Reason (evidence) | Impact | Confidence |
|---|---|---|---|---|---|---|
| P1 | 5 Readiness, R03 mitigation | Self-serve form; manual issue | Auto-issue keys to pilot IdP group; form only for exceptions | M5 61h vs 48h threshold (S3, 7 days) | Removes key queue before W1; IT identity lead effort about 1 day [ESTIMATE] | High |
| P2 | 9 Support / A03 | Haiku default; Opus on request | Add Sonnet daily cap per Engineering user; publish limits in #ai-help | M3 84% on day 18 (S6) | Prevents cap breach this month; may raise M4 quota errors | Medium |
| P3 | 6 Comms, add row C13 | No Support row before W2 T-4 | Add VP Support and HR Q&A for the Support pilot squad in week 5 | 4 fear posts in 7 days (S2, squad of 40, above group-of-5 floor) | Pulls A02 mitigation forward 6 weeks | Medium |

## Watch items (no change proposed)
| Signal id | Why not acting yet | Recheck date |
|---|---|---|
| S2 (sales) | Below threshold, one post | 2027-02-08 |

## Approval
| Change id | Approve / Reject / Edit | Approver role | Date |
|---|---|---|---|
| P1 | | Senior TPM | |
| P2 | | Platform owner | |
| P3 | | Senior TPM | |
