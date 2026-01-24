import { useState } from "react";
import "../styles/FeaturePages.css";

export default function MedicationPage() {
  const [medicine, setMedicine] = useState("");
  const [time, setTime] = useState("");
  const [list, setList] = useState([]);

  const addMedicine = () => {
    if (!medicine || !time) return;
    setList([...list, { medicine, time }]);
    setMedicine("");
    setTime("");
  };

  return (
    <div className="feature-page">
      <div className="feature-container">
        <div className="feature-title">💊 Medication Reminders</div>

        <div className="input-row">
          <input
            placeholder="Medicine name"
            value={medicine}
            onChange={(e) => setMedicine(e.target.value)}
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <button onClick={addMedicine}>Add</button>
        </div>

        <div className="list">
          {list.map((item, i) => (
            <div key={i} className="list-item">
              <span>{item.medicine}</span>
              <span>{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
