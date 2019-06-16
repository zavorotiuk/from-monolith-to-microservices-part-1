import Router = require('koa-router');
import InventoryController from '../controllers/inventory.controller';

const inventoryRouter: Router = new Router();

inventoryRouter.get('/inventories', InventoryController.getAllInventories);
inventoryRouter.get('/inventories/:id', InventoryController.getInventoryDetails);

export default inventoryRouter;
