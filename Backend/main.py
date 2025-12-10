# from flask import Flask, request, jsonify
# from tensorflow.keras.models import load_model
# from tensorflow.keras.preprocessing import image
# import numpy as np
# import os
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app, resources={r"/api/*": {"origins" : "http://localhost:3000"}})

# app = Flask(__name__)

# MODEL_PATH = "alzheimers_model.h5"
# model = load_model(MODEL_PATH)

# CLASSES = ["MildDemented", "ModerateDemented", "NonDemented", "VeryMildDemented"]

# PRECAUTIONS = {
#     "MildDemented": [
#         "Engage in memory training exercises.",
#         "Maintain a balanced diet rich in fruits and vegetables.",
#         "Regular light physical activity like walking or yoga.",
#         "Schedule regular doctor checkups."
#     ],
#     "ModerateDemented": [
#         "Seek medical supervision for daily activities.",
#         "Ensure medications are taken on time.",
#         "Provide emotional support and a calm environment.",
#         "Consider assisted care if symptoms worsen."
#     ],
#     "NonDemented": [
#         "Continue a healthy lifestyle (diet, exercise, sleep).",
#         "Do regular brain exercises like puzzles, reading, or memory games.",
#         "Avoid smoking and alcohol.",
#         "Schedule yearly checkups to monitor brain health."
#     ],
#     "VeryMildDemented": [
#         "Stay socially active and engaged with friends/family.",
#         "Practice meditation or stress-reduction techniques.",
#         "Monitor for early signs of memory issues.",
#         "Consult a neurologist for early guidance."
#     ]
# }

# @app.route("/")
# def home():
#     return "Alzheimer's MRI Prediction API is running!"

# @app.route("/detect", methods=["POST"])
# def predict():
#     if "file" not in request.files:
#         return jsonify({"error": "No file uploaded"}), 400

#     file = request.files["file"]
#     if file.filename == "":
#         return jsonify({"error": "No file selected"}), 400

#     filepath = os.path.join("uploads", file.filename)
#     os.makedirs("uploads", exist_ok=True)
#     file.save(filepath)

#     img = image.load_img(filepath, target_size=(176, 176))
#     img_array = image.img_to_array(img) / 255.0
#     img_array = np.expand_dims(img_array, axis=0)

#     preds = model.predict(img_array)
#     pred_index = np.argmax(preds)
#     confidence = float(np.max(preds))

#     os.remove(filepath)

#     predicted_class = CLASSES[pred_index]

#     return jsonify({
#         "prediction": predicted_class,
#         "confidence": round(confidence, 2),
#         "precautions": PRECAUTIONS[predicted_class]
#     })

# if __name__ == "__main__":
#     app.run(debug=True)




# from flask import Flask, request, jsonify
# from tensorflow.keras.models import load_model
# from tensorflow.keras.preprocessing import image
# import numpy as np
# import os
# from flask_cors import CORS

# # 1. Initialize Flask app ONCE
# app = Flask(__name__)

# # 2. Configure CORS immediately after app initialization
# # Ensure origins matches your React app (http://localhost:3000)
# # Ensure resources matches your API endpoint path pattern (/api/*)
# CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

# MODEL_PATH = "alzheimers_model.h5"
# # It's better practice to check if the model file exists
# try:
#     model = load_model(MODEL_PATH)
# except FileNotFoundError:
#     print(f"ERROR: Model file not found at {MODEL_PATH}")
#     model = None # Handle this gracefully if needed
    
# CLASSES = ["MildDemented", "ModerateDemented", "NonDemented", "VeryMildDemented"]

# PRECAUTIONS = {
#     "MildDemented": [
#         "Engage in memory training exercises.",
#         "Maintain a balanced diet rich in fruits and vegetables.",
#         "Regular light physical activity like walking or yoga.",
#         "Schedule regular doctor checkups."
#     ],
#     "ModerateDemented": [
#         "Seek medical supervision for daily activities.",
#         "Ensure medications are taken on time.",
#         "Provide emotional support and a calm environment.",
#         "Consider assisted care if symptoms worsen."
#     ],
#     "NonDemented": [
#         "Continue a healthy lifestyle (diet, exercise, sleep).",
#         "Do regular brain exercises like puzzles, reading, or memory games.",
#         "Avoid smoking and alcohol.",
#         "Schedule yearly checkups to monitor brain health."
#     ],
#     "VeryMildDemented": [
#         "Stay socially active and engaged with friends/family.",
#         "Practice meditation or stress-reduction techniques.",
#         "Monitor for early signs of memory issues.",
#         "Consult a neurologist for early guidance."
#     ]
# }

