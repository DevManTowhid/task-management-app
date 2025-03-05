import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config()

const app = express();

//MIddlewares

app.use(express.json());

app.use(cors());

//Routes

app.use("/api/tasks",taskRoutes);


const PORT = process.env.PORT || 5000;


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("🔥 MongoDB Connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));
