import { prisma } from "@/lib/prisma";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const section = searchParams.get("section");

  const session = await prisma.attendanceSession.findFirst({
    where: {
      section,
      active: true,
      expiresAt: { gt: new Date() },
    },
  });

  return Response.json(session);
}
