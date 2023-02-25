import React from "react";

const ExerciseDetails = ({ exercise }) => {
  return (
    <div>
      <h4>{exercise.title}</h4>
      <p>
        <strong>load (kg): </strong>
        {exercise.load}
      </p>
      <p>
        <strong>reps: </strong>
        {exercise.reps}
      </p>
      <p>{exercise.createdAt}</p>
    </div>
  );
};

export default ExerciseDetails;
