import { connect } from 'mongoose';
import config from '../core/config';

async function initDatabase() {
    await connect(`mongodb://${config.db.server}:${config.db.port}/`, {
        useNewUrlParser: true,
        user: config.db.user,
        pass: config.db.password,
        dbName: config.db.database,
    });
}

export default initDatabase;
