// Common API types shared between frontend and backend

export interface HealthResponse {
  status: string;
  service: string;
}

export interface ErrorResponse {
  detail: string;
}

export interface AudioUploadResponse {
  id: string;
  filename: string;
  duration: number;
}

export interface PitchAnalysisResponse {
  frequencies: number[];
  timestamps: number[];
  confidence: number[];
}

export interface SwaraDetectionResponse {
  swaras: string[];
  timestamps: number[];
  accuracy: number;
}

export interface SessionResponse {
  id: string;
  createdAt: string;
  duration: number;
  metrics: Record<string, number>;
}
