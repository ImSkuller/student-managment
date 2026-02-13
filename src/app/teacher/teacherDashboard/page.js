"use client";

export default function TeacherDashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#0a0015] to-[#050008] text-white p-10">

      <h1 className="text-4xl font-bold mb-10">
        Teacher Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Mark Attendance Card */}
        <div className="bg-black/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl">
          <h2 className="text-xl font-semibold mb-4">
            Mark Attendance
          </h2>

          <p className="text-gray-400 mb-6">
            Take attendance for selected section and subject.
          </p>

          <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Open Attendance Panel
          </button>
        </div>

        {/* Add Marks Card */}
        <div className="bg-black/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl">
          <h2 className="text-xl font-semibold mb-4">
            Add Marks
          </h2>

          <p className="text-gray-400 mb-6">
            Enter internal, external, or assignment marks for students.
          </p>

          <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Enter Marks
          </button>
        </div>

      </div>

    </main>
  );
}
