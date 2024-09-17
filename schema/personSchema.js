import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    enum: ["chef", "scientist", "engineer"],
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
});

const Person = mongoose.model("Person", personSchema);

export default Person;
