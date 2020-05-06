import Products from "./product";
import Item from "./item";

export default interface ItemManage{
    item:Item,
    products:Products[],
    routing_numbers:string[],
    oauth:string,
    name:string,
    mfa_code_type:string,
    
}


export interface Credential{
    label:string,
    type:string,
    name:string
}