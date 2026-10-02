# PROPLY — Python FastAPI Model Server

This directory contains the Python FastAPI microservice that connects your trained `.pkl` Random Forest model to the PROPLY Next.js frontend.

## How to Connect Your Trained Model

1. **Copy your trained files into this directory (`/backend`):**
   - Copy your trained Random Forest model `.pkl` file as `model.pkl`.
   - Copy your feature list file `.pkl` as `feature_names.pkl` (optional).

2. **Install Python dependencies:**
   ```bash
   pip install fastapi uvicorn scikit-learn pandas numpy joblib
   ```

3. **Start the FastAPI server:**
   ```bash
   python main.py
   ```
   Or:
   ```bash
   uvicorn main:app --reload --port 8000
   ```

4. **Verify the server is running:**
   Open http://localhost:8000 in your browser or inspect http://localhost:8000/docs for interactive OpenAPI docs.

5. **Enable FastAPI Mode in PROPLY UI:**
   Navigate to the `/predict` page on the PROPLY frontend and click the **Python FastAPI Integration** toggle switch to ON. The frontend will automatically post form payloads to `http://localhost:8000/predict`.
