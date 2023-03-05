import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { changeToggle } from "../store/toggleSlice";

const ExerciseForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const exercise = { title, load, reps };

    const response = await fetch("http://localhost:5000/api/exercise", {
      method: "POST",
      body: JSON.stringify(exercise),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    } else {
      dispatch(changeToggle());
      setTitle("");
      setLoad("");
      setReps("");
      setError("");
      console.log("Exercise added", json);
    }
  };

  return (
    <div className=" flex justify-center">
      <div className=" bg-white py-8 px-16 lg:w-4/5 rounded-lg shadow-md border border-slate-300">
        <form onSubmit={handleSubmit}>
          <h3 className=" text-2xl font-bold uppercase text-center mb-4">
            Add Exercise
          </h3>
          <label
            htmlFor="title"
            className="block mb-2 uppercase text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            id="title"
          />
          <br />
          <label className="block mb-2 uppercase text-sm font-medium text-gray-900 dark:text-white">
            Load (in kgs)
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="number"
            onChange={(e) => {
              setLoad(e.target.value);
            }}
            value={load}
          />
          <br />
          <label className="block mb-2 uppercase text-sm font-medium text-gray-900 dark:text-white">
            reps
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="number"
            onChange={(e) => {
              setReps(e.target.value);
            }}
            value={reps}
          />
          <br />
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Add Exercise
          </button>
          <br />
          {error && <div>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default ExerciseForm;
