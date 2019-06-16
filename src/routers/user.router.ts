import Router = require('koa-router');
import UserController from '../controllers/user.controller';

const userRouter: Router = new Router();

userRouter.post('/signin', UserController.signin);

export default userRouter;
