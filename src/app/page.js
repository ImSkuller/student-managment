import Button from "@/components/HomepageButton";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* Brand text */}
      <div className="absolute top-4 left-6 text-purple-500 font-bold text-xl z-50">
        Sentinals
      </div>

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold mb-6">
          Smart Student Management <br /> for Modern Schools
        </h1>

        <p className="text-gray-400 max-w-2xl mb-8">
          Manage students, attendance, performance, teachers, and academic records
          in one unified intelligent dashboard.
        </p>

        <div className="flex gap-4">
          <Button>Get Started</Button>
          <Button>View Demo</Button>
        </div>
      </section>


      {/* FEATURES SECTION */}
      <section className="bg-gray-100 text-black py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Powerful Tools for Schools
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="font-semibold text-xl mb-3">Student Records</h3>
            <p className="text-gray-600">
              Store academic profiles, attendance, performance analytics,
              and personal student data securely.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="font-semibold text-xl mb-3">Attendance Tracking</h3>
            <p className="text-gray-600">
              Automated attendance systems with real-time dashboards
              and reports for teachers and administrators.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="font-semibold text-xl mb-3">Teacher Management</h3>
            <p className="text-gray-600">
              Manage staff records, schedules, subjects, and performance
              evaluation in one place.
            </p>
          </div>
        </div>
      </section>


      {/* CTA SECTION */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Transform Your School Administration
        </h2>

        <Button>Start Managing Today</Button>
      </section>

    </main>
  );
}
