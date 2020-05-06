import Base from "./base";

export default interface Card extends Base{
    
    type:string,
    start_balance?:number,
    subtype:string,
    name:string,
    currency?:string,
    official_name?:string,
    account?:string,
    ach_routing?:string
    ach_wire_routing?:string,
    limit?:number
}