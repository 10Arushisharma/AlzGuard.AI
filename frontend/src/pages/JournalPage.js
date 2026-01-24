import { useState } from "react";
import "../styles/FeaturePages.css";

export default function JournalPage() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  return (
    <div className="feature-page">
      <div className="feature-container">
        <div className="feature-title">📓 Memory Journal</div>

        <div className="input-row">
          <input
            placeholder="Write a memory..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <button
            onClick={() => {
              if (!note) return;
              setNotes([...notes, note]);
              setNote("");
            }}
          >
            Add
          </button>
        </div>

        <div className="list">
          {notes.map((n, i) => (
            <div key={i} className="list-item">{n}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
