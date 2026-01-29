import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/progress')({
  component: ProgressPage,
});

function ProgressPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Progress</h1>
      <p className="mt-4">Track your progress</p>
    </div>
  );
}
