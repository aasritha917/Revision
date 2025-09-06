import React, { createContext, useContext, useEffect, useState } from "react";
import uid from "../utils/uid";

const FormContext = createContext(null);

export function useForm() {
  return useContext(FormContext);
}

export function FormProvider({ children }) {
  const [fields, setFields] = useState([]);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("form_schema");
    if (saved) setFields(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("form_schema", JSON.stringify(fields));
  }, [fields]);

  function addField(type) {
    const base = {
      id: uid(),
      type,
      label: type === "text" ? "Text Field" : type === "email" ? "Email" : type === "number" ? "Number" : type === "dropdown" ? "Dropdown" : type === "checkbox" ? "Checkbox" : "Radio",
      placeholder: "",
      options: type === "dropdown" || type === "radio" ? ["Option 1","Option 2"] : [],
      required: false
    };
    setFields(prev => [...prev, base]);
    setActiveId(base.id);
  }

  function updateField(id, patch) {
    setFields(prev => prev.map(f => f.id === id ? {...f, ...patch} : f));
  }

  function deleteField(id) {
    setFields(prev => prev.filter(f => f.id !== id));
    setActiveId(prev => (prev === id ? null : prev));
  }

  function moveField(fromIndex, toIndex) {
    setFields(prev => {
      const arr = [...prev];
      const [m] = arr.splice(fromIndex, 1);
      arr.splice(toIndex, 0, m);
      return arr;
    });
  }

  function clearAll() {
    setFields([]);
    setActiveId(null);
  }

  return (
    <FormContext.Provider value={{ fields, addField, updateField, deleteField, moveField, activeId, setActiveId, clearAll }}>
      {children}
    </FormContext.Provider>
  );
}
