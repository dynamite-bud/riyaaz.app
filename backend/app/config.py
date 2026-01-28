"""Application configuration."""

from functools import lru_cache
from typing import Literal

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Application settings."""

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
    )

    # Environment
    environment: Literal["development", "staging", "production"] = "development"
    debug: bool = True

    # Server
    host: str = "0.0.0.0"
    port: int = 8000

    # CORS
    cors_origins: list[str] = ["http://localhost:3000", "http://127.0.0.1:3000"]

    # Audio Processing
    sample_rate: int = 22050
    default_sa_frequency: float = 261.63  # C4

    # ML Models
    pitch_model: Literal["rmvpe", "fcpe", "crepe"] = "rmvpe"
    separation_model: Literal["demucs", "spleeter"] = "demucs"


@lru_cache
def get_settings() -> Settings:
    """Get cached settings instance."""
    return Settings()
