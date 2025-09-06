import React from "react";
import { useForm } from "../context/FormContext";

export default function Sidebar() {
  const { addField, clearAll } = useForm();

  return (
    <aside className="sidebar">
      <h3>Field Types</h3>
      <div className="types">
        <button onClick={() => addField("text")}>Text</button>
        <button onClick={() => addField("number")}>Number</button>
        <button onClick={() => addField("email")}>Email</button>
        <button onClick={() => addField("dropdown")}>Dropdown</button>
        <button onClick={() => addField("checkbox")}>Checkbox</button>
        <button onClick={() => addField("radio")}>Radio</button>
      </div>
      <div className="bottom">
        <button onClick={clearAll} className="danger">Clear All</button>
      </div>
    </aside>
  );
}
