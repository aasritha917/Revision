import React from "react";

export default function FieldRenderer({ field, value, onChange }) {
  if (field.type === "text" || field.type === "email" || field.type === "number") {
    return (
      <div className="render-field">
        <label>{field.label}{field.required && "*"}</label>
        <input
          type={field.type === "number" ? "number" : field.type === "email" ? "email" : "text"}
          placeholder={field.placeholder}
          value={value || ""}
          onChange={e=>onChange(e.target.value)}
        />
      </div>
    );
  }

  if (field.type === "dropdown") {
    return (
      <div className="render-field">
        <label>{field.label}{field.required && "*"}</label>
        <select value={value||""} onChange={e=>onChange(e.target.value)}>
          <option value="">Select</option>
          {field.options.map((o,i)=><option key={i} value={o}>{o}</option>)}
        </select>
      </div>
    );
  }

  if (field.type === "checkbox") {
    return (
      <div className="render-field">
        <label>
          <input type="checkbox" checked={!!value} onChange={e=>onChange(e.target.checked)} />
          {field.label}
        </label>
      </div>
    );
  }

  if (field.type === "radio") {
    return (
      <div className="render-field">
        <label>{field.label}{field.required && "*"}</label>
        <div>
          {field.options.map((o,i)=>(
            <label key={i} className="radio-option">
              <input type="radio" name={field.id} value={o} checked={value===o} onChange={e=>onChange(e.target.value)} />
              {o}
            </label>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
