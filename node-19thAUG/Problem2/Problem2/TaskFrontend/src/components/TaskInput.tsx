import { useState } from "react";

type Props = { onAdd: (text: string) => void };

export default function TaskInput({ onAdd }: Props) {
  const [text, setText] = useState("");

  return (
    <div className="flex gap-2 p-4">
      <input
        className="border p-2 rounded w-full"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task..."
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => {
          if (text.trim()) {
            onAdd(text.trim());
            setText("");
          }
        }}
      >
        Add
      </button>
    </div>
  );
}
