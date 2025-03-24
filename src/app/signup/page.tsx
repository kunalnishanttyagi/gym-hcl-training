"use client"
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

function page() {
  const [form, setForm] = useState({ fullName: "", email: "", password: "", height: "", weight: "", goalweight: "", level: "Beginner", age: "" });
//   const navigate = useNavigate();

  const handleChange = (e: { target: { name: any; value: any; }; }) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSignup = async () => {
    // await axios.post("http://localhost:5000/signup", form);
    // navigate("/");
    try {
        const response = await fetch("/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
  
        const data = await response.json();
        console.log(form);
        if (response.success) {
          alert("Signup successful!");
        } else {
          alert("Error: " + data.message);
        }
      } catch (error) {
        console.error("Signup error:", error);
        alert("An error occurred. Please try again.");
      }
    
  
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="p-6 bg-black rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Sign Up</h2>
        <input className="w-full p-2 mb-2 border" name="fullName" placeholder="Full Name" value={form.fullName} onChange={handleChange} />
        <input className="w-full p-2 mb-2 border" name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input className="w-full p-2 mb-2 border" name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
        <input className="w-full p-2 mb-2 border" name="height" placeholder="Height" value={form.height} onChange={handleChange} />
        <input className="w-full p-2 mb-2 border" name="weight" placeholder="Weight" value={form.weight} onChange={handleChange} />
        <input className="w-full p-2 mb-2 border" name="goalweight" placeholder="Aimed Weight" value={form.goalweight} onChange={handleChange} />
        <select className="w-full p-2 mb-2 border" name="level" value={form.level} onChange={handleChange}>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Professional</option>
        </select>
        <input className="w-full p-2 mb-2 border" name="age" placeholder="Age" value={form.age} onChange={handleChange} />
        <button className="w-full bg-green-500 text-white p-2 rounded" onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
}
export default page;

