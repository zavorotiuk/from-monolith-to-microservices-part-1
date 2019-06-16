import { createUser, getToken } from '../services/users.service';

export async function signin(ctx): Promise<void> {
    try {
        const token = await getToken(ctx.request.body);
        ctx.body = token;
    } catch (err) {
        ctx.app.emit('error', err, ctx);
    }
}

export async function signup(ctx): Promise<void> {
    try { 
        const user = await createUser(ctx.request.body);
        ctx.body = user;
    } catch (err) {
        ctx.app.emit('error', err, ctx);
    }
}

export async function getUserDetails(ctx): Promise<void> {
    try {
        ctx.body = {};
    } catch (err) {
        ctx.app.emit('error', err, ctx);
    }
}

export default {
    signin,
    signup,
    getUserDetails
};
