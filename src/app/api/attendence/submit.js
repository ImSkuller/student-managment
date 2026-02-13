const correct = session.correct === studentAnswer;

await prisma.submission.create({
  data: {
    username,
    answer: studentAnswer,
    correct,
    sessionId: session.id,
  },
});
