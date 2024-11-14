import { Router } from 'express';
import { Auth } from '../middlewares/middlewares';
import { eventCobtroller } from '../controllers/eventCobtroller';

const eventRouter = Router();

//-------------------------------------------------------------

eventRouter.post('/', Auth, eventCobtroller);

//-------------------------------------------------------------

export default eventRouter;
