function SearchBar({ query, setQuery, fetchWord }) {
  const handleKey = (e) => {
    if (e.key === "Enter" && query.trim()) {
      fetchWord(query.trim())
    }
  }
  return (
    <input
      type="text"
      value={query}
      placeholder="Search a word..."
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={handleKey}
    />
  )
}
export default SearchBar
