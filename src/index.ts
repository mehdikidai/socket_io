import { io, server, app, PORT } from './config';
import { middlewareJson, middlewareUrlencoded } from './middlewares';
import { Response, Request } from 'express';
import { z } from 'zod';
import { Event } from './types';


const eventSchema = z.object({
	event: z.string().regex(/^[a-zA-Z]+$/),
	id: z.number().positive(),
});

// soket io connection ---

io.on('connection', (socket) => {

	console.log('a user connected', socket.id);

});

// soket io connection ---

// soket io event ---

app.post('/event', middlewareJson, middlewareUrlencoded, (req: Request, res: Response) => {

	const { event, id }: Event = req.body;

	const { success } = eventSchema.safeParse({ event, id });

	if (success) {

		io.emit(event, Number(id));

		return res.status(200).json({ message: 'ok' });
	}

	return res.status(400).json({ message: 'error' });

});


// soket io event ---

server.listen(PORT, () => {

	console.log(`listening on http://localhost:${PORT}`);

});
