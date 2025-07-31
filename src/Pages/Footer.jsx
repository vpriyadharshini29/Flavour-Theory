import React from 'react';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaGoogle,
  FaFacebookF,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#D57A66] text-white py-10 px-4 sm:px-6 md:px-10 rounded-t-[40px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center sm:items-center lg:items-start text-center lg:text-left">
          <div className="bg-[#fbdede] p-6 rounded-full mb-4">
            <img
              src="./images/logo.png" // replace with actual image URL
              alt="Flavour Theory"
              className="h-24"
            />
          </div>
        </div>

        {/* Home Links */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold mb-4">HOME</h3>
          <ul className="space-y-2 text-sm">
            <li>ABOUT US</li>
            <li>PROGRAMS</li>
            <li>COURSES</li>
          </ul>
        </div>

        {/* Courses Links */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold mb-4">COURSES</h3>
          <ul className="space-y-2 text-sm">
            <li>THE GOOD GUT PROGRAM</li>
            <li>FOOD LOOK GOOD</li>
            <li>START YOUR BUSINESS FROM HOME–NON VEG & VEG</li>
            <li>START YOUR FOOD BUSINESS FROM HOME–VEG ONLY</li>
            <li>IMMUNITY BOOSTER RECIPES</li>
            <li>INDIA’S FAVOURITES</li>
            <li>VEGETARIAN’S DELIGHT</li>
            <li>GARNISHING & PLATING</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold mb-4">CONTACT</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex flex-col sm:flex-row sm:items-start gap-2">
              <FaMapMarkerAlt className="mt-1" />
              <span>
                FLOVERTHEORY ACADEMY <br />
                1234, OLIVE STREET, <br />
                CHENNAI – 021
              </span>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <FaEnvelope />
              Info@Flovertheoryacadamy.In
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <FaPhoneAlt />
              044–987 6785 5677
            </li>
          </ul>

          <h3 className="font-bold mt-6 mb-2">FOLLOW US</h3>
          <div className="flex justify-center sm:justify-start gap-4 text-xl">
            <FaInstagram />
            <FaGoogle />
            <FaFacebookF />
            <FaYoutube />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
