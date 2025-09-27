"use client";
import { useState } from "react";

export default function ContactSection() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="container mx-auto my-10 text-center">
      {/* Contact Button */}
      <button
        onClick={() => setShowContact((prev) => !prev)}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md shadow-md transition active:scale-95"
      >
        {showContact ? "Hide Contact Info" : "Contact Us"}
      </button>

      {/* Contact Info (show when button clicked) */}
      {showContact && (
        <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-md text-left max-w-xl mx-auto">
          <h2 className="text-xl font-bold mb-3 text-gray-800">
            ALIGARH COLLEGE OF ENGINEERING AND TECHNOLOGY
          </h2>
          <p className="text-gray-700">
            📍 3 KM FROM SASNI GATE, MATHURA ROAD, ALIGARH
          </p>
          <p className="text-gray-700 mt-2">
            📧 <a href="mailto:mail@acetup.org" className="text-blue-600 hover:underline">mail@acetup.org</a>
          </p>
          <p className="text-gray-700 mt-2">
            📱 Mobile No.: +91 9568200010, 62, 63, 64, 65, 71, 77
          </p>
        </div>
      )}
    </div>
  );
}
