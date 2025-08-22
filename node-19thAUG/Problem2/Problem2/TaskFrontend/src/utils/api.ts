// src/utils/api.ts
import axios from "axios";
import type { Tam } from "../types";

const API_URL = "http://localhost:4000/api/tasks"; // backend server URL

export const getTasks = () => axios.get<Tam[]>(API_URL);

export const addTask = (text: string) =>
  axios.post<Tam>(API_URL, { text });

export const updateTask = (id: string, updates: Partial<Tam>) =>
  axios.put<Tam>(`${API_URL}/${id}`, updates);

export const deleteTask = (id: string) =>
  axios.delete(`${API_URL}/${id}`);

export const reorderTasks = (
  reordered: { id: string; order: number }[]
) =>
  axios.put(`${API_URL}/reorder`, { tasks: reordered });
