"use client"
import { useState, useEffect } from "react";
import WorkoutTracker from "../../components/workouttracker";
// "use client"; // ✅ Ensure this runs in the browser

import { useAuth } from "@/context/AuthContext";
import DietPlanner from "@/components/dietplannarr";
import Link from "next/link";
const workouts = {
  beginner: { title: "Beginner Workout", exercises: ["Squats", "Push-ups", "Dumbbell Rows", "Shoulder Press", "Plank"] },
  intermediate: { title: "Intermediate Workout", exercises: ["Bench Press", "Tricep Dips", "Lat Pulldown", "Bicep Curls", "Face Pulls"] },
  pro: { title: "Pro Workout", exercises: ["Deadlifts", "Pull-ups", "Barbell Rows", "Face Pulls", "Weighted Chin-ups"] },
};

function WorkoutPage() {
  const [category, setCategory] = useState(localStorage.getItem("userCategory") || "beginner");
  // const { user } = useAuth();
    const [token,settoken]=useState("");
  const [user, setUser] = useState (null); 
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Now safe to use localStorage
      const data = localStorage.getItem("token");
      settoken(data);
    }
  }, []);
  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(`http://localhost:3000/api/user`, {
          method: "GET",
          // headers: { "Content-Type": "application/json" },
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) {
          throw new Error("User not found");
        }

        const data = await res.json();
        // console.log("data from page", data);
        setUser(data);
        setCategory(data.level);
        console.log(data);
        // Router.push('/user')
        // router.push("/dashboard");
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }

    fetchUser();
  },[]); 

  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-6">Your Workout Plan</h1>
      <WorkoutTracker workout={workouts[category]} />
      <DietPlanner></DietPlanner>
      <Link href="https://public.tableau.com/app/profile/aditya.singh.parmar3960/viz/Book1_17429099525930/Dashboard1?publish=yes" className=" flex justify-center items-center w-full mt-[30px]" >
        <button className=" w-[100px] h-[50px] bg-blue-600 rounded-md m-[40px]" >Dashboard</button>
      </Link>
    </div>
  );
}

export default WorkoutPage;



// "use client"
// import { useState } from "react";

// const workouts = {
//   Beginner: {
//     options: ["Push Pull Leg", "Full Body"],
//     charts: {
//       "Push Pull Leg": [
//         { exercise: "Bench Press", sets: 3, reps: 10, time: "30 sec" },
//         { exercise: "Pull-ups", sets: 3, reps: 8, time: "40 sec" },
//         { exercise: "Squats", sets: 4, reps: 12, time: "45 sec" },
//       ],
//       "Full Body": [
//         { exercise: "Deadlifts", sets: 3, reps: 8, time: "60 sec" },
//         { exercise: "Lunges", sets: 3, reps: 10, time: "30 sec" },
//       ],
//     },
//   },
//   Intermediate: {
//     options: ["Push Pull Leg", "Bro Split"],
//     charts: {
//       "Push Pull Leg": [
//         { exercise: "Incline Bench Press", sets: 4, reps: 8, time: "40 sec" },
//         { exercise: "Deadlifts", sets: 4, reps: 6, time: "60 sec" },
//       ],
//       "Bro Split": [
//         { exercise: "Bicep Curls", sets: 3, reps: 12, time: "30 sec" },
//         { exercise: "Tricep Dips", sets: 3, reps: 10, time: "30 sec" },
//       ],
//     },
//   },
//   Professional: {
//     options: ["Professional Plan"],
//     charts: {
//       "Professional Plan": [
//         { exercise: "Snatch", sets: 5, reps: 5, time: "90 sec" },
//         { exercise: "Clean & Jerk", sets: 5, reps: 3, time: "120 sec" },
//       ],
//     },
//   },
// };

// function Workout() {
//   const [category, setCategory] = useState("Beginner");
//   const [selectedPlan, setSelectedPlan] = useState("");

//   return (
//     <div className="flex flex-col items-center p-6">
//       <h2 className="text-2xl font-bold mb-4">Workout Plans</h2>
//       <label className="font-semibold">Select Category:</label>
//       <select className="p-2 border mb-4" value={category} onChange={(e) => setCategory(e.target.value)}>
//         <option>Beginner</option>
//         <option>Intermediate</option>
//         <option>Professional</option>
//       </select>

//       {workouts[category] && (
//         <>
//           <label className="font-semibold">Select Plan:</label>
//           <select className="p-2 border mb-4" value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)}>
//             <option value="">Select</option>
//             {workouts[category].options.map((option) => (
//               <option key={option}>{option}</option>
//             ))}
//           </select>
//         </>
//       )}

//       {selectedPlan && workouts[category].charts[selectedPlan] && (
//         <div className="mt-4 w-1/2">
//           <h3 className="text-xl font-semibold mb-2">Exercise Chart</h3>
//           <table className="w-full border">
//             <thead>
//               <tr>
//                 <th className="border p-2">Exercise</th>
//                 <th className="border p-2">Sets</th>
//                 <th className="border p-2">Reps</th>
//                 <th className="border p-2">Time</th>
//               </tr>
//             </thead>
//             <tbody>
//               {workouts[category].charts[selectedPlan].map((exercise, index) => (
//                 <tr key={index}>
//                   <td className="border p-2">{exercise.exercise}</td>
//                   <td className="border p-2">{exercise.sets}</td>
//                   <td className="border p-2">{exercise.reps}</td>
//                   <td className="border p-2">{exercise.time}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Workout;