import React, { useEffect } from "react";
import ExerciseDetails from "../components/ExerciseDetails";
import ExerciseForm from "../components/ExerciseForm";
import { useDispatch, useSelector } from "react-redux";
import { addExercise } from "../store/exerciseSlice";

const Home = () => {
  const exercises = useSelector((state) => state.exercise);
  const toggle = useSelector((state) => state.toggle);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchExercises = async () => {
      const api = await fetch("http://localhost:5000/api/exercise");
      const data = await api.json();
      if (api.ok) {
        dispatch(addExercise(data));
      }
    };
    fetchExercises();
  }, [toggle]);

  return (
    <div className="flex justify-center py-5 ">
      <div className=" lg:w-4/5 lg:flex lg:justify-between">
        <div className=" lg:w-3/5">
          <h1 className=" text-3xl uppercase mb-3 font-semibold">Exercises</h1>
          {exercises.map((exercise) => (
            <ExerciseDetails key={exercise._id} exercise={exercise} />
          ))}
        </div>
        <div className=" lg:w-2/5">
          <ExerciseForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
