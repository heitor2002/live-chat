import express from "express";
import http from "http";
import {Server} from "socket.io";

const port = 3000;

const app = express();
const serverHttp = http.createServer(app);

const io = new Server(serverHttp)

export {serverHttp, io, port}