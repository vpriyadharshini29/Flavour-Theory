import React, { useState } from "react";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.type === "tel" ? "mobile" : e.target.type]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if already registered
    const exists = users.find((user) => user.email === formData.email);
    if (exists) {
      alert("User already registered. Please login.");
      return;
    }

    // Save new user
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful! Please login.");
  };

  return (
    <section className="bg-[#FFF7F0] min-h-screen flex items-center justify-center px-4 py-12">
      <div className="bg-[#FFF2D9] w-full max-w-xl rounded-3xl shadow-md p-8">
        {/* Header */}
        <div className="flex justify-center mb-6">
          <h2 className="bg-[#A3D24C] text-black text-xl font-bold px-6 py-2 rounded-full">
            SIGNUP
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-bold text-black mb-1">NAME</label>
            <input type="text" className="w-full px-4 py-2 border border-red-300 rounded-md shadow-sm focus:outline-none" onChange={handleChange} required />
          </div>

          <div>
            <label className="block text-sm font-bold text-black mb-1">E MAIL</label>
            <input type="email" className="w-full px-4 py-2 border border-red-300 rounded-md shadow-sm focus:outline-none" onChange={handleChange} required />
          </div>

          <div>
            <label className="block text-sm font-bold text-black mb-1">PASSWORD</label>
            <input type="password" className="w-full px-4 py-2 border border-red-300 rounded-md shadow-sm focus:outline-none" onChange={handleChange} required />
          </div>

          <div>
            <label className="block text-sm font-bold text-black mb-1">MOBILE NUMBER</label>
            <input type="tel" className="w-full px-4 py-2 border border-red-300 rounded-md shadow-sm focus:outline-none" onChange={handleChange} required />
          </div>

          <button type="submit" className="w-full bg-[#D35756] text-white font-semibold py-2 rounded-full hover:bg-[#b84b4a] transition">
            SUBMIT
          </button>
        </form>

        {/* Links */}
   
           {/* Disclaimer */}
        <p className="text-xs text-gray-500 text-center mt-4 px-4">
          By joining and using Flover Theory Academy Platform, you agree to our{' '}
          <a href="#" className="underline font-medium">Terms & Policies</a>
        </p>
      </div>
    </section>
  );
}
