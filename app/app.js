import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
const PORT = 8080;
dotenv.config();
await mongoose.connect(`mongodb+srv://${process.env.DB_ADMIN}:${process.env.DB_PASSWORD}@cluster0.udxp9.mongodb.net/auth?retryWrites=true&w=majority&appName=Cluster0

`);
app.get("/", (req, res) => {
  res.send("backend");
});

export default function start() {
  app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
  });
}
