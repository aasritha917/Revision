import type { Request, Response } from "express";
import { Student } from "../models/Student.js";

export const createStudent = async (req: Request, res: Response) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json({ message: "Student created successfully", student });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getStudents = async (_req: Request, res: Response) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getStudentById = async (req: Request, res: Response) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ error: "Student not found" });
    res.json(student);
  } catch (error: any) {
    res.status(400).json({ error: "Invalid student ID" });
  }
};
