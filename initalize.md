# Riyaaz Application - Project Initialization Document

## For: AI Initializer Agent

## Purpose: Setup complete monorepo project structure with all tooling configured

---

## Project Overview

**Application:** Riyaaz - Indian Classical Music Practice Tool  
**Architecture:** Monorepo with separate frontend and backend  
**Frontend:** React 19 + TypeScript + Vite + Bun + Biome  
**Backend:** Python 3.12+ + FastAPI + Pydantic + Ruff + Pyright

---

## Directory Structure to Create

```
riyaaz/
├── .github/
│   └── workflows/
│       ├── frontend-ci.yml
│       └── backend-ci.yml
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── pitch-meter/
│   │   │   ├── pitch-graph/
│   │   │   ├── swara-wheel/
│   │   │   ├── waveform/
│   │   │   ├── spectrogram/
│   │   │   └── harmonium/
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   ├── practice/
│   │   │   ├── analysis/
│   │   │   ├── history/
│   │   │   ├── progress/
│   │   │   └── settings/
│   │   ├── hooks/
│   │   ├── stores/
│   │   ├── services/
│   │   │   └── api/
│   │   ├── types/
│   │   ├── utils/
│   │   ├── assets/
│   │   ├── styles/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
│   ├── public/
│   ├── tests/
│   │   ├── unit/
│   │   └── e2e/
│   ├── index.html
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   ├── biome.json
│   ├── package.json
│   └── bun.lockb
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py
│   │   ├── config.py
│   │   ├── api/
│   │   │   ├── __init__.py
│   │   │   ├── routes/
│   │   │   │   ├── __init__.py
│   │   │   │   ├── audio.py
│   │   │   │   ├── analysis.py
│   │   │   │   ├── sessions.py
│   │   │   │   └── settings.py
│   │   │   └── deps.py
│   │   ├── core/
│   │   │   ├── __init__.py
│   │   │   ├── pitch_detection.py
│   │   │   ├── source_separation.py
│   │   │   ├── voice_analysis.py
│   │   │   └── metrics.py
│   │   ├── models/
│   │   │   ├── __init__.py
│   │   │   ├── audio.py
│   │   │   ├── analysis.py
│   │   │   └── session.py
│   │   ├── schemas/
│   │   │   ├── __init__.py
│   │   │   ├── audio.py
│   │   │   ├── analysis.py
│   │   │   └── session.py
│   │   ├── services/
│   │   │   ├── __init__.py
│   │   │   ├── audio_service.py
│   │   │   └── analysis_service.py
│   │   └── utils/
│   │       ├── __init__.py
│   │       └── audio_utils.py
│   ├── tests/
│   │   ├── __init__.py
│   │   ├── conftest.py
│   │   ├── test_api/
│   │   └── test_core/
│   ├── pyproject.toml
│   ├── requirements.txt
│   └── requirements-dev.txt
├── shared/
│   └── types/
│       └── api.ts
├── docker/
│   ├── Dockerfile.frontend
│   ├── Dockerfile.backend
│   └── docker-compose.yml
├── scripts/
│   ├── setup.sh
│   └── dev.sh
├── .gitignore
├── .editorconfig
├── README.md
└── Makefile
```

---

## Part 1: Frontend Setup

### 1.1 Initialize with Bun + Vite + React 19 + TypeScript

```bash
# Create frontend directory and initialize
cd riyaaz
bun create vite frontend --template react-swc-ts

# Navigate and install dependencies
cd frontend
bun install
```

### 1.2 Install Core Dependencies

```bash
# Core React 19 (if not already latest)
bun add react@^19 react-dom@^19

# Routing
bun add react-router-dom@^7

# State Management (Zustand - lightweight)
bun add zustand

# Audio/Visualization
bun add tone             # Audio synthesis (for tanpura drone)
bun add wavesurfer.js    # Waveform visualization
bun add d3               # For custom visualizations
bun add @visx/visx       # React visualization primitives

# HTTP Client
bun add ky               # Modern fetch wrapper (lighter than axios)

# WebSocket (for real-time)
bun add socket.io-client

# UI Utilities
bun add clsx             # Conditional classnames
bun add tailwind-merge   # Merge Tailwind classes

# Types
bun add -d @types/react @types/react-dom @types/d3
```

