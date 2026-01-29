import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/settings')({
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Settings</h1>
      <p className="mt-4">Adjust your settings</p>
    </div>
  );
}
