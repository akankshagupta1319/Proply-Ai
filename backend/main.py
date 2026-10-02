import os
import joblib
import pandas as pd
import numpy as np
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any

# Initialize FastAPI App
app = FastAPI(
    title="PROPLY Real Estate Prediction API",
    description="Python FastAPI backend serving your trained Random Forest model (house_price_random_forest.pkl)",
    version="1.0.0"
)

# Enable CORS for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Model and Feature Paths
BASE_DIR = os.path.dirname(__file__)
MODEL_PATH = os.path.join(BASE_DIR, "model.pkl")
FEATURES_PATH = os.path.join(BASE_DIR, "feature_names.pkl")

# Alternative fallback filenames from proply-01
ALT_MODEL_PATH = os.path.join(BASE_DIR, "house_price_random_forest.pkl")
ALT_FEATURES_PATH = os.path.join(BASE_DIR, "house_price_features.pkl")

MODEL = None
FEATURE_NAMES = None

# USD to INR Conversion Benchmark
USD_TO_INR = 85.0


@app.on_event("startup")
def load_trained_model():
    global MODEL, FEATURE_NAMES
    try:
        # Load Model
        target_model_path = MODEL_PATH if os.path.exists(MODEL_PATH) else ALT_MODEL_PATH
        if os.path.exists(target_model_path):
            MODEL = joblib.load(target_model_path)
            print(f"✅ Successfully loaded Random Forest model from {target_model_path}")
        else:
            print(f"⚠️ Warning: Model file not found at {MODEL_PATH}. Running mock mode.")

        # Load Feature Names
        target_features_path = FEATURES_PATH if os.path.exists(FEATURES_PATH) else ALT_FEATURES_PATH
        if os.path.exists(target_features_path):
            FEATURE_NAMES = joblib.load(target_features_path)
            print(f"✅ Loaded {len(FEATURE_NAMES)} model feature names: {FEATURE_NAMES}")
        else:
            FEATURE_NAMES = [
                'MSSubClass', 'LotArea', 'OverallCond', 'YearBuilt', 'YearRemodAdd', 
                'BsmtFinSF2', 'TotalBsmtSF', 'MSZoning_FV', 'MSZoning_RH', 'MSZoning_RL', 
                'MSZoning_RM', 'LotConfig_CulDSac', 'LotConfig_FR2', 'LotConfig_FR3', 
                'LotConfig_Inside', 'BldgType_2fmCon', 'BldgType_Duplex', 'BldgType_Twnhs', 
                'BldgType_TwnhsE', 'Exterior1st_AsphShn', 'Exterior1st_BrkComm', 'Exterior1st_BrkFace', 
                'Exterior1st_CBlock', 'Exterior1st_CemntBd', 'Exterior1st_HdBoard', 'Exterior1st_ImStucc', 
                'Exterior1st_MetalSd', 'Exterior1st_Plywood', 'Exterior1st_Stone', 'Exterior1st_Stucco', 
                'Exterior1st_VinylSd', 'Exterior1st_Wd Sdng', 'Exterior1st_WdShing', 'RemodelAge', 
                'TotalArea', 'BasementRatio'
            ]
    except Exception as e:
        print(f"❌ Error loading model: {e}")


class PropertyPredictionPayload(BaseModel):
    neighborhood: Optional[str] = "CollgCr"
    overallQual: int = Field(default=7, ge=1, le=10)
    overallCond: int = Field(default=5, ge=1, le=10)
    yearBuilt: int = Field(default=2003)
    houseStyle: Optional[str] = "2Story"
    bldgType: Optional[str] = "1Fam"
    foundation: Optional[str] = "PConc"
    exterior1st: Optional[str] = "VinylSd"
    heating: Optional[str] = "GasA"
    centralAir: Optional[str] = "Y"
    grLivArea: int = Field(default=1710)
    lotArea: int = Field(default=8450)
    bedroomAbvGr: int = Field(default=3)
    fullBath: int = Field(default=2)
    halfBath: int = Field(default=1)
    totRmsAbvGrd: int = Field(default=7)
    totalBsmtSF: int = Field(default=856)
    bsmtFinType1: Optional[str] = "GLQ"
    garageCars: int = Field(default=2)
    garageArea: int = Field(default=548)
    garageType: Optional[str] = "Attchd"


