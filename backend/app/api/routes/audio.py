"""Audio processing routes."""

from fastapi import APIRouter


router = APIRouter()


@router.post("/upload")
async def upload_audio() -> dict[str, str]:
    """Upload audio file for processing."""
    return {"message": "Audio upload endpoint"}


@router.get("/stream")
async def stream_audio() -> dict[str, str]:
    """Stream audio processing."""
    return {"message": "Audio streaming endpoint"}
