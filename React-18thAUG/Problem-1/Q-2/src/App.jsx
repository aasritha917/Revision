import React, { useState } from "react";
import { users as dummyUsers, messages as dummyMessages } from "./data/chatData";
import Sidebar from "./components/Sidebar";
import Message from "./components/Message";
import ChatHeader from "./components/ChatHeader";

export default function App() {
  const [msgs, setMsgs] = useState(dummyMessages);
  const [users, setUsers] = useState(dummyUsers);

  const sendMessage = () => {
    setMsgs(prev => [
      ...prev,
      { id: Date.now(), sender: "Alice", content: "New msg!", timestamp: Date.now() }
    ]);
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Sidebar users={users} />

      <div style={{ flex: 1 }}>
        <ChatHeader participants={["Alice", "Bob"]} />
        <div style={{ border: "1px solid gray", padding: "10px", height: "200px", overflowY: "auto" }}>
          {msgs.map(m => (
            <Message key={m.id} msg={m} />
          ))}
        </div>
        <button onClick={sendMessage}>Send Message</button>
      </div>
    </div>
  );
}
