"""Settings routes."""

from fastapi import APIRouter


router = APIRouter()


@router.get("/")
async def get_settings() -> dict[str, str]:
    """Get application settings."""
    return {"message": "Get settings endpoint"}


@router.put("/")
async def update_settings() -> dict[str, str]:
    """Update application settings."""
    return {"message": "Update settings endpoint"}
