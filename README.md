# Proply AI — Intelligence Behind Every Property

Proply AI is a machine learning-powered house price prediction web application. It combines a modern web interface with a Python backend to help users estimate property prices based on selected property details.

## Overview

Proply AI brings machine learning into property price estimation through an accessible, user-friendly experience. The project uses a trained Random Forest model to generate predictions from property inputs submitted through the web application.

**Project tagline:** Intelligence Behind Every Property.

## Features

* **House Price Prediction:** Submit property details and receive a predicted price.
* **Machine Learning Backend:** Uses a trained Random Forest model.
* **Interactive Web Interface:** A responsive interface built for a smooth user experience.
* **Prediction Results:** Displays the model's estimated property price.
* **Frontend–Backend Integration:** Connects the Next.js application with a FastAPI backend.

## Tech Stack

### Frontend

* Next.js 15
* React 19
* TypeScript
* Tailwind CSS 4
* shadcn/ui

### Backend

* Python
* FastAPI
* Uvicorn
* Scikit-learn
* Pandas

### Machine Learning

* Random Forest Regressor
* Feature preprocessing
* Pickle model files for loading the trained model and feature information

## Project Structure

```text
Proply-Ai/
├── backend/
│   ├── main.py
│   ├── model.pkl
│   ├── feature_names.pkl
│   ├── house_price_features.pkl
│   └── house_price_random_forest.pkl
├── public/
├── src/
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── styles/
├── package.json
├── README.md
└── ...
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js and npm
* Python 3
* Git

### 1. Clone the Repository

```bash
git clone https://github.com/akankshagupta1319/Proply-Ai.git
cd Proply-Ai
```

### 2. Set Up the Frontend

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### 3. Run the Backend

Open a **second terminal** and navigate to the backend folder:

```bash
cd backend
```

Create and activate a virtual environment:

```bash
python -m venv venv
```

On Windows PowerShell:

```powershell
.\venv\Scripts\Activate
```

Install the backend dependencies:

```bash
pip install fastapi uvicorn pandas scikit-learn
```

Start the FastAPI server:

```bash
uvicorn main:app --host 127.0.0.1 --port 8000 --reload
```

Open http://127.0.0.1:8000/docs to view the API documentation.

> If your project has a `requirements.txt` file, use `pip install -r requirements.txt` instead of installing packages individually.

## How It Works

1. The user enters property details in the Proply AI web application.
2. The frontend sends the input to the FastAPI backend.
3. The backend prepares the input using the model's expected features.
4. The trained Random Forest model generates a price prediction.
5. The prediction is returned to the frontend and displayed to the user.

## Machine Learning Model

Proply AI uses a trained Random Forest model for house price prediction.

The backend includes serialized model and feature files used to load the trained model and prepare input data for prediction.

## Future Improvements

* Add more property-related insights and visualizations.
* Improve model performance through experimentation.
* Add model evaluation metrics to the project documentation.
* Deploy the frontend and backend for public access.
* Expand the prediction experience with additional user-friendly features.

## Acknowledgements

The frontend was initially developed using the [Mainline Next.js Template](https://github.com/shadcnblocks/mainline-nextjs-template) by [shadcnblocks](https://shadcnblocks.com/).

The original template documentation is available at [Shadcnblocks Documentation](https://docs.shadcnblocks.com/templates/getting-started).

---

**Proply AI — Intelligence Behind Every Property.**
