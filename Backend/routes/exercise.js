const express = require("express");
const router = express.Router();
const {
  createExercise,
  getAllExercises,
  getSingleExercise,
  deleteExercise,
  updateExercise,
} = require("../controllers/exerciseController");

// get all workout
router.get("/", getAllExercises);
//get a single workout
router.get("/:id", getSingleExercise);
//creating a workout
router.post("/", createExercise);
//delete a workout
router.delete("/:id", deleteExercise);
//update exercise
router.patch("/:id", updateExercise);

module.exports = router;
