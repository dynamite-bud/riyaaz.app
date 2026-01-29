# Riyaaz - Indian Classical Music Practice Tool

A modern web application for practicing Indian Classical Music with real-time pitch detection, voice analysis, and performance metrics.

## Tech Stack

### Frontend
- **Runtime:** Bun
- **Framework:** React 19
- **Build Tool:** Vite + SWC
- **Language:** TypeScript (strict mode)
- **Linter/Formatter:** Biome
- **State Management:** Zustand
- **Testing:** Vitest + Playwright

### Backend
- **Runtime:** Python 3.12+
- **Framework:** FastAPI
- **Validation:** Pydantic v2
- **Package Manager:** uv
- **Linter/Formatter:** Ruff
- **Type Checker:** Pyright
- **Testing:** pytest

## Project Structure

```
riyaaz.app/
├── frontend/          # React 19 + TypeScript + Vite
├── backend/           # FastAPI + Python 3.12
└── makefile           # Monorepo orchestration
```

## Setup

### Prerequisites
- [Bun](https://bun.sh/) >= 1.0
- [uv](https://github.com/astral-sh/uv) >= 0.1
- Python >= 3.12

### Quick Start

```bash
# Install all dependencies
make install

# Start development servers
make dev
# Frontend: http://localhost:5173
# Backend:  http://localhost:8000
# API Docs: http://localhost:8000/docs
```

## Development

### Monorepo Commands (run from root)

```bash
make help       # Show all available commands
make install    # Install all dependencies
make dev        # Start both servers
make build      # Build frontend for production
make test       # Run all tests
make lint       # Run all linters
make format     # Format all code
make clean      # Clean artifacts
```

### Frontend-Specific Commands (run from ./frontend)

```bash
bun run dev              # Dev server only
bun run build            # Production build
bun run preview          # Preview production build
bun run typecheck        # Type checking
bun run test:watch       # Test in watch mode
bun run test:coverage    # Test with coverage
bun run test:e2e         # Run E2E tests
bun run test:e2e:ui      # E2E tests with UI
bun run lint             # Lint only frontend
bun run lint:fix         # Lint and auto-fix
bun run format           # Format only frontend
bun run check            # Biome check + fix
```

### Backend-Specific Commands (run from ./backend)

```bash
uv run uvicorn app.main:app --reload    # Dev server only
uv run pytest --cov=app                 # Tests with coverage
uv run ruff check .                     # Lint only backend
uv run pyright                          # Type check only backend
make backend-shell                      # Python REPL with context
```

## Features

- Real-time pitch detection and analysis
- Swara (note) identification for Indian Classical Music
- Waveform and spectrogram visualization
- Practice session tracking and history
- Performance metrics and progress tracking
- Tanpura drone with adjustable Sa (tonic)
- Voice quality analysis

## Architecture

### Frontend Architecture
- Component-based React with lazy loading
- Zustand for global state management
- Path aliases for clean imports (`@/`, `@components/`, etc.)
- Biome for fast linting and formatting

### Backend Architecture
- FastAPI with async/await
- Pydantic v2 for data validation
- Modular router structure
- Core audio processing with librosa, torch
- WebSocket support for real-time features

## Command Structure

This monorepo uses **Makefile for orchestration** and **package.json for workflows**:

- **Root Makefile**: Commands that affect the entire project (install, dev, test, lint, format)
- **Frontend package.json**: Frontend-specific workflows (watch mode, coverage, e2e tests, builds)
- **Backend pyproject.toml**: Python tooling configuration (ruff, pyright, pytest)

## Contributing

1. Create a feature branch
2. Make your changes
3. Ensure `make lint` and `make test` pass
4. Submit a pull request

## License

MIT
