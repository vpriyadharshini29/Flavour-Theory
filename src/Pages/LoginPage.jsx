import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!matchedUser) {
      alert("User not found. Please sign up first.");
      return;
    }

    alert("Login successful!");
    navigate("/"); // redirect to homepage
  };

  return (
    <div className="bg-amber-50 min-h-screen flex flex-col items-center justify-center px-4">
      <div className="bg-amber-50 max-w-md w-full p-8 rounded-3xl shadow-sm text-center">
        <div className="bg-lime-400 rounded-full px-8 py-2 mb-6 inline-block font-bold text-xl text-black">
          LOGIN
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="text-left">
            <label className="block text-sm font-bold mb-1 uppercase">E Mail</label>
            <input type="email" className="w-full px-6 py-3 border border-rose-400 rounded-2xl shadow-sm focus:outline-none bg-white" onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="text-left">
            <label className="block text-sm font-bold mb-1 uppercase">Password</label>
            <input type="password" className="w-full px-6 py-3 border border-rose-400 rounded-2xl shadow-sm focus:outline-none bg-white" onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <button type="submit" className="w-full bg-rose-600 text-white py-3 rounded-full font-semibold hover:bg-rose-700 transition">
            Submit
          </button>
        </form>

        <div className="flex justify-between items-center mt-6 text-sm font-medium text-rose-700">
          <Link to="/forget">  <button className="hover:underline">Forgot Password?</button></Link>
          <Link to="/signup"><button className="hover:underline">Sign Up</button></Link>
        </div>
      </div>
    </div>
  );
}
