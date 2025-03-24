"use client"
import { useState, useEffect } from "react";

function WorkoutTracker({ workout }) {
  const [completedExercises, setCompletedExercises] = useState([]);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [reps, setReps] = useState(workout.exercises.map(() => 0));
  let timerInterval;

  useEffect(() => {
    if (isRunning) {
      timerInterval = setInterval(() => setTimer((prev) => prev + 1), 1000);
    }
    return () => clearInterval(timerInterval);
  }, [isRunning]);

  const toggleExercise = (index) => {
    setCompletedExercises((prev) =>
      prev.includes(index) ? prev.filter((ex) => ex !== index) : [...prev, index]
    );
  };

  const increaseReps = (index) => {
    setReps((prevReps) => {
      const newReps = [...prevReps];
      newReps[index] += 1;
      return newReps;
    });
  };

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);

  return (
    <div className="p-6 bg-black rounded-lg shadow-md w-full max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">{workout.title}</h2>
      <div>
        {workout.exercises.map((exercise, index) => (
          <div key={index} className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={completedExercises.includes(index)}
                onChange={() => toggleExercise(index)}
                className="mr-2"
              />
              <label>{exercise} (Reps: {reps[index]})</label>
            </div>
            <button
              className="ml-2 bg-blue-500 text-white px-2 py-1 rounded"
              onClick={() => increaseReps(index)}
            >
              +
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p>Time Elapsed: {timer} sec</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded mr-2" onClick={startTimer}>Start</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={stopTimer}>Stop</button>
      </div>
    </div>
  );
}

export default WorkoutTracker;