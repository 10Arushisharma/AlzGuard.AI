import { useState } from "react";
import "../styles/FeaturePages.css";

export default function RoutinePage() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div className="feature-page">
      <div className="feature-container">
        <div className="feature-title">📅 Daily Routine</div>

        <div className="input-row">
          <input
            placeholder="Add a routine task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            onClick={() => {
              if (!task) return;
              setTasks([...tasks, task]);
              setTask("");
            }}
          >
            Add
          </button>
        </div>

        <div className="list">
          {tasks.map((t, i) => (
            <div key={i} className="list-item">{t}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
