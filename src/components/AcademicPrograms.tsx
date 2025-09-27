"use client";

const programs = [
  {
    slug: "mba",
    name: "MBA (Master of Business Administration)",
    dept: "Management",
    level: "PG",
    duration: "2",
    eligibility: "Graduation in any stream",
    fees: "₹80,000 / year",
    color: "from-pink-600 via-red-500 to-yellow-500",
  },
  {
    slug: "mca",
    name: "MCA (Master of Computer Application)",
    dept: "Computer Science",
    level: "PG",
    duration: "2",
    eligibility: "BCA / B.Sc. IT / Graduation with Math",
    fees: "₹75,000 / year",
    color: "from-indigo-600 via-purple-600 to-pink-600",
  },
  {
    slug: "bba",
    name: "BBA (Bachelor of Business Administration)",
    dept: "Management",
    level: "UG",
    duration: "3",
    eligibility: "12th Pass",
    fees: "₹60,000 / year",
    color: "from-green-600 via-emerald-600 to-teal-600",
  },
  {
    slug: "bca",
    name: "BCA (Bachelor of Computer Application)",
    dept: "Computer Science",
    level: "UG",
    duration: "3",
    eligibility: "12th Pass with Math / CS",
    fees: "₹65,000 / year",
    color: "from-blue-600 via-cyan-500 to-sky-600",
  },
  {
    slug: "btech",
    name: "B.Tech (Bachelor of Technology)",
    dept: "Engineering",
    level: "UG",
    duration: "4",
    eligibility: "12th PCM",
    fees: "₹90,000 / year",
    color: "from-yellow-500 via-orange-600 to-red-600",
  },
];

export default function AcademicPrograms() {
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Academic Programs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((p) => (
          <div
            key={p.slug}
            className="relative block rounded-xl overflow-hidden shadow-lg group transform transition duration-500 hover:scale-[1.03]"
          >
            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${p.color} opacity-95 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700`}
            ></div>

            {/* Content */}
            <div className="relative p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-pink-500 transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {p.level} • Dept: {p.dept}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Duration: {p.duration} years
                </p>
                <p className="mt-3 text-sm text-gray-800 dark:text-gray-200 line-clamp-2">
                  {p.eligibility}
                </p>
              </div>
              {p.fees && (
                <p className="mt-4 text-sm font-medium text-gray-900 dark:text-white">
                  Fees:{" "}
                  <span className="text-green-600 dark:text-green-400">
                    {p.fees}
                  </span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
