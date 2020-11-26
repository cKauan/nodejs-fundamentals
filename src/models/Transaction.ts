import { v4 as uuid } from 'uuid';

class Transaction {
    public id: string;

    public title: string;

    public value: number;

    public type: 'income' | 'outcome';

    constructor({ title, value, type }: Omit<Transaction, 'id'>) {
        this.id = uuid();
        this.title = title;
        this.value = value;
        this.type = type;
    }
}

export default Transaction;
