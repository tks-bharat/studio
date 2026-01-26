
export function SiteCredits() {
  return (
    <div className="bg-card/30 rounded-lg p-6 max-w-3xl mx-auto border border-border">
      <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
        <div className="flex-1">
          <p className="text-muted-foreground text-sm mb-1 font-semibold">Site managed by</p>
          <h4 className="text-2xl font-bold text-foreground">Tanmay Kumar Shrivastava</h4>
          <p className="mt-2 text-muted-foreground max-w-prose">
            A selected member of the Stanford faculty cohort, a Neo4j Certified Professional, and Microsoft Certified, currently pursuing Data Science & Artificial Intelligence from IIT. I serve as the Chief Advisor and founding member of the FinTech Society, and have been invited by the Government of India to attend the India AI Summit 2026
          </p>
        </div>
      </div>
    </div>
  );
}
