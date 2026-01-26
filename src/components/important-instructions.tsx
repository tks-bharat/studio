import { AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ImportantInstructions() {
  return (
    <Card className="my-8 bg-primary/5 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl text-primary">
          <AlertCircle className="w-6 h-6" />
          <span>Important Registration Instructions</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-muted-foreground">
        <div>
          <h4 className="font-semibold text-foreground mb-2">When Registering:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Company Name:</strong> Please enter your full institute name.
            </li>
            <li>
              <strong>Email Address:</strong> Use your official institute email address.
            </li>
            <li>
              <strong>Designation/Job Title:</strong> Enter "UG Student" or "PG Student". If there is a dropdown, please select "Student".
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-2">General Webinar Guidelines:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Ensure you have a stable internet connection for the best experience.</li>
            <li>Join the webinar a few minutes early to test your audio and video.</li>
            <li>
              Use the Q&A feature to ask questions. The Q&A mode depends on the host of the webinar; sometimes it may not be enabled.
            </li>
            <li>Be respectful and professional in all communications.</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
