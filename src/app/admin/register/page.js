"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [role, setRole] = useState("student");
  const [form, setForm] = useState({});

  function generateUserId() {
    return "USR-" + Math.floor(100000 + Math.random() * 900000);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      ...form,
      role,
      userid: generateUserId(),
    };

    await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    router.push("/login");
  }

  return (
    <main className="relative z-10 flex items-center justify-center min-h-screen px-6">

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 w-full max-w-3xl shadow-2xl"
      >
        <h1 className="text-3xl font-bold mb-8 text-center">
          Admin - Register New User
        </h1>

        <div className="space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-5 py-4 rounded-xl bg-black/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={e => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-5 py-4 rounded-xl bg-black/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={e => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="text"
            placeholder="Username"
            className="w-full px-5 py-4 rounded-xl bg-black/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={e => setForm({ ...form, username: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-5 py-4 rounded-xl bg-black/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={e => setForm({ ...form, password: e.target.value })}
          />

          {/* Role Selection */}
          <div>
            <label className="block mb-3 text-gray-400">
              Select Role
            </label>

            <div className="flex gap-4">
              {["student", "teacher", "admin"].map((r) => (
                <button
                  type="button"
                  key={r}
                  onClick={() => setRole(r)}
                  className={`flex-1 py-3 rounded-xl transition ${
                    role === r
                      ? "bg-gradient-to-r from-pink-500 via-purple-500 to-red-500"
                      : "bg-black/50 border border-white/10"
                  }`}
                >
                  {r.charAt(0).toUpperCase() + r.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 mt-6 bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 rounded-xl font-semibold shadow-lg"
          >
            Register User
          </motion.button>

        </div>
      </motion.form>

    </main>
  );
}
