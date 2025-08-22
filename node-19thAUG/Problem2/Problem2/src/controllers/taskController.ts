import { Request, Response } from "express";
import Task, { ITask } from "../models/Task";
import mongoose from "mongoose";

/**
 * GET /api/tasks
 * Returns tasks sorted by `order` ascending
 */
export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find({}).sort({ order: 1, createdAt: 1 });
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch tasks" });
  }
};

/**
 * POST /api/tasks
 * Body: { text: string }
 * Adds to end of pending list by setting order = maxOrder + 1
 */
export const createTask = async (req: Request, res: Response) => {
  const { text } = req.body;
  if (!text || typeof text !== "string" || !text.trim()) {
    return res.status(400).json({ message: "Invalid task text" });
  }
  try {
    const maxOrderTask = await Task.findOne({}).sort({ order: -1 }).limit(1);
    const nextOrder = maxOrderTask ? maxOrderTask.order + 1 : 0;
    const task = new Task({ text: text.trim(), status: "pending", order: nextOrder });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create task" });
  }
};

/**
 * PUT /api/tasks/:id
 * Body can contain any of: { text, status, order }
 */
export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid id" });
  }
  const updates: Partial<ITask> = {};
  if (req.body.text !== undefined) updates.text = String(req.body.text).trim();
  if (req.body.status !== undefined && (req.body.status === "pending" || req.body.status === "completed")) {
    updates.status = req.body.status;
  }
  if (req.body.order !== undefined) updates.order = Number(req.body.order);

  try {
    const task = await Task.findByIdAndUpdate(id, updates, { new: true });
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update task" });
  }
};

/**
 * PUT /api/tasks/reorder
 * Body: { order: [{ id: string, order: number }] }
 * Bulk updates multiple tasks' order fields (used after drag/drop)
 */
export const reorderTasks = async (req: Request, res: Response) => {
  const items = req.body.order;
  if (!Array.isArray(items)) return res.status(400).json({ message: "Invalid order payload" });

  const bulkOps = items.map((it: { id: string; order: number }) => {
    if (!mongoose.Types.ObjectId.isValid(it.id)) return null;
    return {
      updateOne: {
        filter: { _id: it.id },
        update: { $set: { order: Number(it.order) } }
      }
    };
  }).filter(Boolean);

  try {
    if (bulkOps.length === 0) return res.status(400).json({ message: "No valid items to update" });
    const result = await Task.bulkWrite(bulkOps as any);
    res.json({ success: true, result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to reorder tasks" });
  }
};

/**
 * DELETE /api/tasks/:id
 */
export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ message: "Invalid id" });
  try {
    const doc = await Task.findByIdAndDelete(id);
    if (!doc) return res.status(404).json({ message: "Task not found" });
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete" });
  }
};
