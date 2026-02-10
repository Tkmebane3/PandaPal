from fastapi import APIRouter

router = APIRouter()

@router.get("/ping")
def ping():
    return {"status": "ok", "message": "PandaPal backend is alive ✅"}
