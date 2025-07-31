import { NotebookPen, RotateCcw, Utensils, List, Monitor } from "lucide-react";
import React, { useState, useEffect } from "react";
import ChatSection from "../Components/Inbox";
import { Link } from "react-router-dom";


  const testimonials = [
    {
      img: "/images/b1.png",
      text: `"CHEF MADE IT FUN, EVEN FOR A TOTAL BEGINNER LIKE ME!"`,
      name: "– CARLOS D"
    },
    {
      img: "/images/2.png",
      text: `"THIS COURSE CHANGED THE WAY I COOK FOREVER!"`,
      name: "– LAURA P"
    },
    {
      img: "/images/b2.png",
      text: `"WELL STRUCTURED AND EASY TO FOLLOW. HIGHLY RECOMMENDED!"`,
      name: "– RAJ K"
    },
    {
      img: "/images/1.png",
      text: `"I LOVED EVERY MINUTE OF IT. THE RECIPES ARE AMAZING!"`,
      name: "– EMMA W"
    },
    {
      img: "/images/3.png",
      text: `"A PERFECT START FOR ANYONE INTERESTED IN BAKING!"`,
      name: "– MIKE H"
    }
  ];

  


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

export default function CookingCourseBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];
  return (

    <div className="bg-[#fff5e4]">
      
    <div className="bg-[#fff5e4] py-18 px-4 flex flex-col items-center text-center rounded-3xl shadow-md max-w-5xl mx-auto relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"  />

      {/* Content */}
      <div className="relative z-10 space-y-6 max-w-3xl"style={{ backgroundImage: `url('/images/Course.png')` }}>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          From Butter Chicken to Singaporean Noodles: Cook <br />
          India’s Favourite Dishes at Home
        </h1>

        <p className="text-base sm:text-lg font-medium">
          In just 90 days, master the art of cooking 140+ basic to advanced Restaurant
          and Home styled dishes with step by step guidance and recipes!
        </p>

        <div className="space-y-2 font-bold text-lg sm:text-xl">
          <p className="text-rose-600">Limited Period Offer – Get 67% OFF</p>
          <p>
            <span className="line-through text-gray-600">₹ 6000</span>{' '}
            <span className="text-black">₹ 1,999</span>
          </p>
        </div>
        <Link to="/enroll">
        <button className="bg-rose-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-rose-700 transition">
          ENROLL NOW
        </button>
        </Link>

        <p className="text-sm sm:text-base font-medium text-gray-800">
          Learn the secrets of cooking delicious restaurant and home-style dishes with
          the Masterchef & ace the art of recreating amazing cuisines at home.
        </p>
      </div>

      {/* Badges */}
      <div className="relative z-10 flex flex-wrap justify-center gap-4 mt-8">
        <Badge icon="👥" label="20M Followers" />
        <Badge icon="📚" label="Author 50+ books" />
        <Badge icon="👨‍🍳" label="30 Yrs+ culinary Expertise" />
      </div>



      <section className="bg-[#FFF7F0] py-12 px-4 sm:px-6 lg:px-12 rounded-3xl shadow-md max-w-6xl mx-auto"style={{ backgroundImage: `url('/images/curi.png')` }}>
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Course Curriculum</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Image */}
        <img
          src="/curri" // Replace with actual image path
          
          className="w-full h-auto rounded-xl shadow-sm"
        />

        {/* Right List */}
        <ul className="space-y-3 text-left list-disc list-inside text-gray-800 text-base sm:text-lg font-medium">
          <li>Introduction: Restaurant style dishes</li>
          <li>Master class with master chef</li>
          <li>Restaurant style dishes: Accompaniments</li>
          <li>Breads</li>
          <li>Desserts</li>
          <li>Main course – non veg</li>
          <li>Main course – veg</li>
          <li>Rice</li>
          <li>Soup – veg</li>
          <li>Starters – non veg</li>
          <li>Soup – non veg</li>
          <li>Starters – veg</li>
          <li>Bonus course: All about US Assessments</li>
          <li>Thank you</li>
        </ul>
      </div>
    </section>



     <section className="bg-[#FFF7F0] py-12 px-6 md:px-16 rounded-3xl shadow-md max-w-5xl mx-auto">
      {/* Recipe Image with Play Button */}
      <div className="relative mb-8">
        <img
          src="./images/vedio.png" // Replace with actual image path
          alt="Veg Hakka Noodles"
          className="rounded-2xl w-full h-auto shadow-md"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-red-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        Veg Hakka Noodles <span className="text-gray-600">(Indian-Chinese)</span>
      </h2>

      {/* Ingredients */}
      <div className="mb-6">
        <h3 className="text-lg font-bold">Ingredients:</h3>
        <ul className="list-disc list-inside text-gray-800 mt-2 space-y-1">
          <li>200g Hakka Noodles</li>
          <li>2 Tbsp Oil</li>
          <li>1 Tbsp Soy Sauce</li>
          <li>1 Tsp Vinegar</li>
          <li>½ Tsp Chili Sauce</li>
          <li>1 Tsp Garlic (Finely Chopped)</li>
          <li>1 Onion (Sliced)</li>
          <li>1 Cup Julienned Veggies (Carrot, Bell Pepper, Cabbage, Beans)</li>
          <li>Salt & Pepper</li>
        </ul>
      </div>

      {/* Instructions */}
      <div>
        <h3 className="text-lg font-bold">Instructions:</h3>
        <ol className="list-decimal list-inside text-gray-800 mt-2 space-y-1">
          <li>Boil noodles, rinse with cold water, toss in a bit of oil.</li>
          <li>Heat oil in a wok, sauté garlic and onions.</li>
          <li>Add all veggies and stir-fry on high heat for 2–3 mins.</li>
          <li>Add noodles, soy sauce, vinegar, chili sauce, salt & pepper.</li>
          <li>Toss on high flame until well combined. Serve hot.</li>
        </ol>
      </div>
    </section>

<br></br>


{/* Testimonials */}
    <section className="bg-[#FFF7F0] py-12 px-4 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">COURSE TESTIMONIALS</h2>
      <br />
      <br />

      <div className="bg-[#FFF2D9] max-w-3xl mx-auto px-8 py-12 rounded-3xl shadow-md relative">
        {/* Image */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <img
            src={current.img}
            alt={current.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="mt-20">
          <p className="text-xl font-bold text-black mb-4">{current.text}</p>
          <p className="text-lg font-semibold text-black">{current.name}</p>
        </div>
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
    </div>
  );
}

function Badge({ icon, label }) {
  return (
    <div>
    <div className="flex items-center gap-2 bg-rose-200 px-4 py-2 rounded-full font-semibold text-sm">
      <span>{icon}</span>
      {label}
    </div>
    
    </div>
    
  );
}
