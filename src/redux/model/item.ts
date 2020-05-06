export default interface Item{
    available_products:string[],
    billed_products:string[],
    consent_expiration_time?:string,
    error?:string,
    institution_id:string,
    item_id:string,
    webhook:string
}