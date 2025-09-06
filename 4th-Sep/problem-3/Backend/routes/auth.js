const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const users = require("../data/users");
const { saveOtp, verifyOtp } = require("../utils/otpStore");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ message: "All fields required" });
  const existing = users.find(u => u.email === email);
  if (existing) return res.status(400).json({ message: "Email already registered" });
  const hashed = await bcrypt.hash(password, 10);
  users.push({ id: Date.now().toString(), name, email, password: hashed });
  res.json({ message: "Signup successful" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: "Email and password required" });
  const user = users.find(u => u.email === email);
  if (!user) return res.status(400).json({ message: "Invalid credentials" });
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(400).json({ message: "Invalid credentials" });

  const otp = Math.floor(1000 + Math.random() * 9000);
  saveOtp(email, otp);

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: false,
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
  });

  const mail = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is ${otp}. It is valid for 5 minutes.`
  };

  try {
    await transporter.sendMail(mail);
    res.json({ message: "OTP sent to email", email });
  } catch (err) {
    res.status(500).json({ message: "Failed to send OTP", error: String(err) });
  }
});

router.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) return res.status(400).json({ message: "Email and OTP required" });
  const ok = verifyOtp(email, otp);
  if (!ok) return res.status(400).json({ message: "Invalid or expired OTP" });
  const user = users.find(u => u.email === email);
  if (!user) return res.status(400).json({ message: "User not found" });
  const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ message: "OTP verified", token });
});

module.exports = router;
