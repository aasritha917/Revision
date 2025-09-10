function History({ history, fetchWord }) {
  return (
    <div>
      <h3>History</h3>
      {history.map((w, i) => (
        <span
          key={i}
          onClick={() => fetchWord(w)}
          style={{
            cursor: "pointer",
            display: "inline-block",
            margin: "5px",
            padding: "6px 10px",
            borderRadius: "20px",
            background: "var(--pill-bg)",
            color: "var(--text)",
          }}
        >
          {w}
        </span>
      ))}
    </div>
  )
}
export default History
