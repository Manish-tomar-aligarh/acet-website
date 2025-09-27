import { notFound } from "next/navigation";
import Link from "next/link";
import { connectToDatabase } from "@/lib/mongoose";
import Program, { ProgramType } from "@/models/Program";

export default async function ProgramDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  await connectToDatabase();

  const program = (await Program.findById(id).lean()) as ProgramType | null;
  if (!program) return notFound();

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Back Button */}
      <Link
        href="/programs"
        className="inline-block mb-6 text-blue-600 hover:underline"
      >
        ← Back to Programs
      </Link>

      {/* Modern Card */}
      <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-[2px] rounded-2xl shadow-xl">
        <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl p-8">
          <h1
            className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6 
            bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500"
          >
            {program.name}
          </h1>

          <div className="grid md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-200">
            <div className="p-4 rounded-xl bg-gradient-to-r from-blue-300 to-purple-300 dark:from-gray-800 dark:to-gray-700 shadow-md">
              <p className="font-semibold">Level:</p>
              <p>{program.level}</p>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-pink-300 to-red-300 dark:from-gray-800 dark:to-gray-700 shadow-md">
              <p className="font-semibold">Department:</p>
              <p>{program.dept}</p>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-green-300 to-emerald-300 dark:from-gray-800 dark:to-gray-700 shadow-md">
              <p className="font-semibold">Duration:</p>
              <p>{program.duration} years</p>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-300 to-blue-300 dark:from-gray-800 dark:to-gray-700 shadow-md">
              <p className="font-semibold">Eligibility:</p>
              <p>{program.eligibility}</p>
            </div>

            {program.fees && (
              <div className="p-4 rounded-xl bg-gradient-to-r from-yellow-300 to-orange-300 dark:from-gray-800 dark:to-gray-700 shadow-md md:col-span-2">
                <p className="font-semibold">Fees:</p>
                <p className="text-green-600 font-bold">₹{program.fees}</p>
              </div>
            )}
          </div>

          <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            Created on: {new Date(program.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
