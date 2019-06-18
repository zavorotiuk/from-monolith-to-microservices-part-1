import { createLogger, transports, format } from 'winston';

export default createLogger({
    level: 'debug',
    transports: [
        new transports.Console({
            format: format.simple()
        })
    ],
});
