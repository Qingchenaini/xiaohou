import { Api, Get, Post } from "@midwayjs/hooks"
import { prisma } from '../../prisma/seed';


interface GetPostOneParams {
    id?: number;     // id 是可选的，因为可能会根据 title 来查询
    title?: string;  // title 也是可选的，因为可能会根据 id 来查询
}
// 单帖子查找(可根据id或者title搜索)
export const getPostOne = Api(
    Post('/api/postone'),
    async (params: GetPostOneParams) => { 
        const whereClause: { id?: number; title?: string; } = {};

        if (params.id) {
            whereClause.id = params.id;
        }
        if (params.title) {
            whereClause.title = params.title;
        }

        // 如果既没有 id 也没有 title，抛出一个错误
        if (!whereClause.id && !whereClause.title) {
            throw new Error('必须提供一个id或者title参数');
        }

        const post = await prisma.post.findFirst({
            where: whereClause
        });

        return post;
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
export const deletePostApi = Api(
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

//更新帖子
export const updatePost = Api(
    Post('/api/updatepost'),
    async (postId: number, updatedData: { title?: string, content?: string }) => {
        try {
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

