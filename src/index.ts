import { io, server, app, PORT } from './configs/config';
import { middlewareJson, middlewareUrlencoded } from './middlewares/middlewares';
import eventRouter from './router/event';

// socket io connection ---
io.on('connection', (socket) => {

	const room = socket.handshake.query.room;

	if (room) {
		socket.join(room);
		console.log(`user room: ${room}`);
	}

	socket.on('disconnect', () => {
		console.log(`user disconnected: ${room}`);
		console.log(`---------------------------------------`);
	});
	
});

// middlewares --------
app.use(middlewareJson);
app.use(middlewareUrlencoded);

// socket io event ---
app.use('/event', eventRouter);

// ------------------

// start server
server.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
