import React, { useEffect, useState } from "react";
import "../styles/FeaturePages.css";

const RoutinePage = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("routine"));
    if (saved) setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("routine", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="feature-page">
      <div className="feature-header">🕒 <h1>Daily Routine</h1></div>

      <div className="feature-card">
        <div className="input-row">
          <input placeholder="Add routine task" value={task} onChange={e => setTask(e.target.value)} />
          <div />
          <button onClick={() => { if (!task) return; setTasks([...tasks, task]); setTask(""); }}>
            Add
          </button>
        </div>

        {tasks.map((t, i) => (
          <div className="list-item" key={i}>
            <span>{t}</span>
            <button className="delete-btn" onClick={() => setTasks(tasks.filter((_, idx) => idx !== i))}>✕</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoutinePage;
