'use server';

/**
 * @fileOverview An AI agent that generates key topics from a webinar description.
 *
 * - generateKeyTopics - A function that generates key topics from a webinar description.
 * - GenerateKeyTopicsInput - The input type for the generateKeyTopics function.
 * - GenerateKeyTopicsOutput - The return type for the generateKeyTopics function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateKeyTopicsInputSchema = z.object({
  description: z.string().describe('The description of the webinar.'),
});
export type GenerateKeyTopicsInput = z.infer<typeof GenerateKeyTopicsInputSchema>;

const GenerateKeyTopicsOutputSchema = z.object({
  keyTopics: z.array(z.string()).describe('The key topics covered in the webinar.'),
});
export type GenerateKeyTopicsOutput = z.infer<typeof GenerateKeyTopicsOutputSchema>;

export async function generateKeyTopics(input: GenerateKeyTopicsInput): Promise<GenerateKeyTopicsOutput> {
  return generateKeyTopicsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateKeyTopicsPrompt',
  input: {schema: GenerateKeyTopicsInputSchema},
  output: {schema: GenerateKeyTopicsOutputSchema},
  prompt: `You are an expert in extracting key topics from webinar descriptions.

  For each key topic, emphasize the importance of contextual understanding for consistency and improved reasoning.
  Format the key topics as a bulleted list.

  Webinar Description: {{{description}}}`,
});

const generateKeyTopicsFlow = ai.defineFlow(
  {
    name: 'generateKeyTopicsFlow',
    inputSchema: GenerateKeyTopicsInputSchema,
    outputSchema: GenerateKeyTopicsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
