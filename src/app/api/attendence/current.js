export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const section = searchParams.get("section");

  const session = await prisma.attendanceSession.findFirst({
    where: { section },
  });

  return Response.json(session);
}
