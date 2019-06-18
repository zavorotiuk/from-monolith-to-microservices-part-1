import {Document, Model, Schema, model} from 'mongoose';

export interface InventoryModel extends Document {
    _id: string;
    name: string;
    price: string;
    currency: string;
    image: string;
    createdAt: Date;
}

const InventorySchema = new Schema({
    name: Schema.Types.String,
    price: Schema.Types.String,
    currency: Schema.Types.String,
    image: Schema.Types.String,
    createdAt: { type: Date, default: Date.now },
}, {
    timestamps: true
});

const Inventory: Model<InventoryModel> = model<InventoryModel>('Inventory', InventorySchema);

export default Inventory;
