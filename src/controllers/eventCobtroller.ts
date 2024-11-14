import { Response, Request } from 'express';
import { Event } from '../types';
import { z } from 'zod';
import { io } from '../configs/config';

const eventSchema = z.object({
	event: z.string().regex(/^[a-zA-Z]+$/),
	room: z.string(),
});

export const eventCobtroller = (req: Request, res: Response) => {

	const { event, room }: Event = req.body;

	console.log(event, room)

	const { success } = eventSchema.safeParse({ event, room });

	if (success) {

		io.to(room).emit(event);

		return res.status(200).json({ message: 'ok' });
	}

	return res.status(400).json({ message: 'error' });
	

};
