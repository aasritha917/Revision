import React, { useState } from "react";
import InputNode from "./components/InputNode";

export default function App() {
  const [roots, setRoots] = useState([]);

  const addRootInput = () => {
    setRoots([...roots, {}]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Nested Input Builder</h1>
      <button onClick={addRootInput}>Add Input</button>

      <div style={{ marginTop: "20px" }}>
        {roots.map((_, index) => (
          <InputNode key={index} level={0} />
        ))}
      </div>
    </div>
  );
}
