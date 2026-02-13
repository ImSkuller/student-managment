"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function TeacherDashboard() {
  const router = useRouter();

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-[#070014] to-black text-white">

      {/* Background Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-600/20 blur-[200px] rounded-full" />

      {/* HERO */}
      <section className="relative text-center pt-24 pb-14 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-fuchsia-400 to-purple-600 bg-clip-text text-transparent"
        >
          Teacher Control Panel
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 max-w-2xl mx-auto"
        >
          Manage classroom attendance, track academic performance, and
          streamline academic workflows through intelligent teaching tools.
        </motion.p>
      </section>

      {/* ACTION CARDS */}
      <section className="px-10 pb-24">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* Attendance */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="backdrop-blur-xl bg-white/5 border border-purple-500/30 rounded-3xl p-10 shadow-2xl"
          >
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">
              Mark Attendance
            </h2>

            <p className="text-gray-400 mb-6">
              Launch attendance verification sessions for your assigned
              subjects and classroom sections.
            </p>

            <button
              onClick={() => router.push("/teacher/attendance")}
              className="bg-gradient-to-r from-purple-500 to-fuchsia-500
              px-8 py-3 rounded-xl font-semibold shadow-lg
              hover:shadow-purple-500/40 transition hover:cursor-pointer"
            >
              Open Attendance Panel
            </button>
          </motion.div>

          {/* Marks */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="backdrop-blur-xl bg-white/5 border border-lime-400/30 rounded-3xl p-10 shadow-2xl"
          >
            <h2 className="text-2xl font-semibold mb-4 text-lime-300">
              Add Marks
            </h2>

            <p className="text-gray-400 mb-6">
              Record internal, external, and assignment scores for
              performance analytics and grading.
            </p>

            <button
              onClick={() => router.push("/teacher/marks")}
              className="bg-gradient-to-r from-lime-400 to-green-500
              text-black px-8 py-3 rounded-xl font-semibold shadow-lg
              hover:shadow-lime-400/40 transition hover:cursor-pointer"
            >
              Enter Marks
            </button>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
