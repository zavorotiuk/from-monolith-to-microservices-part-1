import * as compose from 'koa-compose';
import UsersRouter from './users.router';
import OrdersRouter from './orders.router';
import InventoryRouter from './inventory.router';

const routers = [
  UsersRouter,
  OrdersRouter,
  InventoryRouter
];

const middleware = [];
routers.forEach((router) => {
  middleware.push(router.routes());
  middleware.push(router.allowedMethods());
});


export default compose(middleware);
