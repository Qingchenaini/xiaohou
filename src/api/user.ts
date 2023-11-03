import { prisma } from '../../prisma/seed';
import { Api, Get, } from '@midwayjs/hooks';

export const getUser = Api(
    Get('/api/user'),
    async () => {
        const user = await prisma.user.findFirst();
        return user;
    }
)

export const getPost = Api(
    Get('/api/post'),
    async () => {
        const post = await prisma.post.findMany();
        return post;
    }
)