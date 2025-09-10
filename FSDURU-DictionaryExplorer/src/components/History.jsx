function History({ history, fetchWord }) {
  return (
    <div>
      <h3>History</h3>
      {history.map((w, i) => (
        <p key={i} style={{ cursor: "pointer" }} onClick={() => fetchWord(w)}>
          {w}
        </p>
      ))}
    </div>
  )
}
export default History
