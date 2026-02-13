"use client";
import { useState } from "react";

export default function AddSection() {
  const [name, setName] = useState("");

  async function createSection() {
    await fetch("/api/sections/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    alert("Section created");
  }

  return (
    <div className="p-10">
      <input
        placeholder="Section Name"
        onChange={(e)=>setName(e.target.value)}
        className="border p-3 mr-4"
      />

      <button
        onClick={createSection}
        className="bg-purple-600 text-white px-6 py-3"
      >
        Add Section
      </button>
    </div>
  );
}
