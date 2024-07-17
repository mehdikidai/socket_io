import express from "express";
import http from "http";
import { Server } from "socket.io";

export const app = express();

export const server = http.createServer(app);
export  const io = new Server(server, {
    cors: {
        origin: ["http://localhost:8000","http://127.0.0.1:8000"],
        methods: ["GET", "POST"]
    },
});