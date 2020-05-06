import Account from "./account";
import Item from "./item";

export default interface Identity{
    accounts:Account[]
    items:Item
}