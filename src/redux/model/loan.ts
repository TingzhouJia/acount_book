import Base from "./base";


export default interface Loan extends Base{
    subtype:string,
    liatype:string,
    origination_date:string,
    principal:number,
    nominal_apr:number,
    loan_name:string,
    non_repayment_months:number,
    repayment_months:number,
    repayment_type:string
}