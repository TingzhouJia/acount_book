import Base from "./base";

export default interface Transaction extends Base{
    subtype: string,
    date_transacted: string,
    date_posted: string,
    currency: string,
    amount:number ,
    description: string
        
}