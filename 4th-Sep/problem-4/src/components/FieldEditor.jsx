import React from "react";
import { useForm } from "../context/FormContext";

export default function FieldEditor() {
  const { fields, activeId, updateField } = useForm();
  const field = fields.find(f => f.id === activeId);

  if (!field) return (
    <aside className="editor">
      <h3>Field Editor</h3>
      <div className="pick">Select a field to edit</div>
    </aside>
  );

  function change(k, v) {
    updateField(field.id, {[k]: v});
  }

  function updateOption(idx, val) {
    const options = [...field.options];
    options[idx] = val;
    change("options", options);
  }

  function addOption() {
    change("options", [...field.options, `Option ${field.options.length+1}`]);
  }

  function removeOption(idx) {
    const options = field.options.filter((_,i)=>i!==idx);
    change("options", options);
  }

  return (
    <aside className="editor">
      <h3>Field Editor</h3>
      <div className="form">
        <label>Label</label>
        <input value={field.label} onChange={e=>change("label", e.target.value)} />
        <label>Placeholder</label>
        <input value={field.placeholder} onChange={e=>change("placeholder", e.target.value)} />
        <label>
          <input type="checkbox" checked={field.required} onChange={e=>change("required", e.target.checked)} />
          Required
        </label>

        {(field.type === "dropdown" || field.type === "radio") && (
          <div className="options">
            <label>Options</label>
            {field.options.map((opt, i) => (
              <div key={i} className="opt-row">
                <input value={opt} onChange={e=>updateOption(i, e.target.value)} />
                <button onClick={()=>removeOption(i)}>x</button>
              </div>
            ))}
            <button onClick={addOption}>Add Option</button>
          </div>
        )}
      </div>
    </aside>
  );
}
