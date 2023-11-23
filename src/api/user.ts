import { prisma } from '../../prisma/seed';
import { Api, Get, Post } from '@midwayjs/hooks';
import { hash, compare } from 'bcryptjs';
import * as jwt from 'jsonwebtoken'; // Import the jsonwebtoken package

// 注册储存username 和 password API
//要求：
// 1、username不能重复
// 2、password不明文储存
// 3、

interface Userparam {
    username: string,
    password: string
}
export const registerApi = Api(
    Post('/api/register'),
    async (Params: Userparam) => {
        const { username, password } = Params;
        const hashPassword = await hash(password, 10)
        const register = await prisma.user.create({
            data: {
                username: username,
                password: hashPassword
            }

        });
        return {
            id: register.id,
            username: register.username
        };
    }
)


//登录API
export const loginApi = Api(
    Post('/api/login'),
    async (Params: Userparam) => {
        const { username, password } = Params;
        const userLogin = await prisma.user.findFirst({
            where: {
                username: username,
            },
        });
        if (!userLogin) {
            return 'not this username'
        }
        const comparePassword = await compare(password, userLogin.password);
        if (comparePassword) {
            const token = jwt.sign(
                { userId: userLogin.id, username: userLogin.username },
                'your_jwt_secret', 
                { expiresIn: '1h' } 
              );
            return {
                id: userLogin.id,
                username: userLogin.username,
                token:token
            };
        } else {
            return '密码错误';
        }

    }
)