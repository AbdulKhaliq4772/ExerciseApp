import React, { useEffect, useState } from "react";
import ExerciseDetails from "../components/ExerciseDetails";
import ExerciseForm from "../components/ExerciseForm";

const Home = () => {
  const [exercises, setExercises] = useState(null);

  useEffect(() => {
    const api = async () => {
      const response = await fetch("http://localhost:4000/api/exercise");
      // console.log(response);
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setExercises(data);
      }
    };
    api();
  }, []);

  return (
    <div className="flex justify-center py-5 ">
      <div className=" lg:w-4/5 lg:flex lg:justify-between">
        <div className=" lg:w-3/5">
          <h1 className=" text-3xl uppercase mb-3 font-semibold">Exercises</h1>
          {exercises &&
            exercises.map((exercise) => (
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
