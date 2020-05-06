import Base from "./base";

export interface DailyPay extends Base{
    description:string,
    type:string,
    duration:string,
    payment:number,
    tags?:string[]
}