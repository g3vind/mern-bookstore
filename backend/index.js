import express from "express";
import mongoose from "mongoose";
import { PORT, MONGODB_URI } from "./config.js";
const app = express();

app.get("/", (req, res) => {
  res.send("WELCOME").statusCode(200);
});

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("MONGODB IS CONNECTED 🚀");
    // I want express to run only after successful mongodb
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error in mongodb connection", error);
  });
