"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypingAnimationProps {
  lines: string[];
  className?: string;
  cursorClassName?: string;
}

export function TypingAnimation({ lines, className, cursorClassName }: TypingAnimationProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  useEffect(() => {
    if (!isClient || lines.length === 0) return;

    const currentLine = lines[currentLineIndex];

    const handleTyping = () => {
      if (isDeleting) {
        setTypedText((prev) => prev.substring(0, prev.length - 1));
      } else {
        setTypedText((prev) => currentLine.substring(0, prev.length + 1));
      }
    };

    const typingSpeed = isDeleting ? 30 : 60;
    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    if (!isDeleting && typedText === currentLine) {
      setTimeout(() => setIsDeleting(true), 2500); // Pause before deleting
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setCurrentLineIndex((prev) => (prev + 1) % lines.length);
    }

    return () => clearTimeout(typingTimeout);
  }, [typedText, isDeleting, currentLineIndex, lines, isClient]);

  // Render the first line statically on the server to prevent layout shift and show content.
  if (!isClient) {
    return <span className={cn(className)}>{lines.length > 0 ? lines[0] : ''}</span>;
  }
  
  return (
    <span className={cn(className)}>
      {typedText}
      <span className={cn("inline-block w-px h-4 bg-current animate-cursor-blink ml-1 align-middle", cursorClassName)}></span>
    </span>
  );
}
