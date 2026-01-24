import React, { useEffect, useState } from "react";
import "../styles/FeaturePages.css";

const JournalPage = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("journal"));
    if (saved) setNotes(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("journal", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="feature-page">
      <div className="feature-header">📔 <h1>Memory Journal</h1></div>

      <div className="feature-card">
        <div className="input-row">
          <textarea placeholder="Write a memory..." value={note} onChange={e => setNote(e.target.value)} />
          <button onClick={() => {
            if (!note) return;
            setNotes([...notes, note]);
            setNote("");
          }}>
            Save
          </button>
        </div>

        {notes.map((n, i) => (
          <div className="list-item" key={i}>
            <span>{n}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JournalPage;
