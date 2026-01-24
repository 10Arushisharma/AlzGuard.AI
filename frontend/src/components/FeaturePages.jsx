import { useNavigate } from "react-router-dom";
import "../styles/FeaturePages.css";

export default function FeaturesPage() {
  const navigate = useNavigate();

  return (
    <div className="features-container">
      <div className="features-grid">

        <div className="feature-card" onClick={() => navigate("/medication")}>
          <span className="icon">💊</span>
          <h3>Medication Reminders</h3>
          <p>Alerts for pills with dosage & timing.</p>
        </div>

        <div className="feature-card" onClick={() => navigate("/routine")}>
          <span className="icon">📅</span>
          <h3>Daily Routine Scheduling</h3>
          <p>Simple daily task planning.</p>
        </div>

        <div className="feature-card" onClick={() => navigate("/recognition")}>
          <span className="icon">🧑‍🤝‍🧑</span>
          <h3>Photo & Name Recognition</h3>
          <p>Remember people with photos.</p>
        </div>

        <div className="feature-card" onClick={() => navigate("/journal")}>
          <span className="icon">📓</span>
          <h3>Personal Memory Journal</h3>
          <p>Store notes & memories.</p>
        </div>

      </div>
    </div>
  );
}
