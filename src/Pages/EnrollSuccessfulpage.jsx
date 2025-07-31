import React from "react";

export default function SuccessMessage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream text-center px-4">
      <div className="max-w-2xl bg-white rounded-2xl shadow-lg p-10">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Enrollment Successful!
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          You have successfully enrolled in our course.
        </p>
        <p className="text-base text-gray-600">
          The <span className="font-semibold">Flover Theory</span> team will send the course
          details to your email and WhatsApp.
        </p>
      </div>
    </div>
  );
}
