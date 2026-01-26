import { webinars, Webinar } from '@/lib/webinars';
import { WebinarCard } from '@/components/webinar-card';
import { CountdownTimer } from '@/components/countdown-timer';
import { BrainCircuit } from 'lucide-react';
import { SiteCredits } from '@/components/site-credits';

export default function Home() {
  const now = new Date();
  const upcomingWebinars = webinars
    .map(w => ({ ...w, dateObj: new Date(w.date) }))
    .filter(w => w.dateObj > now)
    .sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());

  const nextWebinar = upcomingWebinars[0];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <BrainCircuit className="w-10 h-10 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Global AI Connect
              </h1>
            </div>
            <p className="mt-2 text-lg text-muted-foreground">
              Your portal to the future of artificial intelligence.
            </p>
          </div>
          {nextWebinar && (
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">Next Webinar Starts In</h2>
              <CountdownTimer targetDate={nextWebinar.date} />
            </div>
          )}
        </div>
      </header>
      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Upcoming Webinars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
            {webinars.map((webinar) => (
              <WebinarCard key={webinar.id} webinar={webinar} />
            ))}
          </div>
        </div>
      </main>
      <footer className="text-center p-6 text-muted-foreground text-sm">
        <SiteCredits />
        <p className="mt-8">&copy; {new Date().getFullYear()} Global AI Connect. All rights reserved.</p>
      </footer>
    </div>
  );
}
