import { Api, Get, Post } from "@midwayjs/hooks"
import { prisma } from '../../prisma/seed';

export const getPostOne = Api(
    Post('/api/postone'),
    async (id: number) => {
        const postId = await prisma.post.findFirst({
            where: {
                id: id
            }
        })
        return postId;
    }
)