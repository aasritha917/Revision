import { useState } from "react";

const categories = ["Business", "Sports", "Technology", "Health", "Entertainment", "Science"];

export default function Navbar({ onCategoryChange }) {
  const [selected, setSelected] = useState("Business");

  return (
    <nav className="flex flex-wrap items-center justify-between py-4 border-b">
      <h1 className="text-2xl font-bold">📰 NewsHub</h1>
      <ul className="flex gap-4 text-sm font-medium">
        {categories.map(cat => (
          <li
            key={cat}
            className={`cursor-pointer hover:underline ${selected === cat ? "text-blue-600 dark:text-blue-400" : ""}`}
            onClick={() => {
              setSelected(cat);
              onCategoryChange(cat.toLowerCase());
            }}
          >
            {cat}
          </li>
        ))}
      </ul>
    </nav>
  );
}
