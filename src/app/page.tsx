import { webinars, Webinar } from '@/lib/webinars';
import { WebinarCard } from '@/components/webinar-card';
import { CountdownTimer } from '@/components/countdown-timer';
import { BrainCircuit, AlertTriangle } from 'lucide-react';
import { SiteCredits } from '@/components/site-credits';
import { ImportantInstructions } from '@/components/important-instructions';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import NeuralBackground from '@/components/ui/flow-field-background';

export default function Home() {
  const now = new Date();
  const upcomingWebinars = webinars
    .map(w => ({ ...w, dateObj: new Date(w.date) }))
    .filter(w => w.dateObj > now)
    .sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());

  const nextWebinar = upcomingWebinars[0];

  const displayWebinars = [...webinars].sort((a, b) => {
    if (a.isSponsored && !b.isSponsored) return -1;
    if (!a.isSponsored && b.isSponsored) return 1;
    // Fallback to date sort for the rest
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed inset-0 -z-10">
        <NeuralBackground 
            color="#00FFFF" // Accent color
            trailOpacity={0.1}
            speed={0.8}
        />
      </div>
      <header className="py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <BrainCircuit className="w-10 h-10 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent bg-gradient-size-200 animate-gradient-pan">
                Global AI Connect
              </h1>
            </div>
            <p className="mt-2 text-lg text-muted-foreground">
              Your portal for students to connect with quality webinars from experts.
            </p>
          </div>
          {nextWebinar && (
            <div className="flex flex-col items-center gap-2 text-center max-w-sm">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Next webinar starts in
              </p>
              <h2 className="text-lg font-bold text-foreground leading-tight">
                {nextWebinar.title}
              </h2>
              <CountdownTimer targetDate={nextWebinar.date} />
            </div>
          )}
        </div>
      </header>
      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <Alert variant="warning" className="mb-8 animate-blink">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Important Notice</AlertTitle>
            <AlertDescription>
              Currently, registration is only for FinTech Society members, and the list has been shared with them. If anyone is found guilty of violating this, their sessions will be cancelled, and they will be expelled from the society due to our no-tolerance policy.
            </AlertDescription>
          </Alert>
          <h2 className="text-3xl font-bold text-foreground mb-8">Upcoming Webinars</h2>
          <ImportantInstructions />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
            {displayWebinars.map((webinar) => (
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
