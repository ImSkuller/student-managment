import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
  const body = await req.json();

  const hashedPassword = await bcrypt.hash(body.password, 10);

  await prisma.user.create({
    data: {
      userid: body.userid,
      username: body.username,
      name: body.name,
      email: body.email,
      password: hashedPassword,
      role: body.role,
    },
  });

  return Response.json({ success: true });
}
