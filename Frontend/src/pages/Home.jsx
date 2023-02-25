import React, { useEffect, useState } from "react";
import ExerciseDetails from "../components/ExerciseDetails";
import ExerciseForm from "../components/ExerciseForm";

const Home = () => {
  // const [exercises, setExercises] = useState([]);

  const exercises = [
    {
      _id: "63f9b0843b7b1ecd5ac31af9",
      title: "backpress",
      reps: 20,
      load: 25,
      createdAt: "2023-02-25T06:53:56.175Z",
      updatedAt: "2023-02-25T06:53:56.175Z",
      __v: 0,
    },
    {
      _id: "63f9a471960038efbf1714bf",
      title: "situps",
      reps: 50,
      load: 2,
      createdAt: "2023-02-25T06:02:25.662Z",
      updatedAt: "2023-02-25T06:02:25.662Z",
      __v: 0,
    },
  ];
  useEffect(() => {
    const api = async () => {
      const response = await fetch("/api/exercise");
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
    <div>
      <h1>Home</h1>
      <div>
        {exercises &&
          exercises.map((exercise) => (
            <ExerciseDetails key={exercise._id} exercise={exercise} />
          ))}
      </div>
      <ExerciseForm />
    </div>
  );
};

export default Home;
