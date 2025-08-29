import React from "react";
import { Event } from "../api/events";
import { Link } from "react-router-dom";

interface EventCardProps {
  event: Event;
  onBookmarkToggle: (id: number, bookmarked: boolean) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onBookmarkToggle }) => {
  return (
    <div className="border rounded-md p-4 shadow hover:shadow-lg transition relative bg-white">
      <Link to={`/events/${event.id}`}>
        <h2 className="text-xl font-semibold mb-1">{event.title}</h2>
      </Link>
      <p className="text-sm text-gray-600 mb-1">
        <span className="font-medium">Date:</span> {new Date(event.date).toLocaleDateString()}
      </p>
      <p className="text-sm text-gray-600 mb-1">
        <span className="font-medium">Location:</span> {event.location}
      </p>
      <p className="text-sm text-gray-600 mb-1">
        <span className="font-medium">Category:</span> {event.category}
      </p>
      <p className="text-gray-700 mb-3">{event.description}</p>
      <button
        onClick={() => onBookmarkToggle(event.id, !event.bookmarked)}
        className={`absolute top-3 right-3 text-xl focus:outline-none ${
          event.bookmarked ? "text-yellow-400" : "text-gray-400"
        }`}
        aria-label={event.bookmarked ? "Unbookmark event" : "Bookmark event"}
        title={event.bookmarked ? "Unbookmark event" : "Bookmark event"}
      >
        {event.bookmarked ? "★" : "☆"}
      </button>
    </div>
  );
};

export default EventCard;
