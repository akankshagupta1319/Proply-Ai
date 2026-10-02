import { PropertyFormInputs } from "./sample-data";

export interface FastAPIPredictionResponse {
  success: boolean;
  predicted_price_inr?: number;
  predicted_price_usd?: number;
  confidence_interval?: {
    min_inr: number;
    max_inr: number;
  };
  model_version?: string;
  error?: string;
}

export async function fetchFastAPIPrediction(
  inputs: PropertyFormInputs,
  backendUrl: string = "http://localhost:8000/predict"
): Promise<FastAPIPredictionResponse> {
  try {
    const response = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });

    if (!response.ok) {
      throw new Error(`Backend server returned HTTP status ${response.status}`);
    }

    const data = await response.json();
    return {
      success: true,
      predicted_price_inr: data.predicted_price_inr || data.prediction_inr,
      predicted_price_usd: data.predicted_price_usd,
      confidence_interval: data.confidence_interval,
      model_version: data.model_version || "RandomForestRegressor-v1",
    };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to connect to Python FastAPI server";
    return {
      success: false,
      error: errorMessage,
    };
  }
}
