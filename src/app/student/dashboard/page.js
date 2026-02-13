"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function StudentDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/student/dashboard")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-[#070014] to-black text-white">

      {/* Glow Background */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-600/20 blur-[200px] rounded-full" />

      {/* HERO */}
      <section className="relative text-center pt-24 pb-14 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-fuchsia-400 to-purple-600 bg-clip-text text-transparent"
        >
          Student Academic Dashboard
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 max-w-2xl mx-auto"
        >
          Monitor attendance, academic performance, and subject progress
          through a unified intelligent student analytics platform.
        </motion.p>
      </section>

      {/* STATS */}
      <section className="px-10 pb-10">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {[
            { title: "Overall Attendance", value: `${data?.totalAttendance ?? "--"}%`, color: "text-green-400" },
            { title: "CGPA", value: data?.gpa ?? "--", color: "text-purple-400" },
            { title: "Total Subjects", value: data?.subjects?.length ?? "--", color: "text-pink-400" }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl"
            >
              <h2 className="text-gray-400">{card.title}</h2>
              <p className={`text-4xl font-bold mt-3 ${card.color}`}>
                {card.value}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* MAIN PANELS */}
      <section className="px-10 pb-24">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* Attendance */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="backdrop-blur-xl bg-white/5 border border-purple-500/20 rounded-3xl p-10"
          >
            <h2 className="text-2xl font-semibold mb-6 text-purple-300">
              Subject-wise Attendance
            </h2>

            <ul className="space-y-4 text-gray-300">
              {data?.subjects?.map(sub => (
                <li key={sub.id}>
                  {sub.name} — {sub.attendance}%
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Marks */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="backdrop-blur-xl bg-white/5 border border-lime-400/20 rounded-3xl p-10"
          >
            <h2 className="text-2xl font-semibold mb-6 text-lime-300">
              Marks Overview
            </h2>

            <ul className="space-y-4 text-gray-300">
              {data?.subjects?.map(sub => (
                <li key={sub.id}>
                  {sub.name} — {sub.marks}/100
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
