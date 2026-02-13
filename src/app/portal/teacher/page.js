"use client";

import { motion } from "framer-motion";

export default function TeacherPage() {
  return (
    <main className="relative z-10 flex items-center justify-center min-h-screen px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 backdrop-blur-2xl border border-white/10
        rounded-3xl p-10 w-full max-w-3xl"
      >
        <h1 className="text-3xl font-bold mb-6">
          Teacher Attendance Control
        </h1>

        <input
          type="text"
          placeholder="Enter Quiz Question"
          className="w-full px-4 py-3 mb-4 rounded-xl bg-white/10"
        />

        <div className="grid gap-4 mb-6">
          <input type="text" placeholder="Option 1" className="bg-white/10 p-3 rounded-xl"/>
          <input type="text" placeholder="Option 2" className="bg-white/10 p-3 rounded-xl"/>
          <input type="text" placeholder="Option 3" className="bg-white/10 p-3 rounded-xl"/>
          <input type="text" placeholder="Option 4" className="bg-white/10 p-3 rounded-xl"/>
        </div>

        <button className="w-full py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 rounded-xl">
          Publish Quiz & Mark Attendance
        </button>

      </motion.div>
    </main>
  );
}
