import { Link, useRouterState } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import {
  Music,
  Mic,
  BarChart3,
  History,
  TrendingUp,
  Settings,
  Circle,
  SlidersHorizontal,
} from 'lucide-react';

import { getHealth } from '@/lib/api';
import { Badge } from '@/components/ui/badge';
import { ModeToggle } from '@/components/mode-toggle';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/ui/sidebar';

const mainNavItems = [
  { to: '/practice', label: 'Practice', icon: Mic },
] as const;

const insightsNavItems = [
  { to: '/analysis', label: 'Analysis', icon: BarChart3 },
  { to: '/history', label: 'History', icon: History },
  { to: '/progress', label: 'Progress', icon: TrendingUp },
] as const;

const configNavItems = [
  { to: '/settings' as const, label: 'Settings', icon: Settings },
  { to: '/settings' as const, hash: '#pitch' as const, label: 'Pitch Setting', icon: SlidersHorizontal },
];

export function AppSidebar() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const currentHash = routerState.location.hash;

  const { data: health, isError } = useQuery({
    queryKey: ['health'],
    queryFn: getHealth,
    refetchInterval: 30000,
  });

  const isConnected = health?.status === 'healthy';

  const isActive = (to: string, hash?: string) => {
    if (hash) {
      return currentPath === to && currentHash === hash;
    }
    return currentPath === to;
  };

  return (
    <Sidebar>
      <SidebarHeader className="h-14 flex items-center border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-2 px-2 font-bold text-lg">
          <Music className="h-5 w-5" />
          <span>Riyaaz</span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.to}>
                  <SidebarMenuButton asChild isActive={isActive(item.to)}>
                    <Link to={item.to}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Insights</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {insightsNavItems.map((item) => (
                <SidebarMenuItem key={item.to}>
                  <SidebarMenuButton asChild isActive={isActive(item.to)}>
                    <Link to={item.to}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Configuration</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {configNavItems.map((item) => {
                const hash = 'hash' in item ? item.hash : undefined;
                return (
                  <SidebarMenuItem key={`${item.to}${hash || ''}`}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive(item.to, hash)}
                    >
                      {'hash' in item ? (
                        <Link to={item.to} hash={item.hash}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.label}</span>
                        </Link>
                      ) : (
                        <Link to={item.to}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.label}</span>
                        </Link>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarSeparator />

      <SidebarFooter>
        <div className="flex items-center justify-between px-2">
          <Badge
            variant={isConnected ? 'default' : 'destructive'}
            className="gap-1.5"
          >
            <Circle
              className={`h-2 w-2 fill-current ${isConnected ? 'text-green-500' : 'text-red-500'}`}
            />
            {isConnected ? 'Connected' : isError ? 'Disconnected' : 'Connecting...'}
          </Badge>
          <ModeToggle />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
