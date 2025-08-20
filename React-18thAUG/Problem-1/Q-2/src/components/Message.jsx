import React, { useMemo } from "react";

function formatTime(timestamp) {
  console.log("Formatting time for", timestamp);
  return Math.floor((Date.now() - timestamp) / 60000) + " mins ago";
}

function Message({ msg }) {
  const time = useMemo(() => formatTime(msg.timestamp), [msg.timestamp]);

  return (
    <div>
      <b>{msg.sender}:</b> {msg.content} <i>({time})</i>
    </div>
  );
}

export default React.memo(Message);
