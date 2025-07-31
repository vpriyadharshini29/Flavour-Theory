import React from 'react';
import { Link } from "react-router-dom";
import ChatSection from '../Components/Inbox';
const About = () => {
  return (
    <div>
    <section className="bg-[#fff5e4] px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Text Card */}
        <div className="flex-1 bg-gradient-to-b from-[#c1dc8c] to-white rounded-3xl shadow-lg p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            MORE POWER TO YOUR COOKING! <br /> THROUGH LEARNING
          </h2>
          <p className="text-base md:text-lg text-black mb-8 leading-relaxed">
            Discover A Better Way Of Cooking Amazing Dishes <br />
            With Recipes Specially Curated By The Most <br />
            Celebrated Face In The Indian Cuisine.
          </p>
         <Link to="/course">  <button className="bg-[#b94646] hover:bg-[#a33d3d] text-white text-lg font-semibold px-8 py-3 rounded-full transition duration-300">
            VIEW COURSES
          </button></Link>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src="/images/A1.png" // Replace with your image if needed
            alt="Chefs Cooking"
            className="rounded-3xl shadow-md object-cover w-full h-full"
          />
        </div>
      </div>
    </section>


<section className="bg-[#fff5e4] px-6 py-16 text-center text-black">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* About Us Heading */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">ABOUT US</h2>
          <p className="text-lg leading-relaxed">
            Welcome to Flavour theory, your go-to place for delicious recipes, culinary inspiration, and a
            community of food lovers!
          </p>
          <p className="text-lg leading-relaxed mt-6">
            At Flavour theory, we believe that cooking is more than just preparing food—it's about creativity, joy,
            and bringing people together. Whether you're a seasoned chef or just starting your culinary journey,
            our mission is to make cooking easy, fun, and accessible to everyone.
          </p>
        </div>

        {/* Our Story Heading */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">OUR STORY</h2>
          {/* You can add more content below this if desired */}
        </div>
      </div>
    </section>



    <section className="relative bg-[#fff5e4]py-16 px-4">
      <div
        className="rounded-3xl overflow-hidden max-w-7xl mx-auto"
        style={{
          backgroundImage: `url('/images/story.png')`, // Replace with your image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className=" bg-opacity-70 text-white p-10 text-center">
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            Our journey began with a passion for food and the desire to share it with others. Flavour theory, a passionate home cook and food enthusiast, started the website to create a space where anyone, no matter their skill level, could discover new recipes, learn helpful cooking tips, and explore a world of flavors.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mt-6 max-w-4xl mx-auto">
            Over the years, our team has grown, but our core values remain the same: to inspire home cooks everywhere to embrace the magic of the kitchen and make every meal a special occasion.
          </p>
        </div>
      </div>
    </section>



      <section className="bg-[#fff5e4] py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          WHAT WE OFFERS
        </h2>
        <ul className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-900">
          <li className="flex items-start gap-3">
            <span className="text-[#d75b5b] text-2xl mt-1">•</span>
            <p>
              <span className="font-bold text-[#d75b5b]">Tasty Recipes:</span>{' '}
              From quick weeknight dinners to indulgent desserts, our recipes
              cover every occasion and dietary preference. Each recipe is tested
              and designed to be easy to follow, so you can enjoy the process as
              much as the result!
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#d75b5b] text-2xl mt-1">•</span>
            <p>
              <span className="font-bold text-[#d75b5b]">Helpful Cooking Tips:</span>{' '}
              Our step-by-step guides, cooking hacks, and ingredient substitutions
              will help you master new techniques and cook with confidence.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#d75b5b] text-2xl mt-1">•</span>
            <p>
              <span className="font-bold text-[#d75b5b]">Community of Food Lovers:</span>{' '}
              Join our vibrant community of home cooks, share your own recipes,
              leave reviews, and inspire others. We believe cooking is even more
              enjoyable when shared!
            </p>
          </li>
        </ul>
      </div>
    </section>



     <section className="bg-[#fff5e4] px-4 md:px-12 py-12 font-poppins">
      <div className="max-w-6xl mx-auto bg-black rounded-3xl overflow-hidden flex flex-col lg:flex-row items-center text-white relative">
        {/* Left Text */}
        <div className="w-full lg:w-2/3 p-8 md:p-12 space-y-4">
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



      <section className="relative bg-[#fff5e4] py-16 px-4">

        <div>
          <h2 className="text-3xl md:text-4xl font-bold">OUR Values</h2>
          {/* You can add more content below this if desired */}
        </div>
      <div
        className="rounded-3xl overflow-hidden max-w-7xl mx-auto"
        style={{
          backgroundImage: `url('/images/story.png')`, // Replace with your image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className=" bg-opacity-70 text-white p-10 text-center">
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
           Simplicity:our receipes are even approachable for beginners
          </p>
          <p className="text-lg md:text-xl leading-relaxed mt-6 max-w-4xl mx-auto">
           Creativity:We encourage experimenting in foods  </p>
        </div>
      </div>
    </section>

<ChatSection/>


    </div>
  );
};

export default About;
