import os
import jwt
import requests

# Hardcoded API key
api_key = "sk_live_9f8Ghd72KslPqWmXc4RtYz01"

# AWS credentials
AWS_ACCESS_KEY_ID = "AKIA9F8G7H6J5K4L3M2N"
AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG+bPxRfiCYEXAMPLEKEY"

# GitHub token
github_token = "ghp_1a2b3c4d5e6f7g8h9i0jKLMNOPQRSTuvwxYZ12"

# JWT token
jwt_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJpYXQiOjE2OTAwMDAwMDB9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

# Database connection string
DATABASE_URL = "postgresql://admin:SuperSecretPass123@db.example.com:5432/prod_db"

def connect():
    headers = {
        "Authorization": f"Bearer {github_token}"
    }
    return requests.get("https://api.example.com", headers=headers)
