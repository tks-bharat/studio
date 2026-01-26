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
    title: 'Advanced RAG Techniques',
    theme: 'Generative AI',
    date: getFutureDate(45),
    duration: '75 Minutes',
    overview: 'Dive deep into advanced Retrieval-Augmented Generation (RAG) techniques that go beyond the basics. This webinar covers strategies for optimizing retrieval, refining generation, and integrating knowledge graphs to build sophisticated, context-aware AI systems that can reason over private data.',
    speaker: {
      name: 'Dr. Evelyn Reed',
      title: 'Principal AI Researcher',
    },
  },
  {
    id: '3',
    title: 'The Future of AI in Robotics',
    theme: 'Robotics & Automation',
    date: getFutureDate(70),
    duration: '45 Minutes',
    overview: 'Explore the symbiotic relationship between artificial intelligence and robotics. This talk will cover the latest breakthroughs in AI-driven robotic perception, manipulation, and navigation. We will showcase real-world examples of how smart robots are transforming industries from manufacturing to healthcare.',
    speaker: {
      name: 'Dr. Evelyn Reed',
      title: 'Principal AI Researcher',
    },
  },
];
