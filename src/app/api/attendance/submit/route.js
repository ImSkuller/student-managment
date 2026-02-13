import { prisma } from "@/lib/prisma";

export async function POST(req) {
  const { username, sessionId, answer } = await req.json();

  const student = await prisma.user.findUnique({
    where: { username },
  });

  const attendanceSession = await prisma.attendanceSession.findUnique({
    where: { id: sessionId },
  });

  if (!student) {
    return Response.json(
      { error: "Student does not exist" },
      { status: 400 }
    )
  }

  if (!attendanceSession)
    return Response.json({ error: "Session not found" }, { status: 404 });

  if (attendanceSession.expiresAt < new Date())
    return Response.json({ error: "Session expired" }, { status: 400 });

  const correct = attendanceSession.correct === answer;

  await prisma.submission.create({
    data: {
      username,
      answer,
      correct,
      sessionId,
    },
  });

  return Response.json({ success: true });
}
