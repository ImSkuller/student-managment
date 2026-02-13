// export default function AboutPage() {
//   return (
//     <main className="min-h-screen text-white bg-gradient-to-br from-black via-purple-900 to-indigo-950">

//       {/* SECTION 1 */}
//       <section className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20 items-center">

//         {/* LEFT TEXT */}
//         <div>
//           <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
//             The intelligent system for{" "}
//             <span className="text-green-400">modern schools</span>
//           </h1>

//           <p className="text-gray-300 text-lg mb-8">
//             Sentinals helps institutions manage students, attendance,
//             and academic operations efficiently with powerful automation.
//           </p>

//           <button className="bg-green-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
//             Explore Platform
//           </button>
//         </div>

//         {/* RIGHT MOCKUP */}
//         <div className="relative flex justify-center">

//           <div className="bg-white/10 backdrop-blur-2xl border border-white/20 
//             rounded-[40px] w-[320px] h-[600px] shadow-2xl flex items-center justify-center">

//             <div className="text-gray-300">
//               Dashboard Preview
//             </div>

//           </div>

//         </div>
//       </section>



//       {/* SECTION 2 */}
//       <section className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20 items-center">

//         {/* LEFT MOCKUP */}
//         <div className="relative flex justify-center">

//           <div className="bg-white/10 backdrop-blur-2xl border border-white/20 
//             rounded-[40px] w-[320px] h-[600px] shadow-2xl flex items-center justify-center">

//             <div className="text-gray-300">
//               Analytics Preview
//             </div>

//           </div>

//         </div>

//         {/* RIGHT TEXT */}
//         <div>
//           <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
//             Replace outdated systems with{" "}
//             <span className="text-green-400">innovation.</span>
//           </h2>

//           <p className="text-gray-300 text-lg">
//             Automate attendance tracking, performance analytics,
//             and centralized academic data — all from one platform.
//           </p>
//         </div>

//       </section>

//     </main>
//   );
// }


"use client";

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
            Sentinals helps institutions manage students, attendance,
            and academic operations efficiently with powerful automation.
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-400 text-black px-8 py-4 rounded-full font-semibold shadow-lg"
          >
            Explore Platform
          </motion.button>
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
            rounded-[40px] w-[320px] h-[600px] shadow-2xl flex items-center justify-center"
          >
            <div className="text-gray-300">
              Dashboard Preview
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
            rounded-[40px] w-[320px] h-[600px] shadow-2xl flex items-center justify-center"
          >
            <div className="text-gray-300">
              Analytics Preview
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
            and centralized academic data — all from one platform.
          </p>
        </motion.div>

      </section>

    </main>
  );
}

