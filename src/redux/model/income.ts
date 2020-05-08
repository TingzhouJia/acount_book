export default interface Income{
    income_streams:IncomeStream[],
    last_year_income:number,
    last_year_income_before_tax:number,
    max_number_of_overlapping_income_streams:number,
    number_of_income_streams:number,
    projected_yearly_income:number,
    projected_yearly_income_before_tax:number
}
export interface IncomeStream{
    confidence:number,
    days:number,
    monthly_income:number,
    name:string
}