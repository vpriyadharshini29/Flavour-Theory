import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Pages/Header";
import Home from "./Pages/Homepage";
import Footer from "./Pages/Footer";
import About from "./Pages/Aboutus";
import BakeryAccelerator from "./Pages/BakerybussinessPage";
import CloudKitchen from "./Pages/CloudKitchen";
import Contact from "./Pages/ContactPage";
import LoginForm from "./Pages/LoginPage";
import EnrollmentForm from "./Pages/EnrollPage";
import CookingCourseBanner from "./Pages/CoursesPage";
import SignupForm from "./Pages/Signuppage";
import ForgetPasswordForm from "./Pages/ForgetEmail";
import SuccessMessage from "./Pages/EnrollSuccessfulpage";

const App = () => {
  return (
    <Router>
      <Header />

      {/* Content wrapper with top padding to prevent overlap */}
      <div className="pt-24 md:pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bakery" element={<BakeryAccelerator />} />
          <Route path="/cloud" element={<CloudKitchen />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/enroll" element={<EnrollmentForm />} />
          <Route path="/course" element={<CookingCourseBanner />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/forget" element={<ForgetPasswordForm />} />
          <Route path="/success" element={<SuccessMessage />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};

export default App;
