import express from "express";
import Service from "../models/Service.js";

const router = express.Router();

router.get("/", async (req, res) => {
const services = await Service.find();
res.json(services);
});

router.post("/", async (req, res) => {
const { name, description, price } = req.body;
const newService = new Service({ name, description, price });
await newService.save();
res.json(newService);
});

export default router;