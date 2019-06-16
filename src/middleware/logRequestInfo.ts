import logger from '../core/logger/app-logger';

export async function logRequestInfo(ctx, next) {
    logger.info(`Got Request: ${ctx.request.url} From: ${ctx.request.ip}`);
    await next();
}
