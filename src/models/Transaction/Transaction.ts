import { Customer } from './Customer';
import { Billing } from './Billing';
import { Shipping } from './Shipping';
import { Item } from './Item';
import { Card } from './Card';
import { Metadata } from './Metadata';
import { AntifraudMetadata } from './AntifraudMetadata';

export interface Transaction {
    object?:string;
    status?:string;
    refse_reason?:any;
    status_reason?:string;
    acquirer_response_code?:string;
    acquirer_name?:string;
    acquirer_id?:string;
    authorization_code?:string;
    soft_descriptor?:any;
    tid?:number;
    nsu?:number;
    date_created?:Date;
    date_updated?:Date;
    amount:number;
    authorized_amount?:number;
    paid_amount?:number;
    refunded_amount?:number;
    installments?:number;
    id?:number;
    cost?:number;
    card_holder_name:string;
    card_last_digits?:string;
    card_first_digits?:string;
    card_brand?:string;
    card_pin_mode?:any;
    postback_url?:any;
    payment_method?:string;
    capture_method?:string;
    antifraud_score?:any;
    boleto_url?:any;
    boleto_barcode?:any;
    boleto_expiration_date?:any;
    referer?:string;
    ip?:string;
    subscription_id?:any;
    phone?:any;
    address?:any;
    customer:Customer;
    billing:Billing;
    shipping:Shipping;
    items:Item[];
    card?:Card;
    split_rules?:any;
    metadata?:Metadata;
    antifraud_metadata?:AntifraudMetadata;
    reference_key?:any;
    card_number?:string;
    card_cvv?:string;
    card_expiration_date?:string;
}