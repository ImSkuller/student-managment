"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function TeacherPage() {
  const [form, setForm] = useState({
    section: "",
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correct: "",
  });

  async function publishQuiz() {
    await fetch("/api/attendance/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert("Attendance session published");
  }

  return (
    <main className="relative z-10 flex items-center justify-center min-h-screen px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 w-full max-w-3xl"
      >
        <h1 className="text-3xl font-bold mb-6">
          Teacher Attendance Control
        </h1>

        {/* Section */}
        <input
          type="text"
          placeholder="Token (ex: A112)"
          className="w-full px-4 py-3 mb-4 rounded-xl bg-white/10"
          onChange={(e)=>setForm({...form, section:e.target.value})}
        />

        {/* Question */}
        <input
          type="text"
          placeholder="Enter Quiz Question"
          className="w-full px-4 py-3 mb-4 rounded-xl bg-white/10"
          onChange={(e)=>setForm({...form, question:e.target.value})}
        />

        <div className="grid gap-4 mb-6">
          <input
            type="text"
            placeholder="Option 1"
            className="bg-white/10 p-3 rounded-xl"
            onChange={(e)=>setForm({...form, option1:e.target.value})}
          />
          <input
            type="text"
            placeholder="Option 2"
            className="bg-white/10 p-3 rounded-xl"
            onChange={(e)=>setForm({...form, option2:e.target.value})}
          />
          <input
            type="text"
            placeholder="Option 3"
            className="bg-white/10 p-3 rounded-xl"
            onChange={(e)=>setForm({...form, option3:e.target.value})}
          />
          <input
            type="text"
            placeholder="Option 4"
            className="bg-white/10 p-3 rounded-xl"
            onChange={(e)=>setForm({...form, option4:e.target.value})}
          />
        </div>

        {/* Correct Answer */}
        <input
          type="text"
          placeholder="Correct Option (ex: option1)"
          className="w-full px-4 py-3 mb-6 rounded-xl bg-white/10"
          onChange={(e)=>setForm({...form, correct:e.target.value})}
        />

        <button
          onClick={publishQuiz}
          className="w-full py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 rounded-xl"
        >
          Publish Quiz & Mark Attendance
        </button>
      </motion.div>
    </main>
  );
}
