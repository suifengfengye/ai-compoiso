
from fastapi import FastAPI
from .router import docs

app = FastAPI()

app.include_router(docs.router)


@app.get("/")
async def app_root():
    return {"message": "root path"}
