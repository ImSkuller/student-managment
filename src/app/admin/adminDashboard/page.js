"use client";

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#0a0015] to-[#050008] text-white p-10">

      <h1 className="text-4xl font-bold mb-10">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-black/50 p-8 rounded-2xl border border-white/10">
          <h2 className="text-xl font-semibold mb-4">
            Create New User
          </h2>
          <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 px-6 py-3 rounded-xl">
            Open Registration
          </button>
        </div>

        <div className="bg-black/50 p-8 rounded-2xl border border-white/10">
          <h2 className="text-xl font-semibold mb-4">
            Manage Users
          </h2>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl">
            View Users
          </button>
        </div>

      </div>

    </main>
  );
}
