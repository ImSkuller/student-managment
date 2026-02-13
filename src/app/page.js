// import Button from "@/components/HomepageButton";

// export default function Home() {
//   return (
//     <main className="bg-black text-white min-h-screen">

//       {/* Brand text */}
//       <div className="absolute top-4 left-6 text-purple-500 font-bold text-xl z-50">
//         Sentinals
//       </div>

//       {/* HERO SECTION */}
//       <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
//         <h1 className="text-5xl font-bold mb-6">
//           Smart Student Management <br /> for Modern Schools
//         </h1>

//         <p className="text-gray-400 max-w-2xl mb-8">
//           Manage students, attendance, performance, teachers, and academic records
//           in one unified intelligent dashboard.
//         </p>

//         <div className="flex gap-4">
//           <Button>Get Started</Button>
//           <Button>View Demo</Button>
//         </div>
//       </section>


//       {/* FEATURES SECTION */}
//       <section className="bg-gray-100 text-black py-20 px-6">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Powerful Tools for Schools
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           <div className="bg-white p-8 rounded-2xl shadow">
//             <h3 className="font-semibold text-xl mb-3">Student Records</h3>
//             <p className="text-gray-600">
//               Store academic profiles, attendance, performance analytics,
//               and personal student data securely.
//             </p>
//           </div>

//           <div className="bg-white p-8 rounded-2xl shadow">
//             <h3 className="font-semibold text-xl mb-3">Attendance Tracking</h3>
//             <p className="text-gray-600">
//               Automated attendance systems with real-time dashboards
//               and reports for teachers and administrators.
//             </p>
//           </div>

//           <div className="bg-white p-8 rounded-2xl shadow">
//             <h3 className="font-semibold text-xl mb-3">Teacher Management</h3>
//             <p className="text-gray-600">
//               Manage staff records, schedules, subjects, and performance
//               evaluation in one place.
//             </p>
//           </div>
//         </div>
//       </section>


//       {/* CTA SECTION */}
//       <section className="py-24 text-center">
//         <h2 className="text-4xl font-bold mb-6">
//           Transform Your School Administration
//         </h2>

//         <Button>Start Managing Today</Button>
//       </section>

//     </main>
//   );
// }




import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex flex-col justify-center px-10 py-20 
        bg-gradient-to-tr from-black via-purple-900 to-pink-600">

        {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6">
          <h1 className="text-green-400 font-semibold text-lg">
            Sentinals.
          </h1>

          
        </nav>

        {/* Big Heading */}
        <h1 className="text-6xl md:text-8xl font-bold leading-tight max-w-4xl">
          Let’s Build <br /> Smart Student <br /> Management
        </h1>

        {/* Small side text */}
        <p className="absolute right-10 top-1/2 max-w-xs text-sm text-gray-200 hidden md:block">
          Here we build intelligent dashboards for managing students,
          attendance and academic systems.
        </p>
      </section>


      {/* ================= IMAGE SECTION ================= */}
      <section className="bg-white py-16 px-10">
        <div className="max-w-6xl mx-auto">
          <Image
            src="/office.jpg"
            alt="dashboard preview"
            width={1200}
            height={600}
            className="rounded-xl shadow-xl"
          />
        </div>
      </section>


      {/* ================= SERVICES SECTION ================= */}
      <section className="bg-black py-20 px-10">
        <h2 className="text-gray-400 mb-6">Our Services</h2>

        <div className="flex flex-wrap gap-4">
          {[
            "Student Records",
            "Attendance Tracking",
            "Teacher Management",
            "Analytics Dashboard",
            "Performance Reports",
            "Role Based Access",
            "Fee Management",
            "Result Processing",
          ].map((item, index) => (
            <div
              key={index}
              className="border border-gray-600 px-6 py-3 rounded-full hover:bg-white hover:text-black transition cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      </section>


      {/* ================= FEATURE SHOWCASE ================= */}
      <section className="bg-gray-100 text-black py-20 px-10">
        <div className="max-w-6xl mx-auto space-y-24">

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <Image
              src="/feature1.jpg"
              alt="feature"
              width={500}
              height={400}
              className="rounded-xl"
            />

            <div>
              <h3 className="text-3xl font-bold mb-4">
                Smart Attendance System
              </h3>
              <p className="text-gray-600">
                Track attendance in real time using AI-based or QR-based
                verification systems with powerful analytics.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Performance Analytics
              </h3>
              <p className="text-gray-600">
                Get insights on academic performance, attendance trends,
                and teacher evaluations.
              </p>
            </div>

            <Image
              src="/feature2.jpg"
              alt="feature"
              width={500}
              height={400}
              className="rounded-xl"
            />
          </div>

        </div>
      </section>


      {/* ================= TESTIMONIAL ================= */}
      <section className="py-20 px-10 bg-white text-black">
        <h2 className="text-center text-3xl font-bold mb-12">
          
        </h2>

        
      </section>


      {/* ================= CTA SECTION ================= */}
      <section className="bg-lime-400 text-black py-24 px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">

          <h2 className="text-5xl font-bold">
            Want to Start <br /> Managing Smartly?
          </h2>

          <button className="bg-black text-white px-8 py-4 rounded-full hover:scale-105 transition">
            
          </button>
        </div>
      </section>

    </main>
  );
}

