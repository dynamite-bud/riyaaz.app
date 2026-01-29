import { createFileRoute } from '@tanstack/react-router';
import { Settings, Volume2, Music, Mic, Monitor } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export const Route = createFileRoute('/settings')({
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Configure your practice environment</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Audio Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Volume2 className="h-5 w-5" />
              Audio Settings
            </CardTitle>
            <CardDescription>Configure audio input and processing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="text-sm font-medium">Input Device</label>
              <div className="mt-2 flex items-center gap-2 p-3 rounded-lg border">
                <Mic className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm">Default Microphone</span>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Sample Rate</label>
              <div className="mt-2 flex items-center gap-2 p-3 rounded-lg border">
                <span className="text-sm">22050 Hz</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Higher sample rates provide better accuracy but use more resources
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Reference Pitch */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Music className="h-5 w-5" />
              Reference Pitch
            </CardTitle>
            <CardDescription>Set your Sa (tonic) frequency</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="text-sm font-medium">Sa Frequency</label>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex-1 p-3 rounded-lg border text-center">
                  <div className="text-2xl font-bold">C4</div>
                  <div className="text-sm text-muted-foreground">261.63 Hz</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {['C3', 'C#3', 'D3', 'D#3', 'C4', 'C#4', 'D4', 'D#4'].map((note) => (
                <Button key={note} variant="outline" size="sm" className="text-xs">
                  {note}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Display Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Monitor className="h-5 w-5" />
              Display Settings
            </CardTitle>
            <CardDescription>Customize the visual feedback</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Dark Mode</div>
                <div className="text-sm text-muted-foreground">Use dark theme</div>
              </div>
              <Button variant="outline" size="sm">
                System
              </Button>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Show Cents</div>
                <div className="text-sm text-muted-foreground">Display pitch deviation in cents</div>
              </div>
              <Button variant="outline" size="sm">
                On
              </Button>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Notation Style</div>
                <div className="text-sm text-muted-foreground">Indian or Western notation</div>
              </div>
              <Button variant="outline" size="sm">
                Indian
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* About */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              About
            </CardTitle>
            <CardDescription>Application information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Version</span>
              <span className="font-medium">0.1.0</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span className="text-muted-foreground">Backend</span>
              <span className="font-medium">FastAPI</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span className="text-muted-foreground">Frontend</span>
              <span className="font-medium">React + TanStack</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
