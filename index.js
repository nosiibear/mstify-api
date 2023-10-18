import express from "express";
import { config } from "dotenv";
import mongoose, { connect } from "mongoose";

import commentsRoute from "./routes/comments.js"

config();
const app = express();

app.use(express.json());
app.use("/api/comments", commentsRoute)

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log("Connected to MongoDB");
})
.catch((err)=>console.error(err));

app.listen(process.env.PORT || "5000", () => {
  console.log("Backend is running.");
});