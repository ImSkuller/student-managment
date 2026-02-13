"use client";

import { motion } from "framer-motion";

export default function StudentPage() {
  return (
    <main className="relative z-10 flex items-center justify-center min-h-screen px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 backdrop-blur-2xl border border-white/10
        rounded-3xl p-10 w-full max-w-2xl"
      >
        <h1 className="text-3xl font-bold mb-6">
          Student Attendance
        </h1>

        <p className="mb-6">
          What was the main topic discussed today?
        </p>

        <div className="grid gap-4">
          <button className="bg-white/10 p-4 rounded-xl">
            Optimization in ML
          </button>
          <button className="bg-white/10 p-4 rounded-xl">
            Data Structures
          </button>
          <button className="bg-white/10 p-4 rounded-xl">
            DBMS
          </button>
          <button className="bg-white/10 p-4 rounded-xl">
            OS Concepts
          </button>
        </div>

      </motion.div>
    </main>
  );
}
