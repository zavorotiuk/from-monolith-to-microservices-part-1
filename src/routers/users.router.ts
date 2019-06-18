import Router = require('koa-router');
import UserController from '../controllers/user.controller';

const usersRouter: Router = new Router();

usersRouter.post('/users/signin', UserController.signin);
usersRouter.post('/users/signup', UserController.signup);
usersRouter.get('/users/:id', UserController.getUserDetails);

export default usersRouter;
