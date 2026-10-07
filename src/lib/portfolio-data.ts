export type LibraryItem = {
  title: string;
  summary: string;
  category: string;
  tags: string[];
  status: "Available" | "Coming soon";
  prompt?: string;
};

export const prompts: LibraryItem[] = [
  {
    title: "Weekly impact report",
    summary: "Summarize accomplishments, decisions, mitigated risks, and strategic contributions.",
    category: "Weekly planning",
    tags: ["Weekly review", "Executive updates"],
    status: "Available",
    prompt:
      "Review my work from the past 7 days including meetings, emails, chats, documents, and collaborative activities.\n\nIdentify:\n- Key accomplishments\n- Decisions I drove\n- Risks I mitigated\n- Cross-functional alignment I created\n- Strategic contributions\n- Stakeholder relationships I strengthened\n\nCreate an executive-ready summary that I can use for status updates, performance discussions, and career conversations.\n\nPrioritize impact over activity.",
  },
  {
    title: "Promotion evidence tracker",
    summary: "Group concrete examples of leadership and organizational impact by competency.",
    category: "Career growth",
    tags: ["Promotion", "Evidence"],
    status: "Available",
    prompt:
      "Review my work from the past 30 days.\n\nIdentify examples where my work demonstrates:\n- Leadership\n- Influence without authority\n- Strategic thinking\n- Organizational impact\n- Cross-team collaboration\n- Executive communication\n- Operational excellence\n\nGroup the evidence by competency and provide specific examples.",
  },
  {
    title: "What did I actually accomplish?",
    summary: "Separate high-impact outcomes from operational and administrative work.",
    category: "Weekly planning",
    tags: ["Time allocation", "Impact"],
    status: "Available",
    prompt:
      "Review my activities from the last 7 days.\n\nSeparate my work into:\n1. High-impact outcomes\n2. Operational work\n3. Strategic work\n4. Stakeholder management\n5. Administrative work\n\nEstimate where I spent most of my time and identify opportunities to shift more effort toward strategic impact.",
  },
  {
    title: "Executive presence coach",
    summary: "Review communication strengths and develop clearer, more strategic messages.",
    category: "Leadership",
    tags: ["Communication", "Executive presence"],
    status: "Available",
    prompt:
      "Review emails, chats, meeting participation, and documents from the past 30 days.\n\nAnalyze my communication style.\n\nIdentify:\n- Strengths\n- Areas for improvement\n- Opportunities to be more concise\n- Opportunities to be more strategic\n- Opportunities to increase executive presence\n\nProvide examples and revised versions of communications where appropriate.",
  },
  {
    title: "Stakeholder influence analysis",
    summary: "Identify relationship strengths, engagement gaps, and next actions.",
    category: "Leadership",
    tags: ["Stakeholders", "Alignment"],
    status: "Available",
    prompt:
      "Review my meetings, emails, chats, and collaborative work over the last 30 days.\n\nIdentify:\n- Key stakeholders I interact with most frequently\n- Relationships that appear strong\n- Relationships that may need more engagement\n- Opportunities to expand influence\n- Opportunities to improve alignment\n\nProvide recommended actions for the next 2 weeks.",
  },
  {
    title: "Meeting effectiveness review",
    summary: "Assess meeting impact, open actions, and opportunities to reclaim time.",
    category: "Weekly planning",
    tags: ["Meetings", "Productivity"],
    status: "Available",
    prompt:
      "Review all meetings from the past 2 weeks.\n\nIdentify:\n- Meetings where I had the greatest impact\n- Meetings where I primarily consumed information\n- Recurring themes and risks\n- Action items that remain open\n- Opportunities to improve meeting effectiveness\n\nRecommend meetings that could be shortened, delegated, or eliminated.",
  },
  {
    title: "TPM health check",
    summary: "Examine the balance between execution, strategy, risk, and operational work.",
    category: "Program health",
    tags: ["Time allocation", "TPM"],
    status: "Available",
    prompt:
      "Review my recent work and identify the balance between:\n\n- Program execution\n- Strategic planning\n- Stakeholder management\n- Risk management\n- Team coordination\n- Escalation management\n- Operational work\n\nIdentify where I am overinvesting and underinvesting my time.",
  },
  {
    title: "Growth-to-next-level analysis",
    summary: "Compare demonstrated work with documented next-level expectations.",
    category: "Career growth",
    tags: ["Growth", "Role expectations"],
    status: "Available",
    prompt:
      "Compare my recent work to the expectations documented in the next level role description.\n\nIdentify:\n- Areas where my demonstrated work aligns with next-level expectations\n- Areas where additional evidence would strengthen alignment\n- Projects that could increase my scope and impact\n- Skills I should develop\n- Leadership opportunities I should pursue\n\nProvide concrete recommendations for this week, this month, and this quarter.",
  },
  {
    title: "Blind spot finder",
    summary: "Surface overlooked responsibilities, emerging risks, and untapped opportunities.",
    category: "Program health",
    tags: ["Blind spots", "Risk"],
    status: "Available",
    prompt:
      "Review my activities from the last 30 days.\n\nBased on how I spend my time, identify:\n- Potential blind spots\n- Responsibilities receiving limited attention\n- Stakeholder groups I engage with less frequently\n- Risks that may be emerging\n- Opportunities that I may not be leveraging\n\nProvide recommendations to address each observation.",
  },
  {
    title: "My personal chief of staff",
    summary:
      "Turn the past week’s accomplishments and unfinished work into next week’s priorities.",
    category: "Weekly planning",
    tags: ["Follow-ups", "Priorities"],
    status: "Available",
    prompt:
      "Act as my Chief of Staff.\n\nReview my work from the last 7 days.\n\nIdentify:\n- Accomplishments\n- Unfinished work\n- Important follow-ups\n- Stakeholder touchpoints\n- Escalations I should consider\n- Decisions that need closure\n\nCreate a prioritized action plan for the next week.",
  },
  {
    title: "Career coach prompt",
    summary: "Find strengths and choose what to stop, delegate, automate, learn, and amplify.",
    category: "Career growth",
    tags: ["Coaching", "Growth"],
    status: "Available",
    prompt:
      "Act as my career coach.\n\nReview my work from the last 30 days.\n\nIdentify recurring strengths, demonstrated competencies, leadership behaviors, and growth opportunities.\n\nRecommend:\n- One thing to stop doing\n- One thing to delegate\n- One thing to automate\n- One thing to learn\n- One thing to double down on\n\nExplain why each recommendation will increase my impact.",
  },
  {
    title: "Build my self-review",
    summary: "Create an evidence-based self-review centered on outcomes and organizational impact.",
    category: "Career growth",
    tags: ["Performance review", "Evidence"],
    status: "Available",
    prompt:
      "Review my work from the last 6 months.\n\nCreate a self-review organized by:\n\n- Impact\n- Results\n- Leadership\n- Collaboration\n- Innovation\n- Business outcomes\n\nInclude specific evidence and examples from my work.\n\nPrioritize measurable outcomes and organizational impact.",
  },
  {
    title: "Strategic TPM gap analysis",
    summary: "Identify reactive patterns and opportunities to increase strategic leverage.",
    category: "Leadership",
    tags: ["Strategy", "Organizational impact"],
    status: "Available",
    prompt:
      "Review my work from the past 30 days including meetings, emails, chats, documents, project artifacts, and decisions.\n\nIdentify:\n\n- Problems I am reacting to\n- Problems I am proactively addressing\n- Strategic opportunities I may be missing\n- Risks that have not yet been escalated\n- Dependencies that may become blockers\n- Areas where additional leadership attention would create leverage\n\nAct as a Principal TPM reviewing my work and identify where I could increase organizational impact.\n\nFocus on influence, scale, and business outcomes rather than activity volume.",
  },
  {
    title: "Am I thinking big enough?",
    summary: "Explore broader scope, cross-team impacts, and long-term opportunities.",
    category: "Career growth",
    tags: ["Scope", "Strategic thinking"],
    status: "Available",
    prompt:
      "Review the programs and initiatives I have worked on during the last 30 days.\n\nFor each major initiative identify:\n\n- Tactical activities\n- Strategic opportunities\n- Organizational implications\n- Executive concerns\n- Cross-team impacts\n- Long-term risks\n\nExplain how a Director or Principal TPM might approach the same work differently.\n\nIdentify opportunities where I can expand scope beyond my current execution responsibilities.",
  },
  {
    title: "Influence without authority assessment",
    summary: "Review how data, relationships, and alignment influence outcomes.",
    category: "Leadership",
    tags: ["Influence", "Collaboration"],
    status: "Available",
    prompt:
      "Review my meetings, emails, chats, and collaborative work.\n\nIdentify examples where I influenced outcomes through:\n\n- Data\n- Relationships\n- Communication\n- Alignment\n- Negotiation\n- Consensus building\n\nAlso identify situations where I appeared to rely primarily on positional authority, escalation, or process.\n\nRecommend ways to increase influence without authority.",
  },
  {
    title: "Executive readiness prompt",
    summary: "Review communications through an executive lens with before-and-after examples.",
    category: "Leadership",
    tags: ["Executive presence", "Communication"],
    status: "Available",
    prompt:
      "Review my communications during the last 30 days.\n\nAnalyze how an executive audience would perceive:\n\n- My written communication\n- Meeting contributions\n- Project updates\n- Presentations\n- Escalations\n\nIdentify opportunities to:\n\n- Be more strategic\n- Reduce detail\n- Increase business context\n- Improve executive presence\n\nProvide before-and-after examples where appropriate.",
  },
  {
    title: "Hidden risk discovery",
    summary: "Surface unspoken risks and rank their potential impact and likelihood.",
    category: "Program health",
    tags: ["Risk", "Dependencies"],
    status: "Available",
    prompt:
      "Review all meetings, chats, emails, documents, and decisions from the past 30 days.\n\nIdentify:\n\n- Risks being discussed\n- Risks implied but not discussed\n- Dependency risks\n- Organizational risks\n- Communication risks\n- Delivery risks\n\nRank them by potential impact and likelihood.\n\nExplain why each risk should matter to leadership.",
  },
  {
    title: "Program health inspector",
    summary: "Assess goals, ownership, dependencies, and decision velocity across programs.",
    category: "Program health",
    tags: ["Program review", "Corrective actions"],
    status: "Available",
    prompt:
      "Review all programs I worked on during the last month.\n\nFor each program assess:\n\n- Goals\n- Success criteria\n- Stakeholder alignment\n- Risks\n- Dependencies\n- Ownership clarity\n- Decision velocity\n\nIdentify signs that the program is healthy, stalled, or at risk.\n\nRecommend corrective actions.",
  },
  {
    title: "Decision-making effectiveness",
    summary: "Identify delayed decisions, ownership gaps, and decision-making bottlenecks.",
    category: "Program health",
    tags: ["Decisions", "Ownership"],
    status: "Available",
    prompt:
      "Review my meetings, chats, emails, and documents.\n\nIdentify:\n\n- Decisions made\n- Decisions delayed\n- Decisions lacking ownership\n- Decisions lacking data\n\nHighlight bottlenecks and decision-making patterns.\n\nRecommend actions to improve organizational decision velocity.",
  },
  {
    title: "What is consuming my time?",
    summary: "Estimate time distribution and reduce low-leverage activities.",
    category: "Weekly planning",
    tags: ["Time allocation", "Strategy"],
    status: "Available",
    prompt:
      "Review my work from the past 2 weeks.\n\nCategorize activities into:\n\n- Strategy\n- Planning\n- Execution\n- Stakeholder management\n- Operational work\n- Administrative work\n- Firefighting\n\nEstimate my time distribution.\n\nRecommend how I can increase strategic work and reduce low-leverage activities.",
  },
  {
    title: "Stakeholder power map",
    summary: "Map stakeholder influence, interaction frequency, and relationship strength.",
    category: "Leadership",
    tags: ["Stakeholders", "Influence"],
    status: "Available",
    prompt:
      "Review my interactions over the past 30 days.\n\nIdentify:\n\n- Stakeholders I work with most\n- Stakeholders influencing program success\n- Stakeholders influencing resource decisions\n- Stakeholders influencing strategic direction\n\nCreate a stakeholder map showing:\n\n- Influence level\n- Interaction frequency\n- Relationship strength\n\nRecommend actions to strengthen critical relationships.",
  },
  {
    title: "Escalation review",
    summary: "Review escalation patterns and establish earlier warning signals.",
    category: "Program health",
    tags: ["Escalations", "Risk"],
    status: "Available",
    prompt:
      "Review all risks, issues, blockers, and escalations from the last month.\n\nIdentify:\n\n- Escalations handled well\n- Escalations delayed\n- Escalations avoided\n- Risks that should have been escalated earlier\n\nExplain what signals I should watch for in the future.\n\nRecommend a personal escalation framework.",
  },
  {
    title: "TPM leadership scorecard (alignment version)",
    summary: "Gather evidence of leadership competencies without reducing growth to a rating.",
    category: "Career growth",
    tags: ["Leadership", "Evidence"],
    status: "Available",
    prompt:
      "Review my work from the last 30 days.\n\nIdentify evidence of:\n\n- Ownership\n- Leadership\n- Strategic thinking\n- Customer focus\n- Influence\n- Execution excellence\n- Organizational awareness\n- Talent development\n- Innovation\n\nFor each category provide:\n- Supporting evidence\n- Impact created\n- Additional evidence that would strengthen alignment",
  },
  {
    title: "Executive narrative builder",
    summary: "Create a concise narrative about decisions, business impact, and reduced risk.",
    category: "Leadership",
    tags: ["Executive updates", "Outcomes"],
    status: "Available",
    prompt:
      "Review my work over the past month.\n\nCreate a concise executive narrative that answers:\n\n- What problems did I solve?\n- What decisions did I drive?\n- What business impact did I create?\n- How did I reduce risk?\n- How did I increase alignment?\n- What changed because of my work?\n\nFocus on outcomes, not activities.",
  },
  {
    title: "Technical TPM architecture influence review",
    summary:
      "Identify contributions to architecture, scalability, reliability, and engineering direction.",
    category: "Technical strategy",
    tags: ["Architecture", "Technical leadership"],
    status: "Available",
    prompt:
      "Review my technical discussions, meetings, emails, chats, and documents.\n\nIdentify evidence that I contributed to:\n\n- Architecture decisions\n- Technology strategy\n- Technical tradeoff discussions\n- Platform scalability\n- Reliability\n- Security\n- Operational excellence\n\nHighlight areas where I influenced engineering direction versus where I primarily coordinated work.\n\nRecommend opportunities to increase technical leadership.",
  },
  {
    title: "Program portfolio optimization",
    summary:
      "Find high-impact programs, duplicate efforts, and opportunities to delegate or automate.",
    category: "Program health",
    tags: ["Portfolio", "Automation"],
    status: "Available",
    prompt:
      "Review every initiative, project, workstream, and meeting from the last 30 days.\n\nIdentify:\n\n- High-impact programs\n- Low-value activities\n- Duplicate efforts\n- Work that could be delegated\n- Work that could be automated\n\nRecommend where I should focus more attention and where I should reduce involvement.",
  },
  {
    title: "Chief of staff for a TPM",
    summary:
      "Build a focused plan for priorities, leadership opportunities, risks, and conversations.",
    category: "Weekly planning",
    tags: ["Priorities", "Leadership"],
    status: "Available",
    prompt:
      "Act as the Chief of Staff for a senior technical leader.\n\nReview my last 14 days of work.\n\nIdentify:\n\n- Most important accomplishments\n- Top risks\n- Critical follow-ups\n- Stakeholders needing engagement\n- Strategic opportunities\n- Decisions requiring attention\n- Executive visibility opportunities\n\nCreate:\n\n1. Top 5 priorities for next week\n2. Top 3 leadership opportunities\n3. Top 3 risks to address\n4. Top 3 conversations I should have\n5. One bold recommendation that would significantly increase my impact",
  },
  {
    title: "Ultimate Friday prompt",
    summary:
      "Combine a weekly impact report, strategic insights, blind spots, and growth recommendations.",
    category: "Weekly planning",
    tags: ["Weekly review", "Career growth"],
    status: "Available",
    prompt:
      "Act as a Principal TPM, Chief of Staff, and Career Coach.\n\nReview all of my work from the last 7 days including meetings, transcripts, emails, chats, documents, presentations, decisions, project artifacts, and stakeholder interactions.\n\nIdentify:\n\n- My top accomplishments\n- Key decisions I influenced\n- Risks I mitigated\n- Strategic contributions\n- Next-level leadership behaviors\n- Opportunities to increase organizational impact\n- Stakeholders requiring attention\n- Risks I may not see\n- Work that should be delegated\n- High-leverage actions for next week\n\nCreate:\n\n1. Executive Summary\n2. Weekly Impact Report\n3. Strategic Insights\n4. Leadership Opportunities\n5. Blind Spots\n6. Top 5 Priorities for Next Week\n7. 30-Day Growth Recommendations\n\nPrioritize impact, influence, business outcomes, and organizational leverage over activity volume.",
  },
  {
    title: "Requirement gap hunter",
    summary: "Find missing or ambiguous requirements and generate clarification questions.",
    category: "Requirements",
    tags: ["Live meetings", "Clarification"],
    status: "Available",
    prompt:
      "Analyze the requirements being discussed in this meeting.\n\nIdentify:\n- Missing requirements\n- Ambiguous requirements\n- Unclear terminology\n- Conflicting requirements\n- Hidden assumptions\n- Areas requiring additional clarification\n\nFor each item, provide a question I should ask the group.",
  },
  {
    title: "TPM red team",
    summary: "Challenge assumptions and surface operational, technical, and security concerns.",
    category: "Requirements",
    tags: ["Risk", "Assumptions"],
    status: "Available",
    prompt:
      "Act as a Principal TPM reviewing these requirements.\n\nChallenge every assumption.\n\nIdentify:\n- Risks\n- Missing scenarios\n- Operational concerns\n- Scalability concerns\n- Reliability concerns\n- Security considerations\n- Supportability concerns\n\nGenerate the toughest questions that should be answered before implementation begins.",
  },
  {
    title: "Edge case generator",
    summary: "Explore failure scenarios, unexpected behavior, and partial-success cases.",
    category: "Requirements",
    tags: ["Edge cases", "Reliability"],
    status: "Available",
    prompt:
      "Based on the requirements discussed so far, identify edge cases the team has not considered.\n\nFocus on:\n- Large-scale usage\n- Failure scenarios\n- Unexpected user behavior\n- Dependency failures\n- Data corruption\n- Service outages\n- Partial success scenarios\n\nPresent each edge case as a question for discussion.",
  },
  {
    title: "User story completeness review",
    summary: "Check user stories, personas, workflows, and acceptance criteria for gaps.",
    category: "Requirements",
    tags: ["User stories", "Acceptance criteria"],
    status: "Available",
    prompt:
      "Review the requirements discussed in this meeting.\n\nIdentify:\n\n- Missing user stories\n- Missing acceptance criteria\n- Missing success criteria\n- Missing personas\n- Missing workflows\n\nProvide recommendations to improve completeness.",
  },
  {
    title: "Non-functional requirements review",
    summary: "Check requirements for reliability, latency, security, observability, and recovery.",
    category: "Technical strategy",
    tags: ["Non-functional requirements", "Reliability"],
    status: "Available",
    prompt:
      "Review the requirements discussed so far.\n\nIdentify whether requirements exist for:\n\n- Availability\n- Reliability\n- Scalability\n- Latency\n- Security\n- Compliance\n- Monitoring\n- Observability\n- Disaster recovery\n- Supportability\n\nHighlight any gaps.",
  },
  {
    title: "Scope creep detector",
    summary: "Distinguish explicit and implicit scope and clarify out-of-scope requests.",
    category: "Requirements",
    tags: ["Scope", "Boundaries"],
    status: "Available",
    prompt:
      "Review the meeting discussion.\n\nIdentify:\n\n- Explicit scope\n- Implicit scope\n- Scope creep risks\n- Out-of-scope requests\n\nSuggest wording to clarify scope boundaries.",
  },
  {
    title: "Architecture impact review",
    summary: "Surface potential impacts on APIs, data models, performance, cost, and scalability.",
    category: "Technical strategy",
    tags: ["Architecture", "Platform"],
    status: "Available",
    prompt:
      "Review the requirements being discussed.\n\nIdentify potential impacts to:\n\n- Architecture\n- APIs\n- Data models\n- Reliability\n- Performance\n- Cost\n- Security\n- Platform scalability\n\nHighlight areas requiring architecture review.",
  },
  {
    title: "Stakeholder missing check",
    summary: "Identify impacted teams and stakeholders missing from the discussion.",
    category: "Requirements",
    tags: ["Stakeholders", "Alignment"],
    status: "Available",
    prompt:
      "Based on the meeting discussion, identify:\n\n- Teams likely impacted\n- Stakeholders not represented\n- Customers affected\n- Service owners affected\n- Operational teams affected\n\nRecommend additional stakeholders who should review these requirements.",
  },
  {
    title: "Dependency discovery prompt",
    summary:
      "Identify technical, team, process, and external dependencies that may delay delivery.",
    category: "Requirements",
    tags: ["Dependencies", "Delivery risk"],
    status: "Available",
    prompt:
      "Review the requirements and discussion.\n\nIdentify:\n\n- Technical dependencies\n- Team dependencies\n- Process dependencies\n- Operational dependencies\n- External service dependencies\n\nRate each dependency by risk and likelihood of causing delays.",
  },
  {
    title: "Decision tracker",
    summary: "Capture decisions, owners, alternatives, risks, and unresolved topics.",
    category: "Requirements",
    tags: ["Decisions", "Live meetings"],
    status: "Available",
    prompt:
      "Track decisions made during this meeting.\n\nFor each decision capture:\n\n- Decision\n- Decision owner\n- Reasoning\n- Alternatives considered\n- Risks introduced\n- Follow-up actions\n\nAlso identify topics that remain unresolved.",
  },
  {
    title: "Requirements quality review",
    summary: "Evaluate clarity, testability, measurability, and traceability.",
    category: "Requirements",
    tags: ["Quality", "Traceability"],
    status: "Available",
    prompt:
      "Evaluate the requirements discussed against the following criteria:\n\n- Clear\n- Testable\n- Measurable\n- Implementable\n- Unambiguous\n- Traceable\n\nIdentify requirements that need improvement and explain why.",
  },
  {
    title: "Executive lens",
    summary: "Generate leadership questions about customer impact, business value, cost, and risk.",
    category: "Leadership",
    tags: ["Business value", "Requirements"],
    status: "Available",
    prompt:
      "Based on the requirements being discussed, identify what concerns a VP, Director, or GM would likely raise.\n\nFocus on:\n\n- Customer impact\n- Business value\n- Risk\n- Cost\n- Time to market\n- Scalability\n- Operational burden\n\nGenerate questions leadership might ask.",
  },
  {
    title: "What are we not talking about?",
    summary: "Find overlooked topics such as governance, adoption, support, and rollout.",
    category: "Requirements",
    tags: ["Blind spots", "Governance"],
    status: "Available",
    prompt:
      "Review the discussion up to this point.\n\nIdentify important topics that have not been discussed but should be.\n\nConsider:\n\n- Security\n- Operations\n- Cost\n- Telemetry\n- Monitoring\n- Governance\n- Compliance\n- User adoption\n- Support\n- Rollout strategy\n\nExplain why each topic matters.",
  },
  {
    title: "PRD builder",
    summary:
      "Draft a product requirements document from the discussion and highlight open questions.",
    category: "Requirements",
    tags: ["PRD", "Documentation"],
    status: "Available",
    prompt:
      "Create a draft Product Requirements Document based on the discussion so far.\n\nInclude:\n\n- Problem statement\n- Goals\n- Non-goals\n- Requirements\n- Assumptions\n- Risks\n- Dependencies\n- Open questions\n- Decisions\n\nHighlight areas requiring clarification.",
  },
  {
    title: "Meeting co-pilot (my favorite)",
    summary: "Maintain a running view of requirements, decisions, risks, and follow-up questions.",
    category: "Requirements",
    tags: ["Live meetings", "TPM"],
    status: "Available",
    prompt:
      "Act as a Principal Technical Program Manager.\n\nContinuously analyze this requirements discussion and maintain:\n\n1. Key requirements\n2. Decisions made\n3. Open questions\n4. Risks\n5. Dependencies\n6. Assumptions\n7. Missing stakeholders\n8. Scope changes\n9. Technical concerns\n10. Recommended follow-up questions\n\nWhenever you identify ambiguity, generate a concise question I can ask the group to improve the quality of the requirements.",
  },
  {
    title: "Project failure risk review",
    summary:
      "Identify five overlooked failure risks and define detection, mitigation, and ownership.",
    category: "Requirements",
    tags: ["Risk", "Mitigation"],
    status: "Available",
    prompt:
      "Based on the meeting discussion, identify the 5 things most likely to cause this project to fail.\n\nExplain:\n- Why each risk matters\n- How early the risk can be detected\n- How it can be mitigated\n- Who should own mitigation\n\nFocus on risks that have not been explicitly discussed.",
  },
];

