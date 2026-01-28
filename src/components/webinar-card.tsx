
"use client";

import { useState, useEffect } from 'react';
import { Webinar } from '@/lib/webinars';
import { CalendarDays, Clock } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { WebinarDetail } from './webinar-detail';
import { cn } from '@/lib/utils';
import { ScrollArea } from './ui/scroll-area';
import { Badge } from './ui/badge';

export function WebinarCard({ webinar }: { webinar: Webinar }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [status, setStatus] = useState<{ text: string; className: string } | null>(null);

  useEffect(() => {
    const parseDuration = (durationStr: string): number | null => {
      if (!durationStr) return null;
      const lowerCaseDuration = durationStr.toLowerCase();
      const value = parseInt(lowerCaseDuration, 10);
      if (isNaN(value)) return null;

      if (lowerCaseDuration.includes('minute')) {
        return value * 60 * 1000;
      }
      if (lowerCaseDuration.includes('hour')) {
        return value * 60 * 60 * 1000;
      }
      return null;
    };

    const getWebinarStatus = (): { text: string; className: string } | null => {
      const now = new Date();
      const startDate = new Date(webinar.date);
      let endDate: Date | null = webinar.endDate ? new Date(webinar.endDate) : null;

      if (!endDate) {
        const durationMs = parseDuration(webinar.duration);
        if (durationMs) {
          endDate = new Date(startDate.getTime() + durationMs);
        } else {
          const endOfDay = new Date(startDate);
          endOfDay.setUTCHours(23, 59, 59, 999);
          endDate = endOfDay;
        }
      }

      if (now > endDate) {
        return { text: 'Ended', className: 'bg-red-600 text-destructive-foreground hover:bg-red-600/80 border-transparent' };
      }

      if (now >= startDate && now <= endDate) {
        return { text: 'Under Progress', className: 'bg-green-600 text-white hover:bg-green-600/80 border-transparent' };
      }

      const oneDay = 24 * 60 * 60 * 1000;
      if (startDate.getTime() - now.getTime() < oneDay && startDate > now) {
        return { text: 'About to start', className: 'bg-yellow-500 text-white hover:bg-yellow-500/80 border-transparent' };
      }

      return null;
    };
    
    setStatus(getWebinarStatus());
    const intervalId = setInterval(() => setStatus(getWebinarStatus()), 60000);

    return () => clearInterval(intervalId);
  }, [webinar.date, webinar.endDate, webinar.duration]);

  const renderDate = () => {
    if (!webinar.endDate) {
      return new Date(webinar.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
    }
    const startDate = new Date(webinar.date);
    const endDate = new Date(webinar.endDate);
    const startMonth = startDate.toLocaleDateString('en-US', { month: 'long', timeZone: 'UTC' });
    const endMonth = endDate.toLocaleDateString('en-US', { month: 'long', timeZone: 'UTC' });

    if (startMonth === endMonth && startDate.getUTCFullYear() === endDate.getUTCFullYear()) {
      return `${startMonth} ${startDate.getUTCDate()}-${endDate.getUTCDate()}, ${startDate.getUTCFullYear()}`;
    }

    const startFormat: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', timeZone: 'UTC' };
    if (startDate.getUTCFullYear() !== endDate.getUTCFullYear()) {
        startFormat.year = 'numeric';
    }

    return `${startDate.toLocaleDateString('en-US', startFormat)} - ${endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}`;
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <div className="group w-full h-80 [perspective:1000px]">
          <div
            className={cn(
              "relative h-full w-full rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer",
              webinar.isSponsored 
                ? "hover:shadow-yellow-400/20 hover:shadow-2xl" 
                : "hover:shadow-accent/20 hover:shadow-2xl"
            )}
          >
            {/* Front Face */}
            <div className={cn(
              "absolute inset-0 rounded-xl [backface-visibility:hidden] bg-card/50 backdrop-blur-lg border p-6 flex flex-col justify-between",
              webinar.isSponsored ? "border-yellow-400/30" : "border-primary/20"
            )}>
              {status && (
                <Badge className={cn("absolute top-4 right-4 z-10", status.className)}>
                  {status.text}
                </Badge>
              )}
              <div>
                {webinar.isSponsored && (
                  <Badge className="mb-2 border-yellow-400/50 bg-yellow-400/10 text-yellow-300">
                    {webinar.badgeText || 'Sponsored'}
                  </Badge>
                )}
                <p className={cn(
                  "font-semibold",
                   webinar.isSponsored ? "text-yellow-400" : "text-accent"
                )}>{webinar.theme}</p>
                <h3 className="text-2xl font-bold mt-2 text-foreground">{webinar.title}</h3>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CalendarDays className="w-4 h-4" />
                <span>{renderDate()}</span>
              </div>
            </div>

            {/* Back Face */}
            <div className={cn(
              "absolute inset-0 rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden] bg-card/50 backdrop-blur-lg border p-6 flex flex-col items-center justify-center text-center",
               webinar.isSponsored ? "border-yellow-400/30" : "border-primary/20"
            )}>
              <h4 className="font-bold text-lg mt-4">{webinar.speaker.name}</h4>
              <p className="text-muted-foreground">{webinar.speaker.title}</p>
              <div className="flex items-center gap-4 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className={cn("w-4 h-4", webinar.isSponsored ? "text-yellow-400" : "text-accent")} />
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