### 1.3 Install Dev Dependencies

```bash
# Biome (linter + formatter - replaces ESLint + Prettier)
bun add -d @biomejs/biome

# Testing
bun add -d vitest @testing-library/react @testing-library/jest-dom jsdom
bun add -d @vitest/coverage-v8
bun add -d playwright @playwright/test  # E2E testing

# TypeScript
bun add -d typescript @types/node

# Tailwind CSS
bun add -d tailwindcss postcss autoprefixer
```

### 1.4 Configuration Files

#### `frontend/biome.json`

```json
{
  "$schema": "https://biomejs.dev/schemas/2.0.0/schema.json",
  "vcs": {
    "enabled": true,
    "clientKind": "git",
    "useIgnoreFile": true,
    "defaultBranch": "main"
  },
  "files": {
    "ignoreUnknown": true,
    "include": [
      "src/**/*.ts",
      "src/**/*.tsx",
      "tests/**/*.ts",
      "tests/**/*.tsx"
    ],
    "ignore": ["node_modules", "dist", "coverage", ".next", "build"]
  },
  "formatter": {
    "enabled": true,
    "formatWithErrors": false,
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 100,
    "lineEnding": "lf"
  },
  "organizeImports": {
    "enabled": true
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "correctness": {
        "noUnusedImports": "error",
        "noUnusedVariables": "error",
        "useExhaustiveDependencies": "warn"
      },
      "style": {
        "noNonNullAssertion": "warn",
        "useConst": "error",
        "useTemplate": "error"
      },
      "suspicious": {
        "noExplicitAny": "warn",
        "noConsoleLog": "warn"
      },
      "a11y": {
        "recommended": true
      }
    }
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "single",
      "jsxQuoteStyle": "double",
      "trailingCommas": "es5",
      "semicolons": "always",
      "arrowParentheses": "always"
    }
  }
}
```

#### `frontend/tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting - Strict */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,

    /* Path aliases */
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@pages/*": ["src/pages/*"],
      "@hooks/*": ["src/hooks/*"],
      "@stores/*": ["src/stores/*"],
      "@services/*": ["src/services/*"],
      "@utils/*": ["src/utils/*"],
      "@types/*": ["src/types/*"],
      "@assets/*": ["src/assets/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

#### `frontend/vite.config.ts`

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@stores": path.resolve(__dirname, "./src/stores"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
      "/ws": {
        target: "ws://localhost:8000",
        ws: true,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          audio: ["tone", "wavesurfer.js"],
          visualization: ["d3"],
        },
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
    include: ["tests/unit/**/*.{test,spec}.{ts,tsx}"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: ["node_modules/", "tests/"],
    },
  },
});
```

#### `frontend/package.json`

```json
{
  "name": "riyaaz-frontend",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "bunx --bun vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "lint": "biome lint ./src",
    "lint:fix": "biome lint --write ./src",
    "format": "biome format --write ./src",
    "check": "biome check --write ./src",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "ci": "bun run typecheck && bun run lint && bun run test"
  }
}
```

#### `frontend/.vscode/settings.json`

```json
{
  "editor.defaultFormatter": "biomejs.biome",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.organizeImports.biome": "explicit",
    "source.fixAll.biome": "explicit"
  },
  "biome.enabled": true,
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true
}
```

---

## Part 2: Backend Setup

### 2.1 Initialize Python Project with uv (Fast Package Manager)

```bash
# Create backend directory
cd riyaaz
mkdir backend && cd backend

# Initialize with uv (modern Python package manager, Rust-based, fast)
# If uv not installed: curl -LsSf https://astral.sh/uv/install.sh | sh
uv init

# Create virtual environment
uv venv

# Activate (Linux/Mac)
source .venv/bin/activate
```

### 2.2 Install Core Dependencies

```bash
# Core Framework
uv add fastapi
uv add uvicorn[standard]
uv add python-multipart  # For file uploads
uv add websockets        # For real-time

