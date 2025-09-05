import { useState } from "react";
import Modal from "./components/Modal";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="app">
      <h1>Reusable Modal</h1>
      <button onClick={() => setOpen(true)}>Open Modal</button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2>Hello from Modal</h2>
        <p>You can put any content here.</p>
        <button onClick={() => setOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}
