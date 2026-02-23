const express = require("express");
const cors = require("cors");
const { Port } = require("./config/envconfig");
const connectdb = require("./config/dbconfig");
const ApiRouter = require("./router/api/api");

const app = express();

app.use(cors({
  origin: ["http://localhost:5173","https://prxindia.com"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", ApiRouter);


app.get("/",(req,res)=>{
  return res.json({
    message:"server is running ..."
  })
})

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});


app.listen(Port, async () => {
  try {
    await connectdb();
    console.log("MongoDB Connected");
    console.log(`Server running at http://localhost:${Port}`);
  } catch (err) {
    console.error("Server startup failed", err);
  }
});