"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#070012] to-black text-white">

      {/* HERO SECTION */}
      <section className="relative text-center py-28 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-lime-400 bg-clip-text text-transparent"
        >
          Admin Control Center
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-300 max-w-2xl mx-auto"
        >
          Manage students, teachers, system data and platform operations
          from one powerful unified dashboard.
        </motion.p>
      </section>

      {/* ACTION CARDS */}
      <section className="px-10 pb-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* Register User */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="backdrop-blur-xl bg-white/5 border border-purple-500/30
            rounded-3xl p-10 shadow-2xl"
          >
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">
              Create New User
            </h2>

            <p className="text-gray-400 mb-6">
              Register new students, teachers or administrators instantly.
            </p>

            <button
              onClick={() => router.push("/admin/register")}
              className="bg-gradient-to-r from-purple-500 to-fuchsia-500
              px-8 py-3 rounded-xl font-semibold shadow-lg
              hover:shadow-purple-500/40 transition hover:cursor-pointer"
            >
              Create User
            </button>
          </motion.div>

          {/* Manage Users */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="backdrop-blur-xl bg-white/5 border border-lime-400/30
            rounded-3xl p-10 shadow-2xl"
          >
            <h2 className="text-2xl font-semibold mb-4 text-lime-300">
              Manage Users
            </h2>

            <p className="text-gray-400 mb-6">
              View, edit, assign roles and manage permissions for all users.
            </p>

            <button
              onClick={() => router.push("/admin/users")}
              className="bg-gradient-to-r from-lime-400 to-green-500
              text-black px-8 py-3 rounded-xl font-semibold shadow-lg
              hover:shadow-lime-400/40 transition hover:cursor-pointer"
            >
              View Users
            </button>
          </motion.div>

          {/* Manage Sections */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="backdrop-blur-xl bg-white/5 border border-purple-500/30
            rounded-3xl p-10 shadow-2xl"
          >
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">
              Manage Sections
            </h2>

            <p className="text-gray-400 mb-6">
              Add sections/ subjects.
            </p>

            <button
              onClick={() => router.push("/admin/sections")}
              className="bg-gradient-to-r from-purple-500 to-fuchsia-500
              px-8 py-3 rounded-xl font-semibold shadow-lg
              hover:shadow-purple-500/40 transition hover:cursor-pointer"
            >
              Add Subjects
            </button>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
