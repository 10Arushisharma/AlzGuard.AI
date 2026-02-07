# 🧠 AlzGuard.AI  
**AI-Based Early Alzheimer’s Disease Detection Platform**

AlzGuard.AI is an end-to-end AI-powered web application designed to assist in the **early detection and stage-wise classification of Alzheimer’s Disease** using brain MRI scans.  
The platform combines **deep learning**, **medical explainability**, and a **user-friendly web interface** to support clinicians, caregivers, and users in understanding cognitive health risks—early and transparently.
Live platform: https://alz-guard-ai.vercel.app/
---

## 🚀 Key Features

### 🧠 AI-Driven Alzheimer’s Classification
- Uses a **Convolutional Neural Network (CNN)** trained on brain MRI images
- Classifies Alzheimer’s into **four clinically relevant stages**:
  - Non-Demented  
  - Very Mild Demented  
  - Mild Demented  
  - Moderate Demented  

### 🔍 Explainable AI with Grad-CAM
- Implements **Grad-CAM (Gradient-weighted Class Activation Mapping)**
- Highlights **brain regions influencing the model’s predictions**
- Enhances **medical transparency and trust**
- Assists doctors in understanding *why* a prediction was made

### 🧪 Cognitive Awareness Quiz
- 7-question cognitive health quiz
- Encourages early screening and awareness
- Non-diagnostic and user-friendly

### 🌐 Full-Stack Web Application
- Home Page  
- About Page  
- Prediction Page  
- Quiz Page  
- What-To-Do Page  
- Sign-Up / Authentication Page  

---

## 🛠️ Tech Stack

### Frontend
- React.js

### Backend
- Flask (Python)

### Database
- Firebase (Authentication & user management)
- MongoDB (User data, predictions, quiz results)

### Machine Learning
- Deep Learning: CNN trained on MRI images
- Data augmentation for robust learning
- Optimized using **Adam Optimizer**
- **EarlyStopping** to prevent overfitting
- Explainability via **Grad-CAM**

---

## 🧬 Model Details

- **Input:** Brain MRI images  
- **Output:** Alzheimer’s stage classification  
- **Explainability:** Grad-CAM heatmaps  
- **Optimization:** Adam + EarlyStopping  

---

## ⚙️ Installation & Setup Instructions

### ✅ Prerequisites
- Node.js (v16+)
- npm or yarn
- Python (v3.8–v3.11 recommended)
- pip
- Git
- Modern web browser

---

## 📁 Project Structure
AlzGuard.AI/
│
├── frontend/ # ReactJS frontend
├── backend/ # Flask backend + ML model
├── model/ # CNN model, weights, Grad-CAM logic
├── README.md

---

## 🖥️ Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs at:
```bash
http://localhost:3000
```

🧠 Backend Setup
```bash
cd backend
python -m venv venv
```

Activate virtual environment:


Windows
```bash
venv\Scripts\activate
```

macOS / Linux
```bash
source venv/bin/activate
```


Install dependencies:
```bash
pip install -r requirements.txt
```

Run Flask server:
```bash
python app.py
```

Backend runs at:
```bash
http://localhost:5000
```

## 🔌 Database Configuration

### Firebase
- Used for **authentication and user management**
- Enable **Email/Password Authentication** in Firebase Console
- Add Firebase configuration keys to the frontend environment variables

Example (`.env`):
```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
```

## 🗄️ MongoDB Configuration

- MongoDB is used to store:
  - User profiles  
  - Prediction history  
  - Quiz responses  

- Add the MongoDB connection URI to the backend configuration file:

```python
MONGO_URI = "mongodb+srv://<username>:<password>@cluster.mongodb.net/alzguard"
```

## 🧪 Using the System

- Upload a **brain MRI image** on the **Prediction Page**
- The **CNN model** processes the image and predicts the Alzheimer’s stage
- **Grad-CAM visualizations** highlight affected regions of the brain
- Results include:
  - **Predicted class**
  - **Confidence score**
  - **Explainable heatmap output**

---

## 🧩 Quiz Module

- Navigate to the **Quiz Page**
- Answer **7 cognitive-awareness questions**
- Responses are **secuhttp://localhost:3000rely stored**
- Designed for **awareness and early insight**, not diagnosis

---

## ⚠️ Disclaimer

AlzGuard.AI is intended for **research and educational purposes only**.  
It is **not a substitute for professional medical diagnosis or treatment**.

---

## 👩‍💻 Author

Built with a focus on **early detection, explainable AI, and healthcare transparency**.

