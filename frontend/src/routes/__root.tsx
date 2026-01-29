import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { AppSidebar } from '@/components/app-sidebar';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 items-center gap-2 border-b px-4">
          <SidebarTrigger />
        </header>
        <main className="flex-1 overflow-auto">
          <div className="container max-w-7xl mx-auto px-4 py-6">
            <Outlet />
          </div>
        </main>
      </SidebarInset>
      {import.meta.env.DEV && <TanStackRouterDevtools position="bottom-right" />}
    </SidebarProvider>
  );
}
