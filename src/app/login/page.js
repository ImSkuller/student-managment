"use client";

import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const res = await signIn("credentials", {
      redirect: false,
      email: form.get("email"),
      password: form.get("password"),
    });

    if (res?.ok) {
      const session = await getSession();
      const role = session?.user?.role;
      router.push(`${role}/dashboard`);
    } else {
      alert("Invalid login");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 w-full max-w-md shadow-2xl text-white">

        <h1 className="text-4xl font-bold text-center mb-6">
          Welcome Back
        </h1>

        <p className="text-center text-sm text-gray-200 mb-8">
          Login to access your dashboard
        </p>

        {/* IMPORTANT: add onSubmit */}
        <form className="space-y-5" onSubmit={handleSubmit}>

          {/* add name attributes */}
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full px-5 py-3 rounded-xl bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full px-5 py-3 rounded-xl bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Login
          </button>

        </form>

      </div>
    </main>
  );
}
