import { Address } from './Address';

export interface Billing {
    address: Address;
    object?: string;
    id?: number;
    name: string;
}