import Router = require('koa-router');
import OrdersController from '../controllers/orders.controller';

const ordersRouter: Router = new Router();

ordersRouter.post('/orders', OrdersController.createOrder);
ordersRouter.get('/orders/:id', OrdersController.getOrderDetails);

export default ordersRouter;
