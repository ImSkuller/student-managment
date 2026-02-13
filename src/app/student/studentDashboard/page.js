"use client";

import { motion } from "framer-motion";

export default function StudentDashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#0a0015] to-[#050008] text-white p-10">

      <h1 className="text-4xl font-bold mb-10">
        Student Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">

        <div className="bg-black/50 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
          <h2 className="text-gray-400">Overall Attendance</h2>
          <p className="text-3xl font-bold text-green-400">88%</p>
        </div>

        <div className="bg-black/50 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
          <h2 className="text-gray-400">CGPA</h2>
          <p className="text-3xl font-bold text-purple-400">8.4</p>
        </div>

        <div className="bg-black/50 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
          <h2 className="text-gray-400">Total Subjects</h2>
          <p className="text-3xl font-bold text-pink-400">6</p>
        </div>

      </div>

      {/* Subject Attendance */}
      <div className="bg-black/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10 mb-10">
        <h2 className="text-2xl font-semibold mb-6">
          Subject-wise Attendance
        </h2>

        <ul className="space-y-4">
          <li>Machine Learning - 92%</li>
          <li>DBMS - 85%</li>
          <li>Operating Systems - 80%</li>
          <li>Computer Networks - 88%</li>
        </ul>
      </div>

      {/* Marks */}
      <div className="bg-black/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
        <h2 className="text-2xl font-semibold mb-6">
          Marks
        </h2>

        <ul className="space-y-4">
          <li>Machine Learning - 78/100</li>
          <li>DBMS - 84/100</li>
          <li>OS - 69/100</li>
          <li>CN - 90/100</li>
        </ul>
      </div>

    </main>
  );
}
