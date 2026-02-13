"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function TeacherPage() {

  const [section, setSection] = useState("");
  const [sessionId, setSessionId] = useState(null);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch("/api/sections/get")
      .then(res => res.json())
      .then(setSections);
  }, []);

  const [form, setForm] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correct: ""
  });

  async function publishQuiz() {
    const res = await fetch("/api/attendance/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        section,
        question: form.question,
        options: [form.option1, form.option2, form.option3, form.option4],
        correct: form.correct
      })
    });

    const data = await res.json();
    setSessionId(data.id);
  }

  async function endAttendance() {
    await fetch("/api/attendance/end", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId })
    });

    setSessionId(null);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#070014] to-black text-white">

      {/* HERO */}
      <section className="text-center pt-24 pb-12 px-6">
        <motion.h1
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-fuchsia-400 to-purple-600 bg-clip-text text-transparent"
        >
          Teacher Attendance Control
        </motion.h1>

        <motion.p
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-300 max-w-2xl mx-auto"
        >
          Create secure attendance sessions, verify classroom participation
          in real time, and maintain accurate academic attendance records
          through automated validation workflows.
        </motion.p>
      </section>

      {/* FORM CARD */}
      <section className="flex justify-center px-6 pb-20">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-2xl bg-white/5 border border-purple-400/20 rounded-3xl p-10 w-full max-w-3xl shadow-2xl"
        >
          <h2 className="text-3xl font-semibold mb-6 text-center text-purple-300">
            Start Attendance Session
          </h2>

          <select
            value={section}
            onChange={(e) => setSection(e.target.value)}
            className="w-full px-5 py-4 mb-6 rounded-xl bg-white/10 focus:ring-2 focus:ring-purple-500 outline-none"
          >
            <option value="">Choose Section</option>

            {sections.map((sec) => (
              <option key={sec.id} value={sec.name}>
                {sec.name}
              </option>
            ))}
          </select>

          <input
            placeholder="Enter Quiz Question"
            className="w-full px-5 py-4 mb-6 rounded-xl bg-white/10 focus:ring-2 focus:ring-purple-500 outline-none"
            onChange={(e)=>setForm({...form, question:e.target.value})}
          />

          <div className="grid gap-4 mb-6">
            {["option1","option2","option3","option4"].map((opt,i)=>(
              <input
                key={opt}
                placeholder={`Option ${i+1}`}
                className="bg-white/10 p-4 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
                onChange={(e)=>setForm({...form,[opt]:e.target.value})}
              />
            ))}
          </div>

          <input
            placeholder="Correct Answer"
            className="w-full px-5 py-4 mb-6 rounded-xl bg-white/10 focus:ring-2 focus:ring-purple-500 outline-none"
            onChange={(e)=>setForm({...form, correct:e.target.value})}
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={publishQuiz}
            className="w-full py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-purple-700 rounded-xl font-semibold"
          >
            Publish Attendance Session
          </motion.button>

          {sessionId && (
            <button
              onClick={endAttendance}
              className="w-full mt-4 py-3 bg-red-600 rounded-xl"
            >
              End Attendance
            </button>
          )}
        </motion.div>
      </section>

    </main>
  );
}
