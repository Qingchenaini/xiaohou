import { createConfiguration, hooks } from '@midwayjs/hooks';
import * as Koa from '@midwayjs/koa';
import * as orm from '@midwayjs/typeorm';
import cors from '@koa/cors';

/**
 * setup midway server
 */
export default createConfiguration({
  imports: [Koa, orm,hooks({
    middleware: [
      cors({ origin: '*' }),
    ],
  })],

  importConfigs: [{ default: { keys: 'session_keys' } }],
});
