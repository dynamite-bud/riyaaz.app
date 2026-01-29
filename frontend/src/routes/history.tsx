import { createFileRoute } from '@tanstack/react-router';
import { History, Calendar, Clock, FileAudio } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const Route = createFileRoute('/history')({
  component: HistoryPage,
});

function HistoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">History</h1>
        <p className="text-muted-foreground">Review your past practice sessions</p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Sessions</CardDescription>
            <CardTitle className="text-3xl">0</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Practice Time</CardDescription>
            <CardTitle className="text-3xl">0h 0m</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>This Week</CardDescription>
            <CardTitle className="text-3xl">0 sessions</CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Session List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5" />
            Recent Sessions
          </CardTitle>
          <CardDescription>Your practice history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <FileAudio className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="font-semibold text-lg">No sessions yet</h3>
            <p className="text-muted-foreground text-sm mt-1">
              Start your first practice session to see your history here
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Calendar View Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Practice Calendar
          </CardTitle>
          <CardDescription>Your practice streak</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-48 rounded-lg bg-muted flex items-center justify-center">
            <div className="text-center">
              <Clock className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
              <p className="text-muted-foreground">Calendar view coming soon</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
