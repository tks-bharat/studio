import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { findImageById } from '@/lib/placeholder-images';

export function SiteCredits() {
  const tanmayImage = findImageById('tanmay-shrivastava');

  return (
    <div className="bg-card/30 rounded-lg p-6 max-w-3xl mx-auto border border-border">
      <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
        {tanmayImage && (
            <Avatar className="w-24 h-24 border-2 border-primary">
              <AvatarImage src={tanmayImage.imageUrl} alt={tanmayImage.description} data-ai-hint={tanmayImage.imageHint} />
              <AvatarFallback>TS</AvatarFallback>
            </Avatar>
        )}
        <div className="flex-1">
          <p className="text-muted-foreground text-sm mb-1 font-semibold">Site managed by</p>
          <h4 className="text-2xl font-bold text-foreground">Tanmay Kumar Shrivastava</h4>
          <p className="mt-2 text-muted-foreground max-w-prose">
            A selected member of the faculty cohort for Stanford, a Neo4j Certified Professional, and a Microsoft Certified person who is pursuing Data Science & Artificial Intelligence.
          </p>
        </div>
      </div>
    </div>
  );
}
