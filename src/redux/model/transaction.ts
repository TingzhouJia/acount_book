export default interface Transaction{
    type: string,
    subtype: string,
    date_transacted: string,
    date_posted: string,
    currency: string,
    amount:number ,
    description: string
        
}