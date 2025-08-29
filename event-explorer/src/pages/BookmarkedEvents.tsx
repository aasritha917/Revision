import React, { useEffect, useState } from "react";
import { Event, fetchEvents, updateBookmark } from "../api/events";
import EventCard from "../components/EventCard";

const BookmarkedEvents: React.FC = () => {
  const [bookmarkedEvents, setBookmarkedEvents] = useState<Event[]>([]);

  useEffect(() => {
    const loadBookmarked = async () => {
      const data = await fetchEvents();
      setBookmarkedEvents(data.filter((e) => e.bookmarked));
    };
    loadBookmarked();
  }, []);

  const handleBookmarkToggle = async (id: number, bookmarked: boolean) => {
    try {
      await updateBookmark(id, bookmarked);
      setBookmarkedEvents((prev) =>
        prev.filter((e) => e.id !== id)
      );
    } catch (error) {
      alert("Failed to update bookmark");
    }
  };

  if (bookmarkedEvents.length === 0)
    return <p className="p-4 text-center text-gray-500">No bookmarked events.</p>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Bookmarked Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bookmarkedEvents.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onBookmarkToggle={handleBookmarkToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default BookmarkedEvents;
