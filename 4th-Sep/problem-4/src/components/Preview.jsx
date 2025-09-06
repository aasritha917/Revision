import React, { useState } from "react";
import { useForm } from "../context/FormContext";
import FieldRenderer from "./FieldRenderer";

export default function Preview() {
  const { fields } = useForm();
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(null);

  function handleChange(id, val) {
    setFormData(prev => ({...prev, [id]: val}));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errors = [];
    fields.forEach(f => {
      if (f.required) {
        const v = formData[f.id];
        if (f.type === "checkbox") {
          if (!v) errors.push(`${f.label} is required`);
        } else {
          if (!v && v !== 0) errors.push(`${f.label} is required`);
        }
      }
    });
    if (errors.length) {
      setSubmitted({ ok: false, errors });
      return;
    }
    const readable = {};
    fields.forEach(f => {
      readable[f.label] = formData[f.id] ?? "";
    });
    setSubmitted({ ok: true, data: readable });
  }

  return (
    <div className="preview">
      <h3>Preview Form</h3>
      {fields.length === 0 && <div className="empty">No fields. Add fields in builder.</div>}
      <form onSubmit={handleSubmit}>
        {fields.map(f => (
          <FieldRenderer key={f.id} field={f} value={formData[f.id]} onChange={(v)=>handleChange(f.id, v)} />
        ))}
        {fields.length>0 && <button type="submit">Submit</button>}
      </form>

      {submitted && (
        <div className="result">
          {!submitted.ok ? (
            <div className="errors">
              <h4>Validation Errors</h4>
              <ul>{submitted.errors.map((e,i)=><li key={i}>{e}</li>)}</ul>
            </div>
          ) : (
            <div>
              <h4>Submitted Data (JSON)</h4>
              <pre>{JSON.stringify(submitted.data, null, 2)}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
