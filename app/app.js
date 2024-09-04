import express from "express";
import dotenv from "dotenv";
import { routes as authRoutes } from "./auth/routes.js";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
app.use(cors({ origin: "*", credentials: true }));
const PORT = 8080;
dotenv.config();
app.use(express.json());
await mongoose.connect(`mongodb+srv://${process.env.DB_ADMIN}:${process.env.DB_PASSWORD}@cluster0.udxp9.mongodb.net/auth?retryWrites=true&w=majority&appName=Cluster0

`);

app.use("/api/auth", authRoutes);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
export default function start() {
  app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
  });
}
