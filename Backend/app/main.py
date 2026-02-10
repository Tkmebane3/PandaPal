import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware #added to prevent browser blocking from frontend origin
from app.api import router as api_router

app = FastAPI(title="PandaPal")

frontend_origin = os.getenv("frontend_origin", "http://localhost:5173")#temporary name until deployment

app.add_middleware( #Attaching CORS to app
    CORSMiddleware,
    allow_origins=[frontend_origin],
    allow_credentials=True, #for future deployment
    allow_methods=["*"],
    allow_headers=["*"],
    )

app.include_router(api_router) #attaches routes from api.py to main
