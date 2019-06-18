import {Document, Model, Schema, model} from 'mongoose';

export interface OrderModel extends Document {
    _id: string;
    inventoryId: string;
    quantity: number;
    userId: string;
    createdAt: Date;
}

const OrderSchema = new Schema({
    quantity: Schema.Types.Number,
    inventoryId: { type: Schema.Types.ObjectId, ref: 'Inventory', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
}, {
    timestamps: true
});

const Order: Model<OrderModel> = model<OrderModel>('Order', OrderSchema);

export default Order;
