// "use client";

// import { motion } from "framer-motion";

// export default function TeacherPage() {
//   return (
//     <main className="relative z-10 flex items-center justify-center min-h-screen px-6">

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="bg-white/5 backdrop-blur-2xl border border-white/10
//         rounded-3xl p-10 w-full max-w-3xl"
//       >
//         <h1 className="text-3xl font-bold mb-6">
//           Teacher Attendance Control
//         </h1>

//         <input
//           type="text"
//           placeholder="Enter Quiz Question"
//           className="w-full px-4 py-3 mb-4 rounded-xl bg-white/10"
//         />

//         <div className="grid gap-4 mb-6">
//           <input type="text" placeholder="Option 1" className="bg-white/10 p-3 rounded-xl"/>
//           <input type="text" placeholder="Option 2" className="bg-white/10 p-3 rounded-xl"/>
//           <input type="text" placeholder="Option 3" className="bg-white/10 p-3 rounded-xl"/>
//           <input type="text" placeholder="Option 4" className="bg-white/10 p-3 rounded-xl"/>
//         </div>

//         <button className="w-full py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 rounded-xl">
//           Publish Quiz & Mark Attendance
//         </button>

//       </motion.div>
//     </main>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function TeacherPage() {
  const [section, setSection] = useState("");

  return (
    <main className="relative min-h-screen px-6 flex items-center justify-center 
    bg-gradient-to-br from-black via-[#0a0015] to-[#050008] text-white overflow-hidden">

      {/* Multi-color Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[160px] top-[-200px] left-[-200px]" />
        <div className="absolute w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[160px] bottom-[-200px] right-[-200px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-black/50 backdrop-blur-2xl border border-white/10
        rounded-3xl p-10 w-full max-w-3xl shadow-2xl"
      >
        <h1 className="text-3xl font-bold mb-8">
          Teacher Attendance Control
        </h1>

        {/* Section Selection */}
        <div className="mb-6">
          <label className="block mb-3 text-gray-400">
            Select Student Section
          </label>

          <select
            value={section}
            onChange={(e) => setSection(e.target.value)}
            className="w-full px-5 py-4 rounded-xl 
            bg-black/60 border border-white/10 
            focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Choose Section</option>
            <option value="CSE-A">CSE - A</option>
            <option value="CSE-B">CSE - B</option>
            <option value="AI-ML">AI & ML</option>
            <option value="MCA">MCA</option>
          </select>
        </div>

        {/* Quiz Question */}
        <input
          placeholder="Token (ex: A112)"
          className="w-full px-4 py-3 mb-4 rounded-xl bg-white/10"
          onChange={(e)=>setForm({...form, section:e.target.value})}
        />

        <input
          placeholder="Enter Quiz Question"
          className="w-full px-5 py-4 mb-6 rounded-xl 
          bg-black/60 border border-white/10 
          focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Options */}
        <div className="grid gap-4 mb-8">
          <input
            type="text"
            placeholder="Option 1"
            className="bg-black/60 border border-white/10 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="Option 2"
            className="bg-black/60 border border-white/10 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="Option 3"
            className="bg-black/60 border border-white/10 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="Option 4"
            className="bg-black/60 border border-white/10 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Submit */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-4 bg-gradient-to-r 
          from-pink-500 via-purple-500 to-red-500 
          rounded-xl font-semibold shadow-lg"
        >
          Publish Quiz & Mark Attendance
        </motion.button>

        {sessionId && (
          <button
            onClick={endAttendance}
            className="w-full mt-4 py-3 bg-red-600 rounded-xl"
          >
            End Attendance
          </button>
        )}
      </motion.div>
    </main>
  );
}


