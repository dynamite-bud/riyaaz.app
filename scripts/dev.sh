#!/bin/bash

# Riyaaz Development Server Script

echo "🎵 Starting Riyaaz development servers..."

# Start backend in background
echo "Starting backend on port 8000..."
cd backend
source .venv/bin/activate
uv run uvicorn app.main:app --reload --port 8000 &
BACKEND_PID=$!

# Start frontend in background
echo "Starting frontend on port 3000..."
cd ../frontend
bun run dev &
FRONTEND_PID=$!

cd ..

echo ""
echo "✨ Development servers started!"
echo "Frontend: http://localhost:3000"
echo "Backend:  http://localhost:8000"
echo "API Docs: http://localhost:8000/docs"
echo ""
echo "Press Ctrl+C to stop all servers"

# Trap Ctrl+C and kill both processes
trap "echo 'Stopping servers...'; kill $BACKEND_PID $FRONTEND_PID; exit" INT

# Wait for both processes
wait
