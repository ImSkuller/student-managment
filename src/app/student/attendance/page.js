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
    const data = await res.json();

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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        sessionId: session.id,
        answer: selected,
      }),
    });

    router.push("/student/dashboard");
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#070014] to-black text-white">

      {/* HERO SECTION */}
      <section className="text-center pt-24 pb-12 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-fuchsia-400 to-purple-600 bg-clip-text text-transparent"
        >
          Smart Attendance System
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 max-w-2xl mx-auto"
        >
          Our intelligent attendance verification ensures secure classroom
          participation tracking by combining identity verification and
          real-time session validation improving accuracy, reducing proxy
          attendance, and enabling instant academic analytics.
        </motion.p>
      </section>

      {/* FORM CARD */}
      <section className="flex justify-center px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="backdrop-blur-2xl bg-white/5 border border-purple-400/20
          rounded-3xl p-10 w-full max-w-2xl shadow-2xl"
        >
          <h2 className="text-3xl font-semibold mb-6 text-center text-purple-300">
            Attendance Verification
          </h2>

          <div className="space-y-6 mb-10">
            <input
              placeholder="Student Username"
              className="w-full px-5 py-4 rounded-xl bg-white/10 focus:ring-2 focus:ring-purple-500 outline-none"
              onChange={(e)=>setUsername(e.target.value)}
            />

            <input
              placeholder="Section"
              className="w-full px-5 py-4 rounded-xl bg-white/10 focus:ring-2 focus:ring-purple-500 outline-none"
              onChange={(e)=>setSection(e.target.value)}
            />

            <button
              onClick={loadSession}
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-xl font-semibold hover:scale-105 transition"
            >
              Load Attendance Question
            </button>
          </div>

          {session && (
            <>
              <h3 className="text-xl font-semibold mb-6 text-purple-200">
                {session.question}
              </h3>

              <div className="grid gap-4">
                {session?.options?.map((option, i) => (
                  <motion.button
                    key={`${option}-${i}`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelected(option)}
                    className={`px-6 py-4 rounded-xl text-left transition ${
                      selected === option
                        ? "bg-purple-600"
                        : "bg-white/10 hover:bg-white/20"
                    }`}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>

              <motion.button
                onClick={submitAttendance}
                whileHover={{ scale: 1.05 }}
                className="w-full mt-10 py-4 bg-gradient-to-r
                from-pink-500 via-purple-500 to-purple-700
                font-semibold rounded-xl shadow-lg"
              >
                Mark Attendance
              </motion.button>
            </>
          )}
        </motion.div>
      </section>

    </main>
  );
}