# Data Validation
uv add pydantic
uv add pydantic-settings

# Audio Processing
uv add numpy
uv add scipy
uv add librosa
uv add soundfile

# ML/AI (Pitch Detection & Source Separation)
uv add torch torchaudio --index-url https://download.pytorch.org/whl/cpu
# Note: For GPU, use: --index-url https://download.pytorch.org/whl/cu118

# Voice Quality Analysis
uv add praat-parselmouth

# Noise Reduction
uv add noisereduce

# Database (optional, for session storage)
uv add sqlalchemy
uv add aiosqlite  # Async SQLite

# Utilities
uv add python-dotenv
uv add httpx  # Async HTTP client
```

### 2.3 Install Dev Dependencies

```bash
# Linting & Formatting (Ruff - fast, replaces flake8/isort/black)
uv add --dev ruff

# Type Checking (Pyright - fast, strict)
uv add --dev pyright

# Testing
uv add --dev pytest
uv add --dev pytest-asyncio
uv add --dev pytest-cov
uv add --dev httpx  # For testing FastAPI

# Pre-commit hooks
uv add --dev pre-commit
```

### 2.4 Configuration Files

#### `backend/pyproject.toml`

```toml
[project]
name = "riyaaz-backend"
version = "0.1.0"
description = "Riyaaz - Indian Classical Music Practice Tool Backend"
readme = "README.md"
requires-python = ">=3.12"
dependencies = [
    "fastapi>=0.115.0",
    "uvicorn[standard]>=0.32.0",
    "python-multipart>=0.0.18",
    "websockets>=14.0",
    "pydantic>=2.10.0",
    "pydantic-settings>=2.6.0",
    "numpy>=2.0.0",
    "scipy>=1.14.0",
    "librosa>=0.10.0",
    "soundfile>=0.12.0",
    "torch>=2.5.0",
    "torchaudio>=2.5.0",
    "praat-parselmouth>=0.4.0",
    "noisereduce>=3.0.0",
    "sqlalchemy>=2.0.0",
    "aiosqlite>=0.20.0",
    "python-dotenv>=1.0.0",
    "httpx>=0.28.0",
]

[project.optional-dependencies]
dev = [
    "ruff>=0.8.0",
    "pyright>=1.1.390",
    "pytest>=8.3.0",
    "pytest-asyncio>=0.24.0",
    "pytest-cov>=6.0.0",
    "pre-commit>=4.0.0",
]

