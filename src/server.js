const express = require("express");
const cors = require("cors");
const connectdb = require("./config/dbconfig");
const ApiRouter = require("./router/api/api");

const app = express();

/* ✅ DB connect (once) */
connectdb();

/* ✅ CORS */
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://prxindia.com"
  ],
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ✅ Routes */
app.use("/api", ApiRouter);

/* ✅ Health check */
app.get("/", (req, res) => {
  res.json({ message: "server is running ..." });
});

/* ✅ 404 */
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

/* ✅ EXPORT FOR VERCEL */
module.exports = app;