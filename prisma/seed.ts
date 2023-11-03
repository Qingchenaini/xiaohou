import { PrismaClient, Prisma } from '@prisma/client'

export const prisma = new PrismaClient()

// 定义一个async名为main向数据库发送查询的函数
async function main() {
  await prisma.user.create({
    data: {
      name: '大s',
      email: 'jc7272',
      posts: {
        create: [
          {
            title: 'Join the Prisma Slack',
            content: '第一篇文章',
            published: true,
            viewCount: 10,
          },
        ],
      }
    },
  })
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