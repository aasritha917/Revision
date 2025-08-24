import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import serviceRoutes from "./routes/services.js";
import connectDB from "./config/db.js";

const app = express();


app.use(cors());
app.use(express.json());


connectDB();


app.use("/api/services", serviceRoutes);


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));