# @app.route("/")
# def home():
#     return "Alzheimer's MRI Prediction API is running!"

# # 3. CRITICAL: Change the route to match the React fetch URL: /api/detect
# @app.route("/api/detect", methods=["POST"])
# def predict():
#     if model is None:
#         return jsonify({"error": "Model not loaded on server."}), 500
        
#     # 4. CRITICAL: Change the expected file key from "file" to "mri_file"
#     # This MUST match formData.append('mri_file', file) in DetectionPage.jsx
#     if "mri_file" not in request.files:
#         return jsonify({"error": "No MRI file uploaded (Expected key: mri_file)"}), 400

#     file = request.files["mri_file"] # ⬅ Updated key
    
#     if file.filename == "":
#         return jsonify({"error": "No file selected"}), 400

#     filepath = os.path.join("uploads", file.filename)
#     os.makedirs("uploads", exist_ok=True)
#     file.save(filepath)

#     # Preprocessing and Prediction Logic...
#     img = image.load_img(filepath, target_size=(176, 176))
#     img_array = image.img_to_array(img) / 255.0
#     img_array = np.expand_dims(img_array, axis=0)

#     preds = model.predict(img_array)
#     pred_index = np.argmax(preds)
#     confidence = float(np.max(preds))

#     os.remove(filepath)

#     predicted_class = CLASSES[pred_index]
    
#     # 5. CRITICAL: Format the JSON response keys to match React's expected structure
#     return jsonify({
#         "status": "success",
#         "diagnosis": predicted_class, # Use a more user-friendly key
#         "confidence_score": f"{round(confidence * 100, 2)}%",
#         "message": "AI analysis complete.",
#         "stage": predicted_class, 
#         "symptoms": ["Mild memory loss", "Slight confusion (Sample)"], # Add relevant mock symptoms here
#         "recommendations": PRECAUTIONS[predicted_class], # Use the precautions list
#         "hospitals": ["NeuroCare Hospital (Sample)", "AIIMS Neurology Wing (Sample)"] 
#     })

# if __name__ == "_main_":
#     # Flask defaults to port 5000
#     app.run(debug=True, port=5000)




from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

MODEL_PATH = "alzheimers_model_trained.keras"

model = load_model(MODEL_PATH)


CLASSES = ["MildDemented", "ModerateDemented", "NonDemented", "VeryMildDemented"]

PRECAUTIONS = {
    "MildDemented": [
        "Engage in memory training exercises.",
        "Maintain a balanced diet rich in fruits and vegetables.",
        "Regular light physical activity like walking or yoga.",
        "Schedule regular doctor checkups."
    ],
    "ModerateDemented": [
        "Seek medical supervision for daily activities.",
        "Ensure medications are taken on time.",
        "Provide emotional support and a calm environment.",
        "Consider assisted care if symptoms worsen."
    ],
    "NonDemented": [
        "Continue a healthy lifestyle (diet, exercise, sleep).",
        "Do regular brain exercises like puzzles, reading, or memory games.",
        "Avoid smoking and alcohol.",
        "Schedule yearly checkups to monitor brain health."
    ],
    "VeryMildDemented": [
        "Stay socially active and engaged with friends/family.",
        "Practice meditation or stress-reduction techniques.",
        "Monitor for early signs of memory issues.",
        "Consult a neurologist for early guidance."
    ]
}

@app.route("/detect", methods=["POST"])
def detect():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400
    file = request.files["file"]
    if file.filename == "":
        return jsonify({"error": "No file selected"}), 400

    os.makedirs("uploads", exist_ok=True)
    filepath = os.path.join("uploads", file.filename)
    file.save(filepath)

    img = image.load_img(filepath, target_size=(176, 176))
    img_array = image.img_to_array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    preds = model.predict(img_array)
    pred_index = int(np.argmax(preds))
    confidence = float(np.max(preds))
    predicted_class = CLASSES[pred_index]

    os.remove(filepath)

    return jsonify({
        "prediction": predicted_class,
        "confidence": round(confidence, 2),
        "precautions": PRECAUTIONS[predicted_class]
    })

if __name__ == "__main__":
    app.run(debug=True)
'''Detection of Alzheimer's Disease using Deep Learning'''