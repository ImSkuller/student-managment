"use client";

import Link from "next/link";

export default function Navbar({ user }) {
  return (
    <div className="fixed top-4 left-0 w-full flex justify-center z-50">
      <nav className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full shadow flex gap-6 text-sm font-medium">

        {user ? (
          <>
            <Link href="/dashboard" className="hover:text-black">
              Dashboard
            </Link>
            <Link href="/profile" className="hover:text-black">
              Profile
            </Link>
          </>
        ) : (
          <Link href="/login" className="hover:text-black">
            Login
          </Link>
        )}

      </nav>
    </div>
  );
}
