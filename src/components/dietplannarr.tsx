import { useState } from "react";

function DietPlanner() {
    // { userGoal, currentWeight, targetWeight 
    const userGoal="cut";
    
  const [protein, setProtein] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [fat, setFat] = useState(0);
  
  const totalCalories = protein * 4 + carbs * 4 + fat * 9;
  const requiredCalories = userGoal === "bulk" ? 3000 : userGoal === "cut" ? 1800 : 2200;
  const remainingProtein = (requiredCalories * 0.3) / 4 - protein;
  const remainingCarbs = (requiredCalories * 0.4) / 4 - carbs;
  const remainingFat = (requiredCalories * 0.3) / 9 - fat;

  return (
    <div className="p-6 bg-black rounded-lg shadow-md w-full max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Diet Tracker ({userGoal})</h2>
      <p>Calories: {totalCalories} / {requiredCalories}</p>
      <div className="mt-4">
        <p>Protein: {protein}g / {remainingProtein.toFixed(1)}g</p>
        <button onClick={() => setProtein(protein + 5)} className="bg-blue-500 text-white px-4 py-2 rounded text-lg">+5</button>
      </div>
      <div className="mt-4">
        <p>Carbs: {carbs}g / {remainingCarbs.toFixed(1)}g</p>
        <button onClick={() => setCarbs(carbs + 5)} className="bg-blue-500 text-white px-4 py-2 rounded text-lg">+5</button>
      </div>
      <div className="mt-4">
        <p>Fat: {fat}g / {remainingFat.toFixed(1)}g</p>
        <button onClick={() => setFat(fat + 5)} className="bg-blue-500 text-white px-4 py-2 rounded text-lg">+5</button>
      </div>
      <button onClick={() => { setProtein(0); setCarbs(0); setFat(0); }} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Reset</button>
    </div>
  );
}

export default DietPlanner;