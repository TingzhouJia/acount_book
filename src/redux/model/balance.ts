import Account, { AccountEach } from "./account";
import Item from "./item";

export default interface Balance {
    accounts: AccountEach[] | null,
    item: Item[]

}
export interface BalanceEach {
    available: number,
    current: number,
    iso_currency_code: string,
    limit?: number,
    unofficial_currency_code?: string,
}