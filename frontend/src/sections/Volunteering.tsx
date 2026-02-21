import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart } from 'lucide-react';
import type { Volunteering as VolunteeringType } from 'shared';

interface VolunteeringProps {
  volunteering: VolunteeringType[];
}

export function Volunteering({ volunteering }: VolunteeringProps) {
  if (volunteering.length === 0) return null;

  return (
    <section id="volunteering" className="scroll-mt-24 py-20 px-4 bg-pastel-mint/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-pastel-pink-dark mb-8 text-center">Volunteering</h2>
        <div className="space-y-6">
          {volunteering.map((vol, index) => (
            <Card key={index} className="animate-slide-up">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pastel-pink-light rounded-lg">
                    <Heart className="w-6 h-6 text-pastel-pink-dark" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl">{vol.role}</CardTitle>
                    <CardDescription className="text-lg">
                      {vol.organization} • {vol.duration}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{vol.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
