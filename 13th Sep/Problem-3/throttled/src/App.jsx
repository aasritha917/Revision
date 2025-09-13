import React, { useState } from "react";
import useThrottle from "./hooks/useThrottle";

export default function App() {
  const [text, setText] = useState("");
  const throttledText = useThrottle(text, 1000); // updates at most once per second

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>Custom useThrottle Hook Demo</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type quickly here..."
        style={{ padding: "0.5rem", width: "250px" }}
      />
      <p>Original value: {text}</p>
      <p>Throttled value (1s delay): {throttledText}</p>
    </div>
  );
}