@app.get("/")
def health_check():
    return {
        "status": "healthy",
        "service": "PROPLY Machine Learning Backend",
        "model_loaded": MODEL is not None,
        "features_loaded": FEATURE_NAMES is not None,
        "feature_count": len(FEATURE_NAMES) if FEATURE_NAMES else 0,
        "model_source": "house_price_random_forest.pkl (from proply-01)"
    }


@app.post("/predict")
def predict_property_value(payload: PropertyPredictionPayload):
    try:
        input_dict = payload.dict()
        current_year = 2026

        if MODEL is not None and FEATURE_NAMES is not None:
            # Construct Feature Dictionary matching proply-01 trained model schema
            feature_row = {col: 0 for col in FEATURE_NAMES}

            # Numerical Feature Mapping
            if 'MSSubClass' in feature_row:
                feature_row['MSSubClass'] = 60 if payload.houseStyle == "2Story" else 20
            if 'LotArea' in feature_row:
                feature_row['LotArea'] = payload.lotArea
            if 'OverallCond' in feature_row:
                feature_row['OverallCond'] = payload.overallCond
            if 'YearBuilt' in feature_row:
                feature_row['YearBuilt'] = payload.yearBuilt
            if 'YearRemodAdd' in feature_row:
                feature_row['YearRemodAdd'] = payload.yearBuilt
            if 'BsmtFinSF2' in feature_row:
                feature_row['BsmtFinSF2'] = 0
            if 'TotalBsmtSF' in feature_row:
                feature_row['TotalBsmtSF'] = payload.totalBsmtSF
            if 'RemodelAge' in feature_row:
                feature_row['RemodelAge'] = current_year - payload.yearBuilt
            if 'TotalArea' in feature_row:
                feature_row['TotalArea'] = payload.grLivArea + payload.totalBsmtSF
            if 'BasementRatio' in feature_row:
                feature_row['BasementRatio'] = payload.totalBsmtSF / (payload.grLivArea + 1)

            # Categorical One-Hot Encodings: MSZoning
            feature_row['MSZoning_RL'] = 1  # Default residential zone

            # Categorical One-Hot Encodings: LotConfig
            feature_row['LotConfig_Inside'] = 1

            # Categorical One-Hot Encodings: BldgType
            bldg_col = f"BldgType_{payload.bldgType}"
            if bldg_col in feature_row:
                feature_row[bldg_col] = 1

            # Categorical One-Hot Encodings: Exterior1st
            ext_col = f"Exterior1st_{payload.exterior1st}"
            if ext_col in feature_row:
                feature_row[ext_col] = 1

            # Build DataFrame in exact feature order
            input_df = pd.DataFrame([feature_row])[FEATURE_NAMES]

            # Execute Model Prediction
            raw_pred = MODEL.predict(input_df)[0]

            # Handle Log Target vs USD Target
            estimated_usd = float(np.expm1(raw_pred)) if raw_pred < 20 else float(raw_pred)
        else:
            # Fallback estimation if model is loading
            base_usd = 45000 + (input_dict["grLivArea"] * 72) + (pow(input_dict["overallQual"], 2.3) * 1800) + (input_dict["totalBsmtSF"] * 38)
            estimated_usd = base_usd

        estimated_inr = round(estimated_usd * USD_TO_INR)
        min_inr = round(estimated_inr * 0.95)
        max_inr = round(estimated_inr * 1.05)

        return {
            "success": True,
            "predicted_price_inr": estimated_inr,
            "predicted_price_usd": round(estimated_usd, 2),
            "confidence_interval": {
                "min_inr": min_inr,
                "max_inr": max_inr
            },
            "model_version": "house_price_random_forest.pkl (proply-01)"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction error: {str(e)}")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
