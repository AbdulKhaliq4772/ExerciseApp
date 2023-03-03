import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addExercise } from "../store/ExerciseSlice";

const useData = () => {
  const [add, setAdd] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    const api = async () => {
      const response = await fetch("http://localhost:5000/api/exercise");
      // console.log(response);
      const data = await response.json();
      // console.log(data);
      if (response.ok) {
        dispatch(addExercise(data));
      }
    };
    api();
  }, [add]);
  return [add, setAdd];
};

export default useData;
