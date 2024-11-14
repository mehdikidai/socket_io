import bodyParser from 'body-parser';
import { Response, Request, NextFunction } from 'express';

const middlewareJson = bodyParser.json();
const middlewareUrlencoded = bodyParser.urlencoded({ extended: false });


//-------- auth fn -----

function Auth(req: Request, res: Response, next: NextFunction) {
	
	const socketKey = req.headers['socket-key'];

	if (socketKey !== process.env.SOCKET_KEY) {
		return res.status(400).json({ message: 'error' });
	}

	return next();
}

//------- end auth fn -----

export { middlewareJson, middlewareUrlencoded, Auth };
