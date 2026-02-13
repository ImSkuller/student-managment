"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ user }) {
  const pathName = usePathname();

  const navLinks = [
    {name: "Home", href: "/"},
    {name: "Teachers", href: "/teachers"},
    {name: "Parents", href: "/parents"},
    {name: "Managment", href: "/management"},
    {name: "Login", href: "/login"}
  ];

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <h1 className="text-xl font-bold">Sentinals</h1>

        <div className="flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-blue-400 transition ${
                pathName === link.href ? "text-blue-400 font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
}
