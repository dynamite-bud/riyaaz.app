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
