import { Router } from 'express';
import { Auth } from '../middlewares/middlewares';
import { eventController } from '../controllers/eventController';

const eventRouter = Router();

//-------------------------------------------------------------

eventRouter.post('/', Auth, eventController);

//-------------------------------------------------------------

export default eventRouter;
