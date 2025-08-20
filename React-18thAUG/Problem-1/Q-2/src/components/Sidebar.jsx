import React from "react";

function Sidebar({ users }) {
  console.log("Sidebar re-rendered");
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h3>Active Users</h3>
      {users.map(u => (
        <p key={u.id}>
          {u.name} - {u.online ? "Online" : "Offline"}
        </p>
      ))}
    </div>
  );
}

export default React.memo(Sidebar);
