from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import pickle
import pandas as pd
import json
import google.generativeai as genai
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load trained model
with open("models/LogisticRegression.pkl", "rb") as f:
    model = pickle.load(f)

# Configure Google Gemini AI
genai.configure(api_key='AIzaSyA06SF39icaaGv_uYlhnccnwkpZOxicq_s')
ai_model = genai.GenerativeModel('gemini-2.0-flash')

@app.post("/predict")
async def predict(request: Request):
    user_data = await request.json()
    print("Received Data:", user_data)

    # Convert categorical values
    user_data['gender'] = 1 if user_data['gender'].lower() == 'male' else 0
    user_data['ever_married'] = 1 if user_data['ever_married'].lower() == 'yes' else 0
    user_data['work_type'] = {'private': 0, 'self-employed': 1, 'children': 2, 'govt_job': 3}.get(user_data['work_type'].lower(), 3)
    user_data['Residence_type'] = 1 if user_data['Residence_type'].lower() == 'urban' else 0
    user_data['smoking_status'] = {'never smoked': 0, 'formerly smoked': 1, 'smokes': 2, 'unknown': 3}.get(user_data['smoking_status'].lower(), 3)

    # Convert integer fields
    user_data['hypertension'] = int(user_data['hypertension'])
    user_data['heart_disease'] = int(user_data['heart_disease'])

    # Convert to DataFrame
    df = pd.DataFrame([user_data])

    # Ensure features match training data order
    df = df[model.feature_names_in_]

    # Debugging: Print processed input data
    print("Processed DataFrame for Prediction:\n", df)
    print("Feature Columns in Model:", model.feature_names_in_)
    print("Feature Columns in Input Data:", df.columns.tolist())

    # Get probability prediction
    proba = model.predict_proba(df)[:, 1][0]  # Probability of stroke
    print(f"Probability Score: {proba:.4f}")

    # Adjust threshold to classify more cases as stroke
    threshold = 0.2  # Lowered from 0.4
    prediction = int(proba >= threshold)

    print(f"Final Prediction: {prediction}")

    # Generate AI-based health recommendations
    prompt = {
    "instruction": "Analyze the given user health data and generate personalized heart health recommendations. The output must be strictly in valid JSON format with consistent data structures.",
    "user_data": user_data,
    "task": {
        "generate_analysis": "Based on the provided data, analyze the user's heart health risk factors and provide insights.",
        "generate_recommendations": {
            "medications": "Suggest potential medication classes if required (e.g., statins for cholesterol, antihypertensives for high BP). Return as an array of objects with 'name' and 'description' fields.",
            "doctors": "Recommend specialists (e.g., cardiologist, endocrinologist, dietitian) based on risk factors. Return as an array of objects with 'specialist' and 'reason' fields.",
            "exercises": "List suitable physical activities considering age, BMI, and medical history. Return as an array of objects with 'activity' and 'benefits' fields.",
            "diets": "Provide a heart-healthy diet plan with foods to include and avoid. Return as an array of objects with 'category' and 'recommendations' fields.",
            "lifestyle_tips": "Suggest lifestyle changes for better heart health (e.g., stress management, sleep improvement). Return as an array of objects with 'area' and 'suggestions' fields."
        }
    },
    "output_format": {
        "structure": {
            "analysis": "String containing overall health analysis",
            "risk_level": "String indicating overall risk level (low, moderate, high)",
            "recommendations": {
                "medications": [{"name": "String", "description": "String"}],
                "doctors": [{"specialist": "String", "reason": "String"}],
                "exercises": [{"activity": "String", "benefits": "String"}],
                "diets": [{"category": "String", "recommendations": "String"}],
                "lifestyle_tips": [{"area": "String", "suggestions": "String"}]
            }
        },
        "requirements": "The response must be a valid JSON object containing all the analysis and recommendations with consistent array structures for each recommendation category."
    }
}

    ai_response = ai_model.generate_content(json.dumps(prompt))
    
    try:
        json_response = json.loads(ai_response.text[7:-3])
    except json.JSONDecodeError:
        json_response = {"error": "Invalid response from AI model"}

    return {
        "prediction": prediction,  # 0 = No stroke, 1 = Stroke risk
        "probability": proba,  # Probability of stroke
        "recommendations": json_response
    }
