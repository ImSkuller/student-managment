import Button from "@/components/HomepageButton";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main className="bg-[#1A1A1A] text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex flex-col justify-center px-10 py-24 bg-gradient-to-tr from-[#1A1A1A] via-[#2B1B3F] to-[#3B1A5A] rounded-b-[48px]">

        {/* Brand */}
        <div className="absolute top-6 left-10">
          <h1 className="text-purple-400 font-semibold text-2xl tracking-wide">
            Sentinals
          </h1>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
          <span className="text-purple-400">Sentinals</span>
          <br />Smart Student<br />
          <span className="text-purple-400">Management</span>
        </h1>

        {/* Sub text */}
        <p className="mt-8 text-lg text-gray-300 max-w-xl">
          Intelligent dashboards to manage students, attendance, performance, and academic workflows all in one place.
        </p>

        {/* Side description */}
        <p className="absolute right-10 top-1/2 max-w-xs text-sm text-gray-400 hidden md:block">
          Designed by team{" "}
          <Link href="/about" className="text-purple-400 hover:underline">Sentinals</Link>.
        </p>
      </section>

      {/* ================= IMAGE SECTION ================= */}
      <section className="py-20 px-10">
        <div className="max-w-6xl mx-auto">
          <Image
            src="/office.jpg"
            alt="dashboard preview"
            width={1200}
            height={600}
            className="rounded-2xl shadow-2xl border border-[#2A2A2A]"
          />
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 px-10">
        <h2 className="text-gray-400 mb-8 text-sm uppercase tracking-wider">
          Core Modules
        </h2>

        <div className="flex flex-wrap gap-4">
          {[
            "Student Records",
            "Attendence Registration",
            "Attendance Tracking",
            "Teacher Management",
            "Analytics Dashboard",
            "Performance Reports",
            "Result Processing",
          ].map((item, index) => (
            <div
              key={index}
              className="border border-[#333] px-6 py-3 rounded-full text-sm text-gray-300 hover:bg-purple-500 hover:text-black transition cursor-pointer">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 px-10 bg-[#202020] rounded-t-[48px] rounded-b-[48px]">
        <div className="max-w-6xl mx-auto space-y-32">

          <div className="grid md:grid-cols-2 gap-14 items-center">
            <Image
              src="/feature1.jpg"
              alt="feature"
              width={520}
              height={420}
              className="rounded-2xl"
            />

            <div>
              <h3 className="text-3xl font-semibold mb-4">
                Smart Attendance System
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Track attendance in real time using with our quizz based attendence registration system, Which only registers the attendence if the student answers the quizz.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <h3 className="text-3xl font-semibold mb-4">
                Performance Analytics
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Check all the student information such as Attendence, Results, GPA, Marks or Basic student profile
              </p>
            </div>

            <Image
              src="/feature2.jpg"
              alt="feature"
              width={520}
              height={420}
              className="rounded-2xl"
            />
          </div>

        </div>
      </section>

      {/* ================= CTA / FOOTER ================= */}
      <section className="bg-lime-400 text-black py-28 px-10 mt-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to Manage <br /> Smarter?
          </h2>

          <Button className="bg-black text-white px-10 py-4 rounded-full hover:scale-105 transition font-medium">
            Get Started
          </Button>
        </div>
      </section>

    </main>
  );
}
