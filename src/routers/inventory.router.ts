import Router = require('koa-router');
import InventoryController from '../controllers/inventory.controller';
import checkJwt from '../middleware/checkJwt';

const inventoryRouter: Router = new Router();

inventoryRouter.get('/inventories', checkJwt, InventoryController.getAllInventories);
inventoryRouter.get('/inventories/:id', checkJwt, InventoryController.getInventoryDetails);

export default inventoryRouter;
