"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function TeacherMarksPage() {

  const [subjects, setSubjects] = useState([]);

  const [form, setForm] = useState({
    subjectId: "",
    username: "",
    marks: "",
  });

  /* load subjects */
  useEffect(() => {
    fetch("/api/sections/get")
      .then(res => res.json())
      .then(data => setSubjects(data));
  }, []);

  async function submitMarks() {
    await fetch("/api/marks/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert("Marks updated");
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#070014] to-black text-white flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="backdrop-blur-2xl bg-white/5 border border-purple-400/20
        rounded-3xl p-10 w-full max-w-xl shadow-2xl"
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-300">
          Add Student Marks
        </h1>

        {/* SUBJECT DROPDOWN */}
        <select
          value={form.subjectId}
          onChange={(e)=>setForm({...form, subjectId:e.target.value})}
          className="w-full px-5 py-4 mb-5 rounded-xl bg-white/10 outline-none"
        >
          <option value="">Select Subject</option>

          {subjects.map(sub => (
            <option key={sub.id} value={sub.id}>
              {sub.name}
            </option>
          ))}
        </select>

        {/* STUDENT USERNAME */}
        <input
          placeholder="Student Username"
          className="w-full px-5 py-4 mb-5 rounded-xl bg-white/10"
          onChange={(e)=>setForm({...form, username:e.target.value})}
        />

        {/* MARKS */}
        <input
          placeholder="Marks"
          type="number"
          className="w-full px-5 py-4 mb-6 rounded-xl bg-white/10"
          onChange={(e)=>setForm({...form, marks:e.target.value})}
        />

        <button
          onClick={submitMarks}
          className="w-full py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-purple-700 rounded-xl font-semibold"
        >
          Submit Marks
        </button>

      </motion.div>

    </main>
  );
}
