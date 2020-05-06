import Balance from "./balance";

export default interface Account{
    account_id:string,
    balance:Balance,
    mask:string,
    name:string,
    official_name:string,
    subtype:string,
    type:string
}