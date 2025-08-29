import React, { useEffect, useState } from "react";
import { Event, fetchEvents, updateBookmark } from "../api/events"; // no .ts extension
import EventCard from "../components/EventCard";
import EventFilter from "../components/EventFilter";
import SearchBar from "../components/SearchBar";

const EventListing: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const loadEvents = async () => {
      const data = await fetchEvents();
      setEvents(data);
      setFilteredEvents(data);
    };
    loadEvents();
  }, []);

  useEffect(() => {
    let filtered = [...events];
    if (categoryFilter) {
      filtered = filtered.filter((e) => e.category === categoryFilter);
    }
    if (searchTerm.trim()) {
      filtered = filtered.filter((e) =>
        e.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredEvents(filtered);
  }, [categoryFilter, searchTerm, events]);

  const categories = Array.from(new Set(events.map((e) => e.category)));

  const handleBookmarkToggle = async (id: number, bookmarked: boolean) => {
    try {
      await updateBookmark(id, bookmarked);
      setEvents((prev) =>
        prev.map((e) => (e.id === id ? { ...e, bookmarked } : e))
      );
    } catch (error) {
      alert("Failed to update bookmark");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <EventFilter
          categories={categories}
          selectedCategory={categoryFilter}
          onCategoryChange={setCategoryFilter}
        />
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </div>
      {filteredEvents.length === 0 ? (
        <p className="text-center text-gray-500">No events found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onBookmarkToggle={handleBookmarkToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventListing;
