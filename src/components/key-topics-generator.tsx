"use client";

import { useState } from 'react';
import { generateKeyTopics } from '@/ai/flows/generate-key-topics';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Lightbulb, Loader, AlertTriangle, CheckCircle } from 'lucide-react';
import { Separator } from './ui/separator';

export function KeyTopicsGenerator({ description }: { description: string }) {
  const [loading, setLoading] = useState(false);
  const [topics, setTopics] = useState<string[]>([]);
  const { toast } = useToast();

  const handleGenerateTopics = async () => {
    setLoading(true);
    setTopics([]);
    try {
      const result = await generateKeyTopics({ description });
      if (result && result.keyTopics) {
        setTopics(result.keyTopics);
      } else {
        throw new Error('Failed to generate topics.');
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Could not generate key topics. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6">
      <Separator className="my-6 bg-border/50" />
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <Lightbulb className="text-accent w-5 h-5" />
          <span>AI-Generated Key Topics</span>
        </h3>
        <Button onClick={handleGenerateTopics} disabled={loading} size="sm">
          {loading ? (
            <>
              <Loader className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            'Generate Topics'
          )}
        </Button>
      </div>
      <p className="text-muted-foreground text-sm mt-2">
        Use AI to extract the key learning points from the webinar overview.
      </p>

      <div className="mt-4 space-y-3">
        {loading && (
          <div className="flex items-center justify-center p-8 text-muted-foreground">
            <Loader className="h-6 w-6 animate-spin" />
            <span className="ml-2">Analyzing content...</span>
          </div>
        )}

        {topics.length > 0 && (
          <ul className="space-y-3 pl-5">
            {topics.map((topic, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-foreground">{topic}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
