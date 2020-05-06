export default interface Owner{
    address:{primary:boolean,data:Address}[],
    emails:Contact[],
    names:string[],
    phone_numbers:Contact[],
    
}

export interface Address{
    city: string,
    country:string,
    postal_code:string,
    region:string,
    street:string,
    
}


export interface Contact{
    data:string,
    primary:boolean,
    type:string
}