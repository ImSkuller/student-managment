"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AuthPage() {
  const [role, setRole] = useState("student");
  const router = useRouter();

  const handleLogin = () => {
    if (role === "student") {
      router.push("/portal/student");
    } else {
      router.push("/portal/teacher");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 backdrop-blur-2xl border border-white/10
        rounded-3xl p-10 w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Login Portal
        </h1>

        {/* Role Selection */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setRole("student")}
            className={`flex-1 py-3 rounded-xl ${
              role === "student"
                ? "bg-purple-500"
                : "bg-white/10"
            }`}
          >
            Student
          </button>

          <button
            onClick={() => setRole("teacher")}
            className={`flex-1 py-3 rounded-xl ${
              role === "teacher"
                ? "bg-pink-500"
                : "bg-white/10"
            }`}
          >
            Teacher
          </button>
        </div>

        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-3 mb-4 rounded-xl bg-white/10"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 mb-6 rounded-xl bg-white/10"
        />

        <button
          onClick={handleLogin}
          className="w-full py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 rounded-xl"
        >
          Login
        </button>

      </motion.div>
    </main>
  );
}
