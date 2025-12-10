import React, { useState } from "react";
import axios from "axios";
import "./DetectionPage.css";
import jsPDF from "jspdf";
import "jspdf-autotable";

const DetectionPage = () => {
  const [activeTab, setActiveTab] = useState("upload");
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  // ------------------------------
  // HANDLE IMAGE UPLOAD
  // ------------------------------
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file); // save actual file
      setImage(URL.createObjectURL(file)); // preview
    }
  };

  // ------------------------------
  // SEND MRI TO BACKEND
  // ------------------------------
  const handlePredict = async () => {
    if (!selectedFile) return;
    setIsAnalyzing(true);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/detect",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setResult(response.data);
    } catch (error) {
      console.error("Prediction error:", error);
      alert("Failed to predict MRI scan. Check backend connection.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  // ------------------------------
  // RESET ANALYSIS
  // ------------------------------
  const startNewAnalysis = () => {
    setImage(null);
    setResult(null);
    setSelectedFile(null);
  };

  // ------------------------------
  // DOWNLOAD REPORT
  // ------------------------------
  const downloadPDF = (result, image) => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Alzheimer's MRI Prediction Report", 20, 20);

    doc.setFontSize(12);
    doc.text(`Prediction: ${result.prediction}`, 20, 40);
    doc.text(
      `Confidence: ${(result.confidence * 100).toFixed(2)}%`,
      20,
      50
    );

    doc.text("Precautions:", 20, 70);
    result.precautions.forEach((p, i) => {
      doc.text(`- ${p}`, 25, 80 + i * 10);
    });

    // Upload MRI image
    if (image) {
      doc.addImage(image, "JPEG", 140, 30, 55, 55);
    }

    doc.save("MRI_Prediction_Report.pdf");
  };

  return (
    <div className="detection-page">
      <div className="container">
        <h1>Alzheimer's Detection</h1>
        <p className="instructions">
          Upload your brain MRI scan for analysis. Only brain MRI scans will be
          analyzed. Human face photos will be rejected.
        </p>

        {/* Navigation Tabs */}
        <div className="tabs">
          <button
            className={`tab ${activeTab === "upload" ? "active" : ""}`}
            onClick={() => setActiveTab("upload")}
          >
            Upload Image
          </button>

          <button
            className={`tab ${activeTab === "camera" ? "active" : ""}`}
            onClick={() => setActiveTab("camera")}
          >
            Use Camera
          </button>
        </div>

        {/* Upload Area */}
        {!image && (
          <div className="upload-area">
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </div>
        )}

        {/* Analysis Section */}
        <div className="upload-section">
          {image && (
            <div className="analysis-section">
              <img src={image} alt="MRI" className="preview-img" />

              {!result && (
                <button
                  className="btn-primary"
                  onClick={handlePredict}
                  disabled={isAnalyzing}
                >
                  {isAnalyzing ? "Analyzing..." : "Predict"}
                </button>
              )}

              {/* Display Results */}
              {result && (
                <div className="results">
                  <h2>Prediction: {result.prediction}</h2>
                  <p>Confidence: {(result.confidence * 100).toFixed(2)}%</p>

                  <h3>Precautions:</h3>
                  <ul>
                    {result.precautions.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>

                  <button
                    className="btn-primary"
                    onClick={() => downloadPDF(result, image)}
                  >
                    Download Report (PDF)
                  </button>

                  <button className="btn-primary" onClick={startNewAnalysis}>
                    Start New Analysis
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* How It Works Section */}
        <div className="how-it-works">
          <h2>How Our AI Works</h2>

          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Upload MRI Scan</h3>
                <p>Upload a brain MRI image through our secure platform.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>AI Analysis</h3>
                <p>
                  Our AI analyzes brain structures to detect Alzheimer's patterns.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Receive Results</h3>
                <p>Get instant results with personalized recommendations.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DetectionPage;
