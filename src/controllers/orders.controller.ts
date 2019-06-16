export async function createOrder(ctx): Promise<void> {
    try {
        ctx.body = {};
    } catch (err) {
        ctx.app.emit('error', err, ctx);
    }
}

export async function getOrderDetails(ctx): Promise<void> {
    try {
        ctx.body = {};
    } catch (err) {
        ctx.app.emit('error', err, ctx);
    }
}

export default {
    createOrder,
    getOrderDetails
};
