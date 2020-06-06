import { Transaction } from './../models/Transaction/Transaction';
type TNS = Transaction | null;


class TransactionController {
    client: any = null;
    body: TNS = null;
    constructor(client: any = null, body: TNS) {
        this.client = client;
        this.body = body;
    }
    async create() {
        return await this.client.transactions.create(this.body);
    }
    async all() {
        return await this.client.transactions.all();
    }
}
export default TransactionController;
