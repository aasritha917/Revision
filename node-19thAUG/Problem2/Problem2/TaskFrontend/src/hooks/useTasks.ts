import { useEffect, useState } from "react";

import {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
  reorderTasks,
} from "../utils/api";
import type { Tam } from "../types";

export function useTasks() {
  const [tasks, setTasks] = useState<Tam[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    setLoading(true);
    const res = await getTasks();
    setTasks(res.data);
    setLoading(false);
  };

  const createTask = async (text: string) => {
    const res = await addTask(text);
    setTasks((prev) => [...prev, res.data]);
  };

  const toggleTaskStatus = async (task: Tam) => {
    const newStatus = task.status === "pending" ? "completed" : "pending";
    const res = await updateTask(task._id, { status: newStatus });
    setTasks((prev) =>
      prev.map((t) => (t._id === task._id ? res.data : t))
    );
  };

  const removeTask = async (id: string) => {
    await deleteTask(id);
    setTasks((prev) => prev.filter((t) => t._id !== id));
  };

  const reorder = async (newTasks: Tam[]) => {
    setTasks(newTasks);
    const payload = newTasks.map((t, index) => ({ id: t._id, order: index }));
    await reorderTasks(payload);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return { tasks, loading, createTask, toggleTaskStatus, removeTask, reorder };
}
