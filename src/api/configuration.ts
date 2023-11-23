import { createConfiguration, hooks } from '@midwayjs/hooks';
import * as Koa from '@midwayjs/koa';
import * as ws from '@midwayjs/ws';
import * as passport from '@midwayjs/passport';
import * as cache from '@midwayjs/cache';
import * as core from '@midwayjs/core';
/**
 * setup midway server
 */
export default createConfiguration({
  imports: [
    Koa,
    hooks(),
    ws,
    cache,
    core
    // passport,
  ],
  importConfigs: [{ default: { keys: 'session_keys' } }],
});
