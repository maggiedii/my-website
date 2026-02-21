import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink } from 'lucide-react';
import type { Project as ProjectType } from 'shared';

interface ProjectsProps {
  projects: ProjectType[];
}

export function Projects({ projects }: ProjectsProps) {
  const featuredProjects = projects.slice(0, 2);

  const renderProjectGrid = (items: ProjectType[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((project, index) => (
        <Card key={index} className="animate-slide-up hover:scale-[1.02] transition-transform flex flex-col">
          <CardHeader>
            <CardTitle className="text-2xl">{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <Badge key={techIndex} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
          {project.link && (
            <CardFooter>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Project
              </Button>
            </CardFooter>
          )}
        </Card>
      ))}
    </div>
  );

  return (
    <section id="projects" className="scroll-mt-24 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-pastel-pink-dark mb-8 text-center">Projects</h2>
        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="mb-6 grid w-full max-w-xs mx-auto grid-cols-2">
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
          </TabsList>
          <TabsContent value="featured">{renderProjectGrid(featuredProjects)}</TabsContent>
          <TabsContent value="all">{renderProjectGrid(projects)}</TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
