import React from "react";

function ChatHeader({ participants }) {
  console.log("ChatHeader re-rendered");
  return <h2>Conversation with {participants.join(", ")}</h2>;
}

export default React.memo(ChatHeader);
