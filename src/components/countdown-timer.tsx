
"use client";

import { useState, useEffect } from 'react';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (targetDate: string): TimeLeft | null => {
  const difference = +new Date(targetDate) - +new Date();
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return null;
};

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="text-3xl md:text-4xl font-bold text-foreground tabular-nums w-12 text-center">
      {String(value).padStart(2, '0')}
    </div>
    <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
  </div>
);

export function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    // Set initial time left on client mount to avoid hydration mismatch
    setTimeLeft(calculateTimeLeft(targetDate));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return <div className="text-accent font-bold">Webinar has started!</div>;
  }

  return (
    <div className="flex items-center gap-2 md:gap-4 p-3 rounded-lg bg-card/50 backdrop-blur-lg border border-primary/20">
      <TimeUnit value={timeLeft.days} label="Days" />
      <div className="text-3xl font-bold text-primary/50">:</div>
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <div className="text-3xl font-bold text-primary/50">:</div>
      <TimeUnit value={timeLeft.minutes} label="Mins" />
      <div className="text-3xl font-bold text-primary/50">:</div>
      <TimeUnit value={timeLeft.seconds} label="Secs" />
    </div>
  );
}
