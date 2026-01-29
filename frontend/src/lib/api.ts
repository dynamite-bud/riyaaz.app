import ky from 'ky';

export const api = ky.create({
  prefixUrl: '/api',
  timeout: 10000,
});

// Health check
export interface HealthResponse {
  status: string;
  service: string;
}

export const getHealth = () => fetch('/health').then((res) => res.json() as Promise<HealthResponse>);

// Sessions
export interface Session {
  id: string;
  name: string;
  createdAt: string;
}

export const getSessions = () => api.get('sessions').json<Session[]>();
export const createSession = (data: { name: string }) => api.post('sessions', { json: data }).json<Session>();

// Settings
export interface Settings {
  sampleRate: number;
  defaultSaFrequency: number;
}

export const getSettings = () => api.get('settings').json<Settings>();
export const updateSettings = (data: Partial<Settings>) =>
  api.put('settings', { json: data }).json<Settings>();
