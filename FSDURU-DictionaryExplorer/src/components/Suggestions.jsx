import { useEffect, useState } from "react"
import useDebounce from "../hooks/useDebounce"

function Suggestions({ query, fetchWord }) {
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
        <p key={s.word} onClick={() => fetchWord(s.word)} style={{ cursor: "pointer" }}>
          {s.word}
        </p>
      ))}
    </div>
  )
}
export default Suggestions
