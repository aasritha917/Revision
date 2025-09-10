function WordDetails({ word, fetchWord }) {
  return (
    <div>
      <h2>{word.word}</h2>
      {word.phonetics?.[0]?.text && <p>Phonetics: {word.phonetics[0].text}</p>}
      {word.meanings.map((m, i) => (
        <div key={i}>
          <h4>{m.partOfSpeech}</h4>
          {m.definitions.map((d, j) => (
            <div key={j}>
              <p>Definition: {d.definition}</p>
              {d.example && <p>Example: {d.example}</p>}
              {d.synonyms?.length > 0 && (
                <p>
                  Synonyms:{" "}
                  {d.synonyms.map((syn, k) => (
                    <span
                      key={k}
                      style={{ cursor: "pointer", marginRight: "5px", color: "blue" }}
                      onClick={() => fetchWord(syn)}
                    >
                      {syn}
                    </span>
                  ))}
                </p>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
export default WordDetails
