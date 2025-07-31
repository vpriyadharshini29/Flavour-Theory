import React from "react";
import { useNavigate } from "react-router-dom";

export default function EnrollmentForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission
    // You can add validation or API call here
    navigate("/success"); // navigate to success page
  };

  return (
    <div className="bg-amber-50 min-h-screen flex justify-center items-center p-4">
      <div className="bg-amber-100 rounded-3xl max-w-xl w-full p-6 shadow-sm">
        {/* Header */}
        <div className="bg-lime-400 rounded-full w-max px-6 py-2 mx-auto text-center font-bold text-lg mb-4">
          ENROLL
        </div>
        <h2 className="text-center font-bold uppercase mb-6">
          Bakery Business <span className="font-normal">Accelerator Program</span>
        </h2>

        <form className="space-y-4 text-sm text-black" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input className="w-full px-4 py-2 rounded-xl bg-white shadow-md focus:outline-none" />
          </div>

          {/* Email + Already Have Account */}
          <div>
            <label className="block font-semibold mb-1">E Mail</label>
            <div className="flex items-center gap-2">
              <input className="flex-1 px-4 py-2 rounded-xl bg-white shadow-md focus:outline-none" />
              <span className="text-xs font-bold">OR</span>
              <a href="#" className="text-xs font-bold underline whitespace-nowrap">
                ALREADY HAVE AN ACCOUNT
              </a>
            </div>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block font-semibold mb-1">Mobile Number</label>
            <input className="w-full px-4 py-2 rounded-xl bg-white shadow-md focus:outline-none" />
          </div>

          {/* GST Checkbox */}
          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4 border rounded" />
            <label className="text-sm font-semibold">
              USE GSTIN For Claiming Input Tax (India)
            </label>
          </div>

          {/* Subtotal */}
          <div className="flex justify-between items-center">
            <label className="font-semibold">SUB TOTAL:</label>
            <span className="px-4 py-2 bg-white rounded-xl shadow-md">INR 36000</span>
          </div>

          {/* Discount */}
          <div className="flex justify-between items-center">
            <label className="font-semibold">DISCOUNT:</label>
            <span className="px-4 py-2 bg-white rounded-xl shadow-md">INR 0.00</span>
          </div>

          {/* Total Payable */}
          <div className="flex justify-between items-center font-bold text-lg">
            <label className="font-semibold">
              TOTAL PAYABLE:
              <br />
              <span className="text-xs font-normal">(incl. 10% GST)</span>
            </label>
            <span className="px-4 py-2 bg-white rounded-xl shadow-md text-right">
              INR 36000.00
            </span>
          </div>

          {/* Coupon Code */}
          <div className="flex gap-2">
            <input
              placeholder="COUPON CODE"
              className="flex-1 px-4 py-2 rounded-xl bg-white shadow-md focus:outline-none"
            />
            <button
              type="button"
              className="bg-white border border-gray-600 px-4 py-2 rounded-xl text-sm font-semibold"
            >
              APPLY COUPON
            </button>
          </div>

          {/* Payment Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-xs mb-1">UPI USE PAYMENT</label>
              <input
                placeholder="+ UPI ID"
                className="w-full px-4 py-2 rounded-xl bg-white shadow-md focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold text-xs mb-1">
                CREDIT/DEBIT CARD USE PAY
              </label>
              <input
                placeholder="+ CARD NUMBER"
                className="w-full px-4 py-2 rounded-xl bg-white shadow-md focus:outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-rose-600 text-white py-3 rounded-full font-semibold hover:bg-rose-700 transition"
            >
              SUBMIT & PAY NOW
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
