await prisma.attendanceSession.create({
  data: {
    teacherId: session.user.id,
    section,
    question,
    options,
    correct,
  },
});
