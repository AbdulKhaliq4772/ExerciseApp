const exercise = require("../models/exerciseModel");
const mongoose = require("mongoose");

//get All exercise
const getAllExercises = async (req, res) => {
  const allExercises = await exercise.find().sort({ createdAt: -1 });
  res.status(200).send(allExercises);
};

//get single exercise
const getSingleExercise = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send({ error: "No such exercise" });
  }
  const filteredExercise = await exercise.findById(id);
  if (!filteredExercise) {
    return res.status(404).send({ error: "No such exercise" });
  }
  res.status(200).json(filteredExercise);
};

// create exercise
const createExercise = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const newExercise = await exercise.create({ title, load, reps });
    res.status(200).send(newExercise);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
//delete exercise
const deleteExercise = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send({ error: "No such exercise" });
  }
  const deletedExercise = await exercise.findOneAndDelete({ _id: id });
  if (!deleteExercise) {
    return res.status(400).send({ error: "No such exercise" });
  }
  res.status(200).json(deletedExercise);
};
//update exercise

const updateExercise = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send({ error: "No such exercise" });
  }
  const updatedExercise = await exercise.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );
  if (!updatedExercise) {
    return res.status(400).send({ error: "No such exercise" });
  }
  res.status(200).json(updatedExercise);
};

module.exports = {
  createExercise,
  getAllExercises,
  getSingleExercise,
  deleteExercise,
  updateExercise,
};
