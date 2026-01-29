import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/analysis')({
  component: AnalysisPage,
});

function AnalysisPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Analysis</h1>
      <p className="mt-4">Analyze your performance</p>
    </div>
  );
}
