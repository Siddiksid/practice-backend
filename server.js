import express from "express";
import db from "./db.js";
import "dotenv/config";

import person from "./routes/person.js";
const app = express();
const Port = process.env.PORT || 3000;
app.use(express.json());
app.use("/person", person);
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello world",
  });
});

app.listen(Port, () => {
  console.log(`server is running on Port:${Port}`);
});
