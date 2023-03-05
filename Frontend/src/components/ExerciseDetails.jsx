import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteExercise } from "../store/exerciseSlice";
import { changeToggle } from "../store/toggleSlice";

const ExerciseDetails = ({ exercise }) => {
  const dispatch = useDispatch();
  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:5000/api/exercise/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (response.ok) {
      console.log("exercise deleted", data);
      dispatch(deleteExercise(id));
    }
  };

  return (
    <div>
      <div className=" flex justify-between bg-white mb-2 rounded-lg px-4 py-3 shadow-lg border border-slate-300 ">
        <div>
          <h4 className=" text-2xl text-blue-500 font-mono uppercase font-bold mb-2">
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
          {/* <p>{exercise.createdAt}</p> */}
        </div>
        <div className="flex flex-col justify-around">
          <button
            className="  capitalize shadow-lg bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleDelete(exercise._id)}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetails;
