import mongoose from "mongoose";
import "dotenv/config";
const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("connected", () => {
  console.log("connected to mongo");
});
db.on("disconnected", () => {
  console.log("disconnected from mongo");
});
db.on("error", (err) => {
  console.log(err);
});

export default db;
