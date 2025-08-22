import mongoose, { Document, Schema } from "mongoose";

export interface IStudent extends Document {
  name: string;
  email: string;
  age: number;
  course: "Web Development" | "Data Science" | "UI/UX";
}

const studentSchema: Schema = new Schema<IStudent>(
  {
    name: { type: String, required: true, minlength: 3 },
    email: { type: String, required: true, unique: true, match: /^\S+@\S+\.\S+$/ },
    age: { type: Number, required: true, min: 5 },
    course: { 
      type: String, 
      required: true, 
      enum: ["Web Development", "Data Science", "UI/UX"] 
    }
  },
  { timestamps: true }
);

export const Student = mongoose.model<IStudent>("Student", studentSchema);
