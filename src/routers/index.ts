import * as compose from 'koa-compose';
import UserRouter from './user.router';
import OrderRouter from './order.router';
import InventoryRouter from './inventory.router';

const routers = [
  UserRouter,
  OrderRouter,
  InventoryRouter
];

const middleware = [];
routers.forEach((router) => {
  middleware.push(router.routes());
  middleware.push(router.allowedMethods());
});


export default compose(middleware);
