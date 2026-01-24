import React, { useEffect, useState } from "react";
import "../styles/FeaturePages.css";

const RecognitionPage = () => {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("people"));
    if (saved) setPeople(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("people", JSON.stringify(people));
  }, [people]);

  return (
    <div className="feature-page">
      <div className="feature-header">🧠 <h1>Recognition Memory</h1></div>

      <div className="feature-card">
        <div className="input-row">
          <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          <input placeholder="Relation" value={relation} onChange={e => setRelation(e.target.value)} />
          <button onClick={() => {
            if (!name || !relation) return;
            setPeople([...people, { name, relation }]);
            setName(""); setRelation("");
          }}>
            Save
          </button>
        </div>

        {people.map((p, i) => (
          <div className="list-item" key={i}>
            <span>{p.name} — {p.relation}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecognitionPage;
