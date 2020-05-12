export default interface Owner{
    addresses:{primary:boolean,data:Address}[],
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

export function getAddress(address:Address):string{
    return   `${address.street},${address.city},${address.region}`
}