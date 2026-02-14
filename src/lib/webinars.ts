
export type Speaker = {
  name: string;
  title: string;
};

export type Webinar = {
  id: string;
  title: string;
  theme: string;
  date: string; // ISO 8601 format
  endDate?: string;
  duration: string;
  overview: string;
  speaker: Speaker;
  registrationLink?: string;
  isSponsored?: boolean;
  badgeText?: string;
};

// Function to get a future date for the countdown timer
const getFutureDate = (daysInFuture: number): string => {
  const date = new Date();
  date.setDate(date.getDate() + daysInFuture);
  date.setHours(10, 0, 0, 0); // Set to 10:00 AM local time
  return date.toISOString();
};


export const webinars: Webinar[] = [
  {
    id: '1',
    title: 'Effective Context Engineering Techniques for AI',
    theme: 'Large Language Models',
    date: '2026-01-29T03:30:00.000Z',
    duration: '30 Minutes',
    overview: `As AI continuously learns, models can lose important context over time. This leads to inconsistent outputs or difficulty reasoning across complex or connected information. Even the most advanced models are prone to misinterpretation or missing key details.

That’s why context engineering is emerging as a critical discipline to shape how AI perceives, recalls, reasons, and explains information. In this webinar, we’ll explain why context provides a vital foundation for trustworthy, accurate, and explainable AI results, and how to build an effective context pipeline. We’ll cover techniques like connected memory, contextual retrieval, and graph-based knowledge representation that enable LLMs to establish reliable connections between information and draw logical conclusions.

You’ll learn:  

- Why AI systems need context to reason reliably and avoid misinterpretation
- How context shapes reasoning, problem solving, and explainability in AI applications
- Practical strategies for designing context pipelines that align AI outputs with real-world knowledge and user intent

Register now to secure your spot.`,
    speaker: {
      name: 'Nyah Macklin',
      title: 'Senior Developer Advocate, Neo4j',
    },
    registrationLink: 'https://go.neo4j.com/WBR-EDU-260129-Context-Engineering-APAC_Registration.html',
  },
  {
    id: '2',
    title: 'Build & Develop with AI Agents: A Cloud Technical Series',
    theme: 'AI Agents & Generative AI',
    date: '2026-01-28T10:00:00.000Z',
    endDate: '2026-01-29T10:00:00.000Z',
    duration: '2-Day Technical Series',
    overview: `Join us for a 2-day technical series on building and developing with AI Agents.

**Day 1 — Build AI Agents (Jan 28):**
Start with a welcome and move into sessions that define and demonstrate agentic systems, vector search, low/no-code customer agents, and a hands-on introduction to Gemini Pro.
Key sessions include:
- AI Agents: the next frontier (Dr. Soujanya Lanka)
- From Prototype to Production: Vertex AI Vector Search 2.0 (Kaz Sato)
- Live Lab — Introduction to Gemini Pro

**Day 2 — Develop with AI Agents (Jan 29):**
Focus shifts to infrastructure, Gemini 3 Pro, developer workflows (Gemini CLI), and live coding labs.
Key sessions include:
- AI-optimised infrastructure (Luka Debeljak)
- Introducing Gemini 3 Pro (Catherine Wang)
- The Future of Coding: Gemini Code Assist & CLI (Paul Datta)
- Live Lab — Vibe Coding and Gemini CLI

This OnBoard edition is ideal for developers, data engineers, cloud architects, and DevOps engineers in APAC with direct access to Google Cloud experts and labs.`,
    speaker: {
      name: 'Google Cloud Experts',
      title: 'Various Speakers & Trainers',
    },
    registrationLink: 'https://cloudonair.withgoogle.com/events/apac-cts-onboard?mkt_tok=ODA4LUdKVy0zMTQAAAGfibSCFqk5vqBNtZTcvLXXNumSwhmsPsxO4PI4xRt-rQlaDXbVrle4_ChPlkKS_4n-vE-cGb9TsoBYFHAlvYeXf6EpotgP394kZT_1UUOwpBE3xKJ0hMk',
  },
  {
    id: '3',
    title: 'How Can Leaders Turn AI from a Buzzword into an Organizational Advantage?',
    theme: 'AI Strategy & Leadership',
    date: '2026-01-28T17:00:00.000Z',
    duration: '60 Minutes',
    overview: `Artificial intelligence is everywhere—but real impact remains elusive for many organizations. In this executive webinar, Professor Zachary Tumin introduces a powerful and practical framework for transforming AI from hype into measurable organizational value.

Drawing from his concept of “AI Power,” Professor Tumin breaks down six core engines of AI capability—from pattern recognition to generative synthesis—and explains how leaders can strategically activate them. The session explores how platforms, data, people, and politics must work together to unlock AI’s full potential across institutions.

This is not a technical deep dive, but a leader’s guide to making AI work in real-world organizational contexts.

You'll learn:
- A clear, actionable framework for understanding AI Power
- The six engines of AI—from pattern-making to generative synthesis
- How leaders can align AI platforms, data infrastructure, and talent
- Why organizational politics and governance matter for AI success`,
    speaker: {
      name: 'Robert Zachary Tumin',
      title: 'Adjunct Professor of International and Public Affairs, Columbia University | SIPA',
    },
    registrationLink: 'https://columbiauniversity.zoom.us/meeting/register/JxjWi4aTT7ukGFo3-53Vlw#/registration',
  },
  {
    id: '4',
    title: 'Cybersecurity in the Age of AI',
    theme: 'Cybersecurity & AI',
    date: '2026-01-30T20:00:00.000Z',
    duration: '60 Minutes',
    overview: `Artificial intelligence is rapidly reshaping the cybersecurity landscape—altering how attacks are launched, detected, and defended against. As AI capabilities accelerate, so do the risks, forcing organizations to rethink traditional security models.

In this session, Professors Jay Healey and Greg Rattray cut through the hype to examine how AI is transforming cyber threats and defenses across industries. Drawing on deep expertise in cybersecurity policy, national security, and operational risk, they explore how AI is shifting the balance between attackers and defenders—and what leaders must do to stay ahead.

This webinar provides a clear, strategic perspective on AI-driven cyber risk, moving beyond headlines to focus on real-world implications for modern security frameworks.

You'll learn:
- How AI is changing the nature of cyber threats and attack surfaces
- The role of AI in strengthening cyber defenses and detection capabilities
- Where AI increases risk—and where it creates strategic advantage
- How modern security frameworks must adapt in an AI-driven world`,
    speaker: {
      name: 'Greg Rattray & Jason (Jay) Healey',
      title: 'Columbia University | SIPA',
    },
    registrationLink: 'https://columbiauniversity.zoom.us/meeting/register/k4MRaDCZQ427uf0IGhss-w#/registration',
  },
  {
    id: '5',
    title: 'CSR: Now More Than Ever',
    theme: 'CSR & Social Impact',
    date: '2026-02-04T17:00:00.000Z',
    duration: '60 Minutes',
    overview: `Corporate Social Responsibility (CSR) has evolved from a reputational add-on into a core strategic imperative. Today’s organizations are expected not only to generate profit, but also to create measurable social value—by design.

In this session, Professor Stanley Litow examines how effective CSR programs drive long-term business value, strengthen stakeholder trust, and deliver real impact. Drawing on decades of leadership experience across the public and private sectors, he outlines the essential components of high-impact CSR and explains how next-generation CSR strategies can be embedded into organizational decision-making.

This webinar offers leaders a practical framework for moving beyond symbolic initiatives toward results-driven, scalable CSR.`,
    speaker: {
      name: 'Stanley Litow',
      title: 'Professor, Columbia University School of International and Public Affairs',
    },
    registrationLink: 'https://columbiauniversity.zoom.us/meeting/register/9z4McUv1QGKkd2ewgZ_1UA#/registration',
  },
  {
    id: '6',
    title: 'The New Frontiers of Sustainable Investing: System-Level Investing & Blended Finance',
    theme: 'Sustainable Finance',
    date: '2026-02-19T21:00:00.000Z',
    duration: '60 Minutes',
    overview: `As global challenges grow more complex, traditional investment approaches are no longer sufficient. Addressing climate risk, inequality, and systemic market failures requires new financial frameworks that operate at scale.

In this session, Professor Caroline Flammer explores the emerging frontiers of sustainable investing, including system-level investing, blended finance, and business stewardship. She examines how investors and executives can navigate interconnected risks while unlocking opportunities in climate technology, renewable energy, and social innovation.

This webinar provides leaders with a strategic lens on how capital can be deployed to generate both organizational value and system-wide impact.`,
    speaker: {
      name: 'Caroline Flammer',
      title: 'A. Barton Hepburn Professor of Economics',
    },
    registrationLink: 'https://columbiauniversity.zoom.us/meeting/register/Mqdt_H9HQ4aIc_CHZh4SLw#/registration',
  },
  {
    id: '7',
    title: 'Building an AI-Powered Customer 360 with Braze and Snowflake Cortex',
    theme: 'Customer 360 & AI',
    date: '2026-02-25T03:00:00.000Z',
    duration: 'Virtual Hands-on Lab',
    overview: `In our previous sessions, we explored how to bridge the gap between Braze and Snowflake to track email engagement. But for the modern marketer, "opens" and "clicks" are only one piece of the puzzle. To drive true loyalty, you need a Customer 360 view—one that marries digital engagement with offline transactions, purchase history, and even customer sentiment.

In this virtual hands-on lab, we will take your data strategy to the next level. You will learn how to unify Braze's real-time engagement data with "brick-and-mortar" POS transactions and predictive propensity scores. Using Snowflake Cortex, you will then build an AI-powered interface that allows your marketing team to query this 360-degree dataset using natural language.

No more complex SQL for your marketing ops—just ask the data directly.

What You Will Learn:
- Data Unification: How to ingest and join Braze engagement data with external sources like POS (Point of Sale) and Purchase History inside Snowflake.
- Customer 360 Architecture: Designing a "Golden Record" that connects digital behavior (Braze) with physical behavior (Store transactions).
- Natural Language Insights: Implementing Snowflake Cortex to build a chatbot that answers complex questions like: "Which high-value users opened our last email but only purchase in-store?"
- Sentiment & AI Analysis: Using LLMs to analyze long-form customer reviews and link sentiment to specific purchase behaviors.
- Predictive Activation: Leveraging Propensity Scores (Churn vs. Purchase) to identify which segments should be pushed back into Braze for immediate re-engagement.

IN COLLABORATION WITH Braze.`,
    speaker: {
      name: 'Raymond Cai & Jayden Cheng',
      title: 'Snowflake & Braze Partnerships',
    },
    registrationLink: 'https://www.snowflake.com/about/webinars/snowflake-discover-apac/',
    isSponsored: true,
    badgeText: 'Virtual Lab',
  },
];
