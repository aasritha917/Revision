import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Welcome to the sample dashboard app. Try visiting the <Link to="/dashboard">Dashboard</Link>.
      </p>
    </div>
  );
}
