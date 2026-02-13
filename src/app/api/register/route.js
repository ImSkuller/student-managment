import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req) {
  const body = await req.json();

  const hashed = await bcrypt.hash(body.password, 10);

  await prisma.user.create({
    data: {
      userid: body.userid,
      username: body.username,
      name: body.name,
      email: body.email,
      password: hashed,
      role: body.role,
    },
  });

  return Response.json({ success: true });
}
