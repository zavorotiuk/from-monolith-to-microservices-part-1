import { verify } from 'jsonwebtoken';
import config from '../core/config';

async function checkJwt(ctx, next) {
    try {
        const decoded = verify(ctx.request.headers.authorization, config.jwt.secret);
        ctx.state.user = decoded['userId'];
        await next();
    } catch (err) {
        ctx.throw(401, err.message);
    }
}

export default checkJwt;
