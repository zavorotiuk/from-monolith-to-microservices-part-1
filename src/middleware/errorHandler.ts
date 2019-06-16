const errorHandler = (err, ctx) => {
    if (err.isJoi) {
        const defaultErrMessage = 'Request validation failed';
        ctx.status = 400;
        ctx.body = err.details[0] ? err.details[0].message : defaultErrMessage;
    } else {
        ctx.status = err.status || err.statusCode || 500;
        ctx.body = err.message;
    }
};

export default errorHandler;
