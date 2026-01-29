import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/history')({
  component: HistoryPage,
});

function HistoryPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">History</h1>
      <p className="mt-4">View your practice history</p>
    </div>
  );
}
