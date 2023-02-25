import React from "react";

const ExerciseDetails = ({ exercise }) => {
  return (
    <div>
      <div className=" bg-white mb-2 rounded-lg px-4 py-3 shadow-lg border border-slate-300 ">
        <h4 className=" text-2xl  font-mono uppercase font-bold mb-2">
          {exercise.title}
        </h4>
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
    </div>
  );
};

export default ExerciseDetails;
