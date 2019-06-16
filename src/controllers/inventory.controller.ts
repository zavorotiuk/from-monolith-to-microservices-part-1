export async function getInventoryDetails(ctx): Promise<void> {
    try {
        ctx.body = {};
    } catch (err) {
        ctx.app.emit('error', err, ctx);
    }
}

export async function getAllInventories(ctx): Promise<void> {
    try {
        ctx.body = {};
    } catch (err) {
        ctx.app.emit('error', err, ctx);
    }
}

export default {
    getInventoryDetails,
    getAllInventories
};
