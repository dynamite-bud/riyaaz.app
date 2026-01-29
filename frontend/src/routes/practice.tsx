import { createFileRoute } from '@tanstack/react-router';
import { Mic, Play, Square, Volume2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export const Route = createFileRoute('/practice')({
  component: PracticePage,
});

function PracticePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Practice</h1>
        <p className="text-muted-foreground">Start a guided practice session with real-time feedback</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Practice Area */}
        <div className="lg:col-span-2 space-y-4">
          {/* Pitch Display */}
          <Card>
            <CardHeader>
              <CardTitle>Pitch Monitor</CardTitle>
              <CardDescription>Real-time pitch detection display</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-48 rounded-lg bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Pitch visualization will appear here</p>
              </div>
            </CardContent>
          </Card>

          {/* Swara Display */}
          <Card>
            <CardHeader>
              <CardTitle>Current Swara</CardTitle>
              <CardDescription>Detected note and accuracy</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center gap-8 py-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary">Sa</div>
                  <div className="text-sm text-muted-foreground mt-2">Detected Swara</div>
                </div>
                <Separator orientation="vertical" className="h-20" />
                <div className="text-center">
                  <div className="text-4xl font-semibold">--</div>
                  <div className="text-sm text-muted-foreground mt-2">Cents Off</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Controls Sidebar */}
        <div className="space-y-4">
          {/* Session Controls */}
          <Card>
            <CardHeader>
              <CardTitle>Session Controls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full" size="lg">
                <Play className="mr-2 h-5 w-5" />
                Start Session
              </Button>
              <Button className="w-full" variant="outline" size="lg" disabled>
                <Square className="mr-2 h-5 w-5" />
                Stop
              </Button>
            </CardContent>
          </Card>

          {/* Audio Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Audio Input</CardTitle>
              <CardDescription>Select your microphone</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 p-3 rounded-lg bg-muted">
                <Mic className="h-5 w-5" />
                <span className="text-sm">Default Microphone</span>
              </div>
              <div className="flex items-center gap-2">
                <Volume2 className="h-4 w-4 text-muted-foreground" />
                <div className="flex-1 h-2 rounded-full bg-muted">
                  <div className="h-full w-0 rounded-full bg-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reference Pitch */}
          <Card>
            <CardHeader>
              <CardTitle>Reference Pitch</CardTitle>
              <CardDescription>Set your Sa frequency</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-4">
                <div className="text-3xl font-bold">C4</div>
                <div className="text-sm text-muted-foreground">261.63 Hz</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
