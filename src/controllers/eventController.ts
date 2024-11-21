import { Response, Request } from 'express';
import { Event } from '../types';
import { z } from 'zod';
import { io } from '../configs/config';

const eventSchema = z.object({
	event: z.string().regex(/^[a-zA-Z]+$/),
	room: z.string().regex(/^[a-zA-Z0-9]+$/),
});

export const eventController = (req: Request, res: Response) => {

	const { event, room }: Event = req.body;

	const result = eventSchema.safeParse({ event, room });

	if (!result.success) {
		return res.status(400).json({ message: 'invalid data', errors: result.error.errors });
	}

	if (!io.sockets.adapter.rooms.has(room)) {
		return res.status(204).json({ message: 'room not found' });
	}

	io.to(room).emit(event);

	console.log(`event "${event}" emitted to room "${room}"`);

	return res.status(200).json({ message: 'event emitted successfully' });

};
