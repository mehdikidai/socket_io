import express, { Express } from 'express';
import http from 'http';
import { Server } from 'socket.io';
import dotenv from "dotenv";

dotenv.config()

export const app: Express = express();
export const server = http.createServer(app);
export const io = new Server(server, {
	cors: {
		origin: process.env.CORS_ORIGIN?.split(','),
		methods: ['GET', 'POST'],
	},
});

export const PORT: number = Number( process.env.PORT || '3000' );

export const SOCKET_KEY = process.env.SOCKET_KEY
