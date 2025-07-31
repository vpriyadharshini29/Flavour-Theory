
import { Link } from "react-router-dom";
export default function ForgetPasswordForm() {
  return (
    <section className="bg-[#FFF7F0] min-h-screen flex items-center justify-center px-4 py-12">
      <div className="bg-[#FFF2D9] w-full max-w-xl rounded-3xl shadow-md p-8">
        {/* Header */}
        <div className="flex justify-center mb-6">
          <h2 className="bg-[#A3D24C] text-black text-xl font-bold px-6 py-2 rounded-full">
            FORGET PASSWORD
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-black mb-1">E MAIL</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-red-400 rounded-md shadow-sm focus:outline-none"
              placeholder="Enter your registered email"
            />
          </div>

          {/* Submit Button */}
       <Link to="/login">  <button
            
            className="w-full bg-[#D35756] text-white font-semibold py-2 rounded-full hover:bg-[#b84b4a] transition"
          >
            SUBMIT
          </button></Link>
        </form>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 text-center mt-6 px-4">
          By joining and using Flover Theory Academy Platform, you agree to our{' '}
          <a href="#" className="underline font-medium">
            Terms & Policies
          </a>
        </p>
      </div>
    </section>
  );
}
