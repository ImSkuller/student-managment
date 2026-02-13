"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AttendancePage() {
  const [username, setUsername] = useState("");
  const [section, setSection] = useState("");
  const [session, setSession] = useState(null);
  const [selected, setSelected] = useState("");

  const router = useRouter();


  async function loadSession() {
    const res = await fetch(`/api/attendance/current?section=${section}`);

    const text = await res.text();
    console.log(text);   // check what API actually returns

    const data = JSON.parse(text);

    if (!data) {
      alert("No active attendance session");
      return;
    }

    setSession(data);
  }


  async function submitAttendance() {
    if (!session) return alert("No active session");
    if (!selected) return alert("Select an answer");

    await fetch("/api/attendance/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        sessionId: session.id,
        answer: selected,
      }),
    });

    alert("Attendance submitted");
    router.push("/student/dashboard")
  }

  return (
    <main className="relative z-10 flex items-center justify-center min-h-screen px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 w-full max-w-2xl shadow-2xl"
      >
        <h1 className="text-4xl font-bold mb-4 text-center">
          Attendance Registration
        </h1>

        <p className="text-gray-400 text-center mb-10">
          Verify your presence and answer the quick check question.
        </p>

        {/* Student info */}
        <div className="space-y-6 mb-10">
          <input
            placeholder="Student Username"
            className="w-full px-5 py-4 rounded-xl bg-white/10"
            onChange={(e)=>setUsername(e.target.value)}
          />

          <input
            placeholder="Section"
            className="w-full px-5 py-4 rounded-xl bg-white/10"
            onChange={(e)=>setSection(e.target.value)}
          />

          <button
            onClick={loadSession}
            className="w-full py-3 bg-purple-600 rounded-xl"
          >
            Load Attendance Question
          </button>
        </div>

        {session && (
          <>
            <h2 className="text-xl font-semibold mb-4">
              {session.question}
            </h2>

            <div className="grid gap-4">
              {session?.options?.map((option, i) => (
                <motion.button
                  key={`${option}-${i}`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelected(option)}
                  className={`px-6 py-4 rounded-xl text-left ${
                    selected === option
                      ? "bg-purple-600"
                      : "bg-white/10"
                  }`}
                >
                  {option}
                </motion.button>
              ))}
            </div>

            <motion.button
              onClick={submitAttendance}
              whileHover={{ scale: 1.05 }}
              className="w-full mt-10 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 font-semibold rounded-xl"
            >
              Mark Attendance
            </motion.button>
          </>
        )}
      </motion.div>
    </main>
  );
}
