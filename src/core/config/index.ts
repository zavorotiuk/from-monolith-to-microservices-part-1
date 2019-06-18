require('dotenv').config({ path: 'variables.env' });
const port = process.env.PORT || 3000;

const config = {
    server: {
        port,
    },
    db: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        server: process.env.DB_SERVER,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
    },
    jwt: {
        secret: process.env.JWT_SECRET
    }
};

export default config;
