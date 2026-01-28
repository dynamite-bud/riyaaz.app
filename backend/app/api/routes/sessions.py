"""Practice session routes."""

from fastapi import APIRouter


router = APIRouter()


@router.post("/")
async def create_session() -> dict[str, str]:
    """Create a new practice session."""
    return {"message": "Create session endpoint"}


@router.get("/{session_id}")
async def get_session(session_id: str) -> dict[str, str]:
    """Get practice session by ID."""
    return {"message": f"Get session {session_id} endpoint"}


@router.get("/")
async def list_sessions() -> dict[str, str]:
    """List all practice sessions."""
    return {"message": "List sessions endpoint"}
