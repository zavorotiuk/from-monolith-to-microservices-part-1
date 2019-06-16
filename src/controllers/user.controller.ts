export async function signin(ctx): Promise<void> {
    try {
        ctx.body = {};
    } catch (err) {
        ctx.app.emit('error', err, ctx);
    }
}

export async function signup(ctx): Promise<void> {
    try {
        ctx.body = {};
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
