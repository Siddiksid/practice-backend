import mongoose from "mongoose";
import express from "express";
import Person from "../schema/personSchema.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    console.log("the data is:", data);
    const newPerson = new Person(data);
    const response = await newPerson.save();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/", async (req, res) => {
  try {
    const response = await Person.find();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const response = await Person.findByIdAndUpdate(id, data);
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({
        message: "Person with id not found",
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Person.findByIdAndDelete(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});
export default router;
