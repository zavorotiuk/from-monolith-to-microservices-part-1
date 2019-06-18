import { compare, hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { Types } from 'mongoose';
import User from '../models/user.model';
import config from '../core/config';

export async function signin(ctx): Promise<void> {
    try {
        const users = await User.find({ email: ctx.request.body.email }).exec();
        if (users.length === 0) {
            ctx.throw(404, 'User does not exist');
        }

        const passwordsMatch = await compare( ctx.request.body.password, users[0].password);

        if (passwordsMatch) {
            const token = sign({
                email: users[0].email,
                userId: users[0]._id
            },
            config.jwt.secret, {
                expiresIn: '1h'
            });

            ctx.body = token;
        }
    } catch (err) {
        ctx.app.emit('error', err, ctx);
    }
}

export async function signup(ctx): Promise<void> {
    try {
        const users = await User.find({ email: ctx.request.body.email}).exec();

        if (users.length >= 1) {
            ctx.throw(403, 'Email is allready used');
        } else {
            const passwordHash = await hash(ctx.request.body.password, 10);

            ctx.body = new User({
                _id: new Types.ObjectId(),
                email: ctx.request.body.email,
                firstName: ctx.request.body.firstName,
                lastName: ctx.request.body.lastName,
                password: passwordHash
            }).save();
        }
    } catch (err) {
        ctx.app.emit('error', err, ctx);
    }
}

export async function getUserDetails(ctx): Promise<void> {
    try {
        ctx.body = await User.findById(ctx.request.params.id);
    } catch (err) {
        ctx.app.emit('error', err, ctx);
    }
}

export default {
    signin,
    signup,
    getUserDetails
};
