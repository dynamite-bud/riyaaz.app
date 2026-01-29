.PHONY: help install dev build test lint format clean backend-shell

help:
	@echo "Riyaaz Monorepo Commands"
	@echo "========================"
	@echo ""
	@echo "Setup:"
	@echo "  make install       - Install all dependencies"
	@echo "  make clean         - Clean build artifacts and dependencies"
	@echo ""
	@echo "Development:"
	@echo "  make dev           - Start both frontend and backend servers"
	@echo "  make build         - Build frontend for production"
	@echo ""
	@echo "Testing & Quality:"
	@echo "  make test          - Run all tests (frontend + backend)"
	@echo "  make lint          - Run all linters"
	@echo "  make format        - Format all code"
	@echo ""
	@echo "Utilities:"
	@echo "  make backend-shell - Open Python shell with backend context"
	@echo ""
	@echo "Frontend-specific commands (run from ./frontend):"
	@echo "  bun run dev        - Frontend dev server only"
	@echo "  bun run test:watch - Test in watch mode"
	@echo "  bun run test:e2e   - Run E2E tests"

install:
	@echo "📦 Installing dependencies..."
	@cd frontend && bun install
	@cd backend && uv sync --all-extras --dev
	@echo "✅ Dependencies installed"

dev:
	@echo "🚀 Starting development servers..."
	@echo "   Frontend: http://localhost:3000"
	@echo "   Backend:  http://localhost:8000"
	@echo "   Docs:     http://localhost:8000/docs"
	@echo ""
	@trap 'kill 0' INT; \
	(cd backend && uv run python -m uvicorn app.main:app --reload --port 8000) & \
	(cd frontend && bun run dev) & \
	wait

build:
	@echo "🔨 Building frontend..."
	@cd frontend && bun run build
	@echo "✅ Build complete: frontend/dist"

test:
	@echo "🧪 Running frontend tests..."
	@cd frontend && bun run test
	@echo ""
	@echo "🧪 Running backend tests..."
	@cd backend && uv run pytest
	@echo "✅ All tests passed"

lint:
	@echo "🔍 Linting frontend..."
	@cd frontend && bun run lint
	@echo ""
	@echo "🔍 Linting backend..."
	@cd backend && uv run ruff check . && uv run pyright
	@echo "✅ No lint errors"

format:
	@echo "✨ Formatting frontend..."
	@cd frontend && bun run format
	@echo ""
	@echo "✨ Formatting backend..."
	@cd backend && uv run ruff format .
	@echo "✅ Code formatted"

clean:
	@echo "🧹 Cleaning build artifacts..."
	@rm -rf frontend/dist frontend/node_modules frontend/.vite
	@rm -rf backend/.venv backend/__pycache__ backend/.pytest_cache
	@find . -type d -name "__pycache__" -exec rm -rf {} + 2>/dev/null || true
	@echo "✅ Cleaned"

backend-shell:
	@cd backend && uv run python
