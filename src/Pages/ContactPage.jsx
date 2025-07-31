import { useState } from "react";
import ChatSection from "../Components/Inbox";

export default function Contact() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    setFileName(e.target.files[0]?.name || "");
  };

  return (
    <div className="bg-amber-50 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-amber-50 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Form */}
        <div className="p-8">
          <h2 className="text-2xl font-extrabold mb-6">SUBMIT A TICKET</h2>

          <form className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-black mb-2 uppercase">
                Requester<span className="text-yellow-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-full px-6 py-3 shadow-md bg-white placeholder-gray-400 focus:outline-none"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-bold text-black mb-2 uppercase">
                Subject<span className="text-yellow-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-full px-6 py-3 shadow-md bg-white placeholder-gray-400 focus:outline-none"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-bold text-black mb-2 uppercase">
                Description<span className="text-yellow-500">*</span>
              </label>
              <textarea
                rows="4"
                placeholder="Write your issue..."
                className="w-full rounded-2xl px-6 py-4 shadow-md bg-white placeholder-gray-400 focus:outline-none resize-none"
              />
            </div>

            {/* File Upload */}
            <div>
              <label
                htmlFor="file-upload"
                className="text-sm font-semibold text-lime-700 cursor-pointer hover:underline"
              >
                + Attach a file
              </label>
              <input
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
              {fileName && (
                <p className="text-xs mt-1 text-gray-600">{fileName}</p>
              )}
            </div>

            {/* Fake CAPTCHA */}
            <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-md">
              <div className="w-6 h-6 border-2 border-lime-600 rounded"></div>
              <span className="font-bold text-black text-sm">I'M NOT A ROBOT</span>
              <img
                src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                alt="recaptcha"
                className="ml-auto w-10 h-10"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="bg-rose-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-rose-700 transition"
              >
                Submit
              </button>
              <button
                type="reset"
                className="border border-rose-600 text-rose-600 px-6 py-2 rounded-full font-semibold hover:bg-rose-50 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        {/* Right: Image */}
        <div className="p-8 hidden lg:block">
          <img
            src="/images/A1.png"
            alt="Food support visual"
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>
      </div>


 <ChatSection/>
    </div>
  );
}
