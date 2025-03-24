"use client"
import {useRouter} from "next/navigation"
// import router, {  } from "next/router";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const navigate = useNavigate();
    const router=useRouter();
  const handleLogin = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/signin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({email:email,password:password}),
        });
        // console.log(formdata);
        const data = await response.json();
        // console.log("Server Response:",data.response);
        console.log("data from backend on request is ", data);
        await localStorage.setItem("token",data.response);
        const token=localStorage.getItem("token")
        console.log("token saved in local storage",localStorage.getItem("token"));
        if (token) {
          router.push(`/user`); 
        } else {
          console.error("Login failed:", data);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="p-6 bg-black rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input className="w-full p-2 mb-2 border" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full p-2 mb-2 border" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="w-full bg-blue-500 text-white p-2 rounded" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
export default page;
