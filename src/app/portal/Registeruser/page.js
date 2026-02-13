// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function AdminPage() {
//   const [role, setRole] = useState("student");

//   return (
//     <main className="relative z-10 flex items-center justify-center min-h-screen px-6">

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="bg-black/40 backdrop-blur-2xl 
//         border border-white/10 rounded-3xl 
//         p-10 w-full max-w-3xl shadow-2xl"
//       >
//         <h1 className="text-3xl font-bold mb-8 text-center">
//           Admin - Register New User
//         </h1>

//         <div className="space-y-6">

//           <input
//             type="text"
//             placeholder="Full Name"
//             className="w-full px-5 py-4 rounded-xl 
//             bg-black/50 border border-white/10 
//             focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />

//           <input
//             type="text"
//             placeholder="Username"
//             className="w-full px-5 py-4 rounded-xl 
//             bg-black/50 border border-white/10 
//             focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full px-5 py-4 rounded-xl 
//             bg-black/50 border border-white/10 
//             focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />

//           {/* Role Selection */}
//           <div>
//             <label className="block mb-3 text-gray-400">
//               Select Role
//             </label>

//             <div className="flex gap-4">
//               {["student", "teacher", "admin"].map((r) => (
//                 <button
//                   key={r}
//                   onClick={() => setRole(r)}
//                   className={`flex-1 py-3 rounded-xl transition ${
//                     role === r
//                       ? "bg-gradient-to-r from-pink-500 via-purple-500 to-red-500"
//                       : "bg-black/50 border border-white/10"
//                   }`}
//                 >
//                   {r.charAt(0).toUpperCase() + r.slice(1)}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="w-full py-4 mt-6 
//             bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 
//             rounded-xl font-semibold shadow-lg"
//           >
//             Register User
//           </motion.button>

//         </div>
//       </motion.div>

//     </main>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function AdminPage() {
  const [role, setRole] = useState("student");

  return (
    <main className="relative z-10 flex items-center justify-center min-h-screen px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-black/40 backdrop-blur-2xl 
        border border-white/10 rounded-3xl 
        p-10 w-full max-w-3xl shadow-2xl"
      >
        <h1 className="text-3xl font-bold mb-8 text-center">
          Admin - Register New User
        </h1>

        <div className="space-y-6">

          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-5 py-4 rounded-xl 
            bg-black/50 border border-white/10 
            focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Email (NEW FIELD) */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-5 py-4 rounded-xl 
            bg-black/50 border border-white/10 
            focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            className="w-full px-5 py-4 rounded-xl 
            bg-black/50 border border-white/10 
            focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-5 py-4 rounded-xl 
            bg-black/50 border border-white/10 
            focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Role Selection */}
          <div>
            <label className="block mb-3 text-gray-400">
              Select Role
            </label>

            <div className="flex gap-4">
              {["student", "teacher", "admin"].map((r) => (
                <button
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 mt-6 
            bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 
            rounded-xl font-semibold shadow-lg"
          >
            Register User
          </motion.button>

        </div>
      </motion.div>

    </main>
  );
}
