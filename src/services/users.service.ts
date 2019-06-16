import User from '../models/user.model';
import config from '../core/config';
import { Types } from 'mongoose';

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

export async function getToken({ email, password }) {
    try {
        const users = await User.find({ email }).exec();
        if (users.length === 0) {
            throw new Error('User does not exist');
        }

        const passwordsMatch = await bcrypt.compare(password, users[0].password);

        if (passwordsMatch) {
            const token = jwt.sign({
                email: users[0].email,
                userId: users[0]._id
            },
            config.jwt.secret, {
                expiresIn: '1h'
            });

            return token;
        }
   } catch (err) {
       throw err;
   }
}

export async function getUserById(id) {
    return await User.findById(id);
}

export async function createUser({ email, password, firstName, lastName }) {
    try {
        const users = await User.find({ email}).exec();

        if (users.length >= 1) {
            throw new Error('Email is allready used');
        } else {
            const hash = await bcrypt.hash(password, 10);

            return new User({
                _id: new Types.ObjectId(),
                email,
                firstName,
                lastName,
                password: hash
            }).save();
        }
    } catch (err) {
        throw err;
    }
}

export default {
    getToken,
    getUserById,
    createUser
};
