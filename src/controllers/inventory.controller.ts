import Inventory from '../models/inventory.model';

export async function getInventoryDetails(ctx): Promise<void> {
    try {
        ctx.body = await Inventory.findOne({_id: ctx.params.id}).exec();
    } catch (err) {
        ctx.app.emit('error', err, ctx);
    }
}

export async function getAllInventories(ctx): Promise<void> {
    try {
        ctx.body = await Inventory.find({}).exec();
    } catch (err) {
        ctx.app.emit('error', err, ctx);
    }
}

export default {
    getInventoryDetails,
    getAllInventories
};
