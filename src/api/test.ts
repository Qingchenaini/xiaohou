import { WSController, OnWSConnection, Inject } from '@midwayjs/core';
import { Context } from '@midwayjs/socketio';

@WSController('/')
export class HelloSocketController {

  @Inject()
  ctx: Context;

  @OnWSConnection()
  async onConnectionMethod() {
    console.log('on client connect', this.ctx.id);
  }
}
