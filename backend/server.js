import express from "express";
import cors from "cors"
import sql from "./db.js"
import { requireAuth, requireRegistered } from "./auth.js";

const app = express()
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Game API (Kan ændres)", version: "1.0.0"});
});

app.get("/api/health", async (req, res) => {
    try {
        await sql`SELECT 1`;
        res.json({ status: "ok", database: "connected"});
    } catch (error) {
        console.error("Health check failed:", error);
        res.status(500).json({ status: "error", database: "unreachable"});
    }
});

// Test server to check if isGuest: True on anon login
app.get("/api/me", requireAuth, (req, res) => {
  res.json({
    userId: req.userId,
    isGuest: req.isGuest,
  });
});

app.listen(PORT, () => {
    console.log(`Server kører på http://localhost:${PORT}`)
});