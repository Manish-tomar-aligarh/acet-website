"use client";

const notices = [
  {
    title: "Holiday Notice",
    text: "College will remain closed on 10th Feb 2025 on account of UP Assembly Election."
  },
  {
    title: "Deepawali Holidays",
    text: "College will remain closed from 3rd Nov to 6th Nov 2025 for Deepawali, Goverdhan Pooja and Bhaiya Dooj."
  },
  {
    title: "Commencement of Classes",
    text: "New session classes for B.Pharma and D.Pharma will commence from 7th Oct 2025."
  }
];

const colors = [
  "from-pink-600 via-red-500 to-yellow-500",
  "from-indigo-600 via-purple-600 to-pink-600",
  "from-green-600 via-emerald-600 to-teal-600"
];

export default function Notices() {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Notices
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {notices.map((n, idx) => (
          <div
            key={idx}
            className="relative block rounded-xl overflow-hidden shadow-lg group transform transition duration-500 hover:scale-[1.03]"
          >
            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${colors[idx % colors.length]} opacity-95 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700`}
            ></div>

            {/* Content */}
            <div className="relative p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-pink-500 transition-colors">
                  {n.title}
                </h3>
                <p className="mt-2 text-sm text-gray-800 dark:text-gray-200">
                  {n.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
