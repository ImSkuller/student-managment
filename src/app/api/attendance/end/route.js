import { prisma } from "@/lib/prisma";

export async function POST(req) {
  const { sessionId } = await req.json();

  await prisma.attendanceSession.update({
    where: { id: sessionId },
    data: {
      active: false,
    },
  });

  const subject = await prisma.subject.findUnique({
    where: { id: subjectId },
    include: { user: true }
  });

  const submissions = await prisma.submission.findMany({
    where: { sessionId }
  });

  const submittedUsernames = submissions.map(s => s.username);

  const allStudents = await prisma.user.findMany({
    where: {
      subjects: {
        some: { id: subjectId }
      }
    },
    include: { subjects: true }
  });

  for (const student of allStudents) {

    const attended = submittedUsernames.includes(student.username);

    const subject = student.subjects.find(s => s.id === subjectId);

    const total = subject.totalClasses + 1;
    const attendedCount = subject.attendedClasses + (attended ? 1 : 0);

    await prisma.subject.update({
      where: { id: subject.id },
      data: {
        totalClasses: total,
        attendedClasses: attendedCount,
        attendance: (attendedCount / total) * 100
      }
    });
  }

  const subjects = await prisma.subject.findMany({
  where: { userId: student.id }
});

  const overall =
    subjects.reduce((a,s)=>a+s.attendance,0) / subjects.length;

  await prisma.user.update({
    where: { id: student.id },
    data: {
      totalAttendance: overall
    }
  });

  return Response.json({ success: true });
}
