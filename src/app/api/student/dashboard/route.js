import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const student = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      subjects: true,
    },
  });

  if (!student) {
    return Response.json({ error: "Student not found" }, { status: 404 });
  }

  return Response.json({
    name: student.name,
    totalAttendance: student.totalAttendance,
    gpa: student.gpa,
    subjects: student.subjects,
  });
}
