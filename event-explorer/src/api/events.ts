import axios from "axios";

export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  category: string;
  description: string;
  bookmarked: boolean;
}

const API_URL = "http://localhost:5000/events";

export const fetchEvents = async (): Promise<Event[]> => {
  const res = await axios.get<Event[]>(API_URL);
  return res.data;
};

export const fetchEventById = async (id: number): Promise<Event> => {
  const res = await axios.get<Event>(`${API_URL}/${id}`);
  return res.data;
};

export const updateBookmark = async (id: number, bookmarked: boolean): Promise<Event> => {
  const res = await axios.patch<Event>(`${API_URL}/${id}`, { bookmarked });
  return res.data;
};
