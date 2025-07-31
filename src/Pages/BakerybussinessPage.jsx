import React from 'react';
import { NotebookPen, RotateCcw, Utensils, List, Monitor } from "lucide-react";
import ChatSection from '../Components/Inbox';
import { Link } from "react-router-dom";
const features = [
  {
    icon: <NotebookPen className="w-10 h-10 mx-auto mb-4" />,
    text: (
      <>
        1 Year access to exclusive <br />
        recipe <strong>videos</strong>, not <br />
        available on YouTube
      </>
    ),
  },
  {
    icon: <RotateCcw className="w-10 h-10 mx-auto mb-4" />,
    text: (
      <>
        More than 140 <br />
        downloadable signature <br />
        recipes from the <strong>MasterChef</strong>
      </>
    ),
  },
  {
    icon: <Utensils className="w-10 h-10 mx-auto mb-4" />,
    text: (
      <>
        Learn how to cook <br />
        dishes from basic to <br />
        advanced recipes
      </>
    ),
  },
  {
    icon: <List className="w-10 h-10 mx-auto mb-4" />,
    text: (
      <>
        Watch video unlimited <br />
        times and download <br />
        recipes PDFs
      </>
    ),
  },
  {
    icon: <Monitor className="w-10 h-10 mx-auto mb-4" />,
    text: (
      <>
        Learn from anywhere with <br />
        any device – mobile, <br />
        desktop, or laptop
      </>
    ),
  },
  {
    icon: <List className="w-10 h-10 mx-auto mb-4" />,
    text: (
      <>
        Course completion <br />
        certificate
      </>
    ),
  },
];

function BakeryAccelerator() {
  return (
    <div className="bg-[#fff7f0] font-sans px-4 py-8 md:px-16">
      {/* Header */}
      <section className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">BAKERY BUSINESS ACCELERATOR PROGRAM</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-black mt-2">Program Limited to 50 people Only!</h2>
      </section>

      {/* Main Content */}
      <section className="bg-black bg-center rounded-3xl text-white p-6 md:p-10" >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold leading-snug">
              Launch & Grow Your Bakery Business in the next 60 Days <br />
              with the Bakery Accelerator Program
            </h2>
            <p className="text-lg mt-4 font-medium">Even If You Don’t Have Any Prior Experience In Baking!</p>

            <ul className="mt-6 space-y-3 text-lg">
              <li>📅 Batch II Start Date – <strong>31st July 2024</strong></li>
              <li>▶️ 10+ Hrs Of Pre-Recorded Video Content</li>
              <li>📚 100+ Baking Recipes</li>
              <li>🎓 Exclusive Masterclasses</li>
            </ul>

            <div className="mt-6 text-xl font-semibold">
              Program Fees: <span className="line-through text-red-300">₹1 Lakh</span> <span className="text-white">| INR 36,000/-</span>
            </div>

       <Link to="/enroll" >  <button className="mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-xl text-lg transition">
              ENROLL NOW
            </button></Link>

            <p className="mt-4 text-sm text-yellow-200 font-semibold">
              We’re looking for Action Takers. Program open for 50 participants only
            </p>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="/images/3.png"
              alt="Chef Baking"
              className="rounded-2xl w-full object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer Badges */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mt-10">
        <div className="bg-[#fff5e4] rounded-2xl p-6 shadow-md">
          <div className="text-3xl mb-2">👥</div>
          <p className="font-bold text-xl">20M</p>
          <p className="text-sm">Followers</p>
        </div>
        <div className="bg-[#fff5e4] rounded-2xl p-6 shadow-md">
          <div className="text-3xl mb-2">📘</div>
          <p className="font-bold text-xl">Author</p>
          <p className="text-sm">50+ books</p>
        </div>
        <div className="bg-[#fff5e4] rounded-2xl p-6 shadow-md">
          <div className="text-3xl mb-2">👩‍🍳</div>
          <p className="font-bold text-xl">30 Yrs+</p>
          <p className="text-sm">Culinary Expertise</p>
        </div>
      </section>



      <div className="bg-green-400 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {features.map((item, idx) => (
          <div key={idx}>
            {item.icon}
            <p className="text-lg font-semibold leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>




    <ChatSection/>
    </div>
  );
}

export default BakeryAccelerator;
