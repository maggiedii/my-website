import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import type { Education as EducationType } from 'shared';

interface EducationProps {
  education: EducationType[];
}

export function Education({ education }: EducationProps) {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-pastel-pink-dark mb-8 text-center">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="animate-slide-up">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pastel-pink-light rounded-lg">
                    <GraduationCap className="w-6 h-6 text-pastel-pink-dark" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl">{edu.degree}</CardTitle>
                    <CardDescription className="text-lg">
                      {edu.institution} • {edu.duration}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
