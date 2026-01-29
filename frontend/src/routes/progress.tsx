import { createFileRoute } from '@tanstack/react-router';
import { TrendingUp, Target, Award, BarChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const Route = createFileRoute('/progress')({
  component: ProgressPage,
});

function ProgressPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Progress</h1>
        <p className="text-muted-foreground">Track your improvement over time</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center gap-1">
              <Target className="h-4 w-4" />
              Pitch Accuracy
            </CardDescription>
            <CardTitle className="text-3xl">--%</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">No data yet</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center gap-1">
              <TrendingUp className="h-4 w-4" />
              Improvement
            </CardDescription>
            <CardTitle className="text-3xl">--</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">vs last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center gap-1">
              <Award className="h-4 w-4" />
              Best Session
            </CardDescription>
            <CardTitle className="text-3xl">--</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">All time high</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center gap-1">
              <BarChart className="h-4 w-4" />
              Practice Streak
            </CardDescription>
            <CardTitle className="text-3xl">0 days</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Keep practicing!</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Accuracy Over Time</CardTitle>
            <CardDescription>Your pitch accuracy trend</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 rounded-lg bg-muted flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-muted-foreground">Start practicing to see your progress</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Swara Mastery</CardTitle>
            <CardDescription>Accuracy by swara</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {['Sa', 'Re', 'Ga', 'Ma', 'Pa', 'Dha', 'Ni'].map((swara) => (
                <div key={swara} className="flex items-center gap-3">
                  <span className="w-8 font-medium">{swara}</span>
                  <div className="flex-1 h-2 rounded-full bg-muted">
                    <div className="h-full w-0 rounded-full bg-primary" />
                  </div>
                  <span className="w-12 text-sm text-muted-foreground text-right">--%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
