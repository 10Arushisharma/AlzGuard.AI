import React, { useEffect, useState } from "react";
import "../styles/FeaturePages.css";

const MedicationPage = () => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [meds, setMeds] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("medications"));
    if (saved) setMeds(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("medications", JSON.stringify(meds));
  }, [meds]);

  const addMedicine = () => {
    if (!name || !time) return;
    setMeds([...meds, { name, time }]);
    setName("");
    setTime("");
  };

  return (
    <div className="feature-page">
      <div className="feature-header">💊 <h1>Medication Reminders</h1></div>

      <div className="feature-card">
        <div className="input-row">
          <input placeholder="Medicine name" value={name} onChange={e => setName(e.target.value)} />
          <input type="time" value={time} onChange={e => setTime(e.target.value)} />
          <button onClick={addMedicine}>Add</button>
        </div>

        {meds.map((m, i) => (
          <div className="list-item" key={i}>
            <span>{m.name} — {m.time}</span>
            <button className="delete-btn" onClick={() => setMeds(meds.filter((_, idx) => idx !== i))}>✕</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicationPage;
