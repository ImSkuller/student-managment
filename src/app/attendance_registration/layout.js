// "use client";

// import { useState } from "react";

// export default function AttendanceLayout({ children }) {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     setPosition({ x: e.clientX, y: e.clientY });
//   };

//   return (
//     <div
//       onMouseMove={handleMouseMove}
//       className="relative min-h-screen bg-black text-white overflow-hidden"
//     >
//       {/* Cursor Glow Effect */}
//       <div
//         className="pointer-events-none fixed w-[400px] h-[400px] rounded-full blur-[120px] opacity-30"
//         style={{
//           left: position.x - 200,
//           top: position.y - 200,
//           background:
//             "radial-gradient(circle, rgba(242, 0, 255, 0.5) 0%, transparent 70%)",
//         }}
//       />

//       {children}
//     </div>
//   );
// }

"use client";

import { useState } from "react";

export default function AttendanceLayout({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#050505] text-white overflow-hidden"
    >
      {/* Multi-Color Cursor Glow */}
      <div
        className="pointer-events-none fixed w-[500px] h-[500px] rounded-full blur-[140px] opacity-40 transition-all duration-200"
        style={{
          left: position.x - 250,
          top: position.y - 250,
          background: `
            radial-gradient(circle at center,
              rgba(255, 0, 150, 0.5),
              rgba(128, 0, 255, 0.4),
              rgba(255, 0, 60, 0.3),
              transparent 70%)
          `,
        }}
      />

      {children}
    </div>
  );
}