[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

# ============= RUFF Configuration =============
[tool.ruff]
target-version = "py312"
line-length = 100
indent-width = 4

[tool.ruff.lint]
select = [
    "E",      # pycodestyle errors
    "W",      # pycodestyle warnings
    "F",      # Pyflakes
    "I",      # isort
    "B",      # flake8-bugbear
    "C4",     # flake8-comprehensions
    "UP",     # pyupgrade
    "ARG",    # flake8-unused-arguments
    "SIM",    # flake8-simplify
    "TCH",    # flake8-type-checking
    "PTH",    # flake8-use-pathlib
    "ERA",    # eradicate (commented out code)
    "PL",     # Pylint
    "RUF",    # Ruff-specific rules
    "ASYNC",  # flake8-async
    "S",      # flake8-bandit (security)
]
ignore = [
    "E501",   # line too long (handled by formatter)
    "B008",   # do not perform function calls in argument defaults
    "PLR0913", # too many arguments
    "S101",   # use of assert (fine in tests)
]
fixable = ["ALL"]
unfixable = []

[tool.ruff.lint.per-file-ignores]
"tests/**/*" = ["S101", "ARG001", "PLR2004"]

[tool.ruff.lint.isort]
known-first-party = ["app"]
force-single-line = false
lines-after-imports = 2

[tool.ruff.format]
quote-style = "double"
indent-style = "space"
skip-magic-trailing-comma = false
line-ending = "lf"
docstring-code-format = true

# ============= PYRIGHT Configuration =============
[tool.pyright]
pythonVersion = "3.12"
pythonPlatform = "Linux"
typeCheckingMode = "strict"
reportMissingImports = true
reportMissingTypeStubs = false
reportUnusedImport = true
reportUnusedVariable = true
reportUnusedFunction = "warning"
reportOptionalMemberAccess = "warning"
reportGeneralTypeIssues = true
venvPath = "."
venv = ".venv"
include = ["app", "tests"]
exclude = [
    "**/__pycache__",
    ".venv",
    "build",
    "dist",
]

# ============= PYTEST Configuration =============
[tool.pytest.ini_options]
testpaths = ["tests"]
python_files = ["test_*.py", "*_test.py"]
python_functions = ["test_*"]
asyncio_mode = "auto"
asyncio_default_fixture_loop_scope = "function"
addopts = [
    "-v",
    "--strict-markers",
    "--tb=short",
]
markers = [
    "slow: marks tests as slow",
    "integration: marks tests as integration tests",
]

[tool.coverage.run]
source = ["app"]
branch = true
omit = ["tests/*", "**/__init__.py"]

[tool.coverage.report]
exclude_lines = [
    "pragma: no cover",
    "def __repr__",
    "raise NotImplementedError",
    "if TYPE_CHECKING:",
]
```

#### `backend/.vscode/settings.json`

```json
{
  "python.defaultInterpreterPath": "${workspaceFolder}/.venv/bin/python",
  "python.analysis.typeCheckingMode": "strict",
  "python.analysis.autoImportCompletions": true,

  "[python]": {
    "editor.defaultFormatter": "charliermarsh.ruff",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.fixAll.ruff": "explicit",
      "source.organizeImports.ruff": "explicit"
    }
  },

  "ruff.enable": true,
  "ruff.lint.run": "onSave",
  "ruff.organizeImports": true,

  "python.testing.pytestEnabled": true,
  "python.testing.pytestArgs": ["tests"]
}
```

---

## Part 3: Starter Code Files

### 3.1 Backend Entry Point

#### `backend/app/main.py`

```python
"""Riyaaz Backend - FastAPI Application."""

from contextlib import asynccontextmanager
from typing import AsyncGenerator

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import audio, analysis, sessions, settings
from app.config import get_settings


@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncGenerator[None, None]:
    """Application lifespan handler."""
    # Startup
    print("🎵 Riyaaz Backend Starting...")
    yield
    # Shutdown
    print("🎵 Riyaaz Backend Shutting Down...")


