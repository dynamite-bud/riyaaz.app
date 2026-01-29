import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome to Riyaaz</h1>
      <p className="mt-4">Indian Classical Music Practice Tool</p>
    </div>
  );
}
