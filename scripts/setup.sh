#!/bin/bash

# Riyaaz Project Setup Script

set -e

echo "🎵 Setting up Riyaaz Project..."

# Check prerequisites
echo "Checking prerequisites..."

if ! command -v bun &> /dev/null; then
    echo "❌ Bun is not installed. Please install from https://bun.sh"
    exit 1
fi

if ! command -v uv &> /dev/null; then
    echo "❌ uv is not installed. Please install from https://github.com/astral-sh/uv"
    exit 1
fi

echo "✅ Prerequisites found"

# Frontend setup
echo ""
echo "📦 Setting up frontend..."
cd frontend
bun install
echo "✅ Frontend dependencies installed"

# Backend setup
echo ""
echo "📦 Setting up backend..."
cd ../backend
uv python install 3.12
uv venv --python 3.12
uv sync --all-extras --dev
echo "✅ Backend dependencies installed"

cd ..

echo ""
echo "✨ Setup complete!"
echo ""
echo "To start development:"
echo "  make dev    # Start both servers"
echo "  make lint   # Run linters"
echo "  make test   # Run tests"
