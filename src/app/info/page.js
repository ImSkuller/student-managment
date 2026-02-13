"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen text-white overflow-hidden
    bg-gradient-to-br from-black via-purple-900 to-indigo-950">

      {/* SECTION 1 */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            The intelligent system for{" "}
            <span className="text-green-400">modern schools</span>
          </h1>

          <p className="text-gray-300 text-lg mb-8">
            Sentinals student management system which takes care of attendence, grades, gpa and marks.
          </p>
        </motion.div>

        {/* RIGHT MOCKUP */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="bg-white/10 backdrop-blur-2xl border border-white/20
            rounded-[40px] w-[320px] h-[585px] shadow-2xl flex items-center justify-center"
          >
            <div className="text-gray-300">
              {/* Dashboard Preview */}
              <Image
                src="/student_dashboard_v1.png"
                alt="dashboard preview"
                width={300}
                height={580}
                className="rounded-[30px] shadow-2xl border border-[#2A2A2A]"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>



      {/* SECTION 2 */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT MOCKUP */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="bg-white/10 backdrop-blur-2xl border border-white/20
            rounded-[40px] w-[320px] h-[490px] shadow-2xl flex items-center justify-center"
          >
            <div className="text-gray-300">
              {/* Analytics Preview */}
              <Image
                src="/analytics_v1.png"
                alt="dashboard preview"
                width={300}
                height={580}
                className="rounded-[30px] shadow-2xl border border-[#2A2A2A]"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Replace outdated systems with{" "}
            <span className="text-green-400">innovation.</span>
          </h2>

          <p className="text-gray-300 text-lg">
            Automate attendance tracking, performance analytics,
            and centralized academic data all from one platform.
          </p>
        </motion.div>

      </section>

    </main>
  );
}
