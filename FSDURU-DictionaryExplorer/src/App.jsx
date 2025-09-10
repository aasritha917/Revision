import { useState } from "react"
import SearchBar from "./components/SearchBar"
import Suggestions from "./components/Suggestions"
import WordDetails from "./components/WordDetails"
import History from "./components/History"
import ThemeToggle from "./components/ThemeToggle"

function App() {
  const [query, setQuery] = useState("")
  const [word, setWord] = useState(null)
  const [error, setError] = useState("")
  const [history, setHistory] = useState([])
  const [theme, setTheme] = useState("light")

  const fetchWord = async (term) => {
    try {
      setError("")
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${term}`)
      if (!res.ok) throw new Error("Word not found")
      const data = await res.json()
      setWord(data[0])
      setHistory((prev) => {
        const updated = [term, ...prev.filter((w) => w !== term)].slice(0, 5)
        return updated
      })
    } catch (e) {
      setWord(null)
      setError(e.message)
    }
  }

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <div className="container">
        <div className="left">
          <SearchBar query={query} setQuery={setQuery} fetchWord={fetchWord} />
          {error && <p>{error}</p>}
          {word && <WordDetails word={word} fetchWord={fetchWord} />}
        </div>
        <div className="right">
          <Suggestions query={query} setQuery={setQuery} fetchWord={fetchWord} />
          <History history={history} fetchWord={fetchWord} />
        </div>
      </div>
    </div>
  )
}

export default App
