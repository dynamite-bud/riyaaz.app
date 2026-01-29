import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/practice')({
  component: PracticePage,
});

function PracticePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Practice</h1>
      <p className="mt-4">Start your practice session</p>
    </div>
  );
}
