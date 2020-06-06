import { Address } from './Address';

export interface Shipping {
    address: Address;
    object?: string;
    id?: number;
    name: string;
    fee: number;
    delivery_date: string;
    expedited: boolean;
}