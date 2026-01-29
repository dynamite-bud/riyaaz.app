import { createFileRoute, Link } from '@tanstack/react-router';
import { Mic, BarChart3, History, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/')({
  component: HomePage,
});

const features = [
  {
    to: '/practice',
    title: 'Practice',
    description: 'Start a guided practice session with real-time pitch detection',
    icon: Mic,
  },
  {
    to: '/analysis',
    title: 'Analysis',
    description: 'Analyze your recordings with detailed pitch and swara detection',
    icon: BarChart3,
  },
  {
    to: '/history',
    title: 'History',
    description: 'Review your past practice sessions and recordings',
    icon: History,
  },
  {
    to: '/progress',
    title: 'Progress',
    description: 'Track your improvement over time with detailed statistics',
    icon: TrendingUp,
  },
] as const;

function HomePage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center space-y-4 py-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Welcome to Riyaaz
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your personal Indian Classical Music practice companion. Improve your pitch accuracy,
          learn new ragas, and track your progress.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Button asChild size="lg">
            <Link to="/practice">
              <Mic className="mr-2 h-5 w-5" />
              Start Practicing
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/analysis">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ to, title, description, icon: Icon }) => (
          <Link key={to} to={to}>
            <Card className="h-full hover:bg-accent/50 transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>

      {/* Info Section */}
      <section className="rounded-lg border bg-card p-6">
        <h2 className="text-2xl font-semibold mb-4">About Riyaaz</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <h3 className="font-medium mb-2">Real-time Feedback</h3>
            <p className="text-sm text-muted-foreground">
              Get instant feedback on your pitch accuracy as you practice, helping you develop better intonation.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Swara Detection</h3>
            <p className="text-sm text-muted-foreground">
              Advanced algorithms detect the swaras you sing, helping you understand your rendition of ragas.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Progress Tracking</h3>
            <p className="text-sm text-muted-foreground">
              Monitor your improvement over time with detailed analytics and session history.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
