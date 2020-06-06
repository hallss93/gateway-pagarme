import { Request, Response } from "express";
import TransactionController from './../controllers/TransactionController'
import { Transaction } from './../models/Transaction/Transaction';
const createTransaction = async (request: Request, response: Response) => {
    const Control = await new TransactionController(request.app.locals.Client, null)
    const listTransactions: Array<Transaction> = await Control.create()
    response.json(listTransactions);
}
const allTransaction = async (request: Request, response: Response) => {
    const Control = await new TransactionController(request.app.locals.Client, null)
    const listTransactions: Array<Transaction> = await Control.all()
    response.json(listTransactions);
}
export { createTransaction, allTransaction }