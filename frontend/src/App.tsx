import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-pink-light via-pastel-lavender-light to-pastel-mint p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="text-4xl text-pastel-pink-dark">
              🌸 Welcome to Your Personal Website
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg text-muted-foreground">
              Your beautiful pastel pink-themed website is ready! The theme is working perfectly.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Button>Primary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="ghost">Ghost Button</Button>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Badge>React</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="outline">Tailwind CSS</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
