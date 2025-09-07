import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function DashboardPage() {
  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <aside style={{ width: '200px', borderRight: '1px solid #ddd', paddingRight: '1rem' }}>
        <h2>Dashboard</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link to="profile">Profile</Link></li>
          <li><Link to="settings">Settings</Link></li>
        </ul>
      </aside>

      <section style={{ flex: 1 }}>
        <Outlet />
      </section>
    </div>
  );
}
