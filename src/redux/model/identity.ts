import Account, { AccountEach } from "./account";
import Item from "./item";

export default interface Identity{
    accounts:AccountEach[]
    items:Item
}