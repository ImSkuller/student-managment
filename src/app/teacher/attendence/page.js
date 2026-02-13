"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function TeacherPage() {

  const [sessionId, setSessionId] = useState(null);
  const router = useRouter();

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
    const res = await fetch("/api/attendance/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      alert("Server error");
      return;
    }

    const data = await res.json();
    setSessionId(data.id);
    alert("Attendance session published");
  }

  async function endAttendance() {
    if (!sessionId) return;

    await fetch("/api/attendance/end", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sessionId }),
    });

    alert("Attendance closed");
    router.push("/teacher/dashboard");
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

        <input
          placeholder="Token (ex: A112)"
          className="w-full px-4 py-3 mb-4 rounded-xl bg-white/10"
          onChange={(e)=>setForm({...form, section:e.target.value})}
        />

        <input
          placeholder="Enter Quiz Question"
          className="w-full px-4 py-3 mb-4 rounded-xl bg-white/10"
          onChange={(e)=>setForm({...form, question:e.target.value})}
        />

        <div className="grid gap-4 mb-6">
          {["option1","option2","option3","option4"].map(opt => (
            <input
              key={opt}
              placeholder={opt}
              className="bg-white/10 p-3 rounded-xl"
              onChange={(e)=>setForm({...form, [opt]:e.target.value})}
            />
          ))}
        </div>

        <input
          placeholder="Correct Option"
          className="w-full px-4 py-3 mb-6 rounded-xl bg-white/10"
          onChange={(e)=>setForm({...form, correct:e.target.value})}
        />

        <button
          onClick={publishQuiz}
          className="w-full py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 rounded-xl"
        >
          Publish Quiz & Mark Attendance
        </button>

        {sessionId && (
          <button
            onClick={endAttendance}
            className="w-full mt-4 py-3 bg-red-600 rounded-xl"
          >
            End Attendance
          </button>
        )}
      </motion.div>
    </main>
  );
}
