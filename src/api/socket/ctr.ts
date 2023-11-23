import { Controller, App } from '@midwayjs/core';
import { Application } from '@midwayjs/ws';

@Controller()
export class HomeController {

  @App('webSocket')
  wsApp: Application;

  async invoke() {
    this.wsApp.clients.forEach(ws => {
      // ws.send('something');
    });
  }
}