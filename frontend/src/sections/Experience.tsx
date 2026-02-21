import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import type { WorkExperience as WorkExperienceType } from 'shared';

interface ExperienceProps {
  workExperience: WorkExperienceType[];
}

export function Experience({ workExperience }: ExperienceProps) {
  return (
    <section id="experience" className="scroll-mt-24 py-20 px-4 bg-pastel-lavender-light/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-pastel-pink-dark mb-8 text-center">
          Work Experience
        </h2>
        <div className="space-y-6">
          {workExperience.map((exp, index) => (
            <Card key={index} className="animate-slide-up hover:scale-[1.02] transition-transform">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pastel-pink-light rounded-lg">
                    <Briefcase className="w-6 h-6 text-pastel-pink-dark" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl">{exp.role}</CardTitle>
                    <CardDescription className="text-lg">
                      {exp.company} • {exp.duration}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
