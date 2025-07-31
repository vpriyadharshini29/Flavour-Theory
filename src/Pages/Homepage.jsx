import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { MessageCircle, X } from "lucide-react"; // Add this to use optional icons
import { Link } from "react-router-dom";
import ChatSection from "../Components/Inbox";

const courses = [
  {
    title: "THE GOOD GUT PROGRAM",
    description:
      "In Just 4 Weeks, Say Goodbye To Bloating, Constipation, Inflammation & Acidity. Plus Gain More Energy & Boost Immunity",
    offer: "Get 70% OFF",
    price: "₹ 4999 ",
    price1:"₹ 1499",
  },
  {
    title: "LOOK GOOD COURSE",
    description:
      "In Just 30 Days, Discover Time Tested & Science Backed Insights, Remedies And Recipes",
    offer: "New Launch Offer | Get 88% OFF",
    price: "₹ 42,995 ",
    price1:"₹ 4,999",
  },
  {
    title: "Start Your Food Business From Home",
    description:
      "Learn How To Start Your Food Business From Home, And Run A Successful Home",
    offer: "New Launch Offer | Get 70% OFF",
    price: "₹ 4999 ",
    price1:"₹ 1,499",
  },
];
const allCourses = [
  {
    title: "IMMUNITY BOOSTER RECIPES",
    description:
      "Live Well And Boost Your Immunity With Time-Tested Immunity Booster Recipes From The Expert In Indian Cuisine",
    offer: "Limited Period Offer – Get 40% OFF",
    price: "₹ 4000 ",
    price1:"₹ 1,999",
  },
  {
    title: "GARNISHING & PLATING COURSE",
    description:
      "Love Plating Your Dishes Like An Expert? Take Professional Cues From MasterChef Sanjeev Kapoor To Excel In The Art Of Food Presentation!",
    offer: "Limited Period Offer – Get 60% OFF",
    price: "₹ 999 ",
    price1:"₹ 399",
  },
  {
    title: "COOKING AT HOME RESTAURANT STYLE & HOME STYLE",
    description:
      "Cook Amazing Restaurant Style Dishes And Change Everyday Home Cooked Dishes Into Exceptional Dishes Your Family Will Love",
    offer: "Get 90% OFF",
    price: "₹ 6000 ",
    price1:"₹ 1,999",
  },
  {
    title: "VEGETARIAN'S SPECIAL",
    description:
      "Live Well And Boost Your Immunity With Time-Tested Immunity Booster Recipes From The Expert In Indian Cuisine",
    offer: "Limited Period Offer – Get 40% OFF",
    price: "₹ 4000 ",
    price1:"₹ 1,999",
  },
  {
    title: "BASIC COOKING",
    description:
      "Love Plating Your Dishes Like An Expert? Take Professional Cues From MasterChef Sanjeev Kapoor To Excel In The Art Of Food Presentation!",
    offer: "Limited Period Offer – Get 60% OFF",
    price: "₹ 999",
    price1:" ₹ 399",
  },
  {
    title: "INDIAN STYLE DISHES",
    description:
      "Cook Amazing Restaurant Style Dishes And Change Everyday Home Cooked Dishes Into Exceptional Dishes Your Family Will Love",
    offer: "Get 90% OFF",
    price: "₹ 6000",
    price1:" ₹ 1,999", 
   },
];

const faqs = [
  {
    question: "1. How do I find a recipe on your website?",
    answer: "Use the search bar or browse through our categories to find recipes."
  },
  {
    question: "2. Can I save my favorite recipes?",
    answer: "Yes, you can save recipes to your profile after logging in."
  },
  {
    question: "3. How do I submit my own recipes?",
    answer: "Visit the Submit Recipe section under your profile to share recipes."
  },
  {
    question: "4. Are the recipes suitable for beginners?",
    answer: "Absolutely! We offer a wide range of beginner-friendly recipes."
  },
  {
    question: "5. How do I know if a recipe is vegan, gluten-free, or dairy-free?",
    answer: "Each recipe includes tags and dietary information for easy filtering."
  }
];


const Home = () => {
    const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }


