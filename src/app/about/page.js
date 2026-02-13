"use client";

import { motion } from "framer-motion";

const creators = [
  {
    name: "Hrishikesh",
    role: "Full-Stack",
    github: "https://github.com/imskuller ",
  },
  {
    name: "Harshit",
    role: "Frontend",
    github: "https://github.com/Harsh700-code",
  },
  {
    name: "Joel",
    role: "Documentation",
    github: "https://github.com/joo0eel"
  },
  {
    name: "Adhidev",
    role: "Helper",
    github: "https://github.com/Adhidevayes"
  }
];

export default function InfoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#0a0015] to-[#050008] text-white">

      {/* HERO */}
      <section className="text-center pt-28 pb-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent"
        >
          About Sentinals
        </motion.h1>

        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
          Sentinals is a modern intelligent student management platform designed
          to simplify academic workflows, automate attendance tracking,
          provide real-time analytics, and centralize institutional operations
          into one powerful digital ecosystem.
        </p>
      </section>

      {/* PROJECT DESCRIPTION */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="backdrop-blur-2xl bg-white/5 border border-purple-400/20 rounded-3xl p-10 shadow-2xl"
        >
          <h2 className="text-3xl font-semibold mb-6 text-purple-300">
            What This Platform Does
          </h2>

          <ul className="space-y-4 text-gray-300">
            <li>• Puzzle based attendance system so no one can use cheats to bypass it</li>
            <li>• Role-based dashboards for students, teachers and admins</li>
            <li>• Real-time academic performance analytics</li>
            <li>• Automated attendance percentage calculation</li>
            <li>• Secure authentication and role access control</li>
            <li>• Modern glassmorphic interactive UI experience</li>
          </ul>
        </motion.div>
      </section>

      {/* TEAM */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          Development Team
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {creators.map((person, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10
              rounded-3xl p-10 shadow-2xl text-center"
            >
              <h3 className="text-2xl font-semibold mb-2 text-purple-300">
                {person.name}
              </h3>

              <p className="text-gray-400 mb-6">{person.role}</p>

              <a
                href={person.github}
                target="_blank"
                className="inline-block px-6 py-3 rounded-xl
                bg-gradient-to-r from-purple-500 to-fuchsia-500
                font-semibold shadow-lg hover:scale-105 transition"
              >
                View GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
