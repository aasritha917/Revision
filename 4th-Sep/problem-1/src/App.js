import React, { useState } from "react";
import words from "./words";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  function getLevenshtein(a, b) {
    const matrix = Array.from({ length: a.length + 1 }, () =>
      Array(b.length + 1).fill(0)
    );
    for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
    for (let j = 0; j <= b.length; j++) matrix[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        if (a[i - 1] === b[j - 1]) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] =
            1 +
            Math.min(
              matrix[i - 1][j],
              matrix[i][j - 1],
              matrix[i - 1][j - 1]
            );
        }
      }
    }
    return matrix[a.length][b.length];
  }

  function autocorrectWord(word) {
    if (words.includes(word)) return word;
    let closest = word;
    let minDist = Infinity;
    for (let w of words) {
      let dist = getLevenshtein(word, w);
      if (dist < minDist) {
        minDist = dist;
        closest = w;
      }
    }
    return closest;
  }

  function handleChange(e) {
    const value = e.target.value;
    setText(value);

    const parts = value.trim().split(/\s+/);
    const currentWord = parts[parts.length - 1];
    if (currentWord.length > 0) {
      const matched = words.filter((w) => w.startsWith(currentWord));
      setSuggestions(matched.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  }

  function handleKeyDown(e) {
    if (e.key === " ") {
      const parts = text.trim().split(/\s+/);
      if (parts.length > 0) {
        const lastWord = parts[parts.length - 1];
        const corrected = autocorrectWord(lastWord);
        parts[parts.length - 1] = corrected;
        setText(parts.join(" ") + " ");
        setSuggestions([]);
      }
    }
  }

  function handleCheckSpelling() {
    const parts = text.trim().split(/\s+/);
    const corrected = parts.map((w) => autocorrectWord(w));
    setText(corrected.join(" "));
  }

  function handleReset() {
    setText("");
    setSuggestions([]);
  }

  return (
    <div className="container">
      <h2>Autocorrect Input Box</h2>
      <textarea
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Type here..."
      />
      <div className="suggestions">
        {suggestions.map((s, i) => (
          <div key={i} className="suggestion">
            {s}
          </div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={handleCheckSpelling}>Check Spelling</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
