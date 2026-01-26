"use client";

import Image from "next/image";
import { Webinar } from "@/lib/webinars";
import { findImageById } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { CalendarDays, Clock, Globe } from "lucide-react";
import { KeyTopicsGenerator } from "./key-topics-generator";

const TimeZoneDisplay = ({ date, timeZone, label }: { date: Date; timeZone: string; label: string }) => (
  <div className="flex flex-1 flex-col items-center justify-center p-3 rounded-lg bg-primary/10 text-center min-w-[110px]">
    <p className="text-lg font-semibold text-foreground">
      {date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone, hour12: true })}
    </p>
    <p className="text-xs text-muted-foreground">{label}</p>
  </div>
);

export function WebinarDetail({ webinar }: { webinar: Webinar }) {
  const speakerImage = findImageById(webinar.speaker.imageId);
  const webinarDate = new Date(webinar.date);

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent pr-8">
          {webinar.title}
        </DialogTitle>
        <DialogDescription className="text-base text-muted-foreground">{webinar.theme}</DialogDescription>
      </DialogHeader>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-3"><Globe className="text-accent w-5 h-5"/> Global Timings</h3>
            <div className="flex flex-wrap gap-2">
                <TimeZoneDisplay date={webinarDate} timeZone="Asia/Kolkata" label="IST" />
                <TimeZoneDisplay date={webinarDate} timeZone="Asia/Singapore" label="SGT" />
                <TimeZoneDisplay date={webinarDate} timeZone="Asia/Tokyo" label="JST" />
                <TimeZoneDisplay date={webinarDate} timeZone="Australia/Sydney" label="AEDT" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Overview</h3>
            <p className="text-muted-foreground mt-2 whitespace-pre-wrap">{webinar.overview}</p>
          </div>
          <KeyTopicsGenerator description={webinar.overview} />
        </div>
        
        <div className="space-y-6">
            <div className="p-4 rounded-lg bg-card/80 border border-border">
                 <h3 className="font-semibold text-lg mb-4 text-center">Webinar Details</h3>
                <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                        <CalendarDays className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-foreground">{webinarDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-foreground">{webinar.duration}</span>
                    </div>
                </div>
            </div>
            <div className="p-4 rounded-lg bg-card/80 border border-border">
                <h3 className="font-semibold text-lg mb-4 text-center">About the Speaker</h3>
                <div className="flex flex-col items-center text-center">
                    {speakerImage && (
                        <Image
                        src={speakerImage.imageUrl}
                        alt={speakerImage.description}
                        width={80}
                        height={80}
                        data-ai-hint={speakerImage.imageHint}
                        className="rounded-full border-2 border-accent mb-3"
                        />
                    )}
                    <p className="font-bold text-foreground">{webinar.speaker.name}</p>
                    <p className="text-sm text-muted-foreground">{webinar.speaker.title}</p>
                </div>
            </div>
            {webinar.registrationLink && (
              <Button asChild size="lg" className="w-full text-lg">
                  <a href={webinar.registrationLink} target="_blank" rel="noopener noreferrer">
                      Register Now
                  </a>
              </Button>
            )}
        </div>

      </div>
    </>
  );
}
