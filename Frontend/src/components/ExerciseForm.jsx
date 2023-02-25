import React, { useState } from "react";

const ExerciseForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const exercise = { title, load, reps };

    const response = await fetch("/api/exercise", {
      method: "POST",
      body: JSON.stringify(exercise),
      header: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    } else {
      setTitle("");
      setLoad("");
      setReps("");
      setError("");
      console.log("Exercise added", json);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Add a new Exercise</h3>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          id="title"
        />
        <br />
        <label>Load (in kgs)</label>
        <input
          type="number"
          onChange={(e) => {
            setLoad(e.target.value);
          }}
          value={load}
        />
        <br />
        <label>reps </label>
        <input
          type="number"
          onChange={(e) => {
            setReps(e.target.value);
          }}
          value={reps}
        />
        <br />
        <button type="submit">Add Exercise</button>
        <br />
        {error && <div>{error}</div>}
      </form>
    </div>
  );
};

export default ExerciseForm;
