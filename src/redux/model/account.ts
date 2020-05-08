import Balance, { BalanceEach } from "./balance";
import Owner from "./owner";
import Item from "./item";

export default interface Account{
    accounts:AccountEach[],
    item:Item
}
export  interface AccountEach{
    account_id:string,
    balances:BalanceEach,
    mask:string,
    name:string,
    official_name:string,
    owners:Owner[]
    subtype:string,
    type:string
}