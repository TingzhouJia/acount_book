export default interface Balance {
    available:number,
    current:number,
    iso_currency_code:string,
    limit?:number,
    unofficial_currency_code?:string,

}