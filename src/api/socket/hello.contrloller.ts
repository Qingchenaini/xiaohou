import { WSController, OnWSConnection, Inject, OnWSMessage, WSBroadCast, OnWSDisConnection } from '@midwayjs/core';
import { Context } from '@midwayjs/ws';
import * as http from 'http';

@WSController()
export class HelloSocketController {

    @Inject()
    ctx: Context;

    @OnWSConnection() //监听连接
    async onConnectionMethod(socket: Context, request: http.IncomingMessage) {
        console.log(`namespace / got a connection ${this.ctx.readyState}`);
    }



    @OnWSMessage('message') //   接听
    @WSBroadCast()      //将消息发送到所有连接的客户端上
    async gotMessage(data) {
        return { name: 'harry', result: parseInt(data) + 5 };
    }

    @OnWSDisConnection()    //在客户端断连时，做一些额外处理
    async disconnect(id: number) {
        console.log('disconnect ' + id);
    }
}
