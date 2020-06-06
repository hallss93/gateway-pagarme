require('dotenv').config()
import express from "express";
import { Request, Response, NextFunction } from "express";
const server = express();
import "./models/pagarme";
import pagarme from 'pagarme'

import { createTransaction, allTransaction } from './routes';
server.use(async (request: Request, _response: Response, next: NextFunction) => {
    let Client = await pagarme.client.connect({ api_key: process.env.PAGARME_API_KEY || '' })
    request.app.locals.Client = Client;
    next();

})

server.get("/transaction", allTransaction);
server.get("/transaction/:id", allTransaction);
server.post("/transaction", createTransaction);

export default server;