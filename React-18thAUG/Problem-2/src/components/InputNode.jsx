import React, { useState } from "react";

function InputNode({ level = 0 }) {
  const [children, setChildren] = useState([]);

  const addSubInput = () => {
    setChildren([...children, {}]);
  };

  return (
    <div style={{ marginLeft: level * 20, marginTop: "10px" }}>
      <input placeholder={`Input (level ${level})`} style={{ marginRight: "10px" }} />
      <button onClick={addSubInput}>Add Sub Input</button>

      <div>
        {children.map((_, index) => (
          <InputNode key={index} level={level + 1} />
        ))}
      </div>
    </div>
  );
}

export default InputNode;
