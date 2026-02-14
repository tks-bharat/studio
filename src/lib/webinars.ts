
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
    title: 'CSR: Now More Ever',
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
    registrationLink: 'https://www.snowflake.com/en/webinars/virtual-hands-on-lab/building-an-ai-powered-customer-360-with-braze-and-snowflake-cortex-2026-02-25/?utm_source=snowflake&utm_medium=email&utm_campaign=ap-en-promo-1-20260212&mkt_tok=MjUyLVJGTy0yMjcAAAGf7ufu_pt3ioYBu9AmPcU0q7qf1jHSlNkDSArouRsEQq7jkPouBvhlHgCAfOGpTWQbJ1D46XUe_GxckLWuU4mZGnmRihFM_E23d5-gQlOG5zQvW0_jYA',
    isSponsored: true,
    badgeText: 'Snowflake AI',
  },
];
