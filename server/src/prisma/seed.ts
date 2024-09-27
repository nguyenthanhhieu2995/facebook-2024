import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding ...");
}
main()
  .then(async () => {
    await prisma.post.createMany({
      data: [
        {
          title: "Post 1",
          content: "Content 1",
        },
        {
          title: "Post 2",
          content: "Content 2",
        },
        {
          title: "Post 3",
          content: "Content 3",
        },
      ],
    });

    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });