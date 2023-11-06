import { Api, Get, Post } from "@midwayjs/hooks"
import { prisma } from '../../prisma/seed';

// 单帖子查找
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

//全部帖子查找
export const getPost = Api(
    Get('/api/post'),
    async () => {
        const post = await prisma.post.findMany();
        return post;
    }
)

//帖子增加数据
export const addPostOne = Api(
    Post('/api/addpost'),
    async (data: { title: string, content: string }) => {
        const newPost = await prisma.post.create({
            data: {
                title: data.title,
                content: data.content
            }
        });
        return newPost;
    }
)
//帖子删除数据
export const deletePostOne = Api(
    Post('/api/deletepost'),
    async (id: number) => {
        try {
            const deletePost = await prisma.post.delete({
                where: {
                    id: id
                }
            });
            if (deletePost) {
                return "帖子删除成功";
            } else {
                return "未找到要删除的帖子";
            }
        } catch (error) {
            console.error(`删除帖子时出错：`, error);
            return "删除帖子失败";
        }


    }
)

export const updatePost = Api(
    Post('/api/updatepost'),
    async (postId: number, updatedData: { title?: string, content?: string }) => {
        try {
            // 使用 Prisma Client 的 `update` 方法来更新帖子
            const updatedPost = await prisma.post.update({
                where: {
                    id: postId
                },
                data: updatedData
            });

            if (updatedPost) {
                return "帖子更新成功";
            } else {
                return "未找到要更新的帖子";
            }
        } catch (error) {
            console.error(`更新帖子时出错：`, error);
            return "更新帖子失败";
        }
    }
);

