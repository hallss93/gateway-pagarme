export interface Customer {
    object?: string;
    id?: number;
    external_id: string;
    type: string;
    country: string;
    document_number?: any;
    document_type?: string;
    name: string;
    email: string;
    phone_numbers: string[];
    born_at?: any;
    birthday: string;
    gender?: any;
    date_created?: Date;
    documents: Document[];
}
