import { createFileRoute } from '@tanstack/react-router';
import { Upload, FileAudio, BarChart3, Music2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/analysis')({
  component: AnalysisPage,
});

function AnalysisPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Analysis</h1>
        <p className="text-muted-foreground">Upload and analyze your recordings</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Upload Section */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Upload Audio</CardTitle>
            <CardDescription>Upload a recording for analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
              <p className="text-sm font-medium">Drop your audio file here</p>
              <p className="text-xs text-muted-foreground mt-1">or click to browse</p>
              <p className="text-xs text-muted-foreground mt-4">Supports MP3, WAV, M4A</p>
            </div>
            <Button className="w-full mt-4" disabled>
              <FileAudio className="mr-2 h-4 w-4" />
              Analyze Recording
            </Button>
          </CardContent>
        </Card>

        {/* Analysis Results */}
        <div className="lg:col-span-2 space-y-4">
          {/* Pitch Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Pitch Analysis
              </CardTitle>
              <CardDescription>Pitch contour over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 rounded-lg bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Upload a file to see pitch analysis</p>
              </div>
            </CardContent>
          </Card>

          {/* Swara Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Music2 className="h-5 w-5" />
                Swara Distribution
              </CardTitle>
              <CardDescription>Frequency of each swara in your recording</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2">
                {['Sa', 'Re', 'Ga', 'Ma', 'Pa', 'Dha', 'Ni'].map((swara) => (
                  <div key={swara} className="text-center p-3 rounded-lg bg-muted">
                    <div className="font-semibold">{swara}</div>
                    <div className="text-xs text-muted-foreground mt-1">--%</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
