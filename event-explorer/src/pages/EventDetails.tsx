import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Event, fetchEventById, updateBookmark } from "../api/events";

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const loadEvent = async () => {
      try {
        const data = await fetchEventById(+id);
        setEvent(data);
      } catch {
        alert("Event not found");
        navigate("/");
      } finally {
        setLoading(false);
      }
    };
    loadEvent();
  }, [id, navigate]);

  const handleBookmarkToggle = async () => {
    if (!event) return;
    try {
      const updated = await updateBookmark(event.id, !event.bookmarked);
      setEvent(updated);
    } catch {
      alert("Failed to update bookmark");
    }
  };

  if (loading) return <p className="p-4">Loading...</p>;
  if (!event) return null;

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded shadow mt-6">
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
      <p className="mb-2">
        <span className="font-semibold">Date:</span>{" "}
        {new Date(event.date).toLocaleDateString()}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Location:</span> {event.location}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Category:</span> {event.category}
      </p>
      <p className="mb-4">{event.description}</p>
      <button
        onClick={handleBookmarkToggle}
        className={`px-4 py-2 rounded ${
          event.bookmarked ? "bg-yellow-400 text-black" : "bg-gray-300"
        }`}
      >
        {event.bookmarked ? "Remove Bookmark" : "Bookmark"}
      </button>
    </div>
  );
};

export default EventDetails;
