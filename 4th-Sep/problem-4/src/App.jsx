import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import FieldEditor from "./components/FieldEditor";
import Preview from "./components/Preview";

export default function App() {
  const [view, setView] = useState("builder");

  return (
    <div className="app">
      <header className="topbar">
        <h1>Dynamic Form Builder</h1>
        <div className="nav">
          <button onClick={() => setView("builder")} className={view==="builder"?"active":""}>Builder</button>
          <button onClick={() => setView("preview")} className={view==="preview"?"active":""}>Preview</button>
        </div>
      </header>

      <main className="main">
        {view === "builder" && (
          <div className="builder">
            <Sidebar />
            <Canvas />
            <FieldEditor />
          </div>
        )}
        {view === "preview" && <Preview />}
      </main>
    </div>
  );
}
