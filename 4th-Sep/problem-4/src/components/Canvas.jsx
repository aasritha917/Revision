import React from "react";
import { useForm } from "../context/FormContext";

export default function Canvas() {
  const { fields, setActiveId, deleteField, moveField, activeId } = useForm();

  function handleDragStart(e, idx) {
    e.dataTransfer.setData("text/plain", String(idx));
  }

  function handleDrop(e, idx) {
    const from = Number(e.dataTransfer.getData("text/plain"));
    if (from === idx) return;
    moveField(from, idx);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  return (
    <section className="canvas">
      <h3>Form Canvas</h3>
      {fields.length === 0 && <div className="empty">Drag fields here or click a field type</div>}
      <div className="field-list">
        {fields.map((f, i) => (
          <div
            key={f.id}
            draggable
            onDragStart={(e) => handleDragStart(e, i)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, i)}
            className={`field-card ${activeId===f.id?"active":""}`}
            onClick={() => setActiveId(f.id)}
          >
            <div className="field-row">
              <strong>{f.label}</strong>
              <div className="actions">
                <button onClick={(e)=>{e.stopPropagation(); deleteField(f.id);}}>Delete</button>
              </div>
            </div>
            <div className="meta">
              <span>{f.type}</span>
              {f.required && <span className="req">required</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
