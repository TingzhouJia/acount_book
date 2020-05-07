export  interface HoldingEach{
    account_id:string,
    cost_basis:number,
    institution_price:number,
    institution_price_as_of?:string,
    institution_value:number,
    iso_currency_code:string,
    quantity:number,
    security_id:string,
    unofficial_currency_code?:string
}
export default interface Holding{
    accounts:Account[]|null,
    holdings:HoldingEach[]|null
}