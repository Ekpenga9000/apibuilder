import prisma from "./prisma";

async function main() {
  const testEmail = "test@example.com";

  /**
   * 1. Delete sessions belonging to the test user
   */
  await prisma.session.deleteMany({
    where: {
      user: {
        email: testEmail,
      },
    },
  });

  /**
   * 2. Remove role relations and delete the user
   */
  await prisma.user.deleteMany({
    where: {
      email: testEmail,
    },
  });

  console.log(`Cleaned up existing user with email: ${testEmail}`);

  /**
   * 3. Ensure roles exist
   */
  const [userRole, adminRole] = await Promise.all([
    prisma.role.upsert({
      where: { name: "user" },
      update: {},
      create: { name: "user" },
    }),
    prisma.role.upsert({
      where: { name: "admin" },
      update: {},
      create: { name: "admin" },
    }),
  ]);

  /**
   * 4. Create user and attach role
   */
  const user = await prisma.user.create({
    data: {
      firstName: "Test",
      lastName: "User",
      email: testEmail,
      password: "hashed_password_here",
      profileImg: "https://example-bucket.s3.amazonaws.com/profile.png",
      roles: {
        connect: [{ id: userRole.id }],
      },
    },
    include: {
      roles: true,
    },
  });

  console.log("Created user:", user);

  /**
   * 5. Create session
   */
  const session = await prisma.session.create({
    data: {
      userId: user.id,
      token: "test-session-token",
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
    },
  });

  console.log("Created session:", session);

  /**
   * 6. Fetch user with relations
   */
  const fetchedUser = await prisma.user.findUnique({
    where: { email: testEmail },
    include: {
      roles: true,
      sessions: true,
    },
  });

  console.log("Fetched user with relations:", fetchedUser);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
