import bodyParser from 'body-parser';
import { Response, Request, NextFunction } from 'express';
import { SOCKET_KEY } from '../configs/config';

const middlewareJson = bodyParser.json();
const middlewareUrlencoded = bodyParser.urlencoded({ extended: false });

//-------- auth fn ------

function Auth(req: Request, res: Response, next: NextFunction) {

	const socketKey = req.headers['socket-key'];

	return socketKey !== SOCKET_KEY ? res.status(400).json({ message: 'error' }) : next()

}

//------- end auth fn ------

export { middlewareJson, middlewareUrlencoded, Auth };
