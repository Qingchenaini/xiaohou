import { PrismaClient,Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
    {
      name: 'Alice',
      email: 'alice@prisma.io',
      posts: {
        create: [
          {
            title: 'Join the Prisma Slack',
            content: 'https://slack.prisma.io',
            published: true,
          },
        ],
      },
    },
    {
      name: 'Nilu',
      email: 'nilu@prisma.io',
      posts: {
        create: [
          {
            title: 'Follow Prisma on Twitter',
            content: 'https://www.twitter.com/prisma',
            published: true,
          },
        ],
      },
    },
    {
      name: 'Mahmoud',
      email: 'mahmoud@prisma.io',
      posts: {
        create: [
          {
            title: 'Ask a question about Prisma on GitHub',
            content: 'https://www.github.com/prisma/prisma/discussions',
            published: true,
          },
          {
            title: 'Prisma on YouTube',
            content: 'https://pris.ly/youtube',
          },
        ],
      },
    },
  ];
  

// 定义一个async名为main向数据库发送查询的函数
async function main() {
    console.log(`Start seeding ...`);
    for (const u of userData) {
      const user = await prisma.user.create({
        data: u,
      });
      console.log(`Created user with id: ${user.id}`);
    }
    console.log(`Seeding finished.`);
  }

// 调用main函数
// 脚本终止时关闭数据库连接
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });