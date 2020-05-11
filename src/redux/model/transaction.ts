import Base from "./base";
import { AccountEach } from "./account";
import Item from "./item";

export default interface Transaction {
    accounts: AccountEach[],
    item: Item,
    transactions: TransactionEach[],
    total_transaction: number,



}



export interface TransactionEach {
    account_id: string,
    account_owner: string | null,
    authorized_date: string | null,
    category: string[],
    category_id: string,
    date: string,
    name: string,
    iso_currency_code: string,
    payment_channel: string,
    payment_meta: PaymentMeta | null
    amount: number,
    pending: boolean,
    pending_transaction_id:null|string
    unofficial_currency_code:string |null,
    transaction_type:string,
    transaction_id:string,
    transaction_code:string|null,
    location:null|MyLocation
}

export interface PaymentMeta {
    by_order_of: string | null,
    payee: string | null,
    payer: string | null,
    payment_method: string | null,
    payment_processor: string | null,
    ppd_id: string | null,
    reason: string | null,
    reference_number: number | null
}
export interface MyLocation{
    address: null|string,
    city: null|string,
    country: null|string,
    lat: null|number,
    lon: null|number,
    postal_code: null|string,
    region: null|string,
    store_number: null|number
}