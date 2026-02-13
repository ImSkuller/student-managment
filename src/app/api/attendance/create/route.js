import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return Response.json({ error: "Not authenticated" }, { status: 401 });
  }

  const body = await req.json();

  const expires = new Date(Date.now() + 5 * 60 * 1000);

  const newSession = await prisma.attendanceSession.create({
    data: {
      teacherId: session.user.id,
      section: body.section,
      question: body.question,
      options: [
        body.option1,
        body.option2,
        body.option3,
        body.option4,
      ],
      correct: body.correct,
      expiresAt: expires,
    },
  });

  return Response.json(newSession);
}
