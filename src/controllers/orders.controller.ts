import Inventory from '../models/inventory.model';
import Order from '../models/order.model';
import { Types } from 'mongoose';

export async function createOrder(ctx): Promise<void> {
    try {
        const inventory = await Inventory.findOne({_id: ctx.request.body.inventoryId}).exec();

        if (!inventory) {
            ctx.throw(404, 'Inventory not found');
        }

        const order = await new Order({
            _id: new Types.ObjectId(),
            inventoryId: inventory._id,
            quantity: ctx.request.body.quantity,
            userId: ctx.state.user
        }).save();

        ctx.body = order;
    } catch (err) {
        ctx.app.emit('error', err, ctx);
    }
}

export async function getOrderDetails(ctx): Promise<void> {
    try {
        ctx.body = await Order.findOne({_id: ctx.params.id}).exec();
    } catch (err) {
        ctx.app.emit('error', err, ctx);
    }
}

export default {
    createOrder,
    getOrderDetails
};
