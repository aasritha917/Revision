import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <Navbar />
      <div className="container mx-auto px-4">
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <Home />
      </div>
    </div>
  );
}
