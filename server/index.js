import express from "express";

import mongoose, { connect } from "mongoose";

const app = express();
const PORT = process.env.PORT || 5000;


import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

app.use(cors());
app.use(express.json());

const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected");
  };
  connectDB();

app.get("/health", (req, res) => {
    res.json({
      success: true,
      message: "Server is Running",
      data: null,
    });
  });

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));