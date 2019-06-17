import Router = require('koa-router');
import OrdersController from '../controllers/orders.controller';
import checkJwt from '../middleware/checkJwt';

const ordersRouter: Router = new Router();

ordersRouter.post('/orders', checkJwt, OrdersController.createOrder);
ordersRouter.get('/orders/:id', checkJwt, OrdersController.getOrderDetails);

export default ordersRouter;
