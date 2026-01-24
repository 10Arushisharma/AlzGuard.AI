import "../styles/FeaturePages.css";

export default function RecognitionPage() {
  return (
    <div className="feature-page">
      <div className="feature-container">
        <div className="feature-title">🧠 Face Recognition</div>

        <p style={{ opacity: 0.8 }}>
          Upload photos and store names of family & friends.
        </p>

        <div className="input-row">
          <input placeholder="Person name" />
          <button>Save</button>
        </div>

        <p style={{ marginTop: 20, fontSize: "0.9rem", opacity: 0.6 }}>
          (Face recognition logic can be integrated later)
        </p>
      </div>
    </div>
  );
}
