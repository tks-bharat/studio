
import { TypingAnimation } from './typing-animation';

export function SiteCredits() {
  const bioLines = [
    "A selected member of the Stanford faculty cohort.",
    "A Neo4j Certified Professional, and Microsoft Certified.",
    "Pursuing Data Science & Artificial Intelligence from IIT.",
    "Chief Advisor and founding member of the FinTech Society.",
    "Invited by the Government of India to attend the India AI Summit 2026."
  ];

  return (
    <div className="bg-card/50 backdrop-blur-lg rounded-lg p-6 max-w-3xl mx-auto border border-border">
      <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
        <div className="flex-1">
          <p className="text-muted-foreground text-sm mb-1 font-semibold">Site managed by</p>
          <h4 className="text-2xl font-bold text-foreground">Tanmay Kumar Shrivastava</h4>
          <div className="mt-2 text-muted-foreground max-w-prose min-h-[3rem]">
            <TypingAnimation lines={bioLines} />
          </div>
        </div>
      </div>
    </div>
  );
}
