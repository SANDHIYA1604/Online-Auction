from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET")
CORS(app)
jwt = JWTManager(app)

from routes.auth import auth_bp
from routes.auctions import auctions_bp
from routes.bids import bids_bp

app.register_blueprint(auth_bp, url_prefix="/api/auth")
app.register_blueprint(auctions_bp, url_prefix="/api/auctions")
app.register_blueprint(bids_bp, url_prefix="/api/bids")

if __name__ == "__main__":
    app.run(debug=True, port=5000)