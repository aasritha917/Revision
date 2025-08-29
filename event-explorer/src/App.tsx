import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import EventListing from "./pages/EventListing";
import EventDetails from "./pages/EventDetails";
import BookmarkedEvents from "./pages/BookmarkedEvents";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<EventListing />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/bookmarked" element={<BookmarkedEvents />} />
          </Routes>
        </main>
        <footer className="bg-blue-600 text-white p-4 text-center">
          &copy; 2025 Event Explorer
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
