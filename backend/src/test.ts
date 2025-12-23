import prisma from "./prisma";

async function main() {
  const user = await prisma.user.create({
    data: {
      email: "test@example.com",
      password: "hashedpassword123",
    },
  });

  console.log(user);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
