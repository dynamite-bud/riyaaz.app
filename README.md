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
├── backend/           # FastAPI + Python
├── shared/            # Shared types and utilities
├── docker/            # Docker configurations
├── scripts/           # Development scripts
└── .github/           # CI/CD workflows
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

# Start development servers (frontend:3000, backend:8000)
make dev
```

### Individual Commands

```bash
# Frontend only
cd frontend
bun install
bun run dev

# Backend only
cd backend
uv sync --all-extras --dev
uv run uvicorn app.main:app --reload
```

## Development

### Code Quality

```bash
# Run all linters
make lint

# Format all code
make format

# Run all tests
make test
```

### Frontend Commands

```bash
cd frontend
bun run dev          # Start dev server
bun run build        # Production build
bun run preview      # Preview production build
bun run typecheck    # Type checking
bun run lint         # Lint code
bun run format       # Format code
bun run test         # Run unit tests
bun run test:e2e     # Run E2E tests
```

### Backend Commands

```bash
cd backend
uv run uvicorn app.main:app --reload  # Start dev server
uv run ruff check .                   # Lint code
uv run ruff format .                  # Format code
uv run pyright                        # Type check
uv run pytest                         # Run tests
uv run pytest --cov=app               # Run tests with coverage
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

## CI/CD

GitHub Actions workflows for:
- Frontend: Type check → Lint → Test → Build
- Backend: Lint → Format → Type check → Test

## Contributing

1. Create a feature branch
2. Make your changes
3. Ensure `make lint` and `make test` pass
4. Submit a pull request

## License

MIT
