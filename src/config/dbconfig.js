const mongoose = require("mongoose");
const { Mongourl } = require("./envconfig");

let isConnected = false;

const connectdb = async () => {
  if (isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(Mongourl, {
      bufferCommands: false,
    });

    isConnected = db.connections[0].readyState;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

module.exports = connectdb;