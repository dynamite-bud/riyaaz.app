"""Analysis routes."""

from fastapi import APIRouter


router = APIRouter()


@router.post("/pitch")
async def analyze_pitch() -> dict[str, str]:
    """Analyze pitch from audio."""
    return {"message": "Pitch analysis endpoint"}


@router.post("/swara")
async def detect_swara() -> dict[str, str]:
    """Detect swara (notes) from audio."""
    return {"message": "Swara detection endpoint"}
