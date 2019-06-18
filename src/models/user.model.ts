import {Document, Model, Schema, model} from 'mongoose';

export interface UserModel extends Document {
    _id: string;
    firstName: string;
    lastName: string;
    createdAt: Date;
    deleted: boolean;
    password: string;
    email: string;
}

const UserSchema = new Schema({
    firstName: Schema.Types.String,
    lastName: Schema.Types.String,
    email: {
        type: Schema.Types.String,
        lowercase: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    createdAt: { type: Date, default: Date.now },
    deleted: {
        type: Schema.Types.Boolean,
        default: false
    },
    password: Schema.Types.String
}, {
    timestamps: true
});

const User: Model<UserModel> = model<UserModel>('User', UserSchema);

export default User;
