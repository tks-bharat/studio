"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Webinar } from '@/lib/webinars';
import { findImageById } from '@/lib/placeholder-images';
import { CalendarDays, Clock } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { WebinarDetail } from './webinar-detail';
import { cn } from '@/lib/utils';
import { ScrollArea } from './ui/scroll-area';

export function WebinarCard({ webinar }: { webinar: Webinar }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const speakerImage = findImageById(webinar.speaker.imageId);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <div className="group w-full h-80 [perspective:1000px]">
          <div
            className={cn(
              "relative h-full w-full rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer",
              "hover:shadow-accent/20 hover:shadow-2xl"
            )}
          >
            {/* Front Face */}
            <div className="absolute inset-0 rounded-xl [backface-visibility:hidden] bg-card/50 backdrop-blur-lg border border-primary/20 p-6 flex flex-col justify-between">
              <div>
                <p className="font-semibold text-accent">{webinar.theme}</p>
                <h3 className="text-2xl font-bold mt-2 text-foreground">{webinar.title}</h3>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CalendarDays className="w-4 h-4" />
                <span>{new Date(webinar.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </div>

            {/* Back Face */}
            <div className="absolute inset-0 rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden] bg-card/50 backdrop-blur-lg border border-accent/20 p-6 flex flex-col items-center justify-center text-center">
              {speakerImage && (
                 <Image
                  src={speakerImage.imageUrl}
                  alt={speakerImage.description}
                  width={80}
                  height={80}
                  data-ai-hint={speakerImage.imageHint}
                  className="rounded-full border-2 border-accent"
                />
              )}
              <h4 className="font-bold text-lg mt-4">{webinar.speaker.name}</h4>
              <p className="text-muted-foreground">{webinar.speaker.title}</p>
              <div className="flex items-center gap-4 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>{webinar.duration}</span>
                </div>
              </div>
              <p className="mt-4 text-sm font-semibold">Click card for details</p>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl bg-background/80 backdrop-blur-xl border-primary/30 p-0">
        <ScrollArea className="max-h-[90vh]">
          <div className="p-6">
            <WebinarDetail webinar={webinar} />
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
