const mongoose = require("mongoose");
const { Mongourl } = require("./envconfig");

let isConnected = false; // 🔥 Vercel ke liye important

const connectdb = async () => {
  if (isConnected) {
    console.log("MongoDB already connected");
    return;
  }

  try {
    const db = await mongoose.connect(Mongourl, {
      dbName: "prxindias",        // 👉 apna DB name (Atlas me jo hai)
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000,
    });

    isConnected = db.connections[0].readyState;
    console.log("MongoDB connected successfully ✅");
  } catch (error) {
    console.error("MongoDB connection failed ❌", error.message);
    throw error; // 🔥 VERY IMPORTANT for Vercel
  }
};

module.exports = connectdb;