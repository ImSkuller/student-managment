import { prisma } from "@/lib/prisma";

export async function POST(req) {
  const { name } = await req.json();

  const section = await prisma.section.create({
    data: { name },
  });

  return Response.json(section);
}
