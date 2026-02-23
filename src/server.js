const express = require("express");
const cors = require("cors");
const connectdb = require("./config/dbconfig");
const ApiRouter = require("./router/api/api");

const app = express();

/* ✅ DB connect (Vercel compatible) */
connectdb()
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection failed", err));

/* ✅ CORS */
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://prxindia.com"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ✅ API Routes */
app.use("/api", ApiRouter);

/* ✅ Health check */
app.get("/", (req, res) => {
  res.json({ message: "server is running ..." });
});

/* ✅ 404 */
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

/* 🔥 VERY IMPORTANT FOR VERCEL */
module.exports = app;