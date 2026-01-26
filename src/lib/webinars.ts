
export type Speaker = {
  name: string;
  title: string;
};

export type Webinar = {
  id: string;
  title: string;
  theme: string;
  date: string; // ISO 8601 format
  duration: string;
  overview: string;
  speaker: Speaker;
  registrationLink?: string;
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
    duration: '2-Day Technical Series',
    overview: `Join us for a 2-day technical series on building and developing with AI Agents, with Day 1 on Jan 28 and Day 2 on Jan 29.

Day 1 — Build AI Agents:
Start with a welcome and move into sessions that define and demonstrate agentic systems, vector search, low/no-code customer agents, and a hands-on introduction to Gemini Pro.
Key sessions include:
- AI Agents: the next frontier (Dr. Soujanya Lanka)
- From Prototype to Production: Vertex AI Vector Search 2.0 (Kaz Sato)
- Live Lab — Introduction to Gemini Pro

Day 2 — Develop with AI Agents:
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
    overview: `Part of the Executive Webinar Series by Columbia SIPA

About the Webinar:
Artificial intelligence is everywhere—but real impact remains elusive for many organizations. In this executive webinar, Professor Zachary Tumin introduces a powerful and practical framework for transforming AI from hype into measurable organizational value.

Drawing from his concept of “AI Power,” Professor Tumin breaks down six core engines of AI capability—from pattern recognition to generative synthesis—and explains how leaders can strategically activate them. The session explores how platforms, data, people, and politics must work together to unlock AI’s full potential across institutions.

This is not a technical deep dive, but a leader’s guide to making AI work in real-world organizational contexts.

What You’ll Learn:
- A clear, actionable framework for understanding AI Power
- The six engines of AI—from pattern-making to generative synthesis
- How leaders can align AI platforms, data infrastructure, and talent
- Why organizational politics and governance matter for AI success
- How to move beyond experimentation to real, sustained impact

About the Series:
This webinar is organized by the Columbia School of International and Public Affairs (SIPA) in partnership with Columbia+ and is part of a new global executive webinar series.

Featuring distinguished SIPA faculty and practitioners, these complimentary live sessions bring policy insight and applied expertise directly to professionals worldwide—addressing urgent global challenges and their implications for leaders across:
- Business
- Government
- Civil Society`,
    speaker: {
      name: 'Robert Zachary Tumin',
      title: 'Adjunct Professor of International and Public Affairs, Columbia University | SIPA',
    },
    registrationLink: 'https://columbiauniversity.zoom.us/meeting/register/JxjWi4aTT7ukGFo3-53Vlw#/registration',
  },
];
