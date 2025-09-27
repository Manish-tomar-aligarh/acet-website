// src/app/about/page.tsx

export default function AboutPage() {
  const sections = [
    {
      title: "Our Vision & Mission",
      content:
        "Our vision is to provide quality education that nurtures innovation, creativity, and excellence. Our mission is to empower students with skills, knowledge, and values to excel in their careers and contribute to society.",
      gradient: "from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700",
    },
    {
      title: "Secretary Message",
      content:
        "Education is the foundation of progress. At our institution, we focus not only on academics but also on holistic development of every student. We believe in discipline, innovation, and social responsibility.",
      gradient: "from-pink-50 to-red-50 dark:from-gray-800 dark:to-gray-700",
    },
    {
      title: "Our Inspiration",
      content:
        "Inspired by great leaders and visionaries, our institution continues to motivate students to achieve their dreams with dedication and hard work.",
      gradient: "from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700",
    },
    {
      title: "Infrastructure",
      content:
        "The campus is equipped with modern infrastructure, well-furnished classrooms, advanced laboratories, a digital library, and a supportive environment that ensures the best learning experience for our students.",
      gradient: "from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        About Us
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className="group relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px] rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02]"
          >
            <div
              className={`relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl p-8 transition-all duration-500 group-hover:bg-gradient-to-r ${section.gradient}`}
            >
              <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-yellow-300">
                {section.title}
              </h2>
              <p className="text-lg leading-relaxed">{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
