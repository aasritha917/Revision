import mongoose, { Schema, Document } from "mongoose";

export type ITask = Document & {
  text: string;
  status: "pending" | "completed";
  order: number;
  createdAt: Date;
};

const TaskSchema: Schema = new Schema({
  text: { type: String, required: true, trim: true },
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
  order: { type: Number, required: true }, // lower = earlier in list
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<ITask>("Task", TaskSchema);
