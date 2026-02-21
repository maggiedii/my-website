import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface BioProps {
  bio: string;
}

export function Bio({ bio }: BioProps) {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="animate-slide-up">
          <CardHeader>
            <CardTitle className="text-4xl text-pastel-pink-dark">About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none">
              {bio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-muted-foreground mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
