import Balance from "./balance";
import Owner from "./owner";

export default interface Account{
    account_id:string,
    balance:Balance,
    mask:string,
    name:string,
    official_name:string,
    owners:Owner[]
    subtype:string,
    type:string
}