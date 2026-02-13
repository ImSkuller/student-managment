import { prisma } from "@/lib/prisma";

export async function POST(req) {
  const { username, subject, marks } = await req.json();

  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user) {
    return Response.json({ error: "Student not found" }, { status: 404 });
  }

  await prisma.subject.updateMany({
    where: {
      userId: user.id,
      name: subject,
    },
    data: {
      marks: parseFloat(marks),
    },
  });

  return Response.json({ success: true });
}
