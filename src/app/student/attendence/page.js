// "use client";

// import { motion } from "framer-motion";

// export default function AttendancePage() {
//   return (
//     <main className="relative z-10 flex items-center justify-center min-h-screen px-6">

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="bg-white/5 backdrop-blur-2xl border border-white/10
//         rounded-3xl p-10 w-full max-w-xl shadow-2xl"
//       >
//         {/* Heading */}
//         <h1 className="text-4xl font-bold mb-4 text-center">
//           Attendance Registration
//         </h1>

//         <p className="text-gray-400 text-center mb-8">
//           Register your attendance securely
//         </p>

//         {/* Form */}
//         <form className="space-y-6">

//           <input
//             type="text"
//             placeholder="Student ID"
//             className="w-full px-5 py-4 rounded-xl bg-white/10 
//             border border-white/10 focus:outline-none focus:ring-2
//             focus:ring-emerald-400 transition"
//           />

//           <input
//             type="text"
//             placeholder="Full Name"
//             className="w-full px-5 py-4 rounded-xl bg-white/10 
//             border border-white/10 focus:outline-none focus:ring-2
//             focus:ring-emerald-400 transition"
//           />

//           <select
//             className="w-full px-5 py-4 rounded-xl bg-white/10 
//             border border-white/10 focus:outline-none focus:ring-2
//             focus:ring-emerald-400 transition"
//           >
//             <option>Select Class</option>
//             <option>BTech CSE</option>
//             <option>BTech AI/ML</option>
//             <option>MCA</option>
//           </select>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="w-full py-4 bg-emerald-400 text-black 
//             font-semibold rounded-xl shadow-lg"
//           >
//             Mark Attendance
//           </motion.button>

//         </form>
//       </motion.div>

//     </main>
//   );
// }



"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function AttendancePage() {
  const [selected, setSelected] = useState(null);

  return (
    <main className="relative z-10 flex items-center justify-center min-h-screen px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/5 backdrop-blur-2xl border border-white/10
        rounded-3xl p-10 w-full max-w-2xl shadow-2xl"
      >
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4 text-center">
          Smart Attendance Registration
        </h1>

        <p className="text-gray-400 text-center mb-10">
          Verify your presence and answer the quick check question.
        </p>

        {/* Basic Details */}
        <div className="space-y-6 mb-10">

          <input
            type="text"
            placeholder="Student ID"
            className="w-full px-5 py-4 rounded-xl bg-white/10 
            border border-white/10 focus:outline-none focus:ring-2
            focus:ring-purple-500 transition"
          />

          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-5 py-4 rounded-xl bg-white/10 
            border border-white/10 focus:outline-none focus:ring-2
            focus:ring-purple-500 transition"
          />

        </div>

        {/* Quiz Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Quick Question:
          </h2>

          <p className="text-gray-300 mb-6">
            What was the main topic discussed in today's lecture?
          </p>

          <div className="grid gap-4">
            {[
              "Optimization in Machine Learning",
              "Database Normalization",
              "Computer Networks",
              "Cyber Security Basics",
            ].map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelected(index)}
                className={`px-6 py-4 rounded-xl text-left transition 
                ${
                  selected === index
                    ? "bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 text-white"
                    : "bg-white/10 border border-white/10 hover:bg-white/20"
                }`}
              >
                {option}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full mt-10 py-4 bg-gradient-to-r 
          from-pink-500 via-purple-500 to-red-500
          font-semibold rounded-xl shadow-lg"
        >
          Mark Attendance
        </motion.button>

      </motion.div>

    </main>
  );
}
