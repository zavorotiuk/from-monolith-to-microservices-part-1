import * as Koa from 'koa';
import bodyParser = require('koa-bodyparser');

import routers from './routers';
import config from './core/config/default';
import logger from './core/logger/app-logger';
import { logRequestInfo } from './middleware/logRequestInfo';
import errorHandler from './middleware/errorHandler';

const app = new Koa();

app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
        ctx.app.emit('error', err, ctx);
      }
    })
    .use(bodyParser())
    .use(logRequestInfo)
    .use(routers);

app.on('error', errorHandler);


export default app.listen(config.server.port, () => logger.info(`Server started on port ${config.server.port}`));
