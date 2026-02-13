import { prisma } from "@/lib/prisma";

export async function POST(req) {
  const { sessionId } = await req.json();

  await prisma.attendanceSession.update({
    where: { id: sessionId },
    data: {
      active: false,
    },
  });

  return Response.json({ success: true });
}