export const skills: LibraryItem[] = [
  {
    title: "AI platform strategy",
    summary: "Connect platform direction to durable operating choices and measurable delivery.",
    category: "Strategy",
    tags: ["AI platforms", "Roadmaps"],
    status: "Coming soon",
  },
  {
    title: "Cross-functional execution",
    summary: "Create the clarity, cadence, and ownership needed to move complex programs forward.",
    category: "Execution",
    tags: ["Dependencies", "Delivery"],
    status: "Coming soon",
  },
  {
    title: "Executive communication",
    summary: "Distill technical complexity into the context and choices leaders need.",
    category: "Leadership",
    tags: ["Narratives", "Decisions"],
    status: "Coming soon",
  },
  {
    title: "Operating system design",
    summary: "Build repeatable mechanisms that make progress visible and decisions easier.",
    category: "Systems",
    tags: ["Rituals", "Governance"],
    status: "Coming soon",
  },
];

export const navItems = [
  { label: "About", to: "/about" },
  { label: "Prompts", to: "/prompt-library" },
  { label: "Skills", to: "/skills-library" },
  { label: "Playbooks", to: "/playbooks" },
  { label: "Case studies", to: "/case-studies" },
  { label: "Substack", to: "/substack" },
  { label: "Contact", to: "/contact" },
] as const;
