import { useEffect, useState } from "react"
import useDebounce from "../hooks/useDebounce"

function Suggestions({ query, setQuery, fetchWord }) {
  const [suggestions, setSuggestions] = useState([])
  const debounced = useDebounce(query, 500)

  useEffect(() => {
    if (debounced) {
      fetch(`https://api.datamuse.com/sug?s=${debounced}`)
        .then((res) => res.json())
        .then((data) => setSuggestions(data))
    } else {
      setSuggestions([])
    }
  }, [debounced])

  return (
    <div>
      <h3>Suggestions</h3>
      {suggestions.map((s) => (
        <p
          key={s.word}
          onClick={() => {
            setQuery(s.word)
            fetchWord(s.word)
          }}
          style={{
            cursor: "pointer",
            background: "var(--accent-bg)",
            color: "var(--text)",
            margin: "5px",
            padding: "5px",
            borderRadius: "6px",
          }}
        >
          {s.word}
        </p>
      ))}
    </div>
  )
}
export default Suggestions