const [showChat, setShowChat] = useState(false); // NEW

  return (
    <div >
    <section className="bg-[#fff5e4] font-poppins flex flex-col md:flex-row justify-center items-center px-4 md:px-20 py-10 gap-8 min-h-screen">
      {/* Left Image */}
      <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-lg">
        <img
          src="./images/H1.png"
          alt="Chef Baking"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Text */}
      <div className="w-full md:w-1/2 bg-white rounded-3xl shadow-md p-8 border-l-[10px] border-[#A7C957]">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 leading-snug text-center">
          TAKE YOUR COOKING SKILLS<br />
          TO THE NEXT LEVEL WITH MASTER CHEFS
        </h1>
        <p className="text-black text-md md:text-lg mb-8 text-center">
          CULINARY TIPS AND TRICKS STRAIGHT FROM THE EXPERT, ON HOW TO COOK
          SCRUMPTIOUS, INSTAGRAM READY, LIP SMACKING DISHES THAT ARE CLEAN,
          HEALTHY, AND ENERGIZING.
        </p>
        <div className="flex justify-center">
       <Link to="/course">     <button className="bg-[#D57A66] text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition">
            VIEW COURSES
          </button></Link>
          
        </div>
      </div>
    </section>





    <section className="bg-[#fff5e4] py-16 font-poppins px-4 md:px-12 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">FEATURED COURSES</h2>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {courses.map((course, index) => (
          <div
  key={index}
  className="w-full max-w-xs bg-cover bg-center rounded-3xl overflow-hidden  flex flex-col justify-between"
  style={{
    backgroundImage: `url("/images/COURSES.png")`,
    minHeight: "600px",
  }}
>
  <div className="bg-opacity-0 p-6 h-full flex flex-col justify-center">
    <div className="text-center">
      <br></br>
      <br></br>
      <br></br>
      <h3 className="text-lg md:text-xl font-bold mb-4">{course.title}</h3>
      <p className="text-sm md:text-base mb-4">{course.description}</p>
      <p className="font-semibold  mb-2">{course.offer}</p>
      <p className="text-lg line-through font-bold">{course.price}</p>
       <p className="text-lg  font-bold">{course.price1}</p>

    </div>
     <Link to="/course">
    <button className="mt-6 bg-[#D57A66] text-white py-2 text-center rounded-full font-semibold text-lg hover:opacity-90">
      LEARN MORE
    </button>
    </Link>
  </div>
</div>

     
        ))}
      </div>
    </section>






     <section className="bg-[#fff5e4] py-16 px-4 md:px-12 lg:px-20 font-poppins">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">ALL COURSES</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {allCourses.map((course, index) => (
           <div
  key={index}
  className="w-full max-w-xs bg-cover bg-center rounded-3xl overflow-hidden flex flex-col justify-between relative"
  style={{
    backgroundImage: `url("/images/COURSES.png")`,
    minHeight: "600px",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0  bg-opacity-40 rounded-3xl z-0" />


            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-6 text-center">
              <h3 className="text-white text-lg md:text-xl font-bold mb-4">{course.title}</h3>

              <div className=" rounded-md p-4 text-black text-sm md:text-base shadow-md flex flex-col justify-between min-h-[280px]">
                <p className="mb-4">{course.description}</p>
                <div>
                  <p className="font-semibold mb-1">{course.offer}</p>
                  <p className="text-lg font-bold">{course.price}</p>
                  <p className="text-lg line-through font-bold">{course.price1}</p>
                </div>
              </div>
              <Link to="/course">
              <button className="mt-6 bg-[#D57A66] text-white py-2 text-center rounded-full font-semibold text-lg hover:opacity-90">
                LEARN MORE
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>





    <section className="bg-[#fff5e4] px-4 md:px-12 py-12 font-poppins">
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden flex flex-col lg:flex-row items-center text-white relative">
        {/* Left Text */}
        <div className="w-full lg:w-2/3 p-8 md:p-12 space-y-4  bg-black">
          <h3 className="text-xl md:text-2xl font-light">
            LIMITED PERIOD OFFER:
          </h3>
          <h2 className="text-2xl md:text-3xl font-extrabold">
            FREE GIFT WITH EVERY COURSE
          </h2>
          <hr className="border-t border-gray-500 w-2/3 my-2" />
          <p className="text-base md:text-lg leading-relaxed">
            GET ACCESS TO BONUS COURSE WITH PREMIUM RECIPES AND COOK AMAZING
            DISHES WITH <span className="font-semibold">US CRANBERRIES.</span>
          </p>
          <Link to="/course"><button className="mt-4 bg-[#D57A66] hover:opacity-90 text-white font-semibold px-6 py-2 rounded-full text-base w-fit">
            LEARN MORE
          </button></Link>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/3 min-h-[350px]  bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/dates.jpg')",
          }}
        ></div>
      </div>
    </section>



     <section className="bg-[#fff5e4] font-poppins py-16 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">FAQ’S</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-[#9e8b7d] rounded-2xl bg-white text-[#5c4a3c]">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold focus:outline-none"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-base text-[#5c4a3c]">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>


<ChatSection/>
    </div>
  );
};

export default Home;
