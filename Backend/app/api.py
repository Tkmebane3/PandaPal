from fastapi import APIRouter

router = APIRouter()

@router.get("/ping")
def ping():
    return {"PandaPal backend is alive"}