def create_app() -> FastAPI:
    """Create and configure the FastAPI application."""
    config = get_settings()

    app = FastAPI(
        title="Riyaaz API",
        description="Indian Classical Music Practice Tool API",
        version="0.1.0",
        lifespan=lifespan,
    )

    # CORS
    app.add_middleware(
        CORSMiddleware,
        allow_origins=config.cors_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Include routers
    app.include_router(audio.router, prefix="/api/audio", tags=["Audio"])
    app.include_router(analysis.router, prefix="/api/analysis", tags=["Analysis"])
    app.include_router(sessions.router, prefix="/api/sessions", tags=["Sessions"])
    app.include_router(settings.router, prefix="/api/settings", tags=["Settings"])

    @app.get("/health")
    async def health_check() -> dict[str, str]:
        """Health check endpoint."""
        return {"status": "healthy", "service": "riyaaz-backend"}

    return app


app = create_app()


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
```

#### `backend/app/config.py`

```python
"""Application configuration."""

from functools import lru_cache
from typing import Literal

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Application settings."""

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
    )

    # Environment
    environment: Literal["development", "staging", "production"] = "development"
    debug: bool = True

    # Server
    host: str = "0.0.0.0"
    port: int = 8000

    # CORS
    cors_origins: list[str] = ["http://localhost:3000", "http://127.0.0.1:3000"]

    # Audio Processing
    sample_rate: int = 22050
    default_sa_frequency: float = 261.63  # C4

    # ML Models
    pitch_model: Literal["rmvpe", "fcpe", "crepe"] = "rmvpe"
    separation_model: Literal["demucs", "spleeter"] = "demucs"


@lru_cache
def get_settings() -> Settings:
    """Get cached settings instance."""
    return Settings()
```

### 3.2 Frontend Entry Point

#### `frontend/src/main.tsx`

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./styles/index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
```

#### `frontend/src/App.tsx`

```tsx
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Layout from "@components/common/Layout";
import LoadingSpinner from "@components/common/LoadingSpinner";

// Lazy load pages
const HomePage = lazy(() => import("@pages/home"));
const PracticePage = lazy(() => import("@pages/practice"));
const AnalysisPage = lazy(() => import("@pages/analysis"));
const HistoryPage = lazy(() => import("@pages/history"));
const ProgressPage = lazy(() => import("@pages/progress"));
const SettingsPage = lazy(() => import("@pages/settings"));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/analysis" element={<AnalysisPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
```

---

## Part 4: CI/CD Configuration

#### `.github/workflows/frontend-ci.yml`

```yaml
name: Frontend CI

on:
  push:
    branches: [main, develop]
    paths:
      - "frontend/**"
  pull_request:
    branches: [main]
    paths:
      - "frontend/**"

jobs:
  lint-and-test:
    runs-on: ubuntu-latest

    defaults:
      run:
        working-directory: frontend

    steps:
      - uses: actions/checkout@v4

      - name: Setup Bun
        uses: oven-sh/setup-bun@v2
        with:
          bun-version: latest

      - name: Install dependencies
        run: bun install --frozen-lockfile

      - name: Type check
        run: bun run typecheck

      - name: Lint
        run: bun run lint

      - name: Test
        run: bun run test:coverage

      - name: Build
        run: bun run build
```

#### `.github/workflows/backend-ci.yml`

```yaml
name: Backend CI

on:
  push:
    branches: [main, develop]
    paths:
      - "backend/**"
  pull_request:
    branches: [main]
    paths:
      - "backend/**"

jobs:
  lint-and-test:
    runs-on: ubuntu-latest

    defaults:
      run:
        working-directory: backend

    steps:
      - uses: actions/checkout@v4

      - name: Install uv
        uses: astral-sh/setup-uv@v4
        with:
          version: "latest"

      - name: Setup Python
        run: uv python install 3.12

      - name: Install dependencies
        run: uv sync --all-extras --dev

      - name: Lint with Ruff
        run: uv run ruff check .

      - name: Format check with Ruff
        run: uv run ruff format --check .

      - name: Type check with Pyright
        run: uv run pyright

      - name: Test with pytest
        run: uv run pytest --cov=app --cov-report=xml

      - name: Upload coverage
        uses: codecov/codecov-action@v4
        with:
          files: ./backend/coverage.xml
```

---

## Part 5: Scripts and Utilities

#### `Makefile` (Root)

```makefile
.PHONY: help install dev test lint format clean

help:
	@echo "Riyaaz Development Commands"
	@echo "==========================="
	@echo "make install    - Install all dependencies"
	@echo "make dev        - Start development servers"
	@echo "make test       - Run all tests"
	@echo "make lint       - Run linters"
	@echo "make format     - Format code"
	@echo "make clean      - Clean build artifacts"

install:
	cd frontend && bun install
	cd backend && uv sync --all-extras --dev

dev:
	@echo "Starting development servers..."
	@(cd backend && uv run uvicorn app.main:app --reload --port 8000) & \
	(cd frontend && bun run dev) & \
	wait

test:
	cd frontend && bun run test
	cd backend && uv run pytest

lint:
	cd frontend && bun run lint
	cd backend && uv run ruff check . && uv run pyright

format:
	cd frontend && bun run format
	cd backend && uv run ruff format .

clean:
	rm -rf frontend/dist frontend/node_modules frontend/.vite
	rm -rf backend/.venv backend/__pycache__ backend/.pytest_cache
	find . -type d -name "__pycache__" -exec rm -rf {} + 2>/dev/null || true
```

#### `.gitignore` (Root)

```gitignore
# Dependencies
node_modules/
.venv/
__pycache__/
*.pyc

# Build outputs
dist/
build/
*.egg-info/

# IDE
.idea/
*.swp
*.swo

# Environment
.env
.env.local
.env.*.local

# Testing
coverage/
.coverage
htmlcov/
.pytest_cache/

# OS
.DS_Store
Thumbs.db

# Logs
*.log
logs/

# Temp
*.tmp
.temp/

# Lock files (keep bun.lockb, but ignore others)
package-lock.json
yarn.lock
pnpm-lock.yaml
uv.lock
```

---

## Part 6: Execution Checklist

The initializer agent should execute these steps in order:

### Phase 1: Project Structure

- [ ] Create root `riyaaz/` directory
- [ ] Create all subdirectories as per structure above
- [ ] Create `.gitignore`, `.editorconfig`, `README.md`, `Makefile`

### Phase 2: Frontend Setup

- [ ] Initialize with `bun create vite frontend --template react-swc-ts`
- [ ] Install all dependencies (core + dev)
- [ ] Create `biome.json` configuration
- [ ] Create `tsconfig.json` with strict settings and path aliases
- [ ] Update `vite.config.ts` with aliases and test config
- [ ] Update `package.json` scripts
- [ ] Create `.vscode/settings.json`
- [ ] Create starter components and pages structure
- [ ] Create `tests/setup.ts` for Vitest

### Phase 3: Backend Setup

- [ ] Initialize with `uv init`
- [ ] Create virtual environment with `uv venv`
- [ ] Install all dependencies (core + dev)
- [ ] Create `pyproject.toml` with all tool configurations
- [ ] Create `.vscode/settings.json`
- [ ] Create starter app structure (`main.py`, `config.py`, routes, etc.)
- [ ] Create `tests/conftest.py` with fixtures

### Phase 4: CI/CD

- [ ] Create `.github/workflows/frontend-ci.yml`
- [ ] Create `.github/workflows/backend-ci.yml`

### Phase 5: Verification

- [ ] Run `make install` - should complete without errors
- [ ] Run `make lint` - should pass
- [ ] Run `make test` - should pass (with placeholder tests)
- [ ] Run `make dev` - both servers should start

---

## Tech Stack Summary

| Layer                    | Technology          | Purpose                                       |
| ------------------------ | ------------------- | --------------------------------------------- |
| **Frontend Runtime**     | Bun                 | Fast JS runtime & package manager             |
| **Frontend Framework**   | React 19            | UI library                                    |
| **Frontend Build**       | Vite + SWC          | Fast bundler with Rust compiler               |
| **Frontend Language**    | TypeScript (strict) | Type safety                                   |
| **Frontend Lint/Format** | Biome               | Fast all-in-one (replaces ESLint+Prettier)    |
| **Frontend State**       | Zustand             | Lightweight state management                  |
| **Frontend Test**        | Vitest + Playwright | Unit + E2E testing                            |
| **Backend Runtime**      | Python 3.12+        | ML-friendly runtime                           |
| **Backend Framework**    | FastAPI             | Modern async API framework                    |
| **Backend Validation**   | Pydantic v2         | Data validation                               |
| **Backend Lint/Format**  | Ruff                | Fast all-in-one (replaces flake8+black+isort) |
| **Backend Type Check**   | Pyright             | Strict type checking                          |
| **Backend Package Mgr**  | uv                  | Fast Rust-based pip replacement               |
| **Backend Test**         | pytest              | Testing framework                             |

---

## Notes for Agent

1. **Always use strict type checking** - TypeScript `strict: true`, Pyright `strict` mode
2. **Prefer newer tools** - Biome over ESLint, Ruff over flake8, uv over pip
3. **Path aliases are mandatory** - Makes imports cleaner
4. **All configs in single files** - `pyproject.toml` for Python, `biome.json` for TS
5. **CI must pass before merge** - Tests, lint, type check
6. **Use workspace-relative paths** - For VS Code settings

This document provides everything needed to bootstrap the Riyaaz application with modern, fast, and strict tooling.
