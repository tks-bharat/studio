export type Speaker = {
  name: string;
  title: string;
  imageId: string;
};

export type Webinar = {
  id: string;
  title: string;
  theme: string;
  date: string; // ISO 8601 format
  duration: string;
  overview: string;
  speaker: Speaker;
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
    title: 'Context Engineering for GenAI',
    theme: 'Large Language Models',
    date: getFutureDate(21),
    duration: '60 Minutes',
    overview: 'This session explores the emerging discipline of context engineering for Large Language Models (LLMs). We will discuss how to design, implement, and evaluate context to improve the performance, relevance, and accuracy of generative AI applications. Learn about the importance of providing relevant and high-quality information to LLMs to avoid hallucinations and generate more reliable outputs.',
    speaker: {
      name: 'Dr. Evelyn Reed',
      title: 'Principal AI Researcher',
      imageId: 'speaker-1',
    },
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
      imageId: 'speaker-1',
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
      imageId: 'speaker-1',
    },
  },
];
